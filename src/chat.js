import React, { useState } from "react";
import "./chat.css"; // Import CSS styles
import { X, MessageCircle } from "lucide-react"; // For icons

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <MessageCircle size={28} color="white" />
      </div>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
        <div className="chat-header">
          <h3>Tim Buddy</h3>
          <X size={20} onClick={toggleChat} className="close-btn" />
        </div>
        <div className="chat-body">
          <p><strong>Tim Buddy:</strong> Hello! How can I help you?</p>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
