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
import React from "react";

import line1 from "/assets/line2.svg";
import line2 from "/assets/line2.svg";
import line3 from "/assets/line2.svg";
import PropTypes from "prop-types";

import "../styles/ScrollingText.css";

export const ScrollingText = ({ className, no, direction = "up" }) => {
  return (
    <div
      className={`relative w-[1024px] h-[35px] overflow-hidden ${className}`}
    >
      <p
        className={`absolute text-[29px] ${
          no ? "text-[#fafafa]" : "text-[#161616]"
        } font-avantgarde leading-[35px] whitespace-nowrap  ${
          direction === "up" ? "animate-scroll-left" : "animate-scroll-left"
        }`}
      >
        TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx
        CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET - TEDx CET -
        TEDx CET - TEDx CET - TEDx CET -
      </p>
    </div>
  );
};

ScrollingText.propTypes = {
  className: PropTypes.string,
  no: PropTypes.bool,
  direction: PropTypes.oneOf(["up", "down"]),
};

export const About = () => {
  return (
    <div className="relative w-[1440px] h-[1024px]">
      <div className="absolute left-0 top-[-7px] w-[765px] h-[1031px]">
        <div className="relative h-[1031px] overflow-hidden">
          <div className="absolute left-0 top-[7px] w-[720px] h-[1024px] bg-[#161616]" />
          <div className="absolute left-[102px] top-[25px] text-[123px] text-[#fafafa] font-vanguard leading-[148px] font-extrabold font-weight-700">
            ABOUT
          </div>
          <ScrollingText
            className="absolute left-[179px] top-[494px] transform -rotate-90"
            property1="frame-2"
            no={true}
            direction="up"
          />

          <p className="absolute left-[102px] top-[223px] w-[510px] text-[29px] text-[#fafafa] font-avantgarde leading-[35px] tracking-[0.87px]">
            TEDxCUSAT is a dynamic platform where the brightest minds of Cochin
            University of Science And Technology come together to share ideas
            that have the power to inspire meaningful change. This year's event,
            centered around the theme "Kaleidoscope: Alchemy of Voices," offers
            a blend of live talks and curated videos designed to spark
            thought-provoking conversations. TEDxCUSAT goes beyond the
            traditional format of talks; it's about creating a space where ideas
            can be transformed into actions that lead to real-world impact. Our
            goal is to make these ideas accessible and to inspire our community
            to turn them into catalysts for positive change.
          </p>
          <ScrollingText
            className="absolute left-[230px] top-[468px] transform rotate-90"
            property1="frame-2"
            no={false}
            direction="down"
          />
        </div>
      </div>

      <div className="absolute left-[829px] top-[55px] w-[449px] h-[914px]">
        <div className="absolute left-[174px] top-[-38px] w-[142px] h-[207px]">
          <div className="absolute left-[23px] top-0 w-[111px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold  leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              5
            </div>
            <div className="absolute left-[59px] top-[33px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[116px] text-[76px] text-[#161616] font-vanguard font-medium text-center whitespace-nowrap">
            Events
          </div>
        </div>

        <div className="absolute left-[142px] top-[210px] w-[198px] h-[207px]">
          <div className="absolute left-[29px] top-0 w-[163px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              50
            </div>
            <div className="absolute left-[111px] top-[33px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[116px] text-[76px] text-[#161616] font-vanguard font-medium  text-center whitespace-nowrap">
            Speakers
          </div>
        </div>

        <div className="absolute left-[81px] top-[458px] w-[346px] h-[207px]">
          <div className="absolute left-[70px] top-0 w-[202px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl text-center font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              100
            </div>
            <div className="absolute left-[150px] top-[32px] text-[80px] text-[#161616] font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[132px] text-[76px] text-[#161616] font-vanguard font-medium  leading-[75px] text-center whitespace-nowrap">
            Active Members
          </div>
        </div>

        <div className="absolute left-[29px] top-[706px] w-[449px] h-[207px]">
          <div className="absolute left-[141px] top-0 w-[164px] h-[148px]">
            <div className="absolute left-0 top-0 text-9xl font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
              50
            </div>
            <div className="absolute left-[112px] top-[33px] text-[80px] text-[#161616]  font-extrabold font-Helvetica Compressed text-center">
              +
            </div>
          </div>
          <div className="absolute left-0 top-[132px] text-7xl font-medium text-[#161616] font-vanguard  leading-[75px] text-center whitespace-nowrap">
            Community Members
          </div>
        </div>

        <img
          className="absolute left-[108px] top-[202px] w-[292px] h-[2px]"
          alt="Line"
          src={line1 || "/placeholder.svg"}
        />
        <img
          className="absolute left-[108px] top-[450px] w-[292px] h-[2px]"
          alt="Line"
          src={line2 || "/placeholder.svg"}
        />
        <img
          className="absolute left-[108px] top-[704px] w-[292px] h-[2px]"
          alt="Line"
          src={line3 || "/placeholder.svg"}
        />
      </div>
    </div>
  );
};
