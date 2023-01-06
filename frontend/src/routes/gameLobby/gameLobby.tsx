import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./gameLobby.css";
import Canvas from "../../components/canvas/canvas";

function Login() {
  return (
    <Container className="flex">
      <Canvas className=""></Canvas>
      <Canvas></Canvas>
      <div className="chat shadow mx-auto rounded-md w-full h-full">
        <div className="container flex flex-col items-center justify-center w-full mx-auto pt-11 pb-11">
          <ul className="flex flex-col">
            <li className="flex flex-row mb-2 border-gray-400">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium">Jean Marc</div>
                </div>
                <div className="text-xs text-gray-600 ">6:00 AM</div>
              </div>
            </li>
            <li className="flex flex-row mb-2 border-gray-400">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium">Designer</div>
                </div>
                <div className="text-xs text-gray-600 ">6:00 AM</div>
              </div>
            </li>
            <li className="flex flex-row mb-2 border-gray-400">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium">CEO</div>
                  <div className="flex">
                    <div className="text-xs text-gray-600 ">아아아아</div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-row mb-2 border-gray-400">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium">CTO</div>
                </div>
                <div className="text-xs text-gray-600 ">6:00 AM</div>
              </div>
            </li>
            <div className="w-full rounded-md">
              <div className="text-center font-light flex items-center justify-center">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="form-subscribe-Subscribe"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="채팅"
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
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Login;
