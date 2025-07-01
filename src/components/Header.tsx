import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg px-7 py-2 flex justify-between items-center">
      {/* Logo */}
<div className="flex items-center space-x-2">
  {/* Replace 'logo.png' with your actual image file path */}
  <img
    src="/logo.png"
    alt="VLIV Logo"
    className="h-5 w-auto px-10"
  />
</div>


      {/* Call‑to‑action */}
      <Button
        className={`
          bg-gradient-to-br from-purple-600 to-purple-800 
          text-white 
          font-semibold 
          px-6 
          py-2 
          rounded-full 
          shadow-sm 
          transition-shadow 
          duration-200 
          hover:shadow-md 
          active:shadow-inner
        `}
      >
        Register Now
      </Button>
    </header>
  );
};

export default Header;
