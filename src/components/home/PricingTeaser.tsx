"use client";

import { useState } from 'react';
import { FiCheck, FiInfo } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi2';

// --- NEW DATA: Tailored for the EchoCode Editor ---
const pricingData = [
  {
    title: 'Starter',
    description: 'For students, hobbyists, and anyone getting started with coding.',
    price: { annual: '0', monthly: '0' },
    showDemoButton: false,
    featuresTitle: 'Key features include',
    features: ['Full Editor Functionality', 'Basic AI Autocomplete', 'Community Support', '5 Custom Themes', 'Personal Projects Only']
  },
  {
    title: 'Pro',
    description: 'For professional developers, freelancers, and small teams who need advanced tools.',
    price: { annual: '9', monthly: '12' },
    showDemoButton: true,
    featuresTitle: 'Everything in Starter, plus',
    features: ['Advanced AI Autocomplete', 'Cloud Sync for Settings', 'Unlimited Themes & Plugins', 'Priority Email Support', 'Commercial Use License']
  },
  {
    title: 'Team',
    description: 'For growing teams and businesses that need to collaborate securely and efficiently.',
    price: { annual: '19', monthly: '24' },
    showDemoButton: true,
    featuresTitle: 'Everything in Pro, plus',
    features: ['Real-time Collaboration', 'Team Management & Billing', 'Admin Controls & Permissions', 'SSO & Identity Management', 'Includes 5 Pro seats']
  }
];

const enterpriseFeatures = [
    'On-premise deployment options', 
    'Dedicated support manager & SLA', 
    'Custom security audits', 
    'Volume licensing discounts', 
    'Custom feature development'
];


export const PricingTeaser = () => {
   const [isAnnual, setIsAnnual] = useState(true);

   return (
      <section className="bg-[#FDFCF9] font-sans">
         <div className="mx-auto max-w-[1375px] px-6 py-20 sm:py-28 xl:px-8">
            
            {/* --- Header & Toggle Section --- */}
            <div className="mx-auto max-w-4xl text-center xl:text-left">
               <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[#17100E] md:text-5xl">
                  Find the plan that fits your ambition.
               </h2>
               <div className="flex items-center justify-center xl:justify-start gap-6">
                  <span
                     onClick={() => setIsAnnual(true)}
                     className={`cursor-pointer text-base font-medium transition-colors ${isAnnual ? 'text-[#1F1F1F] underline decoration-2 underline-offset-[6px]' : 'text-[#A8A8A8]'}`}
                  >
                     Billed annually (Save 25%)
                  </span>
                  <span
                     onClick={() => setIsAnnual(false)}
                     className={`cursor-pointer text-base font-medium transition-colors ${!isAnnual ? 'text-[#1F1F1F] underline decoration-2 underline-offset-[6px]' : 'text-[#A8A8A8]'}`}
                  >
                     Billed monthly
                  </span>
               </div>
            </div>

            {/* --- Main Pricing Container --- */}
            <div className="mx-auto mt-12 flex max-w-4xl flex-col xl:max-w-none xl:flex-row xl:items-start xl:gap-6">
               
               {/* --- 3-Card Grid --- */}
               <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">
                  {pricingData.map((card) => (
                     <div key={card.title} className="flex w-full flex-col overflow-hidden rounded-xl border border-black/10 md:flex-row xl:flex-col">
                        {/* Top half of card */}
                        <div className="flex flex-1 flex-col justify-between bg-white p-8 md:w-1/2 xl:w-full">
                           <div>
                              <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black">{card.title}</h3>
                              <p className="text-sm leading-relaxed text-neutral-600">{card.description}</p>
                           </div>
                           <div className="mt-8">
                              <div className="flex items-start gap-1">
                                 <span className="text-4xl font-bold leading-none text-black">${isAnnual ? card.price.annual : card.price.monthly}</span>
                                 <span className="pt-2 text-sm text-neutral-600">
                                    {card.title !== 'Starter' && '/ seat/mo'}
                                 </span>
                              </div>
                               <p className="text-sm text-neutral-600 h-4">{card.title !== 'Starter' && isAnnual && 'billed annually'}</p>
                              <div className="mt-6 flex h-9 items-center gap-4">
                                 <a className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800" href="#">
                                    {card.title === 'Starter' ? 'Get Started' : 'Start 14-day trial'}
                                 </a>
                                 {card.showDemoButton && (
                                    <a href="#" className="text-sm font-semibold text-black hover:underline">Get a demo</a>
                                 )}
                              </div>
                           </div>
                        </div>
                        {/* Bottom half of card */}
                        <div className="border-black/10 bg-[#FCFBF8] p-8 md:w-1/2 md:border-l xl:w-full xl:border-l-0 xl:border-t">
                           <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800">{card.featuresTitle}</p>
                           <ul className="mt-4 flex flex-col gap-3">
                              {card.features.map((feature) => (
                                 <li key={feature} className="flex items-start gap-2">
                                    <FiCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#17100E]" strokeWidth="3" />
                                    <p className="text-sm leading-snug text-neutral-600">{feature}</p>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>

               {/* --- Enterprise Side Card --- */}
               <div className="mt-8 w-full xl:mt-0 xl:max-w-xs">
                  <div className="flex h-full flex-col rounded-xl border border-black/10 bg-[#F4F3EC]">
                     <div className="flex flex-1 flex-col justify-between p-8">
                        <div>
                           <h3 className="mb-2 text-[22px] font-semibold leading-tight text-black">Enterprise</h3>
                           <p className="text-sm leading-relaxed text-neutral-600">
                              For large organizations with custom security, deployment, and support needs.
                           </p>
                        </div>
                        <div className="mt-8">
                           <div className="mb-1 flex items-start">
                              <span className="text-xl font-semibold text-black">Custom Pricing</span>
                           </div>
                           <div className="mt-6 flex h-9 items-center">
                              <a className="rounded-md border border-black/20 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-100" href="#">Contact Sales</a>
                           </div>
                           <div className="mt-8 border-t border-black/10 pt-6">
                              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800">Everything in Team, plus</p>
                              <ul className="mt-4 flex flex-col gap-3">
                                 {enterpriseFeatures.map(feature => (
                                    <li key={feature} className="flex items-start gap-2">
                                       <FiCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#17100E]" strokeWidth="3" />
                                       <p className="text-sm leading-snug text-neutral-600">{feature}</p>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* --- Guarantee and Links Section --- */}
            <div className="mx-auto mt-16 max-w-4xl text-center">
               <button className="group inline-flex items-center gap-2">
                  <HiShieldCheck className="h-6 w-6 text-[#17100E] transition-colors group-hover:text-blue-600" />
                  <span className="text-xl font-bold text-[#17100E] transition-colors group-hover:text-blue-600">30-Day Money-Back Guarantee</span>
                  <FiInfo className="h-4 w-4 text-neutral-400" />
               </button>
               <p className="mt-4 text-center text-base leading-relaxed text-neutral-600">
                  All plans include cross-platform support on macOS, Windows, and Linux, with regular updates and community access.
               </p>
               <div className="mt-6 flex flex-row items-center justify-center gap-6">
                  <a className="font-semibold text-black underline underline-offset-4 hover:text-blue-600" href="#">View all features</a>
                  <a className="font-semibold text-black underline underline-offset-4 hover:text-blue-600" href="#">Compare plans</a>
               </div>
            </div>

         </div>
      </section>
   );
}