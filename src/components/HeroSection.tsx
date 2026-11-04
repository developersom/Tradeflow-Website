import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface StageData {
  id: number;
  label: string;
  name: string;
  desc: string;
  issue: string;
  status: string;
  creditNote: string;
  auditTrail: string;
  action: string;
}

const STAGES: StageData[] = [
  {
    id: 1,
    label: 'Contract',
    name: 'Digital Trade Contract',
    desc: 'Bilateral agreement with buyer, seller, rate & brokerage terms',
    issue: 'Contract #TC-8821',
    status: 'Counterparty Signed',
    creditNote: 'Stamp Duty Verified',
    auditTrail: '4 Digital Signatures Locked',
    action: 'Contract executed & dispatch window initialized',
  },
  {
    id: 2,
    label: 'Order',
    name: 'Dispatch & Lot Scheduling',
    desc: 'Break contract into scheduled rakes / trucks without re-entry',
    issue: 'Lot Schedule #L-102',
    status: 'Allocated to Rake #04',
    creditNote: 'E-Way Bill Linked',
    auditTrail: '8 Verification Pings',
    action: 'Trucks loaded at siding & gate-pass generated',
  },
  {
    id: 3,
    label: 'Delivery',
    name: 'Gate Inward & Weighment',
    desc: 'Real-time arrival confirmation, gross-tare weighbridge slips',
    issue: 'Weighbridge Gross 52.4 MT',
    status: 'Tare Verified (Slip #WB-99)',
    creditNote: 'Moisture 11.2% (Accepted)',
    auditTrail: '12 Geo-Tags Recorded',
    action: 'Unloading complete; quality certificate uploaded',
  },
  {
    id: 4,
    label: 'Payment',
    name: 'Payment & Advance Clearance',
    desc: 'Bank reconciliation, RTGS integration and brokerage calculations',
    issue: 'Advance ₹10,00,000',
    status: 'Cleared via UTR #HDFC092',
    creditNote: 'Brokerage TDS Deducted',
    auditTrail: '14 Banking Logs Verified',
    action: 'Balance payment triggered against final weight report',
  },
  {
    id: 5,
    label: 'Settlement',
    name: 'Final Trade Settlement',
    desc: 'Rate adjustments, quality deductions & mutual confirmation',
    issue: 'Net Weight 498.40 MT',
    status: 'Debit/Credit Match Confirmed',
    creditNote: 'Final Statement Drafted',
    auditTrail: '16 Financial Ledgers Reconciled',
    action: 'Mutual ledger signs collected across counterparties',
  },
  {
    id: 6,
    label: 'Resolution',
    name: 'Post-Trade Resolution & Compliance',
    desc: 'Dispute closure, debit/credit notes & tax compliance',
    issue: '1.60 MT Weighbridge Variance',
    status: 'Mutually Accepted via Slip',
    creditNote: 'Prepared (WCN-2026-402)',
    auditTrail: '18 Timestamped Events Locked',
    action: 'Issue GST Credit Note #CN-402 & archive closed trade dossier',
  },
];

