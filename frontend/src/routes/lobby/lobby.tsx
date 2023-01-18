import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Modal, InputGroup, Button, Form } from "react-bootstrap";
import "./lobby.css";
import { useNavigate } from "react-router-dom";

// function Lobby(props: lobbyProps) {
function Lobby(props: any) {
  // App 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
  const isLogin: boolean = props.isLogin;
  const userid: string | null = sessionStorage.getItem("userKey");

  const [inputCheckPassword, setInputCheckPassword] = useState<string>(""); // 방 비밀번호 확인
  const [inputRoomName, setInputRoomName] = useState<string>(""); // 방 이름
  const [inputRoomPassword, setInputRoomPassword] = useState<string>(""); // 방 비밀번호
  const [isOpenRoom, setIsOpenRoom] = useState<boolean>(); // 방 공개여부
  const [modeSelect, setModeSelect] = useState<boolean>(); // 방 모드 선택
  const [isActiveCreateRoomModal, setIsActiveCreateRoomModal] = // 방 만들기 모달창
    useState<boolean>(false);
  const [isActiveSelectImageModal, setisActiveSelectImageModal] = // 방 만들기 시 이미지 선택 모달창
    useState<boolean>(false);
  const [roomData, setRoomData] = useState([]); // 페이지 로딩 시 받아온 방 정보 저장
  const [joinRoomData, setJoinRoomData] = useState([]); // 방에 입장 시 받아온 방 정보 저장
  const [joinRoomId, setJoinRoomId] = useState<string>(""); // 입장 할 방 id 저장
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(
    "https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
  );
  const [selectedImageId, setSelectedImageId] = useState<string>("");

  const [isActiveInputRoomPasswordModal, setIsActiveInputRoomPasswordModal] = // 방 비밀번호 입력 모달창
    useState<boolean>(false);
  const [
    isActiveJoinRoomSelectImageModal,
    setIsActiveJoinRoomSelectImageModal,
  ] = useState<boolean>(false); // 대기방 진입 시 이미지 선택 모달창

  const onClickCreateRoomModal = () => {
    setIsActiveCreateRoomModal(!isActiveCreateRoomModal);
  };

  const onClickSelectImageModal = () => {
    setisActiveSelectImageModal(!isActiveSelectImageModal);
  };

  useEffect(() => {}, [
    inputRoomName,
    modeSelect,
    isOpenRoom,
    inputRoomPassword,
    selectedImage,
    selectedImageId,
    joinRoomId,
    inputCheckPassword,
  ]);

  const handleJoinModal = (e: React.MouseEvent<HTMLLIElement>) => {
    roomData.map((room: any) => {
      if (room.id == e.currentTarget.id) {
        setJoinRoomId(room.id);
        setInputRoomName(room.title);
        setModeSelect(room.mode);
        setIsOpenRoom(room.status);
        if (room.status === false) {
          setInputRoomPassword(room.password);
        }

        if (room.status === false) {
          setIsActiveInputRoomPasswordModal(!isActiveInputRoomPasswordModal);
        } else if (room.status === true && room.mode === false) {
          setIsActiveJoinRoomSelectImageModal(
            !isActiveJoinRoomSelectImageModal
          );
        } else if (room.status === true && room.mode === true) {
          handleJoinRoom();
        }
      }
    });
  };

  const handleCheckingPassword = (e: React.MouseEvent<HTMLLIElement>) => {
    if (inputCheckPassword === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (inputCheckPassword === inputRoomPassword) {
      if (modeSelect === false) {
        setIsActiveJoinRoomSelectImageModal(!isActiveJoinRoomSelectImageModal);
      } else if (modeSelect === true) {
        handleJoinRoom();
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("userKey");
    sessionStorage.removeItem("userToken");

    document.location.href = "/";
  };

  const handleJoinRoom = () => {
    let usersession: string | number | null = sessionStorage.getItem("userKey");
    if (typeof usersession === "string") {
      usersession = parseInt(usersession);
    } else {
      alert("로그인을 해주세요.");
      return;
    }

    axios
      .post("/api/lobby/in", {
        userid: usersession,
        roomid: joinRoomId,
        imageid: selectedImageId,
        password: inputCheckPassword,
      })
      .then((res) => {
        navigate("/room/" + joinRoomId);
        sessionStorage.setItem("roomid", joinRoomId);
        sessionStorage.setItem("imageid", selectedImageId);
      })
      .catch((err) => {
        // navigate("/room/" + joinRoomId);
        alert("방에 참여할 수 없습니다.");
        console.log(err);
      });
  };

  const handleCreateRoom = () => {
    if (inputRoomName === "") {
      alert("방 이름을 입력해주세요.");
      return;
    }
    if (isOpenRoom) {
      if (modeSelect) {
        axios
          .post("/api/room/" + userid!, {
            title: inputRoomName,
            mode: modeSelect,
            status: isOpenRoom,
          })
          .then((res) => {
            sessionStorage.setItem("roomid", res.data.data.roomid);
            navigate("/room/" + res.data.data.roomid);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (!modeSelect) {
        axios
          .post("/api/room/" + userid!, {
            title: inputRoomName,
            mode: modeSelect,
            status: isOpenRoom,
            images: { id: selectedImageId, type: false, image: selectedImage },
          })
          .then((res) => {
            sessionStorage.setItem("roomid", res.data.data.roomid);
            navigate("/room/" + res.data.data.roomid);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (!isOpenRoom) {
      if (inputRoomPassword === "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (modeSelect) {
        axios
          .post("/api/room/" + userid!, {
            title: inputRoomName,
            mode: modeSelect,
            status: isOpenRoom,
            password: inputCheckPassword,
          })
          .then((res) => {
            sessionStorage.setItem("roomid", res.data.data.roomid);
            navigate("/room/" + res.data.data.roomid);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (!modeSelect) {
        axios
          .post("/api/room/" + userid!, {
            title: inputRoomName,
            mode: modeSelect,
            status: isOpenRoom,
            password: inputCheckPassword,
            images: { id: selectedImageId, type: false, image: selectedImage },
          })
          .then((res) => {
            sessionStorage.setItem("roomid", res.data.data.roomid);
            navigate("/room/" + res.data.data.roomid);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleInputRoomName = (e: any) => {
    setInputRoomName(e.target.value);
  };

  const handleOpenRoom = () => {
    setIsOpenRoom(true);
  };

  const handleCloseRoom = () => {
    setIsOpenRoom(false);
  };

  const handleRandomMode = () => {
    setModeSelect(true);
  };

  const handlePickMode = () => {
    setModeSelect(false);
  };

  const handleInputRoomPassword = (e: any) => {
    setInputRoomPassword(e.target.value);
  };

  const handleInputCheckRoomPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCheckPassword(e.target.value);
  };

  const handleCheckPasswordModal = () => {
    setIsActiveInputRoomPasswordModal(!isActiveInputRoomPasswordModal);
  };

  const handleJoinRoomSelectImageModal = () => {
    setIsActiveJoinRoomSelectImageModal(!isActiveJoinRoomSelectImageModal);
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/api/lobby")
        .then((res) => {
          setRoomData(res.data.data);
        })
        .catch();

      axios
        .get("/api/room")
        .then((res) => {
          setJoinRoomData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  const navigate = useNavigate();

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
              {roomData.map((room: any) => (
                <li
                  className="flex flex-row mb-2 border-gray-400 "
                  onClick={handleJoinModal}
                  key={room.id}
                  id={room.id}
                >
                  <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                      <div className="text-center">{room.id}</div>
                      <div className="text-center">{room.title}</div>
                      <div className="text-center">
                        {room.mode ? "랜덤 모드" : "픽 모드"}
                      </div>
                      <div className="text-center">
                        <span>3</span>
                        <span>/</span>
                        <span>4</span>
                      </div>
                    </h3>
                  </div>
                </li>
              ))}
              <li
                className="flex flex-row mb-2 border-gray-400 "
                onClick={handleJoinModal}
              >
                <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                    <div className="text-center">1</div>
                    <div className="text-center">ㅋㅋㅋㅋㅋㅋㅋㅋ</div>
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
              <p className="mt-2 text-xl font-medium text-gray-800 ">
                {sessionStorage.getItem("userNickname")}
              </p>
              <p className="mb-4 text-xs text-gray-400">나는야 그림왕</p>
              <button
                className="p-2 px-4 text-xs text-white bg-gray-500 rounded-full"
                onClick={onClickLogout}
              >
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
              onClick={onClickCreateRoomModal}
            >
              방만들기
            </button>
            <Modal
              show={isActiveCreateRoomModal}
              onHide={onClickCreateRoomModal}
              animation={false}
            >
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
                    onChange={handleInputRoomName}
                  />
                </div>
                <div>
                  모드 선택
                  <span className="text-red-500 required-dot">*</span>
                </div>

                <div className="flex w-full my-1">
                  <button
                    type="button"
                    className={
                      !modeSelect
                        ? "py-2 px-4 ml-2 border border-gray-300 bg-white ring-purple-700 ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none ring-2 ring-offset-2  rounded-lg "
                        : "py-2 px-4 ml-2 border border-gray-300 bg-white text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                    }
                    onClick={handlePickMode}
                  >
                    픽 모드
                  </button>
                  <button
                    type="button"
                    className={
                      modeSelect
                        ? "py-2 px-4 ml-2 border border-gray-300 bg-white ring-purple-700 ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none ring-2 ring-offset-2  rounded-lg "
                        : "py-2 px-4 ml-2 border border-gray-300 bg-white text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                    }
                    onClick={handleRandomMode}
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
                    type="button"
                    className={
                      isOpenRoom
                        ? "py-2 px-4 ml-2 border border-gray-300 bg-white ring-purple-700 ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none ring-2 ring-offset-2  rounded-lg "
                        : "py-2 px-4 ml-2 border border-gray-300 bg-white text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                    }
                    onClick={handleOpenRoom}
                  >
                    공개
                  </button>
                  <button
                    type="button"
                    className={
                      !isOpenRoom
                        ? "py-2 px-4 ml-2 border border-gray-300 bg-white ring-purple-700 ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none ring-2 ring-offset-2  rounded-lg "
                        : "py-2 px-4 ml-2 border border-gray-300 bg-white text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                    }
                    onClick={handleCloseRoom}
                  >
                    비공개
                  </button>
                </div>

                {!isOpenRoom && (
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
                      onChange={handleInputRoomPassword}
                    />
                  </div>
                )}
                {!modeSelect && (
                  <div>
                    <div className="mt-3">사진</div>
                    <InputGroup>
                      <Form.Control
                        type="image"
                        placeholder="이미지"
                        src={selectedImage?.toString()}
                        // aria-label="이미지"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        onClick={onClickSelectImageModal}
                      >
                        이미지 선택
                      </Button>
                    </InputGroup>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer className="flex">
                <button
                  type="button"
                  className="py-2 px-4 text-white rounded-lg bg-gray-500 justify-center place-self-center"
                  onClick={onClickCreateRoomModal}
                >
                  취소
                </button>

                <button
                  type="button"
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                  onClick={handleCreateRoom}
                >
                  방 만들기
                </button>
              </Modal.Footer>
            </Modal>
            <Modal
              show={isActiveSelectImageModal}
              onHide={onClickSelectImageModal}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>이미지 선택</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mt-3">선택한 사진</div>

                <div className="relative block">
                  <img
                    alt="profil"
                    src={selectedImage?.toString()}
                    className="ml-3 object-cover rounded-lg h-16 w-16 "
                  />
                </div>

                <div className="mt-3">추천 사진</div>
                <div className="grid grid-cols-4 gap-4">
                  {joinRoomData.map((image: any) =>
                    image.type === false ? (
                      <div key={image.id}>
                        <button className="relative">
                          <img
                            alt="profil"
                            src={image.image}
                            id={image.id}
                            onClick={() => {
                              setSelectedImage(image.image);
                              setSelectedImageId(image.id);
                            }}
                            className="object-cover rounded-lg h-16 w-16 "
                          />
                        </button>
                      </div>
                    ) : null
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer className="flex">
                <button
                  type="button"
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                  onClick={onClickSelectImageModal}
                >
                  선택 완료
                </button>
              </Modal.Footer>
            </Modal>
            {/* 대기방 진입 시 이미지선택--------------------------------------------------------------------------------- */}
            <Modal
              show={isActiveJoinRoomSelectImageModal}
              onHide={handleJoinRoomSelectImageModal}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>이미지 선택</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mt-3">선택한 사진</div>

                <div className="relative block">
                  <img
                    alt="profil"
                    src={selectedImage?.toString()}
                    className="ml-3 object-cover rounded-lg h-16 w-16 "
                  />
                </div>

                <div className="mt-3">추천 사진</div>
                <div className="grid grid-cols-4 gap-4">
                  {joinRoomData.map((image: any) =>
                    image.type === false ? (
                      <div key={image.id}>
                        <button className="relative">
                          <img
                            alt="profil"
                            src={image.image}
                            id={image.id}
                            onClick={() => {
                              setSelectedImage(image.image);
                              setSelectedImageId(image.id);
                            }}
                            className="object-cover rounded-lg h-16 w-16 "
                          />
                        </button>
                      </div>
                    ) : null
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer className="flex">
                <li
                  onClick={handleJoinRoom}
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                >
                  선택 완료
                </li>
              </Modal.Footer>
            </Modal>

            {/* 대기방 진입 시 비밀번호 입력 모달----------------------------------------------- */}
            <Modal
              show={isActiveInputRoomPasswordModal}
              onHide={handleCheckPasswordModal}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>비밀번호 입력</Modal.Title>
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
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInputCheckRoomPassword}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="flex">
                <li
                  onClick={handleCheckingPassword}
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                >
                  입력 완료
                </li>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Lobby;
