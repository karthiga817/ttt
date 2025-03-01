import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import "./s.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulated bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I assist you?", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-box">
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <IoMdSend className="send-icon" onClick={handleSend} />
      </div>
    </div>
  );
};

export default Chatbot;
