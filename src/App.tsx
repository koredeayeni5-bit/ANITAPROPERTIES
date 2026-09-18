import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutAnitaSection } from './components/sections/AboutAnitaSection';
import { NeighborhoodsSection } from './components/sections/NeighborhoodsSection';
import { ContactSection } from './components/sections/ContactSection';
import { PropertyCard } from './components/properties/PropertyCard';
import { PropertyGrid } from './components/properties/PropertyGrid';
import { PropertyDetails } from './components/properties/PropertyDetails';
import { SearchFilters } from './components/properties/SearchFilters';
import { MortgageCalculator } from './components/common/MortgageCalculator';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ScheduleInspectionModal } from './components/modals/ScheduleInspectionModal';
import { FavoritesDrawer } from './components/modals/FavoritesDrawer';
import { PROPERTIES_DATA } from './data/propertiesData';
import type { Property, SearchFiltersState, AbujaDistrict } from './types/property';
import { AGENT_CONFIG } from './config/agentInfo';
import { ArrowRight, Compass, Sparkles, MessageSquare } from 'lucide-react';

const INITIAL_FILTERS: SearchFiltersState = {
  query: '',
  status: 'all',
  type: 'all',
  district: 'all',
  priceRange: 'all',
  bedrooms: 'all',
  titleDocument: 'all',
  sortBy: 'featured',
};

