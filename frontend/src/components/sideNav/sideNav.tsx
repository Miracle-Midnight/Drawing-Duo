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
              
              <li className="my-12 text-center">
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 122.879 122.88"
                      xmlSpace="preserve"
                      fill="currentColor"
                      className="m-auto"
                      onClick={handleExit}
                    >
                      <g>
                        <path d="M8.773,0h105.332c2.417,0,4.611,0.986,6.199,2.574c1.589,1.588,2.574,3.783,2.574,6.199v105.333 c0,2.416-0.985,4.61-2.574,6.199c-1.588,1.588-3.782,2.574-6.199,2.574H8.773c-2.416,0-4.611-0.986-6.199-2.574 C0.986,118.717,0,116.522,0,114.106V8.773c0-2.417,0.986-4.611,2.574-6.199S6.357,0,8.773,0L8.773,0z M80.549,37.291 c1.391-1.392,3.647-1.392,5.039,0s1.392,3.648,0,5.04L66.479,61.439l19.109,19.109c1.392,1.392,1.392,3.647,0,5.04 c-1.392,1.392-3.648,1.392-5.039,0L61.439,66.479L42.33,85.589c-1.392,1.392-3.648,1.392-5.04,0c-1.392-1.393-1.392-3.648,0-5.04 l19.109-19.109L37.291,42.331c-1.392-1.392-1.392-3.648,0-5.04s3.648-1.392,5.04,0L61.439,56.4L80.549,37.291L80.549,37.291z M114.105,7.129H8.773c-0.449,0-0.859,0.186-1.159,0.485c-0.3,0.3-0.486,0.71-0.486,1.159v105.333c0,0.448,0.186,0.859,0.486,1.159 c0.3,0.299,0.71,0.485,1.159,0.485h105.332c0.449,0,0.86-0.187,1.159-0.485c0.3-0.3,0.486-0.711,0.486-1.159V8.773 c0-0.449-0.187-0.859-0.486-1.159C114.966,7.315,114.555,7.129,114.105,7.129L114.105,7.129z" />
                      </g>
                    </svg>
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
