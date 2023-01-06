import React from "react";
import "./App.css";

import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import * as awarenessProtocol from "y-protocols/awareness.js";
// Run : PORT=4444 node ./bin/server.js

const doc = new Y.Doc();
const provider = new WebrtcProvider("test", doc, {
  // Specify signaling servers. The client will connect to every signaling server concurrently to find other peers as fast as possible.
  signaling: [
    "wss://signaling.yjs.dev",
    "wss://y-webrtc-signaling-eu.herokuapp.com",
    "wss://y-webrtc-signaling-us.herokuapp.com",
  ],
  password: null,
  awareness: new awarenessProtocol.Awareness(doc),
  maxConns: 20 + Math.floor(Math.random() * 15),
  filterBcConns: false, // true: only connect to peers that are in the same room
  peerOpts: {},
}); // (방이름,doc), 동기화 연결을 위한 provider로 webrtc 사용

// const yary = doc.get("array", Y.Array); // doc에 array라는 이름의 Y.Array를 가져옴
const yary = doc.getArray("array"); // doc에 array라는 이름의 Y.Array를 가져옴 (위와 동일?), 이곳에 공유된 데이터를 저장한다

provider.on("synced", (synced: any) => {
  console.log(synced);
  // console.log(`Synced! ${synced}`); // 동기화 완료, synced => object { synced: true }
});

yary.observeDeep((event) => {
  console.log(event);
  console.log(`yary updated: ${yary.toJSON()}`);
});

yary.insert(0, ["nono"]); // 1번 idx에 nono 삽입

const aw = provider.awareness; // awareness는 provider에 포함되어 있음
aw.on("change", (changes: any) => {
  console.log(Array.from(aw.getStates().entries()));
});

aw.setLocalStateField("user", { name: "kim", color: "#ffb61e" });

function App() {
  // console.log(doc);
  // console.log(yary);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi!</p>
        <p>{yary.toJSON()}</p>
        <div
          onClick={() => yary.insert(0, ["test"])}
          style={{ cursor: "pointer" }}
        >
          Click me!
        </div>
      </header>
    </div>
  );
}

export default App;
