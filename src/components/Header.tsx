import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg px-4 sm:px-6 lg:px-20 py-3 flex justify-between items-center">
      
      {/* Logo Block */}
      <div className="flex items-center space-x-4">
        {/* First Logo */}
        <img
          src="/logo.png"
          alt="VLIV Logo"
          className="h-6 sm:h-7 md:h-8 w-auto"
        />

        {/* Vertical Separator */}
        <div className="w-px h-6 bg-gray-300" />

        {/* Second Logo */}
        <img
          src="/Black Full Logo.png"
          alt="VLIV Full Logo"
          className="h-6 sm:h-7 md:h-8 w-auto"
        />
      </div>

      {/* CTA Button */}
      <a
  href="https://tally.so/r/mRQp7j"
  target="_blank"
  rel="noopener noreferrer"
>
      <Button
        className={`
          bg-gradient-to-br from-purple-600 to-purple-800 
          text-white font-semibold 
          text-sm sm:text-base 
          px-5 sm:px-6 md:px-8 
          py-1.5 sm:py-2 
          rounded-full 
          shadow-sm transition duration-200 
          hover:shadow-md active:shadow-inner
        `}
      >
        Register Now
      </Button>
      </a>
    </header>
  );
};

export default Header;
