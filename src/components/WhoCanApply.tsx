import React from 'react';

const WhoCanApply = () => {
  return (
    <section id="who-can-apply" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-600 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-white relative">
          
          {/* Heading and Image */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                WHO CAN APPLY?
              </h2>
            </div>

            <img
              src="/book.png"
              alt="Book"
              className="w-20 sm:w-24 md:w-28 object-contain -mt-4 sm:-mt-10 sm:-mr-6"
            />
          </div>

          {/* Description */}
          <div className="text-lg sm:text-2xl md:text-3xl leading-relaxed text-center sm:text-left">
            <p>
              <span className="font-bold">THE GREAT BENGALURU HACKATHON</span> welcomes all college students 
              from across India, irrespective of the degree they are pursuing and for 
              undergraduate (UG) and postgraduate (PG) students only. You can participate 
              either as an individual or in a team of up to 4 members. The team can be 
              interdisciplinary and intercollege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
