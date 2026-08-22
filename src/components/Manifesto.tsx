import React from 'react';
import { motion } from 'motion/react';

export const Manifesto: React.FC = () => {
  return (
    <section id="hikaye" className="relative py-28 md:py-36 bg-[#171411] overflow-hidden">
      {/* Subtle background ambient texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Refined Label */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium mb-4">
            SERA'NIN HİKÂYESİ
          </span>
          <div className="w-12 h-[1px] bg-[#4A211E]" />
        </div>

        {/* Large Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Large Typography Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F0E8D9] leading-[1.15] tracking-tight">
              Malzeme mevsimden. <br />
              <span className="italic text-[#DDD0BB] font-light">Karakter ateşten.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#DDD0BB]/90 font-light leading-relaxed max-w-2xl">
              SERA, iyi malzemeyi gereksiz müdahaleden uzak tutan; köz, odun ateşi ve mevsimsel ürünler etrafında şekillenen kurgusal bir restoran konseptidir.
            </p>

            <div className="pt-6 border-t border-[#321816] grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] block mb-2 font-mono">01 · ATEŞ</span>
                <p className="text-xs text-[#9E9588] leading-relaxed">
                  Meşe ve zeytin odunu alevinde doğrudan pişen, tütsülenen ve dinlendirilen tabaklar.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] block mb-2 font-mono">02 · MEVSİM</span>
                <p className="text-xs text-[#9E9588] leading-relaxed">
                  Ege ve Akdeniz üreticilerinden zamanında toplanan taze, saf ve müdahalesiz mahsuller.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] block mb-2 font-mono">03 · SOFRA</span>
                <p className="text-xs text-[#9E9588] leading-relaxed">
                  Zamanın yavaş aktığı, döküm tabakların ve paylaşılan lezzetlerin merkezde olduğu bir akşam.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Image Composition (Asymmetric & Dramatic) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              {/* Primary Image */}
              <div className="relative aspect-[3/4] overflow-hidden border border-[#321816] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85"
                  alt="Ateşte pişen taze et ve odun kömürü dokusu"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-right">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DDD0BB]/70 font-mono">
                    MEŞE ODUNU & KOR ATEŞİ
                  </span>
                </div>
              </div>

              {/* Offset Floating Secondary Image / Callout */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 aspect-square border border-[#4A211E] overflow-hidden shadow-2xl bg-[#201C18]">
                <img
                  src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=500&q=85"
                  alt="Erken hasat zeytinyağı ve taze yabani otlar"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
