
import React from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'problem-statement', label: 'Problem Statement' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'who-can-apply', label: 'Who can apply' },
    { id: 'timelines', label: 'Timelines' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-center space-x-8 px-8 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
