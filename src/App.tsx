import React, { useEffect } from "react";
import "./App.css";

import * as Y from "yjs";
import { getStroke } from "perfect-freehand";
import { getSvgPathFromStroke } from "./utils/drawing/drawing.utils";
import { DrawLine } from "./components/drawing/drawing-component";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi!</p>
        <DrawLine ystrokes={ystrokes} />
      </header>
    </div>
  );
}
export default App;
