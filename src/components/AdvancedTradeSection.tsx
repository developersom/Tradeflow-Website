import React from 'react';
import { Package, FileText, IndianRupee, Truck, CheckCircle2, BookUser } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CARDS: FeatureCard[] = [
  {
    icon: <Package size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Bulk Order Management',
    description: 'Break large orders into multiple shipments and track delivered and pending quantities across every order.',
  },
  {
    icon: <FileText size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Brokerage & Invoicing',
    description: 'Calculate brokerage and generate GST or non-GST invoices as per your choice, based on your business requirements.',
  },
  {
    icon: <IndianRupee size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Payments & Settlement',
    description: 'Track buyer and seller payments, deductions, outstanding balances and pending brokerage in one place.',
  },
  {
    icon: <Truck size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Delivery Tracking',
    description: 'Keep delivery status, quantities and commitments connected to the original trade.',
  },
  {
    icon: <CheckCircle2 size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Trade Resolution',
    description: 'Track quality, quantity and delivery issues through follow-ups until they are resolved.',
  },
  {
    icon: <BookUser size={24} className="text-[#0057AC]" strokeWidth={2} />,
    title: 'Party Management',
    description: 'Maintain buyer and seller details, contact information, and transaction history in one place for easier trade management.',
  },
];

export const AdvancedTradeSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#F6F8FA] py-20 md:py-28 scroll-mt-[79px]">
      <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Header Block */}
        <div className="max-w-[650px] space-y-3 mb-12 md:mb-16">
          <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
            ADVANCED TRADE MANAGEMENT
          </div>
          <h2 className="font-inter font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.7px] text-[#001B3A]">
            Manage Every Stage.<br />
            Even After the Trade.
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180] pt-1">
            TradeFlow360 connects orders, deliveries, brokerage, payments and settlements in one workflow, while keeping follow-ups, resolutions and after-sales activities connected even after the goods are delivered.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[16px] p-6 shadow-[0px_0px_4px_rgba(0,0,0,0.08)] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.08)] transition-all duration-200 border border-transparent hover:border-[#DCE3E8] flex flex-col justify-between min-h-[226px]"
            >
              {/* Top Icon Badge in Canvas gray with Trade Blue icon */}
              <div className="w-12 h-12 rounded-[12px] bg-[#F6F8FA] flex items-center justify-center shrink-0 mb-6">
                {card.icon}
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

