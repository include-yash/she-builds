import React from 'react';
import { Button } from '@/components/ui/button';

const tracks = [
  { id: 1, title: 'TRACK 1' },
  { id: 2, title: 'TRACK 2' },
  { id: 3, title: 'TRACK 3' },
  { id: 4, title: 'TRACK 4' }
];

const ProblemStatement = () => {
  return (
    <section id="problem-statement" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Glowing background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-600/50 via-purple-500/60 to-indigo-700/50 blur-2xl opacity-30 rounded-3xl" />

        {/* Main container */}
        <div className="relative z-10 bg-purple-500/90 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Title and icon */}
          <div className="flex flex-col-reverse sm:flex-col items-center justify-center text-center gap-4 mb-12 sm:mb-16">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
    PROBLEM STATEMENT
  </h2>
  <img
    src="/bulb.png"
    alt="Bulb"
    className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
  />
</div>

          {/* Track Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">{track.title}</h3>
                <p className="text-gray-700 text-center mb-6 text-sm sm:text-md leading-relaxed">
                  Risk-Based Proctoring System for Online Assessments
                </p>
                <div className="text-center">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full w-full transition duration-300">
                    Know More
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
