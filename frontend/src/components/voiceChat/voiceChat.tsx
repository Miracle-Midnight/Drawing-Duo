import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";

export function VoiceChat({
  setRemoteNickname,
  setFriendsPick,
  myPick,
}: {
  setRemoteNickname: (nickname: string) => void;
  setFriendsPick: (pick: string) => void;
  myPick: string;
}) {
  const socketRef = useRef<Socket>();
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection>();

  const roomId = sessionStorage.getItem("roomId");

  const getMedia = async () => {
    try {
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
          socketRef.current.emit("candidate", e.candidate, roomId);
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
  };

  const createOffer = async () => {
    console.log("create offer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      const sdp = await pcRef.current.createOffer();
      pcRef.current.setLocalDescription(sdp);
      console.log("sent the offer");
      socketRef.current.emit("offer", sdp, roomId);
    } catch (e) {
      console.error(e);
    }
  };

  const createAnswer = async (sdp: RTCSessionDescription) => {
    console.log("create answer");
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    try {
      pcRef.current.setRemoteDescription(sdp);
      const answerSdp = await pcRef.current.createAnswer();
      pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socketRef.current.emit("answer", answerSdp, roomId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    socketRef.current = io("https://drawingduo.shop", {
      transports: ["websocket"],
    });

    pcRef.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    });

    socketRef.current.on("all_users", (allUsers: Array<{ id: string }>) => {
      if (allUsers.length > 0) {
        createOffer();
      }
    });
    socketRef.current.on("getOffer", (sdp: RTCSessionDescription) => {
      console.log("recv offer");
      createAnswer(sdp);
    });
    socketRef.current.on("getAnswer", (sdp: RTCSessionDescription) => {
      console.log("recv answer");
      if (!pcRef.current) {
        return;
      }
      pcRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
    });

    socketRef.current.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    socketRef.current.emit("join_room", {
      roomId: roomId,
      userId: sessionStorage.getItem("userid"),
    });

    socketRef.current.on("new_user", async (user: any) => {
      setRemoteNickname(user.profile.nickname);
    });

    socketRef.current.on("select-image", (image: any) => {
      setFriendsPick(image.image);
    });

    getMedia();

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
      socketRef.current.emit("select-image", { image: myPick });
    }
  }, [myPick]);

  return (
    <div>
      <audio
        style={{
          width: 240,
          height: 240,
          backgroundColor: "black",
          display: "flex",
        }}
        muted
        ref={myVideoRef}
        autoPlay
      />
      <audio
        id="remotevideo"
        style={{
          width: 240,
          height: 240,
          backgroundColor: "black",
        }}
        ref={remoteVideoRef}
        autoPlay
      />
    </div>
  );
}

VoiceChat.defaultProps = {
  setRemoteNickname: () => void 0,
  setFriendsPick: () => void 0,
  myPick: "",
};
