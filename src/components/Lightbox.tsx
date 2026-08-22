import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    },
    [onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Auto focus the close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#171411]/95 backdrop-blur-md p-4 md:p-10 select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Görsel Büyütme Galerisi"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          id="lightbox-close-btn"
          aria-label="Galeriyi kapat (Escape)"
          className="absolute top-6 right-6 z-50 p-3 text-[#F0E8D9] hover:text-[#A88558] bg-[#201C18]/80 border border-[#321816] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88558]"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectPrev();
          }}
          id="lightbox-prev-btn"
          aria-label="Önceki görsel (Sol Ok)"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F0E8D9] hover:text-[#A88558] bg-[#201C18]/80 border border-[#321816] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88558]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectNext();
          }}
          id="lightbox-next-btn"
          aria-label="Sonraki görsel (Sağ Ok)"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F0E8D9] hover:text-[#A88558] bg-[#201C18]/80 border border-[#321816] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88558]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Central Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        >
          <div className="relative overflow-hidden border border-[#321816] bg-[#171411] shadow-2xl">
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              fallbackTitle={item.title}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          {/* Caption & Metadata */}
          <div className="mt-4 text-center max-w-xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A88558] block mb-1">
              {item.category} · {currentIndex + 1} / {items.length}
            </span>
            <h4 className="font-serif text-xl text-[#F0E8D9] mb-1">{item.title}</h4>
            <p className="text-xs text-[#9E9588] font-light">{item.caption}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
