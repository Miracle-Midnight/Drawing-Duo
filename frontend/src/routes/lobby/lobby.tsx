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

  const [inputRoomName, setInputRoomName] = useState<string>("");
  const [isOpenRoom, setIsOpenRoom] = useState<boolean>(true);
  const [modeSelect, setModeSelect] = useState<boolean>(true);
  const [isActiveCreateRoomModal, setIsActiveCreateRoomModal] =
    useState<boolean>(false);
  const [isActiveSelectImageModal, setisActiveSelectImageModal] =
    useState<boolean>(false);
  const [roomData, setRoomData] = useState([]);

  const onClickCreateRoomModal = () => {
    setIsActiveCreateRoomModal(!isActiveCreateRoomModal);
  };

  const onClickSelectImageModal = () => {
    setisActiveSelectImageModal(!isActiveSelectImageModal);
  };

  const onClickLogout = () => {
    sessionStorage.removeItem("userKey");
    sessionStorage.removeItem("userToken");

    document.location.href = "/";
  };

  const handleJoinRoom = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log("/room/" + e.currentTarget.id);

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
        roomid: e.currentTarget.id,
      })
      .then((res) => {
        navigate("/room/" + e.currentTarget.id);
        sessionStorage.setItem("roomNumber", res.data.userid);
      })
      .catch((err) => {
        alert("방에 참여할 수 없습니다.");
        console.log(err);
      });
  };

  const handleCreateRoom = () => {
    if (inputRoomName === "") {
      alert("방 이름을 입력해주세요.");
      return;
    }
    axios
      .post("/room/" + userid!.toString(), {
        title: inputRoomName,
        mode: modeSelect,
        status: isOpenRoom,
      })
      .then((res) => {
        sessionStorage.setItem("roomNumber", res.data.id);
        document.location.href = "/room/" + res.data.id;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputRoomName = (e: any) => {
    setInputRoomName(e.target.value);
  };

  const handleOpenRoom = (e: any) => {
    setIsOpenRoom(true);
  };

  const handleCloseRoom = (e: any) => {
    setIsOpenRoom(false);
  };

  const handleRandomMode = (e: any) => {
    setModeSelect(true);
  };

  const handlePickMode = (e: any) => {
    setModeSelect(false);
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/api/lobby")
        .then((res) => {
          setRoomData(res.data);
          console.log(res.data);
        })
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  const isOpens = [
    { name: "공개", value: "1" },
    { name: "비공개", value: "2" },
  ];

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
                  onClick={handleJoinRoom}
                  key={room.id}
                  id={room.id}
                >
                  <div className="w-full px-4 pt-3 pb-1 mb-2 bg-white border rounded-md shadow sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 grid grid-cols-4 gap-3">
                      <div className="text-center">{room.id}</div>
                      <div className="text-center">{room.title}</div>
                      <div className="text-center">
                        {room.mode ? "픽 모드" : "랜덤 모드"}
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
                onClick={handleJoinRoom}
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
              <p className="mt-2 text-xl font-medium text-gray-800 ">Charlie</p>
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
                    onClick={onClickSelectImageModal}
                  >
                    이미지 선택
                  </Button>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer className="flex">
                <button
                  type="button"
                  className="py-2 px-4 text-white rounded-lg bg-gray-500 justify-center place-self-center"
                  onClick={onClickSelectImageModal}
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
                  onClick={onClickSelectImageModal}
                >
                  이미지 업로드
                </button>

                <button
                  type="button"
                  className="py-2 px-4 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                  onClick={onClickSelectImageModal}
                >
                  선택 완료
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </Container>

    // // 전체 화면을 채우는 div 태그
    // <div>
    //   <div className="logoutLine">
    //     <Container fluid>
    //       <Row>
    //         <Col>
    //           <h2>Lobby 페이지!!!</h2>
    //         </Col>
    //         <Col className="text-lg-end">
    //           <Button className="logoutButton" onClick={onClickLogout}>
    //             로그아웃
    //           </Button>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    //   <div className="roomListLine">
    //     <Row>
    //       <Col>
    //         <Container fluid className="roomList">
    //           <Row className="roomMenuLine">
    //             <Col sm={1}>No.</Col>
    //             <Col sm={7}>방 제목</Col>
    //             <Col sm={2}>모드</Col>
    //             <Col sm={2}>공개 여부</Col>
    //           </Row>
    //           <div className="roomListScroll">
    //             {roomData.map((room: any) => (
    //               <div key={room.id} className="roomListCss">
    //                 <Row>
    //                   <Col sm={1}>{room.id}</Col>
    //                   <Col sm={7}>{room.title}</Col>
    //                   <Col sm={1}>{room.mode}</Col>
    //                   <Col sm={1}>{room.status}</Col>
    //                   <Col sm={1}>
    //                     {/* <Link
    //                       key={room.id}
    //                       onClick={handleJoinRoom}
    //                       // to={"/room"}
    //                       to={"/room/" + room.id}
    //                     > */}
    //                     <Button
    //                       key={room.id}
    //                       id={room.id}
    //                       onClick={handleJoinRoom}
    //                       type="button"
    //                     >
    //                       입장
    //                     </Button>
    //                     {/* </Link> */}
    //                   </Col>
    //                 </Row>
    //               </div>
    //             ))}

    //             <div className="roomListCss">
    //               <Row>
    //                 <Col sm={1}>1</Col>
    //                 <Col sm={7}>방 제목</Col>
    //                 <Col sm={1}>뭐요</Col>
    //                 <Col sm={1}>ㄱㄱ</Col>
    //                 <Col sm={1}>
    //                   <Button onClick={handleJoinRoom} type="button">
    //                     입장
    //                   </Button>
    //                 </Col>
    //               </Row>
    //             </div>
    //           </div>
    //         </Container>
    //       </Col>
    //       <Col className="profileLine">
    //         <Container className="profile"></Container>
    //         <Container className="createRoom">
    //           <Button
    //             type="button"
    //             className="createRoomButton"
    //             onClick={onClickModalOn}
    //           >
    //             방 만들기
    //           </Button>

    //           <Modal show={isActive} onHide={onClickModalOff}>
    //             <Modal.Header closeButton>
    //               <Modal.Title>Modal heading</Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //               <div>
    //                 방 제목
    //                 <br />
    //                 <input
    //                   onChange={handleInputRoomName}
    //                   type="text"
    //                   className="w-100"
    //                 />
    //               </div>
    //               <br />
    //               공개 여부
    //               <br />
    //               <div>
    //                 <ButtonGroup className="w-100">
    //                   {isOpens.map((radio, idx) => (
    //                     <ToggleButton
    //                       key={idx}
    //                       id={`radio-${idx}`}
    //                       type="radio"
    //                       variant={
    //                         idx % 2 ? "outline-danger" : "outline-success"
    //                       }
    //                       name="radio"
    //                       value={radio.value}
    //                       checked={
    //                         +isOpenRoom === (radio.value as unknown as number)
    //                       }
    //                       onChange={(e) =>
    //                         setIsOpenRoom(
    //                           e.currentTarget.value as unknown as boolean
    //                         )
    //                       }
    //                     >
    //                       {radio.name}
    //                     </ToggleButton>
    //                   ))}
    //                 </ButtonGroup>
    //               </div>
    //               <br />
    //               <div>
    //                 모드 선택
    //                 <br />
    //                 <ToggleButtonGroup
    //                   type="radio"
    //                   name="options"
    //                   defaultValue={1}
    //                   className="w-100"
    //                 >
    //                   <ToggleButton
    //                     variant="outline-primary"
    //                     id="tbg-radio-1"
    //                     value={1}
    //                     onClick={handleRandomMode}
    //                   >
    //                     랜덤 모드
    //                   </ToggleButton>
    //                   <ToggleButton
    //                     variant="outline-primary"
    //                     id="tbg-radio-2"
    //                     value={2}
    //                     onClick={handlePickMode}
    //                   >
    //                     픽 모드
    //                   </ToggleButton>
    //                 </ToggleButtonGroup>
    //               </div>
    //               <br />
    //               <div>
    //                 사진 선택
    //                 <br />
    //                 <Button className="w-100" variant="primary">
    //                   사진
    //                 </Button>
    //               </div>
    //             </Modal.Body>
    //             <Modal.Footer>
    //               <Button
    //                 variant="primary"
    //                 onClick={() => {
    //                   handleCreateRoom();
    //                   onClickModalOff();
    //                 }}
    //               >
    //                 방 만들기
    //               </Button>
    //               <Button variant="secondary" onClick={onClickModalOff}>
    //                 닫기
    //               </Button>
    //             </Modal.Footer>
    //           </Modal>
    //         </Container>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  );
}

export default Lobby;
