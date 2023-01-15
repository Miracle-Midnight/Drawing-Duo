import { useState } from "react";
import CreateRoomModal from "../createRoomModal/createRoomModal";

export function OpenRoomMenu() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <li className="mr-2">
      <button
        className="inline-block p-4 text-md text-gray-500 border-b-2 no-underline hover:border-purple-600 rounded-t-lg  hover:text-purple-600"
        aria-current="page"
        onClick={() => setModalShow(true)}
      >
        방 만들기
      </button>
      <CreateRoomModal show={modalShow} onHide={() => setModalShow(false)} />
    </li>
  );
}
