import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          {/* Title and Image - Always in row layout */}
          <div className="flex justify-between items-center mb-8 lg:mb-8 gap-4">
            {/* Heading */}
            <div className="flex-1">
              {/* Desktop: Single line */}
              <h2 className="hidden lg:block text-3xl sm:text-4xl font-bold text-purple-600 leading-tight">
                ABOUT SHE BUILDS
              </h2>

              {/* Mobile: Two lines */}
              <h2 className="block lg:hidden text-2xl sm:text-3xl font-bold text-purple-600 leading-snug mb-2">
                ABOUT SHE BUILDS
              </h2>
            </div>

            {/* Icon always on the right */}
            <div className="flex-shrink-0">
              <img
                src="/heart.png"
                alt="Heart"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-800 text-xl sm:text-3xl leading-relaxed">
            <p>
              We welcome <span className="font-bold">women-driven</span> innovators, leaders, learners, and students who are ready to challenge boundaries and shape the future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
