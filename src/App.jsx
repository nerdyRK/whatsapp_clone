import { createContext, useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();

//*getting the chat id from SideChat component
export const ChatIdContext = createContext();

function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);
  const savedSideChatsObj = localStorage.getItem("sideChatsObj");
  const initialSideChatsObj = savedSideChatsObj
    ? JSON.parse(savedSideChatsObj)
    : [];
  let [sideChatsObj, setSideChatsObj] = useState(initialSideChatsObj);

  const [selectedChat, setSelectedChat] = useState({
    name: "user",
    desc: "",
    image: "",
  });

  const handleChatId = (id) => {
    // console.log("Chat ID: ", id);
    let theChat = sideChatsObj.find((chat) => chat.id === id);
    setSelectedChat(theChat);
    // console.log(selectedChat[0]);
  };

  useEffect(() => {
    setSelectedChat({
      name: "user",
      desc: "",
      image: "",
    });
  }, [sideChatsObj]);

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
