
import React from 'react';
import { Heart } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    'January 15th - March 6th Registrations',
    'January 31st - March 6th Registrations',
    'January 31st - March 6th Registrations',
    'February 15th - March 6th Registrations',
    'February 15th - March 6th Registrations'
  ];

  return (
    <section id="timelines" className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-purple-600">EVENT TIMELINE</h2>
            <Heart className="text-pink-400 w-8 h-8" />
          </div>
          
          <div className="flex justify-between items-center">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full mb-4"></div>
                <div className="text-center text-sm font-medium max-w-[120px]">
                  {event}
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="absolute h-0.5 bg-gray-300 w-24 mt-4" 
                       style={{ left: `${(index + 1) * 20}%` }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
