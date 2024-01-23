import { useState, useEffect, useContext } from "react";
import { IdContext } from "../App";

function ChatArea({ chat }) {
  const id = useContext(IdContext);
  let userIndex = chat.findIndex((obj) => obj.userId === id);
  // console.log("area: ", userIndex);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }

  let time = `${hours}:${minutes}Pm`;
  let [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, [chat]);

  if (!shouldRender) {
    return null;
  }

  console.log(chat);

  // console.log("chat area");
  return (
    <div className="chat-area ">
      {chat[userIndex]?.chat
        .slice()
        .reverse()
        .map((msg, i) => (
          <>
            <p
              className="bg-green-300 m-2 rounded-lg relative  py-2 pr-14 pl-4 right-0 bottom-0"
              key={msg.msgid}
            >
              {msg}
              <span
                className="absolute top-3 right-0"
                style={{ fontSize: "10px", margin: "10px" }}
              >
                {time}
              </span>
            </p>
          </>
        ))}
    </div>
  );
}

export default ChatArea;
