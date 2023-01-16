import axios from "axios";
import { useEffect } from "react";
import InviteCard from "../inviteCard/inviteCard";
function InviteCardList() {


  return (
    <div className="right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50">
      <div className="container flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
          {/* todo : 닫기 버튼 레이아웃 깨질수있으니 조정 필요, 닫기버튼 svg로 만들기 */}
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            친구 목록
          </h3>
        </div>
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          <InviteCard name="김승덕" isConnected={true}></InviteCard>
          <InviteCard name="김승덕" isConnected={true}></InviteCard>
        </ul>
      </div>
    </div>
  );
}

export default InviteCardList;
