/* library */
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { IndexeddbPersistence } from "y-indexeddb";
import { USER_COLORS } from "./constants";
import * as awarenessProtocol from "y-protocols/awareness";

// export const doc = new Y.Doc();

// export const provider = new WebrtcProvider("temp_connection", doc, {
//   signaling: [
//     "wss://signaling.yjs.dev",
//     "wss://y-webrtc-signaling-eu.herokuapp.com",
//     "wss://y-webrtc-signaling-us.herokuapp.com",
//   ],
//   awareness: new awarenessProtocol.Awareness(doc),
//   maxConns: 20,
//   filterBcConns: false,
//   peerOpts: {},
// });

// // new IndexeddbPersistence("test", doc);

// export const awareness = provider.awareness;

// export const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");

// export const undoManager = new Y.UndoManager(yLines);

// const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// awareness.setLocalState({
//   point: [20, 20],
//   color: "black",
//   isActive: false,
//   windowSize: [window.innerWidth, window.innerHeight],
// });
