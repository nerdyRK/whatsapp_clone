import { useContext } from "react";
import Popup from "./Popup";
import SendMsg from "./SendMsg";
import ChatArea from "./ChatArea";
// import { VisibilityContext } from "../App";

function MaxPart() {
  // const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);

  return (
    <div className="max-part h-full flex flex-col justify-between">
      <Popup />
      <ChatArea />
      <SendMsg />
    </div>
  );
}

export default MaxPart;
