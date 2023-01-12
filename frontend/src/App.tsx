import React from "react";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import GameLobby from "./routes/gameLobby/gameLobby";
import Lobby from "./routes/lobby/lobby";
import Result from "./routes/result/result";
import InGame from "./routes/inGame/inGame";
import Intro from "./routes/intro/intro";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/gameLobby" element={<GameLobby />}></Route>
        <Route path="/inGame" element={<InGame />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
