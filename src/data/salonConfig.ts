/**
 * HAIR LINE UNISEX SALON - Salon Configuration & Content
 * Concept: "THE HAIR EDIT — A CONTEMPORARY HAIR STUDIO"
 */

export interface SalonContactConfig {
  phone: string;
  whatsapp: string;
  openingHours: string | null;
}

/**
 * Configurable contact settings object as specified in prompt:
 * Never invent telephone or WhatsApp numbers.
 * Left empty until verified by salon owners.
 */
export const salonContact: SalonContactConfig = {
  phone: "",
  whatsapp: "",
  openingHours: null
};

export const salonLocation = {
  businessName: "HAIR LINE UNISEX SALON",
  conceptTitle: "THE HAIR EDIT",
  conceptSubtitle: "A CONTEMPORARY HAIR STUDIO",
  street: "25, Chandigarh Road, Village Balongi, Phase I, Industrial Area",
  locality: "Balongi, Kharar",
  district: "Sahibzada Ajit Singh Nagar",
  state: "Punjab",
  postalCode: "160055",
  country: "India",
  fullAddress: "25, Chandigarh Road, Village Balongi, Phase I, Industrial Area, Balongi, Kharar, Sahibzada Ajit Singh Nagar, Punjab 160055, India",
  googleMapsShareUrl: "https://maps.app.goo.gl/yNZZ1CenVPSbiRsQ6",
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=HAIR%20LINE%20UNISEX%20SALON%2C%2025%20Chandigarh%20Road%2C%20Balongi%2C%20Kharar%2C%20Punjab%20160055"
};

export interface ServiceCategory {
  id: string;
  name: string;
  editorialTag: string;
  shortDescription: string;
  detailedScope: string[];
  audience: "Unisex" | "Men" | "Women";
}

/**
 * Service categories - explicitly marked as proposed website content pending salon confirmation.
 * No fabricated packages or prices.
 */
