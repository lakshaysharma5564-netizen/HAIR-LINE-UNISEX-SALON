/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] =
    useState<string>('haircuts-styling');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252522] flex flex-col font-sans selection:bg-[#A58A69] selection:text-white">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#252522] focus:text-white focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onBookClick={() => scrollToSection('booking')} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onFindSalon={() => scrollToSection('location')}
        />

        {/* Introduction Section */}
        <Introduction />

        {/* Editorial Services Presentation */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Visual Editorial Gallery */}
        <GallerySection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Location & Embedded Map */}
        <LocationSection />

        {/* Contact & Appointment Enquiry */}
        <BookingSection
          preselectedServiceId={selectedServiceForBooking}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
