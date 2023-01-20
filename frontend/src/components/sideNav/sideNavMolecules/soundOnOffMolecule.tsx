import React, { useState } from "react";
import SoundOffElem from "../sideNavAtoms/soundElems/soundOffElem";
import SoundOnElem from "../sideNavAtoms/soundElems/soundOnElem";

function SoundOnOffMolecule() {
  const [isSoundOn, setisSoundOn] = useState(false);
  const toggleSoundHandler = () => {
    setisSoundOn(!isSoundOn);
  };
  return (
    <li className="my-12 text-center" onClick={toggleSoundHandler}>
      <a href="#">
        <span className="h-6 w-6 text-gray-500  mx-auto hover:text-gray-800  transition-colors duration-200">
          {isSoundOn === false ? <SoundOffElem /> : <SoundOnElem />}
        </span>
      </a>
    </li>
  );
}

export default SoundOnOffMolecule;
