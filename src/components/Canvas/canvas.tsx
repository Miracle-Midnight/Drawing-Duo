/* library */
import { useCallback } from "react";
import * as Y from "yjs";
/* module from local */
import { Line } from "../Line/line";
import { useLines } from "../../hooks/useLines";

const date = new Date();

date.setUTCHours(0, 0, 0, 0);

const START_TIME = date.getTime();

/* 게임 시작 부터 현재 시간을 구함 */
function getYOffset() {
  return (Date.now() - START_TIME) / 100;
}

/* 인자 x와 y을 묶고 y에 게임 시간을 더함 */
function getPoint(x: number, y: number) {
  return [x, y + getYOffset()];
}

/* 화면에 보일 캔버스 그림 정보 */
export default function Canvas() {
  const { lines, startLine, addPointToLine, completeLine, clearAllLines } =
    useLines();

  /* 포인터가 눌러지면, 새로운 라인을 시작 */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);

      startLine(getPoint(e.clientX, e.clientY));
    },
    [startLine]
  );
}
