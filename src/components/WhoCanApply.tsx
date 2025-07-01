
import React from 'react';
import { Book } from 'lucide-react';

const WhoCanApply = () => {
  return (
    <section id="who-can-apply" className="px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-600 rounded-3xl p-8 shadow-2xl text-white relative">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl font-bold">WHO CAN APPLY?</h2>
            <img
  src="/book.png" 
  alt="Heart"
  className="w-30 h-28 object-contain -mt-12 -mr-10"
/>
          </div>
          
          <div className="text-3xl leading-relaxed">
            <p>
              <span className="font-bold">THE GREAT BENGALURU HACKATHON</span> welcomes all college students 
              from across India, irrespective of the degree they are pursuing and for 
              under graduate (UG) students and post graduate(PG) students only. 
              You can participate either as an individual or in a team of up to 4 
              members. The team can be of interdisciplinary & Intercollege 
              participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
