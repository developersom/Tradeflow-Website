import React from 'react';
import { Check } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="w-full bg-[#001B3A] py-20 md:py-28 text-white relative overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#1DCA76] uppercase">
              PRIVACY & SECURITY
            </div>
            <h2 className="font-inter font-bold text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-white">
              Your Trade Data.<br />
              Protected.
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-white/80 max-w-[572px] pt-1">
              Your trade records are critical to your business. TradeFlow360 is designed to keep your information private, controlled and accessible only to the people who need it.
            </p>
          </div>

          {/* Right Column: Data Control UI Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[506px] bg-white rounded-[24px] p-6 sm:p-8 shadow-[0px_0px_24px_rgba(0,0,0,0.15)] text-[#172B3A]">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DCE3E8]/80">
                <div>
                  <div className="font-mono text-[11px] font-bold text-[#0057AC] tracking-[0.08em] uppercase">
                    TRADEFLOW360
                  </div>
                  <div className="font-inter font-bold text-[18px] text-[#001B3A] mt-0.5">
                    DATA CONTROL
                  </div>
                </div>
                <div className="font-inter text-[12px] text-[#5F7180]">
                  Your business information
                </div>
              </div>

              {/* 3 Data Control Rows */}
              <div className="py-5 space-y-3">
                <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-[#F6F8FA] border border-[#DCE3E8]">
                  <span className="font-inter font-medium text-[15px] text-[#172B3A]">
                    Trade Records
                  </span>
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1DCA76]" />
                    <span className="font-inter font-semibold text-[13px] text-[#172B3A]">
                      Private
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-[#F6F8FA] border border-[#DCE3E8]">
                  <span className="font-inter font-medium text-[15px] text-[#172B3A]">
                    Payment Records
                  </span>
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1DCA76]" />
                    <span className="font-inter font-semibold text-[13px] text-[#172B3A]">
                      Controlled
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3.5 rounded-[12px] bg-[#F6F8FA] border border-[#DCE3E8]">
                  <span className="font-inter font-medium text-[15px] text-[#172B3A]">
                    Party Information
                  </span>
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1DCA76]" />
                    <span className="font-inter font-semibold text-[13px] text-[#172B3A]">
                      Private
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Checkmark Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 pb-5 border-b border-[#DCE3E8]/80 text-[13px] text-[#172B3A] font-inter">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#E8FAF1] flex items-center justify-center text-[#1DCA76]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-medium">Private</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#E8FAF1] flex items-center justify-center text-[#1DCA76]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-medium">Controlled Access</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#E8FAF1] flex items-center justify-center text-[#1DCA76]">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-medium">Business Ownership</span>
                </div>
              </div>

              {/* Bottom Card Sub-bar */}
              <div className="flex items-center justify-between pt-4 text-[12px] font-inter">
                <div>
                  <div className="text-[10px] font-bold text-[#8A9AA6] uppercase tracking-wider">
                    ACCESS
                  </div>
                  <div className="font-semibold text-[#001B3A] mt-0.5">
                    Authorized users only
                  </div>
                </div>
                <div className="text-[#5F7180]">
                  Privacy · Control · Access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

