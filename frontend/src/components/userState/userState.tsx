import React, { useEffect, useRef } from "react";
import "./userState.css";

const UserState = ({name, state}: any) => {
  return (
    <div className="shadow rounded-2xl bg-white p-4">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className="flex-shrink-0">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="https://blog.kakaocdn.net/dn/upM3J/btq7ys3tudB/axLzJnkfCbDRae9OzcmZsK/img.jpg"
              className="mx-auto object-cover rounded-full h-16 w-16 "
            />
          </a>
        </div>
        <div className=" flex flex-col">
          <span className="text-lg font-medium text-gray-600 ">{name}</span>
          <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
            {state}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserState;
