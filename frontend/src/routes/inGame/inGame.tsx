import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./inGame.css";
import Canvas from "../../components/canvas/canvas";
import UserState from "../../components/userState/userState";
import InGameCanvas from "../../components/inGameCanvas/inGameCanvas";
import SideNav from "../../components/sideNav/sideNav";
import Image from "../../assets/image_numbering_label.png";
import palette from "../../assets/palette-9-svgrepo-com.svg";
import Pen from "../../assets/pen";
import Eraser from "../../assets/eraser";
import Palette from "../../assets/palette";
import Undo from "../../assets/undo";
import Redo from "../../assets/redo";
function InGame() {
  return (
    <div className="ml-20">
      <SideNav />
      <div className="">
        <div className="grid">
          <div className="flex justify-center border border-black relative">
            <svg className="h-screen w-full">
              <image href={Image} width="100%" height="100%"></image>
            </svg>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
              <div className="w-30 h-10 shadow px-5">
                {/* todo : 펜, 지우개, 두께, 전체 지우기, 색상 */}
                <div>
                  <Pen></Pen>
                  <Eraser></Eraser>
                  <Palette></Palette>
                  <Undo></Undo>
                  <Redo></Redo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InGame;
