/* library */
import { useEffect, useState } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";

import { DrawTools } from "../../components/drawTools/drawContainer";
import InputRange from "../../components/inputRange/inputRange";
import ColorSection from "../../components/colorSection/colorSection";
import PaletteComponent from "../../components/palette/palette";
import { VoiceChat } from "../../components/voiceChat/voiceChat";
import axios from "axios";

const colors = [
  {
    red: 255,
    green: 0,
    blue: 0,
  },
  {
    red: 255,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
];

function InGame() {
  const [Image, setImage] = useState();
  const [users, setUsers] = useState<any>([]);
  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  useEffect(() => {
    axios
      .get("/api/game" + sessionStorage.getItem("roomId"))
      .then((res) => {
        console.log(res.data);
        setImage(res.data.data.frameImage);
        setUsers(res.data.data.usersName);
        // setColor(res.data.data.rgb);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-row h-screen">
      <SideNav users={users} />
      <div>
        <div className="">
          <div className="grid">
            <div className="flex justify-center border border-black relative">
              <svg className="h-screen w-screen">
                <image href={Image} width="100%" height="100%"></image>
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
                <div className="w-30 h-10 shadow px-5">
                  <div>
                    <DrawTools />
                  </div>
                </div>
              </div>
              <PaletteComponent colors={colors}></PaletteComponent>
            </div>
          </div>
        </div>
      </div>
      <VoiceChat />
    </div>
  );
}

export default InGame;
