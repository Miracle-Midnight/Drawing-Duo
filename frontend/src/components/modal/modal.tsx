import { Form, Modal, Button } from "react-bootstrap";

function CenteredModal(props: any) {
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
            <Form.Control type="email" placeholder="OO야 빨리와" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀 번호</Form.Label>
            <Form.Control type="password" placeholder="비밀 번호" />
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right">
            방 만들기
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
