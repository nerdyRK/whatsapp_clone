import React, { useState } from "react";
import SidebarRibbon from "./SidebarRibbon";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  //*lifted state up to communicate between sibling components
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="sidebar h-full">
      <SidebarRibbon
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
      <SidebarChats inputValue={inputValue} />
    </div>
  );
}

export default Sidebar;
