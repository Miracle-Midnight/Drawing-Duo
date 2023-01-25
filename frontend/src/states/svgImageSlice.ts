import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface svgImage {
  image: FormData;
}

const initialState: svgImage = {
  image: new FormData(),
};

export const svgImageSlice = createSlice({
  name: "svgImage",
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<FormData>) => {
      state.image = action.payload;
    },
  },
});

export const { saveImage } = svgImageSlice.actions;
export const svgImageReducer = svgImageSlice.reducer;
