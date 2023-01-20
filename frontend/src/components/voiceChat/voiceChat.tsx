import { useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";

function VoiceChat({
  setRemoteNickname,
  setFriendsPick,
  myPick,
}: {
  setRemoteNickname: (nickname: string) => void;
  setFriendsPick: (pick: string) => void;
  myPick: string;
}) {
  const roomId = useParams().id;
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const pcRef = useRef<RTCPeerConnection>();
  const socketRef = useRef<Socket>();

  async function getMedia() {
    try {
      // 미디어 디바이스 인터페이스를 구현하는 mediaDevices 객체에서 연결된 모든 기기를 가져올 수 있음
      // 기기 변경 사항을 수신 대기, 기기를 열어 미디어 스트림을 가져올 수 있음
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }

      if (!(pcRef.current && socketRef.current)) {
        return;
      }

      stream.getTracks().forEach((track) => {
        if (!pcRef.current) {
          return;
        }
        pcRef.current.addTrack(track, stream);
      });

      pcRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          if (!socketRef.current) {
            return;
          }
          console.log("recv candidate");
          socketRef.current.emit("candidate", {
            candidate: e.candidate,
            roomId: roomId,
          });
        }
      };

      pcRef.current.ontrack = (e) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };
    } catch (e) {
      console.error(e);
    }
  }

  async function createOffer() {
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      console.log("create offer");
      const sdp = await pcRef.current.createOffer();
      pcRef.current.setLocalDescription(sdp);
      console.log("sent the offer");
      socketRef.current.emit("offer", { sdp: sdp, roomId: roomId });
    } catch (e) {
      console.error(e);
    }
  }

  async function createAnswer(sdp: RTCSessionDescription) {
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      console.log("create answer");
      pcRef.current.setRemoteDescription(sdp);
      const answerSdp = await pcRef.current.createAnswer();
      pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socketRef.current.emit("answer", { sdp: answerSdp, roomId: roomId });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    pcRef.current = new RTCPeerConnection();

    socketRef.current = io("https://drawingduo.shop");

    socketRef.current.emit("join_room", {
      roomId: roomId,
      userId: sessionStorage.getItem("userid"),
    });

    socketRef.current.on("all_users", (allUsers: any) => {
      if (allUsers.length > 0) {
        createOffer();
      }
    });

    socketRef.current.on("getOffer", (sdp: RTCSessionDescription) => {
      if (!pcRef.current) {
        return;
      }
      console.log("get offer");
      createAnswer(sdp);
    });

    socketRef.current.on("getAnswer", (sdp: RTCSessionDescription) => {
      if (!pcRef.current) {
        return;
      }
      console.log("get answer");
      pcRef.current.setRemoteDescription(sdp);
    });

    socketRef.current.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
      console.log("candidate add success");
    });

    getMedia();

    console.log(pcRef);
    console.log(socketRef);

    socketRef.current.on("new_user", async (user: any) => {
      setRemoteNickname(user[0].profile.nickname);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on("select-image", async (image: any) => {
        console.log(image);
        setFriendsPick(image.image);
      });
    }
  });

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.emit("select-image", { roomId: roomId, image: myPick });
    }
  }, [myPick]);

  return (
    <div>
      <audio autoPlay muted ref={myVideoRef} />
      <audio autoPlay ref={remoteVideoRef} />
    </div>
  );
}

VoiceChat.defaultProps = {
  setRemoteNickname: () => void 0,
  setFriendsPick: () => void 0,
  myPick: "",
};

export default VoiceChat;
