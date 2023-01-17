import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface image {
  imageList: { [key: string]: any }[];
}

const initialState: image = {
  imageList: [],
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<{ [key: string]: any }[]>) => {
      state.imageList = action.payload;
    },
  },
});

export const { change } = imageSlice.actions;
export const imageReducer = imageSlice.reducer;
