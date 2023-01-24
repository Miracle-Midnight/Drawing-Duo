import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../states/filteredFriendsSlice";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFriends, setFilteredFriends] = useState([]);

  const dispatch = useDispatch();

  const handleSearchButton = (event: any) => {
    axios
      .get("/friend/serch/" + searchValue)
      .then((res) => {
        dispatch(add(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (event: any) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="border p-3 bg-white rounded-lg my-2 w-full grid grid-cols-10 justify-between">
      <input
        type="text"
        className="w-full border col-span-8 border-purple-300 rounded-tl-md rounded-bl-md"
        onChange={handleSearch}
      />
      <button
        className="w-full bg-purple-300 col-span-2 px-1 hover:bg-purple-600 rounded-tr-md rounded-br-md hover:text-white"
        onClick={handleSearchButton}
      >
        검색
      </button>
    </div>
  );
}

export default SearchInput;
