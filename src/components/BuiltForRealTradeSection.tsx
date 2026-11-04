import React from 'react';
import warehouseImg from '../assets/efb1636f725754c07fe836533a1142d12052d7ab.png';
import { GitBranch, Monitor, History, IndianRupee } from 'lucide-react';

export const BuiltForRealTradeSection: React.FC = () => {
  const features = [
    {
      icon: <GitBranch size={28} className="text-[#1DCA76]" strokeWidth={2} />,
      title: 'Deal Management',
      description: 'Keep buyer, seller, commodity, quantity and rate connected from the start.',
    },
    {
      icon: <Monitor size={28} className="text-[#1DCA76]" strokeWidth={2} />,
      title: 'Anywhere Access',
      description: 'Access your trade information whenever you need it, wherever your work takes you.',
    },
    {
      icon: <History size={28} className="text-[#1DCA76]" strokeWidth={2} />,
      title: 'Complete Trade History',
      description: 'Keep every deal, update and transaction record in one place.',
    },
    {
      icon: <IndianRupee size={28} className="text-[#1DCA76]" strokeWidth={2} />,
      title: 'Payment Tracking',
      description: 'Know what has been paid, what is pending and what is due.',
    },
  ];

  return (
    <section className="w-full bg-[#001B3A] py-20 md:py-24 text-white">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Section Header */}
        <div className="max-w-[650px] space-y-3 mb-12 md:mb-16">
          <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#1DCA76] uppercase">
            BUILT FOR REAL TRADE
          </div>
          <h2 className="font-inter font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-white">
            Built for the Way<br />
            Indian Trade Works.
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] text-white/80 pt-1">
            TradeFlow360 brings the key parts of your trade together, so you can manage deals, payments, deliveries and records from one place.
          </p>
        </div>

        {/* 2-Column Content: Left Warehouse Photo, Right 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column: Warehouse Image */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full h-[320px] md:h-[416px] rounded-[16px] overflow-hidden shadow-[0px_0px_16px_rgba(255,255,255,0.12)] border border-white/10 group">
              <img
                src={warehouseImg}
                alt="Physical mandi and commodity trade operations in India"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B3A]/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start space-y-3">
                {/* Icon in Flow Green */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                {/* Title */}
                <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-white">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="font-inter font-normal text-[16px] leading-[24px] text-white/90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

