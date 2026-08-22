import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Utensils } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenReservation,
  onOpenMenu,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past the hero section (approx 500px)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          id="sticky-mobile-bar"
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#171411]/95 backdrop-blur-md border-t border-[#321816] p-3 px-4 shadow-2xl flex items-center gap-3"
        >
          <button
            onClick={onOpenMenu}
            className="flex-1 py-3 bg-[#201C18] hover:bg-[#2A241F] text-[#DDD0BB] border border-[#321816] text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 font-medium"
          >
            <Utensils className="w-3.5 h-3.5 text-[#A88558]" />
            <span>Menü</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="flex-1 py-3 bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#73705A]/40 text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 font-semibold shadow-md"
          >
            <Flame className="w-3.5 h-3.5 text-[#A88558]" />
            <span>Masa Ayırt</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
