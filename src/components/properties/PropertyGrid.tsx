import React from 'react';
import type { Property } from '../../types/property';
import { PropertyCard } from './PropertyCard';
import { Building, RotateCcw } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
  favorites: string[];
  onToggleFavorite: (propertyId: string) => void;
  onResetFilters?: () => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  onViewDetails,
  favorites,
  onToggleFavorite,
  onResetFilters
}) => {
  if (properties.length === 0) {
    return (
      <div className="bg-white rounded-sm border border-stone-200/90 p-12 text-center my-8 max-w-xl mx-auto shadow-xs">
        <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
          <Building className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
          No Properties Found
        </h3>
        <p className="text-stone-600 text-sm mb-6 leading-relaxed">
          We could not find any properties matching your current search criteria. Try adjusting your district, property type, or price filters.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111315] hover:bg-[#1A1D20] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors tap-target"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onViewDetails={onViewDetails}
          isFavorite={favorites.includes(property.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
