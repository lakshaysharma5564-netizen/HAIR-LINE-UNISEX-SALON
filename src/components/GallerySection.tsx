import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/salonConfig';

export const GallerySection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeModalItem]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with Honest Disclosure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
              Visual Moodboard
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#252522] leading-tight">
              Texture, Tone & Cut.
            </h2>
          </div>

          <div className="max-w-md bg-[#F7F5F0]/80 p-4 border border-[#252522]/10 text-xs text-[#77736C] leading-relaxed">
            <span className="font-semibold text-[#252522] block mb-1">
              Editorial Reference Notice
            </span>
            These curated images represent illustrative editorial hair styling reference photography, demonstrating cutting aesthetics and color dimension. Not photographs of the local premises or staff.
          </div>
        </div>

        {/* Asymmetrical Magazine Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Precision Cut (Portrait) */}
          <div
            className="sm:col-span-1 lg:col-span-4 group cursor-pointer bg-[#F7F5F0] overflow-hidden shadow-xs relative"
            onClick={() => setActiveModalItem(galleryItems[1])}
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#20201E]/10">
              <img
                src={galleryItems[1].imageSrc}
                alt={galleryItems[1].description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58A69] block mb-1">
                {galleryItems[1].category}
              </span>
              <h3 className="font-serif-editorial text-xl text-[#252522] font-semibold mb-1">
                {galleryItems[1].title}
              </h3>
              <p className="text-xs text-[#77736C] line-clamp-2">
                {galleryItems[1].description}
              </p>
            </div>
          </div>

          {/* Card 2: Colour & Highlights (Portrait) */}
          <div
            className="sm:col-span-1 lg:col-span-4 group cursor-pointer bg-[#F7F5F0] overflow-hidden shadow-xs relative"
            onClick={() => setActiveModalItem(galleryItems[2])}
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#20201E]/10">
              <img
                src={galleryItems[2].imageSrc}
                alt={galleryItems[2].description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58A69] block mb-1">
                {galleryItems[2].category}
              </span>
              <h3 className="font-serif-editorial text-xl text-[#252522] font-semibold mb-1">
                {galleryItems[2].title}
              </h3>
              <p className="text-xs text-[#77736C] line-clamp-2">
                {galleryItems[2].description}
              </p>
            </div>
          </div>

          {/* Card 3: Men's Grooming (Portrait) */}
          <div
            className="sm:col-span-1 lg:col-span-4 group cursor-pointer bg-[#F7F5F0] overflow-hidden shadow-xs relative"
            onClick={() => setActiveModalItem(galleryItems[3])}
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#20201E]/10">
              <img
                src={galleryItems[3].imageSrc}
                alt={galleryItems[3].description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58A69] block mb-1">
                {galleryItems[3].category}
              </span>
              <h3 className="font-serif-editorial text-xl text-[#252522] font-semibold mb-1">
                {galleryItems[3].title}
              </h3>
              <p className="text-xs text-[#77736C] line-clamp-2">
                {galleryItems[3].description}
              </p>
            </div>
          </div>

          {/* Card 4: Hero Studio Craft (Wide Banner) */}
          <div
            className="sm:col-span-2 lg:col-span-7 group cursor-pointer bg-[#F7F5F0] overflow-hidden shadow-xs relative"
            onClick={() => setActiveModalItem(galleryItems[0])}
          >
            <div className="aspect-[16/9] overflow-hidden bg-[#20201E]/10">
              <img
                src={galleryItems[0].imageSrc}
                alt={galleryItems[0].description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58A69] block mb-1">
                {galleryItems[0].category}
              </span>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#252522] font-semibold mb-1">
                {galleryItems[0].title}
              </h3>
              <p className="text-xs text-[#77736C]">
                {galleryItems[0].description}
              </p>
            </div>
          </div>

          {/* Card 5: Artisan Tool Surface */}
          <div
            className="sm:col-span-2 lg:col-span-5 group cursor-pointer bg-[#F7F5F0] overflow-hidden shadow-xs relative"
            onClick={() => setActiveModalItem(galleryItems[4])}
          >
            <div className="aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-[#20201E]/10">
              <img
                src={galleryItems[4].imageSrc}
                alt={galleryItems[4].description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wider text-[#A58A69] block mb-1">
                {galleryItems[4].category}
              </span>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#252522] font-semibold mb-1">
                {galleryItems[4].title}
              </h3>
              <p className="text-xs text-[#77736C]">
                {galleryItems[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
          className="fixed inset-0 z-50 bg-[#20201E]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-[#F7F5F0] max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#20201E]">
              <img
                src={activeModalItem.imageSrc}
                alt={activeModalItem.description}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 p-2 bg-[#20201E]/70 text-white hover:bg-[#20201E] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs uppercase tracking-widest text-[#A58A69] block mb-1">
                {activeModalItem.category}
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#252522] font-semibold mb-2">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-[#77736C] leading-relaxed mb-4">
                {activeModalItem.description}
              </p>
              <div className="text-[11px] text-[#77736C] italic hairline-t pt-3">
                Illustrative editorial hair reference photography.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
