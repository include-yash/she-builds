
import React from 'react';

const ContactSection = () => {
  return (
    <section className="px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-purple-600 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">WHO CAN APPLY?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">SHREYAS ARADHYA</h3>
                <p className="text-lg">+91 9164490878</p>
                <p className="text-lg">programs@hackculture.in</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
