import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

// https://7942yongdae.tistory.com/104
function GameLobby() {
  return (
    <div className="center">
      <div className="game">
        <div className="team">
          <div className="drawing">게임 전 그림을 연습해보세요</div>
          <div className="team-ready">
            <div className="user">
              <p>user1</p>
              <Button variant="primary">준비완료</Button>
            </div>
            <div className="user">
              <p>user2</p>
              <Button variant="primary">준비완료</Button>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="drawing">게임 전 그림을 연습해보세요</div>
          <div className="team-ready">
            <div className="user">
              <p>user3</p>
              <Button variant="primary">준비완료</Button>
            </div>
            <div className="user">
              <p>user4</p>
              <Button variant="primary">준비대기</Button>
            </div>
          </div>
        </div>
        <div>
          <div className="chat">
            <div className="chatList">
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>안녕하세요~</ListGroup.Item>
                  <ListGroup.Item>네 반갑습니다!!</ListGroup.Item>
                  <ListGroup.Item>그림 잘 그리시나요?</ListGroup.Item>
                  <ListGroup.Item>레디 해주세요</ListGroup.Item>
                  <ListGroup.Item>레디 해주세요</ListGroup.Item>
                  <ListGroup.Item>레디 해주세요</ListGroup.Item>
                  <ListGroup.Item>레디 해주세요</ListGroup.Item>
                  <ListGroup.Item>레디 해주세요</ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="chatInput">
              <Form>
                <Form.Control type="text" placeholder="채팅을 입력하세요" />
              </Form>
              <Button variant="primary">전송</Button>
            </div>
          </div>
          <div>
            <a className="d-grid gap-1" href="http://localhost:6060">
              <Button className="d-grid gap-1" variant="primary">
                준비
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameLobby;
