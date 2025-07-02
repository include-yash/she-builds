import { useState, useEffect } from 'react';
import CountdownBlock from './ui/CountdownBlock';

const TARGET_DATE = new Date('2025-08-01T00:00:00');

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = TARGET_DATE.getTime() - new Date().getTime();
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((total / (1000 * 60)) % 60), 0);
    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section
      id="hero"
      className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 md:gap-0">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-8 md:ml-36">

          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img
              src="/presentslogo.png"
              alt="Logo"
              className="h-16 w-auto md:h-20"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              <span className="text-white">She</span>{' '}
              <span className="text-black">Builds.</span>
            </h1>
            <p className="text-lg md:text-2xl font-extrabold mt-2">
              <span className="text-white">All India</span>{' '}
              <span className="text-black">Women only Hackathon</span>
            </p>
          </div>

          {/* Register Button */}
          <div className="mt-2">
            <button className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 md:px-8 rounded-full font-semibold text-base md:text-lg shadow-lg transition duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>

          {/* Company Logos */}
          <div className="w-full flex flex-col sm:flex-col md:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4 md:mt-6 px-0">
          <img src="/Black Full Logo.png" alt="Company 1" className="h-8 object-contain" />
          <img src="/ht.png" alt="Company 2" className="h-8 object-contain" />
          <img src="/tms.png" alt="Company 3" className="h-8 object-contain" />
        </div>

          {/* Countdown */}
          <div className="mt-12 md:-ml-8 w-full">
          <CountdownBlock />
        </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/hero11.png"
            alt="She Builds"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
