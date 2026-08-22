import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, MessageSquare, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

export const LocationContact: React.FC = () => {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(`Merhaba, ${RESTAURANT_CONFIG.name} hakkında bilgi almak istiyorum.`);
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="iletisim" className="py-28 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
            KONUM & İLETİŞİM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal tracking-tight mb-4">
            Ulaşım ve Servis Saatleri
          </h2>
          <p className="text-sm md:text-base text-[#9E9588] font-light leading-relaxed">
            Akşam servisi boyunca açık mutfak ve masalarımız sizleri ağırlamaya hazırdır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Location & Hours Card (Span 7) */}
          <div className="lg:col-span-7 bg-[#1F1B17] border border-[#321816] p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Location Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#DDD0BB] font-mono block mb-1">
                    LOKASYON
                  </span>
                  <h3 className="font-serif text-2xl text-[#F0E8D9] mb-1">
                    {RESTAURANT_CONFIG.subLocation}
                  </h3>
                  <p className="text-xs text-[#9E9588] font-light">
                    Kurgusal konsept tasarımı — Gerçek bir fiziksel restoran adresi bulunmamaktadır.
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4 pt-6 border-t border-[#321816]">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#DDD0BB] font-mono block mb-1">
                    ÇALIŞMA SAATLERİ
                  </span>
                  <div className="space-y-1 text-sm text-[#F0E8D9]">
                    <p className="font-mono">
                      <span className="text-[#A88558]">{RESTAURANT_CONFIG.hours.days}:</span> {RESTAURANT_CONFIG.hours.time}
                    </p>
                    <p className="font-mono text-[#9E9588]">{RESTAURANT_CONFIG.hours.closed}</p>
                  </div>
                  <p className="text-[11px] text-[#73705A] font-mono mt-2">
                    {RESTAURANT_CONFIG.hours.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="pt-8 mt-8 border-t border-[#321816]/60 flex items-center justify-between text-xs text-[#73705A] font-mono">
              <span>REZERVASYONLU SERVİS</span>
              <span>VALE HİZMETİ (DEMO)</span>
            </div>
          </div>

          {/* Contact Direct Actions (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* WhatsApp Tile */}
            <button
              onClick={openWhatsApp}
              className="p-6 bg-[#1F1B17] hover:bg-[#201C18] border border-[#321816] hover:border-[#A88558]/60 transition-all text-left group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558] group-hover:bg-[#4A211E] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73705A] block">
                    DOĞRUDAN MESAJ
                  </span>
                  <span className="font-serif text-lg text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                    WhatsApp Hattı
                  </span>
                  <p className="text-xs text-[#9E9588] font-mono">Hızlı rezervasyon & soru</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#73705A] group-hover:text-[#F0E8D9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            {/* Phone Tile */}
            <a
              href={`tel:${RESTAURANT_CONFIG.phoneTel}`}
              className="p-6 bg-[#1F1B17] hover:bg-[#201C18] border border-[#321816] hover:border-[#A88558]/60 transition-all text-left group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558] group-hover:bg-[#4A211E] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73705A] block">
                    TELEFON
                  </span>
                  <span className="font-serif text-lg text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
                    {RESTAURANT_CONFIG.phoneDisplay}
                  </span>
                  <p className="text-xs text-[#9E9588] font-mono">16:00 sonrası canlı hat</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#73705A] group-hover:text-[#F0E8D9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Instagram Tile */}
            <div className="p-6 bg-[#1F1B17] border border-[#321816] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73705A] block">
                    SOSYAL MEDYA
                  </span>
                  <span className="font-serif text-lg text-[#F0E8D9]">
                    {RESTAURANT_CONFIG.instagram}
                  </span>
                  <p className="text-xs text-[#9E9588] font-mono">Mutfaktan günlük kareler</p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono text-[#73705A] border border-[#321816] px-2 py-1">
                DEMO
              </span>
            </div>

            {/* Email Tile */}
            <div className="p-6 bg-[#1F1B17] border border-[#321816] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#171411] border border-[#321816] text-[#A88558]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#73705A] block">
                    E-POSTA
                  </span>
                  <span className="font-serif text-sm sm:text-base text-[#F0E8D9]">
                    {RESTAURANT_CONFIG.email}
                  </span>
                  <p className="text-xs text-[#9E9588] font-mono">Basın & genel yazışmalar</p>
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono text-[#73705A] border border-[#321816] px-2 py-1">
                DEMO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
