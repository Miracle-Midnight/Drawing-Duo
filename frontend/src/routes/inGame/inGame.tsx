import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./inGame.css";
import Canvas from "../../components/canvas/canvas";

function InGame() {
  return (
  <Container className="center">
      <Canvas>
        
      </Canvas>
  </Container>);
}

export default InGame;
