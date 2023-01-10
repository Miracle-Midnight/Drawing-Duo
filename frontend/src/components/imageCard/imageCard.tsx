import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./imageCard.css";

function ImageCard({ imageSrc }: any) {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="w-full p-1">
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-2xl card">
            <div className="prod-img">
              <img
                src={imageSrc}
                className="object-cover object-center w-80"
              />
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ImageCard;
