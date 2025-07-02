import React, { useState } from "react";
import { Crown, Trophy, Award, Sparkles, Star } from "lucide-react";

const PrizePool = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const prizes = [
    { position: "WINNERS", amount: "1L", icon: Crown, emoji: "👑" },
    { position: "1ST RUNNER UP", amount: "50k", icon: Trophy, emoji: "🥈" },
    { position: "2ND RUNNER UP", amount: "20k", icon: Award, emoji: "🥉" },
  ];

  return (
    <section id="prizes" className="px-4 sm:px-6 lg:px-8 py-10 sm:py-22 relative overflow-hidden">
      {/* Fun floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-purple-300/40 animate-pulse" />
        <Star className="absolute top-40 right-20 w-4 h-4 text-purple-400/50 animate-ping" />
        <Sparkles className="absolute bottom-32 left-1/4 w-5 h-5 text-purple-300/30 animate-bounce" />
        <Star className="absolute bottom-20 right-10 w-4 h-4 text-purple-400/40 animate-pulse delay-1000" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Animated Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl relative">
          {/* Title */}
          <div className="text-center mb-10 sm:mb-12 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 tracking-tight drop-shadow-md">
              PRIZE POOL
            </h2>
          </div>

          {/* Prize Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {prizes.map((prize, index) => {
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className="relative rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Rich Purple Gradient Background */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 group-hover:from-purple-500 group-hover:via-purple-600 group-hover:to-purple-700 transition duration-300 rounded-2xl"></div>

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold text-sm sm:text-md uppercase mb-4 tracking-widest drop-shadow-sm">
                      {prize.position}
                    </h3>
                    
                    <div className="relative mb-4">
                      <div className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl">
                        ₹{prize.amount}
                      </div>
                      
                      {/* Expanding line effect */}
                      <div className={`h-1 bg-gradient-to-r from-purple-200 to-purple-100 mx-auto rounded-full transition-all duration-500 mt-3 ${isHovered ? 'w-full' : 'w-12'}`} />
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;