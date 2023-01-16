import FriendsCard from "../friendsCard/friendsCard";
import { useState } from "react";

function FriendsCardList({ title }: any) {
  const [isCloseClicked, setIsCloseClicked] = useState(false);

  const closeFriendsCardList = () => {
    setIsCloseClicked(!isCloseClicked);
  };

  return (
    <>
      <div
        className={
          isCloseClicked === true
            ? "absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50  hidden"
            : "absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50"
        }
      >
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
            {/* // todo : 닫기 버튼 레이아웃 깨질수있으니 조정 필요, 닫기버튼 svg로 만들기 */}
            <button
              onClick={closeFriendsCardList}
              className="absolute right-5 px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
            >
              닫기
            </button>
            <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
              {title}
            </h3>
          </div>
          <ul className="pl-0 flex flex-col w-full overflow-auto">
            <FriendsCard
              name="김승덕"
              isConnected={true}
              isInvited={true}
            ></FriendsCard>
            <FriendsCard
              name="김승덕"
              isConnected={true}
              isInvited={false}
              isInviting={true}
            ></FriendsCard>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FriendsCardList;
