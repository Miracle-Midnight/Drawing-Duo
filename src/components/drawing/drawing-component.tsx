/* react */
import { useEffect } from "react";
/* library */
import { getStroke } from "perfect-freehand";
import * as Y from "yjs";
/* module from local */
import { getSvgPathFromStroke } from "../../utils/drawing/drawing.utils";

/*crdt document 생성*/
const ydoc = new Y.Doc();
export const ystrokes = ydoc.getArray("stroke");

const coords = [
  [0, 0, 0],
  [100, 340, 0.5],
  [400, 300, 0.5],
  [500, 600, 0.5],
];

const newStorke = new Y.Array();
newStorke.push(coords); // newStorke.toArray() == coords
ystrokes.push([newStorke]);

/* 전역 변수 생성 */
let currentStroke: any = null;

export function eventStorke(ystrokes: any, svg: any) {
  svg?.addEventListener("pointerdown", (event: any) => {
    currentStroke = new Y.Array();
    currentStroke.push([[event.x, event.y, event.pressure]]);
    ystrokes.push([currentStroke]);
  });
  svg?.addEventListener("pointermove", (event: any) => {
    if (event.button !== 1) {
      currentStroke = null;
      return;
    }
    currentStroke.push([[event.x, event.y, event.pressure]]);
  });
}

export function _updatePaths(ystrokes: any, svg: any) {
  ystrokes.forEach((ystroke: any) => {
    const stroke = getStroke(ystroke.toArray());
    const svgPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    svgPath.setAttribute("d", getSvgPathFromStroke(stroke));
    svg.appendChild(svgPath);
  });
}

export function _removePaths(svg: Element): void {
  if (svg) {
    while (svg?.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  }
  return;
}

export function DrawLine() {
  useEffect(() => {
    const svg = document.getElementsByClassName("canvas")[0];
    if (svg) {
      _updatePaths(ystrokes, svg);
      ystrokes.observe((event: any) => {
        _removePaths(svg);
        _updatePaths(ystrokes, svg);
      });
    }
  }, []);

  return <span></span>; // component로 사용하기 위해 빈 태그 반환
}
export default DrawLine;
