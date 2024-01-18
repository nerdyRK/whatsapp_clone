import React, { useContext } from "react";
import SideChat from "./SideChat";
import { SideChatsContext } from "../App";

function SidebarChats() {
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  return (
    <div className="mt-3 side-chats w-full min-h-customHeight ">
      {sideChatsObj.map((box, i) => {
        return <SideChat data={sideChatsObj} index={i} />;
      })}
    </div>
  );
}

export default SidebarChats;
