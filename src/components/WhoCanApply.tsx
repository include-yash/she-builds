
import React from 'react';
import { Book } from 'lucide-react';

const WhoCanApply = () => {
  return (
    <section id="who-can-apply" className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-purple-600 rounded-3xl p-8 shadow-2xl text-white relative">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl font-bold">WHO CAN APPLY?</h2>
            <Book className="text-cyan-300 w-10 h-10" />
          </div>
          
          <div className="text-lg leading-relaxed">
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
