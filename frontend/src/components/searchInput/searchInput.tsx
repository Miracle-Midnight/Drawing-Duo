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
      .get("/api/friend/serch/" + searchValue)
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
    <div>
      <input type="text" onChange={handleSearch} />
      <button onClick={handleSearchButton}>검색</button>
    </div>
  );
}

export default SearchInput;
