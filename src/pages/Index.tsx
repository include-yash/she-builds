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
import Footer from '../components/Footer';

interface IndexProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}


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
    <div className="min-h-screen flex flex-col bg-[#c3a3fb] overflow-hidden relative">
      {/* ✅ Watermark Background */}
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

      {/* ✅ Actual Content */}
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

      {/* ✅ Footer at Bottom Always */}
      <Footer />
    </div>
  );
};

export default Index;
