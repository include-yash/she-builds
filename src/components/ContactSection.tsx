import React from 'react';

const ContactSection = () => {
  const contacts = [
    {
      name: 'SHREYAS ARADHYA',
      phone: '+91 9164490878',
      email: 'programs@hackculture.in'
    },
    {
      name: 'JANE DOE',
      phone: '+91 9876543210',
      email: 'contact@hackculture.in'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-600 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            WHO CAN APPLY?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="px-6 py-4 text-center text-white flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold mb-2">{contact.name}</h3>
                <p className="text-lg mb-1">{contact.phone}</p>
                <p className="text-lg">{contact.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
