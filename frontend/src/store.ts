/* library */
import { configureStore } from "@reduxjs/toolkit";
import { sizeReducer } from "./states/sizeSlice";
import { eraseReducer } from "./states/eraseSlice";
import { imageReducer } from "./states/imageSlice";
import { friendsReducer } from "./states/friendsSlice";
import { filteredFriendsReducer } from "./states/filteredFriendsSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
    erase: eraseReducer,
    image: imageReducer,
    friends: friendsReducer,
    filteredFriends: filteredFriendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
