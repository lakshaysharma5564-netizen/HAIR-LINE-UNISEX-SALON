import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#booking' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F5F0]/95 backdrop-blur-md shadow-xs py-3.5 hairline-b'
            : 'bg-[#F7F5F0] py-5 hairline-b'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#hero"
            className="flex flex-col text-left group whitespace-nowrap shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#252522] group-hover:text-[#A58A69] transition-colors leading-none">
              HAIR LINE
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-medium mt-1 leading-none">
              UNISEX SALON
            </span>
          </a>

          {/* Nav Links (Zone 2) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#77736C]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#252522] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#A58A69] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action & Mobile Hamburger (Zone 3) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] active:bg-[#8C7355] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A69]"
            >
              Book an Appointment
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#252522] hover:text-[#A58A69] transition-colors focus-visible:outline-2 focus-visible:outline-[#A58A69] cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[65px] z-30 bg-[#F7F5F0] px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <div className="flex flex-col space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#77736C] pb-2 hairline-b">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif-editorial text-2xl text-[#252522] hover:text-[#A58A69] transition-colors flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                <span className="text-sm font-sans text-[#77736C]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-8 hairline-t space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
            <div className="text-xs text-[#77736C] text-center">
              25, Chandigarh Road, Balongi, Kharar
            </div>
          </div>
        </div>
      )}
    </>
  );
};
