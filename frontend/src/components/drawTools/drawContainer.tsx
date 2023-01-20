/* library */
import React from "react";
/* module from local */
import Pen from "./pen";
import Eraser from "./eraser";
import Palette from "./palette";
import Undo from "./undo";
import Redo from "./redo";
import InputRange from "../inputRange/inputRange";

import { useLines } from "../../hooks/useLines";

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
    <div className="absolute z-48 bottom-0 left-1/2 -translate-x-1/2 ">
      <div className="w-[500px] h-10 shadow px-5">
        <Pen></Pen>
        <Eraser></Eraser>
        <InputRange min={1} max={100}></InputRange>
        <Undo undo={undoLine}></Undo>
        <Redo redo={redoLine}></Redo>
      </div>
    </div>
  );
}
