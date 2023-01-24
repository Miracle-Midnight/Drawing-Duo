import axios from "axios";

interface friendProps {
  friendKey: number;
  name: string;
  isConnected: boolean;
  isInvited: boolean;
  isInviteTab: boolean;
}

function FriendsCard({
  friendKey,
  name,
  isConnected,
  isInviteTab,
}: friendProps) {
  return (
    <li className="flex flex-row mb-2 border-gray-400">
      <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
        <IsOnline isConnected={isConnected} name={name} />
        {isInviteTab ? (
          <InviteFriend friendKey={friendKey} name={name} />
        ) : null}
      </div>
    </li>
  );
}

function IsOnline({
  isConnected,
  name,
}: {
  isConnected: boolean;
  name: string;
}) {
  const connection = isConnected ? "접속중" : "접속중 아님";

  return (
    <div className="flex-1 pl-1">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-gray-600 ">{connection}</div>
    </div>
  );
}

function InviteFriend({
  friendKey,
  name,
}: {
  friendKey: number;
  name: string;
}) {
  const inviteFriend = () => {
    axios
      .post("/friend/invite", {
        userId: sessionStorage.getItem("userid"),
        friendId: friendKey,
        roomId: sessionStorage.getItem("roomId"),
        nickname: sessionStorage.getItem("userNickname"),
      })
      .catch((err) => {
        console.log("에러 데스");
        console.log(err);
      });
  };
  return (
    <div className="text-xs text-gray-600 ">
      <div>
        <button
          onClick={inviteFriend}
          className="bg-green-300 hover:bg-green-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mr-1"
        >
          <span>초대</span>
        </button>
      </div>
    </div>
  );
}

export default FriendsCard;
