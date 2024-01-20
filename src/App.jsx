import { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();

//*getting the chat id from SideChat component
export const ChatIdContext = createContext();

function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);
  let [sideChatsObj, setSideChatsObj] = useState([
    { id: 1, name: "Ravi", desc: "Just a Programmer 💻" },
    { id: 2, name: "Raj", desc: "Unknown Description ❓" },
  ]);

  const [selectedChat, setSelectedChat] = useState({
    name: "user",
    desc: "",
  });

  const handleChatId = (id) => {
    console.log("Chat ID: ", id);
    let theChat = sideChatsObj.filter((chat) => chat.id === id);
    setSelectedChat(theChat[0]);
    // console.log(selectedChat[0]);
  };

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <SideChatsContext.Provider value={{ sideChatsObj, setSideChatsObj }}>
        <ChatIdContext.Provider value={handleChatId}>
          <div className="app">
            <div className="greenbg absolute"></div>
            <Sidebar />
            <MainArea selectedChat={selectedChat} />
          </div>
        </ChatIdContext.Provider>
      </SideChatsContext.Provider>
    </VisibilityContext.Provider>
  );
}

export default App;
