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

## 성능적 측면

### 새로운 stroke 저장

- 배열 뒤에 새로운 stroke을 저장하는 것은 O(1)
- re-render이 되어도 메모리에 전체 lines와 현재 line이 저장되기에, 성능적 우수
- Ymap에 동일한 idx에 insert한 경우 ele마다 object형식으로 메타데이터가 추가되는데, 이는
  성능적으로 저하, 그 대신 left->right형식으로 insert한 경우 object 형태로 ele가 추가되는게
  아니고, 1개의 object안에 여러 ele가 들어간다
- doc.transac을 통해 event-update를 1개의 transaction안으로 묶어서, update횟수를 줄임

### 기능 미구현

- Canvas내부에 div태그에 의해 마우스 포인터 위치가 변경됨
- 삭제를 마우스를 누르고 해야하는데, mouseover로 구현

### 문제 및 해결

- 스코롤을 내리면 마우스 포인터와 사뭇 다른 곳에 그려진다 => event.clientx를 사용시 vierport기준이여서 화면을 넘어서 그림을 그리고 마우스 포인터가 달라지기에, event.pagex로 스크롤까지 포함하여 x와y좌표 값을 구한다

### 궁금중

- react.memo를 사용하여서 메모리에 저장 시켜 성능을 향상 시키는데, 그러면 다른 object들도
  메모리에 있는데, 왜 속도 차이가 나는가? object를 재성생해야하기 때문인가?
