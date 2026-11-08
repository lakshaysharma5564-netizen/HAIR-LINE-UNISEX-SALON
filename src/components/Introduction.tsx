import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#EAE6DF] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Studio Detail Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden bg-[#F7F5F0] shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/salon_studio_detail_1794124854571.jpg"
                  alt="Precision hairdressing shears and wooden styling combs on a natural travertine tray"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 bg-[#F7F5F0] text-xs text-[#77736C]">
                <p className="leading-relaxed">
                  Careful preparation, clean tools, and attentive technique form the core of every haircut and grooming session.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
              About The Studio
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#252522] leading-tight mb-6 text-balance">
              Style Begins With The Right Details.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#252522]/85 leading-relaxed font-light">
              <p>
                Hair Line Unisex Salon is a dedicated hair and grooming destination situated along Chandigarh Road in Village Balongi, Kharar. Conceived to provide a calm and welcoming environment, our studio serves both men and women seeking thoughtful hair styling and everyday grooming.
              </p>
              <p>
                We believe that good hair does not require exaggerated claims or rigid formulas. Instead, it comes from honest consultation, an understanding of individual hair texture and face shapes, and precise scissor and styling work that feels natural in everyday life.
              </p>
              <p>
                Whether you need a clean routine haircut, a refreshed silhouette, beard detailing, or a conditioning treatment, our space is organized to deliver attentive care in a relaxed neighbourhood setting.
              </p>
            </div>

            {/* Editorial highlights */}
            <div className="mt-8 pt-8 hairline-b border-t border-[#252522]/15 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <span className="font-serif-editorial text-lg text-[#252522] font-semibold block">
                  A Welcoming Unisex Space
                </span>
                <p className="text-xs text-[#77736C] leading-normal">
                  Thoughtfully arranged for men, women, and varied styling preferences under one roof.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif-editorial text-lg text-[#252522] font-semibold block">
                  Focused Consultation
                </span>
                <p className="text-xs text-[#77736C] leading-normal">
                  Open conversation before any cut or styling begins to align with your personal routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
