import React, { useState, Dispatch, SetStateAction } from "react";
import MicOffElem from "../sideNavAtoms/micElems/micOffElem";
import MicOnElem from "../sideNavAtoms/micElems/micOnElem";

// todo : 현재 useState가 부모에도 있고 자식에도 있음. 이를 해결해야함.
function ImageOnOffMolecule({
  isHintImageOn,
  setisHintImageOn,
}: {
  isHintImageOn: boolean;
  setisHintImageOn: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <li
      className="my-12 text-center"
      onClick={() => setisHintImageOn(!isHintImageOn)}
    >
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
            viewBox="0 0 32 32"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>image</title>
            <path
              fill={isHintImageOn ? "rgb(219,0,255)" : "currentColor"}
              fillRule="nonzero"
              d="M30 2.75h-28c-0.69 0-1.25 0.56-1.25 1.25v0 24c0 0.037 0.018 0.068 0.021 0.104 0.020 0.173 0.067 0.33 0.137 0.474l-0.004-0.009c0.040 0.074 0.083 0.137 0.132 0.196l-0.002-0.002c0.053 0.069 0.111 0.129 0.174 0.183l0.002 0.001c0.028 0.023 0.043 0.055 0.073 0.076 0.042 0.025 0.091 0.050 0.142 0.071l0.008 0.003c0.035 0.021 0.078 0.042 0.122 0.061l0.008 0.003c0.129 0.053 0.278 0.085 0.435 0.088l0.002-0 0 0h28c0.69-0.001 1.249-0.56 1.25-1.25v-24c-0-0.69-0.56-1.25-1.25-1.25h-0zM28.75 5.25v12.62l-5.709-8.563c-0.24-0.318-0.617-0.521-1.041-0.521s-0.801 0.203-1.039 0.518l-0.002 0.003-7.243 10.865-3.935-3.148c-0.212-0.17-0.484-0.273-0.781-0.273-0.422 0-0.796 0.209-1.022 0.529l-0.003 0.004-4.726 6.751v-18.784zM4.401 26.75l4.859-6.941 3.959 3.168c0.209 0.171 0.478 0.274 0.772 0.274 0.071 0 0.14-0.006 0.208-0.018l-0.007 0.001c0.356-0.056 0.656-0.256 0.846-0.537l0.003-0.004 6.96-10.439 6.75 10.126v4.37zM8 13.25c1.795 0 3.25-1.455 3.25-3.25s-1.455-3.25-3.25-3.25c-1.795 0-3.25 1.455-3.25 3.25v0c0.002 1.794 1.456 3.248 3.25 3.25h0zM8 9.25c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75v0c0.001-0.414 0.336-0.749 0.75-0.75h0z"
            ></path>
          </svg>
        </span>
      </a>
    </li>
  );
}

export default ImageOnOffMolecule;
