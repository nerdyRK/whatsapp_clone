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
  let [shouldRender, setShouldRender] = useState(true);

  // useEffect(() => {
  //   setShouldRender(true);
  // }, [chat]);

  //* this is for the time when no chat is selected we'll just show a logo in chats reegion
  if (!shouldRender) {
    return null;
  }

  // console.log(chat);

  // console.log("chat area");
  return (
    <div className="chat-area ">
      {chat[userIndex]?.chats
        .slice()
        .reverse()
        .map((msg, i) => (
          <div key={i}>
            <p className="bg-green-300 m-2 rounded-lg relative  py-2 pr-14 pl-4 right-0 bottom-0">
              {msg}
              <span
                className="absolute top-3 right-0"
                style={{ fontSize: "10px", margin: "10px" }}
              >
                {time}
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}

export default ChatArea;
