import { Container } from "react-bootstrap";
import "./card.css";
import Player from "../player/player";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card({
  title,
  imageSrc,
  frameImageSrc,
  needTitle,
  roomId,
  users,
}: any) {
  const navigate = useNavigate();

  const joinRoom = () => {
    axios
      .post("/api/lobby/in", {
        title: title,
      })
      .then((res) => {
        sessionStorage.setItem("roomTitle", title);
        sessionStorage.setItem("roomId", roomId);
        navigate("/room/" + roomId);
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
              <img
                src={frameImageSrc}
                className="object-cover object-center w-80"
              />
            </div>
            {needTitle === true ? (
              <div className="text-2xl font-bold text-gray-900 text-center uppercase">
                {title}
              </div>
            ) : null}
            <div className="flex flex-row justify-evenly mb-3">
              <Player name="김영우"></Player>
              <Player name="김채욱"></Player>
              {/* {users.map((user: any) => {
                <Player name={user.userid}></Player>;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Card;
