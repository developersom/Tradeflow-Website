import React from 'react';

interface Pillar {
  tag: string;
  title: React.ReactNode;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    tag: '01 - CLARITY',
    title: (
      <>
        See the complete <br className="hidden lg:inline" />
        picture.
      </>
    ),
    description: 'Keep the details of every trade visible, from what happened to what is still pending.',
  },
  {
    tag: '02 - CONTROL',
    title: (
      <>
        Stay ahead of what <br className="hidden lg:inline" />
        needs attention.
      </>
    ),
    description: 'Keep payments, deliveries, settlements and follow-ups moving without losing track.',
  },
  {
    tag: '03 - RESOLUTION',
    title: (
      <>
        Resolve issues. <br className="hidden lg:inline" />
        Keep trade moving.
      </>
    ),
    description: 'Track post-trade disputes, manage follow-ups, and keep resolution progress connected to the original trade.',
  },
];

export const WhyTradeFlowSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-b border-[#DCE3E8]/60">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Section Header */}
        <div className="max-w-[650px] space-y-3 mb-16 md:mb-20">
          <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
            WHY TRADEFLOW360
          </div>
          <h2 className="font-inter font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-[#001B3A]">
            A Better Way to Stay<br />
            on Top of Trade.
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180] pt-1">
            TradeFlow360 brings clarity to the moving parts of everyday trade, so you always know where things stand and what needs attention.
          </p>
        </div>

        {/* 3 Value Pillars with Exact Figma 24px / 8px Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
          {PILLARS.map((pillar, index) => {
            const isLast = index === PILLARS.length - 1;

            return (
              <div
                key={pillar.tag}
                className={`flex flex-col items-start gap-[24px] ${
                  index > 0 ? 'md:pl-10 lg:pl-12' : ''
                } ${
                  !isLast ? 'md:pr-10 lg:pr-12 md:border-r md:border-[#DCE3E8]' : ''
                }`}
              >
                {/* Tag (01 - CLARITY, etc.) */}
                <div className="font-inter font-medium text-[14px] leading-[21px] text-[#0057AC]">
                  {pillar.tag}
                </div>

                {/* Text Block with exact 8px gap */}
                <div className="flex flex-col items-start gap-[8px]">
                  <h3 className="font-inter font-semibold text-[24px] leading-[31px] text-[#172B3A]">
                    {pillar.title}
                  </h3>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
