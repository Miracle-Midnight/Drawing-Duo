import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./card.css";

function Card({ title, imageSrc, needTitle }: any) {
  return (
    <Container>
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
            <div className="flex flex-row justify-evenly">
              <div className="text-lg text-gray-700 text-center uppercase mt-0">
                박지성
              </div>
              <div className="text-lg text-gray-700 text-center uppercase mt-0 mb-3">
                김영우
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Card;
