import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";

function Ribbon() {
  return (
    <div className="ribbon py-1 flex items-center justify-between">
      <div className="flex items-center">
        <img className="round-img" />
        <div className="textArea">
          <h2 className="ribbon-name">Name</h2>
          <div className="ribbon-desc">desciption</div>
        </div>
      </div>
      <div
        className="icons flex mr-6 w-1/6 justify-around"
        style={{ fontSize: "1.3rem", cursor: "pointer" }}
      >
        <MdAddCall />
        <IoIosSearch />
        <CiMenuKebab style={{ color: "aliceblue" }} />
      </div>
    </div>
  );
}

export default Ribbon;
