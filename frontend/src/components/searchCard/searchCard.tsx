import axios from "axios";

interface friendProps {
  friendKey: number;
  name: string;
}

function SearchCard({ friendKey, name }: friendProps) {
  return (
    <li className="flex flex-row mb-2 border-gray-400">
      <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
        <InviteFriend friendKey={friendKey} name={name} />
      </div>
    </li>
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
    console.log(friendKey);
    axios
      .post("/api/friend", {
        userId: sessionStorage.getItem("userid"),
        friendId: friendKey,
      })
      .catch((err) => {
        console.log("에러 데스");
        console.log(err);
      });
  };
  return (
    <div className="text-xs text-gray-600 ">
      <div>
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium color-black ">{name}</div>
        </div>
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

export default SearchCard;
