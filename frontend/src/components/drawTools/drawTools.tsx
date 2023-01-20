/* library */
import React, { useState, useEffect } from "react";
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

  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const drawingTools = document.getElementById("drawingTools");
    if (drawingTools) {
      drawingTools.addEventListener("mousedown", () => {
        setIsMouseDown(true);
      });
      drawingTools.addEventListener("mouseup", () => {
        setIsMouseDown(false);
      });

      drawingTools.addEventListener("mousemove", (event: MouseEvent) => {
        if (isMouseDown) {
          setPosition({ x: event.clientX, y: event.clientY });
        }
      });
      return () => {
        drawingTools.removeEventListener("mousedown", () => {
          setIsMouseDown(true);
        });
        drawingTools.removeEventListener("mouseup", () => {
          setIsMouseDown(false);
        });

        drawingTools.removeEventListener("mousemove", (event: MouseEvent) => {
          if (isMouseDown) {
            setPosition({ x: event.clientX, y: event.clientY });
          }
        });
      };
    }
  }, [isMouseDown]);

  return (
    <div
      id="drawingTools"
      style={{ position: "absolute", left: position.x, top: position.y }}
      className="flex flex-row"
    >
      <Pen></Pen>
      <Eraser></Eraser>
      <InputRange min={1} max={100}></InputRange>
      <Undo undo={undoLine}></Undo>
      <Redo redo={redoLine}></Redo>
      <Fill></Fill>
    </div>
  );
}
