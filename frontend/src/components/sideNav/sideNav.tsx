import "./sideNav.css";
import logoSmall from "../../assets/logo-small.png";
import { useState } from "react";
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

// interface Props {
//   isHintImageOn: boolean;
//   setisHintImageOn: Dispatch<SetStateAction<boolean>>;
// }

function SideNav({ users, Image }: { users: any; Image: string }) {
  const navigate = useNavigate();

  const [isHintImageOn, setisHintImageOn] = useState(false);
  const [isChatOn, setisChatOn] = useState(false);

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full  left-0 border border-purple-800  z-50">
      <nav className="flex flex-col justify-between w-20 h-screen bg-white ">
        <div className="flex justify-center pt-3">
          <img
            onClick={handleExit}
            src={logoSmall}
            alt="logo"
            width="45px"
          ></img>
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
          <div className="side-nav mt-10">
            <ul>
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

              <li className="my-12 text-center" onClick={handleExit}>
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    <CloseButtonElem></CloseButtonElem>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
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
