import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface friends {
  friends: string[];
}

const initialState: friends = {
  friends: [],
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string[]>) => {
      state.friends = action.payload;
    },
  },
});

export const { add } = friendsSlice.actions;
export const friendsReducer = friendsSlice.reducer;
