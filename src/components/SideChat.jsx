import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { ChatIdContext } from "../App";

function SideChat({ data, onDelete, onClick }) {
  const handleChatId = useContext(ChatIdContext);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  let time = `${hours}:${minutes}Pm`;

  function handleChatDelete() {
    onDelete(data.id);
  }

  // function handleRibbon() {}

  return (
    <>
      <div
        onClick={() => handleChatId(data.id)}
        // key={data.id}
        className="sidechat cursor-pointer flex justify-between items-center px-4 py-2 text-black"
      >
        <div className="info border-spacing-1s flex items-center">
          <div className="round-img w-11 h-11">
            <img src={data.image} alt="" />
          </div>
          <div>
            <h2 className="name ">{data.name}</h2>
            <small className="desc ">{data.desc}</small>
          </div>
        </div>
        {/* <RiDeleteBack2Fill className="deleteIcon" /> */}
        <small className="cursor-pointer" onClick={handleChatDelete}>
          {time}
        </small>
      </div>
      <hr />
    </>
  );
}

export default SideChat;
