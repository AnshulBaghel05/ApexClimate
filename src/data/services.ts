export interface ServiceItem {
  id: string;
  slug: string;
  category: "residential" | "commercial";
  title: string;
  badge: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  turnaround: string;
  warranty: string;
  commonSymptoms: string[];
  diagnosticChecklist: string[];
  pricingGuide: {
    typicalRange: string;
    diagnosticFee: string;
    includes: string;
    note: string;
  };
  keyFeatures: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  // ================= RESIDENTIAL SERVICES =================
  {
    id: "ac-repair",
    slug: "ac-repair",
    category: "residential",
    title: "Residential AC Repair",
    badge: "24/7 Emergency Available",
    shortDescription: "Rapid diagnostic and same-day repair for central ACs, heat pumps, and ductless mini-split systems.",
    metaTitle: "Emergency AC Repair Near Me | Same-Day Service | Apex Climate",
    metaDescription: "Fast, licensed residential AC repair in Metro City & surrounding areas. Certified NATE technicians, flat-rate pricing, 24/7 emergency dispatch.",
    heroSubtitle: "Restore your home's cool comfort fast with honest diagnostics, upfront pricing, and fully-stocked service trucks.",
    turnaround: "Same-Day / 45-Min Emergency Dispatch",
    warranty: "1-Year Parts & Labor Guarantee on All Repairs",
    commonSymptoms: [
      "AC blowing lukewarm or room-temperature air",
      "Strange screeching, clicking, or rattling sounds",
      "Frozen evaporator coil or ice along refrigerant line",
      "Water leaking from indoor handler or condensate drain",
      "System short-cycling (turning on and off every few minutes)",
      "Unusually high electric utility bills with weak cooling",
    ],
    diagnosticChecklist: [
      "Refrigerant pressure & electronic subcooling/superheat verification",
      "Compressor motor amp draw and starting capacitor microfarad test",
      "Indoor blower motor velocity and squirrel cage inspection",
      "Evaporator and condenser coil thermal differential scan",
      "Condensate drain line flush and overflow safety switch check",
      "Thermostat calibration and digital relay communication test",
    ],
    pricingGuide: {
      typicalRange: "$150 – $850 (typical component repair)",
      diagnosticFee: "$79 (Waived with any repair approval)",
      includes: "Comprehensive 28-point electrical, refrigerant, and airflow diagnostic by certified technician.",
      note: "No work begins without your signed authorization on a transparent, flat-rate estimate.",
    },
    keyFeatures: [
      {
        title: "Same-Day Emergency Relief",
        description: "Our fleet carries over 400 universal capacitors, fan motors, contactors, and control boards to resolve 92% of calls on the first trip.",
      },
      {
        title: "Exact Refrigerant Leak Detection",
        description: "We use ultrasonic and ultraviolet dye leak detection to locate microscopic pinholes rather than blindly topping off refrigerant.",
      },
      {
        title: "All Major Brands Serviced",
        description: "Authorized repair specialists for Carrier, Daikin, Trane, Lennox, Mitsubishi, Rheem, and all legacy central systems.",
      },
    ],
    faqs: [
      {
        question: "How quickly can a technician reach my home?",
        answer: "For emergency no-cooling calls during extreme heat, our average arrival window is within 45 to 60 minutes across Metro City and neighboring areas.",
      },
      {
        question: "Is it worth repairing an older AC unit or should I replace it?",
        answer: "We follow the industry 5,000 Rule: multiply the age of the unit by the repair cost. If the product exceeds $5,000, or if it uses banned R-22 refrigerant, replacement with a high-efficiency SEER2 unit is usually more economical long-term.",
      },
    ],
  },
  {
    id: "heating-repair",
    slug: "heating-repair",
    category: "residential",
    title: "Furnace & Heating Repair",
    badge: "Carbon Monoxide Certified",
    shortDescription: "Reliable gas furnace, electric heat pump, and dual-fuel heating system repairs with stringent carbon monoxide safety inspections.",
    metaTitle: "Furnace & Heating Repair | Safe 24/7 Service | Apex Climate",
    metaDescription: "Expert furnace repair, heat pump troubleshooting, and heat exchanger crack detection. Fast service, upfront pricing, NATE-certified technicians.",
    heroSubtitle: "Keep your family safe and warm with rigorous combustion safety checks, ignition diagnostics, and rapid heater repairs.",
    turnaround: "Same-Day Priority Heating Response",
    warranty: "1-Year Parts & Labor Guarantee",
    commonSymptoms: [
      "Furnace blowing cool or lukewarm air",
      "Pilot light or electronic igniter failing to ignite",
      "Frequent cycling or furnace not shutting off",
      "Yellow or flickering burner flame (instead of crisp blue)",
      "Persistent sulfur, burning, or metallic odors",
      "Carbon monoxide alarm activated (evacuate and call immediately)",
    ],
    diagnosticChecklist: [
      "Digital combustion analysis and flue gas carbon monoxide test",
      "Heat exchanger infrared camera crack and breach inspection",
      "Flame sensor cleaning and microamp current measurement",
      "Draft inducer motor vacuum pressure switch test",
      "High-limit safety switch and rollout switch continuity verify",
      "Gas valve manifold supply and manifold pressure check",
    ],
    pricingGuide: {
      typicalRange: "$165 – $920",
      diagnosticFee: "$79 (Waived with repair)",
      includes: "Complete safety combustion audit, heat exchanger scan, and operational heating cycle analysis.",
      note: "Safety-critical repairs are explained clearly with live instrument readings.",
    },
    keyFeatures: [
      {
        title: "Rigorous Heat Exchanger Safety",
        description: "A cracked heat exchanger leaks odorless, lethal carbon monoxide. We test every unit with calibrated digital detectors.",
      },
      {
        title: "Dual-Fuel & Heat Pump Experts",
        description: "We service modern inverter heat pumps, auxiliary heat strips, and conventional natural gas or LP furnaces.",
      },
      {
        title: "Clean Shoe Covers & Floor Runners",
        description: "Our technicians treat your home with total respect, laying drop cloths and leaving your utility closet cleaner than they found it.",
      },
    ],
    faqs: [
      {
        question: "What does it mean if my furnace pilot light is yellow?",
        answer: "A healthy natural gas flame burns a steady, crisp blue. A yellow, orange, or wavering flame indicates incomplete combustion, which often produces hazardous carbon monoxide. Turn off the furnace and call for an inspection.",
      },
    ],
  },
  {
    id: "installation-replacement",
    slug: "installation-replacement",
    category: "residential",
    title: "AC & Heat Pump Installation",
    badge: "Up to $2,000 Tax Credit",
    shortDescription: "Custom Manual J load-calculated system sizing, high-efficiency SEER2 replacements, and flawless duct integration.",
    metaTitle: "HVAC Installation & Replacement | Metro City | Apex Climate",
    metaDescription: "Energy-efficient central AC, heat pump, and furnace installation. Free in-home estimates, 0% APR financing, 10-year parts & labor warranty.",
    heroSubtitle: "Engineered specifically for your home's square footage, ductwork, and sun exposure—lowering power bills by up to 35%.",
    turnaround: "Completed in 1–2 Days",
    warranty: "10-Year Manufacturer Parts & 10-Year Workmanship Warranty",
    commonSymptoms: [
      "Your HVAC system is 12+ years old with climbing repair bills",
      "Rooms have uneven temperatures (one room freezing, another stuffy)",
      "Your equipment uses obsolete, expensive R-22 refrigerant",
      "High monthly utility bills despite mild weather",
      "System requires frequent costly refrigerant recharges",
    ],
    diagnosticChecklist: [
      "Whole-home ACCA Manual J load calculation (never rule-of-thumb guessing)",
      "Static pressure ductwork airflow audit (Manual D compliance)",
      "Electrical breaker panel and disconnect switch load verification",
      "Vibration dampening composite pad and elevation inspection",
      "Refrigerant line-set sizing and nitrogen purge pressure testing",
    ],
    pricingGuide: {
      typicalRange: "$4,500 – $14,000 (depending on tonnage, efficiency, and ductwork)",
      diagnosticFee: "Free In-Home Load Calculation & Replacement Consultation",
      includes: "Removal of old equipment, permits, custom transition plenum, digital smart thermostat, and commissioning.",
      note: "0% APR financing available for up to 18 months with approved credit.",
    },
    keyFeatures: [
      {
        title: "True ACCA Manual J Engineering",
        description: "Oversized systems short-cycle and leave high humidity; undersized systems never cool. We calculate the exact required tonnage.",
      },
      {
        title: "Federal IRA Tax Credit Assistance",
        description: "Qualify for up to $2,000 in federal tax credits plus local utility cash rebates on qualified heat pump systems.",
      },
      {
        title: "Turnkey City Permitting & Testing",
        description: "We handle all municipal building permits, Title 24 duct leakage testing, and final inspections for total peace of mind.",
      },
    ],
    faqs: [
      {
        question: "How long does a full HVAC replacement take?",
        answer: "Most standard residential replacements are completed in a single day (6–8 hours). Complex multi-zone or ductwork redesigns take 2 days, and we ensure you have temporary comfort solutions overnight.",
      },
    ],
  },
  {
    id: "duct-cleaning-air-quality",
    slug: "duct-cleaning-air-quality",
    category: "residential",
    title: "Duct Cleaning & Indoor Air Quality",
    badge: "NADCA Standards",
    shortDescription: "Hospital-grade negative air duct sanitization, whole-house HEPA filtration, UV-C germicidal purifiers, and dehumidifiers.",
    metaTitle: "Air Duct Cleaning & Indoor Air Quality | Apex Climate Solutions",
    metaDescription: "Breathe cleaner air. Professional HEPA vacuum duct cleaning, UV germicidal purifiers, and humidity control for allergy and asthma relief.",
    heroSubtitle: "Eliminate dust, mold spores, pet dander, and volatile organic compounds trapped in your home's hidden airway.",
    turnaround: "3–5 Hours per System",
    warranty: "100% Visual Inspection Cleanliness Guarantee",
    commonSymptoms: [
      "Visible dust puffs or debris billowing from supply vents",
      "Family members suffering from frequent allergies, sneezing, or congestion",
      "Musty, stale, or chemical odors when air conditioner kicks on",
      "Recent remodeling or renovation leaving drywall dust in ducts",
      "Excessive dust accumulating on furniture within 48 hours of cleaning",
    ],
    diagnosticChecklist: [
      "Fiber-optic borescope visual inspection inside main supply and return trunks",
      "Particulate air quality laser counter scan (PM2.5 and PM10 levels)",
      "Relative humidity and microbial moisture reading in plenum",
      "Static pressure test to verify duct cleaning won't loosen fragile seals",
    ],
    pricingGuide: {
      typicalRange: "$350 – $950 (based on number of vents and system size)",
      diagnosticFee: "Free Air Quality Assessment with Any Service",
      includes: "Rotary brush agitation, HEPA negative air containment vacuuming, and organic antimicrobial sanitizing fog.",
      note: "No bait-and-switch $49 coupons with hidden whole-house upcharges.",
    },
    keyFeatures: [
      {
        title: "Continuous Negative Air Containment",
        description: "We seal vents and pull 4,500 CFM of negative pressure directly to outside containment, keeping your indoor rooms immaculate.",
      },
      {
        title: "Whole-Home UV-C & Air Scrubbers",
        description: "Neutralize 99.9% of bacteria, viruses, and VOC odors before air circulates into bedrooms and living spaces.",
      },
    ],
    faqs: [
      {
        question: "How often should air ducts be professionally cleaned?",
        answer: "The National Air Duct Cleaners Association (NADCA) recommends cleaning every 3 to 5 years, or immediately following home renovations, water leaks, or moving into a new residence.",
      },
    ],
  },
  {
    id: "maintenance-plans",
    slug: "maintenance-plans",
    category: "residential",
    title: "Apex Shield Residential Maintenance Plans",
    badge: "Save 15% on All Repairs",
    shortDescription: "Biannual precision tune-ups, VIP priority scheduling, zero emergency overtime fees, and extended equipment lifespan.",
    metaTitle: "HVAC Maintenance Membership Plans | Apex Shield Protection",
    metaDescription: "Protect your HVAC investment. Biannual 28-point tune-ups, priority dispatch, discounted repairs, and verified energy bill savings.",
    heroSubtitle: "Prevent 85% of unexpected breakdowns with scheduled spring AC and autumn heating safety tune-ups.",
    turnaround: "Scheduled at Your Convenience",
    warranty: "No Breakdown Guarantee Between Visits",
    commonSymptoms: [
      "You want to avoid sudden $1,000+ emergency repair bills during heatwaves",
      "Manufacturer warranty requires documented annual maintenance records",
      "Energy bills gradually creeping up year after year",
    ],
    diagnosticChecklist: [
      "Spring Cooling: Condenser coil chemical wash, refrigerant check, capacitor test",
      "Autumn Heating: Heat exchanger scan, burner cleaning, carbon monoxide test",
      "Year-Round: Thermostat verification, electrical tight check, condensate drain flush",
    ],
    pricingGuide: {
      typicalRange: "$14.99/mo – $39.99/mo",
      diagnosticFee: "Free Priority Diagnostics Included for Members",
      includes: "2 comprehensive annual tune-ups, 15% discount on parts and labor, front-of-line priority dispatch.",
      note: "Monthly subscription or discounted annual payment options.",
    },
    keyFeatures: [
      {
        title: "Preserve Factory Warranties",
        description: "Leading equipment brands require proof of annual licensed maintenance to uphold their 10-year parts replacement guarantees.",
      },
      {
        title: "Front-of-Line VIP Scheduling",
        description: "When extreme temperatures strike, members jump to the top of our queue with guaranteed same-day dispatch.",
      },
    ],
    faqs: [
      {
        question: "Can I transfer my maintenance plan if I sell my home?",
        answer: "Yes, our Apex Shield membership stays with the home to increase buyer confidence or can transfer to your new address within our service area.",
      },
    ],
  },

  // ================= COMMERCIAL SERVICES =================
  {
    id: "commercial-repair",
    slug: "commercial-repair",
    category: "commercial",
    title: "Commercial HVAC Emergency Repair",
    badge: "4-Hour SLA / 24/7",
    shortDescription: "Rapid technical dispatch for office complexes, retail centers, restaurants, light industrial, and medical facilities.",
    metaTitle: "Commercial HVAC Repair & Emergency Service | Metro City",
    metaDescription: "Critical commercial HVAC repair for businesses. Certified technicians for packaged RTUs, split systems, server room AC, and chillers.",
    heroSubtitle: "Minimize costly business disruption and protect inventory with guaranteed commercial response times and certified technicians.",
    turnaround: "2 to 4-Hour Guaranteed SLA",
    warranty: "1-Year Commercial Warranty on All Parts & Labor",
    commonSymptoms: [
      "Tenant complaints of warm zones in leased commercial spaces",
      "Rooftop unit (RTU) compressor tripping circuit breaker",
      "Server room or telecom closet temperature exceeding critical thresholds",
      "Exhaust fan or make-up air unit failing in restaurant kitchen",
      "Economizer stuck open, pulling hot humid outside air into building",
    ],
    diagnosticChecklist: [
      "Three-phase voltage balance and phase-loss monitor testing",
      "Building Automation System (BAS) & BACnet protocol fault polling",
      "Belt tension, pulley alignment, and bearing vibration spectrum check",
      "Refrigerant circuit superheat/subcooling and oil level site glass scan",
      "Economizer outdoor enthalpy sensor and damper actuator cycle test",
    ],
    pricingGuide: {
      typicalRange: "Custom commercial quotes based on tonnage & equipment type",
      diagnosticFee: "Commercial diagnostic rate applied toward repair approval",
      includes: "Detailed digital dispatch report with photo evidence, component specs, and asset tracking for facility managers.",
      note: "Direct invoicing and net-30 accounts available for registered commercial accounts.",
    },
    keyFeatures: [
      {
        title: "Certified Commercial Technicians",
        description: "Specialized in 3-phase power, high-tonnage package units, variable speed compressors, and complex building controls.",
      },
      {
        title: "Emergency Server Room Protocol",
        description: "Dedicated priority dispatch for data centers, medical labs, and critical infrastructure requiring immediate cooling restoration.",
      },
      {
        title: "Comprehensive Facility Portals",
        description: "Property managers receive immediate digital invoices, technician GPS tracking, and complete equipment maintenance histories.",
      },
    ],
    faqs: [
      {
        question: "Do you offer emergency service on weekends and holidays?",
        answer: "Yes. Our commercial emergency response team is staffed 24/7/365 with dedicated on-call technicians equipped with rooftop safety rigging and OEM commercial parts.",
      },
    ],
  },
  {
    id: "rooftop-vrf-chillers",
    slug: "rooftop-vrf-chillers",
    category: "commercial",
    title: "Rooftop Units (RTU), VRF & Chillers",
    badge: "Daikin & Carrier Certified",
    shortDescription: "Engineered installation, retrofits, and comprehensive service for packaged rooftop units, VRV/VRF multi-zone heat recovery, and water chillers.",
    metaTitle: "Commercial RTU, VRF & Chiller Services | Apex Climate",
    metaDescription: "Expert installation and service for commercial rooftop units, VRF systems, and chillers. Daikin VRV Pro and Carrier Authorized Commercial Partner.",
    heroSubtitle: "High-performance multi-zone climate control for modern corporate facilities, healthcare offices, and multi-tenant commercial buildings.",
    turnaround: "Project Scheduled with Dedicated Project Manager",
    warranty: "Up to 10-Year Commercial Equipment Warranty",
    commonSymptoms: [
      "Aging rooftop units requiring frequent crane lifts and expensive refrigerant",
      "Tenants requiring simultaneous heating and cooling in different building zones",
      "Skyrocketing commercial peak electrical demand charges",
      "Inefficient constant-volume air distribution creating comfort complaints",
    ],
    diagnosticChecklist: [
      "Comprehensive structural roof curb and curb adapter alignment check",
      "Heat recovery branch selector and multi-inverter circuit diagnosis",
      "Chilled water loop pump head pressure and glycol concentration test",
      "Variable Frequency Drive (VFD) harmonic and modulation check",
    ],
    pricingGuide: {
      typicalRange: "Engineered project estimates provided upon site survey",
      diagnosticFee: "Free Commercial Site Survey & Engineering Consultation",
      includes: "Crane logistics, curb adaptation, gas piping, electrical hookup, and digital commissioning.",
      note: "Leasing and equipment financing programs structured around operating budgets.",
    },
    keyFeatures: [
      {
        title: "Daikin VRV & Mitsubishi City Multi Certified",
        description: "Simultaneous heating and cooling heat-recovery systems that transfer energy between zones, slashing energy consumption by up to 40%.",
      },
      {
        title: "Turnkey Rigging & Crane Coordination",
        description: "We coordinate street closures, city permits, crane operators, and weekend installations to eliminate daytime tenant disruption.",
      },
    ],
    faqs: [
      {
        question: "What is the primary benefit of a VRF system over traditional RTUs?",
        answer: "Variable Refrigerant Flow (VRF) systems adjust compressor speed continuously to match load precisely. Because they can cool sunny southern offices while simultaneously heating shaded northern suites, they offer unmatched comfort and massive efficiency gains.",
      },
    ],
  },
  {
    id: "commercial-installation",
    slug: "commercial-installation",
    category: "commercial",
    title: "Commercial Installation & Tenant Improvement",
    badge: "Design-Build HVAC",
    shortDescription: "Full mechanical design-build for offices, retail stores, restaurants, gyms, and warehouse distribution centers.",
    metaTitle: "Commercial HVAC Installation & Fit-Outs | Metro City",
    metaDescription: "Mechanical contracting for commercial tenant buildouts, restaurants, retail, and warehouses. Custom duct fabrication and code compliance.",
    heroSubtitle: "Engineered duct distribution, ventilation exhaust, and energy-code compliant HVAC installations delivered on schedule and within budget.",
    turnaround: "Strict Adherence to General Contractor Timelines",
    warranty: "Full 2-Year Mechanical Labor & 10-Year Equipment Warranty",
    commonSymptoms: [
      "New retail, restaurant, or medical office lease space build-out",
      "Warehouse requiring destratification fans and climate conditioning",
      "Demising walls being reconfigured requiring zone duct modifications",
      "Exhaust hood and make-up air ventilation requirements for commercial kitchens",
    ],
    diagnosticChecklist: [
      "Architectural blueprint review & Title 24 energy compliance modeling",
      "Kitchen hood CFM exhaust and make-up air volume balance calculation",
      "Sound attenuator and vibration isolator engineering",
      "Spiral and rectangular galvanized duct fabrication layout",
    ],
    pricingGuide: {
      typicalRange: "Firm fixed-bid proposals following plan review",
      diagnosticFee: "Free Plan Review & Bid Estimation",
      includes: "Mechanical engineer stamping, duct fabrication, balancing, air balance TAB report, and city sign-off.",
      note: "Bonded, insured, and pre-qualified for major commercial GC projects.",
    },
    keyFeatures: [
      {
        title: "On-Time GC Subcontractor Guarantee",
        description: "We integrate smoothly with your general contractor schedule, meeting critical rough-in and trim deadlines without project delays.",
      },
      {
        title: "In-House Sheet Metal Fabrication",
        description: "Our local sheet metal shop fabricates custom ductwork, plenums, and roof curbs quickly, avoiding costly 6-week factory delays.",
      },
    ],
    faqs: [
      {
        question: "Do you supply certified Air Balance (TAB) reports?",
        answer: "Yes, all our commercial installations conclude with certified Testing, Adjusting, and Balancing (TAB) documentation required for final occupancy certificates.",
      },
    ],
  },
  {
    id: "commercial-maintenance",
    slug: "commercial-maintenance",
    category: "commercial",
    title: "Commercial Preventive Maintenance Contracts",
    badge: "Predictive Monitoring",
    shortDescription: "Customized quarterly and bi-monthly service agreements tailored to your building size, equipment asset count, and operating hours.",
    metaTitle: "Commercial HVAC Maintenance Contracts | Apex Climate",
    metaDescription: "Preventive HVAC maintenance agreements for commercial buildings. Quarterly filter changes, belt replacements, coil cleanings, and digital audit logs.",
    heroSubtitle: "Protect capital equipment, reduce tenant work orders, and extend the operating life of your commercial mechanical plant.",
    turnaround: "Scheduled Off-Hours or Weekend Service",
    warranty: "Discounted Labor & Priority Guaranteed Dispatch",
    commonSymptoms: [
      "Property manager overwhelmed with tenant temperature complaints",
      "Premature compressor failures on unmaintained rooftop units",
      "Dirty coils driving up electricity demand charges and equipment head pressure",
      "Lacking consolidated asset registry and maintenance history for owners",
    ],
    diagnosticChecklist: [
      "Pleated MERV air filter change-out and date stamping",
      "Drive belt tensioning, alignment, and wear inspection",
      "Condenser and evaporator coil pressure washing",
      "Electrical contactor pit inspection and tightening terminal lugs",
      "Economizer damper linkage lube and stroke test",
    ],
    pricingGuide: {
      typicalRange: "Starting at $189/mo (scaled to tonnage & unit count)",
      diagnosticFee: "Free Commercial Mechanical Plant Audit",
      includes: "Scheduled quarterly visits, comprehensive digital inspection reports, filter replacements, and preferential labor rates.",
      note: "Flexible monthly, quarterly, or annual billing with multi-year rate lock.",
    },
    keyFeatures: [
      {
        title: "Dedicated Commercial Account Executive",
        description: "One direct point of contact who knows your building's roof access, riser locations, and equipment history.",
      },
      {
        title: "Asset Tagging & QR Barcodes",
        description: "Every unit on your roof is barcoded with serial, model, filter sizes, and service logs accessible via digital scan.",
      },
    ],
    faqs: [
      {
        question: "How do your maintenance contracts lower energy costs?",
        answer: "Independent studies show clean coils, proper refrigerant charges, and fresh air filters can reduce commercial cooling power consumption by 15% to 25%, paying for the contract in electrical savings alone.",
      },
    ],
  },
  {
    id: "commercial-emergency",
    slug: "commercial-emergency",
    category: "commercial",
    title: "24/7 Commercial Emergency Response",
    badge: "2-Hour Response Time",
    shortDescription: "Immediate emergency dispatch for business-critical cooling and heating system failures, server rooms, and healthcare facilities.",
    metaTitle: "24/7 Commercial HVAC Emergency Dispatch | Apex Climate",
    metaDescription: "Rapid 24/7 commercial HVAC emergency repairs. Immediate dispatch for server rooms, restaurants, food storage, and commercial buildings.",
    heroSubtitle: "When mechanical failure threatens revenue, inventory, or tenant safety, our dedicated commercial emergency trucks are on the move.",
    turnaround: "Under 2 Hours On-Site",
    warranty: "Full Commercial Labor Guarantee",
    commonSymptoms: [
      "Total HVAC failure during extreme summer heat in multi-story office",
      "Walk-in refrigeration or kitchen exhaust collapse during dinner service",
      "High temperature alarm in IT server room or data telecommunications center",
      "Piping rupture or chilled water coil leak causing water damage",
    ],
    diagnosticChecklist: [
      "Rapid triage of emergency electrical safeties and disconnects",
      "Portable spot-cooler deployment for temporary critical zone relief",
      "Temporary bypass and compressor emergency bypass evaluation",
      "Direct communication with building engineer or property manager",
    ],
    pricingGuide: {
      typicalRange: "Standard commercial emergency rates with clear transparent authorization",
      diagnosticFee: "Straightforward emergency dispatch fee",
      includes: "Immediate triage, portable cooling deployment if needed, and emergency repair.",
      note: "Priority given to commercial maintenance agreement partners.",
    },
    keyFeatures: [
      {
        title: "Fleet of Portable Spot Coolers",
        description: "If a 20-ton compressor cannot be sourced immediately, we can deploy rolling spot coolers to protect server racks and sensitive spaces.",
      },
      {
        title: "Direct Access to Wholesale Supply Houses",
        description: "After-hours commercial distributor emergency opening privileges for rapid access to specialty contactors, motors, and coils.",
      },
    ],
    faqs: [
      {
        question: "Can you provide temporary spot cooling while waiting for parts?",
        answer: "Yes, we maintain a fleet of commercial portable spot coolers and power distribution boxes ready for immediate delivery to keep your server room or executive floor operational.",
      },
    ],
  },
];
