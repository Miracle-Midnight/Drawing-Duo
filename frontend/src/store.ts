/* library */
import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./states/sizeSlice";
import { eraseReducer } from "./states/eraseSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
    erase: eraseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
