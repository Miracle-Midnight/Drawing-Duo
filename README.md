# 🎨 드로잉 듀오

<br/>

## 소개

### 친구, 가족과 함께 피포페인팅 드로잉 듀오!

제작 기간 : 2022.12.17 ~ 2023.01.28

### 1. 메인 화면에서 그동안 그렸던 그림을 확인해보아요!

<img src="https://user-images.githubusercontent.com/81807434/216181678-286999ed-2136-4b5c-aa3e-22b76acf0bac.gif"  width="70%">


### 2. 친구와 함께 원하는 그림을 같이 골라보아요!

<img src="https://user-images.githubusercontent.com/81807434/216183069-792b917d-cc0c-4d74-9d40-07c7a15100a2.gif"  width="70%">

### 3. 대화를 하며 친구와 함께 그림을 그려보아요!

<img src="https://user-images.githubusercontent.com/81807434/216184505-f8cd824f-0a15-4537-aef1-41afaee4a44b.gif"  width="70%">



---

<br/>
<br/>

## 주요 기능

• ✅  음성채팅 ( Peer to Peer )

• ✅  그림 그리기 ( Peer to Peer )

• ✅  그림 저장

• ✅  그림 불러오기

<br/>
<br/>

---

<br/>
<br/>

## 포스터

<p align="center">
  <img src="https://user-images.githubusercontent.com/108216455/216051043-249296e1-f6cf-403d-996f-2ce5d136ebcd.jpg">
</p>

---

<br/>
<br/>

## Steps to run

---

```
Frontend
$ cd frontend
$ npm install
$ npm run start

Backend
$ cd backend
$ npm install
$ npm run start:dev
```

## Authors

---

### 김채욱

- 인게임 로직 구현
  - 방 마다 그림 데이터 별도 관리
  - 동시적 선 그리기 구현
- 초기 백엔드 세팅 및 데이터베이스 설계
  - 애플리케이션 서비스를 고려해 entity의 관계 설정

### 윤영운

- DB 설계
- NEST JS REST API
- JWT 로그인, 회원가입
- 이미지 파일 업로드
- 서버 배포 및 인프라 구축

### 박선도

- 서버 - 클라이언트 API 연동
- WebRTC 음성채팅 구현
  - 게임 대기실, 인 게임 페이지 진입 시 음성채팅 연결
  - Socket.io 라이브러리를 사용해 시그널링 서버와 연결
- 페이지 별 컴포넌트 구현
- 그림 저장 기능 구현
  - 방대한 양의 path 데이터를 저장하기 위해 이미지 파일로 변환 후 저장함
  - Html2canvas 메서드로 DOM을 canvas 객체로 변환
  - toBlob 메서드로 canvas 객체를 blob 객체로 변환
  - blob 객체를 FormData 형식으로 Post요청해 성공 시 서버에 저장

### 김영우

- DB 설계
- Nest JS API 개발
- 시그널링 서버 구축
  - 실시간 음성 채팅
  - CRDT 라이브러리(Yjs)
- 통신 안정성을 위한 TURN 서버 구축
- Socket.IO를 활용한 소켓 프로그래밍
- GitHub Actions와 AWS CodeDeploy를 이용하여 CI/CD 구축 및 Dockerizing

Copyright to [@Miracle-Midnight](https://github.com/Miracle-Midnight/Drawing-Duo)
