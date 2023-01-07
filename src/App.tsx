/* react */
import "./App.css";
/* module from local */
import { DrawLine } from "./components/drawing/drawing-component";

/* App 컴포넌트 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi!</p>
        <svg className={"canvas"} width="400" height="210"></svg>
        <DrawLine />
      </header>
    </div>
  );
}
export default App;
