import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VisibilityContext } from "../App";

function SidebarRibbon() {
  const { popupVisibility, setPopupVisibility } = useContext(VisibilityContext);

  return (
    <div className="side-ribbon px-4">
      <div className="side-upper flex justify-between py-3 items-center">
        <div className="round-img w-12 h-12"></div>
        <IoMdAddCircleOutline
          title="Add a chat"
          onClick={() => setPopupVisibility((prev) => !prev)}
          className="addIcon"
        />
      </div>
      <div className="inputArea">
        <input
          className="side-input w-full pl-6 px-2 text-black border-none outline-none mx-auto py-2 border rounded-md block"
          placeholder="Write something here.."
          type="text"
        />
        <IoIosSearch className="searchIcon" />
      </div>
    </div>
  );
}

export default SidebarRibbon;
