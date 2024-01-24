import React from "react";
import whatsappDefault from "../assets/whatsapp_default.jpg";

function DefaultComponent() {
  return (
    <div className="main-area bg-[#f0f2f5]">
      <img src={whatsappDefault} alt="whatsapp no chats image" />
    </div>
  );
}

export default DefaultComponent;
