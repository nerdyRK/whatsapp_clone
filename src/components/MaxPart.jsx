import { useContext, useState } from "react";
import Popup from "./Popup";
import SendMsg from "./SendMsg";
import ChatArea from "./ChatArea";
// import { VisibilityContext } from "../App";

function MaxPart() {
  let [chat, setChat] = useState([]);

  return (
    <div className="max-part h-full flex flex-col justify-between">
      <Popup />
      <ChatArea chat={chat} />
      <SendMsg setChat={setChat} chat={chat} />
    </div>
  );
}

export default MaxPart;
