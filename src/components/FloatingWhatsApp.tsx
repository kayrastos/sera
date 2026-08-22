import React from 'react';
import { MessageSquare } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const msg = encodeURIComponent(`Merhaba, ${RESTAURANT_CONFIG.name} hakkında bilgi almak istiyorum.`);
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 pointer-events-auto"
    >
      <button
        onClick={handleClick}
        id="floating-whatsapp-btn"
        aria-label="WhatsApp İletişim Hattı"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-[#1F1B17]/95 hover:bg-[#2A241F] text-[#F0E8D9] border border-[#321816] hover:border-[#A88558]/60 shadow-xl backdrop-blur-md transition-all duration-300 focus:outline-none"
      >
        {/* Subtle Green Dot & WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-[#4ADE80]" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-[#4ADE80] rounded-full animate-pulse" />
        </div>

        <span className="text-[11px] font-mono uppercase tracking-wider text-[#DDD0BB] hidden sm:inline-block">
          WhatsApp
        </span>
      </button>
    </div>
  );
};
