import React from 'react';

export const CulinaryPhilosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#171411] border-t border-[#321816]/60 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Section Label */}
        <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-4">
          MUTFAK YAKLAŞIMI
        </span>

        {/* Large Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal leading-tight tracking-tight mb-8">
          Tekniğin önünde <span className="italic text-[#DDD0BB]">malzeme.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#DDD0BB]/90 font-light leading-relaxed max-w-3xl mx-auto mb-16">
          SERA'nın kurgusal mutfak yaklaşımı; mevsimsellik, sade teknikler ve ürünün doğal karakterini koruyan tabaklar etrafında şekillenir.
        </p>

        {/* Philosophy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-12 border-t border-[#321816]">
          <div className="p-6 bg-[#201C18]/60 border border-[#321816]/80">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] font-mono block mb-2">
              01 · MÜDAHALESİZLİK
            </span>
            <p className="text-sm text-[#9E9588] font-light leading-relaxed">
              İyi yetişmiş bir enginarı ya da taze tutulmuş bir levreği karmaşık soslarla boğmak yerine, ateş ve kaliteli zeytinyağı ile öne çıkarma prensibi.
            </p>
          </div>

          <div className="p-6 bg-[#201C18]/60 border border-[#321816]/80">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] font-mono block mb-2">
              02 · DÖNGÜSELLİK
            </span>
            <p className="text-sm text-[#9E9588] font-light leading-relaxed">
              Kökten yaprağa kullanım anlayışı. Kemik suları, tütsülenmiş yağlar ve közlenmiş sebze kabukları sosların ana gövdesini oluşturur.
            </p>
          </div>

          <div className="p-6 bg-[#201C18]/60 border border-[#321816]/80">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88558] font-mono block mb-2">
              03 · MEVSİM TAKVİMİ
            </span>
            <p className="text-sm text-[#9E9588] font-light leading-relaxed">
              Sabit bir menü yerine, doğanın sunduğu ritme göre haftalık olarak güncellenen esnek ve canlı tabak kompozisyonları.
            </p>
          </div>
        </div>

        {/* Conceptual Note */}
        <div className="mt-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#73705A] font-mono">
            TEMSİLİ GASTRONOMİK YAKLAŞIM · VELNAR DIGITAL STUDIO
          </span>
        </div>
      </div>
    </section>
  );
};
