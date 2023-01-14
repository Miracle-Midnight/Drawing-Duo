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
        <div className="flex-shrink-0">
          <a href="#" className="relative block xl:contents lg:hidden">
            <img
              alt="profil"
              src="https://blog.kakaocdn.net/dn/upM3J/btq7ys3tudB/axLzJnkfCbDRae9OzcmZsK/img.jpg"
              className="mx-auto object-cover rounded-full h-16 w-16 "
            />
          </a>
        </div>
        <div className=" flex flex-col">
          <span className="text-lg font-medium text-gray-600 ">{name}</span>
          {state === "lose" ? (
            <span className="text-s p-1 text-gray-100 text-center bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200">
              {state}
            </span>
          ) : (
            <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200">
              {state}
            </span>
          )}
          <button
            onClick={toggleMicrophone}
            className={`mic-button ${microphoneState ? "active" : ""}`}
          >
            <i className="fa fa-microphone" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserState;
