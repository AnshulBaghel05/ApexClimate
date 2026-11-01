export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  date: string;
  rating: number;
  clientType: "Residential" | "Commercial";
  service: string;
  reviewText: string;
  verified: boolean;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "David Rosenberg",
    city: "Metro City",
    date: "October 18, 2026",
    rating: 5,
    clientType: "Residential",
    service: "Emergency AC Repair",
    reviewText: "Our central AC started blowing lukewarm air on a sweltering Saturday afternoon. Called Apex and a technician (Marcus) was at our door in 38 minutes. He tested the dual run capacitor on his meter, showed me it had failed, and replaced it from his truck inventory in under 20 minutes. Upfront flat-rate price, total professionalism.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Karen Lindstrom",
    city: "North Valley",
    date: "October 02, 2026",
    rating: 5,
    clientType: "Residential",
    service: "Heat Pump Installation",
    reviewText: "We replaced our 19-year-old gas furnace and noisy outdoor unit with a Daikin FIT heat pump. The installation crew was phenomenal: arrived at 7:30 AM, laid protective runners throughout our hallways, and finished testing by 3:00 PM. The house has never been this uniformly comfortable, and they even handled the $2,000 tax credit paperwork for us.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Arthur Sterling",
    city: "Riverdale",
    date: "September 24, 2026",
    rating: 5,
    clientType: "Commercial",
    service: "Rooftop RTU Replacement",
    reviewText: "As VP of Facility Operations for a 45,000 sq ft office campus, precision execution is everything. Apex coordinated a massive weekend mobile crane lift, swapped four 12.5-ton Carrier units, and had everything balanced and certified for our tenants by Monday morning. Truly top-tier commercial mechanical contractors.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Patricia & Gregory K.",
    city: "West Hills",
    date: "September 15, 2026",
    rating: 5,
    clientType: "Residential",
    service: "Ductless Mini-Split Installation",
    reviewText: "Our upstairs master suite was always 8 degrees hotter than the rest of the house during summer. Apex installed a whisper-quiet Mitsubishi ductless system. Clean aesthetic, flawless concealed line-set cover on the exterior stucco, and now we sleep in absolute cool comfort. Worth every penny.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Chef Marco Gandolfi",
    city: "Riverdale",
    date: "August 30, 2026",
    rating: 5,
    clientType: "Commercial",
    service: "Kitchen Exhaust & Make-Up Air",
    reviewText: "Our kitchen make-up air blower motor died during Friday dinner prep. Apex answered our emergency call immediately and had an experienced commercial tech on the roof with a universal motor replacement within an hour. They saved our weekend restaurant revenue. They now handle our quarterly commercial maintenance.",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Jennifer Wu",
    city: "Oakridge",
    date: "August 12, 2026",
    rating: 5,
    clientType: "Residential",
    service: "Apex Shield Maintenance Plan",
    reviewText: "Enrolled in their Apex Shield Silver plan two years ago. The spring and fall tune-ups are thorough—the technician takes time to explain readings, clean the outdoor coils, and flush the drain line. Never any pushy upselling, just honest preventative care.",
    verified: true,
  },
  {
    id: "rev-7",
    author: "Captain Robert Miller",
    city: "South Bay",
    date: "July 29, 2026",
    rating: 5,
    clientType: "Residential",
    service: "Marine-Coated Coastal Heat Pump",
    reviewText: "Living two blocks from the beach, our previous AC rusted away in 6 years. Apex recommended an epoxy blue-fin coated heat pump specifically engineered for salt air. The team was courteous, clean, and knowledgeable about coastal building codes. Highly recommended.",
    verified: true,
  },
  {
    id: "rev-8",
    author: "Dr. Rachel Thorne",
    city: "Metro City",
    date: "July 11, 2026",
    rating: 5,
    clientType: "Commercial",
    service: "Medical Clinic VRF System",
    reviewText: "Apex installed a multi-zone VRF system with hospital-grade MERV 14 filtration across our medical clinic. Quiet operation, individual doctor control per exam room, and immaculate cleanroom containment during overnight installation. Outstanding work.",
    verified: true,
  },
];
