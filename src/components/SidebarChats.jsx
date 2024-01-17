import React from "react";

function SidebarChats() {
  return (
    <div className="mt-3 side-chats w-full min-h-customHeight pt-3">
      <div className="sidechat flex justify-between items-center px-4 py-1 text-white border border-gray-500  ">
        <div className="info border-spacing-1s flex items-center">
          <div className="round-img w-11 h-11"></div>
          <div>
            <h2 className="name block">name</h2>
            <p className="desc block">Desc</p>
          </div>
        </div>
        <button className="deleteBtn text-white bg-red-600 px-4 py-2 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SidebarChats;
