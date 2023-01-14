function Chat({ name="기본값", message }: any) {
  return (
    <>
      <li className="pl-3 pb-2">
        <span>{name}</span>
        <span className="px-1">:</span>
        <span>{message}</span>
      </li>
    </>
  );
}

export default Chat;
