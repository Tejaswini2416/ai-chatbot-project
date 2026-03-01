import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import "./styles/dashboard.css";

function App() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("all_chats");
    if (saved) {
      const parsed = JSON.parse(saved);
      setChats(parsed);
      if (parsed.length > 0) setActiveChatId(parsed[0].id);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("all_chats", JSON.stringify(chats));
  }, [chats]);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: []
    };
    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const updateChat = (updatedChat) => {
    setChats(prev =>
      prev.map(chat =>
        chat.id === updatedChat.id ? updatedChat : chat
      )
    );
  };

  const activeChat = chats.find(chat => chat.id === activeChatId);

  return (
    <div className={`layout ${theme}`}>
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        createNewChat={createNewChat}
        setChats={setChats}
      />

      <div className="main">
        <div className="top-bar">
          <h3>AI Assistant</h3>
          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            Toggle Theme
          </button>
        </div>

        <ChatArea chat={activeChat} updateChat={updateChat} />
      </div>
    </div>
  );
}

export default App;