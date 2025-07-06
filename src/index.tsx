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
  <div className="min-h-screen flex flex-col justify-between bg-[#c3a3fb]">
    {/* Watermark */}
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* watermark content */}
    </div>

    {/* Page Content */}
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

    {/* Sticky Footer */}
    
  </div>
);

};

export default Index;
