import React, { useEffect, useRef, useState } from "react";
import "./gameLobby.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import HeaderNav from "../../components/headerNav/header";
import UserState from "../../components/userState/userState";
import { io, Socket } from "socket.io-client";
import { Container } from "react-bootstrap";

function GameLobby() {
  const socketRef = useRef<Socket>();
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();

  const { roomId } = useParams();

  const [remoteNickname, setRemoteNickname] = useState<string>("");
  const [profileImageURL, setProfileImageURL] = useState<string>("");

  const getMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });

      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }
      if (!(pcRef.current && socketRef.current)) {
        return;
      }
      stream.getTracks().forEach((track) => {
        if (!pcRef.current) {
          return;
        }
        pcRef.current.addTrack(track, stream);
      });

      pcRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          if (!socketRef.current) {
            return;
          }
          console.log("recv candidate");
          socketRef.current.emit("candidate", e.candidate, roomId);
        }
      };

      pcRef.current.ontrack = (e) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };
    } catch (e) {
      console.error(e);
    }
  };

  const createOffer = async () => {
    console.log("create offer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      const sdp = await pcRef.current.createOffer();
      pcRef.current.setLocalDescription(sdp);
      console.log("sent the offer");
      socketRef.current.emit("offer", sdp, roomId);
    } catch (e) {
      console.error(e);
    }
  };

  const createAnswer = async (sdp: RTCSessionDescription) => {
    console.log("create answer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      pcRef.current.setRemoteDescription(sdp);
      const answerSdp = await pcRef.current.createAnswer();
      pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socketRef.current.emit("answer", answerSdp, roomId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:3000");

    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    socketRef.current.on("all_users", (allUsers: Array<{ id: string }>) => {
      if (allUsers.length > 0) {
        createOffer();
      }
    });
    socketRef.current.on("getOffer", (sdp: RTCSessionDescription) => {
      console.log("recv offer");
      createAnswer(sdp);
    });
    socketRef.current.on("getAnswer", (sdp: RTCSessionDescription) => {
      console.log("recv answer");
      if (!pcRef.current) {
        return;
      }
      pcRef.current.setRemoteDescription(sdp);
    });

    socketRef.current.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
    });
    socketRef.current.emit("join_room", {
      roomId: roomId,
      userId: socketRef.current.id,
    });

    socketRef.current.on("new_user", async (user: any) => {
      setRemoteNickname(user.profile.nickname);
      setProfileImageURL(user.profile.image.image);
    });

    getMedia();

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  //-----------------------------------------------------------------------------

  // useEffect(() => {
  //   axios
  //     .get("/api/room")
  //     .then((res) => {
  //       console.log(res.data);
  //       setImageList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const navigate = useNavigate();

  // const [imageList, setImageList] = React.useState([
  //   {
  //     imageid: 0,
  //     imageurl: "",
  //     imagename: "",
  //   },
  // ]);

  // const handleImageClick = (e: any) => {
  //   alert("이미지를 선택하셨습니다.");
  //   setIsClicked((prev) => {
  //     return parseInt(e.target.id);
  //   });
  // };

  const [isReady, setIsReady] = React.useState(false);

  const handleReady = () => {
    setIsReady(!isReady);
    navigate("/InGame");
  };

  const handleExitRoom = () => {
    axios
      .post("/api/lobby/out", {
        userid: sessionStorage.getItem("userKey"),
        roomid: sessionStorage.getItem("roomid"),
        imageid: sessionStorage.getItem("imageid"),
      })
      .then((res) => {
        sessionStorage.removeItem("roomid");
        sessionStorage.removeItem("imageid");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isClicked, setIsClicked] = useState<string>("");

  const imageList = [
    "https://blog.kakaocdn.net/dn/upM3J/btq7ys3tudB/axLzJnkfCbDRae9OzcmZsK/img.jpg",
    "https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg",
    "data:image/jpeg;base64,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",
    "https://item.kakaocdn.net/do/c620e34ce78db64b44ff1e422a35e2787154249a3890514a43687a85e6b6cc82",
    "https://item.kakaocdn.net/do/43319a30d6de449e135d3d14898a3d0e960f4ab09fe6e38bae8c63030c9b37f9",
  ];

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsClicked(e.currentTarget.id);
    socketRef.current?.emit("image", {
      id: e.currentTarget.id,
      src: imageList[parseInt(e.currentTarget.id)],
    });
  };

  useEffect(() => {}, [isClicked]);

  return (
    <div>
      <HeaderNav />
      <div className="text-2xl font-bold text-center my-10">
        이미지를 골라주세요
      </div>
      <div className="flex justify-evenly ">
        <div>
          <div className="image-container rounded-md border border-gray-400 grid grid-cols-2 overflow-auto mr-10">
            {imageList.map((image, idx) => (
              <div key={idx}>
                <Container>
                  <div className="flex items-center justify-center">
                    <div className="w-full p-1">
                      <div
                        id={idx.toString()}
                        onClick={handleImageClick}
                        className="flex flex-col justify-center bg-white rounded-lg shadow-2xl card"
                      >
                        {isClicked != idx.toString() ? (
                          <div className="prod-img flex justify-center">
                            <img src={image} className=" object-center w-80" />
                          </div>
                        ) : (
                          <div className="prod-img flex justify-center border border-primary border-5">
                            <img src={image} className=" object-center w-80" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between">
            <UserState
              name={sessionStorage.getItem("userNickname")}
              image={sessionStorage.getItem("profileImage")}
              state="On"
            ></UserState>
            <UserState
              name={remoteNickname}
              image={profileImageURL}
              state="On"
            ></UserState>
          </div>
          <button
            type="button"
            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            onClick={handleReady}
          >
            게임 시작
          </button>
        </div>
      </div>
      <div>
        <audio
          id="remotevideo"
          style={{
            width: 240,
            height: 240,
            backgroundColor: "black",
            display: "flex",
          }}
          ref={myVideoRef}
          autoPlay
        />
        <audio
          id="remotevideo"
          style={{
            width: 240,
            height: 240,
            backgroundColor: "black",
          }}
          ref={remoteVideoRef}
          autoPlay
        />
      </div>
    </div>
  );
}

export default GameLobby;
