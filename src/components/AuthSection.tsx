import React, { useState } from 'react';
import {
  Mail,
  Lock,
  User,
  Building2,
  ArrowRight,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthSectionProps {
  initialMode?: 'login' | 'register';
  onAuthSuccess?: () => void;
  onNavigateHome?: () => void;
}

export const AuthSection: React.FC<AuthSectionProps> = ({
  initialMode = 'login',
  onAuthSuccess,
  onNavigateHome,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Please enter your email address to receive password reset instructions.');
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setErrorMessage('Supabase is not configured yet. Please check your credentials.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/#reset-password`,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setSuccessMessage('Password reset link sent! Check your inbox to continue.');
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setErrorMessage('Supabase is not currently configured. Please check your credentials.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(error.message);
        } else {
          setSuccessMessage('Signed in successfully! Redirecting to your workspace...');
          setTimeout(() => {
            if (onAuthSuccess) onAuthSuccess();
          }, 800);
        }
      } else {
        // Register Mode
        const { error, data } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
              company_name: companyName.trim(),
            },
          },
        });

        if (error) {
          setErrorMessage(error.message);
        } else if (data.session) {
          setSuccessMessage('Account created successfully! Logging you in...');
          setTimeout(() => {
            if (onAuthSuccess) onAuthSuccess();
          }, 800);
        } else {
          setSuccessMessage(
            'Account created! If confirmation is enabled on your Supabase project, check your email to verify your address.'
          );
        }
      }
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-79px)] bg-[#F6F8FA] pt-10 md:pt-16 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Decorative Concentric Ellipses matching Home Page Hero */}
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] pointer-events-none select-none">
        {/* Outer Dashed Ring */}
        <div
          className="absolute rounded-full border-[2px] border-dashed border-[#8A9AA6]/15"
          style={{
            width: '995px',
            height: '995px',
            left: 'calc(50% - 995px/2)',
            top: 'calc(50% - 995px/2)',
          }}
        />
        {/* Middle Solid Ring */}
        <div
          className="absolute rounded-full border-[2px] border-solid border-[#8A9AA6]/10"
          style={{
            width: '888px',
            height: '888px',
            left: 'calc(50% - 888px/2)',
            top: 'calc(50% - 888px/2)',
          }}
        />
        {/* Inner Solid Ring */}
        <div
          className="absolute rounded-full border-[2px] border-solid border-[#8A9AA6]/10"
          style={{
            width: '777px',
            height: '777px',
            left: 'calc(50% - 777px/2)',
            top: 'calc(50% - 777px/2)',
          }}
        />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-6 md:px-12 w-full z-10">
        {/* Top Breadcrumb / Header */}
        <div className="text-center max-w-[680px] mx-auto mb-10">
          <div className="inline-block mb-3">
            <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase bg-[#0057AC]/10 px-3 py-1 rounded-full">
              CONNECTED TRADE PLATFORM
            </span>
          </div>

          <h1 className="font-inter font-bold text-[34px] sm:text-[42px] md:text-[46px] leading-[1.15] tracking-[-1px] text-[#001B3A]">
            {forgotPasswordMode
              ? 'Reset Your Password'
              : mode === 'login'
              ? 'Sign in to Your Workspace'
              : 'Create Your TradeFlow360 Account'}
          </h1>

          <p className="mt-3 font-inter font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#5F7180]">
            {forgotPasswordMode
              ? 'Enter your verified account email and we’ll send you password recovery instructions.'
              : mode === 'login'
              ? 'Manage contracts, dispatches, settlements and audit trails in one connected workflow.'
              : 'Join leading commodity traders, millers, and brokers standardizing wholesale physical trade.'}
          </p>
        </div>

        {/* Dual Layout: Card with Form & Value Props Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-[1020px] mx-auto">
          {/* Main Auth Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[20px] border border-[#DCE3E8] p-7 sm:p-9 shadow-[0px_4px_24px_rgba(0,27,58,0.06)] flex flex-col justify-between">
            <div>
              {/* Tab Selector (Sign In vs Register) - Only if not in forgot password mode */}
              {!forgotPasswordMode && (
                <div className="flex items-center p-1 bg-[#F6F8FA] rounded-[10px] border border-[#DCE3E8]/80 mb-7">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMessage(null);
                      setSuccessMessage(null);
                    }}
                    className={`flex-1 py-2.5 text-[14px] font-inter font-semibold rounded-[8px] transition-all cursor-pointer ${
                      mode === 'login'
                        ? 'bg-white text-[#001B3A] shadow-sm'
                        : 'text-[#5F7180] hover:text-[#001B3A]'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setErrorMessage(null);
                      setSuccessMessage(null);
                    }}
                    className={`flex-1 py-2.5 text-[14px] font-inter font-semibold rounded-[8px] transition-all cursor-pointer ${
                      mode === 'register'
                        ? 'bg-white text-[#001B3A] shadow-sm'
                        : 'text-[#5F7180] hover:text-[#001B3A]'
                    }`}
                  >
                    Create Account
                  </button>
                </div>
              )}

              {/* Status Notifications */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-[10px] bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-[14px] leading-[20px]">
                  <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-6 p-4 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 text-[14px] leading-[20px]">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-600 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Form Flow */}
              {forgotPasswordMode ? (
                <form onSubmit={handleResetPassword} className="space-y-5">
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Account Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9AA6]">
                        <Mail size={17} />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] placeholder-[#8A9AA6] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-[8px] bg-[#001B3A] hover:bg-[#002752] text-white font-inter font-semibold text-[15px] leading-[22px] transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Reset Instructions</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setForgotPasswordMode(false);
                        setErrorMessage(null);
                        setSuccessMessage(null);
                      }}
                      className="font-inter text-[14px] font-medium text-[#0057AC] hover:underline cursor-pointer"
                    >
                      Back to Sign In
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Additional Register Fields */}
                  {mode === 'register' && (
                    <>
                      <div>
                        <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9AA6]">
                            <User size={17} />
                          </div>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Rajesh Agarwal"
                            className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] placeholder-[#8A9AA6] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                          Trading Entity / Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9AA6]">
                            <Building2 size={17} />
                          </div>
                          <input
                            type="text"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Agarwal Agro Commodities Pvt Ltd"
                            className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] placeholder-[#8A9AA6] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block font-inter text-[13px] font-medium text-[#172B3A] mb-1.5">
                      Business Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9AA6]">
                        <Mail size={17} />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@tradeflow.in"
                        className="w-full pl-10 pr-4 py-3 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] placeholder-[#8A9AA6] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block font-inter text-[13px] font-medium text-[#172B3A]">
                        Password
                      </label>
                      {mode === 'login' && (
                        <button
                          type="button"
                          onClick={() => {
                            setForgotPasswordMode(true);
                            setErrorMessage(null);
                            setSuccessMessage(null);
                          }}
                          className="font-inter text-[13px] font-medium text-[#0057AC] hover:underline cursor-pointer"
                        >
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A9AA6]">
                        <Lock size={17} />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-10 pr-11 py-3 rounded-[8px] border border-[#DCE3E8] bg-white font-inter text-[14px] text-[#172B3A] placeholder-[#8A9AA6] focus:outline-none focus:border-[#0057AC] focus:ring-1 focus:ring-[#0057AC] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#8A9AA6] hover:text-[#172B3A] cursor-pointer"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                    {mode === 'register' && (
                      <p className="mt-1.5 font-inter text-[12px] text-[#8A9AA6]">
                        Must be at least 6 characters.
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-[8px] bg-[#001B3A] hover:bg-[#002752] text-white font-inter font-semibold text-[15px] leading-[22px] transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{mode === 'login' ? 'Sign In to Workspace' : 'Complete Registration'}</span>
                          <ArrowRight size={17} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Switcher */}
            <div className="mt-8 pt-5 border-t border-[#DCE3E8]/80 text-center">
              {!forgotPasswordMode && (
                <p className="font-inter text-[14px] text-[#5F7180]">
                  {mode === 'login' ? (
                    <>
                      Don’t have a TraderFlow360 account?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setMode('register');
                          setErrorMessage(null);
                          setSuccessMessage(null);
                        }}
                        className="font-semibold text-[#0057AC] hover:underline cursor-pointer"
                      >
                        Create an account
                      </button>
                    </>
                  ) : (
                    <>
                      Already registered?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setMode('login');
                          setErrorMessage(null);
                          setSuccessMessage(null);
                        }}
                        className="font-semibold text-[#0057AC] hover:underline cursor-pointer"
                      >
                        Sign in here
                      </button>
                    </>
                  )}
                </p>
              )}

              {onNavigateHome && (
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="mt-3 text-[13px] font-inter text-[#8A9AA6] hover:text-[#172B3A] transition-colors cursor-pointer"
                >
                  ← Return to TradeFlow360 Home
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Security & Value Card (Matching Trade Journey Interface from Home Page) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Live Journey Badge Mockup */}
            <div className="bg-[#001B3A] rounded-[20px] p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between flex-1">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#1DCA76]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono tracking-wider text-white/60">
                  <span className="flex items-center gap-1.5 text-[#1DCA76]">
                    <span className="w-2 h-2 rounded-full bg-[#1DCA76] animate-pulse" />
                    CONNECTED JOURNEY
                  </span>
                  <span>#TF-24081</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-[12px] p-4">
                    <div className="text-[12px] text-white/60 font-inter">Live Sauda Commitment</div>
                    <div className="text-[18px] font-semibold text-white mt-1">
                      500 MT Soybean (Kharif)
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[13px] text-white/80">
                      <span>Rate: ₹4,850/Qtl</span>
                      <span className="text-[#1DCA76] font-medium">Bilty Verified</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-[14px] text-white/90">
                      <div className="w-6 h-6 rounded-full bg-[#1DCA76]/20 text-[#1DCA76] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={15} />
                      </div>
                      <span>Contract & Tolerance digitally locked</span>
                    </div>

                    <div className="flex items-center gap-3 text-[14px] text-white/90">
                      <div className="w-6 h-6 rounded-full bg-[#1DCA76]/20 text-[#1DCA76] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={15} />
                      </div>
                      <span>Dharamkanta weighment auto-matched</span>
                    </div>

                    <div className="flex items-center gap-3 text-[14px] text-white/90">
                      <div className="w-6 h-6 rounded-full bg-[#1DCA76]/20 text-[#1DCA76] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={15} />
                      </div>
                      <span>RTGS Tranches synced with bilty dispatch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Row */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-white/60 text-[12px]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#1DCA76]" />
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={15} className="text-[#1DCA76]" />
                  <span>Sub-second Sync</span>
                </div>
              </div>
            </div>

            {/* Small Trust Micro-card */}
            <div className="bg-white rounded-[16px] border border-[#DCE3E8] p-5 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#0057AC]/10 text-[#0057AC] flex items-center justify-center shrink-0">
                <Layers size={20} />
              </div>
              <div className="text-[13px] leading-[18px]">
                <div className="font-semibold text-[#001B3A]">Mandi Operations Ready</div>
                <div className="text-[#5F7180] mt-0.5">
                  Built specifically for physical agri-commodity trade in India.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
