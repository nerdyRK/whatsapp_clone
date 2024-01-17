import { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

export const VisibilityContext = createContext();
function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <div className="app">
        <Sidebar />
        <MainArea />
      </div>
    </VisibilityContext.Provider>
  );
}

export default App;
