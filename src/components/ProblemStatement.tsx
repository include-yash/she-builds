import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const tracks = [
  { id: 1, title: 'TRACK 1' },
  { id: 2, title: 'TRACK 2' },
  { id: 3, title: 'TRACK 3' },
  { id: 4, title: 'TRACK 4' }
];

const ProblemStatement = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="problem-statement" className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Enhanced glowing background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600/50 via-purple-500/60 to-indigo-700/50 blur-2xl opacity-30 rounded-3xl" />
        
        {/* Additional animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Main container with enhanced styling */}
        <div className="relative z-10 backdrop-blur-sm bg-purple-500/90 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden border border-purple-400/30">

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-800/20 pointer-events-none" />

          <div className="relative z-10">
            {/* Fixed title and icon - always in row layout */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="flex-1 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
                  PROBLEM STATEMENT
                </h2>
              </div>
              
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img
                  src="/bulb.png"
                  alt="Bulb"
                  className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Enhanced Track Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(track.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-purple-400/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Enhanced card */}
                  <div className="relative backdrop-blur-sm bg-white/95 rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-white/50 group-hover:border-purple-200/50">
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-center mb-2 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                        {track.title}
                      </h3>
                      
                      <p className="text-gray-700 text-center mb-4 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                        Risk-Based Proctoring System for Online Assessments
                      </p>
                      
                      <div className="text-center">
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-full w-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                          <span>Know More</span>
                          <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;