import FriendsCard from "../friendsCard/friendsCard";
import { useState, useEffect } from "react";
import _ from "lodash";
import "./friendsCardList.css";
import CenteredModal from "../../components/modal/modal";

function FriendsCardList({ title, friends }: any) {
  const [isCloseClicked, setIsCloseClicked] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [modalShow, setModalShow] = useState(false);

  const closeFriendsCardList = () => {
    setIsCloseClicked(!isCloseClicked);
  };

  useEffect(() => {
    filterFriends();
  }, [searchValue]);

  const handleSearch = (event: any) => {
    setSearchValue(event.target.value);
  };

  const filterFriends = _.debounce(() => {
    const filtered = friends.filter((friend: any) => {
      return friend.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredFriends(filtered);
  }, 250);

  return (
    <>
      <div
        className={
          isCloseClicked === true
            ? "absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50  hidden"
            : "absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50"
        }
      >
        <div className="container flex flex-col items-center justify-center w-full mx-auto">
          <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
            {/* // todo : 닫기 버튼 레이아웃 깨질수있으니 조정 필요, 닫기버튼 svg로 만들기 */}
            <button
              onClick={closeFriendsCardList}
              className="absolute right-5 px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
            >
              닫기
            </button>
            <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
              {title}
            </h3>
            <div className="w-full">
              <button
                className="w-full mb-2 mt-3 py-2 text-md font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500"
                onClick={() => setModalShow(true)}
              >
                친구 추가
              </button>
            </div>
          </div>
          <CenteredModal show={modalShow} headerTitle="친구 추가" bodyTitle="친구 닉네임" buttonTitle="친구 추가" placeholder="닉네임을 입력하세요"  onHide={() => setModalShow(false)} />
          <div className="search-container">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="친구를 검색해보세요"
            />
          </div>
          <ul className="pl-0 flex flex-col w-full overflow-auto">
            {filteredFriends.map((friend: any) => (
              <FriendsCard
                name={friend.name}
                isConnected={friend.isConnected}
                isInvited={friend.isInvited}
                isInviting={friend.isInviting}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FriendsCardList;
