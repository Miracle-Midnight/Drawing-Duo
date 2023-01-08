import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

/*crdt 공유 문서 생성*/
export const doc = new Y.Doc();

/* 공유 데이터를 담는 YArray 생성, doc에서 lines라는 Y배열을 가진 clinet끼리 공유*/
export const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");