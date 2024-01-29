import React, { useEffect, useState, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";

//* this may be needed in mobile devices as now msgs are going on enter
import { IoSend } from "react-icons/io5";
import { SideChatsContext } from "../App";
import { IdContext } from "../App";

function SendMsg({ setChat, chat }) {
  let [chatInput, setChatInput] = useState("");
  const { sideChatsObj } = useContext(SideChatsContext);
  const userId = useContext(IdContext);

  function handleSend(e) {
    e.preventDefault();
    //* default userId is 0
    if (chatInput !== "" && userId !== 0) {
      //* checking if there is any chat for the user
      let userIndex = chat.findIndex((obj) => obj.userId === userId);
      let newChat = chatInput.trim();
      if (userIndex !== -1) {
        let user = chat[userIndex];
        newChat = user.chats.concat(newChat);
        let newUser = { ...user, chats: newChat };

        //* Replace the old user object in the chat array with the new user object
        let allChats = [...chat];
        allChats[userIndex] = newUser;

        // Update the state with the new array
        setChat(allChats);
      } else {
        let newObj = { userId, chats: [newChat] };
        setChat([...chat, newObj]);
      }
      setChatInput("");
    }
  }

  useEffect(() => {
    localStorage.setItem("chatsObj", JSON.stringify(chat));
  }, [sideChatsObj]);

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
          className="shadow-sm shadow-green-400 inputArea send-input w-full p-2 pl-14 pr-20 rounded-lg"
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
