import React, { useState, useEffect } from 'react';
import { Navbar, type NavPage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RecordsSection } from './components/RecordsSection';
import { BuiltForRealTradeSection } from './components/BuiltForRealTradeSection';
import { TradeLifecycleSection } from './components/TradeLifecycleSection';
import { AdvancedTradeSection } from './components/AdvancedTradeSection';
import { WhyTradeFlowSection } from './components/WhyTradeFlowSection';
import { SecuritySection } from './components/SecuritySection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { PricingSection } from './components/PricingSection';
import { BlogSection } from './components/BlogSection';
import { BlogDetailSection } from './components/BlogDetailSection';
import { ContactSection } from './components/ContactSection';
import { AuthSection } from './components/AuthSection';
import { DashboardSection } from './components/DashboardSection';
import { Footer } from './components/Footer';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import type { User } from '@supabase/supabase-js';

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const [currentPage, setCurrentPage] = useState<NavPage>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) return 'blog-detail';
    if (hash === '#pricing') return 'pricing';
    if (hash === '#blog') return 'blog';
    if (hash === '#contact' || hash === '#book-demo') return 'contact';
    if (hash === '#login') return 'login';
    if (hash === '#register') return 'register';
    if (hash === '#dashboard') return 'dashboard';
    return 'home';
  });

  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) {
      return hash.replace('#blog/', '');
    }
    return 'eliminate-transit-shortages-weighbridge-mismatches';
  });

  // Listen to Supabase Auth State
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const slug = hash.replace('#blog/', '');
        setSelectedBlogSlug(slug);
        setCurrentPage('blog-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#pricing') {
        setCurrentPage('pricing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#blog') {
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#book-demo') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#login') {
        setCurrentPage('login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#register') {
        setCurrentPage('register');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#dashboard') {
        setCurrentPage('dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash === '#faqs') {
          setTimeout(() => {
            const el = document.getElementById('faqs');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 80);
        } else if (hash && hash.length > 1) {
          const id = hash.substring(1);
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 80);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage, targetId?: string) => {
    setCurrentPage(page);
    if (page === 'pricing') {
      window.location.hash = 'pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'blog') {
      window.location.hash = 'blog';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'login') {
      window.location.hash = 'login';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'register') {
      window.location.hash = 'register';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'dashboard') {
      window.location.hash = 'dashboard';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'blog-detail') {
      window.location.hash = `blog/${selectedBlogSlug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (
        window.location.hash === '#pricing' ||
        window.location.hash === '#blog' ||
        window.location.hash.startsWith('#blog/') ||
        window.location.hash === '#contact' ||
        window.location.hash === '#book-demo' ||
        window.location.hash === '#login' ||
        window.location.hash === '#register' ||
        window.location.hash === '#dashboard'
      ) {
        window.history.pushState(null, '', window.location.pathname);
      }
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({
              behavior: 'smooth',
              block: targetId === 'faqs' ? 'center' : 'start',
            });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    handleNavigate('home');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] flex flex-col font-inter text-[#172B3A] selection:bg-[#1DCA76]/30 selection:text-[#001B3A]">
      {/* 1. Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        user={user}
        onNavigate={handleNavigate}
        onSignOut={handleSignOut}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {currentPage === 'pricing' ? (
          /* Entire Pricing Page Flow */
          <PricingSection />
        ) : currentPage === 'blog' ? (
          /* Entire Blog Knowledge Base Flow */
          <BlogSection onSelectPost={handleSelectBlog} />
        ) : currentPage === 'blog-detail' ? (
          /* Individual Blog Article Detail Flow */
          <BlogDetailSection
            slug={selectedBlogSlug}
            onBackToBlogs={() => handleNavigate('blog')}
          />
        ) : currentPage === 'contact' ? (
          /* Entire Contact Page Flow */
          <ContactSection />
        ) : currentPage === 'login' || currentPage === 'register' ? (
          /* Unified Authentication (Sign In & Register) */
          <AuthSection
            initialMode={currentPage}
            onAuthSuccess={() => handleNavigate('dashboard')}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentPage === 'dashboard' ? (
          /* Insider Workspace / Dashboard Placeholder */
          <DashboardSection
            user={user}
            onSignOut={handleSignOut}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* Entire Home Page Flow */
          <>
            {/* 2. Hero Section: Concentric Rings, Copy, Buttons, Interactive Journey Card */}
            <HeroSection />

            {/* 3. Problem Section: "Trade Moves Fast. Your Records Should Keep Up." */}
            <RecordsSection />

            {/* 4. Value Context: "Built for the Way Indian Trade Works." with Warehouse Mandi Photo */}
            <BuiltForRealTradeSection />

            {/* 5. The Trade Lifecycle: "One Trade. One Connected Flow." with Interactive Steps */}
            <TradeLifecycleSection />

            {/* 6. Advanced Trade Management: "Manage Every Stage. Even After the Trade." */}
            <AdvancedTradeSection />

            {/* 7. Why TradeFlow360: "A Better Way to Stay on Top of Trade." */}
            <WhyTradeFlowSection />

            {/* 8. Privacy & Security: "Your Trade Data. Protected." */}
            <SecuritySection />

            {/* 9. FAQs: "Questions, answered." */}
            <FaqSection />

            {/* 10. Call To Action: "Move Trade Forward." */}
            <CtaSection />
          </>
        )}
      </main>

      {/* Footer: Quick Links, Contact Details, Copyright & Legal */}
      <Footer />
    </div>
  );
};

export default App;
