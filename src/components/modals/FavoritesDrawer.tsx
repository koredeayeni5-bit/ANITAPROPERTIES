import React from 'react';
import { X, Heart, Trash2, MessageSquare, Eye } from 'lucide-react';
import type { Property } from '../../types/property';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allProperties: Property[];
  onRemoveFavorite: (propertyId: string) => void;
  onClearAll: () => void;
  onViewProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  allProperties,
  onRemoveFavorite,
  onClearAll,
  onViewProperty
}) => {
  if (!isOpen) return null;

  const savedProperties = allProperties.filter((p) => favorites.includes(p.id));

  const handleWhatsAppAll = () => {
    if (savedProperties.length === 0) return;
    const url = AGENT_CONFIG.getMultiPropertyWhatsAppUrl(
      savedProperties.map((p) => ({
        title: p.title,
        price: p.formattedPrice,
        location: `${p.district}, Abuja`
      }))
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-[#C5A880]/50 flex items-center justify-center text-[#9E773A]">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Saved Properties ({savedProperties.length})
              </h3>
              <p className="text-[11px] text-stone-500">
                Your shortlisted Abuja properties
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full tap-target flex items-center justify-center"
            aria-label="Close saved properties drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Property List Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedProperties.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3 text-stone-400">
                <Heart className="w-6 h-6" />
              </div>
              <p className="font-serif font-bold text-stone-800 text-sm mb-1">
                No Saved Properties Yet
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
                Click the heart icon on any property card to save properties for quick comparison or WhatsApp inquiry.
              </p>
            </div>
          ) : (
            savedProperties.map((property) => (
              <div
                key={property.id}
                className="p-3 bg-[#FAF9F7] rounded-sm border border-stone-200/80 hover:border-[#C5A880]/60 transition-colors flex gap-3 relative group"
              >
                {/* Thumbnail */}
                <img
                  src={property.images[0]?.url}
                  alt={property.title}
                  className="w-20 h-20 object-cover rounded-xs shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0 pr-6">
                  <span className="text-[10px] uppercase font-bold text-[#9E773A] block truncate">
                    {property.district} • {property.typeLabel}
                  </span>
                  <h4 className="font-serif font-bold text-xs text-stone-900 truncate mt-0.5">
                    {property.title}
                  </h4>
                  <div className="font-serif font-bold text-stone-900 text-sm mt-1">
                    {property.formattedPrice}
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onViewProperty(property);
                        onClose();
                      }}
                      className="text-[11px] text-[#111315] hover:text-[#9E773A] font-semibold flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3 text-[#C5A880]" />
                      <span>View</span>
                    </button>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => onRemoveFavorite(property.id)}
                  className="absolute top-2 right-2 text-stone-400 hover:text-red-600 p-1 transition-colors"
                  title="Remove from saved"
                  aria-label={`Remove ${property.title} from saved`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedProperties.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2">
            <button
              type="button"
              onClick={handleWhatsAppAll}
              className="w-full py-3 px-4 bg-[#C5A880] hover:bg-[#B89355] text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all tap-target"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire About All on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={onClearAll}
              className="w-full py-2 text-stone-500 hover:text-stone-800 text-[11px] font-medium text-center"
            >
              Clear All Saved Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
