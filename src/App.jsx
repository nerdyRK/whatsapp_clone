import { createContext, useState, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import DefaultComponent from "./components/DefaultComponent";
import Popup from "./components/Popup";

import "./App.css";

export const VisibilityContext = createContext();
export const SideChatsContext = createContext();
export const ChatAreaChats = createContext();
// export const SetChatAreaChats = createContext();
//* using for adding chats from sendArea
export const IdContext = createContext();
//*getting the chat id from SideChat component onClick
export const ChatIdContext = createContext();

function App() {
  // console.log(1);
  let [popupVisibility, setPopupVisibility] = useState(false);
  const savedSideChatsObj = localStorage.getItem("sideChatsObj");
  const initialSideChatsObj = savedSideChatsObj
    ? JSON.parse(savedSideChatsObj)
    : [];
  let [sideChatsObj, setSideChatsObj] = useState(initialSideChatsObj);

  //* this is chats object of individual users for MainArea */
  const savedChatsObj = localStorage.getItem("chatsObj");
  const initialChatsObj = savedChatsObj ? JSON.parse(savedChatsObj) : [];
  let [chats, setChats] = useState(initialChatsObj);

  //* using it to show name and image in the ribbon
  let [selectedChat, setSelectedChat] = useState({
    id: 0,
    name: "user",
    desc: "",
    image: "",
  });

  //* id for chats object matching
  let [key, setKey] = useState(0);

  const handleChatId = (id) => {
    setKey(id);
    let theChat = sideChatsObj.find((chat) => chat.id === id);
    setSelectedChat(theChat);
  };

  //* the ribbon was dependent on selectedChat which was on sideChatObj so every second text it was getting to default value so we remmebred it
  selectedChat = useMemo(() => {
    return sideChatsObj.find((chat) => chat.id === selectedChat.id) || 0;
  }, [sideChatsObj, selectedChat.id]);

  return (
    <VisibilityContext.Provider value={{ popupVisibility, setPopupVisibility }}>
      <SideChatsContext.Provider value={{ sideChatsObj, setSideChatsObj }}>
        <ChatIdContext.Provider value={handleChatId}>
          <ChatAreaChats.Provider value={{ chats, setChats }}>
            <IdContext.Provider value={key}>
              <div className="app">
                <div className="greenbg absolute"></div>
                <Popup />
                <Sidebar />
                {console.log(selectedChat.id)}
                {selectedChat.id ? (
                  <MainArea selectedChat={selectedChat} />
                ) : (
                  <DefaultComponent />
                )}
              </div>
            </IdContext.Provider>
          </ChatAreaChats.Provider>
        </ChatIdContext.Provider>
      </SideChatsContext.Provider>
    </VisibilityContext.Provider>
  );
}

export default App;
