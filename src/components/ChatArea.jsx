import React from "react";

function ChatArea({ chat }) {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  let time = `${hours}:${minutes}Pm`;

  return (
    <div className="chat-area ">
      {chat.reverse().map((msg) => (
        <>
          <p
            className="bg-green-300 m-2 rounded-lg relative  py-2 pr-14 pl-4 right-0 bottom-0"
            key={msg.msgid}
          >
            {msg.newMessage}
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
