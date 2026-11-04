import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import { CtaSection } from './CtaSection';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    tradingLine: 'Grains & Pulses',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isSupabaseConfigured && supabase) {
      const client = supabase;
      try {
        await client.from('contact_submissions').insert([
          {
            full_name: formData.fullName,
            company_name: formData.companyName,
            phone: formData.phone,
            trading_line: formData.tradingLine,
            message: formData.message,
          },
        ]);
      } catch (err) {
        console.warn('Could not save submission to Supabase:', err);
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F6F8FA]">
      {/* Contact Main Section */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Heading, Bio & Contact Details (Frame 1707483394) */}
            <div className="lg:col-span-6 flex flex-col items-start gap-10 md:gap-12">
              {/* Header Block (Frame 1707483390) */}
              <div className="flex flex-col items-start gap-4 max-w-[612px]">
                {/* Tag */}
                <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
                  CONTACT US
                </div>

                {/* Display Title (H1) */}
                <h1 className="font-inter font-bold text-[38px] md:text-[46px] lg:text-[52px] leading-[1.15] tracking-[-1px] text-[#000000]">
                  Speak with Our Trade Operations Desk.
                </h1>

                {/* Subtitle */}
                <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-[#5F7180] pt-1">
                  Have questions about digitizing your Mandi sauda records, multi-lot weighbridge tracking, or enterprise ledger deployment? Our commodity specialists are here to assist your trading team.
                </p>
              </div>

              {/* Contact Info Items (Frame 1707483393) */}
              <div className="w-full flex flex-col items-start gap-7">
                {/* 1. Phone */}
                <div className="flex items-start gap-3 w-full">
                  <div className="w-[50px] h-[50px] rounded-[8px] bg-[#0057AC] flex items-center justify-center shrink-0 text-white shadow-2xs">
                    <Phone size={22} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#5F7180] uppercase">
                      PHONE
                    </span>
                    <a
                      href="tel:+919980706001"
                      className="font-inter font-medium text-[18px] leading-[28px] text-[#172B3A] hover:text-[#0057AC] transition-colors"
                    >
                      +91 9980706001
                    </a>
                  </div>
                </div>

                {/* 2. Mail */}
                <div className="flex items-start gap-3 w-full">
                  <div className="w-[50px] h-[50px] rounded-[8px] bg-[#0057AC] flex items-center justify-center shrink-0 text-white shadow-2xs">
                    <Mail size={22} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#5F7180] uppercase">
                      MAIL
                    </span>
                    <a
                      href="mailto:info.tradeflow360@gmail.com"
                      className="font-inter font-medium text-[18px] leading-[28px] text-[#172B3A] hover:text-[#0057AC] transition-colors"
                    >
                      info.tradeflow360@gmail.com
                    </a>
                  </div>
                </div>

                {/* 3. Address */}
                <div className="flex items-start gap-3 w-full">
                  <div className="w-[50px] h-[50px] rounded-[8px] bg-[#0057AC] flex items-center justify-center shrink-0 text-white shadow-2xs mt-1">
                    <MapPin size={22} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#5F7180] uppercase">
                      ADDRESS
                    </span>
                    <p className="font-inter font-medium text-[18px] leading-[28px] text-[#172B3A] max-w-[480px]">
                      Kallur Colony, Opposite of Public Garden, Station Road, Raichur - 584101 ( K.A )
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card (Frame 21494) */}
            <div className="lg:col-span-6 w-full">
              <div className="w-full bg-[#001B3A] rounded-[16px] p-8 md:p-[42px] text-white shadow-[0px_4px_24px_rgba(0,0,0,0.18)]">
                {/* Header */}
                <div className="space-y-2 mb-8">
                  <h2 className="font-inter font-semibold text-[26px] md:text-[28px] leading-[36px] text-white">
                    Send Us a Message
                  </h2>
                  <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[24px] text-white/90">
                    Fill out the form below and our regional Mandi desk will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#1DCA76]/20 border border-[#1DCA76] flex items-center justify-center text-[#1DCA76]">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-inter font-semibold text-[22px] text-white">
                      Message Received!
                    </h3>
                    <p className="font-inter text-[15px] text-white/80 max-w-[400px]">
                      Thank you. Our regional trade operations desk in Raichur will connect with you within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-[8px] bg-white text-[#001B3A] font-inter font-medium text-[14px] hover:bg-slate-100 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="block font-inter font-normal text-[16px] leading-[24px] text-white">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full h-[40px] px-3 py-2 rounded-[8px] bg-white/10 border border-[#DCE3E8]/50 text-white placeholder-white/60 font-inter text-[15px] focus:outline-none focus:border-[#1DCA76] transition-colors"
                        />
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <label className="block font-inter font-normal text-[16px] leading-[24px] text-white">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Agrawal Commodities"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          className="w-full h-[40px] px-3 py-2 rounded-[8px] bg-white/10 border border-[#DCE3E8]/50 text-white placeholder-white/60 font-inter text-[15px] focus:outline-none focus:border-[#1DCA76] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Trading Line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="block font-inter font-normal text-[16px] leading-[24px] text-white">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full h-[40px] px-3 py-2 rounded-[8px] bg-white/10 border border-[#DCE3E8]/50 text-white placeholder-white/60 font-inter text-[15px] focus:outline-none focus:border-[#1DCA76] transition-colors"
                        />
                      </div>

                      {/* Trading Line Dropdown */}
                      <div className="space-y-2">
                        <label className="block font-inter font-normal text-[16px] leading-[24px] text-white">
                          Trading Line
                        </label>
                        <div className="relative">
                          <select
                            value={formData.tradingLine}
                            onChange={(e) =>
                              setFormData({ ...formData, tradingLine: e.target.value })
                            }
                            className="w-full h-[40px] px-3 pr-9 py-2 rounded-[8px] bg-[#001B3A]/90 bg-white/10 border border-[#DCE3E8]/50 text-white font-inter text-[15px] focus:outline-none focus:border-[#1DCA76] transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Grains & Pulses" className="bg-[#001B3A] text-white">
                              Grains & Pulses
                            </option>
                            <option value="Oilseeds & Edible Oils" className="bg-[#001B3A] text-white">
                              Oilseeds & Edible Oils
                            </option>
                            <option value="Spices & Condiments" className="bg-[#001B3A] text-white">
                              Spices & Condiments
                            </option>
                            <option value="Cotton & Fibers" className="bg-[#001B3A] text-white">
                              Cotton & Fibers
                            </option>
                            <option value="Sugar & Jaggery" className="bg-[#001B3A] text-white">
                              Sugar & Jaggery
                            </option>
                            <option value="General Mandi Commission" className="bg-[#001B3A] text-white">
                              General Mandi Commission
                            </option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Requirement / Message */}
                    <div className="space-y-2 pt-1">
                      <label className="block font-inter font-normal text-[16px] leading-[24px] text-white">
                        Your Requirement or Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us your requirement..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full h-[136px] p-3 rounded-[8px] bg-white/10 border border-[#DCE3E8]/50 text-white placeholder-white/60 font-inter text-[15px] focus:outline-none focus:border-[#1DCA76] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button (Frame 20766) */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-[56px] rounded-[8px] bg-white hover:bg-slate-100 disabled:opacity-75 text-[#001B3A] font-inter font-semibold text-[16px] leading-[24px] flex items-center justify-center transition-all shadow-md active:scale-[0.98] cursor-pointer"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Move Trade Forward? CTA Section */}
      <CtaSection />
    </div>
  );
};

