export interface ProjectItem {
  id: string;
  title: string;
  clientType: "Residential" | "Commercial";
  location: string;
  completionDate: string;
  scope: string;
  systemInstalled: string;
  energySavings: string;
  beforeStats: {
    problem: string;
    oldEquipment: string;
    monthlyEnergyCost: string;
  };
  afterStats: {
    solution: string;
    newEquipment: string;
    monthlyEnergyCost: string;
    comfortImprovement: string;
  };
  challenge: string;
  executionSteps: string[];
  clientQuote: {
    quote: string;
    clientName: string;
    role: string;
  };
  image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "metro-residential-heatpump-retrofit",
    title: "1960s Mid-Century Home Full Heat Pump Electrification",
    clientType: "Residential",
    location: "Metro City (Canyon Heights)",
    completionDate: "August 2026",
    scope: "Gas Furnace Removal & 21.5 SEER2 Variable-Speed Inverter Heat Pump Retrofit",
    systemInstalled: "Daikin FIT 3.5-Ton Inverter Heat Pump with Daikin One+ Smart Thermostat",
    energySavings: "38% Reduction in Summer Cooling Power / $1,940 Annual Energy Savings",
    beforeStats: {
      problem: "Aging 1998 single-stage AC with failing compressor and noisy 80% AFUE furnace. Master bedroom was 10°F warmer than living room.",
      oldEquipment: "10 SEER R-22 Condenser & 80,000 BTU Natural Gas Furnace",
      monthlyEnergyCost: "$420/month (Peak Summer)",
    },
    afterStats: {
      solution: "Engineered Manual J calculation; sealed attic flex duct leaks with aerosol mastic; installed slim side-discharge inverter heat pump.",
      newEquipment: "Daikin FIT Inverter Heat Pump with Variable-Speed ECM Air Handler",
      monthlyEnergyCost: "$258/month (Peak Summer)",
      comfortImprovement: "Zero hot spots; temperature delta across all rooms under 1.5°F",
    },
    challenge: "Zero-lot-line side walkway only measured 38 inches wide. A conventional cubic condenser would block required building egress codes.",
    executionSteps: [
      "Calculated true cooling load (34,800 BTU required; old 4.5-ton unit was severely oversized).",
      "Safely recovered remaining R-22 refrigerant in accordance with EPA 608 guidelines.",
      "Mounted slim 12.6\" Daikin FIT condenser on vibration-dampened wall brackets 18\" off the ground, preserving full walkway clearance.",
      "Assisted homeowner with $2,000 Federal IRA 25C tax credit filing and $600 local utility rebate.",
    ],
    clientQuote: {
      quote: "Our mid-century home has never felt this evenly cool. The outdoor unit is so silent we can barely hear it running while sitting on our adjacent patio.",
      clientName: "Jonathan & Claire M.",
      role: "Homeowners",
    },
    image: "/src/assets/images/residential_modern_heatpump_1792843428074.jpg",
  },
  {
    id: "tech-center-commercial-rtu-replacement",
    title: "45,000 Sq. Ft. Corporate Tech Campus Multi-RTU Replacement",
    clientType: "Commercial",
    location: "Riverdale Corporate Park",
    completionDate: "July 2026",
    scope: "Weekend Crane Rigging & Replacement of Four 12.5-Ton Rooftop Package Units",
    systemInstalled: "Four Carrier WeatherExpert 12.5-Ton High-Efficiency Vane Axial RTUs with BACnet",
    energySavings: "26% Overall Facility HVAC Power Reduction / $14,200 Annual Savings",
    beforeStats: {
      problem: "Frequent belt breakages, seized economizers pulling humid outside air into open-plan engineering offices, and constant tenant hot/cold disputes.",
      oldEquipment: "Four 2004 Constant-Volume 10-Ton Rooftop Units",
      monthlyEnergyCost: "$6,850/month average mechanical plant electricity",
    },
    afterStats: {
      solution: "Engineered weekend crane lift with prefabricated curb adapters; integrated factory BACnet controls with existing building automation system.",
      newEquipment: "Carrier WeatherExpert 12.5-Ton Units with direct-drive ECM fans",
      monthlyEnergyCost: "$5,060/month mechanical plant electricity",
      comfortImprovement: "Automated fault detection alerts facility engineer before tenant noticing",
    },
    challenge: "Complete street closure and crane lift strictly limited to Saturday 6:00 AM – 4:00 PM to avoid disrupting 300 tech workers on Monday morning.",
    executionSteps: [
      "Permitted heavy-duty mobile crane and local police traffic escort 3 weeks in advance.",
      "Pre-fabricated custom curb transitions to eliminate hot roofing torch work on site.",
      "Decommissioned and safely lowered four obsolete units by 11:30 AM Saturday.",
      "Rigged, landed, piped, wired, and digitally commissioned all four new Carrier units by 5:00 PM.",
      "Provided facility director with full Testing, Adjusting, and Balancing (TAB) air certification on Sunday.",
    ],
    clientQuote: {
      quote: "Apex executed a massive multi-unit crane lift without a single glitch. When our team arrived Monday morning, the building was at a crisp 71°F. True commercial professionals.",
      clientName: "Arthur Sterling",
      role: "VP of Facility Operations, Riverdale Tech Center",
    },
    image: "/src/assets/images/commercial_rooftop_hvac_1792843428349.jpg",
  },
  {
    id: "medical-clinic-ductless-multi-zone",
    title: "Specialty Medical Clinic High-IAQ Multi-Zone VRF Installation",
    clientType: "Commercial",
    location: "Metro City Healthcare Corridor",
    completionDate: "May 2026",
    scope: "Dedicated Multi-Zone VRF with MERV 14 Filtration for 8 Exam Rooms & Surgical Suite",
    systemInstalled: "Daikin VRV Multi-Zone System with Independent Patient Room Digital Controls",
    energySavings: "32% Energy Savings vs Legacy Chilled Water System",
    beforeStats: {
      problem: "Single-zone centralized air system circulated odors and airborne pathogens between treatment rooms, with no individual doctor/patient temperature customization.",
      oldEquipment: "Central Constant Volume Air Handler with electric strip reheat",
      monthlyEnergyCost: "$3,100/month",
    },
    afterStats: {
      solution: "Installed 8 individual recessed ceiling cassettes with hospital-grade MERV 14 air filtration and individual digital wall thermostats.",
      newEquipment: "Daikin VRV Heat Recovery with individual zone temperature control",
      monthlyEnergyCost: "$2,108/month",
      comfortImprovement: "Zero cross-room air circulation; sound levels under 28 dBA in consult rooms",
    },
    challenge: "Strict medical clinic hygiene requirements; work had to be completed overnight in sealed negative-pressure cleanroom tents.",
    executionSteps: [
      "Erected sealed plastic containment zones with HEPA scrubbers to protect medical equipment.",
      "Ran insulated copper line sets above drop ceiling without disturbing delicate surgical lighting grids.",
      "Commissioned independent patient room controls allowing 65°F in procedure room and 74°F in recovery room simultaneously.",
    ],
    clientQuote: {
      quote: "The ability to customize temperatures for delicate patient procedures while maintaining sterile negative pressure has transformed our practice workflow.",
      clientName: "Dr. Rachel Thorne, MD",
      role: "Clinic Director",
    },
    image: "/src/assets/images/technician_indoor_maintenance_1792843428188.jpg",
  },
];
