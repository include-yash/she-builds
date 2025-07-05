import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          {/* Title and Image - Always in row layout */}
          <div className="flex justify-between items-start mb-6 gap-4">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 leading-tight mb-2">
  ABOUT<br />SHE BUILDS
</h2>

            </div>

            {/* Image always on the right side */}
            <div className="flex-shrink-0">
              <img
                src="/heart.png"
                alt="Heart"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-800 text-xl sm:text-3xl leading-relaxed">
            <p>
              SheBuilds is a <span className='font-bold'>24-hour women-centric</span> innovation sprint where developers, designers, and builders from across India come together to solve real-world problems through technology and creativity — SheBuilds is a launchpad for women in tech to innovate, inspire, and lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;