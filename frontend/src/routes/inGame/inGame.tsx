/* library */
import { useState, useEffect } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";

import { DrawTools } from "../../components/drawTools/drawTools";
import { Palette } from "../../components/palette/palette";
import axios from "axios";
import { Canvas } from "../../components/canvas/canvas";
import VoiceChat from "../../components/voiceChat/voiceChat";
import * as HtmlToImage from "html-to-image";
// const toImage = HtmlToImage.toImage as any;

function InGame() {
  const [Image, setImage] = useState<string>("");
  const [frameImage, setFrameImage] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  const [color, setColor] = useState([]);
  const [isExit, setisExit] = useState(false);

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
        <SideNav users={users} Image={Image} setIsExit={setisExit} />
        {/* <DrawTools /> */}
      </div>

      <div className="col-span-11 h-screen">
        <Canvas frameImage={frameImage} isExit={isExit} />
      </div>

      {/* <div className="col-span-1">
        <Palette colors={color} />
      </div> */}
      <VoiceChat />
    </div>
  );
}

export default InGame;
