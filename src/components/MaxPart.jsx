import { useContext } from "react";
import SendMsg from "./SendMsg";
import ChatArea from "./ChatArea";
import { ChatAreaChats } from "../App";

function MaxPart() {
  let { chats, setChats } = useContext(ChatAreaChats);
  // console.log(chats);

  return (
    <div className="max-part h-full flex flex-col justify-between">
      <ChatArea chat={chats} />
      <SendMsg setChat={setChats} chat={chats} />
    </div>
  );
}

export default MaxPart;
