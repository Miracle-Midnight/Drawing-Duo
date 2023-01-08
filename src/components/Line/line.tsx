/* library */
import * as Y from "yjs";
import { getStroke } from "perfect-freehand";
import { memo } from "react";
/* module from local */
import { useLine } from "../../hooks/useLine";
import { getSvgPathFromStroke } from "../../utils";

export interface LineProps {
  line: Y.Map<any>;
}

/* 
memo를 활용하여서, 부모 component가 re-render되었을때, 자식 component의 props값이
그대로이면 자식은 re-render하지 않아서 성능에 유리(단 메모리를 사용하여 필요시에만 사용) 

만약 props가 object라면, re-render시에 주소값이 변경되면서 자식 component도 실행됨
고로 object이 props로 온다면, useMemo를 사용해서, 해당 object을 메모리에 보존&전달
*/
export const Line = memo(function Line({ line }: LineProps) {
  const { points, isComplete } = useLine(line);

  const pathData = getSvgPathFromStroke(
    getStroke(points, {
      size: 10,
      thinning: 0.6,
      streamline: 0.8,
      smoothing: 0.8,
      last: isComplete,
    })
  );
  return (
    <g>
      <path className="canvas-line" d={pathData} />
    </g>
  );
});