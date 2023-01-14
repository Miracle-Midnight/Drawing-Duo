/* library */
import React from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";
import { Canvas } from "../../components/canvas/canvas";
import { DrawTools } from "../../components/drawTools/drawContainer";

function InGame() {
  return (
    <div className="ml-20">
      <SideNav />
      <div className="">
        <div className="grid">
          <div className="flex justify-center border border-black relative">
            <Canvas />
            <DrawTools />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InGame;
