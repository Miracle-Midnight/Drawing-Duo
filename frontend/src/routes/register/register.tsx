import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import "./register.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);
  };

  const handleInputPwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwCheck(e.target.value);
  };

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNickname(e.target.value);
  };

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const onClickRegister = () => {
    if (inputId === "") {
      alert("입력하신 id가 유효하지 않습니다.");
    } else if (inputPw === "") {
      alert("입력하신 pw가 유효하지 않습니다.");
    } else if (inputPwCheck !== inputPw) {
      alert("입력하신 pw가 일치하지 않습니다.");
      // } else if (inputNickname === "") {
      //   alert("입력하신 닉네임이 유효하지 않습니다.");
      // } else if (inputEmail === "") {
      //   alert("입력하신 이메일이 유효하지 않습니다.");
    } else {
      axios
        .post("/api/users/signup", {
          userid: inputId,
          password: inputPw,
          // nickname: inputNickname,
          // email: inputEmail,
        })
        .then((res) => {
          alert("회원가입 성공");
          document.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // todo : 유효성 검사 추가해야함
  return (
    <Container className="center">
      <div className="flex flex-col max-w-md px-4 py-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div>
          <img
            src="https://github.com/Miracle-Midnight/Drawing-Duo/blob/refactor/ksd/makeLayout/frontend/src/assets/drawing-duo-logo.png?raw=true"
            alt="logo"
          />
        </div>
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
          회원가입
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          이미 가입하셨나요?
          <Link
            to="/"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            로그인
          </Link>
          을 해주세요.
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="nickname"
                  onChange={handleInputName}
                  placeholder="닉네임"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="ID"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="ID"
                  onChange={handleInputId}
                  placeholder="ID"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  onChange={handleInputPw}
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="passwordCheck"
                  onChange={handleInputPwCheck}
                  placeholder="비밀번호 확인"
                />
              </div>
            </div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="이미지"
                // aria-label="이미지"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <Button variant="outline-secondary" id="button-addon2">
                이미지 업로드
              </Button>
            </InputGroup>

            <div className="flex w-full my-4">
              <Link
                to="/"
                className="py-2 px-4 mr-2  bg-gray-700 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <button type="submit">취소</button>
              </Link>
              <button
                type="button"
                className="py-2 px-4 ml-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={onClickRegister}
              >
                회원 가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Register;
