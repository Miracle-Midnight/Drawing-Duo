/* library */
import { useCallback } from "react";
/* module from local */
import { Line } from "../Line/line";
import { useLines } from "../../hooks/useLines";

const date = new Date();

date.setUTCHours(0, 0, 0, 0);

// /* 게임 시작 부터 현재 시간을 구함 */
// function getYOffset() {
//   return (Date.now() - START_TIME) / 100;
// }

// /* 인자 x와 y을 묶고 y에 게임 시간을 더함 */
// function getPoint(x: number, y: number) {
//   return [x, y + getYOffset()];
// }

function getPoint(x: number, y: number) {
  return [x, y];
}

/* 화면에 보일 캔버스 그림 정보 */
export function Canvas() {
  const { lines, startLine, addPointToLine, completeLine } = useLines();
  console.log("[DEBUG]{Canvas=>Entry point}");
  /* 포인터가 눌러지면, 새로운 라인을 시작 */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      console.log("[DEBUG]{handlePointerDown}");
      e.currentTarget.setPointerCapture(e.pointerId);

      startLine(getPoint(e.clientX, e.clientY)); // yLines에 추가되면서, curRef상태 변환
    },
    [startLine]
  );

  /* 포인터가 눌러진 체, 움직이면 추가해준다 */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      const point = getPoint(e.clientX, e.clientY);
      console.log("[DEBUG]{handlePointerMove}");

      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        addPointToLine(point);
      }
    },
    [addPointToLine]
  );

  /* 포인터가 해제되었을 때, 완료해준다 */
  const handlePointerUp = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      console.log("[DEBUG]{handlePointerUp}");
      e.currentTarget.releasePointerCapture(e.pointerId);

      completeLine();
    },
    [completeLine]
  );
  console.log("[DEBUG]{Canvas=>End point}");

  return (
    /* div */
    <div
      style={{
        display: "inline-block",
        width: "400px",
        height: "400px",
        border: "1px solid black",
      }}
    >
      <svg
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <g>
          {lines.map((line, i) => (
            <Line key={line.get("id")} line={line} />
          ))}
        </g>
      </svg>
    </div>
  );
}
