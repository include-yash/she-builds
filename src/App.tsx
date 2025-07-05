import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Navigation from '../src/components/Navigation';
import AboutSection from '../src/components/AboutSection';
import ProblemStatement from '../src/components/ProblemStatement';
import PrizePool from '../src/components/PrizePool';
import WhoCanApply from '../src/components/WhoCanApply';
import Timeline from '../src/components/Timeline';
import Partners from '../src/components/Partners';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Index = ({ activeSection, scrollToSection }) => {
  const [localActiveSection, setLocalActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'problem-statement', 'prizes', 'who-can-apply', 'timelines'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setLocalActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#c3a3fb]">
      {/* Optional watermark background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: 'absolute',
            width: '3000px',
            height: '5000px',
            left: '-1200px',
            top: '-900px',
            fontFamily: 'Anton, sans-serif',
            fontWeight: 600,
            fontSize: '110px',
            lineHeight: '100%',
            letterSpacing: '2px',
            color: 'transparent',
            WebkitTextStroke: '2px #ffffff',
            transform: 'matrix(0.97, -0.25, 0.24, 0.97, 0, 0)',
            whiteSpace: 'pre-wrap',
            opacity: 0.14,
          }}
        >
          {Array(100).fill('SHE BUILDS ').join('')}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <Header />
        <HeroSection />
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <div className="space-y-16 pb-16">
          <AboutSection />
          <ProblemStatement />
          <PrizePool />
          <WhoCanApply />
          <Timeline />
          <Partners />
          <ContactSection />
        </div>
      </div>

      {/* Footer will always be at the bottom */}
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
    </div>
  );
};

export default Index;
