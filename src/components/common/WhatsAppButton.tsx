import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { AGENT_CONFIG } from '../../config/agentInfo';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Mini Tooltip / Prompt bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#111315] text-white text-xs py-2 px-3 rounded-sm shadow-xl border border-stone-700 mb-2 animate-bounce-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Need Abuja property advisory? <strong>Chat with Anita</strong></span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={AGENT_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 tap-target"
        aria-label="Chat with Anita on WhatsApp"
        title="Chat with Anita on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
