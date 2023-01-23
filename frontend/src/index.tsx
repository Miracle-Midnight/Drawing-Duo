import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import GameLobby from "./routes/gameLobby/gameLobby";
import InGame from "./routes/inGame/inGame";
import Intro from "./routes/intro/intro";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Room" element={<GameLobby />} />
          <Route path="/Room/:id" element={<GameLobby />} />
          <Route path="/Room/:id/InGame" element={<InGame />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Intro" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
