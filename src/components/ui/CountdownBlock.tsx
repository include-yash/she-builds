import React, { useEffect, useState } from 'react';

const CountdownBlock = () => {
  // Set targetDate to 29 days from now
  const getTargetDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 29);
    return now;
  };

  const targetDate = getTargetDate();

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto max-w-4xl py-2">
      <div className="rounded-xl border border-black bg-stone-50 shadow-md dark:border-white dark:bg-primary">

        {/* Date-Time-Venue */}
        <div className="grid grid-cols-3 text-center sm:text-left">
          <div className="border border-black px-3 py-3 dark:border-white rounded-tl-xl">
            <p className="mb-1 text-[10px] sm:text-xs uppercase">date</p>
            <p className="text-xs sm:text-sm font-bold">1st & 2nd Aug 2025</p>
          </div>
          <div className="border border-black px-3 py-3 dark:border-white">
            <p className="mb-1 text-[10px] sm:text-xs uppercase">time</p>
            <p className="text-xs sm:text-sm font-bold">10 AM</p>
          </div>
          <div className="border border-black px-3 py-3 dark:border-white rounded-tr-xl">
            <p className="mb-1 text-[10px] sm:text-xs uppercase">venue</p>
            <p className="text-xs sm:text-sm font-bold">Greater Noida</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 text-center">
          <div className="border border-black p-3 py-4 dark:border-white rounded-bl-xl">
            <p className="mb-1 text-2xl font-bold">{timeLeft.days}</p>
            <p className="text-xs font-semibold uppercase">days</p>
          </div>
          <div className="border border-black p-3 py-4 dark:border-white">
            <p className="mb-1 text-2xl font-bold">{timeLeft.hours}</p>
            <p className="text-xs font-semibold uppercase">hrs</p>
          </div>
          <div className="border border-black p-3 py-4 dark:border-white">
            <p className="mb-1 text-2xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xs font-semibold uppercase">mins</p>
          </div>
          <div className="border border-black p-3 py-4 dark:border-white rounded-br-xl">
            <p className="mb-1 text-2xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xs font-semibold uppercase">secs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBlock;
