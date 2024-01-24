import React, { useContext, useMemo, memo, useEffect } from "react";
import SideChat from "./SideChat";
import { SideChatsContext, IdContext, ChatAreaChats } from "../App";

function SidebarChats({ inputValue }) {
  // console.log(inputValue);
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  const { chats, setChats } = useContext(ChatAreaChats);
  const userId = useContext(IdContext);
  // console.log(sideChatsObj);

  //TODO making desc as last chat msg with matching id
  useEffect(() => {
    console.log(sideChatsObj);
    sideChatsObj?.forEach((sideChat) => {
      let latestMsg = chats.find((chat) => chat.userId == sideChat.id);
      if (latestMsg) {
        sideChat.desc = latestMsg.chats[latestMsg.chats.length - 1];
      }
    });
    // Update state to trigger re-render
    setSideChatsObj([...sideChatsObj]);
  }, [chats]);

  const filteredChats = useMemo(() => {
    return sideChatsObj.filter((chat) => {
      // chat.name = chat.name.toLowerCase();
      return chat.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  }, [inputValue, sideChatsObj]);

  function handleChatDelete(id) {
    setSideChatsObj((prevState) => prevState.filter((item) => item.id !== id));
    localStorage.removeItem(`${id}`);
  }

  return (
    <div className=" side-chats w-full min-h-customHeight ">
      {filteredChats.map((box, i) => (
        <SideChat key={box.id} onDelete={handleChatDelete} data={box} />
      ))}
    </div>
  );
}

//* React.memo re-renders when the data passes through props change here it seems useless to me as with every inputValue it re-renders that i wanna prevent
export default memo(SidebarChats);
