import React from "react";
import "./App.css";

import * as Y from "yjs";
import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "./utils/drawing/drawing.utils";

const ydoc = new Y.Doc();
const ystrokes = ydoc.getArray("stroke");

const coords = [
  [0, 0, 0],
  [100, 100, 0.5],
  [300, 300, 0.5],
  [600, 600, 0.5],
];
const newStorke = new Y.Array();

newStorke.push(coords);
ystrokes.push([newStorke]);

// console.log(ystrokes.toJSON());
// console.log(newStorke.toJSON());
const stroke = getStroke(coords);
// console.log(stroke);

// 강의 밑에 함수는 getSvgPathFromStroke 정의와 svgPath를 만든 후 svg에 추가하는 부분이다.

console.log(getSvgPathFromStroke(stroke));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi!</p>
        <svg width="400" height="210">
          <path d={getSvgPathFromStroke(stroke)} />
        </svg>
      </header>
    </div>
  );
}
export default App;
