import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Lock } from 'lucide-react';

const tracks = [
  { id: 1, title: 'TRACK 1' },
  { id: 2, title: 'TRACK 2' },
];

const ProblemStatement = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="problem-statement" className="px-4 sm:px-6 lg:px-8 py-0">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Glowing Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600/50 via-purple-500/60 to-indigo-700/50 blur-2xl opacity-30 rounded-3xl" />
        
        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Main Container */}
        <div className="relative z-10 backdrop-blur-sm bg-purple-500/90 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden border border-purple-400/30">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-800/20 pointer-events-none" />

          <div className="relative z-10">

            {/* Title + Icon */}
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
                  className="relative w-12 h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Track Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tracks.map((track, index) => (
  <div
    key={track.id}
    className="group relative"
    onMouseEnter={() => setHoveredCard(track.id)}
    onMouseLeave={() => setHoveredCard(null)}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Card with 3D Vector Style */}
    <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-2xl p-4 h-full shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Locked Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-white rounded-2xl">
        <Lock className="w-8 h-8 mb-2 opacity-80" />
        <span className="text-sm font-semibold tracking-wide opacity-90">Coming Soon</span>
      </div>

      {/* Dimmed Content */}
      <div className="relative z-10 opacity-30 pointer-events-none select-none">
        <h3 className="text-lg sm:text-xl font-bold text-center mb-2 text-gray-800">
          {track.title}
        </h3>
        <p className="text-gray-700 text-center mb-4 text-sm leading-relaxed">
          Risk-Based Proctoring System for Online Assessments
        </p>
        <div className="text-center">
          <Button className="bg-purple-600 text-white px-4 py-1.5 rounded-full w-full text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
            <span>Know More</span>
            <ChevronRight className="w-3 h-3" />
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
