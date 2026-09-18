import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Video, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import type { Property } from '../../types/property';
import { AGENT_CONFIG } from '../../config/agentInfo';

interface ScheduleInspectionModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleInspectionModal: React.FC<ScheduleInspectionModalProps> = ({
  property,
  isOpen,
  onClose
}) => {
  const [inspectionType, setInspectionType] = useState<'in-person' | 'virtual'>('in-person');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Default to tomorrow's date
  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setPreferredDate(tomorrow.toISOString().split('T')[0]);
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !property) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const url = AGENT_CONFIG.getInspectionWhatsAppUrl({
      propertyTitle: property.title,
      location: `${property.district}, Abuja`,
      type: inspectionType,
      date: preferredDate,
      time: preferredTime,
      clientName: fullName,
      phone,
      notes: notes.trim()
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleOnScreenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const code = `INSP-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-sm border border-stone-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full tap-target flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Inspection Requested
            </h3>

            <div className="bg-[#FAF8F4] border border-[#C5A880]/30 rounded-sm p-4 text-sm text-stone-700 max-w-sm mx-auto">
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Booking Reference</p>
              <p className="font-mono font-bold text-stone-900 text-lg">{referenceCode}</p>
              <div className="mt-2 pt-2 border-t border-stone-200/60 text-xs text-stone-600">
                Property: <span className="font-semibold text-stone-800">{property.title}</span> ({property.district})
                <br />
                Date & Time: <span className="font-semibold text-stone-800">{preferredDate} at {preferredTime}</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Anita will review your preferred schedule and reach out to you directly via phone or WhatsApp to finalize inspection logistics.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#C5A880] text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm tap-target"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp Now</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-sm tap-target"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2 text-[#9E773A] text-xs font-semibold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Inspection Booking</span>
              </div>
              <h2 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Schedule a Property Inspection
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {property.title} • {property.district}, Abuja
              </p>
            </div>

            <form onSubmit={handleOnScreenSubmit} className="space-y-4">
              {/* Inspection Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  Inspection Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInspectionType('in-person')}
                    className={`p-3 text-left rounded-sm border transition-all flex flex-col gap-1 tap-target ${
                      inspectionType === 'in-person'
                        ? 'border-[#C5A880] bg-[#FAF8F4] text-stone-900 ring-1 ring-[#C5A880]'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold text-xs text-stone-900">
                      <MapPin className="w-4 h-4 text-[#9E773A]" />
                      <span>Physical On-Site</span>
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Guided escort in Abuja
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInspectionType('virtual')}
                    className={`p-3 text-left rounded-sm border transition-all flex flex-col gap-1 tap-target ${
                      inspectionType === 'virtual'
                        ? 'border-[#C5A880] bg-[#FAF8F4] text-stone-900 ring-1 ring-[#C5A880]'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold text-xs text-stone-900">
                      <Video className="w-4 h-4 text-[#9E773A]" />
                      <span>Virtual Video Tour</span>
                    </div>
                    <span className="text-[11px] text-stone-500">
                      Live WhatsApp tour for diaspora
                    </span>
                  </button>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800"
                  >
                    <option value="09:00 AM">09:00 AM WAT</option>
                    <option value="10:00 AM">10:00 AM WAT</option>
                    <option value="11:30 AM">11:30 AM WAT</option>
                    <option value="02:00 PM">02:00 PM WAT</option>
                    <option value="03:30 PM">03:30 PM WAT</option>
                    <option value="05:00 PM">05:00 PM WAT</option>
                  </select>
                </div>
              </div>

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Emeka Obi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800 placeholder:text-stone-400"
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800 placeholder:text-stone-400"
                  />
                </div>
              </div>

              {/* Email & Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800 placeholder:text-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Specific Questions / Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inquiring on title verification, payment structure, or gate access..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-stone-800 placeholder:text-stone-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  disabled={!fullName || !phone}
                  className="w-full py-3 px-4 bg-[#C5A880] hover:bg-[#B89355] disabled:opacity-50 text-[#0B0C0E] font-bold text-xs rounded-sm shadow-sm flex items-center justify-center gap-2 transition-all tap-target"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Instantly via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={!fullName || !phone}
                  className="w-full py-2.5 px-4 bg-[#111315] hover:bg-[#1A1D20] disabled:opacity-50 text-white font-semibold text-xs rounded-sm flex items-center justify-center gap-2 transition-all tap-target"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Submit Request Online</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
