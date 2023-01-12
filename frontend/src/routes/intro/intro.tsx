import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/headerNav/header";
import Card from "../../components/card/card";
import "./intro.css";
import FriendsCard from "../../components/friendsCard/friendsCard";

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
      <div className="absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50">
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
            <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
              친구 목록
            </h3>
          </div>
          <ul className="pl-0 flex flex-col w-full overflow-auto">
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Intro;
