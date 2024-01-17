import React from "react";

function SidebarRibbon() {
  return (
    <div className="side-ribbon px-4">
      <div className="side-upper flex justify-between py-3 align-middle">
        <div className="round-img w-12 h-12"></div>
        <button className="addBtn text-white bg-teal-600 px-6 py-1 rounded-lg">
          Add
        </button>
      </div>
      <div className="inputArea">
        <input
          className="side-input w-full pl-6 px-2 border-none outline-none mx-auto py-2 border rounded-md block"
          placeholder="Write something here.."
          type="text"
        />
        <i class="fa-solid fa-magnifying-glass text-grey"></i>
      </div>
    </div>
  );
}

export default SidebarRibbon;
