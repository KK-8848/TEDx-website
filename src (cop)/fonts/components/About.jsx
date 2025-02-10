import React from "react";

import line1 from "/assets/line2.svg";
import line2 from "/assets/line2.svg";
import line3 from "/assets/line2.svg";
import PropTypes from "prop-types";

import "../styles/ScrollingText.css";

export const ScrollingText = ({ className, no, direction = "up" }) => {
  return (
    <div
      className={` w-full h-full ${className}`}
    >
      <p
        className={` text-[29px] ${
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
    <div className="flex flex-col border-[#161616] border-2 lg:flex-row items-center justify-center w-full  lg:h-screen">
    <div className="w-full lg:w-1/2 bg-[#161616] flex flex-col gap-7  items-start p-8 lg:p-28 h-full">
    
        AVOUT
      
        <ScrollingText className="transform -rotate-90" no={true} direction="up" />
    
      </div>
     

    <div className="flex flex-col justify-start items-center w-full lg:w-1/2 h-auto lg:h-full p-8 bg-[#FAFAFA]">
      
      </div>
    </div>
  
  );
};
