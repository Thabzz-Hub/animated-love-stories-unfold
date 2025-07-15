
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Music, MessageCircle, Flower, Camera, Map, Star, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { ScrollObserver } from '@/components/ScrollObserver';
import { FloatingHearts } from '@/components/FloatingHearts';
import { ChatBubbles } from '@/components/ChatBubbles';
import { FlowerGarden } from '@/components/FlowerGarden';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { FutureTimeline } from '@/components/FutureTimeline';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-x-hidden">
      <FloatingHearts />
      
      {/* Music Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="glass-effect text-romantic-pink border-romantic-pink/30"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="glass-effect text-romantic-pink border-romantic-pink/30"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-script text-6xl md:text-8xl text-romantic-pink mb-6 animate-fade-in-up">
            Our Animated Love Timeline 💖
          </h1>
          <p className="font-inter text-xl md:text-2xl text-romantic-lavender mb-8 animate-fade-in-up [animation-delay:0.3s] opacity-0">
            A journey from day one to always
          </p>
          <Button
            onClick={() => scrollToSection('chapter1')}
            className="bg-gradient-to-r from-romantic-pink to-romantic-lavender text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all animate-fade-in-up [animation-delay:0.6s] opacity-0"
          >
            Start the Journey ✨
          </Button>
        </div>
        
        {/* Animated Heart */}
        <div className="absolute bottom-10 animate-heartbeat">
          <Heart className="w-12 h-12 text-romantic-pink fill-current" />
        </div>
      </section>

      {/* Chapter 1: How We Met */}
      <ScrollObserver>
        <section id="chapter1" className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left opacity-0">
              <Badge className="mb-4 bg-romantic-pink/20 text-romantic-pink border-romantic-pink/30">
                Chapter 1
              </Badge>
              <h2 className="font-script text-4xl md:text-6xl text-romantic-pink mb-6">
                How We Met – 'That First Spark'
              </h2>
              <div className="font-handwritten text-lg md:text-xl text-gray-700 bg-white/50 p-6 rounded-lg backdrop-blur-sm">
                <p className="mb-4">
                  "January 4th, 2023 — Campus Library. You looked up, and my whole world blinked into color."
                </p>
                <p className="text-romantic-lavender">
                  It was just another Tuesday until it wasn't. The way you smiled when our eyes met... 
                  I knew right then that my story was about to get so much better.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-6 text-romantic-pink border-romantic-pink/30 hover:bg-romantic-pink/10"
              >
                Rewind to That Day 💫
              </Button>
            </div>
            
            <div className="animate-slide-in-right opacity-0 [animation-delay:0.3s]">
              <div className="polaroid mx-auto max-w-sm">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
                  alt="First meeting"
                  className="w-full h-64 object-cover rounded"
                />
                <p className="font-handwritten text-center mt-2 text-gray-600">
                  The moment everything changed ✨
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 2: First Fight & Makeup */}
      <ScrollObserver>
        <section id="chapter2" className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-r from-gray-100 to-romantic-blue/20">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-4 bg-romantic-lavender/20 text-romantic-lavender border-romantic-lavender/30">
              Chapter 2
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-romantic-lavender mb-8 animate-fade-in-up opacity-0">
              First Fight & First Makeup – 'The Storm & The Rainbow'
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 bg-gray-200/50 animate-slide-in-left opacity-0">
                <div className="text-center">
                  <div className="text-6xl mb-4">💔</div>
                  <h3 className="font-script text-2xl text-gray-600 mb-4">The Storm</h3>
                  <p className="text-gray-700">
                    "Sometimes love means having the hard conversations..."
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-romantic-rose/20 animate-slide-in-right opacity-0 [animation-delay:0.3s]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌈</div>
                  <h3 className="font-script text-2xl text-romantic-pink mb-4">The Rainbow</h3>
                  <p className="text-gray-700">
                    "...and choosing to grow together instead of apart."
                  </p>
                  <div className="font-handwritten text-romantic-pink mt-4 p-3 bg-white/70 rounded-lg">
                    "I'm glad we stayed. 💕"
                  </div>
                </div>
              </Card>
            </div>
            
            <p className="font-script text-2xl text-romantic-lavender mt-8 animate-fade-in-up opacity-0 [animation-delay:0.6s]">
              "Even storms knew we were stronger than them."
            </p>
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 3: Our Song */}
      <ScrollObserver>
        <section id="chapter3" className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-b from-indigo-100 to-purple-100">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-200 text-purple-700 border-purple-300">
              Chapter 3
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-purple-700 mb-8 animate-fade-in-up opacity-0">
              Our Song – 'Our Melody'
            </h2>
            
            <div className="relative animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              <div className="bg-white/80 p-8 rounded-3xl backdrop-blur-sm border-2 border-purple-200 max-w-md mx-auto">
                <Music className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-script text-2xl text-purple-700 mb-4">Perfect by Ed Sheeran</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="italic">"You are the reason..."</p>
                  <p className="italic">"I still breathe, I still live..."</p>
                  <p className="italic">"I still love, I still hope..."</p>
                </div>
                <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                  Listen Together 🎵
                </Button>
              </div>
              
              {/* Floating musical notes */}
              <div className="absolute -top-4 -left-4 text-purple-400 animate-float">♪</div>
              <div className="absolute -top-2 -right-6 text-purple-500 animate-float [animation-delay:1s]">♫</div>
              <div className="absolute -bottom-4 left-8 text-purple-400 animate-float [animation-delay:2s]">♪</div>
            </div>
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 4: Sweet Messages */}
      <ScrollObserver>
        <section id="chapter4" className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-romantic-pink/20 text-romantic-pink border-romantic-pink/30 block w-fit mx-auto">
              Chapter 4
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-romantic-pink mb-8 text-center animate-fade-in-up opacity-0">
              Sweet Messages – 'Conversations That Made My Day'
            </h2>
            <ChatBubbles />
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 5: Virtual Flower Garden */}
      <ScrollObserver>
        <section id="chapter5" className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-b from-green-50 to-romantic-blue/10">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-green-200 text-green-700 border-green-300 block w-fit mx-auto">
              Chapter 5
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-green-700 mb-8 text-center animate-fade-in-up opacity-0">
              Virtual Flower Garden – 'Reasons I Love You'
            </h2>
            <p className="text-center text-green-600 mb-12 text-lg animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Click on each flower to discover a reason why you make my world bloom 🌸
            </p>
            <FlowerGarden />
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 6: Photo Carousel */}
      <ScrollObserver>
        <section id="chapter6" className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-romantic-lavender/20 text-romantic-lavender border-romantic-lavender/30 block w-fit mx-auto">
              Chapter 6
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-romantic-lavender mb-8 text-center animate-fade-in-up opacity-0">
              "Moments That Moved Us" – Our Memory Reel
            </h2>
            <PhotoCarousel />
          </div>
        </section>
      </ScrollObserver>

      {/* Chapter 7: Future Goals */}
      <ScrollObserver>
        <section id="chapter7" className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-blue-200 text-blue-700 border-blue-300 block w-fit mx-auto">
              Chapter 7
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl text-blue-700 mb-8 text-center animate-fade-in-up opacity-0">
              Future Goals – 'The Map We're Building'
            </h2>
            <FutureTimeline />
          </div>
        </section>
      </ScrollObserver>

      {/* Final Chapter: Forever Us */}
      <ScrollObserver>
        <section id="finale" className="min-h-screen flex items-center px-4 py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white relative">
          <div className="absolute inset-0">
            {/* Animated stars */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                ⭐
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 block w-fit mx-auto">
              Forever
            </Badge>
            <h2 className="font-script text-4xl md:text-6xl mb-8 animate-fade-in-up opacity-0">
              Forever Us – 'Always, No Matter What'
            </h2>
            
            <div className="space-y-8 animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              <p className="font-script text-2xl md:text-3xl text-purple-200">
                "No matter where this world takes us... you'll always be my home."
              </p>
              
              <div className="font-handwritten text-lg bg-white/10 p-6 rounded-lg backdrop-blur-sm max-w-md mx-auto">
                <p className="mb-4">With all my love,</p>
                <p className="text-purple-200">Your Forever Person 💕</p>
              </div>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all animate-heartbeat"
                onClick={() => {
                  // Trigger confetti animation
                  const hearts = document.querySelectorAll('.floating-heart');
                  hearts.forEach((heart, i) => {
                    setTimeout(() => {
                      heart.classList.add('animate-ping');
                    }, i * 100);
                  });
                }}
              >
                Click if you love me ✨
              </Button>
              
              <div className="hidden confetti-message text-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                <p className="font-script text-2xl text-pink-200">
                  "She does. And she always will." 💖
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Index;
