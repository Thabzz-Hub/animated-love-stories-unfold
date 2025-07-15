
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const heartArray = [];
    for (let i = 0; i < 15; i++) {
      heartArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
      });
    }
    setHearts(heartArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute floating-heart animate-float opacity-20"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart className="w-4 h-4 text-romantic-pink fill-current" />
        </div>
      ))}
    </div>
  );
};
