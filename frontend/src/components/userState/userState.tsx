import React, { useState, useEffect, useRef } from "react";
import "./userState.css";

const UserState = ({ name, state }: any) => {
  const [microphoneState, setMicrophoneState] = useState(false);

  const toggleMicrophone = () => {
    setMicrophoneState(!microphoneState);
  };

  return (
    <div className="shadow rounded-2xl bg-white p-4 py-3 my-2">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className=" flex flex-col">
          <span className="text-lg font-medium text-gray-600 text-center">
            {name}
          </span>
          <div className="flex flex-row gap-2">
            <span className="text-s p-1 text-gray-100 px-3 text-center bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200">
              on
            </span>
            <span className="text-s p-1 text-gray-100 px-3 text-center bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200">
              off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserState;
