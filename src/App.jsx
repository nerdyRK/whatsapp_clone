import { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();
function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);
  let [sideChatsObj, setSideChatsObj] = useState([
    { id: 1, name: "Ravi", desc: "Just a Programmer 💻" },
    { id: 2, name: "Raj", desc: "Unknown Description ❓" },
  ]);

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <SideChatsContext.Provider value={{ sideChatsObj, setSideChatsObj }}>
        <div className="app">
          <div className="greenbg absolute"></div>
          <Sidebar />
          <MainArea />
        </div>
      </SideChatsContext.Provider>
    </VisibilityContext.Provider>
  );
}

export default App;
