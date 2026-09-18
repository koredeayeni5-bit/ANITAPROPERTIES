import React from 'react';
import { ShieldCheck, CheckCircle2, MessageSquare, Phone, FileCheck } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';

export const AboutAnitaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F6F2] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Placeholder Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative gold accent border */}
              <div className="absolute -inset-3 border border-[#C5A880]/50 rounded-sm pointer-events-none -z-0" />

              {/* Photo Frame Container */}
              <div className="relative z-10 bg-[#16191D] rounded-sm overflow-hidden shadow-xl aspect-[4/5] border border-stone-800 flex flex-col items-center justify-center p-6 text-center">
                {/* Professional Photo Placeholder Graphic */}
                <div className="w-32 h-32 rounded-full bg-[#1F242B] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] mb-4 shadow-inner">
                  <span className="font-serif font-bold text-4xl">A</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-white">
                    Anita
                  </h3>
                  <p className="text-xs text-[#C5A880] font-medium tracking-wide uppercase">
                    Abuja Property Consultant & Advisory
                  </p>
                  <p className="text-xs text-stone-400">
                    ANITA PROPERTIES • Abuja, Nigeria
                  </p>
                </div>

                {/* Agent Photo Placeholder Note */}
                <div className="mt-6 pt-4 border-t border-stone-800/80 text-[11px] text-stone-400 leading-snug">
                  [ Professional Photo Placeholder: Ready for Anita’s official headshot ]
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active & Available for Inspections</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Bio & Core Commitments (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#C5A880]/60 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Professional Representation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Dedicated Real Estate Advisory in Abuja
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Navigating the Abuja property market requires clear guidance, verified documentation, and transparent communication. At <strong>Anita Properties</strong>, my focus is on helping clients acquire legitimate land, premium residential duplexes, serviced terraces, and commercial properties with complete peace of mind.
              </p>
              <p>
                Whether you are looking to purchase a family residence in Maitama or Asokoro, secure titled investment land along the Airport Road or Katampe Extension corridors, or require a modern office plaza in Wuse 2, every listing presented is handled with meticulous due diligence.
              </p>
              <p>
                For clients resident outside Abuja or in the diaspora, I provide structured virtual video tours, regular on-site inspection updates, and coordinate with accredited legal counsel to ensure secure transaction workflows.
              </p>
            </div>

            {/* Core Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-sm border border-stone-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <FileCheck className="w-4 h-4 text-[#9E773A]" />
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    Title Due Diligence
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Verification of Certificate of Occupancy (C of O), Right of Occupancy (R of O), and cadastral records with AGIS prior to closing.
                </p>
              </div>

              <div className="p-4 bg-white rounded-sm border border-stone-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#9E773A]" />
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    Direct Negotiations
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Transparent representation directly connecting buyers with property owners and reputable developers without inflated intermediary fees.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={AGENT_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm transition-all tap-target"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Speak with Anita on WhatsApp</span>
              </a>

              <a
                href={`tel:${AGENT_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium text-xs rounded-sm transition-colors tap-target"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E773A]" />
                <span>Call {AGENT_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
