import React, { useState } from 'react';

interface LifecycleStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: 'contract',
    number: '01',
    title: 'Contract',
    description: 'Record buyer, seller, commodity, quantity, rate, and brokerage terms in one digital trade contract.',
  },
  {
    id: 'order',
    number: '02',
    title: 'Order',
    description: 'Break the contract into scheduled dispatch lots and quantities without re-entering trade details.',
  },
  {
    id: 'delivery',
    number: '03',
    title: 'Goods & Delivery',
    description: 'Track truck dispatches, lorry receipts, and net unloading weights directly against the order.',
  },
];

export const TradeLifecycleSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('contract');

  return (
    <section id="how-it-works" className="w-full bg-white py-20 md:py-28 border-b border-[#DCE3E8]/60 scroll-mt-[79px]">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
              THE TRADE LIFECYCLE
            </div>
            <h2 className="font-inter font-bold text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-[#001B3A]">
              One Trade.<br />
              One Connected Flow.
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180] max-w-[476px] pt-1">
              Every stage of a trade feeds directly into the next—from the initial contract to final settlement and post-trade resolution.
            </p>
          </div>

          {/* Right Column: Vertical Timeline Stepper */}
          <div className="lg:col-span-7 flex flex-col relative pl-2 md:pl-6">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = activeStepId === step.id;
              const isLast = idx === LIFECYCLE_STEPS.length - 1;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className="relative flex items-start gap-6 pb-12 cursor-pointer group"
                >
                  {/* Connecting Vertical Line */}
                  {!isLast && (
                    <div
                      className={`absolute left-[21px] top-[43px] bottom-0 w-[2px] transition-colors duration-300 ${
                        isActive ? 'bg-[#1DCA76]' : 'bg-[#DCE3E8]'
                      }`}
                    />
                  )}

                  {/* Step Circle Badge */}
                  <div
                    className={`relative z-10 w-[43px] h-[43px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1DCA76] text-white shadow-sm ring-4 ring-[#1DCA76]/20'
                        : 'bg-white border border-[#DCE3E8] text-[#8A9AA6] group-hover:border-[#1DCA76]/50'
                    }`}
                  >
                    <span className="font-inter text-[14px] leading-[21px] font-normal">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Text Content */}
                  <div className="pt-1.5 space-y-2">
                    <h3
                      className={`font-inter font-semibold text-[24px] leading-[31px] transition-colors duration-300 ${
                        isActive ? 'text-[#1DCA76]' : 'text-[#8A9AA6] group-hover:text-[#172B3A]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`font-inter font-normal text-[16px] leading-[24px] max-w-[635px] transition-colors duration-300 ${
                        isActive ? 'text-[#5F7180]' : 'text-[#8A9AA6]'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

