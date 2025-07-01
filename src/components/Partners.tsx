
import React from 'react';

const Partners = () => {
  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hosting Partners */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">HOSTING PARTNERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl h-32 shadow-lg"></div>
            ))}
          </div>
        </div>

        {/* Our Partners */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">OUR PARTNERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl h-32 shadow-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
