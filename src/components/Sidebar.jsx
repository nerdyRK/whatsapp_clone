import React, { useContext, useState, useEffect } from "react";
import SidebarRibbon from "./SidebarRibbon";
import SidebarChats from "./SidebarChats";
import { ToggleSidebarContext } from "../App";

function Sidebar() {
  //*lifted state up to communicate between sibling components
  const [inputValue, setInputValue] = useState("");
  let { toggleSidebar, isSidebarVisible } = useContext(ToggleSidebarContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const checkScreenSize = () => {
    const smallScreenBreakpoint = 600; // Define your breakpoint value
    setIsSmallScreen(window.innerWidth <= smallScreenBreakpoint);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div
      className={`sidebar h-full ${
        isSmallScreen && !isSidebarVisible ? "hidden" : ""
      }`}
    >
      <SidebarRibbon
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />

      <SidebarChats inputValue={inputValue} />
    </div>
  );
}

export default Sidebar;
