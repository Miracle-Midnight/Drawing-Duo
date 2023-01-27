import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isExitt } from "../../states/isExitSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function CloseRoomModal(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const svgImage = useSelector((state: RootState) => state.svgImage.formData);
  const isExit = useSelector((state: RootState) => state.isExit.isExit);

  const handleExit = () => {
    // navigate("/");
    // dispatch(isExitt(true));
  };

  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">종료</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>종료하시겠습니까?</Form.Label>
            <div>종료하면 현재까지 그린 그림이 저장됩니다.</div>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="float-right ml-3"
            // onClick={handleCreateRoom}

            // onClick={useSaveImage}
          >
            종료
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="float-right"
            onClick={props.onHide}
          >
            취소
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CloseRoomModal;
