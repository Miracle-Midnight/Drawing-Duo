import { inviteList } from "../invitedButton/invitedButton";
import InvitedCard from "../invitedCard/invitedCard";

function InvitedCardList({ invitedList }: inviteList) {
  console.log("====================================");
  console.log(invitedList);
  return (
    <div className="right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50">
      <div className="container flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            친구 목록
          </h3>
        </div>
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          {invitedList.map((e: any) => {
            return (
              <div key={e.inviteUser}>
                <InvitedCard
                  userKey={parseInt(e.inviteUser)}
                  inviteRoom={e.inviteRoom}
                  inviteNickname={e.inviteNickname}
                  isConnected={true}
                  isInvited={true}
                ></InvitedCard>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default InvitedCardList;
