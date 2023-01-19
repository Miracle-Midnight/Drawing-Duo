/* library */
import { useEffect, useState } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";

import { DrawTools } from "../../components/drawTools/drawContainer";
import PaletteComponent from "../../components/palette/palette";
import { VoiceChat } from "../../components/voiceChat/voiceChat";
import axios from "axios";

import { Canvas } from "../../components/canvas/canvas";

function InGame() {
  const [Image, setImage] = useState<string>("");
  const [frameImage, setFrameImage] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  const [color, setColor] = useState([]);
  useEffect(() => {
    axios
      .get("/api/game/" + sessionStorage.getItem("roomId"))
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
    <div className="flex flex-row h-screen">
      <SideNav users={users} Image={Image} />
      <div>
        <div className="">
          <div className="grid">
            <div className="flex justify-center border border-black relative">
              <div className="h-screen w-screen">
                <Canvas frameImage={frameImage}></Canvas>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
                <div className="w-30 h-10 shadow px-5">
                  <div>
                    <DrawTools />
                  </div>
                </div>
              </div>
              <PaletteComponent colors={color}></PaletteComponent>
            </div>
          </div>
        </div>
      </div>
      <VoiceChat />
    </div>
  );
}

export default InGame;
