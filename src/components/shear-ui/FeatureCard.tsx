"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowRight } from "react-icons/fi";

// Define the shape of the props we'll pass to each card
export type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
  hoverGlow: string;
  extraContent?: React.ReactNode;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const { icon: Icon, title, description, gradient, iconGradient, hoverGlow, extraContent } = feature;

  useGSAP(() => {
    // Create a paused timeline that we can play/reverse on hover
    timeline.current = gsap.timeline({ paused: true })
      .to(cardRef.current, { 
        y: -8, 
        duration: 0.3, 
        ease: 'power2.out' 
      })
      .to(iconRef.current, { 
        rotate: -15, 
        scale: 1.1, 
        duration: 0.3, 
        ease: 'power2.out' 
      }, '<'); // '<' starts this animation at the same time as the previous one
  }, []);

  const handleMouseEnter = () => timeline.current?.play();
  const handleMouseLeave = () => timeline.current?.reverse();

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative p-8 rounded-2xl overflow-hidden cursor-pointer
                  ${gradient} 
                  shadow-md hover:shadow-xl ${hoverGlow}
                  transition-shadow duration-300
                  bg-gradient-to-br bg-[length:200%_200%] bg-left hover:bg-right
                  transition-[background-position] duration-500 ease-in-out`}
    >
      {/* Icon */}
      <div 
        ref={iconRef} 
        className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg ${iconGradient}`}
      >
        <Icon />
      </div>

      {/* Extra Content Overlay (e.g., metric, badges) */}
      {extraContent && (
        <div className="absolute top-4 right-4">{extraContent}</div>
      )}

      {/* Text Content */}
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">
        {description}
      </p>
      
      {/* Learn More Link */}
      <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-gray-800 group">
        Learn More
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default FeatureCard;