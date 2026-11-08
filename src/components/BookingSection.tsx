import React, { useState } from 'react';
import {
  salonContact as initialSalonContact,
  salonLocation,
  proposedServices,
  BookingFormData,
  validateBookingForm,
  generateWhatsAppBookingUrl,
  SalonContactConfig
} from '../data/salonConfig';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedServiceId = 'haircuts-styling'
}) => {
  // Contact config state - defaults to the unverified empty strings as required
  const [contactConfig, setContactConfig] = useState<SalonContactConfig>(initialSalonContact);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [configPhoneInput, setConfigPhoneInput] = useState('');

  // Booking Form State
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: preselectedServiceId || 'haircuts-styling',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  // Keep preselected service updated if prop changes
  React.useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSummary, setSubmittedSummary] = useState<{
    data: BookingFormData;
    serviceName: string;
    whatsAppUrl: string | null;
  } | null>(null);

  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    const selectedServiceObj = proposedServices.find((s) => s.id === formData.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.name : formData.serviceId;

    const waUrl = generateWhatsAppBookingUrl(formData, contactConfig, serviceName);

    setSubmittedSummary({
      data: { ...formData },
      serviceName,
      whatsAppUrl: waUrl
    });

    // If a verified WhatsApp number is configured, proceed to open it
    if (waUrl) {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopySummary = () => {
    if (!submittedSummary) return;
    const text = [
      `Appointment Enquiry for Hair Line Unisex Salon:`,
      `Client: ${submittedSummary.data.fullName}`,
      `Contact: ${submittedSummary.data.phone}`,
      `Service: ${submittedSummary.serviceName}`,
      `Date: ${submittedSummary.data.preferredDate}`,
      `Time: ${submittedSummary.data.preferredTime}`,
      submittedSummary.data.notes ? `Notes: ${submittedSummary.data.notes}` : null,
      `Location: 25, Chandigarh Road, Balongi, Kharar`
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleSaveContactConfig = (e: React.FormEvent) => {
    e.preventDefault();
    setContactConfig({
      ...contactConfig,
      whatsapp: configPhoneInput.trim(),
      phone: configPhoneInput.trim()
    });
    setShowConfigDrawer(false);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#F7F5F0] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Honest Contact Route Statement */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[#A58A69] font-medium mb-3">
              Consultation & Visit
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#252522] leading-tight mb-6">
              Let's Find Your Next Look.
            </h2>

            <p className="text-sm sm:text-base text-[#77736C] leading-relaxed mb-8">
              Prepare your appointment request online. Choose your preferred service and convenient time slot to streamline your visit.
            </p>

            {/* Honest Verified Route Callout */}
            <div className="p-6 bg-[#EAE6DF] border border-[#252522]/10 mb-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A58A69]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#252522]">
                  Direct Salon Contact Status
                </span>
              </div>

              {contactConfig.whatsapp ? (
                <p className="text-xs text-[#252522] leading-relaxed">
                  Verified WhatsApp channel active (<span className="font-mono">{contactConfig.whatsapp}</span>). Submitting the form will launch your WhatsApp enquiry directly.
                </p>
              ) : (
                <div className="text-xs text-[#77736C] leading-relaxed space-y-2">
                  <p>
                    <strong className="text-[#252522] font-medium">Direct In-Person Route:</strong> The salon's dedicated WhatsApp booking line is awaiting formal verification by the business owner.
                  </p>
                  <p>
                    We do not simulate automated booking confirmations. The confirmed way to visit is directly at our verified location on Chandigarh Road.
                  </p>
                </div>
              )}

              <div className="pt-3 hairline-t">
                <a
                  href={salonLocation.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#252522] hover:text-[#A58A69] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>View Verified Route on Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Optional Salon Owner Settings Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowConfigDrawer(!showConfigDrawer)}
                className="text-[11px] text-[#77736C] hover:text-[#252522] underline cursor-pointer"
              >
                {showConfigDrawer ? 'Hide Salon Owner Settings' : 'Salon Owner / Staff: Configure WhatsApp Number'}
              </button>

              {showConfigDrawer && (
                <form
                  onSubmit={handleSaveContactConfig}
                  className="mt-3 p-4 bg-white border border-[#252522]/15 shadow-xs space-y-3 text-xs"
                >
                  <label htmlFor="owner-wa" className="block text-[#252522] font-medium">
                    Set Verified WhatsApp Phone Number (with Country Code):
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="owner-wa"
                      type="text"
                      placeholder="e.g. +91 98765 43210"
                      value={configPhoneInput}
                      onChange={(e) => setConfigPhoneInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-[#252522]/30 text-xs focus:outline-none focus:border-[#A58A69]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#252522] text-white text-xs hover:bg-[#A58A69] transition-colors cursor-pointer"
                    >
                      Update
                    </button>
                  </div>
                  <p className="text-[10px] text-[#77736C]">
                    Leave blank to keep unverified status as required by default.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Enquiry Form or Result Summary */}
          <div className="lg:col-span-7">
            {submittedSummary ? (
              /* Honest Summary Display When Submitted */
              <div className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#252522]/15 shadow-xs relative">
                <div className="text-xs uppercase tracking-widest text-[#A58A69] font-medium mb-2">
                  Enquiry Summary Prepared
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#252522] font-semibold mb-4">
                  Ready for Your Visit
                </h3>

                {submittedSummary.whatsAppUrl ? (
                  <div className="p-4 bg-[#EAE6DF]/60 border border-[#A58A69]/40 mb-6 text-xs text-[#252522]">
                    <p className="font-medium mb-1">WhatsApp Message Generated:</p>
                    <p className="text-[#77736C] mb-3">
                      A WhatsApp window has been launched with your enquiry details prefilled for direct transmission to the salon.
                    </p>
                    <a
                      href={submittedSummary.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#252522] text-white hover:bg-[#A58A69] transition-colors"
                    >
                      <span>Re-open WhatsApp Chat</span>
                      <span>↗</span>
                    </a>
                  </div>
                ) : (
                  <div className="p-4 bg-[#EAE6DF] border border-[#252522]/20 mb-6 text-xs text-[#252522] space-y-2">
                    <p className="font-semibold text-sm text-[#252522]">
                      Direct Visit Recommendation
                    </p>
                    <p className="text-[#77736C]">
                      Because no verified phone or WhatsApp line has been registered for online reservations, this form has not submitted private data to an unverified third party.
                    </p>
                    <p className="text-[#77736C]">
                      Please visit the salon directly at <strong>25, Chandigarh Road, Balongi, Kharar</strong> or present these details upon arrival.
                    </p>
                  </div>
                )}

                {/* Structured Overview */}
                <div className="divide-y divide-[#252522]/10 hairline-b mb-6 text-xs sm:text-sm">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-[#77736C]">Client Name:</span>
                    <span className="font-medium text-[#252522]">{submittedSummary.data.fullName}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-[#77736C]">Requested Service:</span>
                    <span className="font-medium text-[#252522]">{submittedSummary.serviceName}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-[#77736C]">Preferred Date:</span>
                    <span className="font-medium text-[#252522]">{submittedSummary.data.preferredDate}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-[#77736C]">Preferred Time:</span>
                    <span className="font-medium text-[#252522]">{submittedSummary.data.preferredTime}</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-[#77736C]">Client Contact:</span>
                    <span className="font-medium text-[#252522]">{submittedSummary.data.phone}</span>
                  </div>
                  {submittedSummary.data.notes && (
                    <div className="py-2.5 flex justify-between">
                      <span className="text-[#77736C]">Special Notes:</span>
                      <span className="font-medium text-[#252522] max-w-xs text-right">
                        {submittedSummary.data.notes}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex-1 py-3 px-4 text-center text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] transition-colors cursor-pointer"
                  >
                    {copiedNotification ? '✓ Details Copied to Clipboard' : 'Copy Summary to Clipboard'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmittedSummary(null)}
                    className="py-3 px-5 text-center text-xs uppercase tracking-wider font-semibold text-[#252522] bg-[#EAE6DF] hover:bg-[#252522] hover:text-white transition-colors cursor-pointer"
                  >
                    New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Accessible Appointment Enquiry Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FFFFFF] p-8 sm:p-10 border border-[#252522]/15 shadow-xs space-y-6"
              >
                <div className="border-b border-[#252522]/10 pb-4">
                  <h3 className="font-serif-editorial text-2xl text-[#252522] font-semibold">
                    Appointment Details
                  </h3>
                  <p className="text-xs text-[#77736C] mt-1">
                    Fill in your details to outline your hair service preferences.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Jaspreet Singh"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-[#252522]/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Contact Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                    Contact Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors ${
                      errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-[#252522]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Desired Service */}
                <div>
                  <label htmlFor="serviceId" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                    Desired Service Category <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    required
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors ${
                      errors.serviceId ? 'border-rose-500 bg-rose-50/20' : 'border-[#252522]/20'
                    }`}
                  >
                    {proposedServices.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} ({service.audience})
                      </option>
                    ))}
                  </select>
                  {errors.serviceId && (
                    <p className="text-xs text-rose-600 mt-1 font-medium">{errors.serviceId}</p>
                  )}
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                      Preferred Date <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors ${
                        errors.preferredDate ? 'border-rose-500 bg-rose-50/20' : 'border-[#252522]/20'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                      Preferred Time <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-[#F7F5F0] border text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors ${
                        errors.preferredTime ? 'border-rose-500 bg-rose-50/20' : 'border-[#252522]/20'
                      }`}
                    >
                      <option value="">Select a time window</option>
                      <option value="10:00 - 12:00 (Morning)">10:00 - 12:00 (Morning)</option>
                      <option value="12:00 - 14:00 (Early Afternoon)">12:00 - 14:00 (Early Afternoon)</option>
                      <option value="14:00 - 16:00 (Afternoon)">14:00 - 16:00 (Afternoon)</option>
                      <option value="16:00 - 18:00 (Late Afternoon)">16:00 - 18:00 (Late Afternoon)</option>
                      <option value="18:00 - 20:00 (Evening)">18:00 - 20:00 (Evening)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="text-xs text-rose-600 mt-1 font-medium">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider font-semibold text-[#252522] mb-1.5">
                    Styling Notes / Hair Type (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Tell us about your current hair length, texture, or any specific cut you are looking for..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#252522]/20 text-sm text-[#252522] focus:outline-none focus:border-[#A58A69] transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-center text-xs uppercase tracking-wider font-semibold text-white bg-[#252522] hover:bg-[#A58A69] active:bg-[#8C7355] transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A69]"
                >
                  Generate Appointment Enquiry
                </button>

                <p className="text-[11px] text-[#77736C] text-center leading-normal">
                  Your request is stored locally for this session. Direct confirmation happens upon salon arrival.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
