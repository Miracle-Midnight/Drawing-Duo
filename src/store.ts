/* library */
import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./components/SizeButton/sizeSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
