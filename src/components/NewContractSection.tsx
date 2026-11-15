import React, { useState, useMemo } from 'react';
import {
  Calendar,
  ChevronDown,
  Check,
} from 'lucide-react';

interface NewContractSectionProps {
  onBackToDashboard: () => void;
  onContractSaved?: (newContract: any) => void;
}

export const NewContractSection: React.FC<NewContractSectionProps> = ({
  onBackToDashboard,
  onContractSaved,
}) => {
  // Dynamic Initial Dates
  const today = new Date();
  const defaultContractDate = `${String(today.getDate()).padStart(2, '0')}/${String(
    today.getMonth() + 1
  ).padStart(2, '0')}/${today.getFullYear()}`;

  const deliveryTarget = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
  const defaultDeliveryDate = `${String(deliveryTarget.getDate()).padStart(2, '0')}/${String(
    deliveryTarget.getMonth() + 1
  ).padStart(2, '0')}/${deliveryTarget.getFullYear()}`;

  // Form State
  const [contractDate, setContractDate] = useState(defaultContractDate);
  const [commodity, setCommodity] = useState('Wheat');
  const [variety, setVariety] = useState('Premium Lokwan');
  const [quantity, setQuantity] = useState('500');
  const [unit, setUnit] = useState('MT');
  const [buyerRate, setBuyerRate] = useState('2500');
  const [sellerRate, setSellerRate] = useState('2400');

  // Parties & Brokerage State
  const [buyer, setBuyer] = useState('Global Traders Ltd');
  const [buyerBrokerageType, setBuyerBrokerageType] = useState('Fixed Amount');
  const [buyerBrokerageValue, setBuyerBrokerageValue] = useState('5000');

  const [seller, setSeller] = useState('Farmers Coop Federation');
  const [sellerBrokerageType, setSellerBrokerageType] = useState('Fixed Amount');
  const [sellerBrokerageValue, setSellerBrokerageValue] = useState('5000');

  // Delivery & Additional Terms
  const [deliveryDate, setDeliveryDate] = useState(defaultDeliveryDate);
  const [poNumber, setPoNumber] = useState('PO-GT-2026-884');
  const [deliveryInstructions, setDeliveryInstructions] = useState(
    'Delivery via covered trailers. Designated Mandi electronic weighment.'
  );
  const [paymentNotes, setPaymentNotes] = useState(
    'CAD against signed Sauda Note and Mandi Bilty receipt.'
  );
  const [additionalNotes, setAdditionalNotes] = useState(
    'Brokerage payable within 7 days of settlement.'
  );

  // Success Confirmation Notification Modal
  const [showSavedModal, setShowSavedModal] = useState(false);

  // Dynamic Brokerage Calculations
  const calculatedBuyerBrokerage = useMemo(() => {
    const val = parseFloat(buyerBrokerageValue) || 0;
    const qty = parseFloat(quantity) || 0;
    const rate = parseFloat(buyerRate) || 0;

    if (buyerBrokerageType === 'Fixed Amount') {
      return val;
    } else if (buyerBrokerageType === 'Per Unit (₹/MT)') {
      return val * qty;
    } else if (buyerBrokerageType === 'Percentage (%)') {
      return (val / 100) * (qty * rate);
    }
    return val;
  }, [buyerBrokerageValue, buyerBrokerageType, quantity, buyerRate]);

  const calculatedSellerBrokerage = useMemo(() => {
    const val = parseFloat(sellerBrokerageValue) || 0;
    const qty = parseFloat(quantity) || 0;
    const rate = parseFloat(sellerRate) || 0;

    if (sellerBrokerageType === 'Fixed Amount') {
      return val;
    } else if (sellerBrokerageType === 'Per Unit (₹/MT)') {
      return val * qty;
    } else if (sellerBrokerageType === 'Percentage (%)') {
      return (val / 100) * (qty * rate);
    }
    return val;
  }, [sellerBrokerageValue, sellerBrokerageType, quantity, sellerRate]);

  const totalBrokerage = useMemo(() => {
    return calculatedBuyerBrokerage + calculatedSellerBrokerage;
  }, [calculatedBuyerBrokerage, calculatedSellerBrokerage]);

  const handleSaveContract = (e: React.FormEvent) => {
    e.preventDefault();
    const newContractData = {
      id: `#C-00${Math.floor(Math.random() * 900) + 100}`,
      date: contractDate,
      party: buyer,
      seller,
      commodity,
      variety,
      quantity: `${quantity} ${unit}`,
      value: `₹${((parseFloat(quantity) || 0) * (parseFloat(buyerRate) || 0)).toLocaleString('en-IN')}`,
      totalBrokerage: `₹${totalBrokerage.toLocaleString('en-IN')}`,
      status: 'Active',
    };

    if (onContractSaved) {
      onContractSaved(newContractData);
    }
    setShowSavedModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F8FA] p-6 md:p-8">
      {/* 1. TOP BREADCRUMB & HEADER */}
      <div className="max-w-[1360px] mx-auto mb-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] font-inter mb-3 text-[#5F7180]">
          <button
            onClick={onBackToDashboard}
            className="hover:text-[#0057AC] transition-colors cursor-pointer"
          >
            Dashboard
          </button>
          <span>/</span>
          <span className="font-semibold text-[#001B3A]">New Contract</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="font-inter font-bold text-[28px] md:text-[32px] text-[#001B3A] tracking-tight">
          New Contract
        </h1>
        <p className="font-inter text-[14px] text-[#5F7180] mt-1">
          Fill in the details below to create a trading contract between buyer and seller.
        </p>
      </div>

      {/* 2. MAIN TWO-COLUMN FORM LAYOUT */}
      <form onSubmit={handleSaveContract} className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT & CENTER: Form Sections Card */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[20px] border border-[#DCE3E8] p-6 sm:p-8 shadow-sm space-y-8">
              {/* SECTION 1: DEAL INFORMATION */}
              <div>
                <div className="border-b border-[#DCE3E8] pb-3 mb-5">
                  <h2 className="font-inter font-bold text-[18px] text-[#001B3A]">
                    Deal Information
                  </h2>
                  <p className="font-inter text-[13px] text-[#5F7180] mt-0.5">
                    Capture the basic trade parameters and agreed rates for both parties.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contract Date */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Contract Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={contractDate}
                        onChange={(e) => setContractDate(e.target.value)}
                        placeholder="DD/MM/YYYY"
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                      />
                      <Calendar
                        size={17}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Commodity Dropdown */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Commodity
                    </label>
                    <div className="relative">
                      <select
                        value={commodity}
                        onChange={(e) => setCommodity(e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all cursor-pointer"
                      >
                        <option value="Wheat">Wheat</option>
                        <option value="Yellow Corn">Yellow Corn</option>
                        <option value="Basmati Rice">Basmati Rice</option>
                        <option value="Soybean">Soybean</option>
                        <option value="Chana (Gram)">Chana (Gram)</option>
                        <option value="Mustard Seeds">Mustard Seeds</option>
                      </select>
                      <ChevronDown
                        size={17}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Variety / Grade Dropdown */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Variety / Grade
                    </label>
                    <div className="relative">
                      <select
                        value={variety}
                        onChange={(e) => setVariety(e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all cursor-pointer"
                      >
                        <option value="Premium Lokwan">Premium Lokwan</option>
                        <option value="Sharbati Grade A">Sharbati Grade A</option>
                        <option value="Mill Quality (Tukdi)">Mill Quality (Tukdi)</option>
                        <option value="Export Quality 1121">Export Quality 1121</option>
                        <option value="Standard Mandi Average">Standard Mandi Average</option>
                      </select>
                      <ChevronDown
                        size={17}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Quantity & Unit */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Quantity & Unit
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="500"
                        className="flex-1 px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                      />
                      <div className="relative w-28">
                        <select
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          className="w-full appearance-none px-3 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all cursor-pointer"
                        >
                          <option value="MT">MT</option>
                          <option value="Quintal">Quintal</option>
                          <option value="Bags">Bags</option>
                          <option value="Kgs">Kgs</option>
                        </select>
                        <ChevronDown
                          size={15}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Buyer-side Rate */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Buyer-side Rate (₹ per {unit})
                    </label>
                    <input
                      type="number"
                      value={buyerRate}
                      onChange={(e) => setBuyerRate(e.target.value)}
                      placeholder="2500"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                    />
                  </div>

                  {/* Seller-side Rate */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Seller-side Rate (₹ per {unit})
                    </label>
                    <input
                      type="number"
                      value={sellerRate}
                      onChange={(e) => setSellerRate(e.target.value)}
                      placeholder="2400"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: PARTIES & BROKERAGE */}
              <div>
                <div className="border-b border-[#DCE3E8] pb-3 mb-5">
                  <h2 className="font-inter font-bold text-[18px] text-[#001B3A]">
                    Parties & Brokerage
                  </h2>
                  <p className="font-inter text-[13px] text-[#5F7180] mt-0.5">
                    Select the buyer and seller, and configure independent brokerage for each.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* BUYER CARD */}
                  <div className="rounded-[14px] border border-[#DCE3E8] p-4 bg-[#FAFCFF] flex flex-col justify-between">
                    <div>
                      <div className="font-inter font-bold text-[11px] uppercase tracking-wider text-[#0057AC] mb-3">
                        BUYER
                      </div>

                      <div className="space-y-3.5">
                        {/* Select Buyer */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Select Buyer
                          </label>
                          <div className="relative">
                            <select
                              value={buyer}
                              onChange={(e) => setBuyer(e.target.value)}
                              className="w-full appearance-none px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all cursor-pointer"
                            >
                              <option value="Global Traders Ltd">Global Traders Ltd</option>
                              <option value="Shree Ganesh Solvex">Shree Ganesh Solvex</option>
                              <option value="Bhawani Roller Mills">Bhawani Roller Mills</option>
                              <option value="Sunrise Foods">Sunrise Foods</option>
                            </select>
                            <ChevronDown
                              size={15}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                            />
                          </div>
                        </div>

                        {/* Brokerage Type */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Brokerage Type
                          </label>
                          <div className="relative">
                            <select
                              value={buyerBrokerageType}
                              onChange={(e) => setBuyerBrokerageType(e.target.value)}
                              className="w-full appearance-none px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all cursor-pointer"
                            >
                              <option value="Fixed Amount">Fixed Amount</option>
                              <option value="Per Unit (₹/MT)">Per Unit (₹/MT)</option>
                              <option value="Percentage (%)">Percentage (%)</option>
                            </select>
                            <ChevronDown
                              size={15}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                            />
                          </div>
                        </div>

                        {/* Brokerage Rate / Value */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Brokerage Rate / Value
                          </label>
                          <input
                            type="number"
                            value={buyerBrokerageValue}
                            onChange={(e) => setBuyerBrokerageValue(e.target.value)}
                            placeholder="5000"
                            className="w-full px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DCE3E8] flex items-center justify-between font-inter text-[13px]">
                      <span className="text-[#5F7180]">Calculated Buyer Brokerage:</span>
                      <span className="font-semibold text-[#001B3A]">
                        ₹{calculatedBuyerBrokerage.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* SELLER CARD */}
                  <div className="rounded-[14px] border border-[#DCE3E8] p-4 bg-[#FAFCFF] flex flex-col justify-between">
                    <div>
                      <div className="font-inter font-bold text-[11px] uppercase tracking-wider text-[#0057AC] mb-3">
                        SELLER
                      </div>

                      <div className="space-y-3.5">
                        {/* Select Seller */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Select Seller
                          </label>
                          <div className="relative">
                            <select
                              value={seller}
                              onChange={(e) => setSeller(e.target.value)}
                              className="w-full appearance-none px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all cursor-pointer"
                            >
                              <option value="Farmers Coop Federation">Farmers Coop Federation</option>
                              <option value="Agro Exports">Agro Exports</option>
                              <option value="Kothari Agro Overseas">Kothari Agro Overseas</option>
                              <option value="Kisan Producer Org">Kisan Producer Org</option>
                            </select>
                            <ChevronDown
                              size={15}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                            />
                          </div>
                        </div>

                        {/* Brokerage Type */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Brokerage Type
                          </label>
                          <div className="relative">
                            <select
                              value={sellerBrokerageType}
                              onChange={(e) => setSellerBrokerageType(e.target.value)}
                              className="w-full appearance-none px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all cursor-pointer"
                            >
                              <option value="Fixed Amount">Fixed Amount</option>
                              <option value="Per Unit (₹/MT)">Per Unit (₹/MT)</option>
                              <option value="Percentage (%)">Percentage (%)</option>
                            </select>
                            <ChevronDown
                              size={15}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                            />
                          </div>
                        </div>

                        {/* Brokerage Rate / Value */}
                        <div>
                          <label className="block font-inter text-[12px] font-medium text-[#5F7180] mb-1">
                            Brokerage Rate / Value
                          </label>
                          <input
                            type="number"
                            value={sellerBrokerageValue}
                            onChange={(e) => setSellerBrokerageValue(e.target.value)}
                            placeholder="5000"
                            className="w-full px-3 py-2 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[13.5px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DCE3E8] flex items-center justify-between font-inter text-[13px]">
                      <span className="text-[#5F7180]">Calculated Seller Brokerage:</span>
                      <span className="font-semibold text-[#001B3A]">
                        ₹{calculatedSellerBrokerage.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: DELIVERY & ADDITIONAL TERMS */}
              <div>
                <div className="border-b border-[#DCE3E8] pb-3 mb-5">
                  <h2 className="font-inter font-bold text-[18px] text-[#001B3A]">
                    Delivery & Additional Terms
                  </h2>
                  <p className="font-inter text-[13px] text-[#5F7180] mt-0.5">
                    Add schedule, references, and delivery notes.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Expected Delivery Date */}
                    <div>
                      <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                        Expected Delivery Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          placeholder="DD/MM/YYYY"
                          className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                        />
                        <Calendar
                          size={17}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A9AA6] pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* PO Number */}
                    <div>
                      <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                        PO Number
                      </label>
                      <input
                        type="text"
                        value={poNumber}
                        onChange={(e) => setPoNumber(e.target.value)}
                        placeholder="PO-GT-2026-884"
                        className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                      />
                    </div>
                  </div>

                  {/* Delivery Instructions */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Delivery Instructions
                    </label>
                    <input
                      type="text"
                      value={deliveryInstructions}
                      onChange={(e) => setDeliveryInstructions(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                    />
                  </div>

                  {/* Payment Notes */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Payment Notes
                    </label>
                    <input
                      type="text"
                      value={paymentNotes}
                      onChange={(e) => setPaymentNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Additional Notes
                    </label>
                    <input
                      type="text"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] focus:outline-none focus:border-[#0057AC] transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTRACT SUMMARY CARD */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-[20px] border border-[#DCE3E8] p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-inter font-bold text-[17px] text-[#001B3A] pb-4 border-b border-[#DCE3E8]">
                  Contract Summary
                </h3>

                {/* 01 — DEAL OVERVIEW */}
                <div className="py-4 border-b border-[#DCE3E8]/70">
                  <div className="text-[11px] font-semibold text-[#8A9AA6] uppercase tracking-wider mb-3">
                    01 — DEAL OVERVIEW
                  </div>
                  <div className="space-y-2.5 font-inter text-[13px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Buyer:</span>
                      <span className="font-semibold text-[#001B3A] text-right truncate max-w-[180px]">
                        {buyer}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Seller:</span>
                      <span className="font-semibold text-[#001B3A] text-right truncate max-w-[180px]">
                        {seller}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Commodity:</span>
                      <span className="font-semibold text-[#001B3A]">
                        {commodity} - {variety.split(' ')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Quantity:</span>
                      <span className="font-semibold text-[#001B3A]">
                        {quantity} {unit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 02 — BROKERAGE BREAKDOWN */}
                <div className="py-4 border-b border-[#DCE3E8]/70">
                  <div className="text-[11px] font-semibold text-[#8A9AA6] uppercase tracking-wider mb-3">
                    02 — BROKERAGE BREAKDOWN
                  </div>
                  <div className="space-y-2 font-inter text-[13px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Buyer Brokerage:</span>
                      <span className="font-semibold text-[#001B3A]">
                        ₹{calculatedBuyerBrokerage.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5F7180]">Seller Brokerage:</span>
                      <span className="font-semibold text-[#001B3A]">
                        ₹{calculatedSellerBrokerage.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DCE3E8]/50">
                    <div className="text-[12px] text-[#5F7180]">Total Brokerage</div>
                    <div className="font-inter font-bold text-[28px] text-[#001B3A] tracking-tight mt-0.5">
                      ₹{totalBrokerage.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* 03 — PRIMARY ACTION */}
                <div className="pt-4">
                  <div className="text-[11px] font-semibold text-[#8A9AA6] uppercase tracking-wider mb-3">
                    03 — PRIMARY ACTION
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-[10px] bg-[#001733] hover:bg-[#002752] text-white font-inter font-semibold text-[14.5px] transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Save Contract</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* SUCCESS CONFIRMATION MODAL */}
      {showSavedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-[20px] max-w-md w-full p-6 shadow-2xl border border-[#DCE3E8] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 pb-3 border-b border-[#DCE3E8]">
              <div className="w-10 h-10 rounded-full bg-[#E6F9F0] text-[#1DCA76] flex items-center justify-center shrink-0">
                <Check size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-inter font-bold text-[17px] text-[#001B3A]">
                  Contract Created Successfully!
                </h4>
                <p className="font-inter text-[12px] text-[#5F7180]">
                  Trade dossier #C-005 is now active.
                </p>
              </div>
            </div>

            <div className="py-4 space-y-2 text-[13.5px] font-inter text-[#5F7180]">
              <p>
                Contract between <strong className="text-[#001B3A]">{buyer}</strong> and{' '}
                <strong className="text-[#001B3A]">{seller}</strong> for{' '}
                <strong className="text-[#001B3A]">
                  {quantity} {unit} of {commodity} ({variety})
                </strong>{' '}
                has been locked with total brokerage of{' '}
                <strong className="text-[#1DCA76]">₹{totalBrokerage.toLocaleString('en-IN')}</strong>.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#DCE3E8]">
              <button
                type="button"
                onClick={() => {
                  setShowSavedModal(false);
                  onBackToDashboard();
                }}
                className="px-5 py-2.5 rounded-[8px] bg-[#001B3A] hover:bg-[#002752] text-white text-[13.5px] font-semibold transition-colors cursor-pointer"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
