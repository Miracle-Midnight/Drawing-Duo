import { Container } from "react-bootstrap";
import "./card.css";
import Player from "../player/player";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card({ title, imageSrc, needTitle }: any) {
  const navigate = useNavigate();

  const joinRoom = () => {
    // sessionStorage.setItem("roomTitle", title);
    // navigate("/room");
    axios
      .post("/api/lobby/in", {
        title: title,
      })
      .then((res) => {
        sessionStorage.setItem("roomTitle", title);
        navigate("/room");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="w-80 p-1">
          <div
            onClick={joinRoom}
            className="flex flex-col justify-center bg-white rounded-lg shadow-2xl card"
          >
            <div className="prod-img">
              <img src={imageSrc} className="object-cover object-center w-80" />
            </div>
            {needTitle === true ? (
              <div className="text-2xl font-bold text-gray-900 text-center uppercase">
                {title}
              </div>
            ) : null}
            <div className="flex flex-row justify-evenly mb-3">
              <Player name="박선도"></Player>
              <Player name="윤영운"></Player>
              <Player name="김채욱"></Player>
              <Player name="김영우"></Player>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Card;
