import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VisibilityContext } from "../App";

function SidebarRibbon() {
  const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);

  return (
    <div className="side-ribbon ">
      <div className="side-upper px-4 flex justify-between py-2 items-center">
        <div className="round-img"></div>
        <IoMdAddCircleOutline
          title="Add a chat"
          onClick={() => setPopupVisibility((prev) => !prev)}
          className="addIcon"
        />
      </div>
      <div className="inputArea w-full px-6 py-3">
        <input
          className=" side-input w-full pl-10 px-2 text-white  mx-auto py-2 border rounded-md block"
          placeholder="Write something here.."
          type="text"
        />
        <IoIosSearch className="searchIcon" />
      </div>
    </div>
  );
}

export default SidebarRibbon;
