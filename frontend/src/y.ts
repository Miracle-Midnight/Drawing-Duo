/* library */
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { IndexeddbPersistence } from "y-indexeddb";
import { USER_COLORS } from "./constants";
import * as awarenessProtocol from "y-protocols/awareness";

const roomId: string = sessionStorage.getItem("roomId")!;

/*crdt 공유 문서 생성*/
export const doc = new Y.Doc();

/* webrtc로 동일한 room에 있는 유저간 doc 동기화 */
export const provider = new WebrtcProvider(roomId, doc, {
  // Specify signaling servers. The client will connect to every signaling server concurrently to find other peers as fast as possible.
  signaling: ["ws://54.180.118.157:4000"],
  awareness: new awarenessProtocol.Awareness(doc),
  maxConns: 20,
  filterBcConns: true,
  peerOpts: {},
}); // webrtc를 활용하여서 사용자와의 연동

/* 세션을 통해 document정보 유지 */
// new IndexeddbPersistence("test", doc);

/* 
유저 상태 정보를 관리하는데 사용
만약 유저의 상태 정보가 null이면, offline으로 마크가 되며, 10초간 유저 상태 정보가 전달이
안될 시에는 offline으로 마크
*/
export const awareness = provider.awareness;

/* 공유 데이터를 담는 YArray 생성, doc에서 lines라는 Y배열을 가진 clinet끼리 공유*/
export const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");

/* 취소 기능을 위해 manager 생성 */
export const undoManager = new Y.UndoManager(yLines);

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

awareness.setLocalState({
  point: [20, 20],
  color: random(USER_COLORS),
  isActive: false,
  windowSize: [window.innerWidth, window.innerHeight],
});
