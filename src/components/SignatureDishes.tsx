import React from 'react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

interface SignatureDishesProps {
  onSelectDishCategory?: (category: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDishCategory }) => {
  return (
    <section className="py-24 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
              ÖNE ÇIKAN TABAKLAR
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal tracking-tight">
              Masadan seçkiler<span className="text-[#A88558]">.</span>
            </h2>
          </div>
          <p className="text-sm text-[#9E9588] max-w-md font-light leading-relaxed">
            Ateşin ısısıyla dengelenen, her biri mevsiminde toplanan mahsullerle hazırlanan imza tabaklarımız.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Item 1: Large Featured Plate (Span 7) */}
          <div className="md:col-span-7 group flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#201C18] border border-[#321816] mb-6">
              <img
                src={SIGNATURE_DISHES[0].image}
                alt={SIGNATURE_DISHES[0].name}
                className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#171411]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[#DDD0BB] font-mono border border-[#321816]">
                  {SIGNATURE_DISHES[0].category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-sm text-[#A88558]">
                {SIGNATURE_DISHES[0].price} TL
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                  {SIGNATURE_DISHES[0].name}
                </h3>
                <span className="text-xs text-[#73705A] uppercase tracking-wider font-mono">
                  {SIGNATURE_DISHES[0].subtitle}
                </span>
              </div>
              <p className="text-sm text-[#9E9588] font-light leading-relaxed">
                {SIGNATURE_DISHES[0].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SIGNATURE_DISHES[0].details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-[#DDD0BB]/70 border-b border-[#4A211E] pb-0.5"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Item 2: Medium Vertical Plate (Span 5) */}
          <div className="md:col-span-5 group flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#201C18] border border-[#321816] mb-6">
              <img
                src={SIGNATURE_DISHES[1].image}
                alt={SIGNATURE_DISHES[1].name}
                className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#171411]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[#DDD0BB] font-mono border border-[#321816]">
                  {SIGNATURE_DISHES[1].category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-sm text-[#A88558]">
                {SIGNATURE_DISHES[1].price} TL
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                  {SIGNATURE_DISHES[1].name}
                </h3>
                <span className="text-xs text-[#73705A] uppercase tracking-wider font-mono">
                  {SIGNATURE_DISHES[1].subtitle}
                </span>
              </div>
              <p className="text-sm text-[#9E9588] font-light leading-relaxed">
                {SIGNATURE_DISHES[1].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SIGNATURE_DISHES[1].details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-[#DDD0BB]/70 border-b border-[#4A211E] pb-0.5"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Item 3: Square Lower Left (Span 5) */}
          <div className="md:col-span-5 group flex flex-col justify-between mt-4 md:mt-8">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#201C18] border border-[#321816] mb-6">
              <img
                src={SIGNATURE_DISHES[2].image}
                alt={SIGNATURE_DISHES[2].name}
                className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#171411]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[#DDD0BB] font-mono border border-[#321816]">
                  {SIGNATURE_DISHES[2].category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-sm text-[#A88558]">
                {SIGNATURE_DISHES[2].price} TL
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                  {SIGNATURE_DISHES[2].name}
                </h3>
                <span className="text-xs text-[#73705A] uppercase tracking-wider font-mono">
                  {SIGNATURE_DISHES[2].subtitle}
                </span>
              </div>
              <p className="text-sm text-[#9E9588] font-light leading-relaxed">
                {SIGNATURE_DISHES[2].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SIGNATURE_DISHES[2].details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-[#DDD0BB]/70 border-b border-[#4A211E] pb-0.5"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Item 4: Wide Lower Right (Span 7) */}
          <div className="md:col-span-7 group flex flex-col justify-between mt-4 md:mt-8">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#201C18] border border-[#321816] mb-6">
              <img
                src={SIGNATURE_DISHES[3].image}
                alt={SIGNATURE_DISHES[3].name}
                className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#171411]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-[#DDD0BB] font-mono border border-[#321816]">
                  {SIGNATURE_DISHES[3].category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-sm text-[#A88558]">
                {SIGNATURE_DISHES[3].price} TL
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                  {SIGNATURE_DISHES[3].name}
                </h3>
                <span className="text-xs text-[#73705A] uppercase tracking-wider font-mono">
                  {SIGNATURE_DISHES[3].subtitle}
                </span>
              </div>
              <p className="text-sm text-[#9E9588] font-light leading-relaxed">
                {SIGNATURE_DISHES[3].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {SIGNATURE_DISHES[3].details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] text-[#DDD0BB]/70 border-b border-[#4A211E] pb-0.5"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
