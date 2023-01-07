import React, { useEffect } from "react";
import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "../../utils/drawing/drawing.utils";

export function DrawLine(props: any) {
  function activate(ystrokes: any) {
    const svg = document.querySelector("svg");
    ystrokes.forEach((ystroke: any) => {
      const stroke = getStroke(ystroke.toArray());
      const svgPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      svgPath.setAttribute("d", getSvgPathFromStroke(stroke));
      svg?.appendChild(svgPath);
    });
  }

  useEffect(() => {
    activate(props.ystrokes);
  });

  return <svg width="400" height="210"></svg>;
}
export default DrawLine;
