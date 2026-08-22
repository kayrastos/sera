import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RESTAURANT_CONFIG } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['menu', 'hikaye', 'mekan', 'rezervasyon', 'iletisim'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menü', href: '#menu', id: 'menu' },
    { name: 'Hikâye', href: '#hikaye', id: 'hikaye' },
    { name: 'Mekân', href: '#mekan', id: 'mekan' },
    { name: 'Rezervasyon', href: '#rezervasyon', id: 'rezervasyon' },
    { name: 'İletişim', href: '#iletisim', id: 'iletisim' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Merhaba, ${RESTAURANT_CONFIG.name} konsepti hakkında bilgi almak istiyorum.`);
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#171411]/90 backdrop-blur-md py-4 border-b border-[#321816]/60 shadow-2xl'
          : 'bg-gradient-to-b from-[#171411]/80 via-[#171411]/30 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col focus:outline-none"
          id="navbar-brand-logo"
        >
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.25em] text-[#F0E8D9] group-hover:text-[#A88558] transition-colors">
            {RESTAURANT_CONFIG.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#9E9588] font-sans -mt-0.5">
            {RESTAURANT_CONFIG.descriptor}
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Ana Navigasyon">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                id={`nav-link-${link.id}`}
                className={`text-xs uppercase tracking-[0.25em] transition-all duration-300 relative py-1 ${
                  isActive ? 'text-[#F0E8D9] font-medium' : 'text-[#9E9588] hover:text-[#F0E8D9]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#A88558]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* WhatsApp Direct Action */}
          <button
            onClick={openWhatsApp}
            id="navbar-whatsapp-btn"
            aria-label="WhatsApp üzerinden iletişime geç"
            className="p-2.5 rounded-full border border-[#321816] text-[#9E9588] hover:text-[#F0E8D9] hover:border-[#A88558]/50 hover:bg-[#201C18] transition-all duration-300 focus:outline-none"
            title="WhatsApp İletişim"
          >
            <MessageSquare className="w-4 h-4 text-[#A88558]" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              const el = document.getElementById('rezervasyon');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              onOpenReservation();
            }}
            id="navbar-reservation-cta"
            className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] bg-[#4A211E] hover:bg-[#351715] text-[#F0E8D9] border border-[#73705A]/30 rounded-none transition-all duration-300 shadow-md hover:border-[#A88558]/60 focus:outline-none"
          >
            MASA AYIRT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="navbar-mobile-toggle"
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          className="md:hidden p-2 text-[#F0E8D9] hover:text-[#A88558] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-drawer-menu"
            className="md:hidden bg-[#171411] border-b border-[#321816] px-6 pt-6 pb-8 overflow-hidden"
          >
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`mobile-nav-link-${link.id}`}
                  className="text-base uppercase tracking-[0.2em] text-[#F0E8D9] hover:text-[#A88558] font-serif py-1 border-b border-[#321816]/30 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-[#73705A]">→</span>
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('rezervasyon');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    onOpenReservation();
                  }}
                  id="mobile-nav-reserve-btn"
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-[#4A211E] text-[#F0E8D9] border border-[#73705A]/40"
                >
                  MASA AYIRT
                </button>

                <button
                  onClick={openWhatsApp}
                  id="mobile-nav-whatsapp-btn"
                  className="w-full py-3 text-center text-xs font-medium uppercase tracking-[0.15em] border border-[#321816] text-[#DDD0BB] hover:bg-[#201C18] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A88558]" />
                  <span>WhatsApp ile İletişim</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#9E9588] tracking-wider font-mono">
                  {RESTAURANT_CONFIG.hours.days} · {RESTAURANT_CONFIG.hours.time}
                </p>
                <p className="text-[10px] text-[#73705A] tracking-wider mt-0.5">
                  {RESTAURANT_CONFIG.subLocation}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
