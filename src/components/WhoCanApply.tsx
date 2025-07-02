import React from 'react';

const WhoCanApply = () => {
  return (
    <section id="who-can-apply" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-500/90 rounded-3xl p-6 sm:p-10 shadow-xl text-white relative overflow-hidden">

          {/* Decorative Gradient Blur */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 blur-2xl opacity-20 pointer-events-none" />

          {/* Header - Always in row layout */}
          <div className="relative flex justify-between items-start mb-12 gap-6">
            <div className="flex-1 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Who Can Apply?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/80 font-light max-w-md">
                Open to passionate women from all walks of life ready to innovate and lead.
              </p>
            </div>

            <div className="flex-shrink-0">
              <img
                src="/book.png"
                alt="Book"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="relative text-left text-lg sm:text-xl md:text-2xl font-medium space-y-4">
            <p className="text-white font-semibold border-b border-white/20 pb-2">
              Women eligible include:
            </p>
            <ul className="list-disc pl-6 sm:pl-10 space-y-2 text-white/90">
              <li>Working Professionals - (less than 2 yrs Exp.)</li>
              <li>Students</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;