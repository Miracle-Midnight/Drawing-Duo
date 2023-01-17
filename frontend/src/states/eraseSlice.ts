/* library */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface erase {
  isErase: boolean;
}

const initialState: erase = {
  isErase: false,
};

export const eraseSlice = createSlice({
  name: "erase",
  initialState,
  reducers: {
    erase: (state) => {
      state.isErase = true;
    },
    draw: (state) => {
      state.isErase = false;
    },
  },
});

export const { erase, draw } = eraseSlice.actions;
export const eraseReducer = eraseSlice.reducer;
