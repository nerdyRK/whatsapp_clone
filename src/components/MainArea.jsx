import React from "react";
import Ribbon from "./Ribbon";
import MaxPart from "./MaxPart";

function MainArea() {
  return (
    <div className="main-area h-full flex flex-col">
      <Ribbon />
      <MaxPart />
    </div>
  );
}

export default MainArea;
