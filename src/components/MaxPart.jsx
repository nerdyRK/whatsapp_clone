import React from "react";
import Popup from "./Popup";
import SendMsg from "./SendMsg";
import ChatArea from "./ChatArea";

function MaxPart() {
  return (
    <div className="max-part h-full flex flex-col justify-between">
      <Popup />
      <ChatArea />
      <SendMsg />
    </div>
  );
}

export default MaxPart;
