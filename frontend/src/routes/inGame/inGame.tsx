/* library */
import { useEffect, useState } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";
import { useYjsProvider } from "../../hooks/useYjsProvider";
import { setYjs } from "../../states/yjsSlice";
import { useDispatch } from "react-redux";

import { DrawTools } from "../../components/drawTools/drawTools";
import { Palette } from "../../components/palette/palette";
import axios from "axios";
import { Canvas } from "../../components/canvas/canvas";
import VoiceChat from "../../components/voiceChat/voiceChat";

function InGame() {
  const [Image, setImage] = useState<string>("");
  const [frameImage, setFrameImage] = useState<string>("");
  const [users, setUsers] = useState<any>([]);
  const [color, setColor] = useState([]);

  const dispatch = useDispatch();
  const { yLines, provider, undoManager, doc, awareness } = useYjsProvider();

  dispatch(setYjs({ yLines, provider, undoManager, doc, awareness }));

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

    const { yLines, provider, undoManager, doc, awareness } = useYjsProvider();

    dispatch(setYjs({ yLines, provider, undoManager, doc, awareness }));
  }, []);
  return (
    <div className="h-full grid grid-cols-10 overflow-y-hidden w-full">
      <div className="flex h-full">
        <SideNav users={users} Image={Image} />
        <DrawTools />
      </div>

      <div className="col-span-8 h-screen">
        <Canvas frameImage={frameImage} />
      </div>

      <div className="col-span-1">
        <Palette colors={color} />
      </div>
      <VoiceChat />
    </div>
  );
}

export default InGame;
