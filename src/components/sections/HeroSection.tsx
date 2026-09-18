import React, { useState } from 'react';
import { Search, MessageSquare, ArrowRight, MapPin, Building, Tag, CheckCircle2 } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface HeroSectionProps {
  onExploreClick: () => void;
  onSearchSubmit: (params: { district: string; type: string; status: string; priceRange: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onSearchSubmit }) => {
  const [district, setDistrict] = useState('all');
  const [type, setType] = useState('all');
  const [status, setStatus] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({ district, type, status, priceRange });
  };

  return (
    <section className="relative bg-[#0F1114] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Photography with subtle dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury architectural residence in Abuja, Nigeria"
          className="w-full h-full object-cover object-center scale-100"
          fetchPriority="high"
        />
        {/* Deep Charcoal Overlays - Sophisticated & legible without cartoonish gradients */}
        <div className="absolute inset-0 bg-[#0F1114]/75 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1114] via-transparent to-black/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Prestige Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#1A1D20]/90 border border-[#C5A880]/40 text-[#C5A880] text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>Abuja Premier Property Listings</span>
          </div>

          {/* Exact Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Find Your Next Property in Abuja
          </h1>

          {/* Exact Supporting Text */}
          <p className="text-base sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl">
            Discover quality land, homes, and investment opportunities with Anita Properties.
          </p>

          {/* CTAs: Exact Primary & Secondary */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              type="button"
              onClick={onExploreClick}
              className="px-7 py-3.5 bg-[#C5A880] hover:bg-[#B89355] text-[#0A0B0D] font-bold text-sm rounded-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-98 tap-target"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={AGENT_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#191C20]/90 hover:bg-[#252A30] text-stone-100 border border-stone-600/80 font-semibold text-sm rounded-sm transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-98 tap-target"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A880]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Verified C of O & R of O</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Maitama • Asokoro • Guzape • Jabi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
              <span>Direct Representation</span>
            </div>
          </div>
        </div>

        {/* Interactive Floating Quick Search Box */}
        <div className="mt-10 sm:mt-12 bg-[#14171A]/95 border border-stone-700/70 rounded-sm p-4 sm:p-5 shadow-2xl backdrop-blur-xs max-w-5xl">
          <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Location / District */}
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C5A880]" />
                <span>District</span>
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-[#1E2227] border border-stone-700 rounded-sm text-stone-200 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
              >
                <option value="all">All Abuja Districts</option>
                <option value="Maitama">Maitama</option>
                <option value="Asokoro">Asokoro</option>
                <option value="Guzape">Guzape</option>
                <option value="Jabi">Jabi</option>
                <option value="Katampe Extension">Katampe Extension</option>
                <option value="Wuse 2">Wuse 2</option>
                <option value="Gwarinpa">Gwarinpa</option>
                <option value="Airport Road">Airport Road</option>
                <option value="Karsana">Karsana</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Building className="w-3 h-3 text-[#C5A880]" />
                <span>Property Type</span>
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-[#1E2227] border border-stone-700 rounded-sm text-stone-200 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
              >
                <option value="all">All Property Types</option>
                <option value="duplex">Detached Duplex / Mansion</option>
                <option value="villa">Hilltop Villa</option>
                <option value="terrace">Contemporary Terrace</option>
                <option value="land">Titled Land / Plots</option>
                <option value="commercial">Commercial Plaza</option>
              </select>
            </div>

            {/* Purpose: For Sale / For Rent */}
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1">
                Purpose
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-[#1E2227] border border-stone-700 rounded-sm text-stone-200 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
              >
                <option value="all">Sale & Rent</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#C5A880]" />
                <span>Budget Range</span>
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full py-2.5 px-3 text-xs bg-[#1E2227] border border-stone-700 rounded-sm text-stone-200 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]"
              >
                <option value="all">Any Price</option>
                <option value="under-100m">Under ₦100 Million</option>
                <option value="100m-250m">₦100M – ₦250 Million</option>
                <option value="250m-500m">₦250M – ₦500 Million</option>
                <option value="500m-1b">₦500M – ₦1 Billion</option>
                <option value="1b-plus">₦1 Billion & Above</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-bold text-xs rounded-sm shadow flex items-center justify-center gap-2 transition-all tap-target"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Abuja</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
