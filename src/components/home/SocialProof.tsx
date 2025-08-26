"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaQuoteLeft, FaGoogle, FaMicrosoft, FaAmazon, FaSpotify } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsFillMagnetFill } from 'react-icons/bs';
import { GiRamProfile } from 'react-icons/gi';

// --- Data for Testimonials & Logos ---
const testimonials = [
   {
      quote: "Switching to EchoCode cut my debugging time in half. The AI suggestions actually understand modern React patterns, which is a game-changer.",
      author: "Sarah Chen",
      title: "Senior Frontend Developer, TechCorp",
   },
   {
      quote: "Finally, an editor that does not crash with large Unity projects. The performance is incredible. It has become my daily driver.",
      author: "Marcus Rodriguez",
      title: "Indie Game Developer",
   },
   {
      quote: "The collaboration features are seamless. My team can now pair program effectively without screen sharing lag or configuration nightmares.",
      author: "Emily Sato",
      title: "Engineering Manager, Innovate Inc.",
   },
   {
      quote: "The plugin ecosystem is curated perfectly. I get all the power I need without the bloat or dependency issues of other editors.",
      author: "David Lee",
      title: "Full-Stack Developer, StartupX",
   }
];

const companyLogos = [
   { name: 'Google', Icon: FaGoogle },
   { name: 'Microsoft', Icon: FaMicrosoft },
   { name: 'Amazon', Icon: FaAmazon },
   { name: 'Netflix', Icon: BsFillMagnetFill },
   { name: 'Spotify', Icon: FaSpotify },
];

const SocialProof = () => {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

   const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, [emblaApi]);

   useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
      return () => {
         emblaApi.off('select', onSelect);
         emblaApi.off('reInit', onSelect);
      };
   }, [emblaApi, onSelect]);

   return (
      <section className="bg-gray-50 py-20 sm:py-28">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
               <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[#17100E] md:text-5xl">
                  Loved By Developers Worldwide
               </h2>
               <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  Don&apos;t just take our word for it. Here&apos;s what developers are saying.
               </p>
            </div>

            {/* Testimonial Carousel */}
            <div className="mt-16">
               <div className="embla overflow-hidden" ref={emblaRef}>
                  <div className="embla__container flex -ml-4">
                     {testimonials.map((testimonial, index) => (
                        <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                           <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200/80 flex flex-col">
                              <FaQuoteLeft className="absolute top-6 left-8 text-5xl text-gray-100 -z-0" />
                              <p className="relative z-10 text-gray-700 italic flex-grow">
                                 &quot;{testimonial.quote}&quot;
                              </p>
                              <div className="mt-6 flex items-center gap-4 pt-6 border-t border-gray-200">
                                 <GiRamProfile className="w-16 h-16 rounded-full shadow-md"/>
                                 <div>
                                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Carousel Navigation */}
               <div className="flex justify-end gap-4 mt-8">
                  <button
                     onClick={scrollPrev}
                     disabled={prevBtnDisabled}
                     className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 disabled:opacity-50 hover:bg-gray-100 transition-colors"
                     aria-label="Previous testimonial"
                  >
                     <FiChevronLeft size={24} />
                  </button>
                  <button
                     onClick={scrollNext}
                     disabled={nextBtnDisabled}
                     className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 disabled:opacity-50 hover:bg-gray-100 transition-colors"
                     aria-label="Next testimonial"
                  >
                     <FiChevronRight size={24} />
                  </button>
               </div>
            </div>

            {/* Company Logos */}
            <div className="mt-24 text-center">
               <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Trusted by high-performing teams at
               </p>
               <div className="mt-8 flex justify-center items-center flex-wrap gap-x-12 gap-y-6">
                  {companyLogos.map(({ name, Icon }) => (
                     <Icon key={name} className="h-8 text-gray-400 grayscale hover:grayscale-0 hover:text-gray-600 transition-all" />
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
};

export default SocialProof;