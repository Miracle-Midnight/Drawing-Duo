import axios from "axios";
import { useCallback, useState } from "react";
import InvitedCardList from "../invitedCardList/invitedCardList";

export interface inviteList {
  invitedList: Array<any>;
}

export function InvitedButton() {
  const [isClickInviteToggle, setIsClickInviteToggle] =
    useState<boolean>(false);

  const [invitedList, setInvitedList] = useState<Array<any>>([]);
  const handleInviteToggle = useCallback(() => {
    isClickInviteToggle
      ? setIsClickInviteToggle(false)
      : setIsClickInviteToggle(true);

    axios
      .get("/friend/invite/" + sessionStorage.getItem("userid"))
      .then((res) => {
        setInvitedList(res.data.data);
      })
      .catch((err) => {
        console.log("에러 데스");
        console.log(err);
      });
  }, [isClickInviteToggle]);

  return (
    <div>
      <button
        type="button"
        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
        role="menuitem"
        onClick={handleInviteToggle}
      >
        <span className="flex flex-col">
          <span>초대 목록</span>
        </span>
      </button>
      {isClickInviteToggle ? (
        <InvitedCardList invitedList={invitedList} />
      ) : null}
    </div>
  );
}
