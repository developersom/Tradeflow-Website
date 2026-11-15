import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Users,
  Package,
  Layers,
  Receipt,
  BookOpen,
  ArrowLeftRight,
  Clock,
  ShieldCheck,
  Calendar,
  Bell,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Download,
  Link as LinkIcon,
  Wallet,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  LogOut,
  ExternalLink,
  CheckCircle2,
  Settings,
} from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { NewContractSection } from './NewContractSection';

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
  // Active Sidebar Item
  const [activeNav, setActiveNav] = useState<string>('dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [timeRange, setTimeRange] = useState<string>('Last 6 Months');
  const [timeRangeDropdown, setTimeRangeDropdown] = useState<boolean>(false);

  // Donut chart hover slice state
  const [activeCommodityIndex, setActiveCommodityIndex] = useState<number>(0);

  // Quick Action Modal / Notification State
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // User details
  const userName =
    user?.user_metadata?.full_name ||
    user?.email?.split('@')[0] ||
    'Shaiyna';

  const userInitials = userName
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'SS';

  // Contracts Table Initial Data
  const initialContracts = [
    {
      id: '#C-001',
      date: '27 Oct 2026',
      party: 'Global Traders Ltd',
      commodity: 'Wheat',
      quantity: '500 MT',
      value: '₹8,50,000',
      status: 'Active',
      statusColor: 'bg-[#E6F9F0] text-[#1DCA76] border-[#1DCA76]/30',
    },
    {
      id: '#C-002',
      date: '26 Oct 2026',
      party: 'Agro Exports',
      commodity: 'Yellow Corn',
      quantity: '300 MT',
      value: '₹4,80,000',
      status: 'In Progress',
      statusColor: 'bg-[#EBF5FF] text-[#0057AC] border-[#0057AC]/30',
    },
    {
      id: '#C-003',
      date: '25 Oct 2026',
      party: 'Farmers Coop Federation',
      commodity: 'Basmati Rice',
      quantity: '200 MT',
      value: '₹5,60,000',
      status: 'Pending',
      statusColor: 'bg-[#FFF4E6] text-[#D97706] border-[#D97706]/30',
    },
    {
      id: '#C-004',
      date: '24 Oct 2026',
      party: 'Sunrise Foods',
      commodity: 'Soybean',
      quantity: '400 MT',
      value: '₹6,20,000',
      status: 'Active',
      statusColor: 'bg-[#E6F9F0] text-[#1DCA76] border-[#1DCA76]/30',
    },
  ];

  const [contractsList, setContractsList] = useState(initialContracts);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'contracts', label: 'Contracts', icon: FileText, count: contractsList.length },
    { id: 'parties', label: 'Parties', icon: Users, count: 7 },
    { id: 'commodities', label: 'Commodities', icon: Package, count: 6 },
    { id: 'unit-master', label: 'Unit Master', icon: Layers, count: 8 },
    { id: 'invoices', label: 'Invoices', icon: Receipt, count: 4 },
    { id: 'ledger', label: 'Ledger & Balances', icon: BookOpen },
    { id: 'settlements', label: 'Settlements', icon: ArrowLeftRight },
    { id: 'follow-ups', label: 'Follow-ups', icon: Clock, count: 6, alert: true },
    { id: 'compliance', label: 'After-sales & Compliance', icon: ShieldCheck },
  ];

  // Donut Commodities Data
  const commodities = [
    { name: 'Wheat', pct: 35, value: '₹8,50,000', volume: '500 MT traded', color: '#0057AC' },
    { name: 'Yellow Corn', pct: 25, value: '₹4,80,000', volume: '300 MT traded', color: '#F59E0B' },
    { name: 'Basmati Rice', pct: 20, value: '₹5,60,000', volume: '200 MT traded', color: '#8B5CF6' },
    { name: 'Soybean', pct: 20, value: '₹6,20,000', volume: '400 MT traded', color: '#1DCA76' },
  ];

  // Priority Tasks Data
  const priorityTasks = [
    {
      id: 1,
      title: 'Discrepancy in Wheat moisture test report',
      desc: 'Lab reported 12.8% moisture against contract tolerance of 12.0%',
      type: 'warning',
    },
    {
      id: 2,
      title: 'Weighbridge slip missing for truck MH-12-...',
      desc: 'Dispatch of 40 MT Maize awaiting original scale slip upload',
      type: 'alert',
    },
    {
      id: 3,
      title: 'Form H declaration pending for GST waiver',
      desc: 'Exemption certificate required for interstate sales reconciliation',
      type: 'pending',
    },
    {
      id: 4,
      title: 'Bank guarantee renewal acknowledgement',
      desc: 'Performance bank guarantee expires in 14 days with SBI Mandi branch',
      type: 'notice',
    },
    {
      id: 5,
      title: 'Quality inspection sign-off from Surveyor',
      desc: 'SGS report pending for 150 MT Yellow Corn lot at Kandla port',
      type: 'pending',
    },
  ];

  return (
    <div className="flex h-screen w-full bg-[#F6F8FA] overflow-hidden font-inter text-[#172B3A]">
      {/* 1. LEFT SIDEBAR (Frame 1707483348 matching Figma Specs) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[240px] bg-[#001733] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Header */}
          <div className="h-[76px] px-6 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
              {/* Distinctive TradeFlow Logo */}
              <div className="flex items-center">
                <span className="font-bold text-[19px] tracking-tight text-white">TradeFlow</span>
                <span className="ml-1.5 px-1.5 py-0.5 text-[11px] font-bold rounded bg-[#1DCA76] text-[#001B3A]">
                  360
                </span>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden text-white/60 hover:text-white p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] text-[13.5px] font-medium transition-all group cursor-pointer ${
                    isActive
                      ? 'bg-[#0057AC] text-white shadow-sm font-semibold'
                      : 'text-[#8A9AA6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={isActive ? 'text-white' : 'text-[#8A9AA6] group-hover:text-white'}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.count !== undefined && (
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                        item.alert
                          ? 'bg-[#EF4444] text-white font-bold'
                          : isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Settings button matching Figma screenshot */}
          <div className="px-3 pb-2">
            <button
              onClick={() => {
                setActiveNav('settings');
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[8px] text-[13.5px] font-medium transition-all group cursor-pointer ${
                activeNav === 'settings'
                  ? 'bg-[#0057AC] text-white shadow-sm font-semibold'
                  : 'text-[#8A9AA6] hover:text-white hover:bg-white/5'
              }`}
            >
              <Settings
                size={18}
                className={activeNav === 'settings' ? 'text-white' : 'text-[#8A9AA6] group-hover:text-white'}
              />
              <span>Settings</span>
            </button>
          </div>

          {/* Bottom Sidebar Action: Return to Public Site */}
          <div className="p-4 border-t border-white/5 space-y-2">
            <button
              onClick={onNavigateHome}
              className="w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[12.5px] text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={15} />
                <span>Visit Landing Page</span>
              </span>
            </button>
            <button
              onClick={onSignOut}
              className="w-full flex items-center justify-between px-3 py-2 rounded-[8px] text-[12.5px] text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <LogOut size={15} />
                <span>Sign Out</span>
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {activeNav === 'contracts' ? (
          <div className="flex-1 overflow-y-auto">
            <NewContractSection
              onBackToDashboard={() => setActiveNav('dashboard')}
              onContractSaved={(newContract) => {
                setContractsList([newContract, ...contractsList]);
                setActiveNav('dashboard');
              }}
            />
          </div>
        ) : (
          <>
            {/* TOP BAR */}
            <header className="h-[76px] bg-white border-b border-[#DCE3E8] px-6 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden text-[#172B3A] p-1.5 rounded-lg hover:bg-gray-100"
            >
              <Menu size={22} />
            </button>

            {/* Greeting Header */}
            <div>
              <h1 className="font-inter font-bold text-[20px] md:text-[22px] leading-tight text-[#001B3A]">
                Good morning, {userName}
              </h1>
              <p className="font-inter text-[13px] text-[#5F7180]">
                Here's what's happening with your trading business today.
              </p>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3.5">
            {/* Date Badge Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-[#F6F8FA] text-[13px] text-[#5F7180] font-medium">
              <Calendar size={15} className="text-[#0057AC]" />
              <span>Wed, 28 Oct 2026</span>
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 rounded-[8px] border border-[#DCE3E8] bg-white hover:bg-gray-50 text-[#5F7180] transition-colors cursor-pointer"
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#EF4444] ring-2 ring-white" />
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-[12px] shadow-xl border border-[#DCE3E8] py-2 z-50">
                  <div className="px-4 py-2 border-b border-[#DCE3E8] flex items-center justify-between">
                    <span className="font-semibold text-[13px] text-[#001B3A]">Notifications</span>
                    <span className="text-[11px] font-mono text-[#0057AC] bg-[#0057AC]/10 px-2 py-0.5 rounded-full">
                      2 Unread
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                    <div className="p-3 hover:bg-gray-50 transition-colors text-[12.5px]">
                      <div className="font-medium text-[#001B3A]">Weighbridge matched for #C-001</div>
                      <div className="text-gray-500 text-[11.5px] mt-0.5">500 MT Wheat verified at siding</div>
                      <span className="text-[10px] text-gray-400 mt-1 block">12 mins ago</span>
                    </div>
                    <div className="p-3 hover:bg-gray-50 transition-colors text-[12.5px]">
                      <div className="font-medium text-[#EF4444]">Moisture report flagged</div>
                      <div className="text-gray-500 text-[11.5px] mt-0.5">Discrepancy of 0.8% detected</div>
                      <span className="text-[10px] text-gray-400 mt-1 block">1 hour ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar Circle */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="w-10 h-10 rounded-full bg-[#001B3A] text-white font-semibold text-[14px] flex items-center justify-center hover:opacity-90 transition-opacity ring-2 ring-[#DCE3E8] cursor-pointer"
              >
                {userInitials}
              </button>

              {/* User Dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-[12px] shadow-xl border border-[#DCE3E8] py-2 z-50">
                  <div className="px-4 py-2 border-b border-[#DCE3E8]">
                    <div className="font-semibold text-[13px] text-[#001B3A] truncate">{userName}</div>
                    <div className="text-[11.5px] text-gray-500 truncate">{user?.email || 'shaiyna@tradeflow.in'}</div>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigateHome();
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] text-[#5F7180] hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Public Home Page</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onSignOut();
                    }}
                    className="w-full text-left px-4 py-2 text-[13px] text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer border-t border-gray-100"
                  >
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* DASHBOARD SCROLLABLE BODY */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* SECTION 1: TOP 4 METRICS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Total Receivables */}
            <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#E6F9F0] text-[#1DCA76] flex items-center justify-center">
                  <Download size={18} />
                </div>
                {/* Sparkline curve (Green) */}
                <div className="w-20 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M0 35 Q 25 30, 50 15 T 100 5"
                      fill="none"
                      stroke="#1DCA76"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="font-inter text-[13px] text-[#5F7180]">Total Receivables</div>
              <div className="font-inter font-bold text-[26px] text-[#001B3A] mt-1 tracking-tight">
                ₹12,48,500
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#1DCA76]">
                <ArrowUpRight size={14} strokeWidth={2.5} />
                <span>+8% vs last month</span>
              </div>
            </div>

            {/* 2. Total Payables */}
            <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#FEE2E2] text-[#EF4444] flex items-center justify-center">
                  <Calendar size={18} />
                </div>
                {/* Sparkline curve (Red) */}
                <div className="w-20 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M0 32 Q 30 35, 60 18 T 100 8"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="font-inter text-[13px] text-[#5F7180]">Total Payables</div>
              <div className="font-inter font-bold text-[26px] text-[#001B3A] mt-1 tracking-tight">
                ₹7,36,200
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#EF4444]">
                <ArrowUpRight size={14} strokeWidth={2.5} />
                <span>+12% vs last month</span>
              </div>
            </div>

            {/* 3. Net Outstanding */}
            <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#EBF5FF] text-[#0057AC] flex items-center justify-center">
                  <LinkIcon size={18} />
                </div>
                {/* Sparkline curve (Blue) */}
                <div className="w-20 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M0 30 Q 35 32, 65 14 T 100 8"
                      fill="none"
                      stroke="#0057AC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="font-inter text-[13px] text-[#5F7180]">Net Outstanding</div>
              <div className="font-inter font-bold text-[26px] text-[#001B3A] mt-1 tracking-tight">
                ₹5,12,300
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#1DCA76]">
                <ArrowUpRight size={14} strokeWidth={2.5} />
                <span>+5% vs last month</span>
              </div>
            </div>

            {/* 4. Pending Settlement */}
            <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-[10px] bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center">
                  <Wallet size={18} />
                </div>
                {/* Sparkline curve (Purple) */}
                <div className="w-20 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path
                      d="M0 32 Q 30 35, 60 16 T 100 6"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="font-inter text-[13px] text-[#5F7180]">Pending Settlement</div>
              <div className="font-inter font-bold text-[26px] text-[#001B3A] mt-1 tracking-tight">
                ₹3,48,800
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#EF4444]">
                <ArrowUpRight size={14} strokeWidth={2.5} />
                <span>+18% vs last month</span>
              </div>
            </div>
          </div>

          {/* SECTION 2: MIDDLE ROW (Brokerage Card, Donut Chart, Quick Counts) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1. Total Brokerage Card (Dark Blue Card matching #001B3A) */}
            <div className="lg:col-span-4 bg-[#001B3A] text-white rounded-[20px] p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#0057AC]/30 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between text-white/70 text-[12px] font-semibold tracking-wider uppercase font-inter">
                  <span>TOTAL BROKERAGE</span>
                  <button
                    onClick={() => setActiveModal('brokerage')}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    title="View Breakdown"
                  >
                    <FileText size={16} />
                  </button>
                </div>

                <div className="font-inter font-bold text-[34px] sm:text-[38px] text-white mt-4 tracking-tight">
                  ₹18,45,200
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1DCA76]/20 border border-[#1DCA76]/30 text-[#1DCA76] text-[12px] font-semibold">
                  <TrendingUp size={14} />
                  <span>+24.8% growth from last year</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[13px] text-white/80">
                <span className="text-white/60">Earned across</span>
                <span className="px-3 py-1 rounded-[6px] bg-white/10 text-white font-medium text-[12.5px]">
                  128 closed contracts
                </span>
              </div>
            </div>

            {/* 2. Top Traded Commodities (Interactive Donut Chart) */}
            <div className="lg:col-span-4 bg-white rounded-[20px] border border-[#DCE3E8] p-6 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0057AC]" />
                  <h3 className="font-inter font-bold text-[15px] text-[#001B3A]">
                    Top Traded Commodities
                  </h3>
                </div>
                <button
                  onClick={() => setActiveNav('commodities')}
                  className="font-inter text-[12px] font-semibold text-[#0057AC] hover:underline cursor-pointer"
                >
                  View All &gt;
                </button>
              </div>

              {/* Donut SVG Area */}
              <div className="my-4 flex flex-col items-center justify-center relative">
                <div className="relative w-[180px] h-[180px]">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
                    {/* Slices: Wheat 35%, Corn 25%, Rice 20%, Soybean 20% */}
                    {/* Circumference = 2 * PI * 38 ~= 238.76 */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#0057AC"
                      strokeWidth="14"
                      strokeDasharray="83.5 155.2"
                      strokeDashoffset="0"
                      className="cursor-pointer transition-all hover:stroke-width-[16]"
                      onMouseEnter={() => setActiveCommodityIndex(0)}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#F59E0B"
                      strokeWidth="14"
                      strokeDasharray="59.7 179"
                      strokeDashoffset="-83.5"
                      className="cursor-pointer transition-all hover:stroke-width-[16]"
                      onMouseEnter={() => setActiveCommodityIndex(1)}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#8B5CF6"
                      strokeWidth="14"
                      strokeDasharray="47.75 191"
                      strokeDashoffset="-143.2"
                      className="cursor-pointer transition-all hover:stroke-width-[16]"
                      onMouseEnter={() => setActiveCommodityIndex(2)}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke="#1DCA76"
                      strokeWidth="14"
                      strokeDasharray="47.75 191"
                      strokeDashoffset="-191"
                      className="cursor-pointer transition-all hover:stroke-width-[16]"
                      onMouseEnter={() => setActiveCommodityIndex(3)}
                    />
                  </svg>

                  {/* Centered Donut Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                    <span className="font-inter text-[12px] text-[#5F7180] font-medium">
                      {commodities[activeCommodityIndex].name}
                    </span>
                    <span className="font-inter font-bold text-[24px] text-[#001B3A] leading-tight">
                      {commodities[activeCommodityIndex].pct}%
                    </span>
                    <span className="font-inter text-[11px] text-[#8A9AA6]">
                      {commodities[activeCommodityIndex].value}
                    </span>
                  </div>
                </div>

                {/* Subtitle footer under chart */}
                <div className="mt-3 flex items-center justify-center gap-2 text-[12.5px] text-[#5F7180] font-medium">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: commodities[activeCommodityIndex].color }}
                  />
                  <span>
                    {commodities[activeCommodityIndex].name} • {commodities[activeCommodityIndex].volume}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Quick Action Counters (3 Vertical Cards) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3.5">
              {/* Card 1: Contracts */}
              <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#001B3A] text-white flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="font-inter font-bold text-[20px] text-[#001B3A]">{contractsList.length}</div>
                    <div className="font-inter text-[12.5px] text-[#5F7180]">Total Contracts</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveNav('contracts')}
                  className="px-3.5 py-1.5 rounded-[8px] bg-[#0057AC] hover:bg-[#00478D] text-white text-[12.5px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Create</span>
                </button>
              </div>

              {/* Card 2: Parties */}
              <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E6F9F0] text-[#1DCA76] flex items-center justify-center">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="font-inter font-bold text-[20px] text-[#001B3A]">7</div>
                    <div className="font-inter text-[12.5px] text-[#5F7180]">Total Parties</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal('add-party')}
                  className="px-3.5 py-1.5 rounded-[8px] border border-[#DCE3E8] bg-white hover:bg-gray-50 text-[#172B3A] text-[12.5px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>

              {/* Card 3: Commodities */}
              <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#EBF5FF] text-[#0057AC] flex items-center justify-center">
                    <Package size={18} />
                  </div>
                  <div>
                    <div className="font-inter font-bold text-[20px] text-[#001B3A]">6</div>
                    <div className="font-inter text-[12.5px] text-[#5F7180]">Total Commodities</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal('add-commodity')}
                  className="px-3.5 py-1.5 rounded-[8px] border border-[#DCE3E8] bg-white hover:bg-gray-50 text-[#172B3A] text-[12.5px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 3: OUTSTANDING TREND GRAPH (Wide Chart Card) */}
          <div className="bg-white rounded-[20px] border border-[#DCE3E8] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#E6F9F0] text-[#1DCA76] flex items-center justify-center">
                    <TrendingUp size={15} />
                  </div>
                  <h3 className="font-inter font-bold text-[16px] text-[#001B3A]">
                    Outstanding Trend
                  </h3>
                </div>
                <p className="font-inter text-[13px] text-[#5F7180] mt-0.5">
                  Track receivables and payables over time.
                </p>
              </div>

              {/* Range Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setTimeRangeDropdown(!timeRangeDropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] border border-[#DCE3E8] bg-[#F6F8FA] hover:bg-gray-100 text-[13px] font-medium text-[#172B3A] transition-colors cursor-pointer"
                >
                  <span>{timeRange}</span>
                  <ChevronDown size={14} className="text-[#5F7180]" />
                </button>

                {timeRangeDropdown && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-[8px] shadow-lg border border-[#DCE3E8] py-1 z-30">
                    {['Last 3 Months', 'Last 6 Months', 'Year to Date', 'All Time'].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setTimeRange(r);
                          setTimeRangeDropdown(false);
                        }}
                        className={`w-full text-left px-3.5 py-1.5 text-[12.5px] transition-colors cursor-pointer ${
                          timeRange === r
                            ? 'bg-[#0057AC]/10 text-[#0057AC] font-semibold'
                            : 'text-[#172B3A] hover:bg-gray-50'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Interactive SVG Chart matching Screenshot Curves */}
            <div className="w-full h-[260px] relative">
              <svg viewBox="0 0 900 240" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  {/* Green Area Gradient */}
                  <linearGradient id="receivablesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1DCA76" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#1DCA76" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Blue Area Gradient */}
                  <linearGradient id="payablesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0057AC" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0057AC" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y-Axis Grid Lines */}
                <line x1="40" y1="30" x2="880" y2="30" stroke="#E2E8F0" strokeDasharray="3 3" />
                <text x="5" y="34" fill="#8A9AA6" fontSize="11" fontFamily="Inter">₹20L</text>

                <line x1="40" y1="75" x2="880" y2="75" stroke="#E2E8F0" strokeDasharray="3 3" />
                <text x="5" y="79" fill="#8A9AA6" fontSize="11" fontFamily="Inter">₹15L</text>

                <line x1="40" y1="120" x2="880" y2="120" stroke="#E2E8F0" strokeDasharray="3 3" />
                <text x="5" y="124" fill="#8A9AA6" fontSize="11" fontFamily="Inter">₹10L</text>

                <line x1="40" y1="165" x2="880" y2="165" stroke="#E2E8F0" strokeDasharray="3 3" />
                <text x="5" y="169" fill="#8A9AA6" fontSize="11" fontFamily="Inter">₹5L</text>

                <line x1="40" y1="205" x2="880" y2="205" stroke="#CBD5E1" />
                <text x="15" y="209" fill="#8A9AA6" fontSize="11" fontFamily="Inter">0</text>

                {/* AREA FILLS */}
                {/* Receivables Area */}
                <path
                  d="M 60 140 C 180 120, 260 100, 380 60 C 480 30, 560 85, 660 100 C 760 110, 800 60, 860 40 L 860 205 L 60 205 Z"
                  fill="url(#receivablesGrad)"
                />
                {/* Payables Area */}
                <path
                  d="M 60 180 C 180 170, 260 160, 380 155 C 480 150, 560 140, 660 135 C 760 130, 800 145, 860 145 L 860 205 L 60 205 Z"
                  fill="url(#payablesGrad)"
                />

                {/* LINE 1: RECEIVABLES (Flow Green) */}
                <path
                  d="M 60 140 C 180 120, 260 100, 380 60 C 480 30, 560 85, 660 100 C 760 110, 800 60, 860 40"
                  fill="none"
                  stroke="#1DCA76"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* LINE 2: PAYABLES (Trade Blue) */}
                <path
                  d="M 60 180 C 180 170, 260 160, 380 155 C 480 150, 560 140, 660 135 C 760 130, 800 145, 860 145"
                  fill="none"
                  stroke="#0057AC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* DATA POINTS & CIRCLES */}
                {/* Receivables dots */}
                <circle cx="60" cy="140" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />
                <circle cx="220" cy="110" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />
                <circle cx="380" cy="60" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />
                <circle cx="540" cy="85" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />
                <circle cx="700" cy="100" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />
                <circle cx="860" cy="40" r="4.5" fill="#FFFFFF" stroke="#1DCA76" strokeWidth="2.5" />

                {/* Payables dots */}
                <circle cx="60" cy="180" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />
                <circle cx="220" cy="165" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />
                <circle cx="380" cy="155" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />
                <circle cx="540" cy="145" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />
                <circle cx="700" cy="135" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />
                <circle cx="860" cy="145" r="4.5" fill="#FFFFFF" stroke="#0057AC" strokeWidth="2.5" />

                {/* X-AXIS LABELS */}
                <text x="60" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">Apr</text>
                <text x="220" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">May</text>
                <text x="380" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">Jun</text>
                <text x="540" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">Jul</text>
                <text x="700" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">Aug</text>
                <text x="860" y="225" textAnchor="middle" fill="#8A9AA6" fontSize="12" fontFamily="Inter">Sep</text>
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="mt-4 pt-3 border-t border-[#DCE3E8]/60 flex items-center justify-center gap-6 text-[13px] font-medium text-[#5F7180]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#1DCA76]" />
                <span>Receivables</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0057AC]" />
                <span>Payables</span>
              </div>
            </div>
          </div>

          {/* SECTION 4: RECENT CONTRACTS & PRIORITY TASKS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Recent Contracts Table */}
            <div className="lg:col-span-8 bg-white rounded-[20px] border border-[#DCE3E8] p-6 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#EBF5FF] text-[#0057AC] flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-[16px] text-[#001B3A]">
                      Recent Contracts
                    </h3>
                    <p className="font-inter text-[12.5px] text-[#5F7180]">
                      Your latest contracts and their current status.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveNav('contracts')}
                  className="font-inter text-[12.5px] font-semibold text-[#0057AC] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All</span>
                  <span>→</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-inter text-[13.5px]">
                  <thead>
                    <tr className="text-[#8A9AA6] text-[11px] uppercase tracking-wider font-semibold border-b border-[#DCE3E8]">
                      <th className="pb-3 pr-4">CONTRACT</th>
                      <th className="pb-3 px-4">DATE</th>
                      <th className="pb-3 px-4">PARTY</th>
                      <th className="pb-3 px-4">COMMODITY</th>
                      <th className="pb-3 px-4">QUANTITY</th>
                      <th className="pb-3 px-4">VALUE</th>
                      <th className="pb-3 pl-4 text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DCE3E8]/60 text-[#172B3A]">
                    {contractsList.map((c) => (
                      <tr key={c.id} className="hover:bg-[#F6F8FA]/80 transition-colors group cursor-pointer">
                        <td className="py-3.5 pr-4 font-mono font-semibold text-[#0057AC]">
                          {c.id}
                        </td>
                        <td className="py-3.5 px-4 text-[#5F7180] whitespace-nowrap">
                          {c.date}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-[#001B3A]">
                          {c.party}
                        </td>
                        <td className="py-3.5 px-4 text-[#5F7180]">
                          {c.commodity}
                        </td>
                        <td className="py-3.5 px-4 font-medium">
                          {c.quantity}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-[#001B3A]">
                          {c.value}
                        </td>
                        <td className="py-3.5 pl-4 text-center">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-[6px] text-[11.5px] font-semibold border ${c.statusColor}`}
                          >
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Priority Tasks */}
            <div className="lg:col-span-4 bg-white rounded-[20px] border border-[#DCE3E8] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-inter font-bold text-[16px] text-[#001B3A]">
                    Priority Tasks
                  </h3>
                  <p className="font-inter text-[12px] text-[#5F7180]">
                    Follow-ups & overdues requiring action
                  </p>
                </div>
                <button
                  onClick={() => setActiveNav('follow-ups')}
                  className="font-inter text-[12px] font-semibold text-[#0057AC] hover:underline cursor-pointer"
                >
                  View All &gt;
                </button>
              </div>

              {/* Task Items Stack */}
              <div className="space-y-3">
                {priorityTasks.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setActiveModal(`task-${t.id}`)}
                    className="p-3.5 rounded-[12px] border border-[#DCE3E8] hover:border-[#0057AC]/50 hover:bg-[#F6F8FA]/60 transition-all flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-inter font-semibold text-[13px] text-[#001B3A] group-hover:text-[#0057AC] transition-colors truncate">
                        {t.title}
                      </div>
                      <div className="font-inter text-[12px] text-[#5F7180] truncate mt-0.5">
                        {t.desc}
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-[6px] border border-[#DCE3E8] text-[#8A9AA6] group-hover:text-[#0057AC] group-hover:border-[#0057AC]/40 flex items-center justify-center shrink-0 transition-colors">
                      <ChevronRight size={15} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
          </>
        )}
      </div>

      {/* QUICK ACTION / POPUP FEEDBACK MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[20px] max-w-md w-full p-6 shadow-2xl border border-[#DCE3E8] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#DCE3E8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#1DCA76]" />
                <h4 className="font-inter font-bold text-[16px] text-[#001B3A] capitalize">
                  {activeModal.replace('-', ' ')}
                </h4>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-[#8A9AA6] hover:text-[#172B3A] p-1 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-5 font-inter text-[14px] text-[#5F7180] leading-[22px]">
              This action trigger is ready! In the upcoming insider page update, we will connect the dedicated modal flow for{' '}
              <strong className="text-[#001B3A]">{activeModal.replace('-', ' ')}</strong>.
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#DCE3E8]">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-[8px] bg-[#001B3A] text-white text-[13px] font-semibold hover:bg-[#002752] transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
