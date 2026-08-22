import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';
import { PrivateDiningFormData } from '../types';

export const PrivateDiningSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<PrivateDiningFormData>({
    fullName: '',
    companyOrOccasion: '',
    phone: '',
    email: '',
    date: '',
    guests: '8-12 Kişi',
    notes: '',
  });
  const [error, setError] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setError('');
  };

  const handleSendPrivateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Lütfen ad soyad ve telefon bilgilerinizi eksiksiz giriniz.');
      return;
    }

    const message = `Merhaba, ${RESTAURANT_CONFIG.name} konsepti için özel grup / etkinlik talebinde bulunmak istiyorum.

Ad Soyad: ${formData.fullName}
Etkinlik Türü / Şirket: ${formData.companyOrOccasion || 'Özel Kutlama'}
Kişi Sayısı: ${formData.guests}
Tercih Edilen Tarih: ${formData.date || 'Belirtilmedi'}
Telefon: ${formData.phone}
${formData.email ? `E-posta: ${formData.email}\n` : ''}${formData.notes ? `Detaylar: ${formData.notes}\n` : ''}
Bu bir demo grup talebidir.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 md:py-28 bg-[#1F1B17] border-t border-[#321816]/60 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
          ÖZEL DAVETLER & GRUPLAR
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F0E8D9] font-normal tracking-tight mb-4">
          Özel masalar & grup yemekleri
        </h2>
        <p className="text-sm md:text-base text-[#9E9588] font-light leading-relaxed max-w-2xl mx-auto mb-8">
          Özel kutlamalar, küçük gruplar ve kurumsal yemekler için ayrı bir talep akışı örneği.
        </p>

        <button
          onClick={handleOpenModal}
          id="private-dining-open-btn"
          className="px-8 py-3.5 bg-[#201C18] hover:bg-[#4A211E] text-[#DDD0BB] hover:text-[#F0E8D9] border border-[#73705A]/40 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A88558]" />
          <span>Özel Etkinlik Talebi</span>
        </button>
      </div>

      {/* Private Dining Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#171411]/90 backdrop-blur-md p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#1F1B17] border border-[#73705A]/40 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#F0E8D9]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                id="private-modal-close-btn"
                aria-label="Kapat"
                className="absolute top-5 right-5 text-[#9E9588] hover:text-[#F0E8D9] p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A88558] block mb-1">
                  GRUP & KAPALI ETKİNLİK
                </span>
                <h3 className="font-serif text-2xl text-[#F0E8D9]">Özel Etkinlik Talebi</h3>
                <p className="text-xs text-[#9E9588] mt-1">
                  8 kişi ve üzeri özel menü talepleri veya kurumsal akşam yemekleri için.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-950/40 border border-red-800/50 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSendPrivateRequest} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#DDD0BB] mb-1">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Adınız ve Soyadınız"
                    className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] placeholder-[#73705A] text-sm px-3.5 py-2.5 focus:outline-none focus:border-[#A88558]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#DDD0BB] mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0532 000 00 00"
                      className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] placeholder-[#73705A] text-sm px-3.5 py-2.5 focus:outline-none focus:border-[#A88558]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#DDD0BB] mb-1">
                      Kişi Sayısı
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] text-sm px-3.5 py-2.5 focus:outline-none focus:border-[#A88558]"
                    >
                      <option value="8-12 Kişi">8 — 12 Kişi</option>
                      <option value="12-20 Kişi">12 — 20 Kişi</option>
                      <option value="20+ Kişi (Özel Salon)">20+ Kişi (Özel Salon)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#DDD0BB] mb-1">
                    Etkinlik Türü / Detay
                  </label>
                  <input
                    type="text"
                    value={formData.companyOrOccasion}
                    onChange={(e) => setFormData({ ...formData, companyOrOccasion: e.target.value })}
                    placeholder="Örn. Doğum günü, iş yemeği, tadım menüsü..."
                    className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] placeholder-[#73705A] text-sm px-3.5 py-2.5 focus:outline-none focus:border-[#A88558]"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#73705A]/40 text-xs font-semibold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A88558]" />
                    <span>WhatsApp Talebi Oluştur</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
