import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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

  const timerBlocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section
      id="hero"
      className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 md:gap-0">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 md:space-y-10 md:ml-36">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto md:ml-36">
            <img
              src="/presentslogo.png"
              alt="Logo"
              className="h-10 w-auto md:h-12"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-8xl font-extrabold leading-tight">
              <span className="text-white">She</span>{' '}
              <span className="text-black">Builds.</span>
            </h1>
            <p className="text-lg md:text-2xl font-extrabold mt-2 ml-0 md:ml-2">
              <span className="text-white">All India</span>{' '}
              <span className="text-black">Women only Hackathon</span>
            </p>
          </div>

          {/* Register Button */}
          <div className="ml-0 md:ml-24">
            <button className="bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-3 md:px-8 rounded-full font-semibold text-base md:text-lg shadow-lg transition duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-10">
            {timerBlocks.map((block, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl text-black w-[80px] h-[100px] md:w-[90px] md:h-[110px] flex flex-col items-center justify-center shadow-xl hover:scale-105 transition duration-300"
              >
                {/* Dots */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>

                <div className="text-3xl md:text-4xl font-extrabold">{block.value}</div>
                <div className="text-purple-600 font-semibold text-sm">{block.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/herosec.png"
            alt="She Builds"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