export const App: React.FC = () => {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter State
  const [filters, setFilters] = useState<SearchFiltersState>(INITIAL_FILTERS);

  // Favorites state (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anita_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const [inspectionTargetProperty, setInspectionTargetProperty] = useState<Property | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('anita_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore write errors
    }
  }, [favorites]);

  // Sync with URL hash for shareable links & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('property/')) {
        const propId = hash.replace('property/', '');
        const found = PROPERTIES_DATA.find((p) => p.id.toLowerCase() === propId.toLowerCase() || p.slug === propId);
        if (found) {
          setSelectedProperty(found);
          setCurrentView('property-detail');
          return;
        }
      }

      if (['home', 'properties', 'about', 'neighborhoods', 'calculator', 'contact'].includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // View Navigation Helper
  const handleNavigate = (view: string, params?: { district?: string }) => {
    setCurrentView(view);
    if (params?.district) {
      setFilters((prev) => ({ ...prev, district: params.district || 'all' }));
    }
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Property Details
  const handleViewPropertyDetails = (property: Property) => {
    setSelectedProperty(property);
    setCurrentView('property-detail');
    window.location.hash = `property/${property.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle Favorite
  const handleToggleFavorite = (propertyId: string) => {
    setFavorites((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  // Clear All Favorites
  const handleClearFavorites = () => {
    setFavorites([]);
  };

  // Open Inspection Modal
  const handleOpenInspection = (property: Property) => {
    setInspectionTargetProperty(property);
    setIsInspectionModalOpen(true);
  };

  // District Selection from Guide
  const handleSelectDistrict = (district: AbujaDistrict) => {
    setFilters((prev) => ({ ...prev, district }));
    setCurrentView('properties');
    window.location.hash = 'properties';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hero Quick Search
  const handleHeroSearch = (params: { district: string; type: string; status: string; priceRange: string }) => {
    setFilters((prev) => ({
      ...prev,
      district: params.district,
      type: params.type,
      status: params.status as any,
      priceRange: params.priceRange,
    }));
    setCurrentView('properties');
    window.location.hash = 'properties';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and Sort properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // Search query (keyword match across title, district, description, features)
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDistrict = item.district.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesFeature = item.features.some((f) => f.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDistrict && !matchesDesc && !matchesFeature) {
          return false;
        }
      }

      // Status
      if (filters.status !== 'all' && item.status !== filters.status) {
        return false;
      }

      // Property Type
      if (filters.type !== 'all' && item.type !== filters.type) {
        return false;
      }

      // District
      if (filters.district !== 'all' && item.district !== filters.district) {
        return false;
      }

      // Bedrooms
      if (filters.bedrooms !== 'all') {
        const requiredBeds = parseInt(filters.bedrooms, 10);
        if (item.bedrooms < requiredBeds) return false;
      }

      // Title Document
      if (filters.titleDocument !== 'all' && item.titleDocument !== filters.titleDocument) {
        return false;
      }

      // Price Range Filter
      if (filters.priceRange !== 'all') {
        const p = item.price;
        switch (filters.priceRange) {
          case 'under-100m':
            if (p >= 100000000) return false;
            break;
          case '100m-250m':
            if (p < 100000000 || p >= 250000000) return false;
            break;
          case '250m-500m':
            if (p < 250000000 || p >= 500000000) return false;
            break;
          case '500m-1b':
            if (p < 500000000 || p >= 1000000000) return false;
            break;
          case '1b-plus':
            if (p < 1000000000) return false;
            break;
        }
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'size-desc':
          return b.areaSqm - a.areaSqm;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [filters]);

  // Featured properties for Home view
  const featuredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => p.featured);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#16191D]">
      {/* Header / Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Content Areas based on Current View */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            {/* Hero Section */}
            <HeroSection
              onExploreClick={() => handleNavigate('properties')}
              onSearchSubmit={handleHeroSearch}
            />

            {/* FEATURED PROPERTIES SECTION */}
            <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F4] border border-[#C5A880]/50 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Curated Abuja Listings</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
                    Featured Properties
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                    Hand-selected luxury duplexes, hilltop villas, waterfront residences, and prime titled plots in Abuja.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigate('properties')}
                  className="inline-flex items-center gap-2 text-stone-900 hover:text-[#9E773A] font-semibold text-sm border-b-2 border-[#C5A880] pb-1 self-start md:self-auto transition-colors"
                >
                  <span>Browse All Available Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Featured Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onViewDetails={handleViewPropertyDetails}
                    isFavorite={favorites.includes(property.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            </section>

            {/* ABUJA DISTRICTS HIGHLIGHT SECTION */}
            <NeighborhoodsSection onSelectDistrict={handleSelectDistrict} />

            {/* ABOUT ANITA SECTION */}
            <AboutAnitaSection />

            {/* MORTGAGE / FINANCIAL CALCULATOR SECTION */}
            <section className="py-16 bg-[#F5F4F0] border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MortgageCalculator />
              </div>
            </section>

            {/* PRE-FOOTER WHATSAPP BANNER */}
            <section className="bg-[#111315] text-white py-16 px-4 border-t border-stone-800">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F4]/10 border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#C5A880]">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                  Looking for a Specific Property in Abuja?
                </h2>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Tell Anita your preferred district, required bedrooms, and budget. Receive direct off-market options and schedule an in-person or virtual inspection.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={AGENT_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-[#C5A880] hover:bg-[#B89355] text-[#0A0B0D] font-bold text-sm rounded-sm shadow transition-all active:scale-98 tap-target inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleNavigate('contact')}
                    className="px-8 py-3.5 bg-[#1C2025] hover:bg-[#282E36] text-white border border-stone-700 font-semibold text-sm rounded-sm transition-colors tap-target"
                  >
                    Send Property Inquiry Form
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: FULL PROPERTIES CATALOG */}
        {currentView === 'properties' && (
          <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F4] border border-[#C5A880]/50 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Abuja Real Estate Portfolio</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
                Browse Properties
              </h1>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                Verified luxury duplexes, modern villas, serviced terraces, commercial spaces, and titled plots in Abuja.
              </p>
            </div>

            {/* Interactive Filters */}
            <SearchFilters
              filters={filters}
              onFilterChange={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
              onResetFilters={() => setFilters(INITIAL_FILTERS)}
              totalResults={filteredProperties.length}
            />

            {/* Property Grid */}
            <PropertyGrid
              properties={filteredProperties}
              onViewDetails={handleViewPropertyDetails}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onResetFilters={() => setFilters(INITIAL_FILTERS)}
            />
          </div>
        )}

        {/* VIEW 3: PROPERTY DETAILS PAGE */}
        {currentView === 'property-detail' && selectedProperty && (
          <PropertyDetails
            property={selectedProperty}
            onBack={() => handleNavigate('properties')}
            onScheduleInspection={handleOpenInspection}
            isFavorite={favorites.includes(selectedProperty.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* VIEW 4: ABUJA NEIGHBORHOODS & DISTRICTS GUIDE */}
        {currentView === 'neighborhoods' && (
          <div className="py-6">
            <NeighborhoodsSection onSelectDistrict={handleSelectDistrict} />
          </div>
        )}

        {/* VIEW 5: ABOUT ANITA */}
        {currentView === 'about' && (
          <div className="py-6">
            <AboutAnitaSection />
          </div>
        )}

        {/* VIEW 6: FINANCIAL / MORTGAGE CALCULATOR */}
        {currentView === 'calculator' && (
          <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MortgageCalculator />
          </div>
        )}

        {/* VIEW 7: CONTACT SECTION */}
        {currentView === 'contact' && (
          <div>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onSelectDistrict={(d) => handleSelectDistrict(d as AbujaDistrict)} />

      {/* Floating WhatsApp Action Badge */}
      <WhatsAppButton />

      {/* Inspection Booking Modal */}
      <ScheduleInspectionModal
        property={inspectionTargetProperty}
        isOpen={isInspectionModalOpen}
        onClose={() => setIsInspectionModalOpen(false)}
      />

      {/* Saved Properties Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        allProperties={PROPERTIES_DATA}
        onRemoveFavorite={handleToggleFavorite}
        onClearAll={handleClearFavorites}
        onViewProperty={handleViewPropertyDetails}
      />
    </div>
  );
};

export default App;
