/* library */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

interface YjsType {
  yLines: Y.Array<Y.Map<any>> | null;
  provider: WebrtcProvider | null;
  undoManager: Y.UndoManager | null;
  doc: Y.Doc | null;
  awareness: any | null;
}

const initialState: YjsType = {
  yLines: null,
  provider: null,
  undoManager: null,
  doc: null,
  awareness: null,
};

export const yjsSlice = createSlice({
  name: "yjs",
  initialState,
  reducers: {
    setYjs: (
      state,
      action: PayloadAction<{
        yLines: Y.Array<Y.Map<any>>;
        provider: WebrtcProvider;
        undoManager: Y.UndoManager;
        doc: Y.Doc;
        awareness: any;
      }>
    ) => {
      state.yLines = action.payload.yLines;
      state.provider = action.payload.provider;
      state.undoManager = action.payload.undoManager;
      state.doc = action.payload.doc;
      state.awareness = action.payload.awareness;
    },
  },
});

export const { setYjs } = yjsSlice.actions;
export const yjsReducer = yjsSlice.reducer;
