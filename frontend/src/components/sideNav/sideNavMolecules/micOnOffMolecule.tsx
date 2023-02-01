import React, { useState } from "react";
import MicOffElem from "../sideNavAtoms/micElems/micOffElem";
import MicOnElem from "../sideNavAtoms/micElems/micOnElem";

function MicOnOffMolecule() {
  const [isMicOn, setisMicOn] = useState(true);
  const toggleMicHandler = () => {
    // isMicOn의 상태를 변경하는 메소드를 구현
    setisMicOn(!isMicOn);
  };
  return (
    <li className="my-12 text-center" onClick={toggleMicHandler}>
      <a href="#">
        <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
          {isMicOn === false ? <MicOffElem /> : <MicOnElem />}
        </span>
      </a>
    </li>
  );
}

export default MicOnOffMolecule;
