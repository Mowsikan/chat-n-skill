
import React, { useState } from 'react';
import { Send, Mic, Image, Paperclip, Lightbulb } from 'lucide-react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

// Sample chat messages for demonstration
const initialMessages = [
  { 
    id: 1, 
    sender: 'ai', 
    text: "Hello! I'm your LearnBuddy assistant. How can I help with your studies today?", 
    timestamp: new Date(Date.now() - 60000)
  },
  { 
    id: 2, 
    sender: 'user', 
    text: "I need help understanding the difference between mitosis and meiosis.", 
    timestamp: new Date(Date.now() - 45000)
  },
  { 
    id: 3, 
    sender: 'ai', 
    text: "Great question! Both mitosis and meiosis are types of cell division, but they serve different purposes and have different outcomes.\n\nMitosis is used for growth and repair. It produces two identical diploid cells that are exact copies of the parent cell.\n\nMeiosis is used for sexual reproduction. It produces four haploid cells with genetic diversity through crossing over and independent assortment.", 
    timestamp: new Date(Date.now() - 30000)
  }
];

// Sample suggestion buttons
const suggestions = [
  "Explain in simpler terms",
  "Show me a diagram",
  "Give me examples",
  "Quiz me on this topic"
];

const ChatMessage = ({ message }: { message: any }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${isUser ? 'ml-3' : 'mr-3'} ${isUser ? 'bg-gradient-to-r from-brand-blue to-brand-teal' : 'bg-gradient-to-r from-brand-purple-light to-brand-purple'}`}>
          {isUser ? (
            <span className="text-white text-sm font-medium">JS</span>
          ) : (
            <Lightbulb size={16} className="text-white" />
          )}
        </div>
        
        <div className={`p-4 rounded-2xl ${isUser ? 'rounded-tr-none bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white' : 'rounded-tl-none bg-gradient-to-r from-brand-purple-light to-brand-purple text-white'}`}>
          <div className="whitespace-pre-line">{message.text}</div>
          <div className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-purple-100'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        sender: 'ai',
        text: "I'm processing your question about " + inputValue + ". Let me think about this...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    // Optionally auto-send
    // setInputValue(suggestion);
    // setTimeout(() => handleSendMessage(), 100);
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header pageTitle="Chat with LearnBuddy" />
        
        <div className="flex-1 bg-gray-50 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          </div>
          
          {/* Suggestion Buttons */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto pb-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="flex-shrink-0 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
                  onClick={() => handleSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end gap-2">
                <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3">
                  <textarea
                    placeholder="Ask me anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-transparent resize-none focus:outline-none min-h-[40px] max-h-[200px]"
                    rows={1}
                  />
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 mt-2">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-200 transition-colors">
                        <Paperclip size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-200 transition-colors">
                        <Image size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-200 transition-colors">
                        <Mic size={18} />
                      </button>
                    </div>
                    <div className="text-xs text-gray-400">
                      Press Enter to send
                    </div>
                  </div>
                </div>
                <button
                  className="bg-brand-blue text-white p-3 rounded-full hover:bg-brand-blue-dark transition-colors flex-shrink-0"
                  onClick={handleSendMessage}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
