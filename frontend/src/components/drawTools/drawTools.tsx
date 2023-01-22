/* library */
import React, { useState, useRef, useEffect } from "react";
/* module from local */
import Pen from "./pen";
import Eraser from "./eraser";
import Undo from "./undo";
import Redo from "./redo";
import InputRange from "../inputRange/inputRange";
import { Fill } from "./fill";

import { useLines } from "../../hooks/useLines";
import "./drawTools.css";
import Palette from "./palette";

interface Position {
  x: number;
  y: number;
}

export function DrawTools() {
  const {
    isSynced,
    lines,
    startLine,
    addPointToLine,
    completeLine,
    undoLine,
    redoLine,
  } = useLines();

  return (
    <div className="flex flex-row shadow-sm bg-white gap-2 p-2 rounded-tr-lg  rounded-br-lg w-fit ">
      <Pen></Pen>
      <Eraser></Eraser>
      <InputRange min={1} max={100}></InputRange>
      <Fill></Fill>
      {/* <Palette></Palette> */}
      <Undo undo={undoLine}></Undo>
      <Redo redo={redoLine}></Redo>
    </div>
  );
}
