"use client"

import { useState } from "react"
import Lottie from "lottie-react"
import dateLottie from "/public/assets/Date Lottie.json"
import image535 from "/public/assets/image 535.png"
import image536 from "/public/assets/image 536.png"
import butterflyEffect from "/public/assets/Butterfly-Effect.svg"
import { ArrowUpRight, Menu } from "lucide-react"

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = ["About", "Speakers", "Team", "Contact"]

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
      {/* Navigation */}
      <nav className="flex justify-between items-center gap-4 mb-6 md:mb-8">
        <div className="flex items-center">
          <span className="text-[#E31C25] text-2xl sm:text-3xl md:text-4xl lg:text-[47px] font-vanguard font-bold">
            TED
          </span>
          <span className="text-[#161616] text-2xl sm:text-3xl md:text-4xl lg:text-[47px] font-vanguard font-bold">
            x CET
          </span>
        </div>
        <div className="hidden md:flex gap-2 lg:gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              className="px-3 sm:px-4 md:px-6 py-2 border border-[#161616] rounded-[20px] text-[#161616] text-sm lg:text-3xl  font-avantgarde hover:bg-[#BB000E] hover:text-[#FAFAFA]"
            >
              {item}
            </button>
          ))}
          <button className="px-4 sm:px-4 md:px-6 py-2 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-sm lg:text-3xl  font-avantgarde hover:bg-[#FAFAFA] hover:text-[#BB000E]">
            Book Tickets
          </button>
        </div>
        <button
          className="md:hidden p-2 border border-[#161616] rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-end">
            <button className="p-2 border border-[#161616] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="px-3 py-2 border border-[#161616] rounded-[20px] text-[#161616] text-xl font-avantgarde hover:bg-[#BB000E] hover:text-[#FAFAFA]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            <button
              className="px-3 py-2 bg-[#BB000E] border border-[#161616] rounded-[20px] text-[#FAFAFA] text-xl font-avantgarde hover:bg-[#FAFAFA] hover:text-[#BB000E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Tickets
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="mb-6 md:mb-8">
        <div className="bg-[#161616] rounded-[20px] px-4 sm:px-6 md:px-8 relative">
          <div className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[288px]">
            <img
              src={butterflyEffect || "/placeholder.svg"}
              alt="Butterfly Effect"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Left Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] p-4 sm:p-6 md:p-8 lg:p-12" />

        {/* Center Panel */}
        <div className="border-2 border-[#161616] rounded-[20px] overflow-hidden relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <img
            className="w-full h-full object-contain mix-blend-darken"
            src={image535 || "/placeholder.svg"}
            alt="Design element 1"
          />
          <img
            className="w-full h-full object-contain opacity-50 mix-blend-multiply absolute inset-0"
            src={image536 || "/placeholder.svg"}
            alt="Design element 2"
          />
        </div>

        {/* Right Panel */}
        <div className="rounded-[20px] flex flex-col gap-4 md:gap-6  md:col-span-2 lg:col-span-1">
          {/* Book Tickets Button */}
          <button
            className={`w-full text-4xl min-w-[200px] sm:min-w-[160px] whitespace-nowrap 
sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-avantgarde p-4  rounded-[20px] flex items-center justify-center border-[3px]
            ${
              isHovered
                ? "bg-white text-black border-[#BB000E] shadow-[inset_0px_0px_14px_rgba(0,0,0,0.6)]"
                : "bg-[#BB000E] text-[#FAFAFA] border-[#161616] shadow-[inset_0px_0px_14px_rgba(227,28,37,0.60)]"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            BOOK TICKETS
            <ArrowUpRight
              className={`w-14 flex-shrink-0 h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pl-2 transition-all duration-300 ease-in-out ${
                isHovered ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>

          {/* Date Display */}
          <div className="bg-[#161616] rounded-[20px] h-[200px] sm:h-[250px] md:h-[297px] flex justify-center items-center">
            <Lottie animationData={dateLottie} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

