import React, { useState, useEffect } from 'react';
import image1 from "/public/assets/person1final.webp";
import image2 from "/public/assets/person2final.webp";
import image3 from "/public/assets/person3final.webp";
import image4 from "/public/assets/person4final.webp";
import exe1 from "/public/assets/01.webp";
import exe2 from "/public/assets/02.webp";
import exe3 from "/public/assets/03.webp";
import exe4 from "/public/assets/04.webp";
import exe5 from "/public/assets/05.webp";
import exe6 from "/public/assets/06.webp";
import exe7 from "/public/assets/07.webp";
import exe8 from "/public/assets/08.webp";
import exe9 from "/public/assets/09.webp";
import exe11 from "/public/assets/11.webp";
import exe12 from "/public/assets/12.webp";
import exe13 from "/public/assets/13.webp";
import exe14 from "/public/assets/14.webp";
import exe10 from "/public/assets/10.webp";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const WebTeam = () => {
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
    const [fadeState, setFadeState] = useState('hidden'); // hidden, fadeIn, visible, fadeOut


    const handleExe9Click = () => {
        if (!isAnimationPlaying) {
            setIsAnimationPlaying(true);
            setFadeState('fadeIn');
        }
    };

    useEffect(() => {
        let fadeInTimer, visibleTimer, fadeOutTimer;

        if (fadeState === 'fadeIn') {
            // After fade in completes, set to visible
            fadeInTimer = setTimeout(() => {
                setFadeState('visible');
            }, 500); // 500ms for fade in duration

            // After being visible for a while, start fade out
            visibleTimer = setTimeout(() => {
                setFadeState('fadeOut');
            }, 3000); // 3000ms = visible duration (adjust as needed)

            // After fade out completes, hide and reset
            fadeOutTimer = setTimeout(() => {
                setFadeState('hidden');
                setIsAnimationPlaying(false);
            }, 3500); // 3000ms + 500ms (visible duration + fade out duration)
        }

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(visibleTimer);
            clearTimeout(fadeOutTimer);
        };
    }, [fadeState]);

    // Return appropriate classes based on fade state
    const getFadeClasses = () => {
        switch (fadeState) {
            case 'fadeIn':
                return 'opacity-0 animate-fadeIn';
            case 'visible':
                return 'opacity-100';
            case 'fadeOut':
                return 'opacity-100 animate-fadeOut';
            case 'hidden':
            default:
                return 'opacity-0';
        }
    };

    return (
        <div className='bg-[#161616] w-screen text-white flex flex-col justify-center items-center relative'>

            <div className='flex flex-row justify-center gap-3 pt-4 w-screen md:justify-start md:pl-7 pb-5 ' >
                <h1 className='text-5xl font-vanguard text-white font-semibold'>WEBSITE</h1>
                <h1 className='text-5xl font-vanguard text-red-600 font-semibold'>TEAM</h1>
            </div>
            <div className='w-screen h-[2px] bg-white mb-4'></div>
            <div className='w-screen md:flex md:flex-row flex-col justify-center md:gap-1 items-center'>
                <div className="md:flex md:flex-row flex-col grid grid-cols-2  md:grid-cols-none md:gap-1">
                    <img
                        className='md:h-[723px] md:w-[350px] h-[361px] w-[175px]  mx-auto'
                        src={image1}
                        alt="Team member 1"
                    />
                    <img
                        src={image2}
                        className='md:h-[723px] md:w-[350px] h-[361px] w-[175px] mx-auto md:mt-40'
                        alt="Team member 2"
                    />
                    <img
                        src={image3}
                        className='md:h-[723px] md:w-[350px] h-[361px] w-[175px]  mx-auto'
                        alt="Team member 3"
                    />
                    <img
                        src={image4}
                        className='md:h-[723px] md:w-[350px] h-[361px] w-[175px]  mx-auto md:mt-40'
                        alt="Team member 4"
                    />
                </div>
            </div>

            {/* Add EXECOM section */}
            <div className='flex flex-row justify-center md:justify-start items-center gap-3 pt-4 w-screen md:pl-9  pb-3'>
                <h1 className='text-[52px]  font-vanguard text-white font-semibold'>EXECUTIVE</h1>
                <h1 className='text-[52px]   font-vanguard text-red-600 font-semibold'>COMMITTEE</h1>
            </div>
            <div className='w-screen h-[2px] bg-white'></div>

            {/* Fixed infinite scroll container */}
            <div className="relative w-screen overflow-hidden py-8">
                {/* Desktop horizontal scroll */}
                <div className="hidden md:flex animate-scroll w-max">
                    {/* First set of images */}
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <img src={exe1} alt="Execom 1" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe2} alt="Execom 2" className="h-[330px] w-[523px] " />
                        </div>
                        <div className="flex flex-col relative">
                            <img
                                src={exe9}
                                alt="Execom 9"
                                className="h-[330px] w-[464px] cursor-pointer"
                                onClick={handleExe9Click}
                            />
                            {/* Desktop animation position - relative to the container */}
                            {isAnimationPlaying && (
                                <div className={`absolute top-6 -right-14 w-24 h-24 transition-opacity duration-500 ${getFadeClasses()}`}>
                                    <DotLottieReact
                                        src="/assets/butterfly.lottie"
                                        autoplay
                                        loop={false}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe3} alt="Execom 3" className="h-[330px] w-[572px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe4} alt="Execom 4" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe5} alt="Execom 5" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe6} alt="Execom 6" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe7} alt="Execom 7" className="h-[330px] w-[587px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe8} alt="Execom 8" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe10} alt="Execom 10" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col  ">
                            <img src={exe11} alt="Execom 11" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe12} alt="Execom 12" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe13} alt="Execom 13" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe14} alt="Execom 14" className="h-[330px] w-[577px] " />
                        </div>
                    </div>
                    {/* Duplicate set for seamless looping */}
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <img src={exe1} alt="Execom 1" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe2} alt="Execom 2" className="h-[330px] w-[523px] " />
                        </div>
                        <div className="flex flex-col relative">
                            <img
                                src={exe9}
                                alt="Execom 9"
                                className="h-[330px] w-[464px] cursor-pointer"
                                onClick={handleExe9Click}
                            />
                            {isAnimationPlaying && (
                                <div className={`absolute top-6 -right-14 w-24 h-24 transition-opacity duration-500 ${getFadeClasses()}`}>
                                    <DotLottieReact
                                        src="/assets/butterfly.lottie"
                                        autoplay
                                        loop={false}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe3} alt="Execom 3" className="h-[330px] w-[572px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe4} alt="Execom 4" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe5} alt="Execom 5" className="h-[330px] w-[563px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe6} alt="Execom 6" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe7} alt="Execom 7" className="h-[330px] w-[587px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe8} alt="Execom 8" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe10} alt="Execom 10" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe11} alt="Execom 11" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col pt-56">
                            <img src={exe12} alt="Execom 12" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe13} alt="Execom 13" className="h-[330px] w-[461px] " />
                        </div>
                        <div className="flex flex-col ">
                            <img src={exe14} alt="Execom 14" className="h-[330px] w-[577px] " />
                        </div>
                    </div>
                </div>

                {/* Mobile vertical scroll */}
                <div className="md:hidden relative w-full overflow-hidden h-[80vh]">
                    <div className="flex flex-col animate-scroll-vertical w-full">
                        {/* First set of images */}
                        <div className="flex flex-col gap-8 px-4">
                            <img src={exe1} alt="Execom 1" className="w-full h-auto" />
                            <img src={exe2} alt="Execom 2" className="w-full h-auto" />
                            <div className="relative">
                                <img
                                    src={exe9}
                                    alt="Execom 9"
                                    className="w-full h-auto cursor-pointer"
                                    onClick={handleExe9Click}
                                />
                                {/* Mobile animation position - relative to the image */}
                                {isAnimationPlaying && (
                                    <div className={`absolute top-0 right-0 w-24 h-24 transition-opacity duration-500 ${getFadeClasses()}`}>
                                        <DotLottieReact
                                            src="/assets/butterfly.lottie"
                                            autoplay
                                            loop={false}
                                        />
                                    </div>
                                )}
                            </div>
                            <img src={exe3} alt="Execom 3" className="w-full h-auto" />
                            <img src={exe4} alt="Execom 4" className="w-full h-auto" />
                            <img src={exe5} alt="Execom 5" className="w-full h-auto" />
                            <img src={exe6} alt="Execom 6" className="w-full h-auto" />
                            <img src={exe7} alt="Execom 7" className="w-full h-auto" />
                            <img src={exe8} alt="Execom 8" className="w-full h-auto" />
                            <img src={exe10} alt="Execom 10" className="w-full h-auto" />
                            <img src={exe11} alt="Execom 11" className="w-full h-auto" />
                            <img src={exe12} alt="Execom 12" className="w-full h-auto" />
                            <img src={exe13} alt="Execom 13" className="w-full h-auto" />
                            <img src={exe14} alt="Execom 14" className="w-full h-auto" />
                        </div>
                        {/* Duplicate set for seamless looping */}
                        <div className="flex flex-col gap-8 px-4">
                            <img src={exe1} alt="Execom 1" className="w-full h-auto" />
                            <img src={exe2} alt="Execom 2" className="w-full h-auto" />
                            <div className="relative">
                                <img
                                    src={exe9}
                                    alt="Execom 9"
                                    className="w-full h-auto cursor-pointer"
                                    onClick={handleExe9Click}
                                />
                                {isAnimationPlaying && (
                                    <div className={`absolute top-0 right-0 w-24 h-24 transition-opacity duration-500 ${getFadeClasses()}`}>
                                        <DotLottieReact
                                            src="/assets/butterfly.lottie"
                                            autoplay
                                            loop={false}
                                        />
                                    </div>
                                )}
                            </div>
                            <img src={exe3} alt="Execom 3" className="w-full h-auto" />
                            <img src={exe4} alt="Execom 4" className="w-full h-auto" />
                            <img src={exe5} alt="Execom 5" className="w-full h-auto" />
                            <img src={exe6} alt="Execom 6" className="w-full h-auto" />
                            <img src={exe7} alt="Execom 7" className="w-full h-auto" />
                            <img src={exe8} alt="Execom 8" className="w-full h-auto" />
                            <img src={exe10} alt="Execom 10" className="w-full h-auto" />
                            <img src={exe11} alt="Execom 11" className="w-full h-auto" />
                            <img src={exe12} alt="Execom 12" className="w-full h-auto" />
                            <img src={exe13} alt="Execom 13" className="w-full h-auto" />
                            <img src={exe14} alt="Execom 14" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebTeam;