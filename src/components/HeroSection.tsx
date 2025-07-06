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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6 md:space-y-10">

          {/* Logo */}
          <img
            src="/presentslogo.png"
            alt="Logo"
            className="h-16 w-auto md:h-24"
          />

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
              <span className="text-white">She</span>{' '}
              <span className="text-black">Builds.</span>
            </h1>
            <p className="text-lg md:text-2xl font-extrabold mt-2">
              <span className="text-white">All India</span>{' '}
              <span className="text-black">Women only Hackathon</span>
            </p>
          </div>

          {/* Register Button */}
                  <a
          href="https://tally.so/r/mRQp7j"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 md:px-10 py-3 rounded-full font-semibold text-base md:text-lg shadow-lg transition duration-300 transform hover:scale-105">
            Register Now
          </button>
        </a>

          {/* Countdown */}
          <div className="mt-6 w-full flex justify-center">
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
