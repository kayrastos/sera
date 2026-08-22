import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, UtensilsCrossed, Flame } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_CONFIG } from '../data/restaurantData';
import { MenuCategoryType } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('BAŞLANGIÇLAR');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesTag = selectedTag ? item.tags?.includes(selectedTag) : true;
    return matchesCategory && matchesTag;
  });

  // Extract all unique tags in the active category
  const availableTags = Array.from(
    new Set(
      MENU_ITEMS.filter((item) => item.category === activeCategory)
        .flatMap((item) => item.tags || [])
    )
  );

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#171411] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A211E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
            MEVSİMSEL & ATEŞTE PİŞEN
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal tracking-tight mb-4">
            Mutfak Menüsü
          </h2>
          <p className="text-sm md:text-base text-[#9E9588] font-light leading-relaxed">
            Ateş, köz ve Ege topraklarının taze mahsulleriyle her akşam yeniden şekillenen tatlar.
          </p>
        </div>

        {/* Category Tabs Navigation */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-8 scrollbar-none gap-2 md:gap-4 border-b border-[#321816]">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedTag(null);
                }}
                id={`menu-cat-${category.toLowerCase()}`}
                className={`relative px-4 md:px-6 py-3 text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 font-sans focus:outline-none ${
                  isActive
                    ? 'text-[#F0E8D9] font-medium'
                    : 'text-[#9E9588] hover:text-[#DDD0BB]'
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A88558]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Optional Tag Filter Chips */}
        {availableTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-colors border ${
                selectedTag === null
                  ? 'bg-[#4A211E]/40 border-[#A88558] text-[#F0E8D9]'
                  : 'bg-[#201C18] border-[#321816] text-[#9E9588] hover:text-[#DDD0BB]'
              }`}
            >
              Tümü ({MENU_ITEMS.filter((i) => i.category === activeCategory).length})
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-colors border ${
                  selectedTag === tag
                    ? 'bg-[#4A211E]/40 border-[#A88558] text-[#F0E8D9]'
                    : 'bg-[#201C18] border-[#321816] text-[#9E9588] hover:text-[#DDD0BB]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Editorial List */}
        <div className="relative min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + (selectedTag || 'all')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  id={`dish-${item.id}`}
                  className="group flex flex-col justify-between border-b border-[#321816]/60 pb-8 hover:border-[#73705A]/40 transition-colors"
                >
                  <div>
                    {/* Dish Title, Signature Badge & Price */}
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                          {item.name}
                        </h3>
                        {item.isSignature && (
                          <span
                            title="Şefin İmza Tabağı"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] uppercase tracking-widest bg-[#4A211E]/60 text-[#DDD0BB] border border-[#73705A]/40 font-mono"
                          >
                            <Flame className="w-2.5 h-2.5 text-[#A88558]" />
                            İmza
                          </span>
                        )}
                      </div>

                      {/* Editorial Price with Currency */}
                      <span className="font-mono text-base text-[#DDD0BB] font-medium whitespace-nowrap">
                        {item.price} TL
                      </span>
                    </div>

                    {/* Ingredients / Description */}
                    <p className="text-sm text-[#9E9588] font-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags and Recommended Pairing */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#201C18] text-[#9E9588] text-[10px] uppercase tracking-wider font-mono border border-[#321816]/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.pairing && (
                      <span className="text-[#73705A] italic text-[11px] font-serif">
                        Tavsiye: {item.pairing}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discreet Concept Disclaimer */}
        <div className="mt-16 pt-8 border-t border-[#321816] text-center">
          <p className="text-xs text-[#73705A] tracking-wider font-mono">
            {RESTAURANT_CONFIG.menuDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
