import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/headerNav/header";
import Card from "../../components/card/card";
import "./intro.css";

function Intro() {
  return (
    <Container>
      <HeaderNav />
      <div className="text-center">
        <div className="text-4xl  font-bold text-purple-700 mt-20 mb-10">
          언제, 어디서든 다함께 그림을 만들어보아요!
        </div>
        <div className="text-xl  mb-20">
          <span className="text-purple-700">김승덕님</span> 환영합니다. 멀리있는
          친구, 연인과 같이 그림을 완성해봐요.
        </div>
      </div>
      <div className="flex flex-row whitespace-nowrap h-[500px] overflow-auto">
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
        <Card
          imageSrc="https://pbs.twimg.com/media/EW0fjrRUEAENAXT.jpg"
          needTitle={true}
          title="김영우 빨리와"
        ></Card>
      </div>
    </Container>
  );
}

export default Intro;
