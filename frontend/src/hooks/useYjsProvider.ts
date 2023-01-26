/* library */
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import * as awarenessProtocol from "y-protocols/awareness";
// import { useSelector } from "react-redux";

export function useYjsProvider() {
  const roomId: string = sessionStorage.getItem("roomId")!;
  const doc = new Y.Doc();
  const provider = new WebrtcProvider(roomId, doc, {
    // signaling: [
    //   // "wss://signaling.yjs.dev",
    //   // "wss://y-webrtc-signaling-eu.herokuapp.com",
    //   "wss://y-webrtc-signaling-us.herokuapp.com",
    //   // "wss://43.200.177.227:4000",
    // ],
    // awareness: new awarenessProtocol.Awareness(doc),
    // maxConns: 20,
    // filterBcConns: false,
    peerOpts: {
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          {
            urls: "turn:3.35.19.170:3478?transport=udp",
            username: "drawingduo",
            credential: "9697",
          },
        ],
      },
    },
  });
  const awareness = provider.awareness;
  const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");
  const undoManager = new Y.UndoManager(yLines);

  awareness.setLocalState({
    point: [20, 20],
    color: "black",
    isActive: false,
    windowSize: [window.innerWidth, window.innerHeight],
  });

  return { yLines, provider, undoManager, doc, awareness };
}

export default useYjsProvider;
