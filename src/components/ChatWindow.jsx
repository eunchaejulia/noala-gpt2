import React, { useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: "ㅇㅇ 뭐" }]);
    setInput("");
  };

  return (
    <div>
      <div className="h-64 overflow-y-auto border p-2 mb-2 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.from === "user" ? "text-right" : "text-left"}>
            <span className="inline-block px-2 py-1 bg-gray-200 rounded m-1">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded px-2 py-1 flex-grow"
          placeholder="말해봐라"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-1 rounded">
          보내기
        </button>
      </div>
    </div>
  );
}
