/* library */
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { useLines } from "../../hooks/useLines";
import { useKeyboardEvents } from "../../hooks/useKeyboradEvents";
import { useConnection } from "../../hooks/useConnection";

import { useUsers } from "../../useUsers";
import { UserCursor } from "../userCursor/usercursor";
import { Line } from "../line/line";
import { RootState } from "../../store";
import { ImageCanvas } from "./ImageCanvas";
import { saveImagee } from "../../states/SaveImageSlice";
import { useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { getType } from "@reduxjs/toolkit";

import { isExitt } from "../../states/isExitSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSaveImage } from "../../hooks/useSaveImage";

function getPoint(x: number, y: number) {
  return [x, y];
}

export function Canvas({ frameImage }: { frameImage: string }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const formData = useSelector((state: RootState) => state.svgImage.formData);
  const formData = new FormData();
  const isExit = useSelector((state: RootState) => state.isExit.isExit);

  const sizeState = useSelector((state: RootState) => state.size.value);
  const [awareness, yLines] = useSelector((state: RootState) => [
    state.yjs.awareness,
    state.yjs.yLines,
  ]);
  const users = useUsers(awareness, (state) => state);
  const { lines, startLine, addPointToLine, completeLine, undoLine, redoLine } =
    useLines();

  const drawTool = useSelector(
    (state: RootState) => state.drawTool.currentTool
  );

  useKeyboardEvents();

  const { divRef, handleClick } = useSaveImage();

  // const handleMouseOver = useCallback(
  //   (e: any) => {
  //     const starget = e.target as HTMLElement;
  //     const eidx = starget.dataset.id;

  //     if (drawTool == "erase" && eidx !== undefined) {
  //       yLines.delete(+eidx, 1);
  //     }
  //   },
  //   [drawTool]
  // );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);

      awareness.setLocalStateField("windowSize", [
        window.innerWidth,
        window.innerHeight,
      ]);

      const starget = e.target as HTMLElement;
      const eidx = starget.dataset.id;
      if (drawTool === "erase" && eidx !== undefined) {
        yLines.delete(+eidx, 1);
      }

      if (drawTool === "draw") {
        const canvasElement = document.getElementById("svgCanvas");
        const status = canvasElement?.getBoundingClientRect();
        if (status?.left) {
          startLine(getPoint(e.pageX - status?.left, e.pageY), sizeState);
        }
      }
    },
    [startLine, drawTool, sizeState]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (drawTool == "draw") {
        const canvasElement = document.getElementById("svgCanvas");
        const status = canvasElement?.getBoundingClientRect();
        if (status?.left) {
          const point = getPoint(e.pageX - status?.left, e.pageY);
          awareness.setLocalStateField("point", point);
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            addPointToLine(point);
          }
        }
      }
    },
    [addPointToLine, drawTool]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.releasePointerCapture(e.pointerId);

      completeLine();
    },
    [completeLine]
  );

  useEffect(() => {
    if (divRef.current) {
      dispatch(saveImagee({ divRef: divRef.current }));
    }
  }, [dispatch, divRef]);

  return (
    <div ref={divRef} className="relative h-full" id="saveImage">
      <svg
        id="svgCanvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={() => awareness.setLocalStateField("isActive", true)}
        onPointerLeave={() => awareness.setLocalStateField("isActive", false)}
        // onMouseOver={handleMouseOver}
        className="w-full h-full overflow-hidden object-cover absolute"
        style={{
          pointerEvents: drawTool == "fill" ? "none" : "auto",
        }}
      >
        {lines.map((line, i) => (
          <Line key={line.get("id")} line={line} idx={i} />
        ))}
        {Array.from(users.entries()).map(([key, value]: any) => {
          if (key === awareness.clientID) return null;
          if (!value.point || !value.color || value.isActive === undefined) {
            return null;
          }
          return (
            <UserCursor
              key={key}
              point={
                value.point as React.ComponentProps<typeof UserCursor>["point"]
              }
              isActive={
                value.isActive as React.ComponentProps<
                  typeof UserCursor
                >["isActive"]
              }
              color={
                value.color as React.ComponentProps<typeof UserCursor>["color"]
              }
              windowSize={
                value.windowSize as React.ComponentProps<
                  typeof UserCursor
                >["windowSize"]
              }
            />
          );
        })}
      </svg>
      <ImageCanvas src={frameImage} />
    </div>
  );
}
