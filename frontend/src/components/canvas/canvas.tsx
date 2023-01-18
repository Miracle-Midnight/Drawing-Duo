/* library */
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
/* module from local */
import { Line } from "../line/line";
import { useLines } from "../../hooks/useLines";
import { UserCursor } from "../userCursor/usercursor";
import { useUsers } from "../../useUsers";
import { awareness, yLines } from "../../y";
import { useKeyboardEvents } from "../../hooks/useKeyboradEvents";
import { RootState } from "../../store";
import Image from "../../assets/image_numbering_label.png";

function getPoint(x: number, y: number) {
  return [x, y];
}

/* 화면에 보일 캔버스 그림 정보 */
export function Canvas() {
  const sizeState = useSelector((state: RootState) => state.size.value); // size reducer의 state중 value
  const users = useUsers(awareness, (state) => state);
  /* lines은 최종 화면에서 선 별로 저장 한 Ymap이다 */
  const {
    lines,
    isSynced,
    startLine,
    addPointToLine,
    completeLine,
    undoLine,
    redoLine,
  } = useLines();

  const isErase = useSelector((state: RootState) => state.erase.isErase);

  const handleMouseOver = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const starget = e.target as HTMLElement;
      const eidx = starget.dataset.id;

      if (isErase && eidx !== undefined) {
        yLines.delete(+eidx, 1);
      }
    },
    [isErase]
  );

  useKeyboardEvents();

  /* 포인터가 눌러지면, 새로운 라인을 시작 */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);

      awareness.setLocalStateField("windowSize", [
        window.innerWidth,
        window.innerHeight,
      ]);

      if (!isErase) {
        // startLine(getPoint(e.clientX, e.clientY), sizeState); // 현재 viewport 기준
        startLine(getPoint(e.pageX, e.pageY), sizeState); // 전체 page 기준(scroll 포함)
      }
    },
    [startLine, isErase, sizeState]
  );

  /* 포인터가 눌러진 체, 움직이면 추가해준다 */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!isErase) {
        // const point = getPoint(e.clientX, e.clientY);
        const point = getPoint(e.pageX, e.pageY);

        awareness.setLocalStateField("point", point);

        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          addPointToLine(point);
        }
      }
    },
    [addPointToLine, isErase]
  );

  /* 포인터가 해제되었을 때, 완료해준다 */
  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.releasePointerCapture(e.pointerId);

      completeLine();
    },
    [completeLine]
  );

  // const [_, forceUpdate] = useReducer((s) => !s, false);

  // useEffect(() => {
  //   const timeout = setInterval(forceUpdate, 10);
  //   return () => clearInterval(timeout);
  // }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={() => awareness.setLocalStateField("isActive", true)}
        onPointerLeave={() => awareness.setLocalStateField("isActive", false)}
        onMouseOver={handleMouseOver}
        className="h-screen w-full"
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight} `}
      >
        <image href={Image} width="100%" height="100%"></image>
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
    </div>
  );
}
