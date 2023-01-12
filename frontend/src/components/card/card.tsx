import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./card.css";
import Player from "../player/player";
import { useNavigate } from "react-router-dom";

function Card({ title, imageSrc, needTitle }: any) {
  const navigate = useNavigate();

  const joinRoom = () => {
    navigate("/room");
  };

  return (
    <Container onClick={joinRoom}>
      <div className="flex items-center justify-center">
        <div className="w-80 p-1">
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-2xl card">
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
