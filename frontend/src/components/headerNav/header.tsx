import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/drawing-duo-logo-removebg.png";
import { Profile } from "../profile/profile";
import { OpenRoomMenu } from "../openRoomMenu/openRoomMenu";

function HeaderNav() {
  const navigate = useNavigate();
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleMenuToggle = useCallback(() => {
    isMenuToggle ? setIsMenuToggle(false) : setIsMenuToggle(true);
  }, [isMenuToggle]);

  const location = useLocation();

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <button className="flex-shrink-0" onClick={handleGoHome}>
                <img className="w-32" src={logo} alt="Workflow" />
              </button>

              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <ul className="flex flex-wrap -mb-px">
                  {location.pathname === "/" ? <OpenRoomMenu /> : null}
                </ul>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        // todo : 포커스가 사라지면 오버레이도 닫히게 만들기
                        onClick={handleMenuToggle}
                        className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </button>
                    </div>
                    {isMenuToggle ? <Profile /> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button className="text-gray-800  hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderNav;
