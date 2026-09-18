import React, { useState } from 'react';
import { 
  ArrowLeft, MapPin, Bed, Bath, Maximize, Calendar, Share2, Heart, 
  MessageSquare, Phone, CheckCircle2, ShieldCheck, FileText, 
  Compass, Building, Check, ExternalLink 
} from 'lucide-react';
import type { Property } from '../../types/property';
import { ImageGallery } from './ImageGallery';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface PropertyDetailsProps {
  property: Property;
  onBack: () => void;
  onScheduleInspection: (property: Property) => void;
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  property,
  onBack,
  onScheduleInspection,
  isFavorite,
  onToggleFavorite
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const isLand = property.type === 'land';

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${property.title} | Anita Properties Abuja`,
          text: `Check out ${property.title} in ${property.district}, Abuja listed for ${property.formattedPrice}`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const url = AGENT_CONFIG.getPropertyWhatsAppUrl(
      property.title,
      property.formattedPrice + (property.pricePeriod || ''),
      property.district,
      property.id
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] pb-24 lg:pb-16 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-stone-700 hover:text-[#9E773A] font-semibold text-xs uppercase tracking-wider py-2 px-3 rounded-sm bg-white border border-stone-200 transition-colors shadow-2xs tap-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Listings</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-stone-900 bg-white border border-stone-200 py-2 px-3 rounded-sm text-xs font-medium transition-colors shadow-2xs tap-target"
              title="Share property"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-stone-500" />
                  <span>Share</span>
                </>
              )}
            </button>

            {/* Favorite Button */}
            <button
              type="button"
              onClick={() => onToggleFavorite(property.id)}
              className={`inline-flex items-center gap-1.5 py-2 px-3 rounded-sm border text-xs font-medium transition-colors shadow-2xs tap-target ${
                isFavorite
                  ? 'bg-[#FAF8F4] text-[#9E773A] border-[#C5A880]'
                  : 'bg-white text-stone-700 border-stone-200 hover:text-stone-900'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#C5A880] text-[#C5A880]' : 'text-stone-400'}`} />
              <span>{isFavorite ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        {/* Title, Badges & Price Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`px-2.5 py-1 text-xs uppercase tracking-wider font-semibold rounded-sm ${
                property.status === 'for-sale'
                  ? 'bg-[#111315] text-white'
                  : 'bg-emerald-800 text-white'
              }`}
            >
              {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="px-2.5 py-1 text-xs font-medium bg-[#F5F1EA] text-[#543E19] border border-[#C5A880]/40 rounded-sm">
              {property.typeLabel}
            </span>
            <span className="px-2.5 py-1 text-xs font-medium bg-white border border-stone-200 text-stone-700 rounded-sm flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-[#9E773A]" />
              <span>Title: {property.titleDocument}</span>
            </span>
            <span className="text-xs text-stone-400 font-mono ml-auto">
              Property ID: {property.id}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111315] leading-tight mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-1.5 text-stone-600 text-sm">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{property.address}</span>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#111315]">
                {property.formattedPrice}
                {property.pricePeriod && (
                  <span className="text-sm font-sans font-normal text-stone-500 ml-1">
                    {property.pricePeriod}
                  </span>
                )}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Verified Direct Pricing • No Markups
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Left Gallery & Details, Right Sticky Contact Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (8 cols): Gallery, Specs, Description, Features, Map */}
          <div className="lg:col-span-8 space-y-8">
            {/* Interactive Image Gallery */}
            <div className="bg-white p-2 sm:p-3 rounded-sm border border-stone-200/90 shadow-xs">
              <ImageGallery images={property.images} propertyTitle={property.title} />
            </div>

            {/* Key Quick Specifications Bar */}
            <div className="bg-white rounded-sm border border-stone-200/90 p-5 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4">
              {!isLand ? (
                <>
                  <div className="border-r border-stone-100 last:border-r-0 pr-2">
                    <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Bedrooms</span>
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-[#9E773A]" />
                      <span className="font-serif font-bold text-lg text-stone-900">{property.bedrooms} Beds</span>
                    </div>
                  </div>

                  <div className="border-r border-stone-100 last:border-r-0 pr-2">
                    <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Bathrooms</span>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-[#9E773A]" />
                      <span className="font-serif font-bold text-lg text-stone-900">{property.bathrooms} Baths</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="border-r border-stone-100 last:border-r-0 pr-2">
                    <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Topography</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="font-serif font-bold text-sm text-stone-900">100% Dry Land</span>
                    </div>
                  </div>

                  <div className="border-r border-stone-100 last:border-r-0 pr-2">
                    <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Zoning</span>
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-[#9E773A]" />
                      <span className="font-serif font-bold text-sm text-stone-900">Residential</span>
                    </div>
                  </div>
                </>
              )}

              <div className="border-r border-stone-100 last:border-r-0 pr-2">
                <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Floor / Plot Area</span>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-[#9E773A]" />
                  <span className="font-serif font-bold text-lg text-stone-900">{property.areaSqm} m²</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-stone-500 uppercase tracking-wider block mb-1">Title Document</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-serif font-bold text-sm text-stone-900 truncate">{property.titleDocument}</span>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Property Overview
              </h2>
              <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                {property.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Features & Amenities Section */}
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3 mb-6">
                Key Features & Infrastructure
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xs hover:bg-stone-50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#FAF8F4] border border-[#C5A880]/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#9E773A]" />
                    </div>
                    <span className="text-stone-800 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Details Table */}
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 border-b border-stone-100 pb-3 mb-4">
                Detailed Property Specifications
              </h2>
              <div className="divide-y divide-stone-100 text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Property Reference ID</span>
                  <span className="font-mono font-semibold text-stone-900">{property.id}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Property Type</span>
                  <span className="font-medium text-stone-900">{property.typeLabel}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">District / Location</span>
                  <span className="font-medium text-stone-900">{property.district}, Abuja, Nigeria</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Legal Title</span>
                  <span className="font-semibold text-emerald-700">{property.titleDocument}</span>
                </div>
                {property.parkingSpaces !== undefined && property.parkingSpaces > 0 && (
                  <div className="py-2.5 flex justify-between">
                    <span className="text-stone-500">Dedicated Parking Bays</span>
                    <span className="font-medium text-stone-900">{property.parkingSpaces} Vehicles</span>
                  </div>
                )}
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Furnishing State</span>
                  <span className="font-medium text-stone-900">{property.furnishing}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Development Condition</span>
                  <span className="font-medium text-stone-900">{property.condition}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-stone-500">Verification Status</span>
                  <span className="font-medium text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    AGIS Cadastral Record Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Neighborhood & Proximity Section */}
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Location & Abuja Proximity
                </h2>
                <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{property.district} District</span>
                </span>
              </div>

              <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                Strategic connectivity to major diplomatic institutions, commercial centers, and transportation arteries across Abuja.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {property.landmarks.map((landmark, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-sm border border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#9E773A]" />
                      <span className="text-xs sm:text-sm font-medium text-stone-800">{landmark.name}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-stone-900 block">{landmark.driveTime}</span>
                      <span className="text-[10px] text-stone-400">{landmark.distance}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated Map Visual */}
              <div className="relative rounded-sm overflow-hidden border border-stone-200 aspect-[16/7] bg-[#EAE8E2] flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#111315_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 max-w-md">
                  <div className="w-10 h-10 rounded-full bg-[#111315] text-[#C5A880] flex items-center justify-center mx-auto mb-2 shadow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-serif font-bold text-stone-900 text-base">
                    {property.district} District, Abuja
                  </div>
                  <p className="text-stone-600 text-xs mt-1">
                    Exact street address, survey beacons, and cadastral coordinates provided during scheduled private inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Desktop Sticky Agent & Action Box */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Main Agent Action Card */}
              <div className="bg-white rounded-sm border-2 border-[#C5A880]/40 p-6 shadow-md">
                {/* Agent Header */}
                <div className="flex items-center gap-3.5 pb-5 border-b border-stone-100">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#191C20] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] font-serif font-bold text-xl overflow-hidden shadow">
                      <span>A</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-0.5" title="Verified Agent">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-stone-900">
                      Anita
                    </h3>
                    <p className="text-xs text-[#9E773A] font-medium">
                      Senior Property Consultant
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Anita Properties • Abuja
                    </p>
                  </div>
                </div>

                {/* Primary WhatsApp CTA */}
                <div className="pt-5 space-y-3">
                  <div className="text-xs text-stone-600 mb-1">
                    Interested in this property? Inquire directly on WhatsApp for prompt assistance:
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3.5 px-4 bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-semibold text-sm rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98 tap-target"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat with Anita on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onScheduleInspection(property)}
                    className="w-full py-3.5 px-4 bg-[#111315] hover:bg-[#1A1D20] text-white font-semibold text-sm rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98 tap-target"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A880]" />
                    <span>Schedule Inspection</span>
                  </button>

                  <a
                    href={`tel:${AGENT_CONFIG.phoneRaw}`}
                    className="w-full py-3 px-4 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium text-xs rounded-sm flex items-center justify-center gap-2 transition-colors tap-target"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9E773A]" />
                    <span>Direct Call: {AGENT_CONFIG.phoneDisplay}</span>
                  </a>
                </div>

                {/* Due Diligence Reassurance */}
                <div className="mt-6 pt-5 border-t border-stone-100 bg-[#FAF8F4] -mx-6 -mb-6 p-4 rounded-b-sm">
                  <div className="flex items-start gap-2 text-xs text-stone-700">
                    <ShieldCheck className="w-4 h-4 text-[#9E773A] shrink-0 mt-0.5" />
                    <div className="leading-snug">
                      <span className="font-semibold text-stone-900 block">Inspection & Search Support</span>
                      Physical escort, AGIS legal search files, and title documentation assistance provided.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Card */}
              <div className="bg-white rounded-sm border border-stone-200/90 p-5 text-xs text-stone-600 space-y-2.5">
                <span className="font-semibold text-stone-900 block uppercase tracking-wider text-[11px]">
                  Buying or Renting from Diaspora?
                </span>
                <p className="leading-relaxed">
                  Anita offers live WhatsApp video walkthroughs and legal title verification services for Nigerians living abroad.
                </p>
                <button
                  onClick={() => onScheduleInspection(property)}
                  className="text-[#9E773A] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Request Virtual Video Tour</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Action Bar (One Hand Usage) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111315] border-t border-stone-800 p-3 px-4 flex items-center gap-3 shadow-2xl">
        <div className="shrink-0">
          <div className="text-[10px] text-stone-400 uppercase tracking-wider">Price</div>
          <div className="font-serif font-bold text-white text-sm">
            {property.formattedPrice}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onScheduleInspection(property)}
          className="flex-1 py-3 px-2 bg-stone-800 text-stone-200 hover:text-white text-xs font-semibold rounded-sm border border-stone-700 flex items-center justify-center gap-1.5 tap-target"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Inspect</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 bg-[#C5A880] text-[#0B0C0E] text-xs font-bold rounded-sm shadow flex items-center justify-center gap-1.5 tap-target"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
