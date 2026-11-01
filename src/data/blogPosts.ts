export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    credentials: string;
  };
  publishDate: string;
  readTime: string;
  category: "Maintenance" | "Equipment Guide" | "Commercial" | "Energy Savings" | "Air Quality";
  targetKeywords: string[];
  content: {
    sectionHeading?: string;
    paragraphs: string[];
    takeaways?: string[];
  }[];
  relatedServiceId?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "how-often-service-ac",
    slug: "how-often-service-ac",
    title: "How Often Should You Service Your AC? The Ultimate Homeowner Maintenance Guide",
    metaTitle: "How Often Should You Service Your AC? Expert HVAC Advice",
    metaDescription: "Learn how often your air conditioner needs servicing, what a 28-point tune-up includes, and why spring maintenance prevents 85% of summer breakdowns.",
    excerpt: "Discover why once a year is the gold standard for residential cooling systems, what technicians actually inspect during a tune-up, and the true cost of skipping seasonal service.",
    author: {
      name: "Marcus Vance",
      role: "Lead Field Mechanical Inspector",
      credentials: "NATE Master Certified / EPA Universal 608",
    },
    publishDate: "October 14, 2026",
    readTime: "6 min read",
    category: "Maintenance",
    targetKeywords: ["how often service ac", "air conditioning tune up frequency", "preventative ac maintenance", "annual ac service benefits"],
    relatedServiceId: "ac-repair",
    content: [
      {
        sectionHeading: "The Golden Rule: Once a Year for Cooling, Once for Heating",
        paragraphs: [
          "Ask any seasoned HVAC engineer or manufacturer representative, and the consensus is definitive: central air conditioning systems should be professionally serviced at least once every 12 months, ideally in the early spring before the first heatwave arrives.",
          "If you operate a dual-purpose heat pump that provides both heating in winter and cooling in summer, your system works year-round without a resting off-season. For heat pumps, bi-annual service (spring and autumn) is strongly advised by both the Air Conditioning Contractors of America (ACCA) and equipment manufacturers.",
        ],
        takeaways: [
          "Central Air Conditioners: Minimum 1 professional tune-up every spring.",
          "Heat Pumps (Dual Cooling & Heating): 2 tune-ups per year (spring and autumn).",
          "Air Filters: Inspect every 30 days; replace every 60–90 days depending on pet dander and dust.",
        ],
      },
      {
        sectionHeading: "What Happens When You Skip Seasonal Maintenance?",
        paragraphs: [
          "Unlike an automobile that exhibits dashboard warning lights for oil changes, an HVAC system quietly compensates for mechanical strain until a catastrophic component fails on the hottest 95°F afternoon.",
          "The first hidden penalty is efficiency decay. Department of Energy studies show an unserviced air conditioner loses roughly 5% of its overall operating efficiency each year dust and grime accumulate across the evaporator and outdoor condenser coils. That means a system rated at 16 SEER2 can degrade to the equivalent of an inefficient 12 SEER2 within three summers.",
          "The second penalty is warranty invalidation. Most major manufacturers—including Carrier, Daikin, Trane, and Lennox—explicitly state in their 10-year warranty contracts that replacement parts (including expensive scroll compressors) are only covered if the homeowner can furnish documentation of annual professional maintenance.",
        ],
      },
      {
        sectionHeading: "Inside a Professional 28-Point Precision AC Tune-Up",
        paragraphs: [
          "A legitimate HVAC tune-up is far more than a technician dusting off the fan grill with a rag. During an Apex Shield precision visit, our certified mechanics perform electrical, thermodynamic, and airflow diagnostics:",
          "1. Capacitor Microfarad (µF) Testing: Capacitors supply the high torque burst needed to start compressors and fans. As they degrade from summer heat, their capacitance drops. Replacing a weak $40 capacitor during a tune-up prevents a $2,200 compressor motor burn-out.",
          "2. Subcooling & Superheat Verification: We connect digital manifold gauges and pipe thermistors to verify exact refrigerant charge. Even a 10% undercharge or overcharge spikes compressor head pressure and accelerates mechanical wear.",
          "3. Condensate Drain Flush & Float Switch Test: Algae and mold thrive in dark, humid drip pans. We chemically flush the PVC drain line to prevent water overflowing into your ceilings or hardwood floors.",
        ],
      },
    ],
  },
  {
    id: "heat-pump-vs-furnace",
    slug: "heat-pump-vs-furnace",
    title: "Heat Pump vs. Furnace: Which Heating System is Right for Your Home?",
    metaTitle: "Heat Pump vs Furnace: Efficiency, Cost & Climate Guide 2026",
    metaDescription: "Comparing modern inverter heat pumps vs high-efficiency gas furnaces. Learn about operating costs, dual-fuel systems, and $2,000 IRA tax credits.",
    excerpt: "Unpack the real differences in upfront cost, monthly utility bills, winter heating comfort, and federal tax incentives between modern heat pumps and gas furnaces.",
    author: {
      name: "Sarah Lindqvist, PE",
      role: "HVAC Systems Design Engineer",
      credentials: "BS Mechanical Engineering / ASHRAE Member",
    },
    publishDate: "September 28, 2026",
    readTime: "8 min read",
    category: "Equipment Guide",
    targetKeywords: ["heat pump vs furnace", "inverter heat pump benefits", "gas furnace replacement", "inflation reduction act hvac rebates"],
    relatedServiceId: "installation-replacement",
    content: [
      {
        sectionHeading: "Understanding the Core Difference: Moving Heat vs. Making Heat",
        paragraphs: [
          "The fundamental difference between a furnace and a heat pump comes down to physics: a gas furnace burns fuel to create new heat, whereas a heat pump uses electricity and refrigerant to extract existing heat from the outside air and transfer it inside.",
          "Even when the outside thermometer reads 20°F (-7°C), the ambient air contains an immense amount of sensible thermal energy. Modern cold-climate inverter heat pumps (such as the Mitsubishi H2i and Carrier Infinity) can extract this energy with up to 300% to 400% thermodynamic efficiency—delivering three to four times more heat energy than the electrical energy they consume.",
        ],
      },
      {
        sectionHeading: "Side-by-Side Comparison: Cost, Lifespan, and Comfort",
        paragraphs: [
          "Upfront Investment: A high-efficiency 96% AFUE gas furnace typically costs between $3,000 and $4,800 installed. A central variable-speed heat pump runs between $5,500 and $8,000. However, because a heat pump also replaces your central air conditioner in a single outdoor unit, you eliminate the expense of purchasing two separate systems.",
          "Federal Tax Incentives: Under Section 25C of the Inflation Reduction Act, qualified Tier 2 heat pumps earn homeowners an immediate 30% federal tax credit (capped at $2,000). Standard gas furnaces, by contrast, qualify for a maximum $600 credit.",
          "Comfort Dynamics: Gas furnaces produce hot, dry air exiting supply registers at 120°F–140°F. Modern variable-speed heat pumps deliver a steady, continuous stream of warm air around 95°F–105°F, avoiding the hot-and-cold cyclical spikes characteristic of older heating equipment.",
        ],
        takeaways: [
          "Choose a Heat Pump if: You want whole-home cooling and heating in one package, wish to electrify away from natural gas, or qualify for $2,000 in federal tax credits.",
          "Choose a Gas Furnace if: You already have a cheap natural gas connection, experience sub-zero winter blasts below -10°F, and have an AC unit that is still relatively new.",
          "The Best of Both Worlds (Dual Fuel): Pair a high-efficiency heat pump with a gas furnace backup. The heat pump runs during mild 35°F–60°F weather; the gas furnace ignites only during extreme deep freezes.",
        ],
      },
    ],
  },
  {
    id: "commercial-rtu-failure-signs",
    slug: "commercial-rtu-failure-signs",
    title: "5 Tell-Tale Signs Your Commercial Rooftop Unit (RTU) is On the Verge of Failure",
    metaTitle: "5 Signs Commercial Rooftop Unit (RTU) Is Failing | Apex Climate",
    metaDescription: "Avoid costly facility downtime. Learn how facility managers spot early warning signs of commercial RTU failure, economizer faults, and compressor fatigue.",
    excerpt: "Facility managers: learn how subtle symptoms like cycling economizers, vibration rattles, and rising peak electrical demand signal impending rooftop HVAC collapse.",
    author: {
      name: "David Chen",
      role: "Commercial Mechanical Project Director",
      credentials: "Commercial Contractor Class B / CEM Certified",
    },
    publishDate: "September 11, 2026",
    readTime: "7 min read",
    category: "Commercial",
    targetKeywords: ["commercial rtu failure signs", "rooftop unit troubleshooting", "facility hvac maintenance", "commercial air conditioner breakdown"],
    relatedServiceId: "rooftop-vrf-chillers",
    content: [
      {
        sectionHeading: "Why Commercial RTUs Fail Out of Sight",
        paragraphs: [
          "Because packaged rooftop units (RTUs) sit quietly atop commercial building parapets, they suffer from an 'out of sight, out of mind' trap. Unlike residential homeowners who immediately notice a warm bedroom, commercial facility managers often discover a broken RTU only when tenants threaten rent withholding or restaurant guests walk out.",
          "Recognizing the subtle precursor signs of mechanical degradation allows property managers to plan scheduled replacements during off-hours rather than weathering an emergency crane lift during a busy Tuesday afternoon.",
        ],
      },
      {
        sectionHeading: "Sign 1: Creeping Peak Electrical Demand Charges",
        paragraphs: [
          "If your monthly utility bill shows spikes in peak kilowatt (kW) demand without a corresponding increase in facility operating hours, your RTU compressors are likely drawing excessive amps. Worn motor bearings, high head pressures from clogged microchannel coils, and failing crankcase heaters force motors to draw up to 30% more current on startup.",
        ],
      },
      {
        sectionHeading: "Sign 2: Tenant Zone Temperature Discrepancies & Stuffy Air",
        paragraphs: [
          "When tenant complaints flood the maintenance portal regarding stuffy, humid, or uneven air, the rooftop unit's economizer actuator is often seized. In many aging units, outdoor air dampers freeze open—drawing in 95°F humid ambient air on sweltering days—or jam shut, violating local fresh-air ventilation codes.",
        ],
      },
      {
        sectionHeading: "Sign 3: Chronic Belt Shredding & Harmonic Roof Vibration",
        paragraphs: [
          "If your maintenance team is replacing shredded fan belts every 90 days, or if tenants on the top floor report low humming vibrations through ceiling tiles, the RTU blower assembly is out of dynamic balance. Misaligned pulleys, rusted blower bearings, or bent squirrel cage shafts will quickly burn out expensive three-phase blower motors.",
        ],
      },
    ],
  },
  {
    id: "how-to-size-ac-tonnage",
    slug: "how-to-size-ac-tonnage",
    title: "How to Accurately Size an Air Conditioner: Tonnage, BTUs, and Why Bigger is NOT Better",
    metaTitle: "How to Accurately Size an AC Unit: Tonnage & BTU Guide",
    metaDescription: "Why oversizing an AC leads to clammy humidity and short cycling. Learn how HVAC pros calculate BTUs, tonnage, and ACCA Manual J cooling loads.",
    excerpt: "Busting the dangerous myth that bigger AC units are always better. Understand cooling tonnage, room square footage calculations, and humidity control.",
    author: {
      name: "Marcus Vance",
      role: "Lead Field Mechanical Inspector",
      credentials: "NATE Master Certified / EPA Universal 608",
    },
    publishDate: "August 22, 2026",
    readTime: "9 min read",
    category: "Equipment Guide",
    targetKeywords: ["how to size ac unit", "ac tonnage calculation", "btu sizing guide", "manual j load calculation explained"],
    relatedServiceId: "installation-replacement",
    content: [
      {
        sectionHeading: "What is an 'HVAC Ton'? (It Has Nothing to Do with Physical Weight)",
        paragraphs: [
          "In the heating and cooling trade, a 'ton' of air conditioning does not describe how heavy the equipment is on a shipping scale. Historically, one ton of cooling was defined as the amount of thermal energy required to melt a 2,000-pound block of ice over a 24-hour period.",
          "In modern engineering terms, 1 Ton of cooling equals 12,000 British Thermal Units (BTU) per hour. A standard 3-ton residential system removes 36,000 BTUs of heat from your home every hour of continuous operation.",
        ],
      },
      {
        sectionHeading: "The Dangerous Myth: 'Bigger is Always Better'",
        paragraphs: [
          "The most common—and expensive—mistake inexperienced contractors make is recommending an oversized AC unit 'just to be safe.' On paper, an oversized 5-ton system cooling a modest 1,500 sq. ft. home sounds powerful. In reality, it creates a miserable indoor living environment.",
          "An oversized unit cools the air down so rapidly (in 5 to 7 minutes) that it satisfies the thermostat and shuts off before the indoor blower can circulate air across the cold evaporator coil long enough to condense and drain away indoor humidity. The result? Your home feels like a cold, clammy, humid cave, and mold flourishes inside closets and air ducts.",
          "Furthermore, frequent on/off short-cycling places extreme mechanical stress on the compressor starting windings, spiking electric bills and causing the equipment to fail in 7 or 8 years rather than lasting 15 to 20.",
        ],
        takeaways: [
          "500 to 600 sq. ft. per Ton: A rough rule of thumb, but never sufficient for professional installation.",
          "ACCA Manual J Factors: True sizing requires calculating window orientation, attic insulation R-values, ceiling heights, duct leakage, and internal heat gains (appliances and occupants).",
          "Use Our Online Sizing Tool: Test our interactive BTU Calculator on this site to estimate your home's ballpark requirements in seconds.",
        ],
      },
    ],
  },
  {
    id: "cut-hvac-energy-bills",
    slug: "cut-hvac-energy-bills",
    title: "10 Proven Ways to Slash Your HVAC Energy Bills by up to 30%",
    metaTitle: "10 Ways to Lower HVAC Energy Bills | Apex Climate Solutions",
    metaDescription: "Proven, actionable strategies to cut summer cooling and winter heating costs without sacrificing comfort. Programmable controls, duct seals, and more.",
    excerpt: "Stop overpaying the power company. These 10 engineering-backed adjustments to your thermostat, ductwork, and filters deliver measurable utility bill savings.",
    author: {
      name: "Sarah Lindqvist, PE",
      role: "HVAC Systems Design Engineer",
      credentials: "BS Mechanical Engineering / ASHRAE Member",
    },
    publishDate: "July 30, 2026",
    readTime: "7 min read",
    category: "Energy Savings",
    targetKeywords: ["cut hvac energy bills", "lower summer ac electric bill", "smart thermostat savings tips", "seal duct leaks efficiency"],
    relatedServiceId: "duct-cleaning-air-quality",
    content: [
      {
        sectionHeading: "HVAC Accounts for over 50% of Your Home's Total Energy",
        paragraphs: [
          "According to data from the U.S. Energy Information Administration (EIA), heating and air conditioning represent more than half of the typical household's total energy expenditure. The good news? Because HVAC is the single largest consumer of electricity and gas, small improvements generate substantial dollar savings.",
        ],
      },
      {
        sectionHeading: "Top High-Impact Strategies You Can Implement Today",
        paragraphs: [
          "1. Harness the 78°F / 68°F Benchmark: The Department of Energy recommends setting summer cooling to 78°F when home, and winter heating to 68°F. For every degree you raise your thermostat setting during summer cooling, you reduce power usage by 3% to 5%.",
          "2. Install Smart Thermostat Setbacks: Modern thermostats like Ecobee automatically shift temperatures when radar sensors detect everyone has left for work or school. Setting temperatures 7°–10°F back for 8 hours a day yields up to 10% annual savings.",
          "3. Seal Attic Duct Leakage: The average residential duct system loses 20% to 30% of conditioned air through unsealed sheet metal joints and deteriorating duct tape in unconditioned 140°F attics. Professional aerosol or mastic duct sealing pays for itself in less than two seasons.",
          "4. Replace Filters Before They Starve Airflow: A dirt-clogged 1-inch air filter creates high static pressure resistance, forcing blower fan motors to draw excessive amperage and reducing cooling capacity by up to 15%.",
        ],
      },
    ],
  },
  {
    id: "indoor-air-quality-merv-ratings",
    slug: "indoor-air-quality-merv-ratings",
    title: "Indoor Air Quality Basics: MERV Ratings, HEPA & Germicidal UV-C Explained",
    metaTitle: "MERV Ratings & Indoor Air Quality Guide | Apex Climate",
    metaDescription: "Understand MERV filter ratings (MERV 8 vs 11 vs 13), how whole-home HEPA systems work, and the truth about germicidal UV-C light purifiers.",
    excerpt: "The air inside your home can be 2 to 5 times more polluted than outside air. Learn how to choose the right MERV filter rating without suffocating your AC.",
    author: {
      name: "Marcus Vance",
      role: "Lead Field Mechanical Inspector",
      credentials: "NATE Master Certified / EPA Universal 608",
    },
    publishDate: "July 05, 2026",
    readTime: "8 min read",
    category: "Air Quality",
    targetKeywords: ["merv rating comparison", "best air filter for allergies", "indoor air quality hvac", "uv germicidal light air scrubber"],
    relatedServiceId: "duct-cleaning-air-quality",
    content: [
      {
        sectionHeading: "Why Indoor Air Quality (IAQ) is Critical for Modern Homes",
        paragraphs: [
          "Modern homes are constructed with tight weatherproofing, double-pane Low-E windows, and dense exterior wraps. While fantastic for energy efficiency, this tight envelope traps volatile organic compounds (VOCs), formaldehyde from furniture, pet dander, cooking aerosols, and microscopic dust mites inside your living spaces.",
          "The EPA estimates that indoor air concentrations of several pollutants are consistently 2 to 5 times higher than typical outdoor concentrations, exacerbating seasonal allergies and asthma.",
        ],
      },
      {
        sectionHeading: "Deciphering the MERV Scale (Minimum Efficiency Reporting Value)",
        paragraphs: [
          "Air filters are rated on a standard scale from MERV 1 to MERV 16 developed by ASHRAE. Higher numbers capture smaller microscopic particles, but they also create higher airflow resistance:",
          "• MERV 1 to 4: Cheap fiberglass furnace filters. Only catch big dust bunnies and carpet fibers to protect the mechanical motor; virtually useless for human respiratory health.",
          "• MERV 8: Standard pleated filter. Captures 70% to 85% of pollen, dust mites, and mold spores. Excellent balance of airflow and filtration for older systems.",
          "• MERV 11 to 13: Recommended for allergy sufferers. Traps fine pet dander, auto emissions, smoke particles, and sneeze droplets down to 1.0 micron. Note: systems must have adequate static pressure duct capacity to handle MERV 13 without restricting airflow.",
          "• MERV 16 & True HEPA: Hospital-grade filtration capturing 95%+ of particles down to 0.3 microns. Typically installed as dedicated bypass cabinets with auxiliary booster blowers.",
        ],
      },
      {
        sectionHeading: "Active Purification: UV-C Lamps & In-Duct Air Scrubbers",
        paragraphs: [
          "While mechanical filters trap inert dust particles, biological organisms like mold spores, viruses, and bacteria can survive and multiply on moist evaporator coil surfaces. Installing a 254nm germicidal UV-C light directly above the wet A-coil scrambles pathogen DNA, preventing mold colonies from contaminating your breathing air.",
        ],
      },
    ],
  },
];
