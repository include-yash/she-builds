import React from 'react';
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from 'react-icons/fa6';

const ContactSection = () => {
  const contacts = [
    {
      name: 'SOHAM VYAS',
      phone: '+91 9901442338',
      email: 'soham@hackculture.in',
    },
    {
      name: 'RACHIT RANKA',
      phone: '+91 9584258725',
      email: 'programs@hackculture.in',
    },
  ];
  

  return (
    <>
      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-0 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-purple-600 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              CONTACT US
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="px-6 py-4 text-center text-white flex flex-col justify-center"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2">{contact.name}</h3>
                  <p className="text-lg mb-1">{contact.phone}</p>
                  <p className="text-lg">{contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactSection;
