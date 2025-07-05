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
      <Footer />

    </div>
  );
};

export default Index;
