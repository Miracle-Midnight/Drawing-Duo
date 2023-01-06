import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

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

    navigate("/room/" + e.target.id);

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
    // 전체 화면을 채우는 div 태그
    <div>
      <div className="logoutLine">
        <Container fluid>
          <Row>
            <Col>
              <h2>Lobby 페이지!!!</h2>
            </Col>
            <Col className="text-lg-end">
              <Button className="logoutButton" onClick={onClickLogout}>
                로그아웃
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="roomListLine">
        <Row>
          <Col>
            <Container fluid className="roomList">
              <Row className="roomMenuLine">
                <Col sm={1}>No.</Col>
                <Col sm={7}>방 제목</Col>
                <Col sm={2}>모드</Col>
                <Col sm={2}>공개 여부</Col>
              </Row>
              <div className="roomListScroll">
                {roomData.map((room: any) => (
                  <div key={room.id} className="roomListCss">
                    <Row>
                      <Col sm={1}>{room.id}</Col>
                      <Col sm={7}>{room.title}</Col>
                      <Col sm={1}>{room.mode}</Col>
                      <Col sm={1}>{room.status}</Col>
                      <Col sm={1}>
                        {/* <Link
                          key={room.id}
                          onClick={handleJoinRoom}
                          // to={"/room"}
                          to={"/room/" + room.id}
                        > */}
                        <Button
                          key={room.id}
                          id={room.id}
                          onClick={handleJoinRoom}
                          type="button"
                        >
                          입장
                        </Button>
                        {/* </Link> */}
                      </Col>
                    </Row>
                  </div>
                ))}

                <div className="roomListCss">
                  <Row>
                    <Col sm={1}>1</Col>
                    <Col sm={7}>방 제목</Col>
                    <Col sm={1}>뭐요</Col>
                    <Col sm={1}>ㄱㄱ</Col>
                    <Col sm={1}>
                      <Button onClick={handleJoinRoom} type="button">
                        입장
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </Col>
          <Col className="profileLine">
            <Container className="profile"></Container>
            <Container className="createRoom">
              <Button
                type="button"
                className="createRoomButton"
                onClick={onClickModalOn}
              >
                방 만들기
              </Button>

              <Modal show={isActive} onHide={onClickModalOff}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    방 제목
                    <br />
                    <input
                      onChange={handleInputRoomName}
                      type="text"
                      className="w-100"
                    />
                  </div>
                  <br />
                  공개 여부
                  <br />
                  <div>
                    <ButtonGroup className="w-100">
                      {isOpens.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-danger" : "outline-success"
                          }
                          name="radio"
                          value={radio.value}
                          checked={
                            +isOpenRoom === (radio.value as unknown as number)
                          }
                          onChange={(e) =>
                            setIsOpenRoom(
                              e.currentTarget.value as unknown as boolean
                            )
                          }
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </div>
                  <br />
                  <div>
                    모드 선택
                    <br />
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      defaultValue={1}
                      className="w-100"
                    >
                      <ToggleButton
                        variant="outline-primary"
                        id="tbg-radio-1"
                        value={1}
                        onClick={handleRandomMode}
                      >
                        랜덤 모드
                      </ToggleButton>
                      <ToggleButton
                        variant="outline-primary"
                        id="tbg-radio-2"
                        value={2}
                        onClick={handlePickMode}
                      >
                        픽 모드
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <br />
                  <div>
                    사진 선택
                    <br />
                    <Button className="w-100" variant="primary">
                      사진
                    </Button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleCreateRoom();
                      onClickModalOff();
                    }}
                  >
                    방 만들기
                  </Button>
                  <Button variant="secondary" onClick={onClickModalOff}>
                    닫기
                  </Button>
                </Modal.Footer>
              </Modal>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Lobby;
