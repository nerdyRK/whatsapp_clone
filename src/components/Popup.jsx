import React, { useState, useContext } from "react";
import { MdCancel } from "react-icons/md";
import { VisibilityContext } from "../App";

function Popup() {
  const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);

  let handleCancel = () => {
    setPopupVisibility(false);
    console.log(popupVisibility);
  };

  return (
    <div
      className={"popup"}
      style={{ transform: popupVisibility ? "scale(1)" : "scale(0)" }}
    >
      <form className="flex flex-col " action="">
        <button onClick={handleCancel} className="">
          <MdCancel className="cancelIcon absolute right-2 top-2" />
        </button>
        <div className="flex justify-between mt-4">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Enter name"
            className="popup-input"
            type="text"
            id="name"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="Desc">Description</label>
          <input className="popup-input" type="text" id="Desc" />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="file">Image</label>
          <input
            className="popup-input"
            style={{ visibility: "hidden" }}
            type="file"
            id="file"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default Popup;
