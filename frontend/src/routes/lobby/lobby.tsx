import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./lobby.css";

function Lobby() {
  return (
    <Container className="lobby-container flex flex-row">
      <div>
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
              <div className="text-center">방 번호</div>
              <div className="text-center">제목</div>
              <div className="text-center">모드</div>
              <div className="text-center">현재 인원</div>
            </h3>
          </div>
          <div className="room-container w-full">
            <ul className=" flex flex-col ">
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
              <li className="flex flex-row mb-2 border-gray-400 ">
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">너만 오면 고</div>
                    <div className="text-center">픽 모드</div>
                    <div className="text-center">
                      <span>3</span>
                      <span>/</span>
                      <span>4</span>
                    </div>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex content-between">
        <div className="flex flex-col">
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
              <p className="mb-4 text-xs text-gray-400">나는야 그림왕</p>
              <button className="p-2 px-4 text-xs text-white bg-gray-500 rounded-full">
                로그아웃
              </button>
              <div className="pt-3">
                <button className="p-2 px-4 text-xs text-white bg-purple-500 rounded-full">
                  프로필 수정
                </button>
              </div>
              <div className="w-full p-2 mt-4 rounded-lg">
                <div className="flex items-center justify-between text-sm text-gray-800 "></div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <button
              className="px-4 w-full py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
              type="submit"
            >
              방만들기
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Lobby;
