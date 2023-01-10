/* module from local */
import "./App.css";
import { Canvas } from "./components/Canvas/canvas";
import { USER_COLORS } from "./constants";
import { awareness } from "./y";

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

awareness.setLocalState({
  point: [20, 20],
  color: random(USER_COLORS),
  isActive: false,
});

/* App 컴포넌트 */
function App() {
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}
export default App;
