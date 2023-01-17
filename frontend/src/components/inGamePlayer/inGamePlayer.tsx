import { useEffect } from "react";

function InGamePlayer({ name }: any) {
  return (
    <li className="pb-1">
      <div className="border border-black rounded-full w-10 h-10 m-auto fill-purple-500"></div>
      <div className="text-center">{name}</div>
    </li>
  );
}

export default InGamePlayer;
