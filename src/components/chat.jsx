// AIzaSyA_EOGbtSQTgy3I2ChxkQabxYJJ-riKoDI
import React, { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyA_EOGbtSQTgy3I2ChxkQabxYJJ-riKoDI";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      const botReply = response.data.candidates[0]?.content?.parts[0]?.text || "No response.";
      setMessages([...newMessages, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Error getting response." }]);
    }
    setLoading(false);
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "stiff" }}
    className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg" id="Chat">

      <h2 className="text-2xl font-bold mb-4 text-center">Chatbot Assistance</h2>

      <div className="h-80 overflow-y-auto border border-gray-300 p-3 rounded mb-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 ${
              msg.role === "user"
                ? "bg-blue-500 text-white text-right ml-auto w-fit"
                : "bg-gray-300 text-black text-left w-fit"
            }`}
          >
            <b>{msg.role === "user" ? "You" : "AI"}:</b> {msg.content}
          </div>
        ))}

        {loading && <p className="text-gray-500 text-center">AI is typing...</p>}
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="text-white px-4 py-2 rounded-r bg-[#272263] hover:bg-[#101054] transition"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default Chat;