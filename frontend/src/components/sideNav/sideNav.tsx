import "./sideNav.css";
import logoSmall from "../../assets/logo-small.png";
import { useState, useEffect } from "react";
import InGamePlayer from "../inGamePlayer/inGamePlayer";
import HintImage from "../hintImage/hintImage";
import ChatList from "../chatList/chatList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MicOnElem from "./sideNavAtoms/micElems/micOnElem";
import MicOffElem from "./sideNavAtoms/micElems/micOffElem";
import SoundOnElem from "./sideNavAtoms/soundElems/soundOnElem";
import SoundOffElem from "./sideNavAtoms/soundElems/soundOffElem";
import MicOnOffMolecule from "./sideNavMolecules/micOnOffMolecule";
import SoundOnOffMolecule from "./sideNavMolecules/soundOnOffMolecule";
import ImageOnOffMolecule from "./sideNavMolecules/imageOnOffMolecules";
import ChatOnOffMolecule from "./sideNavMolecules/chatOnOffMolecule";
import CloseButtonElem from "./sideNavAtoms/closeButtonElem/closeButtonElem";
import { DrawTools } from "../drawTools/drawTools";
import CloseRoomModal from "../closeRoomModal/closeRoomModal";
import ToolsElem from "./sideNavAtoms/toolsElem/toolsElem";
import Pen from "../drawTools/pen";
import Eraser from "../drawTools/eraser";
import InputRange from "../inputRange/inputRange";
import Fill from "../drawTools/fill";
import Undo from "../drawTools/undo";
import Redo from "../drawTools/redo";
import { useLines } from "../../hooks/useLines";
import Palette from "../drawTools/palette";
import PaletteComponent from "../palette/palette";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { isExitt } from "../../states/isExitSlice";

// interface Props {
//   isHintImageOn: boolean;
//   setisHintImageOn: Dispatch<SetStateAction<boolean>>;
// }

function SideNav({ users, Image }: { users: any; Image: string }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isHintImageOn, setisHintImageOn] = useState(false);
  const [isChatOn, setisChatOn] = useState(false);
  const [modalshow, setmodalshow] = useState(false);
  const [isClickPen, setisClickPen] = useState(false);
  const [isSizeOn, setisSizeOn] = useState(false);
  const [isPaletteOn, setisPaletteOn] = useState(false);
  const [isClickEraser, setisClickEraser] = useState(false);
  const [isFillon, setisFillon] = useState(false);

  const togglePenHandler = () => {
    setisClickPen(true);
    setisSizeOn(!isSizeOn);
    setisClickEraser(false);
    setisFillon(false);
  };

  const toggleEraserHandler = () => {
    setisClickEraser(true);
    setisClickPen(false);
    setisFillon(false);
  };

  const toggleFillHandler = () => {
    setisFillon(true);
    setisClickPen(false);
    setisClickEraser(false);
  };

  const togglePaletteHandler = () => {
    setisPaletteOn(!isPaletteOn);
  };

  const goHome = () => {
    navigate("/");
  };

  const [color, setColor] = useState([]);

  useEffect(() => {
    axios
      .get("/game/" + sessionStorage.getItem("roomId"))
      .then((res) => {
        setColor(res.data.data.rgb);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { lines, startLine, addPointToLine, completeLine, undoLine, redoLine } =
    useLines();

  return (
    <div className="flex h-full  left-0 border border-purple-800  z-50">
      <nav className="flex flex-col justify-between w-20 h-screen bg-white ">
        <div className="flex justify-center pt-3">
          <img onClick={goHome} src={logoSmall} alt="logo" width="45px"></img>
        </div>
        <div className="side-nav">
          <ul className="flex flex-col justify-center pt-10">
            {/* <InGamePlayer name="나" /> */}
            {users.map((user: any, idx: number) => {
              <div key={idx}>
                <InGamePlayer name={user.nickname} />;
              </div>;
            })}
          </ul>
        </div>
        <div className="mt-10 mb-10">
          <div className="side-nav">
            <ul>
              <li className=" text-center">
                <div className="flex flex-col p-1 items-center border-t-2 border-b-2 border-gray-100">
                  <div className="relative">
                    <div onClick={togglePenHandler}>
                      <Pen isClickPen={isClickPen} />
                    </div>
                    <div onClick={toggleEraserHandler}>
                      <Eraser isClickEraser={isClickEraser} />
                    </div>
                    <div onClick={toggleFillHandler}>
                      <Fill isFillon={isFillon} />
                    </div>
                    <div onClick={togglePaletteHandler}>
                      <Palette isPaletteOn={isPaletteOn}></Palette>
                    </div>
                    <Undo undo={undoLine}></Undo>
                    <Redo redo={redoLine}></Redo>

                    <div
                      className={
                        isSizeOn === true
                          ? "absolute top-20 left-20 -rotate-90"
                          : "absolute top-20 left-20 -rotate-90 hidden"
                      }
                    >
                      <InputRange min={1} max={100} />
                    </div>
                    <div
                      className={
                        isPaletteOn === true
                          ? "absolute w-36 top-20 left-20"
                          : "absolute w-36 top-20 left-20 hidden"
                      }
                    >
                      <PaletteComponent colors={color} />
                    </div>
                  </div>
                </div>
              </li>
              <li className=" text-center"></li>

              <ImageOnOffMolecule
                isHintImageOn={isHintImageOn}
                setisHintImageOn={setisHintImageOn}
              />
              <MicOnOffMolecule />
              <SoundOnOffMolecule />
              <ChatOnOffMolecule
                isChatOn={isChatOn}
                setisChatOn={setisChatOn}
              />

              <li
                className="my-12 text-center"
                onClick={() => setmodalshow(true)}
              >
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    <CloseButtonElem></CloseButtonElem>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <CloseRoomModal
          show={modalshow}
          setModalShow={setmodalshow}
          onHide={() => setmodalshow(false)}
        />
      </nav>

      {isChatOn === true ? (
        <div>
          <ChatList></ChatList>
        </div>
      ) : (
        <div className="hidden">
          <ChatList></ChatList>
        </div>
      )}

      {isHintImageOn === true ? <HintImage Image={Image}></HintImage> : null}
    </div>
  );
}

export default SideNav;
