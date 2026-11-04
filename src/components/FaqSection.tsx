import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'Who is TradeFlow360 built for?',
    answer:
      'TradeFlow360 is built for commodity traders, commission agents (Arhatiyas), brokers, food processors, and agri-trading enterprises across India who manage high-value physical trades across multiple counterparties, lots, and settlement cycles.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Can I manage the complete trade journey?',
    answer:
      'Yes, TradeFlow360 lets you manage the entire trade lifecycle from contract generation and dispatch scheduling to delivery verification, payment reconciliation, and dispute resolution.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Can I track pending payments and balances?',
    answer:
      'Absolutely. Real-time party ledgers track advances, dues, quality deductions, and brokerage splits so you always know your exact balance positions.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Can I track delivery and trade issues?',
    answer:
      'Yes. Any weight variance, quality moisture deductions, or transit disputes are logged against the specific trade contract and resolved with digital debit/credit notes.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'How can I see TradeFlow360 for my business?',
    answer:
      'You can schedule a personalized 1-on-1 walkthrough with our team by clicking the "Book a Demo" button above.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="w-full bg-white min-h-[calc(100vh-79px)] flex flex-col justify-center py-16 md:py-24 border-b border-[#DCE3E8]/60 scroll-mt-[79px]"
    >
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-32">
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
              FAQs
            </div>
            <h2 className="font-inter font-bold text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-[#001B3A]">
              Questions,<br />
              answered.
            </h2>
            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180] max-w-[476px] pt-1">
              Everything you need to know about transitioning your contracts, orders, and party ledgers into one connected workflow.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 flex flex-col border-t border-[#DCE3E8]">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border-b border-[#DCE3E8] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-5 sm:gap-6 pr-4">
                      {/* Number */}
                      <span className="font-inter text-[14px] leading-[21px] font-normal text-[#0057AC] shrink-0">
                        {faq.number}
                      </span>
                      {/* Question */}
                      <span className="font-inter font-semibold text-[17px] sm:text-[18px] leading-[28px] text-[#172B3A] group-hover:text-[#0057AC] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 text-[#8A9AA6] group-hover:text-[#172B3A] transition-colors">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={2} />
                      ) : (
                        <Plus size={18} strokeWidth={2} />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="pb-6 pl-10 sm:pl-12 pr-4 text-[#5F7180] font-inter text-[15px] leading-[24px] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

