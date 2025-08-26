"use client";

import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";
import FeaturesShowcase from "@/components/home/FeaturesShowcase";
import InteractiveDemo from "@/components/home/InteractiveDemo";
import SocialProof from "@/components/home/SocialProof";
import FinalCTA from "@/components/home/FinalCTA";
import { PricingTeaser } from "@/components/home/PricingTeaser";

export default function Home() {
  return (
    <>
      <Header />
      
      <div id="hero">
        <Hero />
      </div>

      <div id="features">
        <FeaturesShowcase />
      </div>

      <div id="demo">
        <InteractiveDemo />
      </div>

      <div id="testimonials">
        <SocialProof />
      </div>

      <div id="pricing">
        <PricingTeaser />
      </div>

      <div id="cta">
        <FinalCTA />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
