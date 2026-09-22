import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to the College Dispensary. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();
    if (text.includes('time') || text.includes('hour') || text.includes('open')) {
      return 'The dispensary is open from 9:00 AM to 5:00 PM on weekdays, and 10:00 AM to 2:00 PM on Saturdays.';
    } else if (text.includes('emergency')) {
      return 'For emergencies, please call the campus security at 112 or visit the nearest hospital immediately.';
    } else if (text.includes('medicine') || text.includes('paracetamol')) {
      return 'Basic medicines like Paracetamol, Antacids, and first aid are available for free to students. Check the Stock page for more details.';
    } else if (text.includes('doctor') || text.includes('appointment')) {
      return 'Doctors are available during working hours. You can walk in; no prior appointment is strictly needed for general checkups.';
    } else if (text.includes('student') || text.includes('register')) {
      return 'Students must bring their college ID to register at the dispensary.';
    } else {
      return 'I am a simple bot. You can ask me about timings, emergencies, medicines, or doctors. For specific queries, please contact the dispensary staff.';
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg = { sender: 'bot', text: getBotResponse(userMsg.text) };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Dispensary Assistant</h4>
            <CloseIcon className="close-icon" onClick={toggleChat} />
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.sender}`}>
                <div className={`message ${msg.sender}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <SendIcon style={{ fontSize: '20px' }} />
            </button>
          </form>
        </div>
      )}
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <ChatIcon />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
