import React, { useState } from 'react';
import { Search, SlidersHorizontal, RotateCcw, X, MapPin, Building, Tag, ArrowUpDown } from 'lucide-react';
import type { SearchFiltersState, AbujaDistrict } from '../../types/property';

interface SearchFiltersProps {
  filters: SearchFiltersState;
  onFilterChange: (newFilters: Partial<SearchFiltersState>) => void;
  onResetFilters: () => void;
  totalResults: number;
}

const DISTRICTS: (AbujaDistrict | 'All')[] = [
  'All',
  'Maitama',
  'Asokoro',
  'Guzape',
  'Jabi',
  'Katampe Extension',
  'Wuse 2',
  'Gwarinpa',
  'Airport Road',
  'Karsana'
];

const PROPERTY_TYPES: { label: string; value: string }[] = [
  { label: 'All Property Types', value: 'all' },
  { label: 'Detached Duplex / Mansion', value: 'duplex' },
  { label: 'Hilltop Villa', value: 'villa' },
  { label: 'Contemporary Terrace', value: 'terrace' },
  { label: 'Titled Land & Plots', value: 'land' },
  { label: 'Commercial Corporate Plaza', value: 'commercial' },
];

const PRICE_RANGES = [
  { label: 'All Budgets', value: 'all' },
  { label: 'Under ₦100 Million', value: 'under-100m' },
  { label: '₦100M – ₦250 Million', value: '100m-250m' },
  { label: '₦250M – ₦500 Million', value: '250m-500m' },
  { label: '₦500M – ₦1 Billion', value: '500m-1b' },
  { label: '₦1 Billion & Above', value: '1b-plus' },
];

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const hasActiveFilters = 
    filters.query !== '' ||
    filters.status !== 'all' ||
    filters.type !== 'all' ||
    filters.district !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.bedrooms !== 'all' ||
    filters.titleDocument !== 'all';

  return (
    <div className="bg-white rounded-sm border border-stone-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 sm:p-6 mb-8">
      {/* Primary Row: Search Keyword, Status Toggle, and Advanced Toggle */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filters.query}
            onChange={(e) => onFilterChange({ query: e.target.value })}
            placeholder="Search by district (e.g. Maitama), title, or feature..."
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-stone-50 hover:bg-white focus:bg-white border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-900 placeholder:text-stone-400 transition-colors"
          />
          {filters.query && (
            <button
              onClick={() => onFilterChange({ query: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
              aria-label="Clear search text"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Toggle (All / For Sale / For Rent) */}
        <div className="flex items-center bg-stone-100 p-1 rounded-sm border border-stone-200 text-xs font-semibold shrink-0">
          <button
            type="button"
            onClick={() => onFilterChange({ status: 'all' })}
            className={`px-3 py-2 rounded-sm transition-all ${
              filters.status === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Listings
          </button>
          <button
            type="button"
            onClick={() => onFilterChange({ status: 'for-sale' })}
            className={`px-3 py-2 rounded-sm transition-all ${
              filters.status === 'for-sale'
                ? 'bg-[#111315] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            For Sale
          </button>
          <button
            type="button"
            onClick={() => onFilterChange({ status: 'for-rent' })}
            className={`px-3 py-2 rounded-sm transition-all ${
              filters.status === 'for-rent'
                ? 'bg-[#111315] text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            For Rent
          </button>
        </div>

        {/* Toggle Filters Button */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`px-4 py-2.5 rounded-sm border text-xs font-semibold flex items-center justify-center gap-2 transition-colors shrink-0 ${
            showAdvanced || hasActiveFilters
              ? 'bg-[#1A1D20] text-white border-[#1A1D20]'
              : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Filters {hasActiveFilters && '(Active)'}</span>
        </button>
      </div>

      {/* Quick District Scroll Chips */}
      <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider whitespace-nowrap mr-1 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-[#9E773A]" />
          <span>Districts:</span>
        </span>
        {DISTRICTS.map((district) => {
          const isSelected = (filters.district === 'all' && district === 'All') || filters.district === district;
          return (
            <button
              key={district}
              onClick={() => onFilterChange({ district: district === 'All' ? 'all' : district })}
              className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#111315] text-white font-medium shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {district}
            </button>
          );
        })}
      </div>

      {/* Expandable Advanced Filter Panel */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          {/* Property Type Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Building className="w-3 h-3 text-[#9E773A]" />
              <span>Property Type</span>
            </label>
            <select
              value={filters.type}
              onChange={(e) => onFilterChange({ type: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
            >
              {PROPERTY_TYPES.map((pt) => (
                <option key={pt.value} value={pt.value}>
                  {pt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#9E773A]" />
              <span>Price Range</span>
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => onFilterChange({ priceRange: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
            >
              {PRICE_RANGES.map((pr) => (
                <option key={pr.value} value={pr.value}>
                  {pr.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Minimum Bedrooms
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
            >
              <option value="all">Any Bedrooms</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          {/* Title Document */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Title Document
            </label>
            <select
              value={filters.titleDocument}
              onChange={(e) => onFilterChange({ titleDocument: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
            >
              <option value="all">All Documents</option>
              <option value="C of O">Certificate of Occupancy (C of O)</option>
              <option value="Governor's Consent">Governor's Consent</option>
              <option value="R of O (FCDA)">Right of Occupancy (R of O)</option>
            </select>
          </div>
        </div>
      )}

      {/* Bottom Bar: Results Count & Active Tags */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-900">
            {totalResults} {totalResults === 1 ? 'property' : 'properties'} available
          </span>
          {hasActiveFilters && (
            <span className="text-stone-400">• matching your criteria</span>
          )}
        </div>

        {/* Reset Filters & Sorting */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
              className="py-1 px-2 text-xs bg-transparent border-0 border-b border-stone-200 focus:border-[#C5A880] text-stone-800 font-medium cursor-pointer"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="size-desc">Size: Largest First</option>
              <option value="newest">Newest Listed</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-[#9E773A] hover:text-[#543E19] font-semibold text-xs py-1 px-2 hover:bg-[#FAF8F4] rounded transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
