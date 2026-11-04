import React from 'react';

interface ProblemCard {
  number: string;
  title: string;
  description: string;
}

const CARDS: ProblemCard[] = [
  {
    number: '01',
    title: 'Scattered Records',
    description: 'Deals and trade details get spread across calls, WhatsApp conversations and disconnected notes.',
  },
  {
    number: '02',
    title: 'Changing Details',
    description: 'Quantities and rates keep changing, leading to mismatched records.',
  },
  {
    number: '03',
    title: 'Payment Follow-ups & Updates',
    description: 'Keeping track of payment updates and following up with parties over calls, WhatsApp, or email takes time and effort.',
  },
  {
    number: '04',
    title: 'Pending Payments',
    description: 'Outstanding amounts, due dates and brokerage are easy to miss.',
  },
  {
    number: '05',
    title: 'Delivery Issues',
    description: 'Delivery, quantity and quality issues need repeated follow-ups.',
  },
  {
    number: '06',
    title: 'Post-Trade Work',
    description: 'Payments, settlements and disputes continue long after delivery.',
  },
];

export const RecordsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F6F8FA] py-16 md:py-24">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Header Block */}
        <div className="max-w-[650px] space-y-3">
          <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
            CONNECTED TRADE MANAGEMENT
          </div>
          <h2 className="font-inter font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-[#001B3A]">
            Trade Moves Fast.<br />
            Your Records Should Keep Up.
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180] pt-1">
            Trade moves across calls, messages, deliveries and payments. Keeping every detail connected can become difficult.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-[16px] p-6 shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col justify-between hover:shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 border border-transparent hover:border-[#DCE3E8]"
            >
              <div className="font-inter font-normal text-[16px] leading-[24px] text-[#8A9AA6] mb-6">
                {card.number}
              </div>

              <div>
                <h3 className="font-inter font-semibold text-[18px] leading-[22px] text-[#172B3A] mb-2">
                  {card.title}
                </h3>
                <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

