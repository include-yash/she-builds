import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          {/* Title and Image - Responsive flex-wrap */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">ABOUT</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-600">SHE BUILDS</h3>
            </div>

            {/* Responsive Image */}
            <img
              src="/heart.png"
              alt="Heart"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain sm:-mt-16 sm:-mr-10"
            />
          </div>

          {/* Description */}
          <div className="text-gray-800 text-xl sm:text-3xl leading-relaxed">
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
