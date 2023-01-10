import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/headerNav/header";
import Card from "../../components/card/card";
import "./makeRoom.css";

function MakeRoom() {
  return (
    <Container>
      <HeaderNav isMakeRoom={true} />
      <div className="flex justify-between">

        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
            방 만들기
          </div>

          <div className="mt-8">
            <form action="#" autoComplete="off">
              <div className="mb-2 text-purple-500 font-bold">방 제목</div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <input
                    type="text"
                    id="sign-in-email"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="빨리와"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="mb-2 text-purple-500 font-bold">비밀번호</div>
                <div className="flex relative ">
                  <input
                    type="password"
                    id="sign-in-email"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  방 만들기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MakeRoom;
