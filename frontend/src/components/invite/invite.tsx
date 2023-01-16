import { useCallback, useState } from "react";
import InviteCardList from "../inviteCardList/inviteCardList";

export function Invite() {
  const [isOpenInviteModal, setIsOpenInviteModal] = useState<boolean>(false);

  const handleInviteToggle = useCallback(() => {
    isOpenInviteModal
      ? setIsOpenInviteModal(false)
      : setIsOpenInviteModal(true);
  }, [isOpenInviteModal]);

  return (
    <div>
      <button
        type="button"
        className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={handleInviteToggle}
      >
        초대
      </button>
      {isOpenInviteModal ? <InviteCardList /> : null}
    </div>
  );
}
