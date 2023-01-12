/* library */
import { useCallback } from "react";
/* module from local */
import { Line } from "../Line/line";
import { useLines } from "../../hooks/useLines";
import { UserCursor } from "../UserCursor/usercursor";
import { useUsers } from "../../useUsers";
import { awareness, yLines } from "../../y";
import { useKeyboardEvents } from "../../hooks/useKeyboradEvents";
import { useEraseButton } from "../../hooks/useEraseButton";
import { useColorChange } from "../../hooks/useLineColor";
import { SizeButton } from "../SizeButton/sizebutton";

function getPoint(x: number, y: number) {
  return [x, y];
}

/* 화면에 보일 캔버스 그림 정보 */
export function Canvas() {
  const users = useUsers(awareness, (state: any) => state);
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

  const { isErase, eraseButton } = useEraseButton();

  const { handleColorChange } = useColorChange();

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
      if (!isErase) {
        // startLine(getPoint(e.clientX, e.clientY)); // 현재 viewport 기준
        startLine(getPoint(e.pageX, e.pageY)); // 전체 page 기준(scroll 포함)
        // 1. 추가로 size인자를 주어서 yline에 추가
      }
    },
    [startLine, isErase]
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
        display: "inline-block",
        width: "100%",
        height: "100vh",
        border: "1px solid black",
      }}
    >
      <svg
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerEnter={() => awareness.setLocalStateField("isActive", true)}
        onPointerLeave={() => awareness.setLocalStateField("isActive", false)}
        onMouseOver={handleMouseOver}
        opacity={isSynced ? 1 : 0.2}
        style={{
          width: "100%",
          height: "100vh",
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
            />
          );
        })}
      </svg>
      <div>
        <button onClick={undoLine}>Undo</button>
        <button onClick={redoLine}>Redo</button>
        <button onClick={eraseButton}>{isErase ? "Draw" : "Erase"}</button>
        <button onClick={() => handleColorChange("red")}>Red</button>
        <SizeButton />
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
