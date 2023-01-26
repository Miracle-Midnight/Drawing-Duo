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
import { saveImage } from "../../states/svgImageSlice";
import { useDispatch } from "react-redux";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { getType } from "@reduxjs/toolkit";

import { isExitt } from "../../states/isExitSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function getPoint(x: number, y: number) {
  return [x, y];
}

export function Canvas({ frameImage }: { frameImage: string }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.svgImage.formData);
  const isExit = useSelector((state: RootState) => state.isExit.isExit);

  const sizeState = useSelector((state: RootState) => state.size.value);
  const [awareness, yLines] = useSelector((state: RootState) => [
    state.yjs.awareness,
    state.yjs.yLines,
  ]);
  const users = useUsers(awareness, (state) => state);
  const { lines, startLine, addPointToLine, completeLine, undoLine, redoLine } =
    useLines();

  useConnection();

  const drawTool = useSelector(
    (state: RootState) => state.drawTool.currentTool
  );

  useKeyboardEvents();

  const handleMouseOver = useCallback(
    (e: any) => {
      const starget = e.target as HTMLElement;
      const eidx = starget.dataset.id;

      if (drawTool == "erase" && eidx !== undefined) {
        yLines.delete(+eidx, 1);
      }
    },
    [drawTool]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);

      awareness.setLocalStateField("windowSize", [
        window.innerWidth,
        window.innerHeight,
      ]);

      if (drawTool == "draw") {
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

  const handleSaveImage = async () => {
    const element = document.getElementById("saveImage");
    const childNodes = element?.childNodes;
    childNodes?.forEach((child) => {
      if (child.nodeName == "circle" || child.nodeName == "text") {
        child.remove();
      }
    });

    await html2canvas(element as HTMLElement).then(function (canvas) {
      console.log("들어옵니다!");
      const blob = new Blob([canvas.toDataURL("image/png")]);
      const file = new File([blob], `${sessionStorage.getItem("roomId")}.png`);
      formData.set("image", file);

      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = `${sessionStorage.getItem("roomId")}.png`;

      // formData.set("image", blob, link.download);
    });
    console.log("gkgkgkkgkgkgkgkgkgkgkgkgkgkgk");
    console.log(formData.get("image"));
    dispatch(saveImage(formData));

    axios
      .post(`/room/save/${sessionStorage.getItem("roomId")}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(isExitt(false));
        navigate("/");
      })
      .catch((err) => {
        console.log(formData.get("image"));
        console.log(err);
      });
  };

  useEffect(() => {
    if (isExit) {
      console.log("isExit");
      console.log(isExit);
      handleSaveImage();
      // handleClick();
    }
  }, [isExit]);

  return (
    <div className="relative h-full" id="saveImage">
      <svg
        id="svgCanvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={() => awareness.setLocalStateField("isActive", true)}
        onPointerLeave={() => awareness.setLocalStateField("isActive", false)}
        onMouseOver={handleMouseOver}
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
