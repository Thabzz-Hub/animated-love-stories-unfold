
import { useState } from 'react';
import { Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';

const reasons = [
  { id: 1, text: "You make chaos feel like home", color: "text-pink-500" },
  { id: 2, text: "Your laugh makes me forget I was sad", color: "text-purple-500" },
  { id: 3, text: "You see magic in ordinary moments", color: "text-blue-500" },
  { id: 4, text: "You make me want to be better", color: "text-green-500" },
  { id: 5, text: "Your kindness knows no bounds", color: "text-yellow-500" },
  { id: 6, text: "You turn my anxiety into adventure", color: "text-red-500" },
  { id: 7, text: "You love me on my worst days", color: "text-indigo-500" },
  { id: 8, text: "You make time stop and fly at once", color: "text-rose-500" },
  { id: 9, text: "Your dreams inspire my reality", color: "text-teal-500" },
  { id: 10, text: "You are my favorite plot twist", color: "text-orange-500" },
];

export const FlowerGarden = () => {
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);
  const [revealedFlowers, setRevealedFlowers] = useState<number[]>([]);

  const handleFlowerClick = (id: number) => {
    setSelectedFlower(id);
    if (!revealedFlowers.includes(id)) {
      setRevealedFlowers([...revealedFlowers, id]);
    }
  };

  return (
    <div className="relative">
      {/* Flower Grid */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-4 mb-8 animate-fade-in-up opacity-0">
        {reasons.map((reason, index) => (
          <button
            key={reason.id}
            onClick={() => handleFlowerClick(reason.id)}
            className={`relative group transition-all duration-300 hover:scale-110 ${
              selectedFlower === reason.id ? 'scale-125' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Flower
              className={`w-8 h-8 md:w-12 md:h-12 ${reason.color} ${
                revealedFlowers.includes(reason.id) ? 'animate-sparkle' : 'animate-float'
              }`}
            />
            {revealedFlowers.includes(reason.id) && (
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping">
                ✨
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Reason Display */}
      {selectedFlower && (
        <Card className="p-6 bg-white/90 backdrop-blur-sm text-center animate-fade-in-up max-w-md mx-auto">
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="font-script text-2xl text-romantic-pink mb-2">
            Reason #{selectedFlower}
          </h3>
          <p className="text-gray-700 text-lg">
            {reasons.find(r => r.id === selectedFlower)?.text}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {revealedFlowers.length} of {reasons.length} flowers discovered
          </div>
        </Card>
      )}

      {/* Easter Egg */}
      {revealedFlowers.length === reasons.length && (
        <div className="mt-8 text-center animate-fade-in-up">
          <Card className="p-6 bg-gradient-to-r from-romantic-pink/20 to-romantic-lavender/20 border-romantic-pink/30">
            <div className="text-4xl mb-4">💌</div>
            <h3 className="font-script text-2xl text-romantic-pink mb-4">
              Hidden Love Letter Unlocked!
            </h3>
            <p className="font-handwritten text-lg text-gray-700">
              "You found every reason... but here's the truth: there are infinite more reasons why I love you. 
              You are my universe, and every day with you adds another star to my sky. 💕"
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};
