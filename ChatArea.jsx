import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import InputBox from "./InputBox";

export default function ChatArea({ chat, updateChat }) {

  const sendMessage = async (text) => {
    if (!chat || !text.trim()) return;

    const updatedChat = {
      ...chat,
      messages: [...chat.messages, { role: "user", content: text }]
    };

    updateChat(updatedChat);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json();

      const finalChat = {
        ...updatedChat,
        messages: [
          ...updatedChat.messages,
          { role: "assistant", content: data.response }
        ]
      };

      updateChat(finalChat);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ✅ GEMINI STYLE START SCREEN (NO IMAGE)
  if (!chat || chat.messages.length === 0) {
    return (
      <div className="gemini-start">

        <div className="gemini-center">
          <div className="glow-circle"></div>
          <h1>How can I help you today?</h1>
        </div>

        <div className="gemini-input">
          <InputBox onSend={sendMessage} />
        </div>

      </div>
    );
  }

  return (
    <div className="chat-area">

      <div className="messages">
        {chat.messages.map((msg, index) => (
          <div key={index} className={`msg ${msg.role}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {msg.content}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <InputBox onSend={sendMessage} />
    </div>
  );
}