import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./result.css";
import Canvas from "../../components/canvas/canvas";

function Result() {
  return (
    <Container className="center">
      <div className="flex items-center justify-center  mr-20">
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
              <p className="text-2xl font-bold text-gray-900 uppercase text-center">
                잘 따라 그리셨나요?
              </p>
            </div>
            <div className="prod-img">
              <img
                src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-row">
          <div className="shadow p-3 rounded-md mr-3 items-center justify-center">
            <div className="flex items-center justify-center w-80">
              <div className="w-full p-4">
                <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                  <div className="prod-title">
                    <p className="text-2xl font-bold text-gray-900 uppercase text-center"></p>
                  </div>
                  <div className="prod-img">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                      className="object-cover object-center w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="shadow rounded-2xl bg-white  p-4">
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
                    <span className="text-lg font-medium text-gray-600 ">
                      Charlie
                    </span>
                    <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
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
                    <span className="text-lg font-medium text-gray-600 ">
                      Charlie
                    </span>
                    <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-3 rounded-md ml-3">
            <div className="flex items-center justify-center w-80">
              <div className="w-full p-4">
                <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                  <div className="prod-title">
                    <p className="text-2xl font-bold text-gray-900 uppercase text-center"></p>
                  </div>
                  <div className="prod-img">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                      className="object-cover object-center w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="shadow rounded-2xl bg-white  p-4">
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
                    <span className="text-lg font-medium text-gray-600 ">
                      Charlie
                    </span>
                    <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-2xl bg-white  p-4">
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
                    <span className="text-lg font-medium text-gray-600 ">
                      Charlie
                    </span>
                    <span className="text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat mt-3">
          <div className="chat-container">
            <div className="container flex flex-col items-center justify-center w-full mx-auto">
              <ul className="flex flex-col p-0 w-full">
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CTO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CTO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CTO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CTO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center font-light items-center justify-center">
            <form className="flex flex-col justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className="relative">
                <input
                  type="text"
                  id="form-subscribe-Subscribe"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-12 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
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
      </div>
    </Container>
  );
}

export default Result;
