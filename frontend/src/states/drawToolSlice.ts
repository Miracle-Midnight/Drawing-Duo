/* library */
import { createSlice } from "@reduxjs/toolkit";

type drawToolCategory = "draw" | "erase" | "fill";

interface drawToolType {
  currentTool: drawToolCategory;
}

const initialState: drawToolType = {
  currentTool: "draw",
};

export const drawToolSlice = createSlice({
  name: "drawTool",
  initialState,
  reducers: {
    erase: (state) => {
      state.currentTool = "erase";
    },
    draw: (state) => {
      state.currentTool = "draw";
    },
    fill: (state) => {
      state.currentTool = "fill";
    },
  },
});

export const { erase, draw, fill } = drawToolSlice.actions;
export const drawToolReducer = drawToolSlice.reducer;
