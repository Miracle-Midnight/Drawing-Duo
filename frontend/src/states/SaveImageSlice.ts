import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

interface saveImage {
  saveImage: HTMLDivElement | null;
}

const initialState: saveImage = {
  saveImage: null,
};

export const saveImageSlice = createSlice({
  name: "saveImage",
  initialState,
  reducers: {
    saveImagee: (state, action: PayloadAction<{ divRef: HTMLDivElement }>) => {
      state.saveImage = action.payload.divRef as WritableDraft<HTMLDivElement>;
    },
  },
});

export const { saveImagee } = saveImageSlice.actions;
export const saveImageReducer = saveImageSlice.reducer;
