import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Flame, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenReservation }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#171411]"
    >
      {/* Background Image with Dark Vignette & Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=88"
          alt="Açık odun ateşi ve şefin tabağı hazırlama anı"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.12] saturate-[0.9]"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-[#171411]/50 to-[#171411]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#171411_95%)] opacity-80" />
        {/* Warm oxblood ambiance tone */}
        <div className="absolute inset-0 bg-[#4A211E]/20 mix-blend-color-burn pointer-events-none" />
      </div>

      {/* Decorative vertical editorial lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pointer-events-none z-10 flex justify-between">
        <div className="w-[1px] h-full bg-[#321816]/30" />
        <div className="w-[1px] h-full bg-[#321816]/30 hidden md:block" />
        <div className="w-[1px] h-full bg-[#321816]/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Eyebrow / Concept Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#73705A]/40 bg-[#171411]/70 backdrop-blur-sm mb-8"
        >
          <Flame className="w-3.5 h-3.5 text-[#A88558]" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#DDD0BB] font-sans font-medium">
            SERA / ISTANBUL / CONTEMPORARY DINING CONCEPT
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-[#F0E8D9] mb-8"
        >
          Ateşin etrafında <br className="hidden sm:inline" />
          <span className="italic font-light text-[#DDD0BB]">başlayan bir sofra.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl text-base md:text-lg text-[#DDD0BB]/90 font-light leading-relaxed mb-10 tracking-wide"
        >
          Mevsimin ürünlerini, ateşin karakteriyle buluşturan çağdaş bir Akdeniz mutfağı deneyimi.
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <button
            onClick={onOpenReservation}
            id="hero-reserve-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#73705A]/40 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-xl hover:border-[#A88558] hover:shadow-[#4A211E]/40 flex items-center justify-center gap-3 group"
          >
            <span>Masayı Ayırt</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A88558] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreMenu}
            id="hero-menu-btn"
            className="w-full sm:w-auto px-8 py-4 bg-[#171411]/80 hover:bg-[#201C18] text-[#DDD0BB] hover:text-[#F0E8D9] border border-[#321816] text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 backdrop-blur-sm"
          >
            Menüyü Keşfet
          </button>
        </motion.div>

        {/* Understated Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-[#9E9588] font-mono"
        >
          <span>AKŞAM SERVİSİ</span>
          <span className="w-1 h-1 rounded-full bg-[#73705A]" />
          <span>TEMSİLİ KONSEPT</span>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-[#9E9588] hover:text-[#F0E8D9] transition-colors"
        onClick={onExploreMenu}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans">Aşağı Kaydır</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#A88558]" />
      </motion.div>
    </section>
  );
};
