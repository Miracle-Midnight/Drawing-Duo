import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login/login";
import Lobby from "./routes/lobby/lobby";
import Register from "./routes/register/register";
import GameLobby from "./routes/gameLobby/gameLobby";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Lobby" element={<Lobby />} />
      <Route path="/room" element={<GameLobby />} />
      <Route path="/room/:id" element={<GameLobby />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
