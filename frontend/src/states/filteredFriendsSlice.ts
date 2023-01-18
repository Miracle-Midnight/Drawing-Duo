import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filteredFriends {
  filteredFriends: string[];
}

const initialState: filteredFriends = {
  filteredFriends: [],
};

export const FilteredFriendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string[]>) => {
      state.filteredFriends = action.payload;
    },
  },
});

export const { add } = FilteredFriendsSlice.actions;
export const filteredFriendsReducer = FilteredFriendsSlice.reducer;
