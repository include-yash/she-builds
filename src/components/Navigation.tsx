import React, { useEffect, useRef, useState } from 'react';

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

  const btnRefs = useRef<HTMLButtonElement[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [localActiveId, setLocalActiveId] = useState(activeSection);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === localActiveId);
    const activeBtn = btnRefs.current[activeIndex];

    if (activeBtn && indicatorRef.current) {
      const rect = activeBtn.getBoundingClientRect();
      const parentRect = activeBtn.parentElement?.getBoundingClientRect();

      if (parentRect) {
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width
        });
      }
    }
  }, [localActiveId]);

  useEffect(() => {
    setLocalActiveId(activeSection);
  }, [activeSection]);

  const handleClick = (id: string) => {
    if (id !== activeSection) {
      setLocalActiveId(id);
      setTimeout(() => {
        scrollToSection(id);
      }, 400);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#945cfb] backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="relative flex overflow-x-auto no-scrollbar justify-start md:justify-evenly items-center px-4 py-4 max-w-7xl mx-auto gap-2 md:gap-0">
        {/* Animated Pill */}
        <div
          ref={indicatorRef}
          className="absolute top-1/2 -translate-y-1/2 h-10 bg-white rounded-full shadow-md transition-all duration-500"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width
          }}
        />
        {/* Buttons */}
        {navItems.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => (btnRefs.current[index] = el!)}
            onClick={() => handleClick(item.id)}
            className={`relative z-10 px-5 py-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ${
              localActiveId === item.id
                ? 'text-purple-600'
                : 'text-white hover:text-purple-200'
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
