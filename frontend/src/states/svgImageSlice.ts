import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface svgImage {
  formData: FormData;
}

const initialState: svgImage = {
  formData: new FormData(),
};

export const svgImageSlice = createSlice({
  name: "svgImage",
  initialState,
  reducers: {
    saveImage: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
  },
});

export const { saveImage } = svgImageSlice.actions;
export const svgImageReducer = svgImageSlice.reducer;
