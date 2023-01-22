/* library */
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { Line } from "../line/line";
import { useLines } from "../../hooks/useLines";
import { UserCursor } from "../userCursor/usercursor";
import { useUsers } from "../../useUsers";
import { useKeyboardEvents } from "../../hooks/useKeyboradEvents";
import { RootState } from "../../store";
import { ImageCanvas } from "./ImageCanvas";

function getPoint(x: number, y: number) {
  return [x, y];
}

export function Canvas({ frameImage }: { frameImage: string }) {
  const sizeState = useSelector((state: RootState) => state.size.value);
  const [awareness, yLines] = useSelector((state: RootState) => [
    state.yjs.awareness,
    state.yjs.yLines,
  ]);
  const users = useUsers(awareness, (state) => state);
  const {
    lines,
    isSynced,
    startLine,
    addPointToLine,
    completeLine,
    undoLine,
    redoLine,
  } = useLines();

  const drawTool = useSelector(
    (state: RootState) => state.drawTool.currentTool
  );

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

  useKeyboardEvents();

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

  // const isFill = useMemo(()=>)

  return (
    <div className="relative h-full">
      <svg
        id="svgCanvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={() => awareness.setLocalStateField("isActive", true)}
        onPointerLeave={() => awareness.setLocalStateField("isActive", false)}
        onMouseOver={handleMouseOver}
        className="w-full h-full object-cover absolute"
        // style={{
        //   pointerEvents: "none",
        // }}
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
