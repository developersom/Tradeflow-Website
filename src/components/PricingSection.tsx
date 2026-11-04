import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CtaSection } from './CtaSection';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const isAnnual = billingCycle === 'annual';

  const basicFeatures = [
    'Up to 150 active trade contracts / month',
    'Contract & Order Management',
    'Single-scale Dharamkanta weight logging',
    'Payment tracking (RTGS/NEFT matching)',
    'Brokerage calculations & bill notes',
    'Standard GST invoices & receipts',
    'WhatsApp & email sauda share',
    'Standard email & phone support (Mandi hours)',
  ];

  const advanceFeatures = [
    'Unlimited trade contracts & multi-lot dispatches',
    'Dual weighbridge variance reconciliation (Transit shortage auto-check)',
    'Post-delivery quality deductions & dispute resolution tracker',
    'Automated GST Credit Note & Debit Note linkage',
    'Counterparty ledger synchronization with balance age analysis',
    'Multi-branch / Multi-mandi consolidated book',
    'Granular role-based user access (Owners, Brokers, Dispatch, Accounts)',
    'Priority 24/7 dedicated trade account manager',
  ];

  return (
    <div className="w-full bg-[#F6F8FA]">
      {/* Pricing Hero Section */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0 flex flex-col items-center text-center">
          {/* Label */}
          <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase mb-4">
            PRICING PLANS
          </div>

          {/* Heading */}
          <h1 className="font-inter font-bold text-[44px] md:text-[62px] lg:text-[72px] leading-[1.12] tracking-[-1.5px] max-w-[1010px] text-[#000000]">
            Transparent Pricing for{' '}
            <span className="text-[#0057AC]">Indian Trade</span> Enterprises.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-[#5F7180] max-w-[712px]">
            Designed for commission agents, commodity brokers, and food processors. Scale smoothly as your monthly trade volume and counterparty ledger grows.
          </p>

          {/* Billing Toggle (Frame 33) */}
          <div className="mt-10 inline-flex items-center p-1 bg-white border border-[#DCE3E8] rounded-[8px] shadow-2xs">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-[6px] font-inter text-[14px] leading-[21px] font-normal transition-all cursor-pointer ${
                isAnnual
                  ? 'bg-[#001B3A] text-white shadow-2xs'
                  : 'text-[#5F7180] hover:text-[#172B3A]'
              }`}
            >
              <span>Annual Billing </span>
              <span className="text-[#1DCA76] font-semibold">(save 20%)</span>
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-[6px] font-inter text-[14px] leading-[21px] font-normal transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-[#001B3A] text-white shadow-2xs'
                  : 'text-[#5F7180] hover:text-[#172B3A]'
              }`}
            >
              Monthly Billing
            </button>
          </div>

          {/* Pricing Cards Container (Frame 1707483363) */}
          <div className="mt-16 w-full max-w-[1084px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
            {/* Card 1: Basic */}
            <div className="bg-white border border-[#DCE3E8] rounded-[16px] p-8 md:p-10 shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col justify-between">
              <div className="space-y-6">
                {/* Pill Tag */}
                <div className="inline-block px-4 py-1.5 rounded-[8px] bg-[#F6F8FA] border border-[#DCE3E8]">
                  <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#5F7180] uppercase">
                    ESSENTIAL TRADING DESK
                  </span>
                </div>

                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="font-inter font-semibold text-[28px] leading-[36px] text-[#172B3A]">
                    Basic
                  </h3>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-[#5F7180]">
                    Ideal for independent commission agents (Arhatiyas) and small Mandi brokerage firms tracking deals and payments.
                  </p>
                </div>

                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-inter font-semibold text-[46px] leading-[56px] text-[#172B3A]">
                      {isAnnual ? '₹3,499' : '₹4,399'}
                    </span>
                    <span className="font-inter text-[14px] leading-[21px] text-[#5F7180]">
                      / month, {isAnnual ? 'billed annual' : 'billed monthly'}
                    </span>
                  </div>
                  <div className="font-inter text-[12px] leading-[16px] text-[#5F7180] mt-1">
                    GST applicable as per Indian tax norms
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-[#DCE3E8]" />

                {/* Features List */}
                <div className="space-y-3 pt-1">
                  <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#5F7180] uppercase">
                    INCLUDED IN BASIC:
                  </div>

                  <ul className="space-y-2.5">
                    {basicFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#E8FAF1] border border-[#D2F4E4] flex items-center justify-center shrink-0 mt-0.5 text-[#1DCA76]">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-inter text-[14px] leading-[21px] text-[#172B3A]">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                <a
                  href="#get-started-basic"
                  className="w-full h-[54px] rounded-[8px] bg-[#F6F8FA] border border-[#DCE3E8] hover:bg-[#EEF2F6] text-[#172B3A] font-inter font-semibold text-[16px] leading-[24px] flex items-center justify-center transition-all active:scale-[0.98]"
                >
                  Get Started with Basic
                </a>
              </div>
            </div>

            {/* Card 2: Advance Plan (Featured Dark Card) */}
            <div className="bg-[#001B3A] rounded-[16px] p-8 md:p-10 shadow-[0px_0px_20px_rgba(0,0,0,0.18)] flex flex-col justify-between text-white border border-[#001B3A]">
              <div className="space-y-6">
                {/* Pill Tag */}
                <div className="inline-block px-4 py-1.5 rounded-[8px] bg-white/10 border border-white/15">
                  <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#1DCA76] uppercase">
                    ADVANCED TRADING NETWORK
                  </span>
                </div>

                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="font-inter font-semibold text-[28px] leading-[36px] text-white">
                    Advance Plan
                  </h3>
                  <p className="font-inter font-normal text-[16px] leading-[24px] text-white/80">
                    Engineered for food processors, commodity trading houses, and multi-mandi networks requiring post-trade settlement.
                  </p>
                </div>

                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-inter font-semibold text-[46px] leading-[56px] text-white">
                      {isAnnual ? '₹7,999' : '₹9,999'}
                    </span>
                    <span className="font-inter text-[14px] leading-[21px] text-white/80">
                      / month, {isAnnual ? 'billed annual' : 'billed monthly'}
                    </span>
                  </div>
                  <div className="font-inter text-[12px] leading-[16px] text-[#1DCA76] mt-1">
                    Includes complete multi-branch database
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/20" />

                {/* Features List */}
                <div className="space-y-3 pt-1">
                  <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-white uppercase">
                    EVERYTHING IN BASIC, PLUS:
                  </div>

                  <ul className="space-y-2.5">
                    {advanceFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#1DCA76] flex items-center justify-center shrink-0 mt-0.5 text-[#001B3A]">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-inter text-[14px] leading-[21px] text-white">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button in Flow Green */}
              <div className="mt-8 pt-2">
                <a
                  href="#deploy-advance"
                  className="w-full h-[52px] rounded-[8px] bg-[#1DCA76] hover:bg-[#16B769] text-[#001B3A] font-inter font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Deploy Advance Plan</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="text-[#001B3A]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section ("Move Trade Forward.") */}
      <CtaSection />
    </div>
  );
};

