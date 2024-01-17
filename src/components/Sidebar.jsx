import React from "react";
import SidebarRibbon from "./SidebarRibbon";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRibbon />
      <SidebarChats />
    </div>
  );
}

export default Sidebar;
