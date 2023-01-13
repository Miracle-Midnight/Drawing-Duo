function Chat({ name = "기본값", message, isYou }: any) {
  return isYou === false ? (
    <li className="pl-3 pb-2 flex justify-start">
      <div className="flex flex-col ">
        <div>{name}</div>

        <div className="border-2 border-gray-100 p-2 px-4 rounded-tl-xl rounded-tr-xl rounded-br-xl bg-purple-300 text-gray-700">
          {message}
        </div>
      </div>
    </li>
  ) : (
    <li className="pl-3 pb-2 flex justify-end">
      <div className="flex flex-col ">
        <div>{name}</div>

        <div className="border-2 border-gray-100 p-2 px-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-purple-300 text-gray-700">
          {message}
        </div>
      </div>
    </li>
  );
}

export default Chat;
