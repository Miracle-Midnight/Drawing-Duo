import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface friendProps {
  userKey: number;
  inviteRoom: number;
  isConnected: boolean;
  isInvited: boolean;
}

function IsOnline({
  isConnected,
  userKey,
}: {
  isConnected: boolean;
  userKey: number;
}) {
  const connection = isConnected ? "접속중" : "접속중 아님";

  return (
    <div className="flex-1 pl-1 md:mr-16">
      <div className="font-medium ">{userKey}</div>
      <div className="text-sm text-gray-600 ">{connection}</div>
    </div>
  );
}

function InviteFromFriend({
  isInvited,
  inviteRoom,
}: {
  isInvited: boolean;
  inviteRoom: number;
}) {
  const navigate = useNavigate();
  const handleInviteToggle = () => {
    navigate("/room/" + inviteRoom);
  };

  return (
    <div className="text-xs text-gray-600 ">
      {isInvited ? (
        <div>
          <button
            onClick={handleInviteToggle}
            className="bg-green-300 hover:bg-green-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center mr-1"
          >
            <span>수락</span>
          </button>
          <button className="bg-red-300 hover:bg-red-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <span>거절</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function InvitedCard({
  userKey,
  isConnected,
  isInvited,
  inviteRoom,
}: friendProps) {
  return (
    <li className="flex flex-row mb-2 border-gray-400">
      <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white  rounded-md flex flex-1 items-center p-4">
        <IsOnline isConnected={isConnected} userKey={userKey} />
        <InviteFromFriend isInvited={isInvited} inviteRoom={inviteRoom} />
      </div>
    </li>
  );
}

export default InvitedCard;
