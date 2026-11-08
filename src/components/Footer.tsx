import React from 'react';
import { salonLocation } from '../data/salonConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Location', href: '#location' },
    { label: 'Appointment Enquiry', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#20201E] text-white pt-16 pb-12 hairline-dark-t">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 hairline-dark-b">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif-editorial text-2xl font-bold tracking-tight text-white block">
                HAIR LINE UNISEX SALON
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A58A69] font-medium block mt-1">
                The Hair Edit · Contemporary Hair Studio
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light">
              A contemporary hair and grooming studio for men and women, focused on personalized cutting technique, natural texture, and thoughtful local service.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#A58A69] block font-medium">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-neutral-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Location & Map Link */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#A58A69] block font-medium">
              Verified Location
            </span>
            <address className="not-italic text-xs text-neutral-300 leading-relaxed space-y-1">
              <div>25, Chandigarh Road, Village Balongi, Phase I</div>
              <div>Industrial Area, Balongi, Kharar</div>
              <div>Sahibzada Ajit Singh Nagar, Punjab 160055</div>
            </address>

            <div className="pt-2">
              <a
                href={salonLocation.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#A58A69] hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>Google Maps Directions</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal / Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} HAIR LINE UNISEX SALON. All rights reserved.
          </div>
          <div className="text-[11px] text-neutral-400">
            Independent local salon identity · Concept: The Hair Edit
          </div>
        </div>
      </div>
    </footer>
  );
};
