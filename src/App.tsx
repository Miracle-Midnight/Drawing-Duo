import "./App.css";

import * as Y from "yjs";
import { DrawLine, updateLine } from "./components/drawing/drawing-component";

/*crdt document 생성 */
const ydoc = new Y.Doc();
const ystrokes = ydoc.getArray("stroke");
ystrokes.observe((event: any) => {
  updateLine(ystrokes);
});

const coords = [
  [0, 0, 0],
  [100, 340, 0.5],
  [400, 300, 0.5],
  [500, 600, 0.5],
];
const newStorke = new Y.Array();
newStorke.push(coords); // newStorke.toArray() == coords
ystrokes.push([newStorke]);

/* App 컴포넌트 */
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
