import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Modal,
} from "react-bootstrap"; // 꼭 import를 해와야한다
import "./lobby.css";

function Lobby() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showImage, setShowImage] = useState(false);

  const handleImageClose = () => setShowImage(false);
  const handleImageShow = () => setShowImage(true);
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
              data-modal-target="default"
              data-modal-toggle="defaultModal"
              className="px-4 w-full py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
              type="button"
              onClick={handleShow}
            >
              방만들기
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>방 만들기</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className=" relative mb-3">
                  <label className="text-gray-700">
                    방 제목
                    <span className="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="room"
                    placeholder="아무나 들어와~"
                  />
                </div>
                <div>
                  모드 선택
                  <span className="text-red-500 required-dot">*</span>
                </div>

                <div className="flex w-full my-1">
                  <button
                    type="submit"
                    className="py-2 px-4 ml-2 border border-gray-300 bg-white hover:bg-purple-700 focus:ring-purple-700 focus:bg-purple-700 focus:ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    픽 모드
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 ml-2 border border-gray-300 bg-white hover:bg-purple-700 focus:ring-purple-700 focus:bg-purple-700 focus:ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    랜덤 모드
                  </button>
                </div>
                <div>
                  공개 여부
                  <span className="text-red-500 required-dot">*</span>
                </div>

                <div className="flex w-full my-1">
                  <button
                    type="submit"
                    className="py-2 px-4 ml-2 border border-gray-300 bg-white hover:bg-purple-700 focus:ring-purple-700 focus:bg-purple-700 focus:ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    공개
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 ml-2 border border-gray-300 bg-white hover:bg-purple-700 focus:ring-purple-700 focus:bg-purple-700 focus:ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    비공개
                  </button>
                </div>
                <div className=" relative mb-3">
                  <label className="text-gray-700">
                    비밀번호
                    <span className="text-red-500 required-dot">*</span>
                  </label>
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="room"
                    placeholder="비밀번호 입력"
                  />
                </div>
                <div className="mt-3">사진</div>
                <InputGroup>
                  <Form.Control
                    placeholder="이미지"
                    // aria-label="이미지"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={handleImageShow}
                  >
                    이미지 선택
                  </Button>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer className="flex">
                <button
                  type="button"
                  className="py-2 px-4 text-white rounded-lg bg-gray-500 justify-center place-self-center"
                  onClick={handleClose}
                >
                  취소
                </button>

                <button
                  type="button"
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                  onClick={handleClose}
                >
                  방 만들기
                </button>
              </Modal.Footer>
            </Modal>

            <Modal show={showImage} onHide={handleImageClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>이미지 선택</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mt-3">선택한 사진</div>

                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                    className="ml-3 object-cover rounded-lg h-16 w-16 "
                  />
                </a>

                <div className="mt-3">추천 사진</div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className=" object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>

                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                  <div>
                    <a href="#" className="relative">
                      <img
                        alt="profil"
                        src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                        className="object-cover rounded-lg h-16 w-16 "
                      />
                    </a>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="flex">
                <button
                  type="button"
                  className="py-2 px-4 text-white rounded-lg bg-gray-500 justify-center place-self-center"
                  onClick={handleImageClose}
                >
                  이미지 업로드
                </button>

                <button
                  type="button"
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                  onClick={handleImageClose}
                >
                  선택 완료
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Lobby;
