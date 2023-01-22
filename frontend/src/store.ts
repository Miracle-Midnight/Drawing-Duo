/* library */
import { configureStore } from "@reduxjs/toolkit";
/* module from local */
import { sizeReducer } from "./states/sizeSlice";
import { drawToolReducer } from "./states/drawToolSlice";
import { imageReducer } from "./states/imageSlice";
import { friendsReducer } from "./states/friendsSlice";
import { filteredFriendsReducer } from "./states/filteredFriendsSlice";
import { gameStartReducer } from "./states/gameStartSlice";
import { yjsReducer } from "./states/yjsSlice";

export const store = configureStore({
  reducer: {
    size: sizeReducer,
    drawTool: drawToolReducer,
    image: imageReducer,
    friends: friendsReducer,
    filteredFriends: filteredFriendsReducer,
    gameStart: gameStartReducer,
    yjs: yjsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
