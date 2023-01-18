/* library */
import * as Y from "yjs";
import { useState, useRef, useEffect, useCallback } from "react";
/* module from local */
import { yLines, provider, undoManager, doc, awareness } from "../y";

interface User {
  id: number;
  point: number[];
  color: string;
  isActive: boolean;
}

/* Line을 그리기 위한 hooks 모음 => Canvas component에서 필요한 함수 */
export function useLines() {
  const [isSynced, setIsSynced] = useState<boolean>(false);
  const [lines, setLines] = useState<Y.Map<any>[]>([]); // 전체 lines에 대한 상태
  const rCurrentLine = useRef<Y.Map<any>>(); // useRef를 통해 line값을 component가 사라지기 전까지 보존

  /* 공유 데이터를 담고 있는 Ylines에 변화가 생기면, lines 상태에 업데이트 */
  useEffect(() => {
    function handleChange() {
      const lines = yLines.toArray();
      /* ylines에 전제 lines에 대한 정보가 있기에, re-render되어도 
      lines state에는 전체 lines 값들이 들어간다
      */
      setLines(lines);
    }
    yLines.observe(handleChange); // 1단계 자식 node만 관찰
    // yLines.observeDeep(handleChange); // 존재하지 않는 이벤트 핸들러 삭제 시도 에러

    return () => yLines.unobserve(handleChange); // component가 사라지면 observe 중지
  }, []);

  /* 
  1. 새로운 Y배열을 생성 후, 인자로 주어진 배열을 push한다.
  2. 새로운 Y맵을 생성 후, 시간, Y배열, 완성 여부를 담은 후, doc transaction한다
  (observe로 통해 자동 업데이트가 되지만, 작은 이벤트 하나에 transaction이 발생 할 
    경우 성능이 느려져서, transact()안에 묶어서 업데이트한다)
   - 인자로 마우스 포인터로 눌른 x좌표,y좌표 값이 배열로 들어온다
  */
  const startLine = useCallback((point: number[], size: number) => {
    const id = Date.now().toString();
    const yPoints = new Y.Array<number>();
    yPoints.push([...point]);

    const yLine = new Y.Map();

    undoManager.stopCapturing();

    const user = awareness.getLocalState() as User;
    doc.transact(() => {
      yLine.set("id", id); // render시에 개별 라인마다 key를 주기 위해 사용
      yLine.set("points", yPoints);
      yLine.set("userColor", user.color);
      yLine.set("isComplete", false);
      yLine.set("size", size);
      yLine.set("windowsize", [window.innerWidth, window.innerHeight]);
    });

    rCurrentLine.current = yLine; // ref에 현재 선 정보를 저장

    yLines.push([yLine]); // 전역 변수로 되어 있는 yLines에 추가하면서, observe안에 함수 발동
  }, []);

  /* 인자로 들어온 point배열을 rCurrentLine안에 있는 points배열 안에 추가하여 선을 그린다  */
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

    rCurrentLine.current?.set("isComplete", true);
    rCurrentLine.current = undefined;
  }, []);

  /* 0번째 부터 legnth까지 ylines 배열 내의 ele 삭제 */
  // const clearAllLines = useCallback(() => {
  //   yLines.delete(0, yLines.length);
  // }, []);

  const undoLine = useCallback(() => {
    undoManager.undo();
  }, []);

  const redoLine = useCallback(() => {
    undoManager.redo();
  }, []);

  useEffect(() => {
    function handleConnect() {
      setIsSynced(true);
      setLines(yLines.toArray());
    }

    function handleDisconnect() {
      provider.off("sync", handleConnect);
      provider.disconnect();
    }

    // window.addEventListener("beforeunload", handleDisconnect);

    provider.on("sync", handleConnect);

    provider.connect();

    return () => {
      // handleDisconnect();
      window.removeEventListener("beforeunload", handleDisconnect);
    };
  }, []);

  useEffect(() => {
    function handleConnect() {
      setIsSynced(true);
      setLines(yLines.toArray());
    }

    function handleDisconnect() {
      provider.off("sync", handleConnect);
      provider.disconnect();
    }

    // window.addEventListener("beforeunload", handleDisconnect);

    provider.on("sync", handleConnect);

    provider.connect();

    return () => {
      // handleDisconnect();
      window.removeEventListener("beforeunload", handleDisconnect);
    };
  }, []);

  /* 여기서 정의한 함수를 component안에 도입 */
  return {
    isSynced,
    lines,
    startLine,
    addPointToLine,
    completeLine,
    undoLine,
    redoLine,
  };
}
