import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./lobby.css";

function Lobby() {
  return (
    <Container className="lobby-container flex flex-row">
      <div>
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 ">
            <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-start row-span-2">방 번호</div>
              <div className="row-start row-span-2">제목</div>
              <div className="row-end-3 row-span-2">모드</div>
              <div className="row-start-1 row-end-4">현재 인원</div>
            </h3>
          </div>
          <div className="room-container w-full">
            <ul className=" flex flex-col ">
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">Jean Marc</div>
                    <div className="text-sm text-gray-600 ">Developer</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">Jean Marc</div>
                    <div className="text-sm text-gray-600 ">Developer</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">Jean Marc</div>
                    <div className="text-sm text-gray-600 ">Developer</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">Jean Marc</div>
                    <div className="text-sm text-gray-600 ">Developer</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">Designer</div>
                    <div className="text-sm text-gray-600 ">Charlie Moi</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">CEO</div>
                    <div className="text-sm text-gray-600 ">Marine Jeanne</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400">
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">CTO</div>
                    <div className="text-sm text-gray-600 ">Boby PArk</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
                  <button className="flex justify-end w-24 text-right">
                    <svg
                      width="12"
                      fill="currentColor"
                      height="12"
                      className="text-gray-500 hover:text-gray-800  "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white shadow-lg rounded-2xl w-80 ">
          <img
            alt="profil"
            src="https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413__480.jpg"
            className="w-full mb-4 rounded-t-lg h-28"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="https://blog.kakaocdn.net/dn/upM3J/btq7ys3tudB/axLzJnkfCbDRae9OzcmZsK/img.jpg"
                className="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white "
              />
            </a>
            <p className="mt-2 text-xl font-medium text-gray-800 ">Charlie</p>
            <p className="mb-4 text-xs text-gray-400">Nantes</p>
            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              로그아웃
            </p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Articles
                  <span className="font-bold text-black ">34</span>
                </p>
                <p className="flex flex-col">
                  Followers
                  <span className="font-bold text-black ">455</span>
                </p>
                <p className="flex flex-col">
                  Rating
                  <span className="font-bold text-black ">9.3</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-50">
          <button
            className="px-4 w-full py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
            type="submit"
          >
            방만들기
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Lobby;
