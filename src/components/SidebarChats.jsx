import React, { useContext, useMemo } from "react";
import SideChat from "./SideChat";
import { SideChatsContext } from "../App";

function SidebarChats({ inputValue }) {
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  const filteredChats = useMemo(() => {
    return sideChatsObj.filter((chat) => chat.name.includes(inputValue));
  }, [inputValue, sideChatsObj]);

  //* here we are using concept of lifting up the state means getting data in parent from Child (id)
  function handleChatDelete(id) {
    setSideChatsObj((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className=" side-chats w-full min-h-customHeight ">
      {filteredChats.map((box, i) => (
        <SideChat key={box.id} onDelete={handleChatDelete} data={box} />
      ))}
    </div>
  );
}

export default SidebarChats;
