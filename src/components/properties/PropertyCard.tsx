import React from 'react';
import { Bed, Bath, Maximize, MapPin, MessageSquare, Heart, Eye, FileText, CheckCircle2 } from 'lucide-react';
import type { Property } from '../../types/property';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
  isFavorite,
  onToggleFavorite,
}) => {
  const isLand = property.type === 'land';

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = AGENT_CONFIG.getPropertyWhatsAppUrl(
      property.title,
      property.formattedPrice + (property.pricePeriod || ''),
      property.district,
      property.id
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(property.id);
  };

  return (
    <article
      onClick={() => onViewDetails(property)}
      className="group bg-white rounded-sm border border-stone-200/90 hover:border-[#C5A880]/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Property Thumbnail & Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={property.images[0]?.url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'}
          alt={property.images[0]?.alt || property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Subtle Dark Gradient at bottom of image for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges: Status & Title */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          <span
            className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-sm shadow-sm ${
              property.status === 'for-sale'
                ? 'bg-[#111315] text-white border border-stone-700'
                : 'bg-emerald-800 text-white'
            }`}
          >
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>

          <span className="px-2 py-1 text-[11px] font-medium bg-white/95 text-stone-900 rounded-sm shadow-sm flex items-center gap-1">
            <FileText className="w-3 h-3 text-[#B89355]" />
            <span>{property.titleDocument}</span>
          </span>
        </div>

        {/* Top Right: Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
          aria-label={isFavorite ? 'Remove from saved' : 'Save property'}
          title={isFavorite ? 'Remove from saved' : 'Save property'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'text-[#C5A880] fill-[#C5A880]' : 'text-white hover:text-[#C5A880]'
            }`}
          />
        </button>

        {/* Bottom of Image: District Badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 text-white text-xs font-medium bg-[#111315]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{property.district}, Abuja</span>
        </div>

        {/* Verified Inspection Tag */}
        <div className="absolute bottom-3 right-3 z-10 text-[10px] text-stone-200 bg-black/60 px-2 py-0.5 rounded-sm flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>AGIS Verified</span>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Type Label & Price */}
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9E773A]">
              {property.typeLabel}
            </span>
            <span className="text-xs text-stone-400 font-mono">
              Ref: {property.id}
            </span>
          </div>

          <div className="mb-2">
            <div className="text-xl sm:text-2xl font-bold font-serif text-[#111315] tracking-tight">
              {property.formattedPrice}
              {property.pricePeriod && (
                <span className="text-xs font-sans font-normal text-stone-500 ml-1">
                  {property.pricePeriod}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#9E773A] transition-colors line-clamp-1 mb-2">
            {property.title}
          </h3>

          {/* Short Description */}
          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {property.shortDescription}
          </p>
        </div>

        {/* Specs Bar (Beds, Baths, Area) */}
        <div>
          <div className="pt-3 pb-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-stone-700 text-xs">
            {!isLand ? (
              <>
                <div className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-stone-400" />
                  <span className="font-semibold text-stone-900">{property.bedrooms}</span>
                  <span className="text-stone-500 truncate">Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-stone-400" />
                  <span className="font-semibold text-stone-900">{property.bathrooms}</span>
                  <span className="text-stone-500 truncate">Baths</span>
                </div>
              </>
            ) : (
              <div className="col-span-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-stone-400" />
                <span className="text-stone-600 truncate">Zoning: Residential</span>
              </div>
            )}

            <div className="flex items-center gap-1.5 justify-end">
              <Maximize className="w-4 h-4 text-stone-400" />
              <span className="font-semibold text-stone-900">{property.areaSqm}</span>
              <span className="text-stone-500">m²</span>
            </div>
          </div>

          {/* Action Buttons: View Property & WhatsApp */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onViewDetails(property)}
              className="w-full py-2.5 px-3 rounded-sm bg-[#191C20] hover:bg-[#111315] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-900 tap-target"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>View Property</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full py-2.5 px-3 rounded-sm bg-[#F5F1EA] hover:bg-[#EAE2D5] text-[#543E19] border border-[#C5A880]/50 text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors tap-target"
              title="Chat on WhatsApp about this property"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#9E773A]" />
              <span className="truncate">WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
