export interface MaintenanceTier {
  id: string;
  name: string;
  target: "residential" | "commercial";
  monthlyPrice: string;
  annualPrice: string;
  billedNote: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  visitsPerYear: number;
  discountOnRepairs: string;
  priorityDispatch: string;
  overtimeCharges: string;
  features: string[];
}

export const RESIDENTIAL_PLANS: MaintenanceTier[] = [
  {
    id: "bronze-comfort",
    name: "Bronze Comfort",
    target: "residential",
    monthlyPrice: "$14.99",
    annualPrice: "$169",
    billedNote: "billed annually or $14.99/mo",
    tagline: "Essential seasonal safety and tune-up protection for newer systems.",
    visitsPerYear: 1,
    discountOnRepairs: "10% Off",
    priorityDispatch: "Standard Priority Scheduling",
    overtimeCharges: "Standard Overtime Rates Apply",
    features: [
      "1 Comprehensive 28-point Annual Precision Tune-Up (AC or Heating)",
      "10% discount on all parts and labor repairs",
      "Standard air filter replacement (1\" standard pleated included)",
      "Refrigerant pressure and safety control check",
      "Condensate drain line visual inspection and flush",
      "Preserves active manufacturer equipment warranties",
    ],
  },
  {
    id: "silver-essential",
    name: "Silver Essential",
    target: "residential",
    monthlyPrice: "$24.99",
    annualPrice: "$279",
    billedNote: "billed annually or $24.99/mo",
    badge: "Most Popular",
    popular: true,
    tagline: "Complete biannual heating & cooling coverage with zero overtime fees.",
    visitsPerYear: 2,
    discountOnRepairs: "15% Off",
    priorityDispatch: "VIP Next-Day Guaranteed Priority Dispatch",
    overtimeCharges: "Zero Overtime or After-Hours Fees (Ever)",
    features: [
      "2 Seasonal Tune-Ups: Spring Cooling Check + Fall Heating Safety Audit",
      "15% discount on all parts and labor repairs",
      "$50 Annual Loyalty Replacement Credit (accumulates up to $500)",
      "Zero overtime, weekend, or holiday dispatch surcharges",
      "Chemical outdoor coil wash & high-pressure drain line blowout",
      "Digital combustion analysis and carbon monoxide test",
      "Dedicated member concierge support line",
    ],
  },
  {
    id: "gold-total-care",
    name: "Gold Total Care",
    target: "residential",
    monthlyPrice: "$39.99",
    annualPrice: "$449",
    billedNote: "billed annually or $39.99/mo",
    tagline: "White-glove ultimate protection with free diagnostic fees and maximum discounts.",
    visitsPerYear: 2,
    discountOnRepairs: "20% Off",
    priorityDispatch: "Same-Day Guaranteed Front-of-Line Dispatch",
    overtimeCharges: "Zero Overtime + $0 Diagnostic Fees",
    features: [
      "2 In-Depth Master Tune-Ups + 1 Mid-Season Filter Check",
      "20% discount on all parts and labor repairs",
      "$0 Diagnostic Fees 365 Days a Year (regular $79 waived anytime)",
      "Same-day emergency response window guaranteed during heatwaves",
      "$100 Annual Loyalty Replacement Credit (accumulates up to $1,000)",
      "Annual duct microbial camera scan & static pressure test",
      "Free smart thermostat remote diagnostic monitoring connection",
      "Transferable to new homeowners if you sell your residence",
    ],
  },
];

export const COMMERCIAL_PLANS: MaintenanceTier[] = [
  {
    id: "commercial-quarterly",
    name: "Quarterly Prevent",
    target: "commercial",
    monthlyPrice: "$189",
    annualPrice: "$2,150",
    billedNote: "per package RTU / starting baseline",
    tagline: "Reliable quarterly filter, belt, and coil service for retail and offices.",
    visitsPerYear: 4,
    discountOnRepairs: "15% Off Commercial Labor",
    priorityDispatch: "4-Hour Commercial SLA Guarantee",
    overtimeCharges: "Discounted After-Hours Rates",
    features: [
      "4 Scheduled Quarterly Comprehensive Rooftop/Split Inspections",
      "Quarterly pleated MERV 8/11 air filter change-out",
      "Drive belt inspection, tension adjustment, and replacement",
      "Economizer cycle test and outdoor air damper seal check",
      "Electrical contractor terminal torque and amp-draw logging",
      "Consolidated digital equipment log for property manager records",
    ],
  },
  {
    id: "commercial-bimonthly",
    name: "Bi-Monthly Compliance",
    target: "commercial",
    monthlyPrice: "$349",
    annualPrice: "$3,980",
    billedNote: "per package RTU / high-demand facilities",
    badge: "Recommended for Restaurants & Medical",
    popular: true,
    tagline: "Frequent preventative maintenance for high-load kitchens, clinics, and tech spaces.",
    visitsPerYear: 6,
    discountOnRepairs: "20% Off Commercial Labor & Parts",
    priorityDispatch: "2-Hour Commercial Emergency SLA",
    overtimeCharges: "Zero Overtime Dispatch Surcharge",
    features: [
      "6 Bi-Monthly Preventative Service Visits per Year",
      "Bimonthly high-efficiency filter and grease-trap exhaust check",
      "Semi-annual chemical condenser coil foaming wash",
      "Priority 2-hour emergency technician on-site response window",
      "Refrigerant leak detection & safety relief valve testing",
      "Annual Title 24 economizer fault detection certification report",
      "Asset QR barcoding with direct online tenant portal integration",
    ],
  },
  {
    id: "commercial-enterprise",
    name: "Facility Partner Complete",
    target: "commercial",
    monthlyPrice: "$699+",
    annualPrice: "Custom Contract",
    billedNote: "multi-system campuses & heavy VRF/Chillers",
    tagline: "Dedicated mechanical engineering oversight and predictive telemetry.",
    visitsPerYear: 12,
    discountOnRepairs: "25% Off Commercial Labor & OEM Parts",
    priorityDispatch: "Immediate 1-Hour Guaranteed Emergency SLA",
    overtimeCharges: "$0 Overtime Surcharge 24/7/365",
    features: [
      "12 Monthly Mechanical Plant Audits & Maintenance Checks",
      "Includes all regular seasonal consumable items (filters, belts, contactors)",
      "24/7 Building Automation System (BAS) telemetry remote alarm monitoring",
      "Dedicated Senior Commercial Master Technician assigned to property",
      "Guaranteed deployment of portable spot-coolers within 2 hours if compressor fails",
      "Annual capital expenditure 5-year replacement forecast for building owners",
    ],
  },
];
