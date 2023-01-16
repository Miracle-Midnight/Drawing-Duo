import FriendsCard from "../friendsCard/friendsCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import _ from "lodash";
import "./friendsCardList.css";
import CenteredModal from "../../components/modal/modal";
function FriendsCardList({ title, friends }: anyv) {
  const friendsList = useSelector((state: RootState) => state.friends.friends);

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
    <div className="right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50">
      <div className="container flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            친구 목록
          </h3>
        </div>
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          {friendsList.map((friend: any) => {
            (
              <FriendsCard
                name="김승덕"
                isConnected={true}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard
                name="김승덕"h
                isConnected={true}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard
                name="김승덕"
                isConnected={true}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard
                name="김승덕"
                isConnected={false}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard
                name="김승덕"
                isConnected={true}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
              <FriendsCard
                name="김승덕"
                isConnected={true}
                isInvited={true}
              ></FriendsCard>
              <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
              <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
              <FriendsCard name="김승덕" isConnected={true}></FriendsCard>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default FriendsCardList;
