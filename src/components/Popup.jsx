import React, { useState, useContext } from "react";
import { MdCancel } from "react-icons/md";
import { VisibilityContext } from "../App";
import { SideChatsContext } from "../App";

function Popup() {
  const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);

  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [img, setImg] = useState("");

  let handleCancel = (e) => {
    e.preventDefault();
    setPopupVisibility(false);
  };

  let handleAdd = () => {
    let newChatObj = {};
    if (name) newChatObj.name = name;
    if (desc) {
      newChatObj.desc = desc;
    } else {
      newChatObj.desc = "No Need";
    }
    if (img) newChatObj.img = img;
    if (name) setSideChatsObj([...sideChatsObj, newChatObj]);
    setName("");
    setDesc("");
    console.log(sideChatsObj);
  };

  return (
    <div
      className={"popup"}
      style={{ transform: popupVisibility ? "scale(1)" : "scale(0)" }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col "
        action=""
      >
        <button onClick={handleCancel} className="">
          <MdCancel
            title="Cancel"
            className="cancelIcon absolute right-2 top-2"
          />
        </button>
        <div className="flex justify-between mt-4">
          <label htmlFor="name">Name*</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter name"
            className="popup-input"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="flex justify-between mt-4">
          <label htmlFor="Desc">Description</label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            className="popup-input"
            placeholder="Enter a description"
            type="text"
            id="Desc"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label
            htmlFor="file"
            className="file-input w-full hover:bg-green-300 hover:text-black"
            style={{ transition: "all 0.3s ease" }}
          >
            Select a Profile Picture
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            className="popup-input"
            style={{ display: "none" }}
            type="file"
            id="file"
          />
        </div>
        <button
          onClick={handleAdd}
          style={{ transition: "all 0.3s ease" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Popup;
