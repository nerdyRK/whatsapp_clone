import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function SideChat({ data, index }) {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }
  let time = `${hours}:${minutes}Pm`;
  return (
    <>
      <div className="sidechat flex justify-between items-center px-4 py-1 text-white">
        <div className="info border-spacing-1s flex items-center">
          <div className="round-img w-11 h-11">
            <img src="../assets/react.svg" alt="" />
          </div>
          <div>
            <h2 className="name ">{data[index].name}</h2>
            <small className="desc ">{data[index].desc}</small>
          </div>
        </div>
        {/* <RiDeleteBack2Fill className="deleteIcon" /> */}
        <small>{time}</small>
      </div>
    </>
  );
}

export default SideChat;
