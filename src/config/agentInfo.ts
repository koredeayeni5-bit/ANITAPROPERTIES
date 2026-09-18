/**
 * Centralized Agent Configuration for Anita Properties
 * Anita can update her actual phone number, WhatsApp number, email, and office address here.
 */
export const AGENT_CONFIG = {
  name: 'Anita',
  agencyName: 'ANITA PROPERTIES',
  tagline: 'Abuja Luxury Real Estate & Investment Advisory',
  licenseOrReg: 'Registered Real Estate Consultant, Abuja, Nigeria',
  
  // Contact details (Placeholders ready for Anita's actual digits)
  phoneDisplay: '+234 (0) 800 000 0000',
  phoneRaw: '+2348000000000',
  whatsappNumber: '2348000000000', // Digits only with country code 234
  email: 'inquiries@anitaproperties.ng',
  
  // Office location placeholder
  officeAddress: 'Maitama District / Central Business District, Abuja, FCT, Nigeria',
  city: 'Abuja, Federal Capital Territory',
  country: 'Nigeria',
  
  // Hours
  workingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM WAT (Sunday by appointment)',

  // Social media placeholders
  socials: {
    instagram: 'https://instagram.com/anitaproperties_abuja',
    linkedin: 'https://linkedin.com/company/anita-properties-abuja',
    facebook: 'https://facebook.com/anitapropertiesabuja',
    youtube: 'https://youtube.com/@anitapropertiesabuja',
  },

  // Helper functions for WhatsApp links with prefilled text
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultText = `Hello Anita, I am visiting the Anita Properties website and would like to inquire about available properties in Abuja.`;
    const message = customMessage || defaultText;
    return `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  getPropertyWhatsAppUrl: (propertyTitle: string, price: string, location: string, id: string) => {
    const text = `Hello Anita,\n\nI am interested in this property listing from your website:\n\n*${propertyTitle}*\nRef ID: ${id}\nLocation: ${location}\nPrice: ${price}\n\nPlease let me know if this property is currently available and how we can proceed with inspection.`;
    return `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getInspectionWhatsAppUrl: (data: {
    propertyTitle: string;
    location: string;
    type: 'in-person' | 'virtual';
    date: string;
    time: string;
    clientName: string;
    phone: string;
    notes?: string;
  }) => {
    const mode = data.type === 'in-person' ? 'Physical On-Site Inspection in Abuja' : 'Guided Live Video Walkthrough';
    const text = `Hello Anita,\n\nI would like to schedule a property inspection with you:\n\n*Property:* ${data.propertyTitle} (${data.location})\n*Inspection Mode:* ${mode}\n*Preferred Date:* ${data.date}\n*Preferred Time:* ${data.time}\n*Client Name:* ${data.clientName}\n*Phone:* ${data.phone}${data.notes ? `\n*Notes:* ${data.notes}` : ''}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  getMultiPropertyWhatsAppUrl: (properties: { title: string; price: string; location: string }[]) => {
    const propList = properties.map((p, i) => `${i + 1}. ${p.title} (${p.location} - ${p.price})`).join('\n');
    const text = `Hello Anita,\n\nI have saved these properties from your website and would like more information:\n\n${propList}\n\nPlease let me know their current availability.`;
    return `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
};
