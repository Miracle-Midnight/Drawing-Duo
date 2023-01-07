import { useEffect } from "react";
import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "../../utils/drawing/drawing.utils";

export function _newPath(ystrokes: any, svg: SVGSVGElement) {
  console.log("newPath");
  ystrokes.forEach((ystroke: any) => {
    const stroke = getStroke(ystroke.toArray());
    const svgPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    svgPath.setAttribute("d", getSvgPathFromStroke(stroke));
    svg.appendChild(svgPath);
    console.log(svg);
  });
}

export function updateLine(ystrokes: any) {
  const svg = document.querySelector("svg");
  while (svg?.firstChild) {
    svg.removeChild(svg.firstChild);
  }
  if (svg) {
    _newPath(ystrokes, svg);
  }
}

export function renderLine(ystrokes: any) {
  console.log("renderLine");
  const svg = document.querySelector("svg");
  if (svg) {
    _newPath(ystrokes, svg);
  }
}

export function DrawLine(props: any) {
  console.log("drawline");
  useEffect(() => {
    renderLine(props.ystrokes);
  }, [props.ystrokes]);

  return <svg width="400" height="210"></svg>;
}
export default DrawLine;