export const HeroSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(6);
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[5];

  return (
    <section className="relative w-full bg-[#F6F8FA] pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative Concentric Ellipses from Figma specs */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none select-none">
        {/* Ellipse 3 - 995.59px Dashed */}
        <div
          className="absolute rounded-full border-[2.14px] border-dashed border-[#8A9AA6]/10"
          style={{
            width: '995.59px',
            height: '995.59px',
            left: 'calc(50% - 995.59px/2)',
            top: 'calc(50% - 995.59px/2)',
          }}
        />
        {/* Ellipse 2 - 888.76px Solid */}
        <div
          className="absolute rounded-full border-[2.14px] border-solid border-[#8A9AA6]/10"
          style={{
            width: '888.76px',
            height: '888.76px',
            left: 'calc(50% - 888.76px/2)',
            top: 'calc(50% - 888.76px/2)',
          }}
        />
        {/* Ellipse 1 - 777.67px Solid */}
        <div
          className="absolute rounded-full border-[2.14px] border-solid border-[#8A9AA6]/10"
          style={{
            width: '777.67px',
            height: '777.67px',
            left: 'calc(50% - 777.67px/2)',
            top: 'calc(50% - 777.67px/2)',
          }}
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Top Label */}
        <div className="inline-block mb-4 text-center">
          <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
            CONNECTED TRADE MANAGEMENT
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-inter font-bold text-[44px] md:text-[62px] lg:text-[72px] leading-[1.12] tracking-[-1.5px] text-center max-w-[1010px] text-[#001B3A]">
          The Connected Way to{' '}
          <span className="text-[#0057AC]">Manage Trade.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-center text-[#5F7180] max-w-[712px]">
          Manage contracts, orders, payments, settlements and everything that follows in one connected workflow.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {/* Primary CTA */}
          <a
            href="#book-demo"
            className="w-[159px] h-[46px] rounded-[8px] bg-[#001B3A] border border-[#001B3A] text-white flex items-center justify-center gap-2 font-inter font-normal text-[16px] leading-[24px] hover:bg-[#002752] transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight size={16} strokeWidth={2} className="text-white" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="w-[168px] h-[46px] rounded-[8px] border border-[#001B3A] bg-transparent text-[#001B3A] flex items-center justify-center font-inter font-normal text-[16px] leading-[24px] hover:bg-[#001B3A]/5 transition-all active:scale-[0.98]"
          >
            See How It Works
          </a>
        </div>

        {/* Hero Dashboard Preview Card (Frame 39 in Figma) */}
        <div className="mt-16 w-full max-w-[1084px] bg-white border border-[#DCE3E8] rounded-[24px] md:rounded-[32px] shadow-[0px_0px_24px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300">
          {/* Dark Navy Header Strip */}
          <div className="bg-[#001B3A] px-6 py-3.5 flex flex-wrap items-center justify-between border-b border-[#001B3A]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1DCA76] animate-pulse" />
              <span className="font-mono text-[11px] md:text-[12px] font-medium tracking-[0.08em] text-[#E2E8F0] uppercase">
                TRADEFLOW360 · TRADE JOURNEY INTERFACE
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-inter text-[12px] text-white/90">
              <span className="text-white/60">TRADE #TF-24081 ·</span>
              <span className="text-[#1DCA76] font-medium">Active Lifecycle</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Trade Info Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#DCE3E8]/60">
              <div className="flex items-center gap-2">
                <span className="font-inter font-bold text-[14px] text-[#001B3A] tracking-tight">
                  TRADE #TF-24081
                </span>
                <span className="text-[#DCE3E8]">|</span>
                <span className="font-inter text-[13px] text-[#5F7180]">
                  Single Connected Trade Record
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8FAF1] border border-[#1DCA76]/30">
                <span className="w-2 h-2 rounded-full bg-[#1DCA76]" />
                <span className="font-inter text-[12px] font-semibold text-[#001B3A]">
                  Stage {activeStage.id < 10 ? `0${activeStage.id}` : activeStage.id} of 06 · {activeStage.label}
                </span>
              </div>
            </div>

            {/* 5 Key Metric Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-1">
              <div>
                <div className="font-inter text-[11px] font-medium uppercase tracking-[0.06em] text-[#8A9AA6]">
                  SELLER
                </div>
                <div className="font-inter font-semibold text-[16px] text-[#172B3A] mt-0.5">
                  ABC Traders
                </div>
              </div>

              <div>
                <div className="font-inter text-[11px] font-medium uppercase tracking-[0.06em] text-[#8A9AA6]">
                  BUYER
                </div>
                <div className="font-inter font-semibold text-[16px] text-[#172B3A] mt-0.5">
                  XYZ Foods
                </div>
              </div>

              <div>
                <div className="font-inter text-[11px] font-medium uppercase tracking-[0.06em] text-[#8A9AA6]">
                  COMMODITY
                </div>
                <div className="font-inter font-semibold text-[16px] text-[#172B3A] mt-0.5">
                  Wheat
                </div>
              </div>

              <div>
                <div className="font-inter text-[11px] font-medium uppercase tracking-[0.06em] text-[#8A9AA6]">
                  QUANTITY
                </div>
                <div className="font-inter font-semibold text-[16px] text-[#172B3A] mt-0.5">
                  500 MT
                </div>
              </div>

              <div>
                <div className="font-inter text-[11px] font-medium uppercase tracking-[0.06em] text-[#8A9AA6]">
                  RATE
                </div>
                <div className="font-inter font-semibold text-[16px] text-[#172B3A] mt-0.5">
                  ₹24,500
                </div>
              </div>
            </div>

            {/* Stepper Timeline Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <span className="font-inter text-[11px] font-semibold tracking-[0.06em] text-[#8A9AA6] uppercase">
                  CONNECTED TRADE LIFECYCLE (CLICK ANY STAGE)
                </span>
                <span className="font-inter text-[12px] font-medium text-[#0057AC]">
                  1 Claim Resolved · Audit Ready
                </span>
              </div>

              {/* Progress Line & 6 Stages */}
              <div className="relative flex items-center justify-between mt-2 mb-6">
                {/* Connecting Background Line */}
                <div className="absolute top-[16px] left-[20px] right-[20px] h-[2px] bg-[#DCE3E8] z-0" />

                {/* Connecting Active Filled Line */}
                <div
                  className="absolute top-[16px] left-[20px] h-[2px] bg-[#1DCA76] transition-all duration-300 z-0"
                  style={{
                    width: `${((activeStageId - 1) / (STAGES.length - 1)) * 95}%`,
                  }}
                />

                {/* 6 Stage Buttons */}
                {STAGES.map((stage) => {
                  const isDone = stage.id < activeStageId;
                  const isActive = stage.id === activeStageId;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStageId(stage.id)}
                      className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                    >
                      {/* Node Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#1DCA76] text-white ring-4 ring-[#1DCA76]/20 font-inter font-bold text-[12px]'
                            : isDone
                            ? 'bg-[#001B3A] text-white'
                            : 'bg-white border-2 border-[#DCE3E8] text-[#8A9AA6]'
                        }`}
                      >
                        {isDone ? (
                          <Check size={14} strokeWidth={2.5} />
                        ) : (
                          <span className="text-[12px] font-semibold leading-none">
                            {stage.id < 10 ? `0${stage.id}` : stage.id}
                          </span>
                        )}
                      </div>

                      {/* Stage Label */}
                      <span
                        className={`mt-2 font-inter text-[12px] font-medium transition-colors ${
                          isActive
                            ? 'text-[#1DCA76] font-semibold'
                            : isDone
                            ? 'text-[#001B3A]'
                            : 'text-[#8A9AA6]'
                        }`}
                      >
                        {stage.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Detail Panel (Light Gray / Blue background card) */}
            <div className="bg-[#F6F8FA] border border-[#DCE3E8] rounded-[16px] p-5 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#DCE3E8]/80">
                <div>
                  <h4 className="font-inter font-bold text-[16px] text-[#172B3A]">
                    {activeStage.name}
                  </h4>
                  <p className="font-inter text-[12px] text-[#5F7180] mt-0.5">
                    {activeStage.desc}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-[6px] bg-white border border-[#DCE3E8] shadow-2xs">
                  <span className="font-inter font-bold text-[12px] text-[#0057AC]">
                    STAGE {activeStage.id < 10 ? `0${activeStage.id}` : activeStage.id}
                  </span>
                </div>
              </div>

              {/* 4 Detail Grid Cells */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-3.5 rounded-[10px] border border-[#DCE3E8]/70 shadow-2xs">
                  <div className="font-inter text-[11px] font-medium text-[#8A9AA6] uppercase">
                    Issue #ISS-109
                  </div>
                  <div className="font-inter font-semibold text-[13px] text-[#172B3A] mt-1 truncate">
                    {activeStage.issue}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-[10px] border border-[#DCE3E8]/70 shadow-2xs">
                  <div className="font-inter text-[11px] font-medium text-[#8A9AA6] uppercase">
                    Resolution Status
                  </div>
                  <div className="font-inter font-semibold text-[13px] text-[#0057AC] mt-1 truncate">
                    {activeStage.status}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-[10px] border border-[#DCE3E8]/70 shadow-2xs">
                  <div className="font-inter text-[11px] font-medium text-[#8A9AA6] uppercase">
                    GST Credit Note
                  </div>
                  <div className="font-inter font-semibold text-[13px] text-[#172B3A] mt-1 truncate">
                    {activeStage.creditNote}
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-[10px] border border-[#DCE3E8]/70 shadow-2xs">
                  <div className="font-inter text-[11px] font-medium text-[#8A9AA6] uppercase">
                    Trade Audit Trail
                  </div>
                  <div className="font-inter font-semibold text-[13px] text-[#172B3A] mt-1 truncate">
                    {activeStage.auditTrail}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[12px] font-inter">
              <div className="flex items-center gap-2 text-[#172B3A]">
                <span className="w-2 h-2 rounded-full bg-[#1DCA76]" />
                <span className="font-medium">
                  <strong className="font-semibold text-[#001B3A]">NEXT ACTION:</strong>{' '}
                  {activeStage.action}
                </span>
              </div>
              <div className="text-[#8A9AA6] font-normal">
                Final Stage · Auto-Queued
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

