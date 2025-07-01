import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          {/* Title and Image */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-2">ABOUT</h2>
              <h3 className="text-4xl font-bold text-purple-600">SHE BUILDS</h3>
            </div>

            {/* 🖼️ Custom Image Instead of Icon */}
            <img
  src="/heart.png" 
  alt="Heart"
  className="w-24 h-24 object-contain -mt-16 -mr-10"
/>
          </div>

          {/* Description */}
          <div className="text-gray-800 text-3xl leading-relaxed">
            <p>
              The <span className="font-bold">Great Bengaluru Hackathon</span> is a groundbreaking multi-campus
              innovation event that unites five premier engineering institutions across Bengaluru. As one of the
              largest student hackathons in the region, we bring together passionate developers, designers, and
              problem-solvers in an immersive hackathon experience that spans across multiple locations simultaneously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
