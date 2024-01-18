import { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();
function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);
  let [sideChatsObj, setSideChatsObj] = useState([
    { name: "Ravi", desc: "Just a Programmer 💻" },
    { name: "Raj", desc: "Unknown Description ❓" },
  ]);

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <SideChatsContext.Provider value={{ sideChatsObj, setSideChatsObj }}>
        <div className="app">
          <Sidebar />
          <MainArea />
        </div>
      </SideChatsContext.Provider>
    </VisibilityContext.Provider>
  );
}

export default App;
