import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export const SpaceSection: React.FC = () => {
  return (
    <section id="mekan" className="py-28 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
            MEKÂN & MİMARİ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal leading-[1.15] tracking-tight mb-6">
            Akşamın ritmine göre <br />
            <span className="italic text-[#DDD0BB] font-light">tasarlanmış bir atmosfer.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E9588] font-light leading-relaxed">
            Doğal taş duvarlar, karartılmış meşe masalar, keten örtüler ve mum ışığıyla dengelenen; odağında açık mutfak alevinin yer aldığı sakin ve dingin bir yemek alanı.
          </p>
        </div>

        {/* Interior Atmospheric Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Wide Atmosphere Image */}
          <div className="md:col-span-8 relative aspect-[16/10] overflow-hidden border border-[#321816] shadow-2xl bg-[#201C18]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
              alt="Loş ışıklandırılmış restoran masaları ve mum ışığı atmosferi"
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.12]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#F0E8D9] font-serif block">ANA SALON</span>
                <span className="text-[11px] text-[#9E9588] font-sans">Keten örtüler, el yapımı seramikler</span>
              </div>
              <span className="text-[10px] uppercase font-mono text-[#A88558] border border-[#73705A]/40 px-2.5 py-1">
                LOŞ AYDINLATMA
              </span>
            </div>
          </div>

          {/* Secondary Detail Image (Open kitchen bar & wine detail) */}
          <div className="md:col-span-4 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#321816] shadow-2xl bg-[#201C18]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85"
                alt="Açık mutfak barı ve şeflerin çalışma alanı"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <span className="text-xs uppercase tracking-[0.2em] text-[#F0E8D9] font-serif block">MUTFAK BARI</span>
                <span className="text-[10px] text-[#9E9588]">Ateşi ve servisi izleme alanı</span>
              </div>
            </div>

            <div className="p-6 bg-[#201C18]/80 border border-[#321816]">
              <h4 className="font-serif text-lg text-[#F0E8D9] mb-2">Akustik ve Işık Dengesi</h4>
              <p className="text-xs text-[#9E9588] font-light leading-relaxed">
                Yüksek sesli müzik yerine doğal sohbet akustiği; gözü yormayan sıcak amber tonlarında mum ve spot aydınlatmalar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
