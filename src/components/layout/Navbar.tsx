import React, { useState, useEffect } from 'react';
import { Home, Phone, Heart, Menu, X, MessageSquare, Compass, Calculator, UserCheck } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, params?: any) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  favoritesCount,
  onOpenFavorites
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111315]/95 backdrop-blur-md shadow-lg border-b border-[#252A30]'
          : 'bg-[#111315] border-b border-[#252A30]'
      }`}
    >
      {/* Top micro-bar for phone & location */}
      <div className="hidden md:block bg-[#0A0B0D] text-xs text-stone-400 py-1.5 px-4 border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Verified Abuja Properties (C of O & R of O Titles)
            </span>
            <span className="text-stone-400">
              Maitama • Asokoro • Guzape • Jabi • Katampe
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${AGENT_CONFIG.phoneRaw}`}
              className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>{AGENT_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={AGENT_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A880] hover:text-[#D8C2A2] transition-colors font-medium flex items-center gap-1"
            >
              Direct WhatsApp Advisory
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#C5A880] rounded p-1"
            aria-label="Anita Properties Home"
          >
            <div className="w-11 h-11 rounded-sm bg-[#1A1D20] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] font-serif font-bold text-xl shadow-inner group-hover:border-[#C5A880] transition-colors">
              <span>AP</span>
            </div>
            <div>
              <div className="font-serif tracking-widest text-lg sm:text-xl font-bold text-white uppercase group-hover:text-[#C5A880] transition-colors">
                ANITA PROPERTIES
              </div>
              <div className="text-[10px] tracking-widest text-stone-400 uppercase font-sans -mt-0.5">
                Abuja Luxury & Investment Realty
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'home'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('properties')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'properties' || currentView === 'property-detail'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              Properties
            </button>

            <button
              onClick={() => handleNavClick('neighborhoods')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'neighborhoods'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              Abuja Districts
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'about'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              About Anita
            </button>

            <button
              onClick={() => handleNavClick('calculator')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'calculator'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              Mortgage Calculator
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-sm ${
                currentView === 'contact'
                  ? 'text-[#C5A880] font-semibold border-b-2 border-[#C5A880]'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Favorites / Saved Properties */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-sm text-stone-300 hover:text-white hover:bg-stone-800/70 transition-all"
              aria-label={`Saved Properties (${favoritesCount})`}
              title="View Saved Properties"
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'text-[#C5A880] fill-[#C5A880]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#C5A880] text-[#111315] text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={AGENT_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-medium text-sm transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:ring-offset-2 focus:ring-offset-[#111315]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Header Right Icons: Favorites & Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Favorites Button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 text-stone-300 hover:text-white tap-target flex items-center justify-center"
              aria-label={`Saved Properties (${favoritesCount})`}
            >
              <Heart className={`w-6 h-6 ${favoritesCount > 0 ? 'text-[#C5A880] fill-[#C5A880]' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-[#C5A880] text-[#111315] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C5A880] rounded tap-target flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-black/60 z-50 backdrop-blur-sm animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="bg-[#111315] border-b border-stone-800 p-6 space-y-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'home' ? 'bg-[#1E232A] text-[#C5A880] font-semibold' : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <Home className="w-5 h-5 text-[#C5A880]" />
                <span>Home</span>
              </button>

              <button
                onClick={() => handleNavClick('properties')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'properties' || currentView === 'property-detail'
                    ? 'bg-[#1E232A] text-[#C5A880] font-semibold'
                    : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <Compass className="w-5 h-5 text-[#C5A880]" />
                <span>Browse Properties</span>
              </button>

              <button
                onClick={() => handleNavClick('neighborhoods')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'neighborhoods' ? 'bg-[#1E232A] text-[#C5A880] font-semibold' : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <Compass className="w-5 h-5 text-[#C5A880]" />
                <span>Abuja Districts & Guides</span>
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'about' ? 'bg-[#1E232A] text-[#C5A880] font-semibold' : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <UserCheck className="w-5 h-5 text-[#C5A880]" />
                <span>About Anita</span>
              </button>

              <button
                onClick={() => handleNavClick('calculator')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'calculator' ? 'bg-[#1E232A] text-[#C5A880] font-semibold' : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <Calculator className="w-5 h-5 text-[#C5A880]" />
                <span>Mortgage Calculator</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-sm transition-colors text-left ${
                  currentView === 'contact' ? 'bg-[#1E232A] text-[#C5A880] font-semibold' : 'text-stone-200 hover:bg-[#1A1D20]'
                }`}
              >
                <Phone className="w-5 h-5 text-[#C5A880]" />
                <span>Contact & Inquiries</span>
              </button>
            </div>

            <div className="pt-4 border-t border-stone-800 space-y-3">
              <a
                href={AGENT_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C5A880] text-[#0B0C0E] font-semibold rounded-sm shadow text-center text-base"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat with Anita on WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENT_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1A1D20] text-stone-200 font-medium rounded-sm border border-stone-700 text-center text-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call {AGENT_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-stone-500">
              Anita Properties • Abuja, Nigeria
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
