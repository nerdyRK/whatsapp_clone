import React, { useEffect, useState, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

import { IoSend } from "react-icons/io5";
import { SideChatsContext } from "../App";
import { IdContext } from "../App";

function SendMsg({ setChat, chat }) {
  let [chatInput, setChatInput] = useState("");
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  const userId = useContext(IdContext);

  function handleSend(e) {
    e.preventDefault();
    // console.log(userId);
    if (chatInput !== "" && userId !== 0) {
      let userIndex = chat.findIndex((obj) => obj.userId === userId);
      console.log(userIndex);

      let newChat = chatInput.trim();
      if (userIndex !== -1) {
        let user = chat[userIndex];
        newChat = user.chat.concat(newChat);

        // Add the new message to the user's chat array

        // Create a new user object with the updated chat array
        let newUser = { ...user, chat: newChat };

        // Replace the old user object in the array with the new user object
        let newchat = [...chat];
        newchat[userIndex] = newUser;

        // Update the state with the new array
        setChat(newchat);
      } else {
        let newObj = { userId, chat: [newChat] };
        setChat([...chat, newObj]);
      }

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
