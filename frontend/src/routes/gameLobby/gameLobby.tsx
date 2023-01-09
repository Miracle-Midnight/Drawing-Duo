import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./gameLobby.css";
import Canvas from "../../components/canvas/canvas";
import UserState from "../../components/userState/userState";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function GameLobby() {
  const canvasSize = {
    width: "25rem",
    height: "90%",
  };

  // const [state, setState] = useState({ name: String, message: String });
  // const [chat, setChat] = useState([{ name: String, message: String }]);

  // useEffect(() => {
  //   // // todo : 받을대는 new_message
  //   // todo : 인수는 name, chat
  //   socket.on("new_message", ({ name, message }) => {
  //     setChat([...chat, { name, message }]);
  //   });
  // });

  // const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };

  // const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const { name, message } = state;
  //   // todo : 세션 스토리지에서 user id 가져오기
  //   // // todo : 보낼때는 submit_message로 보내기

  //   const userKey = sessionStorage.getItem("userKey");
  //   const userNickname: String | null = sessionStorage.getItem("userNickname");
  //   socket.emit("submit_message", { userKey, message });
  //   setState({ userNickname, message });
  // };
  // const renderChat = () => {
  //   return chat.map(({ name, message }, index) => (
  // <li className="flex flex-row mb-2 border-gray-400" key={index}>
  //   <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
  //     <div className="flex-1 pl-1 md:mr-16">
  //       <div className="font-medium">{name}</div>
  //       <div className="flex">
  //         <div className="text-xs text-gray-600 ">{message}</div>
  //       </div>
  //     </div>
  //     <div className="text-xs text-gray-600 ">6:00 AM</div>
  //   </div>
  // </li>
  //   ));
  // };

  return (
    <div className="center">
      <Container className="flex">
        <div className="pr-5">
          <Canvas style={canvasSize}></Canvas>
          <div className="flex w-full justify-between pt-3">
            <UserState name="이름" state="Ready"></UserState>
            <UserState name="이름" state="Ready"></UserState>
            <UserState name="이름" state="Ready"></UserState>
            <UserState name="이름" state="Ready"></UserState>
          </div>
          <div className="flex w-full justify-between pt-3"></div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="ml-64">
            <button
              className="px-4 w-30 py-2 ml-5 mb-3 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
              type="submit"
            >
              나가기
            </button>
          </div>
          <div className="chat mx-auto rounded-md w-full">
            <div className="container chatContent flex flex-col items-center justify-center w-full mx-auto">
              <ul className="chat-ul  overflow-y-auto flex flex-col overflow-auto chat-container w-full">
                {/* {renderChat()} */}
                
              </ul>

              <div className="w-full rounded-md">
                <div className="text-center font-light flex items-center justify-center">
                  <form
                    className="chat-form flex flex-col justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
                    // onSubmit={onMessageSubmit}
                  >
                    <div className=" relative ">
                      <input
                        type="text"
                        id="form-subscribe-Subscribe"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 pl-3 pr-20 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="채팅"
                        name="message"
                        // onChange={(e) => onTextChange(e)}
                        // value={state.message}
                      />
                    </div>
                    <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="submit"
                    >
                      보내기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div>
              <button
                className="px-4 w-96 py-2 ml-5 mb-6 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                type="submit"
              >
                Ready
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GameLobby;
