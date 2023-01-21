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

  const [position, setPosition] = useState({ x: 200, y: 100 });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.target !== divRef.current) {
        return;
      }
      e.preventDefault();
      const { clientX, clientY } = e;
      const { top, left } = divRef.current!.getBoundingClientRect();
      setPosition({ x: clientX - left, y: clientY - top });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX - position.x, y: clientY - position.y });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position]);

  return (
    <div
      className="flex flex-row shadow-sm bg-white w-[600px] movable-div"
      ref={divRef}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <Pen></Pen>
      <Eraser></Eraser>
      <InputRange min={1} max={100}></InputRange>
      <Undo undo={undoLine}></Undo>
      <Redo redo={redoLine}></Redo>
      <Fill></Fill>
      <div>handle</div>
    </div>
  );
}
