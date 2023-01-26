/* library */
import { useState, useEffect } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";

import axios from "axios";
import { Canvas } from "../../components/canvas/canvas";
import VoiceChat from "../../components/voiceChat/voiceChat";
// import * as HtmlToImage from "html-to-image";
// const toImage = HtmlToImage.toImage as any;

function InGame() {
  const [Image, setImage] = useState<string>("");
  const [frameImage, setFrameImage] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    axios
      .get("/game/" + sessionStorage.getItem("roomId"))
      .then((res) => {
        setFrameImage(res.data.data.frameImage);
        setImage(res.data.data.originImage);
        setUsers(res.data.data.usersName);
        setColor(res.data.data.rgb);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full grid grid-cols-12 overflow-hidden w-full no-scroll">
      <div className="flex h-full">
        <SideNav users={users} Image={Image} />
      </div>

      <div className="col-span-11 h-screen">
        <Canvas frameImage={frameImage} />
      </div>

      <VoiceChat />
    </div>
  );
}

export default InGame;
