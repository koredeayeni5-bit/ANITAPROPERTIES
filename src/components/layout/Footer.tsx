import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '../common/SocialIcons';

interface FooterProps {
  onNavigate: (view: string, params?: any) => void;
  onSelectDistrict?: (district: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectDistrict }) => {
  const handleDistrictClick = (district: string) => {
    if (onSelectDistrict) {
      onSelectDistrict(district);
    }
    onNavigate('properties', { district });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F12] text-stone-300 border-t border-stone-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#1A1D20] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] font-serif font-bold text-lg">
                AP
              </div>
              <div>
                <span className="font-serif tracking-widest text-lg font-bold text-white uppercase block">
                  ANITA PROPERTIES
                </span>
                <span className="text-[10px] tracking-widest text-stone-400 uppercase font-sans block -mt-0.5">
                  Abuja Luxury Real Estate & Advisory
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Dedicated real-estate consulting in Abuja, Nigeria. Specializing in verified residential duplexes, prime investment land, luxury terraces, and corporate commercial assets across Abuja’s most prestigious districts.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={AGENT_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#181B20] border border-stone-700/60 flex items-center justify-center text-stone-400 hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENT_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#181B20] border border-stone-700/60 flex items-center justify-center text-stone-400 hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENT_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#181B20] border border-stone-700/60 flex items-center justify-center text-stone-400 hover:text-[#C5A880] hover:border-[#C5A880]/50 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENT_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#C5A880]/10 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] hover:bg-[#C5A880] hover:text-[#111315] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Title Due Diligence Guarantee Badge */}
            <div className="mt-4 p-3 bg-[#15181C] border border-stone-800 rounded-sm flex items-start gap-2.5 max-w-sm">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-400 leading-snug">
                <span className="text-stone-200 font-medium block">Title Verification Standard</span>
                Every property listing is cross-referenced with Abuja Geographic Information Systems (AGIS) and FCDA land records prior to presentation.
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-200 font-semibold border-l-2 border-[#C5A880] pl-2">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('properties')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>All Properties</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('neighborhoods')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Abuja Districts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>About Anita</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Financial Calculator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Contact Anita</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Prime Abuja Districts */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-200 font-semibold border-l-2 border-[#C5A880] pl-2">
              Abuja Districts
            </h4>
            <ul className="space-y-1.5 text-sm text-stone-400">
              {['Maitama', 'Asokoro', 'Guzape', 'Jabi', 'Katampe Extension', 'Wuse 2', 'Gwarinpa', 'Airport Road'].map((district) => (
                <li key={district}>
                  <button
                    onClick={() => handleDistrictClick(district)}
                    className="hover:text-[#C5A880] transition-colors text-left"
                  >
                    {district}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-200 font-semibold border-l-2 border-[#C5A880] pl-2">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{AGENT_CONFIG.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${AGENT_CONFIG.phoneRaw}`} className="text-xs hover:text-white transition-colors">
                  {AGENT_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${AGENT_CONFIG.email}`} className="text-xs hover:text-white transition-colors">
                  {AGENT_CONFIG.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={AGENT_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#1A1D20] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#0B0C0E] border border-[#C5A880]/30 rounded-sm text-xs font-medium transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} ANITA PROPERTIES. All Rights Reserved. Abuja, FCT, Nigeria.</p>
          <div className="flex items-center space-x-6 text-stone-500">
            <span>Property Verification Guaranteed</span>
            <span>•</span>
            <span>AGIS & FCDA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
