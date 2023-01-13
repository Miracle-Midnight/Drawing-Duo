import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface sizeState {
  value: number;
}

let initialState: sizeState = {
  value: 20,
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    changeSize: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changeSize } = sizeSlice.actions;

export const sizeReducer = sizeSlice.reducer;
