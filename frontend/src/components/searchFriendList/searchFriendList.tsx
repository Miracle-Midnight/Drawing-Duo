import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import _ from "lodash";
import SearchInput from "../searchInput/searchInput";
import SearchCard from "../searchCard/searchCard";
import { useDispatch } from "react-redux";

function SearchFriendsList({ friends }: any) {
  const filteredFriendsList = useSelector(
    (state: RootState) => state.filteredFriends.filteredFriends
  );

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
    <div className="absolute -right-20 top-0 w-[300px] h-[400px] overflow-auto bg-gray-300 z-50">
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <div className="w-full px-4 py-2 bg-white border rounded-md shadow sm:px-6 ">
          <h3 className="text-3xl font-medium leading-6 text-center text-gray-900 ">
            유저 검색
          </h3>
        </div>
        <SearchInput />
        <ul className="pl-0 flex flex-col w-full overflow-auto">
          {filteredFriendsList.map((friend: any, idx: number) => {
            console.log(friend.userid);
            return (
              <div key={idx}>
                <SearchCard
                  friendKey={friend.id}
                  name={friend.userid}
                ></SearchCard>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchFriendsList;
