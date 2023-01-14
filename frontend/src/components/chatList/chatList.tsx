import Chat from "../chat/chat";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:5000");

interface Chat {
  name: string;
  message: string;
}

function ChatList() {
  const [state, setState] = useState<Chat>({ message: "", name: "" });
  const [chat, setChat] = useState<Chat[]>([]);
  console.log(state);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) =>
      name === state.name ? (
        <Chat key={index} name={name} message={message} isYou={true}></Chat>
      ) : (
        <Chat key={index} name={name} message={message} isYou={false}></Chat>
      )
    );
  };
  return (
    <>
      <div className="absolute bottom-12 left-20 z-50 bg-gray-200 bg-opacity-50 ">
        <div className="relative">
          <div className="w-[350px] h-[400px] overflow-auto border ">
            <ul className="p-0 pt-3">
              {/* {chat.map(({ name, message }, index) => (
                <div key={index}>
                  dsfsd:{message}
                </div>
              ))} */}
              {renderChat()}
            </ul>
          </div>
          <div className="absolute -bottom-10 left-0 w-full h-10 bg-purple-100  border border-b-2 border-gray-200">
            <form onSubmit={onMessageSubmit} className="flex">
              <input
                className="w-full h-full p-2"
                type="text"
                name="message"
                onChange={(e) => onTextChange(e)}
                value={state.message}
              ></input>
              <input type="submit" value="" id="send-button"></input>
              <label
                htmlFor="send-button"
                className="m-auto text-purple-500  hover:text-purple-700"
              >
                <svg
                  width="20"
                  height="20"
                  className="w-10 m-auto"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    className=""
                    d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
