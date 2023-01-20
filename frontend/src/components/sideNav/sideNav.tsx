import "./sideNav.css";
import logoSmall from "../../assets/logo-small.png";
import { useState } from "react";
import InGamePlayer from "../inGamePlayer/inGamePlayer";
import HintImage from "../hintImage/hintImage";
import ChatList from "../chatList/chatList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MicOnElem from "./sideNavElems/micElems/micOnElem";
import MicOffElem from "./sideNavElems/micElems/micOffElem";
import SoundOnElem from "./sideNavElems/soundElems/soundOnElem";
import SoundOffElem from "./sideNavElems/soundElems/soundOffElem";

// interface Props {
//   isHintImageOn: boolean;
//   setisHintImageOn: Dispatch<SetStateAction<boolean>>;
// }

function SideNav({ users, Image }: { users: any; Image: string }) {
  const navigate = useNavigate();

  const [isMicOn, setisMicOn] = useState(false);
  const [isSoundOn, setisSoundOn] = useState(false);
  const [isHintImageOn, setisHintImageOn] = useState(false);
  const [isChatOn, setisChatOn] = useState(false);

  const toggleMicHandler = () => {
    // isMicOn의 상태를 변경하는 메소드를 구현
    setisMicOn(!isMicOn);
  };
  const toggleSoundHandler = () => {
    setisSoundOn(!isSoundOn);
  };
  const toggleHintImageHandler = () => {
    setisHintImageOn(!isHintImageOn);
  };
  const toggleChatHandler = () => {
    setisChatOn(!isChatOn);
  };

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
              <li
                className="my-12 text-center"
                onClick={toggleHintImageHandler}
              >
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    <svg
                      className="m-auto"
                      fill={isHintImageOn ? "rgb(219,0,255)" : "currentColor"}
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>image</title>
                      <path d="M30 2.75h-28c-0.69 0-1.25 0.56-1.25 1.25v0 24c0 0.037 0.018 0.068 0.021 0.104 0.020 0.173 0.067 0.33 0.137 0.474l-0.004-0.009c0.040 0.074 0.083 0.137 0.132 0.196l-0.002-0.002c0.053 0.069 0.111 0.129 0.174 0.183l0.002 0.001c0.028 0.023 0.043 0.055 0.073 0.076 0.042 0.025 0.091 0.050 0.142 0.071l0.008 0.003c0.035 0.021 0.078 0.042 0.122 0.061l0.008 0.003c0.129 0.053 0.278 0.085 0.435 0.088l0.002-0 0 0h28c0.69-0.001 1.249-0.56 1.25-1.25v-24c-0-0.69-0.56-1.25-1.25-1.25h-0zM28.75 5.25v12.62l-5.709-8.563c-0.24-0.318-0.617-0.521-1.041-0.521s-0.801 0.203-1.039 0.518l-0.002 0.003-7.243 10.865-3.935-3.148c-0.212-0.17-0.484-0.273-0.781-0.273-0.422 0-0.796 0.209-1.022 0.529l-0.003 0.004-4.726 6.751v-18.784zM4.401 26.75l4.859-6.941 3.959 3.168c0.209 0.171 0.478 0.274 0.772 0.274 0.071 0 0.14-0.006 0.208-0.018l-0.007 0.001c0.356-0.056 0.656-0.256 0.846-0.537l0.003-0.004 6.96-10.439 6.75 10.126v4.37zM8 13.25c1.795 0 3.25-1.455 3.25-3.25s-1.455-3.25-3.25-3.25c-1.795 0-3.25 1.455-3.25 3.25v0c0.002 1.794 1.456 3.248 3.25 3.25h0zM8 9.25c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75v0c0.001-0.414 0.336-0.749 0.75-0.75h0z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li className="my-12 text-center" onClick={toggleMicHandler}>
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    {isMicOn === false ? <MicOffElem /> : <MicOnElem />}
                  </span>
                </a>
              </li>
              <li className="my-12 text-center" onClick={toggleSoundHandler}>
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    {isSoundOn === false ? <SoundOffElem /> : <SoundOnElem />}
                  </span>
                </a>
              </li>

              <li className="my-12 text-center" onClick={toggleChatHandler}>
                <a href="#">
                  <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlSpace="preserve"
                      width="20"
                      height="20"
                      version="1.1"
                      fill="currentColor"
                      className="m-auto"
                      viewBox="0 0 493 511.77"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer" />
                        <title>chat</title>
                        <path
                          fill={
                            isChatOn === false
                              ? "currentColor"
                              : "rgb(219,0,255)"
                          }
                          fillRule="nonzero"
                          d="M129.11 458.2l82.5 -79.1c3.09,-3 7.08,-4.47 11.08,-4.45l228.6 -0.08c2.67,0 5.09,-1.08 6.78,-2.77 1.74,-1.81 2.84,-4.24 2.84,-6.87l0 -323.2c0,-2.59 -1.12,-5 -2.86,-6.74 -1.78,-1.78 -4.2,-2.9 -6.76,-2.9l-409.56 0c-2.54,0 -4.94,1.14 -6.72,2.92 -1.78,1.78 -2.92,4.18 -2.92,6.72l0 323.2c0,2.57 1.12,5.02 2.88,6.78l0.53 0.55c1.68,1.42 3.88,2.31 6.23,2.31l71.34 0c8.85,0 16.04,7.2 16.04,16.04l0 67.59zm-5.4 -229.77c10.9,0 19.74,8.85 19.74,19.74 0,10.89 -8.84,19.73 -19.74,19.73 -10.89,0 -19.73,-8.84 -19.73,-19.73 0,-10.89 8.84,-19.74 19.73,-19.74zm0 -101.14c10.9,0 19.74,8.85 19.74,19.74 0,10.89 -8.84,19.74 -19.74,19.74 -10.89,0 -19.73,-8.85 -19.73,-19.74 0,-10.89 8.84,-19.74 19.73,-19.74zm61.72 138.89c-9.95,0 -18.02,-8.07 -18.02,-18.01 0,-9.95 8.07,-18.02 18.02,-18.02l185.56 0c9.95,0 18.01,8.07 18.01,18.02 0,9.94 -8.06,18.01 -18.01,18.01l-185.56 0zm0 -101.13c-9.95,0 -18.02,-8.07 -18.02,-18.02 0,-9.94 8.07,-18.01 18.02,-18.01l185.56 0c9.95,0 18.01,8.07 18.01,18.01 0,9.95 -8.06,18.02 -18.01,18.02l-185.56 0zm43.62 241.61l-103.97 99.69c-2.96,3.32 -7.24,5.42 -12.01,5.42 -8.85,0 -16.05,-7.2 -16.05,-16.04l0 -89.07 -55.29 0c-10.83,0 -20.76,-4.28 -28.19,-11.12l-1.26 -1.14c-7.56,-7.56 -12.28,-18.05 -12.28,-29.47l0 -323.2c0,-11.4 4.77,-21.88 12.31,-29.42 7.54,-7.54 18.02,-12.31 29.42,-12.31l409.56 0c11.4,0 21.9,4.74 29.45,12.29 7.5,7.51 12.26,17.96 12.26,29.44l0 323.2c0,11.48 -4.7,21.95 -12.24,29.49 -7.61,7.54 -18.05,12.24 -29.47,12.24l-222.24 0z"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </li>
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
      {/* {isChatOn === true ? (
        <div>
          <ChatList></ChatList>
        </div>
      ) : (
        <div className="hidden">
          <ChatList></ChatList>
        </div>
      )} */}

      {isHintImageOn === true ? <HintImage Image={Image}></HintImage> : null}
    </div>
  );
}

export default SideNav;
