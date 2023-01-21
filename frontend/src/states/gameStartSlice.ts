import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface gameStart {
  start: boolean;
}

const initialState: gameStart = {
  start: false,
};

export const gameStartSlice = createSlice({
  name: "gameStart",
  initialState,
  reducers: {
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.start = action.payload;
    },
  },
});

export const { setStarted } = gameStartSlice.actions;
export const gameStartReducer = gameStartSlice.reducer;
