import React from "react";
import Ribbon from "./Ribbon";
import MaxPart from "./MaxPart";

function MainArea({ selectedChat }) {
  console.log(selectedChat);
  return (
    <div className="main-area h-full flex flex-col">
      <Ribbon selectedChat={selectedChat} />
      <MaxPart />
    </div>
  );
}

export default MainArea;
