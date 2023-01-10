import { Button, Container, Row, Col } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./intro.css";
import IntroCard from "../../components/card/card";

// todo : 이미지 수정(타이틀에 맞게)
function Intro() {
  return (
    <Container className="center flex flex-col">
      <div>
        <img
          src="https://github.com/Miracle-Midnight/Drawing-Duo/blob/feat/ksd/makeNewLayout/frontend/src/assets/drawing-duo-logo-removebg.png?raw=true"
          width="500px"
          className="mb-10"
        ></img>
      </div>
      <div className="flex flex-row">
        <IntroCard
          needTitle={true}
          title="방 만들기"
          imageSrc="https://www.tailwind-kit.com/images/object/4.jpg"
        ></IntroCard>
        <IntroCard
          needTitle={true}
          title="이어하기"
          imageSrc="https://www.tailwind-kit.com/images/object/4.jpg"
        ></IntroCard>
        <IntroCard
          needTitle={true}
          title="방 들어가기"
          imageSrc="https://www.tailwind-kit.com/images/object/4.jpg"
        ></IntroCard>
      </div>
    </Container>
  );
}

export default Intro;
