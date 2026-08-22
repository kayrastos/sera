import React from 'react';
import { Compass, Smartphone, Eye, MessageCircle } from 'lucide-react';

export const ExperienceValue: React.FC = () => {
  const highlights = [
    {
      icon: Compass,
      title: 'Menünün Kolay Keşfi',
      description: 'Mevsimlik tabakların, alerjenlerin ve pişirme tekniklerinin berrak tipografiyle sunumu.',
    },
    {
      icon: Smartphone,
      title: 'Mobil Rezervasyon',
      description: 'Saniyeler içinde doğrudan işletme WhatsApp hattına bağlanan pratik talep akışı.',
    },
    {
      icon: Eye,
      title: 'Mekân Atmosferi',
      description: 'Misafirin kapıdan girmeden önce ışığı, masayı ve ateşi hissetmesini sağlayan sinematik görsel dil.',
    },
    {
      icon: MessageCircle,
      title: 'Hızlı İletişim',
      description: 'Özel masalar, gruplar ve doğrudan sorular için pürüzsüz temas noktaları.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#171411] border-t border-[#321816]/60 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
            DİJİTAL DOKUNUŞ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E8D9] font-normal tracking-tight mb-4">
            Dijital deneyim, <br className="hidden sm:inline" />
            <span className="italic text-[#DDD0BB]">masaya oturmadan başlar.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9588] font-light leading-relaxed">
            Gastronomi yalnızca tabakta değil; misafirin restoranla ilk temas kurduğu dijital tasarımda başlar.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#1F1B17] border border-[#321816] hover:border-[#73705A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 border border-[#4A211E] bg-[#201C18] flex items-center justify-center text-[#A88558] mb-5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F0E8D9] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#9E9588] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#321816]/40 text-[10px] uppercase font-mono text-[#73705A]">
                  0{idx + 1} · VELNAR STANDARDI
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
