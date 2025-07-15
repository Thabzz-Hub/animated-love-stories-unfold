
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
    title: "Our First Date",
    date: "January 15, 2023",
    description: "That little café where we talked for hours and forgot the world existed.",
    type: "date"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
    title: "Weekend Getaway",
    date: "March 20, 2023",
    description: "Our first trip together. You made even the rainy day perfect.",
    type: "travel"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
    title: "Lazy Sunday Morning",
    date: "May 8, 2023",
    description: "Coffee in bed, your head on my shoulder, nowhere else to be.",
    type: "everyday"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
    title: "Adopting Muffin",
    date: "July 12, 2023",
    description: "Our first 'baby' together. You cried happy tears for an hour.",
    type: "milestone"
  }
];

export const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentMemory = memories[currentIndex];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up opacity-0">
      {/* Main Carousel */}
      <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm shadow-2xl">
        <div className="relative h-96 md:h-[500px]">
          <img
            src={currentMemory.image}
            alt={currentMemory.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-700 hover:bg-white rounded-full p-2"
            size="sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-700 hover:bg-white rounded-full p-2"
            size="sm"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Film Strip Overlay */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-black via-transparent to-black opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-black via-transparent to-black opacity-30"></div>
        </div>

        {/* Memory Details */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-romantic-pink" />
            <span className="text-sm text-gray-500">{currentMemory.date}</span>
          </div>
          
          <h3 className="font-script text-2xl md:text-3xl text-romantic-pink mb-3">
            {currentMemory.title}
          </h3>
          
          <p className="text-gray-700 text-lg font-handwritten">
            "{currentMemory.description}"
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-1">
              {memories.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-romantic-pink w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              className="text-romantic-pink border-romantic-pink/30 hover:bg-romantic-pink/10"
            >
              <Heart className="w-4 h-4 mr-2" />
              Recreate This Memory
            </Button>
          </div>
        </div>
      </Card>

      {/* Thumbnail Strip */}
      <div className="flex gap-4 mt-6 justify-center">
        {memories.map((memory, index) => (
          <button
            key={memory.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all ${
              index === currentIndex ? 'ring-2 ring-romantic-pink scale-110' : 'opacity-60 hover:opacity-80'
            }`}
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
