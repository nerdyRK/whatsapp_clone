import React from "react";
import { IoSend } from "react-icons/io5";

function SendMsg() {
  return (
    <div className="send-msg w-full bg-black-900 flex items-center">
      <input
        className="send-input w-full p-2 text-black pr-20"
        type="text"
        placeholder="write your message"
      />
      <IoSend className="sendIcon" />
    </div>
  );
}

export default SendMsg;
