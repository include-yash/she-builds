
import React from 'react';
import { Button } from '@/components/ui/button';
import { Laptop } from 'lucide-react';

const ProblemStatement = () => {
  const tracks = [
    { id: 1, title: 'TRACK 1' },
    { id: 2, title: 'TRACK 2' },
    { id: 3, title: 'TRACK 3' },
    { id: 4, title: 'TRACK 4' }
  ];

  return (
    <section id="problem-statement" className="px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with laptop icon */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-white mb-8">PROBLEM STATEMENT</h2>
          <Laptop className="absolute top-0 right-8 text-red-400 w-12 h-12 transform rotate-12" />
        </div>
        
        {/* Horizontal container for all tracks */}
        <div className="bg-purple-500/80 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <div key={track.id} className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-center mb-4">{track.title}</h3>
                <p className="text-gray-700 text-center mb-6 text-sm leading-relaxed">
                  Risk-Based Proctoring System for Online Assessments
                </p>
                <div className="text-center">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full w-full">
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
