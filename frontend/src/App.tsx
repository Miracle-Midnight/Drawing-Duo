import React from "react";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import GameLobby from "./routes/gameLobby/gameLobby.jsx";
import Lobby from "./routes/lobby/lobby";
import Result from "./routes/result/result";
import InGame from "./routes/inGame/inGame";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <GameLobby />
    </>
  );
}

export default App;
