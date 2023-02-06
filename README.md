# 🎨 드로잉 듀오


## 목차

1.  [프로젝트 개요](#프로젝트-개요)
2.  [서비스 소개](#서비스-소개)
3.  [주요 기능](#주요-기능)
4.  [서비스 구조도](#서비스-구조도)
5.  [프로젝트 포스터](#프로젝트-포스터)
6.  [사용해보기](#사용해보기)
7.  [팀원](#팀원)


## 프로젝트 개요

제작 기간 : 2022.12.23 ~ 2023.01.28

팀원 : 5명

웹사이트 : [바로가기](https://drawingduo.site)

> "멀리 떨어져 만나지 못하는 가족, 친구, 연인들에게 온라인 상에서 **새로운 경험**을 제공해줄 수 없을까?”

저희는 새로운 경험을 그림을 통해 줄 수 있다고 생각했습니다.

그래서 가족, 친구, 연인들끼리 함께 **피포 페인팅**을 할 수 있는 서비스를 만들고자 했습니다.


## 서비스 소개

1. 메인 화면에서 그동안 그렸던 그림을 확인해볼 수 있습니다.

<!-- <img src="https://user-images.githubusercontent.com/81807434/216181678-286999ed-2136-4b5c-aa3e-22b76acf0bac.gif"  width="70%"> -->

2. 친구와 함께 원하는 그림을 같이 고를 수 있습니다.

<img src="https://user-images.githubusercontent.com/81807434/216183069-792b917d-cc0c-4d74-9d40-07c7a15100a2.gif"  width="70%">

3. 대화를 하며 친구와 함께 그림을 그릴 수 있습니다.

<img src="https://user-images.githubusercontent.com/81807434/216184505-f8cd824f-0a15-4537-aef1-41afaee4a44b.gif"  width="70%">


## 주요 기능

• ✅  음성채팅 ( Peer to Peer )

• ✅  그림 그리기 ( Peer to Peer )

• ✅  그림 실시간 동기화

• ✅  그림 저장


## 서비스 구조도

![서비스 구조도](https://user-images.githubusercontent.com/81807434/216191326-ef1c4f13-8a1a-4eec-b63d-ceb48680d714.png)


## 프로젝트 포스터

<p align="center">
  <img src="https://user-images.githubusercontent.com/108216455/216051043-249296e1-f6cf-403d-996f-2ce5d136ebcd.jpg">
</p>


## 사용해보기

### Frontend
```
$ cd frontend
$ npm install
$ npm run start
```
### Backend
```
$ cd backend
$ npm install
$ npm run start:dev
```


## 팀원

### 김채욱

- 인게임 로직 구현
  - 방 마다 그림 데이터 별도 관리
  - 동시적 선 그리기 구현
  - 뒤로가기, 앞으로가기
  - 선 지우기 기능
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

### 김영우

- DB 설계
- Nest JS API 개발
- 시그널링 서버 구축
  - 실시간 음성 채팅
  - CRDT 라이브러리(Yjs)
- 통신 안정성을 위한 TURN 서버 구축
- Socket.IO를 활용한 소켓 프로그래밍
- GitHub Actions와 AWS CodeDeploy를 이용한 CI/CD 구축 및 Dockerizing

### 김승덕
- UX/UI 디자인
- 페이지 별 컴포넌트 구현
    - Atomic design system 적용
    - tailwind.css를 활용한 스타일링
- 프론트엔드 서버 배포
    - AWS S3를 활용한 정적 웹 호스팅
    - AWS CloudFront를 활용한 CDN 배포
    - AWS Route53을 활용한 도메인 연결
    - AWS Certificate Manager을 활용한 SSL 인증서 발급


---

Copyright to [@Miracle-Midnight](https://github.com/Miracle-Midnight/Drawing-Duo)
