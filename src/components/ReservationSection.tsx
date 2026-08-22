import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Phone, User, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, GUEST_OPTIONS, SEATING_AREAS } from '../data/restaurantData';
import { ReservationFormData } from '../types';
import { getLocalTodayDateString, isDateMonday, getAvailableTimeSlots } from '../utils/dateUtils';

export const ReservationSection: React.FC = () => {
  const initialToday = getLocalTodayDateString();
  const initialSlots = getAvailableTimeSlots(initialToday);

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    date: initialToday,
    time: initialSlots[0] || '19:30',
    guests: '2 Kişi',
    seatingArea: 'Salon',
    specialRequest: '',
  });

  const [availableSlots, setAvailableSlots] = useState<string[]>(initialSlots);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // When date changes, update available time slots and validate Monday
  useEffect(() => {
    if (!formData.date) return;

    if (isDateMonday(formData.date)) {
      setErrors((prev) => ({
        ...prev,
        date: 'SERA pazartesi günleri kapalıdır. Lütfen salı – pazar günleri arasında bir tarih seçiniz.',
      }));
      setAvailableSlots([]);
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.date;
        return next;
      });

      const slots = getAvailableTimeSlots(formData.date);
      setAvailableSlots(slots);

      if (slots.length > 0 && !slots.includes(formData.time)) {
        setFormData((prev) => ({ ...prev, time: slots[0] }));
      }
    }
  }, [formData.date]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Lütfen ad ve soyadınızı belirtin.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Lütfen iletişim telefon numaranızı girin.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Geçerli bir telefon numarası giriniz (örn: 0532 123 45 67).';
    }
    
    if (!formData.date) {
      newErrors.date = 'Lütfen bir tarih seçin.';
    } else if (isDateMonday(formData.date)) {
      newErrors.date = 'SERA pazartesi günleri kapalıdır. Lütfen salı – pazar günleri arasında bir tarih seçiniz.';
    }

    if (!formData.time || availableSlots.length === 0) {
      newErrors.time = availableSlots.length === 0 
        ? 'Seçilen tarihte uygun servis saati bulunmamaktadır.' 
        : 'Lütfen saat seçin.';
    }

    if (!formData.guests) newErrors.guests = 'Lütfen kişi sayısı seçin.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowPreviewModal(true);
    }
  };

  const getWhatsAppMessage = () => {
    return `Merhaba, ${RESTAURANT_CONFIG.name} konsept sitesi üzerinden rezervasyon talebi oluşturmak istiyorum.

Ad Soyad: ${formData.fullName}
Tarih: ${formData.date}
Saat: ${formData.time}
Kişi Sayısı: ${formData.guests}
Tercih Edilen Alan: ${formData.seatingArea}
Telefon: ${formData.phone}
${formData.email ? `E-posta: ${formData.email}\n` : ''}${formData.specialRequest ? `Özel Not / Talep: ${formData.specialRequest}\n` : ''}
Bu bir demo rezervasyon talebidir.`;
  };

  const handleSendToWhatsApp = () => {
    const encoded = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setShowPreviewModal(false);
  };

  return (
    <section id="rezervasyon" className="py-28 md:py-36 bg-[#171411] border-t border-[#321816]/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4A211E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#321816]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#A88558] font-sans font-medium block mb-3">
            REZERVASYON
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F0E8D9] font-normal tracking-tight mb-4">
            Sofrada yerinizi ayırın<span className="text-[#A88558]">.</span>
          </h2>
          <p className="text-sm md:text-base text-[#9E9588] font-light leading-relaxed">
            Akşam servisi için talep oluşturun. Ekibimiz müsaitlik durumunu kontrol ederek en kısa sürede dönüş sağlayacaktır.
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="bg-[#1F1B17] border border-[#321816] p-6 sm:p-10 md:p-12 shadow-2xl relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Ad Soyad */}
              <div className="space-y-2">
                <label
                  htmlFor="res-fullName"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Ad Soyad <span className="text-[#A88558]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="res-fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Örn. Selin Yılmaz"
                    className={`w-full bg-[#171411] border text-[#F0E8D9] placeholder-[#73705A] text-sm px-4 py-3.5 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-600/80 focus:border-red-500' : 'border-[#321816] focus:border-[#A88558]'
                    }`}
                  />
                  <User className="w-4 h-4 text-[#73705A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Telefon */}
              <div className="space-y-2">
                <label
                  htmlFor="res-phone"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Telefon <span className="text-[#A88558]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="res-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0532 000 00 00"
                    className={`w-full bg-[#171411] border text-[#F0E8D9] placeholder-[#73705A] text-sm px-4 py-3.5 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-600/80 focus:border-red-500' : 'border-[#321816] focus:border-[#A88558]'
                    }`}
                  />
                  <Phone className="w-4 h-4 text-[#73705A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Tarih */}
              <div className="space-y-2">
                <label
                  htmlFor="res-date"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Tarih <span className="text-[#A88558]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="res-date"
                    min={initialToday}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#171411] border text-[#F0E8D9] text-sm px-4 py-3.5 focus:outline-none transition-colors ${
                      errors.date ? 'border-red-600/80 focus:border-red-500' : 'border-[#321816] focus:border-[#A88558]'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-start gap-1">
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Saat */}
              <div className="space-y-2">
                <label
                  htmlFor="res-time"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Saat <span className="text-[#A88558]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="res-time"
                    value={formData.time}
                    disabled={availableSlots.length === 0}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={`w-full bg-[#171411] border text-[#F0E8D9] text-sm px-4 py-3.5 focus:outline-none transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.time ? 'border-red-600/80 focus:border-red-500' : 'border-[#321816] focus:border-[#A88558]'
                    }`}
                  >
                    {availableSlots.length === 0 ? (
                      <option value="" className="bg-[#171411] text-[#73705A]">
                        Müsait Saat Yok
                      </option>
                    ) : (
                      availableSlots.map((t) => (
                        <option key={t} value={t} className="bg-[#171411] text-[#F0E8D9]">
                          {t}
                        </option>
                      ))
                    )}
                  </select>
                  <Clock className="w-4 h-4 text-[#73705A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.time && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.time}
                  </p>
                )}
              </div>

              {/* Kişi Sayısı */}
              <div className="space-y-2">
                <label
                  htmlFor="res-guests"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Kişi Sayısı <span className="text-[#A88558]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="res-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] text-sm px-4 py-3.5 focus:outline-none focus:border-[#A88558] transition-colors appearance-none cursor-pointer"
                  >
                    {GUEST_OPTIONS.map((g) => (
                      <option key={g} value={g} className="bg-[#171411] text-[#F0E8D9]">
                        {g}
                      </option>
                    ))}
                  </select>
                  <Users className="w-4 h-4 text-[#73705A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Oturma Alanı Tercihi */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans">
                Tercih Edilen Oturma Alanı
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SEATING_AREAS.map((area) => {
                  const isSelected = formData.seatingArea === area.id;
                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingArea: area.id as any })}
                      className={`p-3 text-left border text-xs transition-all ${
                        isSelected
                          ? 'bg-[#4A211E]/40 border-[#A88558] text-[#F0E8D9]'
                          : 'bg-[#171411] border-[#321816] text-[#9E9588] hover:text-[#DDD0BB]'
                      }`}
                    >
                      <span className="font-medium block text-xs mb-0.5">{area.id}</span>
                      <span className="text-[10px] text-[#73705A]">{area.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* E-posta (İsteğe bağlı) */}
              <div className="space-y-2">
                <label
                  htmlFor="res-email"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  E-posta <span className="text-[10px] text-[#73705A] lowercase">(isteğe bağlı)</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="res-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@alanadi.com"
                    className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] placeholder-[#73705A] text-sm px-4 py-3.5 focus:outline-none focus:border-[#A88558] transition-colors"
                  />
                  <Mail className="w-4 h-4 text-[#73705A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Özel İstek / Alerji Notu */}
              <div className="space-y-2">
                <label
                  htmlFor="res-note"
                  className="block text-xs uppercase tracking-[0.18em] text-[#DDD0BB] font-sans"
                >
                  Özel İstek / Alerji <span className="text-[10px] text-[#73705A] lowercase">(isteğe bağlı)</span>
                </label>
                <input
                  type="text"
                  id="res-note"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="Alerjen, kutlama, masa tercihi..."
                  className="w-full bg-[#171411] border border-[#321816] text-[#F0E8D9] placeholder-[#73705A] text-sm px-4 py-3.5 focus:outline-none focus:border-[#A88558] transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                id="reservation-submit-btn"
                className="w-full py-4 bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#73705A]/40 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-xl hover:border-[#A88558] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>REZERVASYON TALEBİ OLUŞTUR</span>
                <MessageSquare className="w-4 h-4 text-[#A88558]" />
              </button>
            </div>

            {/* Clear Legal / Conceptual Notice */}
            <div className="pt-2 text-center">
              <p className="text-xs text-[#73705A] tracking-wide font-sans">
                {RESTAURANT_CONFIG.reservationNotice}
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation & WhatsApp Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
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
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#321816]">
                <div className="p-2 bg-[#4A211E] text-[#A88558] rounded-full">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F0E8D9]">Rezervasyon Talebi Özeti</h3>
                  <span className="text-[11px] font-mono text-[#A88558] uppercase tracking-wider">
                    SERA · Akşam Servisi
                  </span>
                </div>
              </div>

              <div className="bg-[#171411] border border-[#321816] p-4 space-y-2 text-xs font-mono text-[#DDD0BB] mb-6">
                <div className="flex justify-between border-b border-[#321816]/60 pb-1.5">
                  <span className="text-[#73705A]">Misafir:</span>
                  <span className="font-medium text-[#F0E8D9]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#321816]/60 pb-1.5">
                  <span className="text-[#73705A]">Tarih & Saat:</span>
                  <span className="font-medium text-[#F0E8D9]">{formData.date} — {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#321816]/60 pb-1.5">
                  <span className="text-[#73705A]">Kişi & Alan:</span>
                  <span className="font-medium text-[#F0E8D9]">{formData.guests} ({formData.seatingArea})</span>
                </div>
                <div className="flex justify-between border-b border-[#321816]/60 pb-1.5">
                  <span className="text-[#73705A]">Telefon:</span>
                  <span className="font-medium text-[#F0E8D9]">{formData.phone}</span>
                </div>
                {formData.email && (
                  <div className="flex justify-between border-b border-[#321816]/60 pb-1.5">
                    <span className="text-[#73705A]">E-posta:</span>
                    <span className="font-medium text-[#F0E8D9]">{formData.email}</span>
                  </div>
                )}
                {formData.specialRequest && (
                  <div className="flex justify-between pt-1">
                    <span className="text-[#73705A]">Not:</span>
                    <span className="text-[#DDD0BB] italic">{formData.specialRequest}</span>
                  </div>
                )}
              </div>

              <div className="p-3 bg-[#321816]/30 border border-[#4A211E]/60 text-[11px] text-[#DDD0BB]/90 mb-6 leading-relaxed">
                Bu buton, talebinizi işletmenin WhatsApp hattına hazır bir mesaj olarak aktarır. Onay mesajı gelene kadar rezervasyon kesinleşmiş sayılmaz.
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  id="confirm-whatsapp-send-btn"
                  className="flex-1 py-3.5 bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#A88558] text-xs font-semibold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#A88558]" />
                  <span>WhatsApp ile Gönder</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreviewModal(false)}
                  className="px-6 py-3.5 bg-[#171411] hover:bg-[#201C18] text-[#9E9588] hover:text-[#F0E8D9] border border-[#321816] text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer"
                >
                  Düzenle
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
