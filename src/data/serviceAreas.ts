export interface ServiceArea {
  id: string;
  name: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  zipCodes: string[];
  neighborhoods: string[];
  climateChallenges: string;
  localResponseTime: string;
  dispatchStation: string;
  commonLocalIssues: string[];
  localTestimonial: {
    quote: string;
    author: string;
    neighborhood: string;
    date: string;
    service: string;
  };
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "metro-city",
    name: "Metro City",
    headline: "Licensed 24/7 HVAC Repair & Installation in Metro City",
    metaTitle: "HVAC Repair & Installation in Metro City | 24/7 Emergency Service",
    metaDescription: "Fast, certified heating and air conditioning repair in Metro City, CA. NATE certified, upfront flat-rate pricing, 45-min emergency response.",
    description: "As our primary headquarters hub, Metro City homeowners and business managers enjoy our fastest dispatch times, average 30 to 45 minutes. Whether servicing high-density multi-tenant commercial suites downtown or classic craftsman and mid-century modern single-family residences, our technicians know the local building codes and architectural quirks inside out.",
    zipCodes: ["90210", "90211", "90212", "90213"],
    neighborhoods: ["Downtown Financial District", "Highland Park", "Historic Old Town", "Canyon Heights", "Westside Boulevard"],
    climateChallenges: "Urban heat-island effect causes rooftop temperatures to soar 15°F hotter than surrounding suburbs, accelerating commercial rooftop unit capacitor and compressor fatigue.",
    localResponseTime: "30 – 45 Minutes (Average Emergency Dispatch)",
    dispatchStation: "Apex Headquarters, 1420 Industrial Pkwy",
    commonLocalIssues: [
      "Heavy summer cooling loads straining aging 10-15 year old residential AC condensers",
      "Commercial tenant temperature imbalances in legacy mid-rise buildings",
      "Tight property lines requiring compact, quiet side-discharge units like the Daikin FIT",
      "Older attics with deteriorating flex ducting causing 25% air leakage",
    ],
    localTestimonial: {
      quote: "Our AC stopped blowing cold during a 102-degree July heatwave. Apex arrived in 35 minutes, showed me the blown capacitor, and had the system humming in under an hour. Upfront price, zero hassle.",
      author: "David R.",
      neighborhood: "Canyon Heights, Metro City",
      date: "August 2026",
      service: "Emergency AC Repair",
    },
  },
  {
    id: "north-valley",
    name: "North Valley",
    headline: "Fast HVAC Repair & High-Efficiency Heat Pumps in North Valley",
    metaTitle: "North Valley HVAC Services | AC Repair & Replacement | Apex Climate",
    metaDescription: "Beat the North Valley summer heat. High-efficiency SEER2 air conditioning, heat pumps, and 24/7 repair with certified local technicians.",
    description: "North Valley experiences wide daily temperature swings—blistering dry 100°F+ afternoons followed by chilly mountain canyon nights. We specialize in high-efficiency dual-fuel heat pump systems and multi-stage air conditioning engineered to tame these severe thermal shifts without skyrocketing electricity bills.",
    zipCodes: ["91301", "91302", "91304", "91305"],
    neighborhoods: ["Valley Glen", "Foothill Estates", "Sunridge", "Orchard Hills", "Pine Valley"],
    climateChallenges: "Prolonged dry heatwaves, dust storms, and heavy pollen loads that clog condenser coils and require high-MERV whole-home air filtration.",
    localResponseTime: "35 – 50 Minutes",
    dispatchStation: "North Valley Staging Outpost, Valley Blvd",
    commonLocalIssues: [
      "Coils choked with fine dust and dry grass seeds causing high-head-pressure shutdowns",
      "High utility rates during peak afternoon demand hours (remedied with smart inverter modulation)",
      "Uninsulated ductwork running through 140°F attics losing critical cooling energy",
    ],
    localTestimonial: {
      quote: "We replaced our 18-year-old noisy unit with a Carrier Infinity variable-speed system from Apex. Our summer electricity bills dropped by nearly $180 a month, and the house stays at an even 72°F.",
      author: "Elena & Marcus T.",
      neighborhood: "Foothill Estates, North Valley",
      date: "September 2026",
      service: "Complete System Replacement",
    },
  },
  {
    id: "west-hills",
    name: "West Hills",
    headline: "Precision HVAC Services & Modern Ductless Solutions in West Hills",
    metaTitle: "West Hills AC Repair & Heating Specialists | Apex Climate",
    metaDescription: "Trusted West Hills heating and cooling services. Custom ductless mini-split installation, furnace tune-ups, and 24/7 emergency response.",
    description: "Featuring a blend of sprawling ranch homes, multi-level modern architecture, and light industrial business parks, West Hills properties frequently battle uneven temperature distribution between floors and sunny exposure sides. We deliver targeted multi-zone solutions that eliminate hot master bedrooms and cold ground floors.",
    zipCodes: ["91307", "91308"],
    neighborhoods: ["Hillcrest Meadow", "Summit Ridge", "Crestview Terrace", "West Hills Corporate Park"],
    climateChallenges: "Elevated afternoon solar radiation on west-facing windows and roof slopes requiring careful Manual J thermal load modeling.",
    localResponseTime: "40 – 55 Minutes",
    dispatchStation: "West Staging Hub, Summit Way",
    commonLocalIssues: [
      "Upstairs bedrooms running 8–10 degrees hotter than the ground floor due to thermal stacking",
      "Commercial retail units requiring rooftop economizer damper recalibration",
      "Wildfire smoke infiltration during autumn winds requiring activated carbon purifiers",
    ],
    localTestimonial: {
      quote: "Our two-story home always had a sweltering master bedroom upstairs. Apex installed a dual-zone Mitsubishi ductless system. Now we sleep in perfect coolness without over-chilling the downstairs living room.",
      author: "Patricia K.",
      neighborhood: "Summit Ridge, West Hills",
      date: "July 2026",
      service: "Mitsubishi Mini-Split Installation",
    },
  },
  {
    id: "south-bay",
    name: "South Bay",
    headline: "Coastal Climate HVAC & Anti-Corrosion Systems in South Bay",
    metaTitle: "South Bay HVAC Services | Marine-Coated AC & Heat Pumps | Apex",
    metaDescription: "Protect your coastal HVAC against salt air corrosion. Expert marine-treated heat pumps, AC repair, and ventilation across South Bay.",
    description: "Living near the South Bay coastline offers great ocean breezes, but airborne marine salt spray wreaks havoc on unshielded aluminum condenser coils and electrical contactors. We install factory-treated epoxy 'blue-fin' coils and marine-grade stainless hardware that double system lifespans in coastal zip codes.",
    zipCodes: ["90254", "90266", "90274", "90277"],
    neighborhoods: ["Oceanview Bluff", "Harbor Point", "Marina District", "Seaside Promenade"],
    climateChallenges: "High humidity, marine layer fog, and airborne salt salinity that causes rapid galvanic oxidation on standard condenser coils.",
    localResponseTime: "45 – 60 Minutes",
    dispatchStation: "Coastal Dispatch Fleet, Harbor Blvd",
    commonLocalIssues: [
      "Condenser coil fin corrosion and premature refrigerant leaks on untreated units",
      "High indoor relative humidity exceeding 60% requiring whole-home dehumidification",
      "Mold growth in poorly insulated attic flex ductwork from condensation",
    ],
    localTestimonial: {
      quote: "Our previous AC rusted through in just 6 years from the ocean air. Apex recommended a marine-treated Daikin system with coastal epoxy coating and an extended warranty. Excellent engineering advice.",
      author: "Captain Robert M.",
      neighborhood: "Marina District, South Bay",
      date: "June 2026",
      service: "Coastal Heat Pump Installation",
    },
  },
  {
    id: "oakridge",
    name: "Oakridge",
    headline: "Trusted Home Heating & AC Maintenance in Oakridge",
    metaTitle: "Oakridge HVAC Repair, Furnace & AC Services | Apex Climate",
    metaDescription: "Reliable HVAC contractors serving Oakridge. Furnace safety checks, AC repair, duct cleaning, and Apex Shield preventative maintenance plans.",
    description: "Oakridge is celebrated for its quiet, tree-lined residential neighborhoods and family homes. Our certified technicians help Oakridge families stay comfortable and safe year-round, prioritizing indoor air cleanliness, allergen removal, and whisper-quiet outdoor condensing units that preserve outdoor patio tranquility.",
    zipCodes: ["91350", "91354", "91355"],
    neighborhoods: ["Oakridge Oaks", "Timberline Glen", "Heritage Estates", "Creekwood"],
    climateChallenges: "Heavy deciduous tree leaf debris and oak pollen in spring blocking outdoor condensers, followed by freezing winter night frosts.",
    localResponseTime: "40 – 50 Minutes",
    dispatchStation: "Oakridge Mobile Patrol, Heritage Way",
    commonLocalIssues: [
      "Leaves and tree seeds packing between condenser coils, restricting airflow",
      "Aging 80% AFUE furnaces in 1990s tract homes reaching end-of-life",
      "Dry indoor winter air causing static electricity and irritated sinuses (fixed with whole-home steam humidifiers)",
    ],
    localTestimonial: {
      quote: "We signed up for the Apex Shield Silver plan for our home in Oakridge. The technicians are always courteous, on time, wear shoe covers, and catch small capacitor issues before they become expensive breakdowns.",
      author: "Jennifer & Brian W.",
      neighborhood: "Timberline Glen, Oakridge",
      date: "October 2026",
      service: "Biannual Maintenance & Tune-Up",
    },
  },
  {
    id: "riverdale",
    name: "Riverdale",
    headline: "Commercial & Residential HVAC Solutions in Riverdale",
    metaTitle: "Riverdale HVAC Contractors | Commercial & Home AC | Apex Climate",
    metaDescription: "Professional HVAC repair, rooftop package unit service, and home AC installation in Riverdale. Licensed, bonded, and available 24/7.",
    description: "Home to Riverdale's thriving dining scene, boutique shops, and charming residential streets, our teams support both bustling commercial restaurant kitchens with emergency make-up air and exhaust servicing, as well as historic home ductless retrofits that preserve architectural beauty.",
    zipCodes: ["90291", "90292", "90293"],
    neighborhoods: ["Riverfront Promenade", "Artisan Quarter", "Mill District", "Riverdale Green"],
    climateChallenges: "River valley humidity combined with dense commercial restaurant kitchen exhaust demands.",
    localResponseTime: "35 – 45 Minutes",
    dispatchStation: "Riverdale Patrol Unit, Promenade Way",
    commonLocalIssues: [
      "Restaurant kitchen make-up air units failing during peak Friday night rushes",
      "Boutique shops needing concealed ductwork or ceiling cassette aesthetics",
      "Older electrical service panels requiring load calculation prior to heat pump electrification",
    ],
    localTestimonial: {
      quote: "As a restaurant manager in Riverdale, a broken walk-in or AC on a busy Saturday is a nightmare. Apex had a commercial tech on our roof in 40 minutes and replaced a blown blower motor before dinner service.",
      author: "Chef Marco G.",
      neighborhood: "Riverfront Promenade, Riverdale",
      date: "September 2026",
      service: "Commercial Emergency Service",
    },
  },
];
