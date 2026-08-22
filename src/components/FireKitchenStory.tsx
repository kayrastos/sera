import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const FireKitchenStory: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Image Gallery with Depth */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Large Image */}
              <div className="aspect-[4/5] overflow-hidden border border-[#321816] shadow-2xl bg-[#201C18]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507048821117-6573c21c4388?auto=format&fit=crop&w=1000&q=85"
                  alt="Açık alev ve odun ateşi üzerinde döküm ızgara tekniği"
                  className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.12]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-[#171411]/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#DDD0BB]/80 pointer-events-none">
                  <span>MEŞE & ZEYTİN KÖMÜRÜ</span>
                  <span>450°C KOR ATEŞİ</span>
                </div>
              </div>

              {/* Offset Secondary Image (Chef hands / Preparation detail) */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-48 aspect-[3/4] border border-[#4A211E] overflow-hidden shadow-2xl bg-[#171411]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=85"
                  alt="Şefin tabak hazırlığı ve özenli dokunuşu"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
                ATEŞ & TEKNİK
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal leading-[1.12] tracking-tight">
                Mutfağın kalbinde <br />
                <span className="italic text-[#DDD0BB] font-light">ateş var.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#DDD0BB]/90 font-light leading-relaxed">
              Odun ateşi, köz ve yüksek ısı; SERA'nın yemek dilini şekillendiren temel teknikler olarak kurgulanmıştır. Amaç, malzemenin karakterini bastırmak değil, görünür hale getirmektir.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#321816]">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-[#4A211E] bg-[#201C18] text-[#A88558] mt-1 shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#F0E8D9] mb-1">Doğrudan Kor Teması</h3>
                  <p className="text-xs sm:text-sm text-[#9E9588] font-light leading-relaxed">
                    Közlenen patlıcanlar, marine edilmiş etler ve fırınlanan kök sebzeler doğrudan meşe kömürünün doğal isini emer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-[#4A211E] bg-[#201C18] text-[#A88558] mt-1 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#F0E8D9] mb-1">Döküm & Ağır Isı</h3>
                  <p className="text-xs sm:text-sm text-[#9E9588] font-light leading-relaxed">
                    Ağır döküm tavalarda saatlerce düşük ısıda pişen etler, su kaybını önlerken derin lezzet konsantrasyonu kazanır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
