/* library */
import React from "react";
/* module from local */
import Pen from "./pen";
import Eraser from "./eraser";
import Undo from "./undo";
import Redo from "./redo";
import InputRange from "../inputRange/inputRange";
import { Fill } from "./fill";

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
    <div className="flex flex-col">
      <Pen></Pen>
      <Eraser></Eraser>
      <InputRange min={1} max={100}></InputRange>
      <Undo undo={undoLine}></Undo>
      <Redo redo={redoLine}></Redo>
      <Fill></Fill>
    </div>
  );
}
