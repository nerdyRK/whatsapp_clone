import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

import { IoSend } from "react-icons/io5";

function SendMsg({ setChat, chat }) {
  let [chatInput, setChatInput] = useState("");

  function handleSend(e) {
    e.preventDefault();
    if (chatInput !== "") {
      const newMessage = chatInput.trim();
      const msgid = Date.now();
      setChat([...chat, { msgid, newMessage }]);
      setChatInput("");
    }
  }

  return (
    <div className="send-msg w-full bg-black-900 flex items-center justify-between relative">
      <FaPlus
        className="absolute top-6 left-6 "
        style={{ fontSize: "1.2rem", cursor: "pointer" }}
      />
      <form onSubmit={handleSend} className="relative w-full">
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          className="inputArea send-input w-full p-2 pl-14 pr-20 rounded-lg"
          type="text"
          placeholder="Type a message"
        ></input>
        <MdOutlineEmojiEmotions
          style={{ fontSize: "1.4rem", cursor: "pointer", color: "grey" }}
          className="absolute top-2 left-4"
        />
      </form>
      {/* <IoSend className="sendIcon" /> */}
      <FaMicrophone
        style={{ fontSize: "1.4rem", cursor: "pointer" }}
        className="absolute top-6 right-4"
      />
    </div>
  );
}

export default SendMsg;
