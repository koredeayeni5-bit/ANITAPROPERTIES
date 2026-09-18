import React from 'react';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { NEIGHBORHOODS_DATA } from '../../data/neighborhoodsData';
import type { AbujaDistrict } from '../../types/property';

interface NeighborhoodsSectionProps {
  onSelectDistrict: (district: AbujaDistrict) => void;
}

export const NeighborhoodsSection: React.FC<NeighborhoodsSectionProps> = ({ onSelectDistrict }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F4] border border-[#C5A880]/50 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Location Insights</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              Prime Abuja Districts & Neighborhoods
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore key investment corridors, diplomatic sectors, and serene family residential areas across the Federal Capital Territory.
            </p>
          </div>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEIGHBORHOODS_DATA.map((district) => (
            <div
              key={district.name}
              onClick={() => onSelectDistrict(district.name)}
              className="group bg-stone-50 rounded-sm border border-stone-200/90 overflow-hidden hover:border-[#C5A880]/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={district.image}
                  alt={district.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#111315]/80 backdrop-blur-xs text-[#C5A880] border border-[#C5A880]/40 rounded-sm">
                    {district.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-xl drop-shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C5A880]" />
                    <span>{district.name}</span>
                  </h3>
                  <p className="text-stone-200 text-xs mt-0.5 line-clamp-1">
                    {district.tagline}
                  </p>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {district.description}
                </p>

                <div className="space-y-3 pt-3 border-t border-stone-200/60 text-xs">
                  <div>
                    <span className="font-semibold text-stone-900 block mb-1">Key Highlights:</span>
                    <ul className="space-y-1 text-stone-600">
                      {district.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#9E773A]">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[#9E773A] font-semibold group-hover:text-[#543E19]">
                    <span>View {district.name} Properties</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
