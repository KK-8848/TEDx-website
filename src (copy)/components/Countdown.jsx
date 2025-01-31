import React, { useState, useEffect } from 'react';

// Configure event date - Using Date object directly for better timezone handling
const EVENT_DATE = new Date(2025, 2, 2, 9, 0, 0); // March 2nd, 2025, 9:00 AM

const TimerUnit = ({ value, label }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-microgramma font-bold text-[#161616] leading-none sm:leading-normal">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl font-vanguard font-normal text-[#161616] leading-tight sm:leading-normal tracking-wider">
      {label}
    </div>
  </div>
);

const Separator = () => (
  <div className="px-1 sm:px-2 md:px-4 flex flex-col justify-center items-center">
    <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[123px] font-['Uncut_Sans_VF'] font-bold text-[#E31C25] leading-none sm:leading-normal">
      :
    </div>
    <div className="text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-[29px] font-avantgarde font-medium text-[#E31C25] leading-tight sm:leading-normal">
      &nbsp;
    </div>
  </div>
);

const HurryUpAnimation = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[123px] flex justify-center">
      <img
        src="../public/assets/Hurry Up 1.svg"
        alt="Hurry Up"
        className={`absolute h-full object-contain transition-all duration-200 ease-in-out ${
          isFirstImage ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img
        src="../public/assets/Hurry Up 2.svg"
        alt="Hurry Up"
        className={`absolute h-full object-contain transition-all duration-200 ease-in-out ${
          !isFirstImage ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = EVENT_DATE - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      {/* Countdown Timer */}
      <div className="w-full max-w-[95%] mx-auto pt-2 sm:pt-4 md:pt-6 lg:pt-[29px] px-2 py-2 sm:px-4 md:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8 
                    bg-[rgba(250,250,250,0.50)] rounded-lg sm:rounded-[20px] 
                    border-2 sm:border-3 md:border-4 lg:border-[5px] border-[#E31C25] 
                    backdrop-blur-[6.4px] flex justify-center items-center gap-1 sm:gap-2">
        <TimerUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimerUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimerUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimerUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      
      {/* Hurry Up Text Row */}
      <div className="flex justify-center items-center -mt-2 sm:-mt-3 md:-mt-4 pt-3 sm:pt-4 md:pt-5">
        <HurryUpAnimation />
      </div>
    </div>
  );
};

export default Countdown;

