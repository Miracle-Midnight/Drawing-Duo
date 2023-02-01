import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isExit {
  isExit: boolean;
}

const initialState: isExit = {
  isExit: false,
};

export const isExitSlice = createSlice({
  name: "isExit",
  initialState,
  reducers: {
    isExitt: (state, action: PayloadAction<boolean>) => {
      state.isExit = action.payload;
    },
  },
});

export const { isExitt } = isExitSlice.actions;
export const isExitReducer = isExitSlice.reducer;
