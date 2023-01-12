function FriendsCard({ name, isConnected, isInvited }: any) {
  return (
    <li className="flex flex-row mb-2 border-gray-400">
      <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium ">{name}</div>
          {isConnected === true ? (
            <div className="text-sm text-gray-600 ">접속중</div>
          ) : (
            <div className="text-sm text-gray-600 ">접속중 아님</div>
          )}
        </div>
        <div className="text-xs text-gray-600 ">
          {isInvited === true ? (
            <div>
              {/* todo : 수락, 거절 버튼 svg로 만들기 */}
              <button className="bg-green-300 hover:bg-green-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mr-1">
                <span>수락</span>
              </button>
              <button className="bg-red-300 hover:bg-red-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <span>거절</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default FriendsCard;
