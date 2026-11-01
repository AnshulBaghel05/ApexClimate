/**
 * Central Business Details & Configuration
 * Use these verified values everywhere across the application.
 */

export const COMPANY = {
  name: "Apex Climate Solutions",
  legalName: "Apex Climate Solutions & Mechanical Inc.",
  shortName: "Apex HVAC",
  tagline: "Precision Indoor Comfort & Climate Control, 24/7",
  phone: "(800) 555-4822",
  localPhone: "(555) 234-5678",
  emergencyPhone: "(555) 234-9911",
  email: "service@apexclimatesolutions.com",
  whatsapp: "+15552345678",
  whatsappFormatted: "+1 (555) 234-5678",
  
  address: {
    street: "1420 Industrial Parkway, Suite 100",
    city: "Metro City",
    state: "CA",
    zip: "90210",
    full: "1420 Industrial Parkway, Suite 100, Metro City, CA 90210",
  },
  
  hours: {
    weekdays: "Monday – Friday: 7:00 AM – 8:00 PM",
    saturday: "Saturday: 8:00 AM – 6:00 PM",
    sunday: "Sunday: Emergency On-Call Dispatch",
    emergency: "24/7 / 365 Days Emergency Service Available",
  },

  stats: {
    yearsInBusiness: 18,
    foundedYear: 2008,
    jobsCompleted: 14800,
    averageRating: 4.9,
    reviewCount: 486,
    certifiedTechs: 24,
    avgEmergencyResponseMinutes: 45,
  },

  licenses: [
    {
      type: "State Contractor License",
      number: "C-20 HVAC Lic. #948201",
      issuer: "California State Contractors Board",
    },
    {
      type: "EPA Universal Section 608",
      number: "EPA-Universal-Cert-88412",
      issuer: "U.S. Environmental Protection Agency",
    },
    {
      type: "Technician Certifications",
      number: "NATE Certified Field Staff",
      issuer: "North American Technician Excellence",
    },
    {
      type: "Insurance & Bonding",
      number: "$2,000,000 General Liability & Workman's Comp",
      issuer: "Fully Bonded & Insured",
    },
  ],

  serviceAreas: [
    { id: "metro-city", name: "Metro City", zipCodes: ["90210", "90211", "90212"], avgEta: "30-45 min" },
    { id: "north-valley", name: "North Valley", zipCodes: ["91301", "91302", "91304"], avgEta: "35-50 min" },
    { id: "west-hills", name: "West Hills", zipCodes: ["91307", "91308"], avgEta: "40-55 min" },
    { id: "south-bay", name: "South Bay", zipCodes: ["90254", "90266", "90274"], avgEta: "45-60 min" },
    { id: "oakridge", name: "Oakridge", zipCodes: ["91350", "91354"], avgEta: "40-50 min" },
    { id: "riverdale", name: "Riverdale", zipCodes: ["90291", "90292"], avgEta: "35-45 min" },
  ],

  brandsSoldAndServiced: [
    { name: "Carrier", type: "Factory Authorized Dealer", tier: "Premium / Commercial" },
    { name: "Daikin", type: "Certified Comfort Pro", tier: "VRV & Inverter Leader" },
    { name: "Trane", type: "Authorized Comfort Specialist", tier: "Commercial & Residential" },
    { name: "Lennox", type: "Premier Dealer", tier: "High-Efficiency Residential" },
    { name: "Mitsubishi Electric", type: "Diamond Contractor", tier: "Ductless Mini-Splits" },
    { name: "Rheem", type: "Pro Partner", tier: "Furnaces & Heat Pumps" },
    { name: "Voltas", type: "Specialized Servicer", tier: "Packaged & Commercial" },
    { name: "Blue Star", type: "Specialized Servicer", tier: "Chillers & Commercial Units" },
  ],

  differentiators: [
    {
      title: "24/7 Rapid Emergency Dispatch",
      description: "Our fully-stocked rolling warehouses arrive within 45 minutes on average for urgent heating and cooling failures.",
    },
    {
      title: "100% Upfront Transparent Pricing",
      description: "No hidden trip charges, overtime surprises, or diagnostic fee bait-and-switch. You approve the exact quote before any work starts.",
    },
    {
      title: "NATE & EPA Universal Certified",
      description: "Every field mechanic undergoes strict continuous technical training, background checks, and environmental refrigerant certifications.",
    },
    {
      title: "10-Year Parts & Labor Warranties",
      description: "We stand behind new installations with industry-leading manufacturer warranties and our exclusive Apex Workmanship Guarantee.",
    },
    {
      title: "Residential & Commercial Dual Mastery",
      description: "From cozy ductless mini-splits to 50-ton multi-zone rooftop VRF and industrial chillers, our dedicated teams cover both domains.",
    },
    {
      title: "Flexible 0% APR Financing",
      description: "Affordable monthly payment plans and instant assistance claiming up to $2,000 in Federal IRA 25C Energy Tax Credits.",
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: "Book or Call 24/7",
      description: "Schedule online in 60 seconds or speak directly with our local dispatch coordinator for same-day priority service.",
    },
    {
      step: 2,
      title: "Comprehensive 28-Point Diagnostic",
      description: "Our certified technician conducts an exhaustive electrical, refrigerant, airflow, and safety analysis of your HVAC system.",
    },
    {
      step: 3,
      title: "Clear Flat-Rate Quote & Options",
      description: "We present honest repair vs. replacement options with fixed pricing. Zero pressure, complete transparency.",
    },
    {
      step: 4,
      title: "Precision Execution & Guarantee",
      description: "Work completed swiftly using OEM parts. We clean up spotless, test performance metrics, and activate your warranty.",
    },
  ],
};
