import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./introCard.css";

function IntroCard({ title, imageSrc }: any) {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="w-full p-3">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-img">
              <img
                src={imageSrc}
                className="object-cover object-center w-full"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900 text-center uppercase">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default IntroCard;
