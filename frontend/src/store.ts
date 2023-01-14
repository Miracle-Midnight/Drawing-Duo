/* library */
import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./components/sizeButton/sizeSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
