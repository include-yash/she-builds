import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Bot, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const problemStatements = [
  {
    id: 1,
    title: 'AI-Powered Personalized Roommate Matching',
    subtitle: 'for Women\'s Co-Living Spaces',
    description: 'Design and develop an AI-driven roommate matching system that intelligently recommends the most compatible roommates for twin-sharing accommodations using minimal survey input and Voice AI integration.',
    icon: <Users className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    route: '/problem-statement-1'
  },
  {
    id: 2,
    title: 'Voice-Driven Virtual Customer Success Manager',
    subtitle: 'for Resident Support and Engagement',
    description: 'Build a voice-enabled Virtual Community Manager for support management (complaint handling and tracking) and community engagement (event recommendations and analytics).',
    icon: <Bot className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    route: '/problem-statement-2'
  }
];

const ProblemStatement = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleReadMore = (route: string) => {
    navigate(route);
  };

  return (
    <section id="problem-statement" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Glowing Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600/50 via-purple-500/60 to-indigo-700/50 blur-2xl opacity-30 rounded-3xl" />
        
        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Main Container */}
        <div className="relative z-10 backdrop-blur-sm bg-purple-500/90 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-purple-400/30">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-800/20 pointer-events-none" />

          <div className="relative z-10">
            {/* Title + Icon */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <h2 className="flex items-center gap-6 text-3xl sm:text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
                PROBLEM STATEMENTS
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <img
                    src="/bulb.png"
                    alt="Bulb"
                    className="relative w-16 h-16 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </h2>
            </div>

            {/* Problem Statement Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {problemStatements.map((ps, index) => (
                <div
                  key={ps.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(ps.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card with 3D Vector Style */}
                  <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 h-full shadow-[8px_8px_0px_#a78bfa] hover:shadow-[12px_12px_0px_#7c3aed] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[400px] flex flex-col">

                    {/* Header */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${ps.color} text-white shadow-lg`}>
                        {ps.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-gray-500 tracking-wide">
                          PROBLEM STATEMENT {ps.id}
                        </span>
                        <div className="flex items-center gap-1">
                          <Headphones className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-blue-600 font-medium">Voice AI</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                        {ps.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 font-medium">
                        {ps.subtitle}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                        {ps.description}
                      </p>

                      {/* Read More Button */}
                      <div className="mt-auto">
                        <Button 
                          onClick={() => handleReadMore(ps.route)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full w-full text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                        >
                          <span>Read More</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center">
              <p className="text-white/80 text-sm">
                Both problem statements require integration with <a href="https://omnidim.io" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/80 hover:text-white underline">Omnidim.io</a> Voice AI Assistant for natural conversation interfaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
