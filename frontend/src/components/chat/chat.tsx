function Chat({ name = "기본값", message, isYou }: any) {
  return isYou === false ? (
    <li className="pl-3 pb-2 justify-end flex flex-col justify-end">
      <div className="flex justify-end">
        <div>{name}</div>

        <div>{message}</div>
      </div>
    </li>
  ) : (
    <li className="pl-3 pb-2 flex justify-end">
      <div className="flex flex-col ">
        <div>테스트</div>

        <div className="border-2 border-gray-100 p-2 px-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-purple-300 text-gray-700">{message}</div>
      </div>
    </li>
  );
}

export default Chat;
