import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface mic {
  isMicOn: boolean;
}

const initialState: mic = {
  isMicOn: false,
};

export const micSlice = createSlice({
  name: "mic",
  initialState,
  reducers: {
    isMicOn: (state, action: PayloadAction<boolean>) => {
      state.isMicOn = action.payload;
    },
  },
});

export const { isMicOn } = micSlice.actions;
export const micReducer = micSlice.reducer;
