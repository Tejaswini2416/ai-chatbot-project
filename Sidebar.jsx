export default function Sidebar({
  chats,
  activeChatId,
  setActiveChatId,
  createNewChat,
  setChats
}) {

  const renameChat = (id) => {
    const newTitle = prompt("Rename chat:");
    if (!newTitle) return;

    setChats(prev =>
      prev.map(chat =>
        chat.id === id ? { ...chat, title: newTitle } : chat
      )
    );
  };

  const deleteChat = (id) => {
    const confirmed = window.confirm("Delete this chat?");
    if (!confirmed) return;

    setChats(prev => prev.filter(chat => chat.id !== id));

    if (id === activeChatId) {
      setActiveChatId(null);
    }
  };

  return (
    <div className="sidebar">
      <button className="new-chat-btn" onClick={createNewChat}>
        + New Chat
      </button>

      <div className="history">
        {chats.map(chat => (
          <div
            key={chat.id}
            className={`history-item ${
              chat.id === activeChatId ? "active" : ""
            }`}
            onClick={() => setActiveChatId(chat.id)}
          >
            <span>{chat.title}</span>

            <div className="actions">
              <button
                className="rename-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  renameChat(chat.id);
                }}
              >
                ✏️
              </button>

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}