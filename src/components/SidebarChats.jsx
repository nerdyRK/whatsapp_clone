import React from "react";
import SideChat from "./SideChat";

function SidebarChats() {
  return (
    <div className="mt-3 side-chats w-full min-h-customHeight pt-3">
      <SideChat />
      <SideChat />
      <SideChat />
    </div>
  );
}

export default SidebarChats;
