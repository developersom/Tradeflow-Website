import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#001B3A] py-24 md:py-32 overflow-hidden text-center text-white">
      {/* Decorative Wave SVGs matching Figma Vector 18 & 19 */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 546"
          fill="none"
          className="w-full h-full object-cover opacity-60"
          preserveAspectRatio="none"
        >
          {/* Subtle light wave */}
          <path
            d="M-50 200 C 300 80, 800 320, 1500 120"
            stroke="#DCE3E8"
            strokeWidth="1.2"
            strokeOpacity="0.2"
          />
          {/* Main Flow Green dynamic wave */}
          <path
            d="M-40 80 C 250 180, 500 400, 800 300 C 1100 200, 1300 420, 1500 520"
            stroke="#1DCA76"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[600px] mx-auto px-6 flex flex-col items-center">
        {/* Tag */}
        <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#1DCA76] uppercase mb-4">
          READY TO MOVE TRADE FORWARD?
        </div>

        {/* Heading */}
        <h2 className="font-inter font-bold text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-white">
          Move Trade Forward.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 font-inter font-normal text-[16px] leading-[24px] text-white/80 max-w-[482px]">
          See how TradeFlow360 can bring your trade operations into one connected workflow.
        </p>

        {/* CTA Button in Flow Green */}
        <div className="mt-8">
          <a
            href="#book-demo"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[8px] bg-[#1DCA76] hover:bg-[#16B769] text-[#001B3A] font-inter font-semibold text-[16px] leading-[24px] transition-all shadow-md active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight size={18} strokeWidth={2.5} className="text-[#001B3A]" />
          </a>
        </div>
      </div>
    </section>
  );
};

