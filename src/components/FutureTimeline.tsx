
import { useState } from 'react';
import { Map, Plane, Heart, Home, Calendar, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const futureGoals = [
  {
    id: 1,
    title: "Paris Adventure",
    date: "Summer 2027",
    description: "Picnics by the Seine, dancing under the Eiffel Tower, and getting lost in the Louvre together.",
    icon: Plane,
    status: "dreaming",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    title: "The Big Question",
    date: "2028",
    description: "When the moment feels perfect, and forever doesn't seem long enough.",
    icon: Heart,
    status: "planning",
    color: "from-pink-400 to-rose-600"
  },
  {
    id: 3,
    title: "Our First Home",
    date: "2030",
    description: "A cozy place with a big kitchen, a reading nook, and room for all our dreams to grow.",
    icon: Home,
    status: "saving",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 4,
    title: "Growing Our Family",
    date: "The Future",
    description: "Little footsteps, bedtime stories, and watching our love create new love.",
    icon: Star,
    status: "someday",
    color: "from-purple-400 to-indigo-600"
  }
];

export const FutureTimeline = () => {
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const [customDream, setCustomDream] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'saving': return 'bg-green-100 text-green-800 border-green-300';
      case 'dreaming': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-purple-100 text-purple-800 border-purple-300';
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up opacity-0">
      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-purple-300 rounded-full"></div>

        <div className="space-y-12">
          {futureGoals.map((goal, index) => (
            <div
              key={goal.id}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-6 h-6 bg-gradient-to-r ${goal.color} rounded-full border-4 border-white shadow-lg`}></div>
              </div>

              {/* Goal Card */}
              <Card
                className={`w-5/12 p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl ${
                  selectedGoal === goal.id ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white/90'
                } backdrop-blur-sm`}
                onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 bg-gradient-to-r ${goal.color} rounded-lg text-white`}>
                    <goal.icon className="w-5 h-5" />
                  </div>
                  <Badge className={getStatusColor(goal.status)}>
                    {goal.status}
                  </Badge>
                </div>

                <h3 className="font-script text-xl text-blue-700 mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{goal.date}</p>
                <p className="text-gray-700">{goal.description}</p>

                {selectedGoal === goal.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in-up">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                        <Calendar className="w-4 h-4 mr-1" />
                        Set Reminder
                      </Button>
                      <Button size="sm" variant="outline" className="text-green-600 border-green-300">
                        <Map className="w-4 h-4 mr-1" />
                        Start Planning
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Add Your Dream Section */}
      <Card className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 animate-fade-in-up opacity-0 [animation-delay:0.5s]">
        <div className="text-center">
          <h3 className="font-script text-2xl text-purple-700 mb-4">Add Your Dream</h3>
          <p className="text-gray-600 mb-4">What future moment are you excited to share with me?</p>
          
          <div className="max-w-md mx-auto">
            <textarea
              value={customDream}
              onChange={(e) => setCustomDream(e.target.value)}
              placeholder="I can't wait for us to..."
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
              rows={3}
            />
            <Button
              className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
              onClick={() => {
                if (customDream.trim()) {
                  alert("Your dream has been added to our timeline! 💕");
                  setCustomDream("");
                }
              }}
            >
              <Heart className="w-4 h-4 mr-2" />
              Add to Our Future
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
