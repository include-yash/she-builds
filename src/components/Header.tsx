import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg px-4 sm:px-6 lg:px-20 py-3">
      <div className="flex flex-nowrap items-center justify-between w-full">
        
        {/* Logo Block */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* First Logo */}
          <img
            src="/logo.png"
            alt="VLIV Logo"
            className="h-5 sm:h-6 md:h-7 w-auto flex-shrink-0"
          />

          {/* Vertical Separator */}
          <div className="w-px h-5 sm:h-6 bg-gray-300" />

          {/* Second Logo */}
          <img
            src="/Black Full Logo.png"
            alt="VLIV Full Logo"
            className="h-5 sm:h-6 md:h-7 w-auto flex-shrink-0"
          />
        </div>

        {/* CTA Button */}
        <a
          href="https://tally.so/r/mRQp7j"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 ml-4"
        >
          <Button
            className={`
              bg-gradient-to-br from-purple-600 to-purple-800 
              text-white font-semibold 
              text-xs sm:text-sm md:text-base 
              px-3 sm:px-4 md:px-6 
              py-1 sm:py-1.5 md:py-2 
              rounded-full 
              shadow-sm transition duration-200 
              hover:shadow-md active:shadow-inner
              whitespace-nowrap
            `}
          >
            Register Now
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
