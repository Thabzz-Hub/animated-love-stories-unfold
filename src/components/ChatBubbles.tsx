
import { useState, useEffect } from 'react';
import { Heart, Volume2 } from 'lucide-react';

const messages = [
  { id: 1, text: "Good morning, beautiful! ☀️", sender: 'me', time: '8:23 AM' },
  { id: 2, text: "Morning! You're up early 😊", sender: 'her', time: '8:25 AM' },
  { id: 3, text: "Couldn't sleep, kept thinking about you", sender: 'me', time: '8:26 AM' },
  { id: 4, text: "Aww you're so sweet 💕", sender: 'her', time: '8:27 AM' },
  { id: 5, text: "Can't wait to see you later", sender: 'me', time: '8:28 AM' },
  { id: 6, text: "Me too! I have something special planned 😉", sender: 'her', time: '8:30 AM' },
];

export const ChatBubbles = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, index]);
      }, index * 800);
    });
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl animate-fade-in-up opacity-0">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-romantic-pink rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-current" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">My Love 💖</h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} ${
              visibleMessages.includes(index) ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`max-w-xs px-4 py-2 ${
                message.sender === 'me'
                  ? 'chat-bubble-right text-white'
                  : 'chat-bubble-left text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-romantic-pink/20 text-romantic-pink py-2 px-4 rounded-lg hover:bg-romantic-pink/30 transition-colors">
          💖 Send Love
        </button>
        <button className="p-2 bg-romantic-lavender/20 text-romantic-lavender rounded-lg hover:bg-romantic-lavender/30 transition-colors">
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
