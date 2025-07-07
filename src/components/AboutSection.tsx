import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          {/* Title and Image - Updated layout */}
          <div className="flex items-center justify-center mb-8 lg:mb-8 gap-2">
            {/* Desktop: Single line with icon */}
            <h2 className="hidden lg:flex items-center gap-6 text-3xl sm:text-4xl font-bold text-purple-600 leading-tight">
              ABOUT SHE BUILDS
              <img
                src="/heart.png"
                alt="Heart"
                className="w-16 h-16 object-contain"
              />
            </h2>

            {/* Mobile: Two lines with icon */}
            <h2 className="flex lg:hidden items-center gap-2 text-2xl sm:text-3xl font-bold text-purple-600 leading-snug mb-2">
              ABOUT SHE BUILDS
              <img
                src="/heart.png"
                alt="Heart"
                className="w-4 h-4 object-contain"
              />
            </h2>
          </div>

           {/* Description */}
           <div className="text-gray-800 text-xl sm:text-2xl leading-relaxed">
           <p>
              We welcome <span className="font-bold">women-driven</span> innovators, leaders, learners, and students who are ready to challenge boundaries and shape the future.
           </p>
           <br />
            <p>
              <span className="font-bold">SheBuilds</span> is a women-centric hackathon designed to celebrate and empower women in technology. In partnership with leading companies, universities, and changemakers, SheBuilds creates a safe and inspiring space where women developers, designers, and product thinkers come together to innovate, collaborate, and lead solutions for real-world challenges.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
