import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import "./lobby.css";
import { useNavigate } from "react-router-dom";

// function Lobby(props: lobbyProps) {
function Lobby(props: any) {
  // App 컴포넌트에서 전달받은 props 값은 아래와 같이 받아온다.
  const isLogin: boolean = props.isLogin;
  const userid: string | null = sessionStorage.getItem("userKey");

  const [inputRoomName, setInputRoomName] = useState<string>("");
  const [isOpenRoom, setIsOpenRoom] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modeSelect, setModeSelect] = useState<boolean>(false);
  const [array, setArray] = useState([]);
  const [roomData, setRoomData] = useState([]);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  const onClickLogout = () => {
    sessionStorage.removeItem("userKey");
    sessionStorage.removeItem("userToken");

    document.location.href = "/";
  };

  const handleJoinRoom = (e: any) => {
    console.log("/room/" + e.target.id);

    let usersession: string | number | null = sessionStorage.getItem("userKey");
    if (typeof usersession === "string") {
      usersession = parseInt(usersession);
    } else {
      alert("로그인을 해주세요.");
      return;
    }

    navigate("/room");

    // axios
    //   .post("/lobby/" + e.target.id, {
    //     userid: usersession,
    //     roomid: e.target.id,
    //   })
    //   .then((res) => {
    //     navigate("/room/" + e.target.id);
    //     sessionStorage.setItem("roomNumber", res.data.userid);
    //   })
    //   .catch((err) => {
    //     alert("방에 참여할 수 없습니다.");
    //     console.log(err);
    //   });
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
        .get("/lobby")
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
              <li
                className="flex flex-row mb-2 border-gray-400"
                onClick={handleJoinRoom}
              >
                <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium ">CTO</div>
                    <div className="text-sm text-gray-600 ">Boby PArk</div>
                  </div>
                  <div className="text-xs text-gray-600 ">6:00 AM</div>
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
                </div>
              </li>

              {roomData.map((room: any) => (
                <li
                  id={room.id}
                  key={room.id}
                  className="flex flex-row mb-2 border-gray-400"
                  onClick={handleJoinRoom}
                >
                  <div className="shadow border select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium ">CTO</div>
                      <div className="text-sm text-gray-600 ">Boby PArk</div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
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
                  </div>
                </li>
              ))}
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
            <button
              className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full"
              onClick={onClickLogout}
            >
              로그아웃
            </button>
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
