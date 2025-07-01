
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Lightbulb } from 'lucide-react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 15,
    minutes: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-8 py-16 text-center relative">
      <div className="max-w-4xl mx-auto">
        {/* VLIV Presents */}
        <div className="mb-8">
          <div className="text-lg text-white mb-2">VLIV</div>
          <div className="text-sm text-white opacity-80">Presents</div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            She<span className="text-black">Builds</span>.
          </h1>
          <p className="text-xl text-white font-medium">All India Women only Hackathon</p>
        </div>

        {/* Register Button */}
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold mb-12">
          Register Now
        </Button>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg min-w-[120px]">
              <div className="text-4xl font-bold text-black mb-2">{item.value}</div>
              <div className="text-purple-600 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-purple-200 rounded-full"></div>
              <div className="w-16 h-16 bg-purple-300 rounded-full"></div>
            </div>
            <div className="text-black font-semibold text-lg">#BuiltbyHer</div>
          </div>
          
          {/* Decorative Elements */}
          <Heart className="absolute top-4 left-4 text-pink-400 w-8 h-8" />
          <Lightbulb className="absolute top-2 right-8 text-yellow-400 w-10 h-10" />
          <div className="absolute bottom-4 left-8 w-12 h-8 bg-red-400 rounded transform rotate-12"></div>
          <div className="absolute bottom-0 right-4 w-16 h-12 bg-white rounded shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
