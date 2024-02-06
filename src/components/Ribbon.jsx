import { useContext, memo } from "react";
import { IoIosSearch } from "react-icons/io";
// import { CiMenuKebab } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToggleSidebarContext } from "../App";
import { SideChatsContext } from "../App";

function Ribbon({ selectedChat }) {
  //TO-DO
  // console.log(selectedChat);
  const { sideChatsObj, setSideChatsObj } = useContext(SideChatsContext);
  let { toggleSidebar, isSidebarVisible } = useContext(ToggleSidebarContext);

  return (
    <div className="ribbon py-2 flex items-center justify-between max-h-[100px]">
      <div className="flex flex-shrink-3 items-center">
        <IoMdArrowRoundBack className="backIcon" onClick={toggleSidebar} />
        <img
          className="round-img object-cover max-w-14"
          src={selectedChat?.image}
        />
        <div className="textArea">
          <h2 className="ribbon-name">{selectedChat?.name || "USER"}</h2>
          {/* <small className="ribbon-desc">{selectedChat?.desc}</small> */}
        </div>
      </div>
      <div
        className="icons text-gray-600 flex mr-6 w-1/6 min-w-[80px] justify-around"
        style={{ fontSize: "clamp(22px,22px,22px)", cursor: "pointer" }}
      >
        <MdAddCall />
        <IoIosSearch style={{ fontWeight: "bolder" }} />
        <span data-icon="menu" className="">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
          >
            <title>menu</title>
            <path
              fill="currentColor"
              d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default memo(Ribbon);
