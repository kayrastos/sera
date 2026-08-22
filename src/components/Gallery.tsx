import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryCategory, GalleryItem } from '../types';
import { Lightbox } from './Lightbox';
import { ImageWithFallback } from './ImageWithFallback';

const CATEGORIES: GalleryCategory[] = ['Tümü', 'Mutfak', 'Tabaklar', 'Mekân', 'Detaylar'];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Tümü');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'Tümü' ? true : item.category === activeCategory
  );

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section className="py-28 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
              FOTOĞRAF SEÇKİSİ
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal tracking-tight">
              Galeri & Detaylar
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#321816] pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  id={`gal-tab-${cat.toLowerCase()}`}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-all font-sans ${
                    isActive
                      ? 'bg-[#4A211E] text-[#F0E8D9] border border-[#73705A]/40'
                      : 'text-[#9E9588] hover:text-[#F0E8D9] bg-[#201C18]/60 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => {
              const isWide = index % 5 === 0;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedItem(item);
                    }
                  }}
                  id={`gallery-item-${item.id}`}
                  aria-label={`Fotoğrafı büyüt: ${item.title}`}
                  className={`group relative overflow-hidden bg-[#201C18] border border-[#321816] cursor-pointer text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A88558] ${
                    isWide ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'
                  }`}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none" />

                  {/* Hover Caption */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <div className="flex justify-end">
                      <span className="p-2 bg-[#171411]/80 backdrop-blur-sm text-[#F0E8D9] border border-[#321816]">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#A88558] block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F0E8D9]">{item.title}</h4>
                      <p className="text-xs text-[#DDD0BB]/80 font-light mt-0.5">{item.caption}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
      />
    </section>
  );
};
