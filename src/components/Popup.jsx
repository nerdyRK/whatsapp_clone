import React, { useState, useContext, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { VisibilityContext } from "../App";
import { SideChatsContext } from "../App";
import { resizeImage } from "./resizeImage";

function Popup() {
  const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);

  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [phone, setPhone] = useState("");
  let [image, setImage] = useState(null);

  function handleCancel(e) {
    e.preventDefault();
    setPopupVisibility(false);
  }

  function handleAdd(e) {
    e.preventDefault();
    let newChatObj = {};
    if (name) {
      newChatObj.name = name;
      if (desc) newChatObj.desc = desc;
      else newChatObj.desc = "....";
      if (phone) newChatObj.phone = phone;
      if (image) newChatObj.image = image;

      newChatObj.id = Date.now();
      if (name) setSideChatsObj([...sideChatsObj, newChatObj]);
      setName("");
      setDesc("");
      setPhone("");
      setPopupVisibility(false);
    }
    // console.log(sideChatsObj);
    // localStorage.setItem("sideChatsObj", JSON.stringify(sideChatsObj));
  }

  //* we wrote it in useEffect so that it has the latest data as set state is asynchronous in nature
  useEffect(() => {
    localStorage.setItem("sideChatsObj", JSON.stringify(sideChatsObj));
  }, [sideChatsObj]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const dataUrl = await resizeImage(file, 200); // Resize to 200 pixels
        setImage(dataUrl);
      } catch (err) {
        console.error("Failed to resize image:", err);
      }
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div
      className="popup bg-[aliceblue]"
      style={{ transform: popupVisibility ? "scale(1)" : "scale(0)" }}
    >
      <form onSubmit={handleAdd} className="flex flex-col">
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
            autoComplete="nope"
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
            autoComplete="nope"
          />
        </div>

        <div className="flex justify-between mt-4">
          <label htmlFor="phone" style={{ transition: "all 0.3s ease" }}>
            Phone
          </label>
          <input
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
            className="popup-input"
            type="tel"
            id="phone"
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
            // onChange={(e) => setimage(e.target.value)}
            className="popup-input"
            style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            onChange={handleImageUpload}
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
