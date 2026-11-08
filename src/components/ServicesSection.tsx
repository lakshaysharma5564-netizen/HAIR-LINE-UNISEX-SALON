import React, { useState } from 'react';
import { proposedServices, ServiceCategory } from '../data/salonConfig';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(proposedServices[0].id);

  const selectedService =
    proposedServices.find((s) => s.id === selectedServiceId) || proposedServices[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with Honest Editorial Disclosure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
              Craft & Capabilities
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#252522] leading-tight">
              Hair Design, Texture & Care.
            </h2>
          </div>

          {/* Transparent Notice - Required by Prompt */}
          <div className="max-w-md bg-[#EAE6DF]/70 p-4 border border-[#252522]/10 text-xs text-[#77736C] leading-relaxed">
            <span className="font-semibold text-[#252522] block mb-1">
              Proposed Concept Services
            </span>
            These categories represent proposed website content pending direct salon confirmation. Not independently verified offerings or fixed price packages.
          </div>
        </div>

        {/* Editorial Horizontal / Split Presentation (Avoiding repetitive 3-column cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Services Selector (Editorial List) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#252522]/10 hairline-t hairline-b">
            {proposedServices.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full py-5 px-3 text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#EAE6DF] pl-5'
                      : 'hover:bg-[#EAE6DF]/40 hover:pl-4'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-[#A58A69] tabular-nums shrink-0">
                      0{index + 1}.
                    </span>
                    <div>
                      <h3
                        className={`font-serif-editorial text-xl sm:text-2xl transition-colors ${
                          isSelected
                            ? 'text-[#252522] font-semibold'
                            : 'text-[#252522]/80 group-hover:text-[#252522]'
                        }`}
                      >
                        {service.name}
                      </h3>
                      <span className="text-xs text-[#77736C] mt-0.5 block">
                        {service.audience} Focus
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-sm transition-transform duration-200 shrink-0 ${
                      isSelected ? 'text-[#252522] translate-x-1' : 'text-[#77736C]'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Editorial Focus Card */}
          <div className="lg:col-span-7 bg-[#20201E] text-white p-7 sm:p-10 lg:p-12 shadow-sm relative">
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#A58A69] mb-4 pb-4 hairline-dark-b">
              <span>{selectedService.editorialTag}</span>
              <span>Proposed Direction</span>
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4">
              {selectedService.name}
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8 max-w-xl">
              {selectedService.shortDescription}
            </p>

            {/* Scope Breakdown */}
            <div className="mb-10">
              <span className="text-xs uppercase tracking-wider text-[#A58A69] block mb-4 font-medium">
                Artisan Technique & Focus Areas
              </span>
              <ul className="space-y-3">
                {selectedService.detailedScope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <span className="text-[#A58A69] font-mono text-xs mt-0.5 shrink-0">·</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Row */}
            <div className="pt-6 hairline-dark-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                <span className="block font-medium text-neutral-200">
                  Pricing & Timing
                </span>
                Customized by consultation at the studio
              </div>

              <button
                type="button"
                onClick={() => onSelectServiceForBooking(selectedService.id)}
                className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#20201E] bg-[#F7F5F0] hover:bg-[#A58A69] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Enquire for This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
