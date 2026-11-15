import React from 'react';
import {
  FileText,
  Truck,
  Scale,
  CreditCard,
  LogOut,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import type { User } from '@supabase/supabase-js';

interface DashboardSectionProps {
  user: User | null;
  onSignOut: () => void;
  onNavigateHome: () => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  user,
  onSignOut,
  onNavigateHome,
}) => {
  const userName =
    user?.user_metadata?.full_name ||
    user?.email?.split('@')[0] ||
    'Trader';
  const companyName =
    user?.user_metadata?.company_name || 'Agri Commodity Operations';

  return (
    <div className="w-full min-h-[calc(100vh-79px)] bg-[#F6F8FA] pb-20">
      {/* Top Banner with Concentric Glow */}
      <section className="relative w-full bg-[#001B3A] text-white py-12 md:py-16 overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-[#1DCA76]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-[#0057AC]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1DCA76] animate-pulse" />
              <span className="font-mono text-[12px] tracking-wider text-[#1DCA76] uppercase">
                INSIDER WORKSPACE • AUTHENTICATED
              </span>
            </div>
            <h1 className="font-inter font-bold text-[32px] sm:text-[40px] leading-[1.2] text-white">
              Welcome back, {userName}
            </h1>
            <p className="mt-1 text-[15px] text-white/70 font-inter">
              {companyName} • Account ID: <span className="font-mono text-white/90">{user?.id?.slice(0, 8)}...</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-[8px] border border-white/20 text-white hover:bg-white/10 font-inter text-[14px] font-medium transition-all cursor-pointer"
            >
              Public Site
            </button>
            <button
              onClick={onSignOut}
              className="px-4 py-2.5 rounded-[8px] bg-white/10 hover:bg-red-500/20 text-white hover:text-red-200 border border-white/20 hover:border-red-400 font-inter text-[14px] font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Insider Content */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 -mt-6">
        {/* Next Insider Pages Notice Card */}
        <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-6 md:p-8 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-l-[#1DCA76]">
          <div className="space-y-1.5 max-w-[800px]">
            <div className="inline-flex items-center gap-2 font-inter text-[12px] font-semibold text-[#0057AC] uppercase tracking-wider">
              <Sparkles size={15} />
              <span>Insider Portal Foundation Ready</span>
            </div>
            <h2 className="font-inter font-bold text-[20px] md:text-[22px] text-[#001B3A]">
              Supabase Authentication is Live & Connected!
            </h2>
            <p className="font-inter text-[15px] text-[#5F7180] leading-[22px]">
              You are securely signed in. When you’re ready, share your insider pages design (contract management, order dispatch, live weighbridge reconciliations, or accounting ledgers) and we will plug them directly into this workspace.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-2 rounded-[8px] bg-[#1DCA76]/10 text-[#0057AC] font-inter text-[13px] font-semibold border border-[#1DCA76]/30">
              Session Active
            </div>
          </div>
        </div>

        {/* Demo Insider Metric Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-sm">
            <div className="flex items-center justify-between text-[#5F7180] mb-3">
              <span className="font-inter text-[13px] font-medium">Active Contracts</span>
              <FileText size={18} className="text-[#0057AC]" />
            </div>
            <div className="font-inter font-bold text-[28px] text-[#001B3A]">12 Saudas</div>
            <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#1DCA76] font-medium">
              <TrendingUp size={14} />
              <span>₹4.2 Cr commitments locked</span>
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-sm">
            <div className="flex items-center justify-between text-[#5F7180] mb-3">
              <span className="font-inter text-[13px] font-medium">Live Dispatches</span>
              <Truck size={18} className="text-[#0057AC]" />
            </div>
            <div className="font-inter font-bold text-[28px] text-[#001B3A]">28 Trucks</div>
            <div className="mt-2 text-[12px] text-[#5F7180]">
              In transit across MP & Maharashtra
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-sm">
            <div className="flex items-center justify-between text-[#5F7180] mb-3">
              <span className="font-inter text-[13px] font-medium">Weighbridge Slips</span>
              <Scale size={18} className="text-[#0057AC]" />
            </div>
            <div className="font-inter font-bold text-[28px] text-[#001B3A]">100% Match</div>
            <div className="mt-2 text-[12px] text-[#1DCA76] font-medium">
              Within 0.35% contracted tolerance
            </div>
          </div>

          <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-sm">
            <div className="flex items-center justify-between text-[#5F7180] mb-3">
              <span className="font-inter text-[13px] font-medium">Settlement Tranches</span>
              <CreditCard size={18} className="text-[#0057AC]" />
            </div>
            <div className="font-inter font-bold text-[28px] text-[#001B3A]">4 Ready</div>
            <div className="mt-2 text-[12px] text-[#0057AC] font-medium">
              RTGS payment release queued
            </div>
          </div>
        </div>

        {/* Recent Trades Table Preview */}
        <div className="bg-white rounded-[20px] border border-[#DCE3E8] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#DCE3E8] flex items-center justify-between">
            <div>
              <h3 className="font-inter font-bold text-[18px] text-[#001B3A]">
                Recent Connected Trade Records
              </h3>
              <p className="text-[13px] text-[#5F7180] mt-0.5">
                Real-time sync between contract terms, weighments, and bilty slips
              </p>
            </div>
            <span className="text-[12px] font-mono text-[#0057AC] bg-[#0057AC]/10 px-3 py-1 rounded-full font-medium">
              Live Feed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-inter text-[14px]">
              <thead className="bg-[#F6F8FA] border-b border-[#DCE3E8] text-[#5F7180] text-[12px] uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3.5 px-6">Trade ID</th>
                  <th className="py-3.5 px-6">Commodity</th>
                  <th className="py-3.5 px-6">Counterparty</th>
                  <th className="py-3.5 px-6">Quantity</th>
                  <th className="py-3.5 px-6">Rate</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE3E8] text-[#172B3A]">
                <tr className="hover:bg-[#F6F8FA]/60 transition-colors">
                  <td className="py-4 px-6 font-mono font-medium text-[#0057AC]">#TF-24081</td>
                  <td className="py-4 px-6 font-medium">Soybean (Grade A)</td>
                  <td className="py-4 px-6 text-[#5F7180]">Shree Ganesh Solvex</td>
                  <td className="py-4 px-6 font-medium">500 MT</td>
                  <td className="py-4 px-6">₹4,850/Qtl</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Weighbridge Reconciled
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-[13px] font-medium text-[#0057AC] hover:underline cursor-pointer">
                      View Dossier →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F6F8FA]/60 transition-colors">
                  <td className="py-4 px-6 font-mono font-medium text-[#0057AC]">#TF-24082</td>
                  <td className="py-4 px-6 font-medium">Wheat (Sharbati)</td>
                  <td className="py-4 px-6 text-[#5F7180]">Bhawani Roller Mills</td>
                  <td className="py-4 px-6 font-medium">1,200 MT</td>
                  <td className="py-4 px-6">₹2,420/Qtl</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      Dispatch in Progress
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-[13px] font-medium text-[#0057AC] hover:underline cursor-pointer">
                      View Dossier →
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-[#F6F8FA]/60 transition-colors">
                  <td className="py-4 px-6 font-mono font-medium text-[#0057AC]">#TF-24083</td>
                  <td className="py-4 px-6 font-medium">Chana (Bengal Gram)</td>
                  <td className="py-4 px-6 text-[#5F7180]">Kothari Agro Overseas</td>
                  <td className="py-4 px-6 font-medium">350 MT</td>
                  <td className="py-4 px-6">₹5,900/Qtl</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Contract Executed
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-[13px] font-medium text-[#0057AC] hover:underline cursor-pointer">
                      View Dossier →
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
