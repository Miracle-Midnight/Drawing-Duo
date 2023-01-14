import React, { useState, useEffect, useRef } from "react";
import "./userState.css";

const UserState = ({ name }: any) => {
  const [isMicOn, setisMicOn] = useState(false);

  const toggleMicHandler = () => {
    // isMicOn의 상태를 변경하는 메소드를 구현
    setisMicOn(!isMicOn);
  };

  return (
    <div className="shadow rounded-2xl bg-white p-4 py-3 my-2">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className=" flex flex-col">
          <span className="text-lg font-medium text-gray-600 text-center">
            {name}
          </span>
          <div className="flex flex-row">
            <button
              onClick={toggleMicHandler}
              className={`text-s p-1 text-gray-100 px-5 text-center  rounded-lg shadow-md focus:outline-none focus:ring-2  ${
                isMicOn ? "active bg-purple-600" : "bg-gray-600"
              }`}
            >
              {isMicOn ? "mic on" : "mic off"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserState;
