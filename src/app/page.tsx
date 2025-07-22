"use client";

import LanguageExtension from "./components/extensions";
import { FeatureGrid } from "./components/featureSections";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden w-full h-full">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 -translate-y-1/3 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-[#9F70FD]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[50%] left-0 translate-x-1/4 translate-y-1/2 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-[#e1ff00]/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 -translate-x-1/4 translate-y-1/3 w-96 h-96 md:w-[40rem] md:h-[40rem] bg-[#00BFFF]/20 rounded-full blur-3xl opacity-40"></div>
        <div className="z-50">
          <Header />
          <Hero />
          <FeatureGrid />
          <LanguageExtension />
        </div>
      </div>
    </>
  );
}
