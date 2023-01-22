import React, { useEffect, useState } from "react";
import "./gameLobby.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HeaderNav from "../../components/headerNav/header";
import UserState from "../../components/userState/userState";
import { ImageList } from "../../components/imageList/imageList";
import { Invite } from "../../components/invite/invite";
import { add } from "../../states/friendsSlice";
import VoiceChat from "../../components/voiceChat/voiceChat";
import { setStarted } from "../../states/gameStartSlice";
import { RootState } from "../../store";
import { useYjsProvider } from "../../hooks/useYjsProvider";
import { setYjs } from "../../states/yjsSlice";

function GameLobby() {
  const [remoteNickname, setRemoteNickname] = useState<string>("");
  const [friendsPick, setFriendsPick] = useState<string>("");
  const [myPick, setMyPick] = useState<string>("");
  const [imageId, setImageId] = useState<number>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/friend/" + sessionStorage.getItem("userid"))
      .then((res) => {
        dispatch(add(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //-----------------------------------------------------------------------------

  const handleReady = () => {
    if (myPick === friendsPick) {
      axios
        .post("/room", {
          roomid: sessionStorage.getItem("roomId"),
          imageid: imageId,
        })
        .catch((err) => {
          console.log(err);
        });
      dispatch(setStarted(true));
      navigate("/InGame/" + sessionStorage.getItem("roomId"));
      const { yLines, provider, undoManager, doc, awareness } =
        useYjsProvider();

      dispatch(setYjs({ yLines, provider, undoManager, doc, awareness }));
    } else {
      alert("모두 같은 이미지를 선택해 주세요!");
    }
  };

  const deleteRoom = () => {
    axios
      .post("/room/delete/" + sessionStorage.getItem("roomId"), {
        userId: sessionStorage.getItem("userid"),
      })
      .then((res) => {
        document.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <HeaderNav />
      <div className="text-2xl font-bold text-center my-10">
        이미지를 골라주세요
      </div>
      <div className="flex justify-evenly ">
        <ImageList
          friendsPick={friendsPick}
          setMyPick={setMyPick}
          setImageId={setImageId}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <UserState
              name={sessionStorage.getItem("userNickname")}
              image={sessionStorage.getItem("profileImage")}
              state="On"
            ></UserState>
            <UserState name={remoteNickname} state="On"></UserState>
          </div>
          <Invite />
          <button
            type="button"
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            onClick={deleteRoom}
          >
            뒤로 가기
          </button>
          <button
            type="button"
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            onClick={handleReady}
          >
            게임 시작
          </button>
        </div>
      </div>
      <VoiceChat
        setRemoteNickname={setRemoteNickname}
        setFriendsPick={setFriendsPick}
        myPick={myPick}
        imageId={imageId}
      />
    </div>
  );
}

export default GameLobby;
