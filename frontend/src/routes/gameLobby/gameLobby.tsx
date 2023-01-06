import React from "react";
import { Container } from "react-bootstrap";
import "./gameLobby.css";
import Canvas from "../../components/canvas/canvas";

function GameLobby() {
  const [isReady, setIsReady] = React.useState(false);

  const handleReady = () => {
    setIsReady(!isReady);
  };

  return (
    <div className="center">
      <Container className="flex">
        <div className="pr-5">
          <Canvas></Canvas>
          <div className="flex w-full justify-between pt-3">
            <div className="shadow rounded-2xl bg-white  p-4">
              <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://blog.kakaocdn.net/dn/upM3J/btq7ys3tudB/axLzJnkfCbDRae9OzcmZsK/img.jpg"
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                </div>
                <div className=" flex flex-col">
                  <span className="text-lg font-medium text-gray-600 ">
                    Charlie
                  </span>
                  <span
                    className={
                      isReady
                        ? "text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        : "text-s p-1 text-gray-500 text-center  rounded-lg shadow-md "
                    }
                  >
                    Ready
                  </span>
                </div>
              </div>
            </div>
            <div className="shadow rounded-2xl bg-white  p-4">
              <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjNfMTkz/MDAxNTU2MDE2ODQzNzY1.XIP77rvqSgGZPbY7vp_vhX_hGVWm1VBOlVaGe4ovrOYg.fav5jNf3PsvyBU2qVvZMBpJmevXZWRZAF3fa6LY1_tYg.JPEG.exia9133/g.jpg?type=w800"
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                </div>
                <div className=" flex flex-col">
                  <span className="text-lg font-medium text-gray-600 ">
                    Charlie
                  </span>
                  <span
                    className={
                      isReady
                        ? "text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        : "text-s p-1 text-gray-500 text-center  rounded-lg shadow-md "
                    }
                  >
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5">
          <Canvas></Canvas>
          <div className="flex w-full justify-between pt-3">
            <div className="shadow rounded-2xl bg-white  p-4">
              <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                </div>
                <div className=" flex flex-col">
                  <span className="text-lg font-medium text-gray-600 ">
                    Charlie
                  </span>
                  <span
                    className={
                      isReady
                        ? "text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        : "text-s p-1 text-gray-500 text-center  rounded-lg shadow-md "
                    }
                  >
                    Ready
                  </span>
                </div>
              </div>
            </div>
            <div className="shadow rounded-2xl bg-white  p-4">
              <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="https://news.nateimg.co.kr/orgImg/st/2020/07/09/1594284934_20191217153319-299.jpg"
                      className="mx-auto object-cover rounded-full h-16 w-16 "
                    />
                  </a>
                </div>
                <div className=" flex flex-col">
                  <span className="text-lg font-medium text-gray-600 ">
                    Charlie
                  </span>
                  <span
                    className={
                      isReady
                        ? "text-s p-1 text-gray-100 text-center bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        : "text-s p-1 text-gray-500 text-center  rounded-lg shadow-md "
                    }
                  >
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="chat  mx-auto rounded-md w-full h-full">
            <div className="container flex flex-col items-center justify-center w-full mx-auto pt-11 pb-11">
              <ul className="flex flex-col">
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">Jean Marc</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">Designer</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CEO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li className="flex flex-row mb-2 border-gray-400">
                  <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                      <div className="font-medium">CTO</div>
                      <div className="flex">
                        <div className="text-xs text-gray-600 ">
                          채팅 메시지 입니다
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 ">6:00 AM</div>
                  </div>
                </li>
                <li>
                  <div className="w-full rounded-md">
                    <div className="text-center font-light flex items-center justify-center">
                      <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                        <div className=" relative ">
                          <input
                            type="text"
                            id="form-subscribe-Subscribe"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="채팅"
                          />
                        </div>
                        <button
                          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                          type="submit"
                        >
                          보내기
                        </button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <button
              className="px-4 w-full py-2 ml-10 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
              type="button"
              onClick={handleReady}
            >
              Ready
            </button>
          </div>
        </div>
      </Container>
    </div>

    // <div className="center">
    //   <div className="game">
    //     <div className="team">
    //       <div className="drawing">게임 전 그림을 연습해보세요</div>
    //       <div className="team-ready">
    //         <div className="user">
    //           <p>user1</p>
    //           <Button variant="primary">준비완료</Button>
    //         </div>
    //         <div className="user">
    //           <p>user2</p>
    //           <Button variant="primary">준비완료</Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="team">
    //       <div className="drawing">게임 전 그림을 연습해보세요</div>
    //       <div className="team-ready">
    //         <div className="user">
    //           <p>user3</p>
    //           <Button variant="primary">준비완료</Button>
    //         </div>
    //         <div className="user">
    //           <p>user4</p>
    //           <Button variant="primary">준비대기</Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className="chat">
    //         <div className="chatList">
    //           <Card style={{ width: "18rem" }}>
    //             <ListGroup variant="flush">
    //               <ListGroup.Item>안녕하세요~</ListGroup.Item>
    //               <ListGroup.Item>네 반갑습니다!!</ListGroup.Item>
    //               <ListGroup.Item>그림 잘 그리시나요?</ListGroup.Item>
    //               <ListGroup.Item>레디 해주세요</ListGroup.Item>
    //               <ListGroup.Item>레디 해주세요</ListGroup.Item>
    //               <ListGroup.Item>레디 해주세요</ListGroup.Item>
    //               <ListGroup.Item>레디 해주세요</ListGroup.Item>
    //               <ListGroup.Item>레디 해주세요</ListGroup.Item>
    //             </ListGroup>
    //           </Card>
    //         </div>
    //         <div className="chatInput">
    //           <Form>
    //             <Form.Control type="text" placeholder="채팅을 입력하세요" />
    //           </Form>
    //           <Button variant="primary">전송</Button>
    //         </div>
    //       </div>
    //       <div>
    //         <a className="d-grid gap-1" href="http://localhost:6060">
    //           <Button className="d-grid gap-1" variant="primary">
    //             준비
    //           </Button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GameLobby;
