import React from "react";
import whatsappDefault from "../assets/whatsapp_default.jpg";

function DefaultComponent() {
  return (
    <div className="main-area w-full h-full bg-[#f0f2f5]">
      <img
        src={whatsappDefault}
        className="w-full h-screen min-w-[600px]"
        alt="whatsapp no chats image"
      />
    </div>
  );
}

export default DefaultComponent;
