import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'pricing' | 'blog' | 'blog-detail' | 'contact';
  onNavigate?: (page: 'home' | 'pricing' | 'blog' | 'contact', targetId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features', page: 'home' as const, id: 'features' },
    { label: 'How It Works', href: '#how-it-works', page: 'home' as const, id: 'how-it-works' },
    { label: 'Pricing', href: '#pricing', page: 'pricing' as const },
    { label: 'Blog', href: '#blog', page: 'blog' as const },
    { label: 'FAQs', href: '#faqs', page: 'home' as const, id: 'faqs' },
  ];

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'pricing' | 'blog' | 'contact', targetId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, targetId);
    } else {
      if (page === 'pricing') {
        window.location.hash = 'pricing';
      } else if (page === 'blog') {
        window.location.hash = 'blog';
      } else if (page === 'contact') {
        window.location.hash = 'contact';
      } else if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: targetId === 'faqs' ? 'center' : 'start',
          });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[79px] bg-white/80 backdrop-blur-[25px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] border-b border-[#DCE3E8]/40">
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center cursor-pointer"
        >
          <Logo size="navbar" />
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isBlogActive = (currentPage === 'blog' || currentPage === 'blog-detail') && link.page === 'blog';
            const isActive = isBlogActive || (currentPage === link.page && (link.page === 'pricing' || (!link.id && currentPage === 'home')));
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.page, link.id)}
                className={`font-inter text-[14px] leading-[21px] transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#172B3A] font-semibold'
                    : 'text-[#5F7180] hover:text-[#172B3A]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Auth */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#login"
            className="font-inter text-[14px] leading-[21px] text-[#172B3A] hover:text-[#0057AC] transition-colors font-normal"
          >
            Login
          </a>
          <a
            href="#book-demo"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-[8px] bg-[#001B3A] hover:bg-[#002752] text-white font-inter text-[14px] font-semibold leading-[21px] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#172B3A] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#DCE3E8] px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page && (link.page === 'pricing' || link.page === 'blog');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.page, link.id)}
                className={`block font-inter text-[15px] py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#172B3A] font-semibold'
                    : 'text-[#5F7180] hover:text-[#172B3A] font-medium'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-[#DCE3E8] flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter text-[14px] text-[#172B3A] py-1 font-medium"
            >
              Login
            </a>
            <a
              href="#book-demo"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full text-center py-2.5 rounded-[8px] bg-[#001B3A] text-white font-inter text-[14px] font-semibold cursor-pointer"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


