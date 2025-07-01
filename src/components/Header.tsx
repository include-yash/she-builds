
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold text-white">VLIV</div>
      </div>
      <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-full">
        Register Now
      </Button>
    </header>
  );
};

export default Header;
