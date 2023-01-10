import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./intro.css";


function Intro() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <div>
        <nav className="bg-white shadow">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="w-32"
                    src="https://github.com/Miracle-Midnight/Drawing-Duo/blob/feat/ksd/makeNewLayout/frontend/src/assets/drawing-duo-logo-removebg.png?raw=true"
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <a
                      className="text-gray-500  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Home
                    </a>
                    <a
                      className="text-gray-500   hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      방 만들기
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="flex items-center ml-4 md:ml-6">
                  <div className="relative ml-3">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
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
                      {isOpen && (
                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="#"
                              className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Settings</span>
                              </span>
                            </a>
                            <a
                              href="#"
                              className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Account</span>
                              </span>
                            </a>
                            <a
                              href="#"
                              className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Logout</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
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
    </Container>
  );
}

export default Intro;
