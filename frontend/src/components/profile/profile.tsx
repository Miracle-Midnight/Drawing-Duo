import { useState, useCallback } from "react";
import FriendsCardList from "../friendsCardList/friendsCardList";
import { InvitedButton } from "../invitedButton/invitedButton";
import { Logout } from "../logout/logout";

export function Profile() {
  const [isOpenFriendModal, setIsOpenFriendModal] = useState<boolean>(false);

  const handleOpenFriendModal = useCallback(() => {
    console.log(isOpenFriendModal);
    isOpenFriendModal
      ? setIsOpenFriendModal(false)
      : setIsOpenFriendModal(true);
  }, [isOpenFriendModal]);

  return (
    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
      <div
        className="py-1 "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <button
          type="button"
          onClick={handleOpenFriendModal}
          className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
          role="menuitem"
        >
          <span className="flex flex-col">
            <span>친구 목록</span>
          </span>
        </button>
        <InvitedButton />
        <Logout />
      </div>
      {isOpenFriendModal ? <FriendsCardList /> : null}
    </div>
  );
}
