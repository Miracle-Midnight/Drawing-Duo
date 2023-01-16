import FriendsCard from "../friendsCard/friendsCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
function FriendsCardList() {
  const friendsList = useSelector((state: RootState) => state.friends.friends);

  return (
    <div className="right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50">
      <div className="container flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            친구 목록
          </h3>
        </div>
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          {friendsList.map((friend: any) => {
            return (
              <FriendsCard
                friendKey={friend.id}
                name={friend.userid}
                isConnected={true}
                isInvited={false}
                isInviteTab={false}
              ></FriendsCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FriendsCardList;
