import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { FireKitchenStory } from './components/FireKitchenStory';
import { CulinaryPhilosophy } from './components/CulinaryPhilosophy';
import { SpaceSection } from './components/SpaceSection';
import { Gallery } from './components/Gallery';
import { ReservationSection } from './components/ReservationSection';
import { PrivateDiningSection } from './components/PrivateDiningSection';
import { ExperienceValue } from './components/ExperienceValue';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const scrollToReservation = () => {
    const el = document.getElementById('rezervasyon');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#171411] text-[#F0E8D9] font-sans antialiased relative selection:bg-[#4A211E] selection:text-[#F0E8D9]">
      {/* Sticky Refined Header */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* Main Page Layout */}
      <main id="main-content">
        {/* Cinematic Hero */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenReservation={scrollToReservation}
        />

        {/* Story / Manifesto */}
        <Manifesto />

        {/* Featured Signature Plates */}
        <SignatureDishes />

        {/* Full Interactive Menu */}
        <MenuSection />

        {/* Fire & Hearth Kitchen Story */}
        <FireKitchenStory />

        {/* Space / Interior Atmosphere */}
        <SpaceSection />

        {/* Culinary Ethos */}
        <CulinaryPhilosophy />

        {/* Masonry Photo Gallery & Lightbox */}
        <Gallery />

        {/* Interactive Reservation Flow */}
        <ReservationSection />

        {/* Private Dining & Groups */}
        <PrivateDiningSection />

        {/* Experience Value Proposition for Restaurateurs */}
        <ExperienceValue />

        {/* Location & Operating Hours */}
        <LocationContact />
      </main>

      {/* Editorial Footer with VELNAR Credit & Disclaimer */}
      <Footer />

      {/* Discrete Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Bottom Sticky Action Bar on Mobile */}
      <StickyMobileBar
        onOpenReservation={scrollToReservation}
        onOpenMenu={scrollToMenu}
      />
    </div>
  );
}
