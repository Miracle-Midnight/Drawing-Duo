/* library */
import { useState, useEffect } from "react";
import * as Y from "yjs";
/* module from local */
import { toPairs } from "../utils";

/* single line만을 위한 hooks 제공 */
export function useLine(line: Y.Map<any>) {
  const [isComplete, setIsComplete] = useState<boolean>();
  const [color, setColor] = useState<string>();
  const [pts, setPts] = useState<number[][]>([]);
  const [size, setSize] = useState<number>();

  /* line을 관찰하면서 변화가 생기면, 완료 상태 정보 수정 */
  useEffect(() => {
    function handleChange() {
      const current = line.toJSON(); // YMap을 json객체 형태로 전환
      setIsComplete(current.isComplete);
      setColor(current.userColor);
      setSize(current.size);
    }

    handleChange();

    line.observe(handleChange); // 유저간 동기적 처리를 위해 observe적용
    // line.observeDeep(handleChange); // 존재하지 않는 이벤트 핸들러 삭제 시도 에러

    return () => {
      line.unobserve(handleChange);
    };
  }, [line]);

  /* 인자로 주어진, line의 points 배열들을 상태 정보에 입력 */
  useEffect(() => {
    const points = line.get("points") as Y.Array<number>;

    function handleChange() {
      setPts(toPairs(points.toArray())); // points의 인자들을 2개씩 묶어서 저장
    }

    handleChange();

    points.observe(handleChange); // 유저간 동기적 처리를 위해 observe적용
    // points.observeDeep(handleChange); // 존재하지 않는 이벤트 핸들러 삭제 시도 에러

    return () => {
      points.unobserve(handleChange);
    };
  }, [line]);
  return { points: pts, color, isComplete, size }; // size추가
}
