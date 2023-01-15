import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HeaderNav from "../../components/headerNav/header";
import Card from "../../components/card/card";
import "./intro.css";
import axios from "axios";

function Intro() {
  const [lobbyList, setLobbyList] = useState([]);

  useEffect(() => {
    sessionStorage.removeItem("roomId");
    sessionStorage.removeItem("roomTitle");

    axios
      .get("/api/lobby/" + sessionStorage.getItem("userid"))
      .then((res) => {
        console.log("야발!!!!!!" + res.data);
        // setLobbyList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <HeaderNav />
      <div className="text-center">
        <div className="text-4xl  font-bold text-purple-700 mt-20 mb-10">
          언제, 어디서든 다함께 그림을 만들어보아요!
        </div>
        <div className="text-xl  mb-20">
          <span className="text-purple-700">
            {sessionStorage.getItem("userNickname")}님
          </span>{" "}
          환영합니다. 멀리있는 친구, 연인과 같이 그림을 완성해봐요.
        </div>
      </div>
      <div className="flex flex-row whitespace-nowrap h-[500px] overflow-auto">
        <Card
          frameImageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
          roomId="1"
        ></Card>
        <Card
          frameImageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
          roomId="2"
        ></Card>
        {lobbyList.map((lobby: any) => {
          return (
            <Card
              imageSrc={lobby.image.image}
              frameImageSrc={lobby.image.frameImage}
              needTitle={true}
              title={lobby.title}
              roomId={lobby.roomid}
              users={lobby.user}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Intro;
