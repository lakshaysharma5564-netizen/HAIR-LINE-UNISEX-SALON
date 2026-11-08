import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const priorities = [
    {
      index: "01",
      title: "Personal Style Preferences",
      description: "Hair styling is personal. We focus on listening to your daily styling habits, hair texture, and how much effort you like to invest at home before recommending a cut or shape."
    },
    {
      index: "02",
      title: "Clear Service Communication",
      description: "We discuss length, shape, and maintenance openly before shears touch your hair. Clear dialogue helps ensure you receive a look that suits your day-to-day lifestyle."
    },
    {
      index: "03",
      title: "Convenient Local Access",
      description: "Positioned directly along Chandigarh Road in Village Balongi, our location is straightforward to reach from Kharar, Balongi Industrial Area, and nearby Mohali sectors."
    },
    {
      index: "04",
      title: "Individual Grooming Needs",
      description: "From routine hair maintenance and beard cleanups to restorative hair treatments, our unisex studio offers attentive individual care in an unpretentious, comfortable space."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
            Our Approach
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#252522] leading-tight mb-4">
            A Thoughtful Grooming Experience.
          </h2>
          <p className="text-sm sm:text-base text-[#77736C] leading-relaxed">
            What matters most when choosing your local salon: comfortable communication, honest attention, and dependable craft.
          </p>
        </div>

        {/* 4 Restrained Priority Blocks (No repetitive cards / no fake badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 hairline-t pt-10">
          {priorities.map((item) => (
            <div key={item.index} className="flex items-start gap-6 group">
              <span className="font-mono text-sm font-medium text-[#A58A69] pt-1 tabular-nums">
                {item.index}.
              </span>
              <div className="space-y-2">
                <h3 className="font-serif-editorial text-2xl text-[#252522] font-semibold group-hover:text-[#A58A69] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#77736C] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Reassurance Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#EAE6DF] border-l-2 border-[#A58A69] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="font-serif-editorial text-lg text-[#252522] font-semibold block">
              Transparent & Grounded
            </span>
            <p className="text-xs text-[#77736C] leading-relaxed">
              We focus on practical hair and beard grooming designed around real people. No inflated promises, just careful work.
            </p>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] transition-colors shrink-0 whitespace-nowrap"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
