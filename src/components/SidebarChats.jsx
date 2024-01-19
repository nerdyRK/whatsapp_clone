import React, { useContext } from "react";
import SideChat from "./SideChat";
import { SideChatsContext } from "../App";

function SidebarChats() {
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  function handleChatDelete(id) {
    setSideChatsObj((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className=" side-chats w-full min-h-customHeight ">
      {sideChatsObj.map((box, i) => (
        <SideChat key={box.id} onDelete={handleChatDelete} data={box} />
      ))}
    </div>
  );
}

export default SidebarChats;
