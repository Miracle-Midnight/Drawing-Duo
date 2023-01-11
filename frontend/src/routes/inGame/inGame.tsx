import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./inGame.css";
import Canvas from "../../components/canvas/canvas";
import UserState from "../../components/userState/userState";
import InGameCanvas from "../../components/inGameCanvas/inGameCanvas";
import SideNav from "../../components/sideNav/sideNav";
import rightImage from "../../assets/cat-image.png";
import leftImage from "../../assets/image_numbering_label.png";

function InGame() {
  return (
    <div className="ml-20">
      <SideNav />
      <div className=" h-screen">
        <div className="grid grid-cols-2 w-full h-full">
          <div className="flex flex-col justify-center border border-black h-full">
            <img src={rightImage} alt="image"></img>
          </div>
          <div className="flex flex-col justify-center border border-black h-full">
            <img src={leftImage} alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InGame;
