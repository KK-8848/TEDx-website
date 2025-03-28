import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import image from "/public/assets/speaker-temp.svg"
import image1 from "/public/assets/drishya-duggal2.webp"
import image2 from "/public/assets/speaker-2.png"
import image3 from "/public/assets/speaker_3.webp"
import image4 from "/public/assets/speaker-4.png"
import image5 from "/public/assets/speaker-5.png"
import image6 from "/public/assets/speaker-6.webp"
import image7 from "/public/assets/kok.png"



const temporaryTestimonials = [{
    id: 2,
    name: "SUKIL RAM",
    image: image2,
    occupation: "ENTREPRENEUR",
    testimonial: "He is an entrepreneur and the founder of Poomaram Ram's Kitchen. But what makes him special? Quitting the comforts of your daily job and following your passion! After leaving the confinement of his office cubicle, he immediately stared following what he loves best - the culinary delight of food. With support from fellow techies, he started his own restaurant - Poomaram Ram's Kitchen, which has now become a celebrated authentic Kerela restaurant in Trivandrum. With a never ending enthusiasm and energy, Suki Ram shows us how sometimes, all it takes is a small risk and a big heart to make your dreams a reality. His journey reflects the power of following one's passion and turning it into a fulfilling career."
},{
    id: 3,
    name: "AMINA JUBAIR",
    image: image3,
    occupation: "RJ CET",
    testimonial: "Amina Jubair is an eloquent speaker with a fresh perspective, dedicated to shaping conversations that inspire change. As a student representative from College of Engineering Trivandrum and a college RJ, she curates and delivers ideas that challenge conventional thinking, bringing innovation and insight to the stage. Her background as a third-year Civil Engineering student enriches her ability to break down complex topics into engaging narratives, making technical and societal discussions both accessible and thought-provoking. With a natural command of the stage and a passion for storytelling, she captivates audiences, sparking meaningful dialogue and new ways of thinking"
},{
    id: 4,
    name: "RJ NEENA",
    image: image4,
    occupation: "RJ RADIO MANGO",
    testimonial: "It was the early 2000s and there was big boom happening in Kochi. Every morning, millions rise up to an infectious voice, motivating them to enjoy this beautiful day. And that voice belonged to none other than RJ Neena. She is one the first RJs in Kerala, having worked at Club FM and Radio Mango. RJ Neena also launched the first-ever transgender radio jockey through her radio show. She was invited to talk about the same at the Toastmaster's Platform at UST global, Infopark, Kochi when Infopark hired a Transgender Employee creating history. On a daily basis, she brings up social issues and caters it in a lighter sarcastic way to society. Her life is a motivation to all, proving that nothing can stand in the way of your happiness"
},
{
    id: 5,
    name: "ABHYA HIRANMAYI",
    image: image6,
    occupation: "PLAYBACK SINGER",
    testimonial: "An icon of the Kerala music industry with a voice that has captivated audiences from around the world, which first found its roots right here in Trivandrum, Abhaya Hiranmayi is back home to take the center stage. Having been a part of renowned hits like Two Countries and  Malaikottai Vaaliban, Her distinct notions are certain to be a contemplative material for all gathered at TEDxCET."
},
{
    id: 6,
    name: "PRATHAPMOHAN NAIR",
    image: image5,
    occupation: "INTERNATIONAL CONSULTANT, UNCCD",
    testimonial: "An International Consultant to The United Nations in UNCCD, C. Prathapmohan Nair commands attention with every word.Being an alumni of CET, he is back again to share insights and offer an innovative perspectiveto his audience.As a Certified PPP Specialist and Accredited Green Building Professional, he has more than25 years of experience as in various corporates, IT, multi lateral development institutions andconsulting firms including ICICI, TCS, Asian Development Bank, World Bank,Price Waterhouse Coopers (PwC). His vast proficiency across multiple disciplines enables himto aa distinguished keynote speaker, sought after resource person and a leading corporate trainer."
},
{
    id: 7,
    name: "ASWANTH KOK",
    image: image7,
    occupation: "MOVIE REVIEWER",  
    testimonial: "An Indian YouTuber renowned for his engaging reviews of Malayalam, Tamil, Hindi, and Telugu films, as well as movie trailers. In addition to film critiques, he shares his thoughts on the film industry and covers international football and World Cup updates. His charismatic personality and captivating approach to media discussions have earned him a loyal audience, with over 400,000 subscribers on his YouTube channel. Now, CETian's have an exciting opportunity to hear from him in person, as he is set to visit the campus for TEDxCET!"
}];

