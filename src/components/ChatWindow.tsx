
import React, { useState, useEffect, useRef } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { CloseIcon, COMPANY_NAME } from '@/constants';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'initial-bot-message', 
      text: `Welcome to ${COMPANY_NAME} chat! How can we assist you today?`, 
      sender: 'bot', 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300); // Allow transition to finish
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newUserMessage: Message = {
      id: String(Date.now()),
      text: inputValue,
      sender: 'user',
      timestamp
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInputValue('');

    // Simulate bot reply after a short delay
    setTimeout(() => {
      const botReply: Message = {
          id: String(Date.now() + 1),
          text: "Thanks for your message! A representative will be with you shortly. For urgent matters, please call us or send an email through our contact form.",
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prevMessages => [...prevMessages, botReply]);
    }, 1000);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 sm:bottom-20 sm:right-6 z-[60] w-full sm:w-auto sm:max-w-sm transition-all duration-300 ease-out ${isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-5 opacity-0 invisible'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-window-title"
    >
      <GlassCard className="shadow-2xl flex flex-col h-[80vh] sm:h-[70vh] max-h-[500px] w-full sm:w-[360px] rounded-t-xl sm:rounded-xl p-0">
        <header className="flex items-center justify-between p-3 sm:p-4 border-b border-glass-edge dark:border-glass-edge flex-shrink-0">
          <h2 id="chat-window-title" className="text-md sm:text-lg font-display font-semibold text-charcoal-deep dark:text-white">
            Live Chat
          </h2>
          <button
            onClick={onClose}
            aria-label="Close chat window"
            className="p-1 rounded-full text-charcoal-deep dark:text-white hover:bg-gray-warm/20 dark:hover:bg-gray-warm/10"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>

        <div className="flex-grow p-3 sm:p-4 space-y-3 overflow-y-auto">
          {messages.map(msg => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`max-w-[80%] p-2 sm:p-3 rounded-xl shadow ${
                  msg.sender === 'user'
                    ? 'bg-orange-vibrant text-white rounded-br-none'
                    : 'bg-blue-steel text-white rounded-bl-none dark:bg-gray-warm/30 dark:text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
              <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-gray-500 dark:text-gray-400 mr-1' : 'text-gray-500 dark:text-gray-400 ml-1'}`}>{msg.timestamp}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 sm:p-4 border-t border-glass-edge dark:border-glass-edge flex-shrink-0">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              aria-label="Chat message input"
              className="flex-grow p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors text-sm"
            />
            <Button type="submit" size="md" variant="primary" className="px-3 sm:px-4" aria-label="Send message">
              Send
            </Button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
};

export default ChatWindow;
