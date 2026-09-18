import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '../common/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Buying Residential Duplex / Mansion',
    budget: '₦100M – ₦300M',
    message: '',
    honeypot: '' // Anti-spam bot trap
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots
    if (!formData.fullName || !formData.phone) return;

    const text = `Hello Anita,\n\nI am contacting you from the Anita Properties website:\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Interest:* ${formData.interest}\n*Budget Range:* ${formData.budget}\n*Message:* ${formData.message || 'I would like more information on available properties.'}`;

    const url = `https://wa.me/${AGENT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F4] border border-[#C5A880]/50 text-[#9E773A] text-xs font-semibold uppercase tracking-wider rounded-sm mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
            Contact Anita Properties
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Have questions about a specific Abuja property, legal title verification, or booking a private inspection? We are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-serif font-bold text-xl text-stone-900 border-b border-stone-100 pb-3">
                Direct Contact Channels
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F4] border border-[#C5A880]/40 flex items-center justify-center text-[#9E773A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    Phone & Call Center
                  </span>
                  <a
                    href={`tel:${AGENT_CONFIG.phoneRaw}`}
                    className="font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-[#9E773A] transition-colors"
                  >
                    {AGENT_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Monday to Saturday, 8:00 AM – 6:00 PM WAT
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    WhatsApp Direct Advisory
                  </span>
                  <a
                    href={AGENT_CONFIG.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm text-emerald-700 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>Chat Directly with Anita</span>
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fastest response for property inquiries & photos
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${AGENT_CONFIG.email}`}
                    className="text-sm font-medium text-stone-900 hover:text-[#9E773A] transition-colors break-all"
                  >
                    {AGENT_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Office Location Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    Office & Meeting Location
                  </span>
                  <p className="text-sm text-stone-800 leading-snug">
                    {AGENT_CONFIG.officeAddress}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    [ Meeting appointments scheduled in advance ]
                  </p>
                </div>
              </div>

              {/* Social Media Placeholders */}
              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2.5">
                  Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={AGENT_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-stone-100 hover:bg-[#FAF8F4] border border-stone-200 hover:border-[#C5A880] text-stone-700 hover:text-[#9E773A] flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AGENT_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-stone-100 hover:bg-[#FAF8F4] border border-stone-200 hover:border-[#C5A880] text-stone-700 hover:text-[#9E773A] flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AGENT_CONFIG.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-stone-100 hover:bg-[#FAF8F4] border border-stone-200 hover:border-[#C5A880] text-stone-700 hover:text-[#9E773A] flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong>{formData.fullName}</strong>. Anita has received your property requirements and will contact you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          interest: 'Buying Residential Duplex / Mansion',
                          budget: '₦100M – ₦300M',
                          message: '',
                          honeypot: ''
                        });
                      }}
                      className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-sm tap-target"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleOnlineSubmit} className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-stone-900 border-b border-stone-100 pb-3">
                    Send a Property Inquiry
                  </h3>

                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="organization_field_check"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alhaji Babangida / Engr. Okon"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                    />
                  </div>

                  {/* Interest & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Property Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                      >
                        <option value="Buying Residential Duplex / Mansion">Buying Residential Duplex / Mansion</option>
                        <option value="Buying Titled Land / Plot">Buying Titled Land / Plot</option>
                        <option value="Buying Contemporary Terrace">Buying Contemporary Terrace</option>
                        <option value="Renting Commercial Office / Plaza">Renting Commercial Office / Plaza</option>
                        <option value="Diaspora Investment Advisory">Diaspora Investment Advisory</option>
                        <option value="Listing a Property for Sale">Listing a Property for Sale</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                      >
                        <option value="Under ₦50 Million">Under ₦50 Million</option>
                        <option value="₦50M – ₦100 Million">₦50M – ₦100 Million</option>
                        <option value="₦100M – ₦300 Million">₦100M – ₦300 Million</option>
                        <option value="₦300M – ₦700 Million">₦300M – ₦700 Million</option>
                        <option value="₦700M – ₦1.5 Billion+">₦700M – ₦1.5 Billion+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Provide details about your preferred location, size, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-3 space-y-2.5">
                    <button
                      type="button"
                      onClick={handleSubmitWhatsApp}
                      disabled={!formData.fullName || !formData.phone}
                      className="w-full py-3.5 px-4 bg-[#C5A880] hover:bg-[#B89355] disabled:opacity-50 text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all tap-target"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Send Inquiry Directly on WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!formData.fullName || !formData.phone}
                      className="w-full py-2.5 px-4 bg-[#111315] hover:bg-[#1A1D20] disabled:opacity-50 text-white font-semibold text-xs rounded-sm flex items-center justify-center gap-2 transition-colors tap-target"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
