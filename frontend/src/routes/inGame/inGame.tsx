/* library */
import React, { useEffect } from "react";
/* module from local */
import "./inGame.css";
import SideNav from "../../components/sideNav/sideNav";
import Image from "../../assets/image_numbering_label.png";

import { DrawTools } from "../../components/drawTools/drawContainer";
import InputRange from "../../components/inputRange/inputRange";
import ColorSection from "../../components/colorSection/colorSection";
import PaletteComponent from "../../components/palette/palette";

const colors = [
  {
    red: 255,
    green: 0,
    blue: 0,
  },
  {
    red: 255,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
  {
    red: 0,
    green: 120,
    blue: 120,
  },
];

function InGame() {
  return (
    <div className="flex flex-row h-screen">
      <SideNav />
      <div>
        <div className="">
          <div className="grid">
            <div className="flex justify-center border border-black relative">
              <svg className="h-screen w-screen">
                <image href={Image} width="100%" height="100%"></image>
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
                <div className="w-30 h-10 shadow px-5">
                  <div>
                    <DrawTools />
                  </div>
                </div>
              </div>
              <PaletteComponent colors={colors}></PaletteComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InGame;
