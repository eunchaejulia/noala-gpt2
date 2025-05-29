import React from "react";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">노알라 GPT 챗봇</h1>
        <ChatWindow />
      </div>
    </div>
  );
}
