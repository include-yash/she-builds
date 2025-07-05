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
      name: 'RACHIT',
      phone: '+91 9584258725',
      email: 'programs@hackculture.in',
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
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
                  <h3 className="text-2xl font-bold mb-2">{contact.name}</h3>
                  <p className="text-lg mb-1">{contact.phone}</p>
                  <p className="text-lg">{contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-800 text-white text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">

            {/* Links */}
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 font-semibold">
              <a
                href="https://accidental-potato-870.notion.site/Vliv-presents-SheBuild-Hackathon-224ce9ad774880718a22c14db3c4bd6f"
                className="hover:underline"
                style={{ textShadow: '1px 1px 0 #a78bfa' }}
              >
                Code of Conduct
              </a>
              <a
                href="https://www.termsfeed.com/live/33515683-37c6-4f27-acd9-9ba55d07281b"
                className="hover:underline"
                style={{ textShadow: '1px 1px 0 #a78bfa' }}
              >
                Privacy Policy
              </a>
              <a
                href="https://bento.me/hackculture"
                className="hover:underline"
                style={{ textShadow: '1px 1px 0 #a78bfa' }}
              >
                Join Community
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end space-x-6 text-lg">
              <a
                href="https://www.instagram.com/hackculture.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-purple-300 transition" style={{ textShadow: '1px 1px 0 #a78bfa' }} />
              </a>
              <a
                href="https://x.com/Hack_Culture"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter className="hover:text-purple-300 transition" style={{ textShadow: '1px 1px 0 #a78bfa' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/hackculture/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:text-purple-300 transition" style={{ textShadow: '1px 1px 0 #a78bfa' }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
