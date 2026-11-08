import React from 'react';

interface HeroProps {
  onExploreServices: () => void;
  onFindSalon: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onFindSalon }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Subtle Editorial Kicker */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#77736C] mb-6">
          <span className="font-medium text-[#252522]">The Hair Edit</span>
          <span aria-hidden="true">·</span>
          <span>Contemporary Hair Studio</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Balongi, Kharar</span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal text-[#252522] tracking-tight text-balance mb-6">
              Good Hair.
              <br />
              <span className="italic font-normal text-[#A58A69]">A Better You.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#77736C] leading-relaxed max-w-xl mb-8">
              Your style, your personality, your hair. Discover a grooming experience designed around you.
            </p>

            {/* Editorial Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] active:bg-[#8C7355] transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A69] whitespace-nowrap shrink-0"
              >
                Explore Services
              </button>

              <button
                type="button"
                onClick={onFindSalon}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#252522] bg-transparent border border-[#252522]/30 hover:border-[#252522] hover:bg-[#EAE6DF] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#252522] whitespace-nowrap shrink-0"
              >
                Find Our Salon
              </button>
            </div>

            {/* Quiet Context Details */}
            <div className="pt-6 hairline-t grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="block text-[#77736C] uppercase tracking-wider text-[11px] mb-1">
                  Format
                </span>
                <span className="font-medium text-[#252522]">Unisex Hair Studio</span>
              </div>
              <div>
                <span className="block text-[#77736C] uppercase tracking-wider text-[11px] mb-1">
                  Location
                </span>
                <span className="font-medium text-[#252522]">Chandigarh Road, Balongi</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[#77736C] uppercase tracking-wider text-[11px] mb-1">
                  Walk-ins
                </span>
                <span className="font-medium text-[#252522]">Local Visits Welcome</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Magazine Crop */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden bg-[#EAE6DF] shadow-xs">
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_hair_styling_1794124852173.jpg"
                  alt="Professional hair stylist working with natural lighting in a contemporary salon setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Editorial Frame Caption */}
              <div className="p-4 bg-[#EAE6DF] flex items-center justify-between text-xs text-[#77736C]">
                <span className="font-serif-editorial italic text-sm text-[#252522]">
                  The Craft of Modern Styling
                </span>
                <span className="text-[11px] tracking-widest uppercase">
                  HAIR LINE · BALONGI
                </span>
              </div>
            </div>

            {/* Subtle decorative offset border block */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 w-full h-full border border-[#A58A69]/30 -z-10 pointer-events-none hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
