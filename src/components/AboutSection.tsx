
import React from 'react';
import { Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-2">ABOUT</h2>
              <h3 className="text-4xl font-bold text-purple-600">SHE BUILDS</h3>
            </div>
            <Heart className="text-pink-400 w-8 h-8" />
          </div>
          
          <div className="text-gray-800 text-lg leading-relaxed">
            <p>
              The <span className="font-bold">Great Bengaluru Hackathon</span> is a groundbreaking multi-campus 
              innovation event that unites five premier engineering institutions 
              across Bengaluru. As one of the largest student hackathons in the 
              region, we bring together passionate developers, designers, and 
              problem-solvers in an immersive hackathon experience that spans 
              across multiple locations simultaneously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
