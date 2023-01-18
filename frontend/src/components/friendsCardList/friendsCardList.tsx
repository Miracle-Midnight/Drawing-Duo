import FriendsCard from "../friendsCard/friendsCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import _ from "lodash";
import "./friendsCardList.css";
import SearchInput from "../searchInput/searchInput";
function FriendsCardList({ friends }: any) {
  const friendsList = useSelector((state: RootState) => state.friends.friends);

  const [searchValue, setSearchValue] = useState("");
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [modalShow, setModalShow] = useState(false);

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
    <div className="absolute right-0 top-0 w-[380px] h-screen overflow-auto bg-gray-300 bg-opacity-50 z-50">
      <div className="container flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 mb-2 bg-white border rounded-md shadow sm:px-6 ">
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            친구 목록
          </h3>
        </div>
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          {friendsList.map((friend: any, idx: number) => {
            return (
              <div key={idx}>
                <FriendsCard
                  friendKey={friend.id}
                  name={friend.userid}
                  isConnected={true}
                  isInvited={false}
                  isInviteTab={false}
                ></FriendsCard>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FriendsCardList;
