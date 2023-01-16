import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./inGame.css";
import Canvas from "../../components/canvas/canvas";
import UserState from "../../components/userState/userState";
import InGameCanvas from "../../components/inGameCanvas/inGameCanvas";
import SideNav from "../../components/sideNav/sideNav";
import Image from "../../assets/image_numbering_label.png";
import palette from "../../assets/palette-9-svgrepo-com.svg";
import Pen from "../../components/drawTools/pen";
import Eraser from "../../components/drawTools/eraser";
import Palette from "../../components/drawTools/palette";
import Undo from "../../components/drawTools/undo";
import Redo from "../../components/drawTools/redo";
import InputRange from "../../components/inputRange/inputRange";
import ColorSection from "../../components/colorSection/colorSection";
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
                <div>
                  <Pen></Pen>
                  <Eraser></Eraser>
                  <InputRange min={10} max={1000}></InputRange>
                  <Palette></Palette>
                  <Undo></Undo>
                  <Redo></Redo>
                </div>
              </div>
            </div>
            <div className="absolute right-24 top-20 p-10 h-4/5 overflow-auto shadow-md rounded-sm">
              <div className="flex flex-col">
                <ColorSection
                  number={1}
                  red={255}
                  green={150}
                  blue={0}
                ></ColorSection>
                <ColorSection
                  number={2}
                  red={255}
                  green={150}
                  blue={0}
                ></ColorSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InGame;
