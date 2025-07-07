import React from 'react';

const WhoCanApply = () => {
  return (
    <section id="who-can-apply" className="px-4 sm:px-6 lg:px-8 py-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-500/90 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white">
          {/* Title and Icon - Always in Row */}
          <div className="flex justify-between items-center mb-8 gap-4">
            {/* Heading Block */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                WHO CAN APPLY?
              </h2>
            </div>

            {/* Icon on Right */}
            <div className="flex-shrink-0">
              <img
                src="/book.png"
                alt="Book"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="text-white text-xl sm:text-2xl leading-relaxed">
            <p className="mb-4">
              We welcome driven <span className="font-bold">women innovators, leaders, and learners</span> who are ready to challenge boundaries and shape the future.
            </p>
            <p className="font-semibold mb-2 border-b border-white/30 pb-2">
              Eligibility Criteria:
            </p>
            <ul className="list-disc pl-5 sm:pl-8 text-white/90 space-y-2">
              <li>Women professionals with up to 2 years of industry experience</li>
              <li>Female students currently pursuing undergraduate or postgraduate education</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