export const proposedServices: ServiceCategory[] = [
  {
    id: "haircuts-styling",
    name: "Haircuts & Styling",
    editorialTag: "01. Precision & Texture",
    shortDescription: "Scissor work, razor shaping, and texturizing tailored to your hair density and personal aesthetic.",
    detailedScope: [
      "Face-framing layers and customized silhouette balancing",
      "Dry and wet precision scissor cutting",
      "Weight removal and movement texturizing",
      "Blowout finish and daily styling guidance"
    ],
    audience: "Unisex"
  },
  {
    id: "hair-colour",
    name: "Hair Colour",
    editorialTag: "02. Dimension & Tone",
    shortDescription: "Natural blending, dimensional glossing, and tone refinement formulated to harmonize with your complexion.",
    detailedScope: [
      "Grey blending and dimensional root retouching",
      "Balayage, foil highlights, and soft multi-tonal contouring",
      "Post-lightening gloss and tone correction",
      "Low-ammonia formulas focused on hair integrity"
    ],
    audience: "Unisex"
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    editorialTag: "03. Restoration & Health",
    shortDescription: "Targeted conditioning, deep hydration, and structural repair for stressed or weather-exposed hair.",
    detailedScope: [
      "Keratin smoothing and anti-humidity frizz control",
      "Intensive bond restoration for chemically treated fibers",
      "Scalp detoxification and moisture rebalancing",
      "Protective thermal sealing therapies"
    ],
    audience: "Unisex"
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    editorialTag: "04. Rejuvenation & Care",
    shortDescription: "Immersive scalp rejuvenation treatments combining warm botanical nourishment and relaxing therapy.",
    detailedScope: [
      "Warm essential oil scalp therapy and circulation massage",
      "Micro-mist deep conditioning infusion",
      "Follicle clarifying and root revitalization",
      "Soothing rinse with cold-water cuticle closure"
    ],
    audience: "Unisex"
  },
  {
    id: "mens-grooming",
    name: "Men's Grooming",
    editorialTag: "05. Modern Discipline",
    shortDescription: "Clean clipper fades, classic scissor tapers, beard sculpting, and neck detailing with crisp line work.",
    detailedScope: [
      "Skin fades, low/mid fades, and scissor over comb tapering",
      "Beard shaping, line cleanups, and hot towel finish",
      "Textured crop styling and matte pomade finishes",
      "Eyebrow and neckline grooming detail"
    ],
    audience: "Men"
  },
  {
    id: "womens-hair-styling",
    name: "Women's Hair Styling",
    editorialTag: "06. Form & Silhouette",
    shortDescription: "Effortless soft waves, polished blowout finishes, and bespoke styling for day-to-day or special occasions.",
    detailedScope: [
      "Bouncy volume blowouts with round-brush tension",
      "Modern undone textured waves and flat-iron beach curls",
      "Contemporary half-up and minimalist pin work",
      "Heat-protective styling with light touchable hold"
    ],
    audience: "Women"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  aspect: "landscape" | "portrait" | "standard";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "hero-craft",
    title: "Precision Scissor Craft",
    category: "Haircut & Styling",
    description: "Natural daylight studio capture of detailed scissor texturizing and unisex hair layering in motion.",
    imageSrc: "/src/assets/images/hero_hair_styling_1794124852173.jpg",
    aspect: "landscape"
  },
  {
    id: "precision-bob",
    title: "Contemporary Textured Bob",
    category: "Editorial Cut",
    description: "Close crop showcasing blunt base lines with internal feathering and subtle sun-lit highlights.",
    imageSrc: "/src/assets/images/gallery_precision_cut_1794124853610.jpg",
    aspect: "portrait"
  },
  {
    id: "dimensional-colour",
    title: "Multi-Tonal Gloss & Waves",
    category: "Hair Colour",
    description: "Warm espresso and caramel tones caught under soft diffused light, emphasizing natural luster.",
    imageSrc: "/src/assets/images/gallery_hair_colour_1794124854293.jpg",
    aspect: "portrait"
  },
  {
    id: "mens-crop",
    title: "Textured Crop & Grooming",
    category: "Men's Grooming",
    description: "Clean modern profile highlighting textured top layers and refined beard line work.",
    imageSrc: "/src/assets/images/gallery_mens_grooming_1794124854649.jpg",
    aspect: "portrait"
  },
  {
    id: "workspace-detail",
    title: "The Artisan Workspace",
    category: "Studio Atmosphere",
    description: "Honest tools of the trade: precision shears and carved combs set upon a natural travertine stone surface.",
    imageSrc: "/src/assets/images/salon_studio_detail_1794124854571.jpg",
    aspect: "standard"
  }
];

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface BookingValidationErrors {
  fullName?: string;
  phone?: string;
  serviceId?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export function validateBookingForm(data: BookingFormData): {
  isValid: boolean;
  errors: BookingValidationErrors;
} {
  const errors: BookingValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your name (at least 2 characters).";
  }

  const cleanedPhone = data.phone.replace(/[\s\-\(\)\+]/g, "");
  if (!cleanedPhone || cleanedPhone.length < 8) {
    errors.phone = "Please enter a valid contact phone number (at least 8 digits).";
  }

  if (!data.serviceId) {
    errors.serviceId = "Please select a desired service.";
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Please choose a preferred appointment date.";
  }

  if (!data.preferredTime) {
    errors.preferredTime = "Please choose a preferred time slot.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Builds a WhatsApp URL when a verified WhatsApp number is present.
 * If none is configured, returns null to avoid dead or deceptive messaging.
 */
export function generateWhatsAppBookingUrl(
  data: BookingFormData,
  contact: SalonContactConfig,
  serviceName?: string
): string | null {
  const cleanedContactPhone = contact.whatsapp.replace(/[\s\-\(\)\+]/g, "");
  if (!cleanedContactPhone) {
    return null;
  }

  const text = [
    `Hello Hair Line Unisex Salon,`,
    ``,
    `I would like to enquire about an appointment:`,
    `• Name: ${data.fullName.trim()}`,
    `• Service: ${serviceName || data.serviceId}`,
    `• Preferred Date: ${data.preferredDate}`,
    `• Preferred Time: ${data.preferredTime}`,
    `• Contact Number: ${data.phone.trim()}`,
    data.notes?.trim() ? `• Notes: ${data.notes.trim()}` : null,
    ``,
    `Sent via The Hair Edit online enquiry.`
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${cleanedContactPhone}?text=${encodeURIComponent(text)}`;
}
