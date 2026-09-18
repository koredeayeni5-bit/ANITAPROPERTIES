export type PropertyStatus = 'for-sale' | 'for-rent';

export type PropertyType = 
  | 'duplex' 
  | 'villa' 
  | 'terrace' 
  | 'penthouse' 
  | 'land' 
  | 'commercial';

export type AbujaDistrict = 
  | 'Maitama' 
  | 'Asokoro' 
  | 'Guzape' 
  | 'Jabi' 
  | 'Katampe Extension' 
  | 'Wuse 2' 
  | 'Gwarinpa' 
  | 'Airport Road'
  | 'Karsana';

export type TitleDocumentType = 
  | 'C of O' 
  | "Governor's Consent" 
  | 'R of O (FCDA)' 
  | 'Gazette';

export interface PropertyImage {
  url: string;
  alt: string;
  caption: string;
}

export interface LandmarkProximity {
  name: string;
  distance: string;
  driveTime: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  formattedPrice: string;
  pricePeriod?: string; // e.g. '/ year' for rent
  pricePerSqm?: string;
  status: PropertyStatus;
  type: PropertyType;
  typeLabel: string;
  district: AbujaDistrict;
  address: string;
  shortDescription: string;
  fullDescription: string[];
  bedrooms: number;
  bathrooms: number;
  toilets?: number;
  parkingSpaces?: number;
  areaSqm: number;
  plotSizeSqm?: number;
  titleDocument: TitleDocumentType;
  furnishing: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  condition: 'Brand New' | 'Newly Completed' | 'Off-Plan' | 'Excellently Maintained';
  featured: boolean;
  images: PropertyImage[];
  features: string[];
  landmarks: LandmarkProximity[];
  virtualTourAvailable: boolean;
  createdAt: string;
}

export interface SearchFiltersState {
  query: string;
  status: 'all' | PropertyStatus;
  type: string;
  district: string;
  priceRange: string; // e.g. 'all', 'under-100m', '100m-250m', '250m-500m', '500m-1b', '1b-plus'
  bedrooms: string; // 'all', '1', '2', '3', '4', '5+'
  titleDocument: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'size-desc';
}

export interface InspectionBooking {
  propertyId: string;
  propertyTitle: string;
  propertyPrice: string;
  propertyLocation: string;
  inspectionType: 'in-person' | 'virtual';
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export interface ContactInquiry {
  fullName: string;
  phone: string;
  email: string;
  propertyInterest?: string;
  budgetRange?: string;
  message: string;
  preferredChannel: 'whatsapp' | 'phone' | 'email';
}

export interface DistrictGuide {
  name: AbujaDistrict;
  tagline: string;
  description: string;
  highlights: string[];
  propertyTypes: string;
  image: string;
  badge: string;
}
