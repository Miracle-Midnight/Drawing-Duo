import axios from "axios";
import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CenteredModal(props: any) {
  const navigate = useNavigate();

  const [roomName, setRoomName] = useState("");

  const onEnterPress = (e: any) => {
    if (e.key === "Enter") {
      handleCreateRoom();
    }
  };

  const handleInputRoomName = (e: any) => {
    setRoomName(e.target.value);
  };

  const handleCreateRoom = () => {
    // navigate("/room");

    axios
      .post(
        "http://54.180.125.6:3000/api/room/" +
          sessionStorage.getItem("userKey"),
        {
          title: roomName,
        }
      )
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("roomId", res.data.roomid);
        navigate("http://54.180.125.6:3000/room/" + res.data.roomid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">방 만들기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>방 제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="OO아 빨리와"
              onChange={handleInputRoomName}
              onKeyDown={onEnterPress}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="float-right"
            onClick={handleCreateRoom}
          >
            방 만들기
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
