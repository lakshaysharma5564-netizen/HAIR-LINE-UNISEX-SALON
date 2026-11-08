import React from 'react';
import { salonLocation } from '../data/salonConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#20201E] text-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
                Salon Location
              </div>

              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
                Visit Hair Line.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
                Located on the Chandigarh Road corridor in Village Balongi, Kharar. Our salon is conveniently accessible for clients from Kharar, Mohali Phase I, and surrounding communities.
              </p>

              {/* Verified Address Block */}
              <div className="bg-[#2A2A28] p-6 border border-neutral-700/60 mb-8 space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#A58A69] block font-medium">
                  Verified Physical Address
                </span>
                <address className="not-italic text-sm text-neutral-200 leading-relaxed space-y-1">
                  <div className="font-medium text-white">HAIR LINE UNISEX SALON</div>
                  <div>25, Chandigarh Road, Village Balongi, Phase I</div>
                  <div>Industrial Area, Balongi</div>
                  <div>Kharar, Sahibzada Ajit Singh Nagar</div>
                  <div>Punjab 160055, India</div>
                </address>

                {/* Opening Hours Policy */}
                <div className="pt-4 hairline-dark-t text-xs text-neutral-400">
                  <span className="font-medium text-neutral-300 block mb-0.5">
                    Operating Schedule
                  </span>
                  Hours pending direct salon verification. Walk-ins and local consultations welcome.
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={salonLocation.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#20201E] bg-[#F7F5F0] hover:bg-[#A58A69] hover:text-white transition-colors cursor-pointer text-center shrink-0 whitespace-nowrap"
              >
                <span>Get Directions</span>
                <span className="ml-2">↗</span>
              </a>

              <a
                href={salonLocation.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-neutral-300 border border-neutral-700 hover:border-white hover:text-white transition-colors cursor-pointer text-center shrink-0 whitespace-nowrap"
              >
                Open Google Maps App
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="bg-[#2A2A28] p-2 border border-neutral-700/60 shadow-lg">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <iframe
                  title="Hair Line Unisex Salon Google Maps Location"
                  src="https://maps.google.com/maps?q=HAIR%20LINE%20UNISEX%20SALON%2C%2025%20Chandigarh%20Road%2C%20Balongi%2C%20Kharar%2C%20Punjab%20160055&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-95"
                />
              </div>
              <div className="p-3 text-[11px] text-neutral-400 flex items-center justify-between">
                <span>Google Maps Search: 25, Chandigarh Road, Balongi</span>
                <span className="text-[#A58A69]">PIN: 160055</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
