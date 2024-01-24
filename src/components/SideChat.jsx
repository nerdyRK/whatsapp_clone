import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { ChatIdContext } from "../App";

function SideChat({ data, onDelete }) {
  const handleChatId = useContext(ChatIdContext);

  // console.log(data);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }
  let time = `${hours}:${minutes}Pm`;

  function handleChatDelete() {
    onDelete(data.id);
  }

  return (
    <>
      <div
        onClick={() => handleChatId(data.id)}
        // key={data.id}
        className="sidechat cursor-pointer flex justify-between flex-nowrap items-center px-2 py-2 text-black"
      >
        <section className="info flex w-[80%] items-center">
          <div className="round-img w-11 h-11">
            <img src={data.image} alt="" />
          </div>
          <div className="chatDesc truncate">
            <h2 className="name ">{data.name}</h2>
            <small className="desc ">{data.desc}</small>
          </div>
        </section>
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
