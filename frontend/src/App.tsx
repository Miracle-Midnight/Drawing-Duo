import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./routes/login/login";
import Intro from "./routes/intro/intro";

const App: React.FC = () => {
  // 로그인 상태 관리
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem("userKey") === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  return (
    <div className="App">
      {isLogin ? (
        // Lobby 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Intro />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
