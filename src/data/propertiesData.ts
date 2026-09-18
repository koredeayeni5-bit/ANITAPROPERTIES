import type { Property } from '../types/property';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'AP-ASO-001',
    slug: 'grand-asokoro-diplomatic-mansion',
    title: 'The Grand Asokoro Diplomatic Mansion',
    price: 1400000000,
    formattedPrice: '₦1,400,000,000',
    status: 'for-sale',
    type: 'duplex',
    typeLabel: 'Detached Mansion with BQ',
    district: 'Asokoro',
    address: 'Near ECOWAS Secretariat Axis, Asokoro District, Abuja',
    shortDescription: 'Palatial 6-bedroom contemporary mansion featuring a private elevator, heated swimming pool, 2-room BQ, and bullet-resistant security glazing.',
    fullDescription: [
      'Situated in the prestigious diplomatic enclave of Asokoro, this custom-built architectural masterpiece exemplifies the pinnacle of luxury living in Abuja. Designed for heads of mission, executives, and discerning families, the residence commands an elevated presence on 1,800 square meters of prime titled land.',
      'Upon arrival through motorized dual gates, an expansive paved driveway welcomes up to 10 vehicles. Inside, double-height ceilings with custom Italian chandeliers open into expansive formal and informal reception lounges.',
      'The private quarters include six lavish en-suite bedrooms, with an opulent 160 sqm primary presidential suite featuring a wraparound terrace, walk-in Italian dressing room, and a spa-grade bathroom with jacuzzi and Hansgrohe fittings.',
      'An Olympic-grade filtration swimming pool, private glass elevator connecting all three levels, dedicated cinema room, and self-contained 2-room staff quarters complete this trophy asset.'
    ],
    bedrooms: 6,
    bathrooms: 7,
    toilets: 8,
    parkingSpaces: 10,
    areaSqm: 1200,
    plotSizeSqm: 1800,
    titleDocument: 'C of O',
    furnishing: 'Semi-Furnished',
    condition: 'Brand New',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        alt: 'Exterior architectural view of The Grand Asokoro Diplomatic Mansion',
        caption: 'Front elevation with manicured gardens and security perimeter'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Grand living room with double height ceilings',
        caption: 'Formal reception lounge with floor-to-ceiling glass'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        alt: 'Designer Italian kitchen with center marble island',
        caption: 'Fully fitted chef kitchen with German appliances'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Heated private swimming pool and patio',
        caption: 'Outdoor recreational deck and pool area'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        alt: 'Master bedroom suite with panoramic balcony',
        caption: 'Presidential master suite with private viewing lounge'
      }
    ],
    features: [
      'Certificate of Occupancy (FCDA C of O)',
      'Private 4-Passenger Glass Elevator',
      'Heated Outdoor Swimming Pool',
      '2-Room En-suite Staff Quarters (BQ)',
      '20kVA Hybrid Solar Inverter System',
      'Dedicated 100kVA Soundproof Mikano Generator',
      'Bullet-Resistant External Security Doors',
      'Industrial Borehole with 3-Stage Water Treatment',
      '32-Channel 4K CCTV & Smart Video Intercom',
      'Central Air Conditioning Infrastructure'
    ],
    landmarks: [
      { name: 'ECOWAS Secretariat', distance: '1.2 km', driveTime: '3 mins' },
      { name: 'Aso Rock Presidential Villa Axis', distance: '3.5 km', driveTime: '7 mins' },
      { name: 'Transcorp Hilton Abuja', distance: '5.8 km', driveTime: '10 mins' },
      { name: 'Nnamdi Azikiwe International Airport', distance: '38 km', driveTime: '35 mins' }
    ],
    virtualTourAvailable: true,
    createdAt: '2026-08-15'
  },
  {
    id: 'AP-GUZ-002',
    slug: 'guzape-hilltop-panoramic-villa',
    title: 'The Guzape Hilltop Panoramic Villa',
    price: 750000000,
    formattedPrice: '₦750,000,000',
    status: 'for-sale',
    type: 'villa',
    typeLabel: 'Hilltop Smart Villa',
    district: 'Guzape',
    address: 'Diplomatic Hill Top View, Guzape Phase 1, Abuja',
    shortDescription: 'Perched on the commanding heights of Guzape, offering breathtaking unhindered views of the Abuja city skyline, private infinity pool, and complete home automation.',
    fullDescription: [
      'Elevated above the bustle of the city, this contemporary hilltop villa in Guzape Phase 1 commands unmatched panoramic vistas across the Central Business District and National Stadium.',
      'Constructed with minimalist clean lines, structural steel accents, and vast expanses of low-emissivity glass, the home brings the beauty of the Abuja landscape into every room.',
      'The main living level features an open-concept flow into a designer kitchen and an infinity-edge swimming pool that appears to drop straight into the horizon.',
      'Equipped with a comprehensive Crestron smart-home automation system controlling lighting, multi-room audio, climate, and automated motorized blinds.'
    ],
    bedrooms: 5,
    bathrooms: 6,
    toilets: 7,
    parkingSpaces: 6,
    areaSqm: 850,
    plotSizeSqm: 1000,
    titleDocument: 'C of O',
    furnishing: 'Semi-Furnished',
    condition: 'Brand New',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
        alt: 'Hilltop architectural view of the modern Guzape Villa',
        caption: 'Dramatic hilltop elevation overlooking the Abuja valley'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
        alt: 'Expansive open plan living room with views',
        caption: 'Main living space with seamless indoor-outdoor transition'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        alt: 'Infinity pool deck with skyline backdrop',
        caption: 'Horizon infinity pool and evening cocktail lounge'
      },
      {
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
        alt: 'Ultra-modern bathroom with soaking tub overlooking hills',
        caption: 'Master bath featuring freestanding volcanic limestone tub'
      }
    ],
    features: [
      'Certificate of Occupancy (C of O)',
      'Panoramic Skyline Infinity Pool',
      'Full Crestron Home Automation',
      'Private 1-Room Maid Quarters',
      'Solar Rooftop Power & Lithium Batteries',
      'Underground Rainwater Harvesting & Filtration',
      'Automated Electric Vehicle Charging Station',
      'Double-Glazed Sound-Insulated Facade',
      '24/7 Armed Estate Security Patrol'
    ],
    landmarks: [
      { name: 'Guzape Modern District Park', distance: '1.5 km', driveTime: '4 mins' },
      { name: 'Central Business District (CBD)', distance: '6.5 km', driveTime: '11 mins' },
      { name: 'Asokoro District Hospital', distance: '4.2 km', driveTime: '8 mins' },
      { name: 'Garki International Market', distance: '5.0 km', driveTime: '9 mins' }
    ],
    virtualTourAvailable: true,
    createdAt: '2026-08-28'
  },
  {
    id: 'AP-MAI-003',
    slug: 'maitama-luxury-terrace-penthouse',
    title: 'Maitama Luxury Waterfront-Style Terrace',
    price: 480000000,
    formattedPrice: '₦480,000,000',
    status: 'for-sale',
    type: 'terrace',
    typeLabel: 'Contemporary 4-Bed Terrace',
    district: 'Maitama',
    address: 'Near Ministers Hill, Maitama Main, Abuja',
    shortDescription: 'Immaculately appointed 4-bedroom terrace with private internal lift, rooftop sunset terrace, Spanish porcelain finishes, and 24/7 serviced estate facility.',
    fullDescription: [
      'Experience the height of sophisticated townhouse living in the heart of Maitama. This exclusive boutique enclave of just six contemporary terraces is designed for those who refuse to compromise on location or quality.',
      'Spread across three sun-drenched levels, the terrace offers four generously proportioned bedrooms, all with ensuite bathrooms and private balconies.',
      'The crowning jewel is the rooftop sky lounge, offering a covered barbecue pergola and tranquil views over the leafy Maitama canopy.',
      'Managed by a premier facility management company, providing seamless power redundancy, water treatment, uniformed security, and maintenance.'
    ],
    bedrooms: 4,
    bathrooms: 5,
    toilets: 5,
    parkingSpaces: 4,
    areaSqm: 550,
    plotSizeSqm: 650,
    titleDocument: 'C of O',
    furnishing: 'Semi-Furnished',
    condition: 'Brand New',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
        alt: 'Contemporary exterior of Maitama luxury terrace',
        caption: 'Boutique architectural facade with warm stone accents'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        alt: 'Living area with double height ceiling in Maitama terrace',
        caption: 'Airy family lounge with contemporary recessed lighting'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
        alt: 'High-end kitchen with breakfast bar',
        caption: 'Gourmet kitchen with integrated Bosch appliances'
      },
      {
        url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
        alt: 'Rooftop sky lounge terrace',
        caption: 'Private rooftop deck with sunset views'
      }
    ],
    features: [
      'Certificate of Occupancy (C of O)',
      'Dedicated Private Lift / Elevator',
      'Exclusive Rooftop Entertainment Lounge',
      'Full 1-Room Service Quarter (BQ)',
      '24/7 Guaranteed Power & Dedicated Substation',
      'Automated Access Control & Security Intercom',
      'Communal Swimming Pool & Fitness Gym',
      'Facility Management On-Site'
    ],
    landmarks: [
      { name: 'Maitama District Hospital', distance: '1.8 km', driveTime: '4 mins' },
      { name: 'Transcorp Hilton Hotel', distance: '3.1 km', driveTime: '6 mins' },
      { name: 'Millennium Park Abuja', distance: '4.5 km', driveTime: '8 mins' },
      { name: 'Farmers Market Maitama', distance: '1.5 km', driveTime: '3 mins' }
    ],
    virtualTourAvailable: false,
    createdAt: '2026-09-02'
  },
  {
    id: 'AP-JAB-004',
    slug: 'jabi-lakefront-executive-residence',
    title: 'Jabi Lakefront Executive Smart Residence',
    price: 950000000,
    formattedPrice: '₦950,000,000',
    status: 'for-sale',
    type: 'duplex',
    typeLabel: 'Lakefront Smart Duplex',
    district: 'Jabi',
    address: 'Lakeview Gated Reserve, Jabi Waterfront, Abuja',
    shortDescription: 'Rare waterfront direct-access 5-bedroom smart detached duplex with private boat jetty access, lush lawn, and floor-to-ceiling glass capturing serene lake views.',
    fullDescription: [
      'Properties along the coveted Jabi Lake shoreline are rarely available on the open market. This extraordinary 5-bedroom residence is positioned directly on the waterfront, offering the tranquility of lake living right within Abuja metropolis.',
      'Wake up every morning to shimmering water views, cool breezes, and birdlife. The property includes manicured rear lawns leading down to private jetty access, ideal for morning boat rides or lakeside entertaining.',
      'The interior is defined by museum-quality gallery finishes, natural white oak wood flooring, and an open layout uniting the grand salon, formal dining, and show kitchen.',
      'Complete security infrastructure with perimeter laser sensors, electronic gates, and an unbreachable gated community entrance.'
    ],
    bedrooms: 5,
    bathrooms: 6,
    toilets: 7,
    parkingSpaces: 8,
    areaSqm: 900,
    plotSizeSqm: 1400,
    titleDocument: 'C of O',
    furnishing: 'Semi-Furnished',
    condition: 'Newly Completed',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
        alt: 'Jabi Lakefront executive residence exterior',
        caption: 'Waterfront facade facing the peaceful Jabi Lake'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
        alt: 'Lakeside private patio and manicured lawn',
        caption: 'Waterfront terrace with direct garden access'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
        alt: 'Master bedroom with direct lake vistas',
        caption: 'Lake-view master suite with private wrap balcony'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Private garden and dock pathway',
        caption: 'Lush tropical grounds and private jetty pathway'
      }
    ],
    features: [
      'Certificate of Occupancy (C of O)',
      'Direct Jabi Lake Shoreline Access',
      'Private Boat Moor / Jetty Privilege',
      'Heated Jacuzzi & Outdoor Firepit Lounge',
      '2-Room En-suite Domestic Quarters',
      '24/7 Hybrid Solar Power (15kVA)',
      'Smart Home Lighting & Sound Integration',
      'Gated Lakeview Security Estate'
    ],
    landmarks: [
      { name: 'Jabi Lake Mall & Boardwalk', distance: '1.4 km', driveTime: '3 mins' },
      { name: 'Jabi Boat Club', distance: '1.0 km', driveTime: '2 mins' },
      { name: 'Nizamiye Hospital', distance: '5.2 km', driveTime: '9 mins' },
      { name: 'Central Business District (CBD)', distance: '8.0 km', driveTime: '12 mins' }
    ],
    virtualTourAvailable: true,
    createdAt: '2026-07-20'
  },
  {
    id: 'AP-KAT-005',
    slug: 'katampe-extension-commercial-multifamily-plot',
    title: 'Prime Katampe Extension Build-Ready Plot',
    price: 320000000,
    formattedPrice: '₦320,000,000',
    status: 'for-sale',
    type: 'land',
    typeLabel: 'Titled Residential / Mixed Land',
    district: 'Katampe Extension',
    address: 'Near Diplomatic Enclave Extension, Katampe Extension, Abuja',
    shortDescription: '2,500 sqm 100% dry, level land with approved building plan, FCDA Certificate of Occupancy, dual tarred road access, and complete underground engineering infrastructure.',
    fullDescription: [
      'A rare opportunity for visionary investors, high-net-worth individuals, or estate developers to acquire a 2,500 square meter prime parcel of land in rapidly rising Katampe Extension.',
      'The land boasts 100% dry, flat topography with no rocky outcrops, drastically cutting down foundation and site preparation expenses. It possesses an unencumbered FCDA Certificate of Occupancy ready for immediate search and verification at AGIS.',
      'Positioned along an asphalted dual carriageway with fully completed underground storm drainage, municipal water mains, and electricity poles already energised.',
      'Ideal for constructing an enclave of private luxury townhouses, a grand personal estate, or high-yield rental penthouses.'
    ],
    bedrooms: 0,
    bathrooms: 0,
    toilets: 0,
    parkingSpaces: 0,
    areaSqm: 2500,
    plotSizeSqm: 2500,
    titleDocument: 'C of O',
    furnishing: 'Unfurnished',
    condition: 'Newly Completed',
    featured: true,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
        alt: 'Aerial perspective of Katampe Extension prime land',
        caption: '2,500 sqm prime dry parcel with tarred access'
      },
      {
        url: 'https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1600&q=80',
        alt: 'Infrastructure and access roads in Katampe Extension',
        caption: 'Paved access roads with electric poles and drainage'
      },
      {
        url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
        alt: 'Surrounding scenic topography of Katampe hills',
        caption: 'Serene neighborhood backdrop with excellent elevation'
      }
    ],
    features: [
      'FCDA Certificate of Occupancy (C of O)',
      'Verified Clean Search at AGIS',
      '100% Dry Level Topography (Zero Rock Excavation)',
      'Dual Tarred Road Access & Concrete Drainage',
      'Connected to Abuja Electricity Distribution (AEDC)',
      'Approved Residential Multi-Family Density',
      'Immediate Allocation & Possession'
    ],
    landmarks: [
      { name: 'Ministers Hill Overpass', distance: '3.0 km', driveTime: '5 mins' },
      { name: 'Maitama District Border', distance: '4.2 km', driveTime: '7 mins' },
      { name: 'Abuja City Gate Highway', distance: '9.0 km', driveTime: '12 mins' },
      { name: 'Nnamdi Azikiwe International Airport', distance: '35 km', driveTime: '30 mins' }
    ],
    virtualTourAvailable: false,
    createdAt: '2026-09-01'
  },
  {
    id: 'AP-WUS-006',
    slug: 'wuse-2-modern-commercial-corporate-plaza',
    title: 'Wuse 2 Modern Commercial Corporate Plaza',
    price: 65000000,
    formattedPrice: '₦65,000,000',
    pricePeriod: '/ year',
    status: 'for-rent',
    type: 'commercial',
    typeLabel: 'Commercial Plaza Floor',
    district: 'Wuse 2',
    address: 'Adetokunbo Ademola Crescent Axis, Wuse 2, Abuja',
    shortDescription: '800 sqm of premium open-plan Grade-A commercial office space located on Abuja’s highest footfall commercial avenue. Fitted with backup generators, elevator, and 30 parking bays.',
    fullDescription: [
      'Position your corporate headquarters, financial institution, consulting firm, or international NGO in the beating commercial heart of Abuja.',
      'This multi-level Grade-A commercial plaza on the prime Adetokunbo Ademola Crescent corridor in Wuse 2 offers 800 square meters of flexible, column-minimized open floor plate.',
      'Featuring double-glazed tinted acoustic curtain walls, central VRV air conditioning, high-speed passenger lift, dedicated 250kVA generator with automatic changeover, and 30 dedicated secure basement and surface parking spaces.',
      'Surrounded by top banks, embassies, premier restaurants, and corporate headquarters.'
    ],
    bedrooms: 0,
    bathrooms: 8,
    toilets: 10,
    parkingSpaces: 30,
    areaSqm: 800,
    titleDocument: 'C of O',
    furnishing: 'Semi-Furnished',
    condition: 'Excellently Maintained',
    featured: false,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
        alt: 'Wuse 2 commercial corporate plaza exterior',
        caption: 'Prime commercial facade on Adetokunbo Ademola corridor'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern open-plan commercial office interior',
        caption: '800 sqm column-free open layout for executive setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
        alt: 'Executive boardroom and meeting facility',
        caption: 'Corporate meeting room and executive lounges'
      }
    ],
    features: [
      'Commercial Certificate of Occupancy',
      'Dual 250kVA Synchronized Standby Generators',
      'Dedicated 30 Secure Parking Bays',
      '10-Passenger High Speed Elevator',
      'Fiber Optic High-Speed Internet Backbone',
      'Fire Sprinkler System & Smoke Detection',
      '24/7 Uniformed Security & Access Cards',
      'Dedicated Transformer (500kVA)'
    ],
    landmarks: [
      { name: 'Banex Plaza Commercial Hub', distance: '1.2 km', driveTime: '3 mins' },
      { name: 'Maitama District Border', distance: '2.0 km', driveTime: '4 mins' },
      { name: 'Central Bank of Nigeria (CBN)', distance: '4.8 km', driveTime: '8 mins' },
      { name: 'Abuja Arts and Crafts Village', distance: '3.5 km', driveTime: '7 mins' }
    ],
    virtualTourAvailable: true,
    createdAt: '2026-08-10'
  },
  {
    id: 'AP-GWA-007',
    slug: 'gwarinpa-estate-serene-family-duplex',
    title: 'Gwarinpa Estate Serene Family Duplex',
    price: 185000000,
    formattedPrice: '₦185,000,000',
    status: 'for-sale',
    type: 'duplex',
    typeLabel: 'Semi-Detached Duplex with BQ',
    district: 'Gwarinpa',
    address: '6th Avenue Residential Reserve, Gwarinpa Estate, Abuja',
    shortDescription: 'Charming 4-bedroom semi-detached duplex in a quiet, highly secure gated close in Gwarinpa. Features large compound, 1-room BQ, treated water, and family-friendly environment.',
    fullDescription: [
      'Nestled within one of West Africa’s largest and most established master-planned estates, this 4-bedroom semi-detached duplex offers the perfect blend of family comfort, security, and exceptional capital retention.',
      'Located on a peaceful gated close off 6th Avenue, the property boasts a spacious compound capable of parking 5 cars with ample play area for children.',
      'The ground floor contains a welcoming ante-room, spacious guest toilet, expansive living room, private dining area, and a fitted kitchen with pantry. Upstairs, four ensuite bedrooms include a serene master suite with private balcony.',
      'Comes with clean FCDA allocation papers, ready for swift title processing.'
    ],
    bedrooms: 4,
    bathrooms: 5,
    toilets: 5,
    parkingSpaces: 5,
    areaSqm: 450,
    plotSizeSqm: 600,
    titleDocument: 'C of O',
    furnishing: 'Unfurnished',
    condition: 'Excellently Maintained',
    featured: false,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
        alt: 'Gwarinpa Estate family duplex exterior',
        caption: 'Stately semi-detached family residence with private compound'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Spacious family living room in Gwarinpa',
        caption: 'Generous ground floor living and entertainment lounge'
      },
      {
        url: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern fitted kitchen with pantry',
        caption: 'Spacious modern kitchen with granite countertops'
      }
    ],
    features: [
      'FCDA Allocation with Certificate of Occupancy',
      'Self-Contained 1-Room Maid’s Quarters',
      'Large Paved Interlocking Compound (5+ Cars)',
      'Borehole & Automated Overhead Water Tank',
      'Gated Street Security with 24/7 Guards',
      'Pre-installed Solar Inverter Wiring',
      'Modern POP Ceilings & LED Lighting'
    ],
    landmarks: [
      { name: 'Gwarinpa Modern Hospital', distance: '1.5 km', driveTime: '4 mins' },
      { name: 'Dunes Center & Wuse 2 Access', distance: '9.0 km', driveTime: '14 mins' },
      { name: 'Federal Staff Hospital Jabi', distance: '6.5 km', driveTime: '10 mins' },
      { name: 'Efab Mall & Cinema', distance: '2.8 km', driveTime: '6 mins' }
    ],
    virtualTourAvailable: false,
    createdAt: '2026-08-01'
  },
  {
    id: 'AP-AIR-008',
    slug: 'airport-road-investment-land-promised-land',
    title: 'Airport Road Fast-Growth Investment Land',
    price: 45000000,
    formattedPrice: '₦45,000,000',
    status: 'for-sale',
    type: 'land',
    typeLabel: 'Titled Residential Plot',
    district: 'Airport Road',
    address: 'Near Aviation Estate Axis, Airport Road, Abuja',
    shortDescription: '1,000 sqm dry, clear residential land in a rapidly growing corridor along Abuja’s premier 10-lane airport expressway. Exceptional projected capital appreciation.',
    fullDescription: [
      'The Airport Road corridor represents Abuja’s fastest-expanding metropolitan growth axis. With continuous multi-billion naira infrastructure development, new residential estates, and easy 15-minute connectivity to the international airport, land banking here delivers stellar ROI.',
      'This 1,000 square meter plot is 100% dry, with registered Right of Occupancy (R of O) from FCDA. The neighborhood has already attracted quality residential developments with electricity and water connectivity nearby.',
      'Whether you are looking to build a private family detached home or secure land in Abuja before prices double, this is an affordable, rock-solid entry point.'
    ],
    bedrooms: 0,
    bathrooms: 0,
    toilets: 0,
    parkingSpaces: 0,
    areaSqm: 1000,
    plotSizeSqm: 1000,
    titleDocument: 'R of O (FCDA)',
    furnishing: 'Unfurnished',
    condition: 'Newly Completed',
    featured: false,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
        alt: 'Wide angle view of Airport Road dry residential land',
        caption: '1,000 sqm dry residential plot ready for building'
      },
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
        alt: 'Developing neighborhood along Airport Road',
        caption: 'Fast-developing residential community with road access'
      }
    ],
    features: [
      'FCDA Right of Occupancy (R of O)',
      'Clean AGIS Verification Record',
      '100% Dry Land - No Swamp or Waterlogging',
      '10-Lane Expressway Connectivity',
      'High Capital Appreciation Corridor',
      'Immediate Plot Demarcation & Beacon Survey',
      'Survey Plan & Layout Copy Included'
    ],
    landmarks: [
      { name: 'Nnamdi Azikiwe International Airport', distance: '12 km', driveTime: '12 mins' },
      { name: 'Abuja City Gate', distance: '18 km', driveTime: '15 mins' },
      { name: 'Centenary City Site', distance: '6.0 km', driveTime: '7 mins' },
      { name: 'River Park Mall & Estate', distance: '8.5 km', driveTime: '9 mins' }
    ],
    virtualTourAvailable: false,
    createdAt: '2026-08-19'
  },
  {
    id: 'AP-KAR-009',
    slug: 'karsana-west-gated-estate-smart-terrace',
    title: 'Karsana West Gated Estate Smart Terrace',
    price: 120000000,
    formattedPrice: '₦120,000,000',
    status: 'for-sale',
    type: 'terrace',
    typeLabel: 'Smart 4-Bed Terrace',
    district: 'Karsana',
    address: 'Greenwood Reserve, Karsana West District, Abuja',
    shortDescription: 'Brand new 4-bedroom terrace with 10kVA solar inverter system, fitted European kitchen, children’s playground, and 24-hour estate power.',
    fullDescription: [
      'Discover effortless modern living in Karsana West, Abuja’s emerging premium residential district just behind Gwarinpa.',
      'Designed with energy independence in mind, every home in this gated development comes pre-equipped with a 10kVA hybrid solar system and lithium-ion batteries, guaranteeing unbroken electricity year-round.',
      'The terrace features an intelligent multi-level layout with 4 ensuite bedrooms, family lounge, modern fitted kitchen with gas cooker and heat extractor, and a dedicated 3-car parking bay.',
      'Perfect for young professionals, expanding families, and diaspora investors seeking turnkey high-rental-yield assets.'
    ],
    bedrooms: 4,
    bathrooms: 4,
    toilets: 5,
    parkingSpaces: 3,
    areaSqm: 380,
    titleDocument: "Governor's Consent",
    furnishing: 'Semi-Furnished',
    condition: 'Brand New',
    featured: false,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        alt: 'Karsana West gated estate terrace exterior',
        caption: 'Contemporary terrace townhouse in secure gated enclave'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        alt: 'Interior open concept living room',
        caption: 'Bright family lounge with modern finishes'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern fitted kitchen',
        caption: 'Fitted kitchen with gas hob and marble-look counters'
      }
    ],
    features: [
      "Governor's Consent Title",
      '10kVA Hybrid Solar Inverter System Included',
      'Gated Community with Uniformed 24/7 Security',
      'Children Play Area & Green Recreational Lawn',
      'Treated Central Water Supply',
      'Paved Estate Internal Roads & Solar Streetlights',
      'High Rental Demand from Abuja Professionals'
    ],
    landmarks: [
      { name: 'Gwarinpa Estate Access Road', distance: '3.5 km', driveTime: '6 mins' },
      { name: 'Kubwa Expressway Junction', distance: '4.0 km', driveTime: '7 mins' },
      { name: 'Jabi Lake Mall', distance: '12 km', driveTime: '16 mins' },
      { name: 'Abuja City Center', distance: '16 km', driveTime: '20 mins' }
    ],
    virtualTourAvailable: true,
    createdAt: '2026-08-30'
  }
];
