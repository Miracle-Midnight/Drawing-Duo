import { useRef, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";

function VoiceChat({
  setRemoteNickname,
  setFriendsPick,
  setFriendsReady,
  myPick,
  imageId,
  isReady,
  remoteNickname,
}: {
  setRemoteNickname: (nickname: string) => void;
  setFriendsPick: (pick: string) => void;
  setFriendsReady: (ready: boolean) => void;
  myPick: string;
  imageId: number | undefined;
  isReady: boolean;
  remoteNickname: string;
}) {
  const navigate = useNavigate();

  const roomId = useParams().id;
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const pcRef = useRef<RTCPeerConnection>();
  const socketRef = useRef<Socket>();

  const isStarted = useSelector((state: RootState) => state.gameStart.start);
  // const isMicOn = useSelector((state: RootState) => state.mic.isMicOn);

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

      // pcRef.current.onicecandidate = (e) => {
      //   if (e.candidate) {
      //     if (!socketRef.current) {
      //       return;
      //     }
      //     console.log("receive candidate");
      //     socketRef.current.emit("candidate", {
      //       candidate: e.candidate,
      //       roomId: roomId,
      //     });
      //   }
      // };

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
      await pcRef.current.setLocalDescription(sdp);
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
      await pcRef.current.setRemoteDescription(sdp);
      const answerSdp = await pcRef.current.createAnswer();
      await pcRef.current.setLocalDescription(answerSdp);

      console.log("sent the answer");
      socketRef.current.emit("answer", { sdp: answerSdp, roomId: roomId });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    pcRef.current = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
          urls: "turn:3.35.19.170:3478?transport=udp",
          username: "drawingduo",
          credential: "9697",
        },
      ],
    });

    socketRef.current = io("https://drawingduo.shop/Room");

    pcRef.current.onicecandidate = (e) => {
      if (e.candidate) {
        if (!socketRef.current) {
          return;
        }
        console.log("receive candidate");
        socketRef.current.emit("candidate", {
          candidate: e.candidate,
          roomId: roomId,
        });
      }
    };

    getMedia();

    socketRef.current.emit("join_room", {
      roomId: roomId,
      userId: sessionStorage.getItem("userid"),
    });

    socketRef.current.on("all_users", (allUsers: any) => {
      console.log("all_users!");
      if (allUsers.length > 1) {
        createOffer();
      }
    });

    socketRef.current.on("getOffer", async (sdp: RTCSessionDescription) => {
      if (!pcRef.current) {
        return;
      }
      console.log("get offer");
      await createAnswer(sdp);
    });

    socketRef.current.on("getAnswer", async (sdp: RTCSessionDescription) => {
      if (!pcRef.current) {
        return;
      }
      console.log("get answer");
      await pcRef.current.setRemoteDescription(sdp);
    });

    socketRef.current.on("getCandidate", async (candidate: RTCIceCandidate) => {
      if (!pcRef.current) {
        return;
      }

      await pcRef.current.addIceCandidate(candidate);
      console.log("candidate add success");
    });

    socketRef.current.on("new_user", async (user: any) => {
      console.log("new_user!");
      setRemoteNickname(user[0].profile.nickname);
    });

    if (remoteNickname === "") {
      socketRef.current.on("get_Nickname", async (nickname: any) => {
        console.log("get_Nickname!");
        setRemoteNickname(nickname);
      });
    }

    socketRef.current.on("image selected", async (image: any) => {
      console.log("image selected!");
      setFriendsPick(image);
    });

    socketRef.current.on("game started", async () => {
      console.log("game started!");
      navigate("/InGame/" + sessionStorage.getItem("roomId"));
    });

    socketRef.current.on("game ready", async (isReady: boolean) => {
      console.log("game ready!");
      setFriendsReady(isReady);
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
      console.log("send nickname!");
      socketRef.current.emit("send-Nickname", {
        roomId: roomId,
        nickname: sessionStorage.getItem("UserNickname"),
      });
    }
  }, [remoteNickname]);

  useEffect(() => {
    if (socketRef.current) {
      if (isStarted) {
        axios
          .post("/room", {
            roomid: sessionStorage.getItem("roomId"),
            imageid: imageId,
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("game-start!");
        socketRef.current.emit("game-start", { roomId: roomId });
      }
      console.log("game-ready!");
      socketRef.current.emit("game-ready", {
        roomId: roomId,
        isReady: isReady,
      });
      console.log("select-image!");
      socketRef.current.emit("select-image", { roomId: roomId, image: myPick });
    }
  }, [myPick, isStarted, isReady]);

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
  setFriendsReady: () => void 0,
  myPick: "",
  imageId: 0,
  isReady: false,
  remoteNickname: "",
};

export default VoiceChat;
