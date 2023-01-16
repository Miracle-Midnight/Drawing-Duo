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
        <Modal.Title id="contained-modal-title-vcenter">{props.headerTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.bodyTitle}</Form.Label>
            <Form.Control type="email" placeholder={props.placeholder} />
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right">
            {props.buttonTitle}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;
