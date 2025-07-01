import React from 'react';
import { Button } from '@/components/ui/button';
import { Laptop } from 'lucide-react';

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

        {/* Purple container with content */}
        <div className="relative z-10 bg-purple-500/90 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {/* Title with icon */}
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl font-extrabold text-white tracking-wide">PROBLEM STATEMENT</h2>
            <img
  src="/bulb.png" 
  alt="Heart"
  className="w-24 h-24 object-contain -mt-12 -mr-10"
/>
          </div>

          {/* Track Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-center mb-4">{track.title}</h3>
                <p className="text-gray-700 text-center mb-6 text-md leading-relaxed">
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
