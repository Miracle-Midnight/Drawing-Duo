import axios from "axios";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CloseRoomModal(props: any) {
  

  // const navigate = useNavigate();

  // const [roomName, setRoomName] = useState("");

  // const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleCreateRoom();
  //   }
  // };

  // const handleInputRoomName = (e: any) => {
  //   setRoomName(e.target.value);
  // };

  const handleExitRoom = () => {
    axios
      .post("/room/" + sessionStorage.getItem("userid"), {
        // title: roomName,
      })
      .then((res) => {
        // sessionStorage.setItem("roomTitle", res.data.data.title);
        // sessionStorage.setItem("roomId", res.data.data.roomid);
        // navigate("/room/" + res.data.data.roomid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      
      centered
    >
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">종료</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>종료하시겠습니까?</Form.Label>
            <div>종료하면 자동으로 현재 그림이 저장됩니다.</div>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="float-right ml-3"
            // onClick={handleCreateRoom}

            onClick={handleExitRoom}
          >
            종료
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="float-right"
            onClick={() => props.setModalShow(false)}
          >
            취소
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CloseRoomModal;