const SpeakersList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState('up');

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                moveSlider(direction);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, direction, currentIndex]);

    const moveSlider = (newDirection) => {
        setDirection(newDirection);
        if (newDirection === 'up') {
            setCurrentIndex((prev) =>
                prev === temporaryTestimonials.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentIndex((prev) =>
                prev === 0 ? temporaryTestimonials.length - 1 : prev - 1
            );
        }
    };

    const getSlidePosition = (index) => {
        const position = (index - currentIndex + temporaryTestimonials.length) % temporaryTestimonials.length;
        const baseClasses = 'absolute w-full flex max-w-5xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out border-[2px] border-red-500 shadow-[0_0_18px_rgba(239,68,68,0.6)]';

        if (position === 0) {
            return `${baseClasses} translate-y-0 scale-100 opacity-100 z-20`;
        }
        if (position === 1) {
            return `${baseClasses} translate-y-32 md:translate-y-48 scale-95 opacity-60 z-10`;
        }
        if (position === temporaryTestimonials.length - 1) {
            return `${baseClasses} -translate-y-32 md:-translate-y-48 scale-95 opacity-60 z-10`;
        }
        return `${baseClasses} ${position < temporaryTestimonials.length / 2 ? 'translate-y-48' : '-translate-y-48'} scale-90 opacity-0 z-0`;
    };

    return (
        <div id="speakers" className="min-h-screen w-full flex items-center justify-center px-4 py-32 md:py-24 bg-[#161616]">
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Navigation Buttons */}
                <button
                    onClick={() => {
                        setIsAutoPlaying(false);
                        moveSlider('down');
                    }}
                    className="absolute left-1/2 -translate-x-1/2 -top-16 z-30 
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     hover:bg-gray-100 transition-colors duration-500 hover:shadow-red-500/30"
                    aria-label="Previous testimonial"
                >
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6  text-[#28223f]" />
                </button>

                {/* Testimonials Container */}
                <div
                    className="relative h-[800px] md:h-[90vh] w-full max-w-5xl mx-auto flex items-center overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(false)}
                >
                    {temporaryTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={getSlidePosition(index)}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[700px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                                {/* Left Section - Image and TEDx Speaker */}
                                <div className="flex flex-col items-center justify-center space-y-6">
                                    <div className="w-full max-w-md opacity-100">
                                        <img src={testimonial.image} alt="Coming Soon" className="w-auto h-auto " />
                                    </div>
                                    <div className='flex-row hidden md:flex'><p className='font-vanguard text-4xl md:text-5xl text-red-600 font-medium'>TEDx</p><p className='font-vanguard text-4xl md:text-5xl text-black font-medium'>SPEAKER</p></div>
                                </div>

                                {/* Right Section - Name, Occupation, and Testimonial */}
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="space-y-2">
                                        <h4 className="text-3xl md:text-6xl lg:text-7xl text-gray-900 font-vanguard font-medium">
                                            {testimonial.name}
                                        </h4>
                                        <h3 className='font-vanguard text-2xl md:text-4xl text-red-500 font-medium'>
                                            {testimonial.occupation}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed avantgarde text-xs md:text-base lg:text-lg">
                                        {testimonial.testimonial}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => {
                        setIsAutoPlaying(false);
                        moveSlider('up');
                    }}
                    className="absolute left-1/2 -translate-x-1/2 z-30 -bottom-20
                     w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center
                     hover:bg-gray-100 transition-colors duration-300 hover:shadow-red-500/30"
                    aria-label="Next testimonial"
                >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#28223f]" />
                </button>
            </div>
        </div>
    );
};

export default SpeakersList;
