/* library */
import { useEffect, useState } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";

import { DrawTools } from "../../components/drawTools/drawContainer";
import { Palette } from "../../components/palette/palette";
import { VoiceChat } from "../../components/voiceChat/voiceChat";
import axios from "axios";
import { Canvas } from "../../components/canvas/canvas";

const colors = [
  {
    red: 229,
    green: 231,
    blue: 235,
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
    red: 23,
    green: 20,
    blue: 100,
  },
  {
    red: 5,
    green: 150,
    blue: 200,
  },
];

function InGame() {
  // const [Image, setImage] = useState<string>("");
  // const [frameImage, setFrameImage] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  // const [color, setColor] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/api/game/" + sessionStorage.getItem("roomId"))
  //     .then((res) => {
  //       setFrameImage(res.data.data.frameImage);
  //       setImage(res.data.data.originImage);
  //       setUsers(res.data.data.usersName);
  //       setColor(res.data.data.rgb);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="grid grid-cols-10 overflow-y-hidden w-full">
      <div className="col-span-1 h-full">
        <SideNav
          users={users}
          Image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QPTO0dfQhrhSVMfjUTjj-7uh1zyqNnjYCg&usqp=CAU"
          }
        />
      </div>

      <div className="col-span-8 h-full">
        <Canvas
          frameImage={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjm4-o47252sQwPAHTJzKXz1qm2t8lxEU3g&usqp=CAU"
          }
        />
        <DrawTools />
      </div>

      <div className="col-span-1 h-full">
        <Palette colors={colors} />
      </div>
    </div>
  );
}

export default InGame;
