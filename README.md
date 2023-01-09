## 게임 로직 실행 과정

### 초기

- react가 실행되면서, ydoc이 생성되고 cavas component가 render
- 전역 변수로 선언된 ylines은 cavas component안에서 observe를 실행시켜서 변화 callback함수 실행

### 그리기

- svg 위에 포인터 down
  - startline 시작, ylines안에 yline 삽입(id, ypoints, iscomplete)
- svg 위에 포인터 move
  - addpointline 시작, ref에 저장된 line객체가 있는지 확인 후, ref안에 있는 ypoints안에 [x,y]값 삽입
- svg 위에 포인터 up
  - completeline 시작, ref에 저장된 iscomplete을 true로 변환 후, undefined

### 화면 렌더링

- ylines 값은 lines state에 업데이트
- canvas component의 반환 값으로 line component안에 lines 정보를 주고, 루프를 돌면서 path생성
