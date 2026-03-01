import { useState } from "react";

const BASE_URL = "http://127.0.0.1:8000";

function ChatWindow({ conversationId, token }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { role: "user", content: input }]);

    const response = await fetch(
      `${BASE_URL}/chat/${conversationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ message: input })
      }
    );

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let botMessage = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      botMessage += decoder.decode(value);
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "bot",
          content: botMessage
        };
        return updated;
      });
    }

    setInput("");
  };

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <b>{msg.role}:</b> {msg.content}
          </div>
        ))}
      </div>

      <input value={input}
        onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatWindow;