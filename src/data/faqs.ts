export interface FaqItem {
  id: string;
  category: "Residential" | "Commercial" | "Equipment" | "Pricing" | "Emergency";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  // Residential
  {
    id: "res-1",
    category: "Residential",
    question: "How do I know if my AC needs a minor repair or a complete replacement?",
    answer: "A good benchmark is the '5,000 Rule': multiply the system's age in years by the estimated repair cost. If the result exceeds $5,000 (e.g., a 12-year-old system needing an $800 repair = $9,600), or if your unit still operates on phased-out R-22 freon, replacement is usually far more financially prudent. Newer SEER2 systems also reduce summer cooling bills by 25% to 40%.",
  },
  {
    id: "res-2",
    category: "Residential",
    question: "Why is water leaking from my indoor air handler or closet unit?",
    answer: "During normal summer operation, your evaporator coil pulls gallons of moisture from indoor air daily. If the condensate PVC drain line clogs with algae, slime, or dust, water backs up and overflows the emergency pan. Turn your system OFF immediately to prevent drywall damage and call us for a rapid drain blowout and float-switch safety test.",
  },
  {
    id: "res-3",
    category: "Residential",
    question: "What temperature should I set my thermostat in the summer to save money?",
    answer: "The U.S. Department of Energy recommends setting your thermostat to 78°F when you are at home and alert, and bumping it up to 85°F when away at work. For every single degree you raise your thermostat setting in summer, you save approximately 3% to 5% on your monthly electric bill.",
  },

  // Commercial
  {
    id: "com-1",
    category: "Commercial",
    question: "What response time can our facility expect during a commercial HVAC failure?",
    answer: "For registered commercial accounts and contract partners, our dedicated commercial trucks arrive on-site within 2 to 4 hours guaranteed, 24/7/365. For critical mission-critical environments (server rooms, medical surgical suites, walk-ins), we offer priority emergency dispatch under 90 minutes with rolling spot-cooling units ready.",
  },
  {
    id: "com-2",
    category: "Commercial",
    question: "Do you supply certified Air Balance (TAB) and Title 24 economizer reports?",
    answer: "Yes. All our commercial mechanical installations and economizer retrofits include certified Testing, Adjusting, and Balancing (TAB) documentation and Title 24 acceptance testing forms required by municipal building inspectors for final certificates of occupancy.",
  },
  {
    id: "com-3",
    category: "Commercial",
    question: "Can we set up Net-30 invoicing for our commercial property management company?",
    answer: "Yes, we provide Net-30 commercial credit terms upon quick credit application approval for building owners, general contractors, commercial property managers, and multi-location retail chains.",
  },

  // Equipment & Sizing
  {
    id: "eq-1",
    category: "Equipment",
    question: "How do I know what size or tonnage AC unit my house needs?",
    answer: "Never rely on lazy rule-of-thumb square footage estimates alone. Professional contractors perform an ACCA Manual J load calculation that accounts for window orientation, shading, ceiling heights, insulation R-values, and climate zone. As a general estimate, homes require 1 ton of cooling per 500–600 square feet. You can try our free online BTU Calculator tool on this site for an instant estimate.",
  },
  {
    id: "eq-2",
    category: "Equipment",
    question: "What is SEER2 and why did HVAC ratings change recently?",
    answer: "SEER2 (Seasonal Energy Efficiency Ratio 2) is the updated Department of Energy standard introduced in 2023. It tests equipment under higher external static pressure duct conditions to reflect real-world installation performance. Higher SEER2 numbers mean significantly lower electricity consumption.",
  },

  // Pricing & Financing
  {
    id: "pr-1",
    category: "Pricing",
    question: "Do you offer upfront flat-rate pricing or do you bill by open-ended hours?",
    answer: "We use 100% upfront flat-rate pricing from our standardized national pricing guide. Our technician will thoroughly diagnose your system, explain the exact issue with photo evidence, and provide a fixed price quote before turning a single wrench. You will never face surprise overtime fees.",
  },
  {
    id: "pr-2",
    category: "Pricing",
    question: "What financing programs and tax credits are available for new equipment?",
    answer: "We offer 0% APR financing for up to 18 months through approved lenders, as well as low monthly payment plans up to 120 months. Additionally, qualifying high-efficiency heat pumps and air conditioners earn up to $2,000 in Federal IRA 25C Energy Tax Credits plus local electric utility rebates up to $1,000.",
  },

  // Emergency
  {
    id: "em-1",
    category: "Emergency",
    question: "Is emergency service really available 24 hours a day, including holidays?",
    answer: "Yes. We maintain a live, local dispatch coordinator on duty 24/7/365. When you call our emergency hotline at (555) 234-9911 at 2:00 AM on Christmas or a 105°F Sunday afternoon, you reach a live human being who immediately pages the on-call master technician for your zone.",
  },
  {
    id: "em-2",
    category: "Emergency",
    question: "What should I do immediately if my furnace smells like burning or sulfur?",
    answer: "If you detect a distinct rotten egg or sulfur odor (the safety mercaptan odorant added to natural gas), do NOT touch any electrical light switches or phones inside the building. Evacuate everyone and pets immediately, walk at least 100 feet away, call your local gas utility emergency line, and then contact our emergency HVAC dispatch.",
  },
];
