import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function SideChat() {
  return (
    <div className="sidechat flex justify-between items-center px-4 py-1 text-white border border-gray-500  ">
      <div className="info border-spacing-1s flex items-center">
        <div className="round-img w-11 h-11"></div>
        <div>
          <h2 className="name ">name</h2>
          <small className="desc ">Desc</small>
        </div>
      </div>
      <RiDeleteBack2Fill className="deleteIcon" />
    </div>
  );
}

export default SideChat;
