import axios from "axios";
import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateRoomModal(props: any) {
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
    axios
      .post("/api/room/" + sessionStorage.getItem("userid"), {
        title: roomName,
      })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("roomTitle", res.data.data.title);
        sessionStorage.setItem("roomId", res.data.data.roomid);
        navigate("/room/" + res.data.data.roomid);
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

export default CreateRoomModal;
