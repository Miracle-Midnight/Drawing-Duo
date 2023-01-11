import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./register.css";
import logo from "../../assets/drawing-duo-logo-removebg.png";

function Register() {
  return (
    <Container className="center">
      <div className="flex flex-col max-w-md px-4 py-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
          회원가입
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          이미 가입하셨나요?
          <a
            href="#"
            target="_blank"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            로그인
          </a>
          을 로그인을 해주세요.
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="nickname"
                  placeholder="닉네임"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="ID"
                  placeholder="ID"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="passwordCheck"
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
              <button
                type="submit"
                className="py-2 px-4 mr-2  bg-gray-700 hover:bg-gray-500 focus:ring-gray-300 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                취소
              </button>
              <button
                type="submit"
                className="py-2 px-4 ml-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
