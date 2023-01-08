/* library */
import * as Y from "yjs";
import { useState, useRef, useEffect, useCallback } from "react";
/* module from local */
import { yLines, doc } from "../y";

/* Line을 그리기 위한 hooks 모음 => Canvas component에서 필요한 함수 */
export function useLines() {
  const [lines, setLines] = useState<Y.Map<any>[]>([]); // 전체 lines에 대한 상태
  const rCurrentLine = useRef<Y.Map<any>>(); // useRef를 통해 line값을 component가 사라지기 전까지 보존

  /* 공유 데이터를 담고 있는 Ylines에 변화가 생기면, lines 상태에 업데이트 */
  useEffect(() => {
    function handleChange() {
      const lines = yLines.toArray();
      setLines(lines);
    }
    yLines.observe(handleChange);

    return () => yLines.unobserve(handleChange); // component가 사라지면 observe 중지
  }, []);

  /* 
  1. 새로운 Y배열을 생성 후, 인자로 주어진 배열을 push한다.
  2. 새로운 Y맵을 생성 후, 시간, Y배열, 완성 여부를 담은 후, doc transaction한다
  (observe로 통해 자동 업데이트가 되지만, 작은 이벤트 하나에 transaction이 발생 할 
    경우 성능이 느려져서, 하나의 function을 transact()안에 묶어서 업데이트한다)
  */
  const startLine = useCallback((point: number[]) => {
    const id = Date.now().toString();
    const yPoints = new Y.Array<number>();
    yPoints.push([...point]);

    const yLine = new Y.Map();

    doc.transact(() => {
      yLine.set("id", id);
      yLine.set("points", yPoints);
      yLine.set("isComplete", false);
    });

    rCurrentLine.current = yLine; // ref에 현재 선 정보를 저장

    yLines.push([yLine]); // 전역 변수로 되어 있는 yLines에 추가하면서, observe안에 함수 발동
  }, []);

  /* 인자로 들어온 point배열을 rCurrentLine에 저장한 points배열 안에 추가한다  */
  const addPointToLine = (point: number[]) => {
    const currentLine = rCurrentLine.current; // ex) {{'id':'23/1/7'},{'points': [[132,132,0.5],[232,232,0.5],[332,332,0.5]]},{'isCompleted':false}}

    if (!currentLine) return; // currentline이 비어 있는지 확인

    const points = currentLine.get("points");

    if (!points) return; // points가 비어 있는지 확인

    points.push([...point]);
  };

  /* 현재 라인 ref를 지움 */
  const completeLine = useCallback(() => {
    const currentLine = rCurrentLine.current;
    if (!currentLine) return;

    rCurrentLine.current = undefined;
  }, []);

  /* 0번째 부터 legnth까지 ylines 배열 내의 ele 삭제 */
  const clearAllLines = useCallback(() => {
    yLines.delete(0, yLines.length);
  }, []);

  /* 여기서 정의한 함수를 component안에 도입 */
  return {
    lines,
    startLine,
    addPointToLine,
    completeLine,
    clearAllLines,
  };
}
