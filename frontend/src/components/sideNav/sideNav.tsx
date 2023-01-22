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
import { DrawTools } from "../drawTools/drawTools";
import CloseRoomModal from "../closeRoomModal/closeRoomModal";

// interface Props {
//   isHintImageOn: boolean;
//   setisHintImageOn: Dispatch<SetStateAction<boolean>>;
// }

function SideNav({ users, Image }: { users: any; Image: string }) {
  const navigate = useNavigate();

  const [isHintImageOn, setisHintImageOn] = useState(false);
  const [isChatOn, setisChatOn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleExit = () => {
    // axios
    //   .post("/room/save/" + sessionStorage.getItem("roomId"), {
    //     userId: sessionStorage.getItem("userid"),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
              <li>
                <svg
                  width="25"
                  height="25"
                  className="m-auto"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="64" height="64" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1266_288"
                        transform="scale(0.015625)"
                      />
                    </pattern>
                    <image
                      id="image0_1266_288"
                      width="64"
                      height="64"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvklEQVR4nO2ba4hWRRjHf2brZldz+2BFhJUZRiAWFF20+pASRDfS7AqmVh/cLLKbxr6tGd0XI6moWHINtguYQde1O69FRX6IsItbUbkFFlFirmmdeOJ/YBjmnJbCmXd7zw+GPWeeeefynGeeec7sHKj414wFJgHTgAuBdmAp8BjwPFDjf8zZwJ9A5qXfgU3AZuCnIdSzCLiBYcilGvA1sgCzhDZHfqsU1FJSx92O4sxyhhVnqOMnFcjnS35wgXyp5A9pytj19QwjJqvT5xbIz5F8SkB2umSrgBHAbsCzwB/ACUNsf0/gFmA/EnGgBvEl8DnQ48lPlHxG4LfPAd8Aezl5Y4AfgN4htr9c9V9HInbXE+vXk7zckx+uDl4WeHLbNP9Dg9oCjPqHtqeq7Z3AByRkM7CiQLa3FGBe3uVI5c8N/OZKyQ4oadOsZiPwBbBY5a3OJHwCPFMi3wrc6+UdpE4vDJRfKJm7mvg8oKd/iuramTLeeB14u0Ru/mFlIP9b4NVA/gvAhpL6pmnwXU7eWuAzEtGrJ7BVnfN5D3glkH+bBnK0k3eE6rqjxPT75XDNj+RcIas5jgQsV+TXobDYZw2wPpDfJmf3FnCjUp+co60uIbo00F6F3bZcjtPqMQjcRwIWK9prLZA/CgwUyD4NhNEfl7T1NbA98JvfnPDbYoqozFUnDimQ3w7sUKDjMlrm3uGV3V4QOreonk6Zf272XXKyG6SEkUTmLHXkWGCfwEDbC5a1Kco/38mbrTzXL+SMl2yOp/hDdf+klsboHK+O7NBfPyaYVTCo/EVqopN3jPJmloTOpznW4j7xdVoNojNeHXtRIak7IONUr+M5HZoCLd60MH9yU6CdOarH2kORp60IOQPyN9EZrY6ZFw8xSXKzBJcngK8C5W0gjwTyO2VlucLqzhPfQ4ozh5yELSVLUJsUYL7AxYKn1wLl3ykIkHo8hQ3oFdo4Sm1cRCI2AqsVyPiM0Fxd5uXbm+C7wAXAyQprZ+nFxmL8kGLe8J74Et3PkALs7TMJdWdNtj0Cn02B+TkYWM/z9EtB6Nyt64kqd4nur9a9vRckYTXwHXBmQSCyXhukOSPV4WXy/NO1u2TX92iuu7QqbM5jhuneTtRdiiCjB0E5D2sjo4iX9U6Qs68GsCBQdpFk7n7ABG9f4SrviT+tqDIZnVrSiqKwlZ4DG6cBzAuUXSDZ/oG9R9sEMe7UFMqDrveBl0jAVG18PqUOXqt7P62Vieb3N6t8d6Bsj7OJkud1K2+J7s15/ujIf5Yfmu8oKQrbShxZqmR9ikam1+HDGiTlm6RRFVDT9eOxzS9ALaUC6sB5NLECWklPUgV8ry3tplVA1gD/Cq8UQGUBVFOAiGSVD6BygrWANTStE+ygiRVQK9gOaxoFNAKVAkhgAX3Ov7dTp74UCsgaMEVVQI3GofIBVBZANQWISFb5AP4+pNDXIKk/hQX0N7sCajQO1SpAZQFUU4CIZM3uA34NfAuQkvsLzhftMtYBH9I4fKTTZNGYJ5OzM76puVh9sUPUUT+aelPnddqH8KHTrmCUPrMZ1DnC6KfFx+gIXKb5V48Y+dXlhzJ9mJHs+0F0GHqFDk3HUoC19aAOZFfwH/gLAJNL/gWoPL8AAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>

                <DrawTools />
              </li>
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
                onClick={() => setModalShow(true)}
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
          modalShow={modalShow}
          onHide={() => setModalShow(false)}
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
