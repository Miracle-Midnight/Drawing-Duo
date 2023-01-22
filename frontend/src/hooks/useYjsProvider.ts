/* library */
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import * as awarenessProtocol from "y-protocols/awareness";
// import { useSelector } from "react-redux";

export function useYjsProvider() {
  const roomId: string = sessionStorage.getItem("roomId")!;
  const doc = new Y.Doc();
  const provider = new WebrtcProvider(roomId, doc, {
    signaling: [
      "wss://signaling.yjs.dev",
      "wss://y-webrtc-signaling-eu.herokuapp.com",
      "wss://y-webrtc-signaling-us.herokuapp.com",
    ],
    awareness: new awarenessProtocol.Awareness(doc),
    maxConns: 20,
    filterBcConns: false,
    peerOpts: {},
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
