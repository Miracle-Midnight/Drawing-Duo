// /* library */
// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";
// import { IndexeddbPersistence } from "y-indexeddb";
// import { USER_COLORS } from "./constants";
// import * as awarenessProtocol from "y-protocols/awareness";
// import axios from "axios";

// // export const doc = new Y.Doc();

// // export const provider = new WebrtcProvider("temp_connection", doc, {
// //   signaling: [
// //     "wss://signaling.yjs.dev",
// //     "wss://y-webrtc-signaling-eu.herokuapp.com",
// //     "wss://y-webrtc-signaling-us.herokuapp.com",
// //   ],
// //   awareness: new awarenessProtocol.Awareness(doc),
// //   maxConns: 20,
// //   filterBcConns: false,
// //   peerOpts: {},
// // });

// /* webrtc로 동일한 room에 있는 유저간 doc 동기화 */
// // export const provider = new WebrtcProvider(roo?),

//   // maxConns: 20,
//   // filterBcConns: false,
//   peerOpts: {
//     initiator: false,
//     channelConfig: {},
//     channelName: "<random string>",
//     config: {
//       iceServers: [
//         { urls: "stun:stun.l.google.com:19302" },
//         { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
//       ],
//     },
//     offerOptions: {},
//     answerOptions: {},
//     sdpTransform: function (sdp: any) {
//       return sdp;
//     },
//     stream: false,
//     streams: [],
//     trickle: true,
//     allowHalfTrickle: false,
//     wrtc: {}, // RTCPeerConnection/RTCSessionDescription/RTCIceCandidate
//     objectMode: false,
//   },
// }); // webrtc를 활용하여서 사용자와의 연동

// // export const awareness = provider.awareness;

// // export const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");

// /* 공유 데이터를 담는 YArray 생성, doc에서 lines라는 Y배열을 가진 clinet끼리 공유*/
// // export const yLines: Y.Array<Y.Map<any>> = doc.getArray("lines");
// // setInterval(() => console.log(yLines), 2000);

// // axios
// //   .post("/", yLines.toJSON())
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => console.log(err));

// // const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// // awareness.setLocalState({
// //   point: [20, 20],
// //   color: "black",
// //   isActive: false,
// //   windowSize: [window.innerWidth, window.innerHeight],
// // });
