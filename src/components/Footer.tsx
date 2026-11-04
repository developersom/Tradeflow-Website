import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-16 md:pt-20 pb-8 text-[#172B3A] border-t border-[#DCE3E8]/60">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-14">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="inline-block">
              <Logo size="small" />
            </a>
            <p className="font-inter font-normal text-[16px] leading-[28px] text-[#5F7180] max-w-[367px]">
              Manage contracts, orders, payments, settlements and everything that follows in one connected workflow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-inter font-semibold text-[16px] leading-[24px] text-[#172B3A]">
              Quick Links
            </h4>
            <ul className="space-y-3 font-inter text-[16px] leading-[24px] text-[#172B3A]">
              <li>
                <a href="#features" className="hover:text-[#0057AC] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#0057AC] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-[#0057AC] transition-colors">
                  Why Choose TradeFlow
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-inter font-semibold text-[16px] leading-[24px] text-[#172B3A]">
              Contact
            </h4>
            <div className="space-y-3.5 font-inter text-[16px] leading-[24px] text-[#172B3A]">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#172B3A] shrink-0 mt-1" strokeWidth={1.8} />
                <span className="max-w-[280px]">
                  Kallur Colony, Opposite of Public Garden, Station Road, Raichur - 584101 ( K.A )
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#172B3A] shrink-0" strokeWidth={1.8} />
                <a href="tel:+919980706001" className="hover:text-[#0057AC] transition-colors">
                  +91 9980706001
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-[#DCE3E8] flex flex-wrap items-center justify-between gap-4 font-poppins text-[12px] text-[#8A9AA6]">
          <div>© 2026 TradeFlow360</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#172B3A] transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-[#172B3A] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

