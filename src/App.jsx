import { createContext, useContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";

import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();
export const ChatAreaChats = createContext();
export const SetChatAreaChats = createContext();
export const IdContext = createContext();

//*getting the chat id from SideChat component
export const ChatIdContext = createContext();

function App() {
  let [popupVisibility, setPopupVisibility] = useState(false);
  const savedSideChatsObj = localStorage.getItem("sideChatsObj");
  const initialSideChatsObj = savedSideChatsObj
    ? JSON.parse(savedSideChatsObj)
    : [];

  let [sideChatsObj, setSideChatsObj] = useState(initialSideChatsObj);

  let [chats, setChats] = useState([]);

  const [selectedChat, setSelectedChat] = useState({
    id: 0,
    name: "user",
    desc: "",
    image: "",
  });

  let [key, setKey] = useState(0);

  const handleChatId = (id) => {
    setKey(id);
    let theChat = sideChatsObj.find((chat) => chat.id === id);
    setSelectedChat(theChat);
  };

  // console.log(key);
  useEffect(() => {
    setSelectedChat({
      name: "user",
      desc: "",
      image: "",
      chats: [],
    });
  }, [sideChatsObj]);

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <SideChatsContext.Provider value={{ sideChatsObj, setSideChatsObj }}>
        <ChatIdContext.Provider value={handleChatId}>
          <ChatAreaChats.Provider value={{ chats, setChats }}>
            <IdContext.Provider value={key}>
              <div className="app">
                <div className="greenbg absolute"></div>
                <Sidebar />
                <MainArea selectedChat={selectedChat} />
              </div>
            </IdContext.Provider>
          </ChatAreaChats.Provider>
        </ChatIdContext.Provider>
      </SideChatsContext.Provider>
    </VisibilityContext.Provider>
  );
}

export default App;
