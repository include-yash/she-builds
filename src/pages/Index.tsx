
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ProblemStatement from '../components/ProblemStatement';
import PrizePool from '../components/PrizePool';
import WhoCanApply from '../components/WhoCanApply';
import Timeline from '../components/Timeline';
import Partners from '../components/Partners';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'problem-statement', 'prizes', 'who-can-apply', 'timelines'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-white font-bold text-6xl transform rotate-12 select-none"
              style={{
                left: `${(i % 8) * 15}%`,
                top: `${Math.floor(i / 8) * 20}%`,
                transform: 'rotate(12deg)',
              }}
            >
              SHE BUILDS
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
