import React from 'react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14110E] border-t border-[#321816] py-16 md:py-20 text-[#DDD0BB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#321816]/60">
          {/* Brand Column (Span 6) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-medium tracking-[0.25em] text-[#F0E8D9]">
                {RESTAURANT_CONFIG.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#9E9588] font-sans -mt-0.5">
                {RESTAURANT_CONFIG.descriptor}
              </span>
            </div>

            <p className="text-xs text-[#9E9588] font-light max-w-sm leading-relaxed">
              Mevsimin ürünlerini, ateşin karakteriyle buluşturan çağdaş bir Akdeniz mutfağı kurgusu.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#73705A]">
                {RESTAURANT_CONFIG.subLocation}
              </span>
            </div>
          </div>

          {/* Navigation Links (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A88558] block mb-2">
              NAVİGASYON
            </span>
            <ul className="space-y-2 text-xs font-sans tracking-wider">
              {['Menü', 'Hikâye', 'Mekân', 'Rezervasyon', 'İletişim'].map((item) => {
                const idMap: Record<string, string> = {
                  Menü: 'menu',
                  Hikâye: 'hikaye',
                  Mekân: 'mekan',
                  Rezervasyon: 'rezervasyon',
                  İletişim: 'iletisim',
                };
                return (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(idMap[item])}
                      className="text-[#9E9588] hover:text-[#F0E8D9] transition-colors focus:outline-none"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Studio Credit / Portfolio info (Span 3) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#A88558] block mb-2">
              DİJİTAL TASARIM
            </span>
            <p className="text-xs text-[#9E9588] leading-relaxed">
              Designed by <br />
              <strong className="text-[#F0E8D9] font-medium tracking-wide">
                {RESTAURANT_CONFIG.studioCredit}
              </strong>
            </p>
            <p className="text-[11px] text-[#73705A] font-light">
              Gastronomi & lüks konaklama işletmeleri için özel dijital deneyimler.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Fictional Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[#73705A] font-light max-w-2xl leading-relaxed">
            {RESTAURANT_CONFIG.disclaimer}
          </p>

          <span className="text-[10px] font-mono text-[#73705A] whitespace-nowrap">
            © {new Date().getFullYear()} VELNAR DIGITAL STUDIO
          </span>
        </div>
      </div>
    </footer>
  );
};
