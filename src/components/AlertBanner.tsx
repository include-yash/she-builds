import React, { useState } from 'react';
import { X } from 'lucide-react';

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-400 text-blue-900 px-4 py-3 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="font-semibold text-sm sm:text-base">
            Problem Statement announcement and Idea submissions starts from 15th July
          </p>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-yellow-500 rounded-full transition-colors duration-200"
          aria-label="Close alert"
        >
          <X className="w-4 h-4 text-blue-900" />
        </button>
      </div>
    </div>
  );
};

export default AlertBanner; 