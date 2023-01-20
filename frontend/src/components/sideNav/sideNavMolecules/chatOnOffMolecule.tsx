import React, { useState, Dispatch, SetStateAction } from "react";
import MicOffElem from "../sideNavAtoms/micElems/micOffElem";
import MicOnElem from "../sideNavAtoms/micElems/micOnElem";

interface Props {
  isChatOn: boolean;
  setisChatOn: Dispatch<SetStateAction<boolean>>;
}

// todo : 현재 useState가 부모에도 있고 자식에도 있음. 이를 해결해야함.
function ChatOnOffMolecule({ isChatOn, setisChatOn }: Props) {
  return (
    <li className="my-12 text-center" onClick={() => setisChatOn(!isChatOn)}>
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
                fill={isChatOn === false ? "currentColor" : "rgb(219,0,255)"}
                fillRule="nonzero"
                d="M129.11 458.2l82.5 -79.1c3.09,-3 7.08,-4.47 11.08,-4.45l228.6 -0.08c2.67,0 5.09,-1.08 6.78,-2.77 1.74,-1.81 2.84,-4.24 2.84,-6.87l0 -323.2c0,-2.59 -1.12,-5 -2.86,-6.74 -1.78,-1.78 -4.2,-2.9 -6.76,-2.9l-409.56 0c-2.54,0 -4.94,1.14 -6.72,2.92 -1.78,1.78 -2.92,4.18 -2.92,6.72l0 323.2c0,2.57 1.12,5.02 2.88,6.78l0.53 0.55c1.68,1.42 3.88,2.31 6.23,2.31l71.34 0c8.85,0 16.04,7.2 16.04,16.04l0 67.59zm-5.4 -229.77c10.9,0 19.74,8.85 19.74,19.74 0,10.89 -8.84,19.73 -19.74,19.73 -10.89,0 -19.73,-8.84 -19.73,-19.73 0,-10.89 8.84,-19.74 19.73,-19.74zm0 -101.14c10.9,0 19.74,8.85 19.74,19.74 0,10.89 -8.84,19.74 -19.74,19.74 -10.89,0 -19.73,-8.85 -19.73,-19.74 0,-10.89 8.84,-19.74 19.73,-19.74zm61.72 138.89c-9.95,0 -18.02,-8.07 -18.02,-18.01 0,-9.95 8.07,-18.02 18.02,-18.02l185.56 0c9.95,0 18.01,8.07 18.01,18.02 0,9.94 -8.06,18.01 -18.01,18.01l-185.56 0zm0 -101.13c-9.95,0 -18.02,-8.07 -18.02,-18.02 0,-9.94 8.07,-18.01 18.02,-18.01l185.56 0c9.95,0 18.01,8.07 18.01,18.01 0,9.95 -8.06,18.02 -18.01,18.02l-185.56 0zm43.62 241.61l-103.97 99.69c-2.96,3.32 -7.24,5.42 -12.01,5.42 -8.85,0 -16.05,-7.2 -16.05,-16.04l0 -89.07 -55.29 0c-10.83,0 -20.76,-4.28 -28.19,-11.12l-1.26 -1.14c-7.56,-7.56 -12.28,-18.05 -12.28,-29.47l0 -323.2c0,-11.4 4.77,-21.88 12.31,-29.42 7.54,-7.54 18.02,-12.31 29.42,-12.31l409.56 0c11.4,0 21.9,4.74 29.45,12.29 7.5,7.51 12.26,17.96 12.26,29.44l0 323.2c0,11.48 -4.7,21.95 -12.24,29.49 -7.61,7.54 -18.05,12.24 -29.47,12.24l-222.24 0z"
              />
            </g>
          </svg>
        </span>
      </a>
    </li>
  );
}

export default ChatOnOffMolecule;
