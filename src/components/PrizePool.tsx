
import React from 'react';
import { Lightbulb } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    { position: 'WINNERS', amount: '75k', color: 'bg-purple-500' },
    { position: '1ST RUNNER UP', amount: '50k', color: 'bg-purple-400' },
    { position: '2ND RUNNER UP', amount: '20k', color: 'bg-purple-300' }
  ];

  return (
    <section id="prizes" className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-purple-600">PRIZE POOL</h2>
            <Lightbulb className="text-yellow-400 w-10 h-10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <div key={index} className={`${prize.color} rounded-2xl p-8 text-center`}>
                <h3 className="text-white font-bold text-lg mb-4">{prize.position}</h3>
                <div className="text-white text-6xl font-bold">{prize.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
