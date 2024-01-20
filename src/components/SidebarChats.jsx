import React, { useContext, useMemo, memo, useEffect } from "react";
import SideChat from "./SideChat";
import { SideChatsContext } from "../App";

function SidebarChats({ inputValue }) {
  // console.log(inputValue);
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);

  const filteredChats = useMemo(() => {
    return sideChatsObj.filter((chat) => {
      // chat.name = chat.name.toLowerCase();
      return chat.name.includes(inputValue);
    });
  }, [inputValue, sideChatsObj]);

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

//* React.memo re-renders when the data passes through props change here it seems useless to me as with every inputValue it re-renders that i wanna prevent
export default memo(SidebarChats);
