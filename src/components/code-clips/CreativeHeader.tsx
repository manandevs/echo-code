"use client";

import Image from "next/image";
import { useState } from "react";
// Removed unused icons like FaGoogle, FaSpotify, etc.
import { FiArrowRight, FiCommand } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";

const CreativeHeader = () => {
   const [isGlassyToggled, setIsGlassyToggled] = useState(false);

   return (
      <div className="relative w-full">
         {/* Background Blobs */}
         <div className="absolute top-[30px] left-[20%] w-[300px] h-[200px] bg-fuchsia-300/30 blur-3xl rounded-full z-10" />
         <div className="absolute top-[75%] right-[20%] w-[300px] h-[180px] bg-blue-300/30 blur-3xl rounded-full z-10" />
         <div className="z-20 flex flex-col items-center justify-center overflow-hidden font-sans text-center py-16">
            <Image
               src={"/imoges/clip-face-imoge.png"}
               alt="imoge"
               width={1000}
               height={1000}
               className="w-[400px] h-auto absolute right-0"
            />
            {/* Sparkles */}
            <GiSparkles className="absolute top-[55%] left-[15%] text-green-400 text-3xl rotate-12" />
            <GiSparkles className="absolute top-[30%] right-[12%] text-yellow-400 text-5xl -rotate-12" />
            <GiSparkles className="absolute top-[70%] right-[28%] text-blue-400 text-xl rotate-6" />

            {/* Heading */}
            <div className="z-10 flex flex-col items-center gap-6">
               <div className="flex items-center gap-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900">
                     Explore
                  </h1>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-400 rounded-full flex items-center justify-center shadow-xl">
                     <FiArrowRight size={36} className="text-gray-900" />
                  </div>
               </div>

               <div className="flex items-center gap-6">
                  {/* Glassy Toggle */}
                  <div
                     onClick={() => setIsGlassyToggled(!isGlassyToggled)}
                     className="relative w-28 h-12 bg-white/30 backdrop-blur-[2px] rounded-full shadow-lg border border-white/60 flex items-center p-1.5 cursor-pointer"
                  >
                     <div
                        className={`w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center transform transition-all ${isGlassyToggled ? "translate-x-[64px] rotate-180" : "translate-x-0"
                           }`}
                     >
                        <FiCommand size={18} className="text-gray-700" />
                     </div>
                  </div>

                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold traking-[-4px] bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                     CodeClips
                  </h1>
               </div>
            </div>

            {/* Subheading for Code Clip Page */}
            <p className="z-10 mt-8 text-lg md:text-xl text-gray-600 max-w-xl">
               A curated collection of code snippets. Save your own from the playground!
            </p>
         </div>
      </div>
   );
};

export default CreativeHeader;