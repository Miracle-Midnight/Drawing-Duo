import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    // if (inputId !== "123") {
    //   alert("입력하신 id가 일치하지 않습니다.");
    // } else if (inputPw !== "123") {
    //   alert("입력하신 pw가 일치하지 않습니다.");
    // } else {
    //   alert("로그인 성공");
    //   sessionStorage.setItem("userKey", inputId);
    //   document.location.href = "/";
    // }

    axios
      .post("/api/users/login", {
        userid: inputId,
        password: inputPw,
      })
      .then((res) => {
        console.log(res.data.data.userid);
        console.log(res.data.data.token);
        // if (res.data.userId === undefined) {
        //   // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
        //   alert("입력하신 id가 일치하지 않습니다.");
        // } else if (res.data.userId === null) {
        //   // pw 일치하지 않는 경우 userId = null, msg = '입력하신 pw 가 일치하지 않습니다.'
        //   alert("입력하신 pw가 일치하지 않습니다.");
        // } else {
        //   // id, pw 일치하는 경우 userId = id, msg = '로그인 성공'
        alert("로그인 성공");
        sessionStorage.setItem("userKey", res.data.data.userid);
        sessionStorage.setItem("userToken", res.data.data.token);
        sessionStorage.setItem("userNickname", res.data.data.nickname);
        document.location.href = "/";
        // }
      })
      .catch((err) => {
        alert("id, pw를 확인해주세요!");
        console.log(err);
      });
  };

  const onClickRegister = () => {
    navigate("/Register");
  };

  // // 페이지 렌더링 후 가장 처음 호출되는 함수
  // useEffect(
  //   () => {
  //     axios
  //       .get("/")
  //       .then((res) => console.log(res))
  //       .catch();
  //   },
  //   // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  //   []
  // );

  return (
    <Container className="center">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div>
          <img
            src="https://raw.githubusercontent.com/Miracle-Midnight/Drawing-Duo/frontend/frontend/src/assets/drawing-duo-logo.png"
            alt="logo"
          />
        </div>

        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={inputId}
                  onChange={handleInputId}
                  placeholder="ID"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={inputPw}
                  onChange={handleInputPw}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="button"
                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={onClickLogin}
              >
                Login
              </button>
            </div>
            <div className="flex w-full">
              <button
                type="button"
                className="py-2 px-4 mt-4  bg-purple-500 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={onClickRegister}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to="Register"
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">Forgot Your Password?</span>
          </Link>
        </div>
      </div>
    </Container>
    // <div>
    //   <h1 className="title">Drawing Duo</h1>
    //   <div className="Login">
    //     <Container>
    //       <Form>
    //         <Form.Group className="mb-3" controlId="">
    //           <Form.Label htmlFor="input_id">ID</Form.Label>
    //           <Form.Control
    //             value={inputId}
    //             onChange={handleInputId}
    //             type="text"
    //             placeholder="아이디를 입력해주세요!"
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label htmlFor="input_pw">Password</Form.Label>
    //           <Form.Control
    //             value={inputPw}
    //             onChange={handleInputPw}
    //             type="password"
    //             placeholder="비밀번호를 입력해주세요!"
    //           />
    //         </Form.Group>
    //         <div className="d-grid gap-1">
    //           <Button
    //             className="loginButton"
    //             variant="secondary"
    //             type="button"
    //             onClick={onClickLogin}
    //           >
    //             로그인
    //           </Button>
    //         </div>
    //         <br />
    //         <div className="d-grid gap-1">
    //           <Link to="Register" className="d-grid gap-1">
    //             <Button
    //               className="loginButton"
    //               variant="secondary"
    //               type="submit"
    //             >
    //               회원 가입
    //             </Button>
    //           </Link>
    //         </div>
    //       </Form>
    //     </Container>
    //   </div>
    // </div>
  );
}

export default Login;
