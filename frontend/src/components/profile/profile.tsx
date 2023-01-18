import axios from "axios";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import FriendsCardList from "../friendsCardList/friendsCardList";
import { InvitedButton } from "../invitedButton/invitedButton";
import { Logout } from "../logout/logout";
import { add } from "../../states/friendsSlice";
import SearchFriendsList from "../searchFriendList/searchFriendList";

export function Profile() {
  const [isOpenFriendModal, setIsOpenFriendModal] = useState<boolean>(false);
  const [isOpenSearchFriendModal, setIsOpenSearchFriendModal] =
    useState<boolean>(false);

  const dispatch = useDispatch();

  const handleOpenFriendModal = useCallback(() => {
    isOpenFriendModal
      ? setIsOpenFriendModal(false)
      : setIsOpenFriendModal(true);

    axios
      .get("/api/friend/" + sessionStorage.getItem("userid"))
      .then((res) => {
        dispatch(add(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isOpenFriendModal]);

  const handleOpenSearchFriendModal = useCallback(() => {
    isOpenSearchFriendModal
      ? setIsOpenSearchFriendModal(false)
      : setIsOpenSearchFriendModal(true);
  }, [isOpenSearchFriendModal]);

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
        <button
          type="button"
          onClick={handleOpenSearchFriendModal}
          className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
          role="menuitem"
        >
          <span className="flex flex-col">
            <span>친구 추가</span>
          </span>
        </button>
        <InvitedButton />
        <Logout />
      </div>
      {isOpenFriendModal ? <FriendsCardList /> : null}
      {isOpenSearchFriendModal ? <SearchFriendsList /> : null}
    </div>
  );
}
