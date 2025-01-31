import React from "react"
import "../styles/ScrollingText.css"
import line1 from "/assets/line2.svg"

export const ScrollingText = ({ className, no, direction = "up" }) => {
  return (
    <div className={`w-[1024px] h-[35px] overflow-hidden ${className}`}>
      <p
        className={`
          text-[29px] 
          ${no ? "text-[#fafafa]" : "text-[#161616]"} 
          font-avantgarde leading-[35px] whitespace-nowrap 
          animate-scroll-left
        `}
      
      >
        {Array(10).fill("TEDx CET - ").join("")}
      </p>
    </div>
  )}
export const About = () => {
  const stats = [
    { number: "5", text: "Events" },
    { number: "50", text: "Speakers" },
    { number: "100", text: "Active Members" },
    { number: "50", text: "Community Members" },
  ]

  return (
    <div className="flex flex-col border-[#161616] border-2 lg:flex-row items-center justify-center w-full h-auto lg:h-full">
      <div className="w-full lg:w-1/2 bg-[#161616] flex flex-col gap-7 overflow-hidden items-start p-8 lg:p-28">
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 text-5xl lg:text-8xl text-[#fafafa] font-vanguard leading-tight lg:leading-[148px] font-extrabold">
            ABOUT
          </h2>
          <p className="max-w-full lg:max-w-300 text-xl lg:text-2xl text-[#fafafa] font-avantgarde leading-[1.8rem] lg:leading-[2.2rem] tracking-wide break-words">
            TEDxCUSAT is a dynamic platform where the brightest minds of Cochin University of Science And Technology
            come together to share ideas that have the power to inspire meaningful change. This year's event, centered
            around the theme "Kaleidoscope: Alchemy of Voices," offers a blend of live talks and curated videos designed
            to spark thought-provoking conversations. TEDxCUSAT goes beyond the traditional format of talks; it's about
            creating a space where ideas can be transformed into actions that lead to real-world impact. Our goal is to
            make these ideas accessible and to inspire our community to turn them into catalysts for positive change.
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <ScrollingText className="transform -rotate-90" no={true} direction="up" />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full lg:w-1/2 h-auto lg:h-full p-8">
        <div className="flex flex-col items-center justify-center gap-3">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="flex items-end">
                  <div className="text-5xl md:text-[110px] font-vanguard font-extrabold leading-[148px] bg-gradient-to-b from-[#E31C25] to-[#BB000E] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-[40px] md:text-[80px] text-[#161616] mb-14 md:mb-8 font-extrabold font-Helvetica Compressed leading-none pl-2">
                    +
                  </div>
                </div>
                <div className="text-[60px] text-[#161616] font-vanguard font-medium text-center whitespace-nowrap mt-[-30px]">
                  {stat.text}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="my-2">
                  <img className="w-[292px] h-[2px]" alt="Line" src={line1 || "/placeholder.svg"} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
