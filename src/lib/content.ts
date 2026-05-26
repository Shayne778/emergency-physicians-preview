export type Physician = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  specialties: string[];
  image: string;
  bio: string;
  highlights: string[];
  details: Array<{
    title: string;
    items: string[];
  }>;
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${publicBasePath}${path}`;
}

export type Service = {
  title: string;
  description: string;
  points: string[];
};

export type Location = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapHref: string;
};

export type EmploymentRole = {
  title: string;
  description: string;
  details: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export const site = {
  name: "Cape Coral Emergency Physicians",
  shortName: "CCEP",
  tagline: "Independent, physician-led emergency care serving Cape Coral since 1985.",
  phone: "239-424-3513",
  fax: "239-424-4039",
  email: "admin@ccepfl.com",
  previewNotice: "Private preview",
  logo: assetPath("/scraped-assets/01-new-ccep-logo-047dec-blue-h-rez.webp"),
  sourceUrl: "https://capecoralemergencyphysicians.com/",
};

export const locations: Location[] = [
  {
    name: "Cape Coral Hospital Emergency Department",
    address: "636 Del Prado Blvd S, Cape Coral, FL 33990",
    phone: site.phone,
    hours: "Open 24 hours",
    mapHref: "https://maps.google.com/?q=636+Del+Prado+Blvd+S+Cape+Coral+FL+33990",
  },
];

export const contact = {
  administrators: "Rachel Krutsch & Deborah P. Cox, Executive Assistants",
  mailingAddress: "P.O. Box 151368, Cape Coral, FL 33915",
  office: site.phone,
  fax: site.fax,
  email: site.email,
};

export const billing = {
  company: "Cape Coral Emergency Physicians, LLC",
  address: "Department 1000, PO Box 986549, Boston, MA 02298-6549",
  website: "https://www.PhysicianBillPay.com",
  phone: "(239) 319-3618",
  additionalSupport:
    "For additional billing questions, contact Ventra Health at billing@ventrahealth.com or call 1-800-418-5438, Monday through Friday, 8:00 AM - 5:00 PM ET.",
  records:
    "For medical records requests, use ChartSwap.com. Provider information: Cape Coral Emergency Physicians, Attn: Cape Coral Hospital (Florida). Medical records department fax: (904) 346-0113.",
};

export const physicians: Physician[] = [
  {
    slug: "ihsan-alsalman",
    name: "Ihsan Alsalman",
    credentials: "D.O., M.H.A.",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Osteopathic Emergency Medicine", "Physician Leadership"],
    image: assetPath("/scraped-assets/07-alsalman.webp"),
    bio:
      "Florida native who received his medical degree from University of Osteopathic Medicine and Health Sciences in Iowa and completed residency at Mt. Sinai Medical Center in Miami.",
    highlights: [
      "Board certified by the American Board of Osteopathic Emergency Medicine since 2005",
      "Member, American College of Osteopathic Emergency Physicians",
      "Partner physician with Cape Coral Emergency Physicians since 2009",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Medical degree: University of Osteopathic Medicine and Health Sciences, Iowa, 1998",
          "Residency: Mt. Sinai Medical Center, Miami, Florida, 2002",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Osteopathic Emergency Medicine since 2005",
          "Member, American College of Osteopathic Emergency Physicians",
        ],
      },
      {
        title: "CCEP role",
        items: ["Partner physician with Cape Coral Emergency Physicians since 2009"],
      },
    ],
  },
  {
    slug: "christopher-beechy",
    name: "Christopher Beechy",
    credentials: "MD",
    role: "Attending Physician",
    specialties: ["Emergency Medicine", "Clinical Care", "Patient-Centered Care"],
    image: assetPath("/scraped-assets/08-beechy-christopher.webp"),
    bio:
      "Ohio native with an undergraduate degree in Biochemistry from Denison University and medical/residency training at Wright State University.",
    highlights: [
      "Undergraduate degree in Biochemistry from Denison University",
      "Medical degree and emergency medicine residency at Wright State University",
      "Attending physician with CCEP since 2020",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Undergraduate degree: Denison University, Biochemistry",
          "Medical degree: Wright State University",
          "Residency: Wright State University, Emergency Medicine",
        ],
      },
      {
        title: "CCEP role",
        items: ["Attending physician with CCEP since 2020"],
      },
    ],
  },
  {
    slug: "keith-burley",
    name: "Keith C. Burley",
    credentials: "MD, MS, CAQ-SM, CSCS",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Sports Medicine", "Strength and Conditioning"],
    image: assetPath("/scraped-assets/09-keith-burley.webp"),
    bio:
      "Ontario native, emergency physician, and sports medicine specialist with training at Michigan State, University of Wisconsin, and University of Cincinnati.",
    highlights: [
      "Board certified in Emergency Medicine and Sports Medicine",
      "Member, American College of Emergency Physicians and American Medical Society of Sports Medicine",
      "Partner physician with Cape Coral Emergency Physicians since 2019",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Medical degree: Michigan State University College of Human Medicine, 2012",
          "Residency: Emergency Medicine, University of Wisconsin Hospital & Clinics, 2015",
          "Fellowship: Sports Medicine, University of Cincinnati, 2016",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified in Emergency Medicine",
          "Board certified in Sports Medicine",
          "Member, American College of Emergency Physicians",
          "Member, American Medical Society of Sports Medicine",
        ],
      },
      {
        title: "CCEP role",
        items: [
          "Attending physician with Cape Coral Emergency Physicians since 2016",
          "Partner physician with Cape Coral Emergency Physicians since 2019",
        ],
      },
    ],
  },
  {
    slug: "courtney-cox",
    name: "Courtney Cox",
    credentials: "D.O.",
    role: "Attending Physician",
    specialties: ["Emergency Medicine", "Advanced Provider Recruitment", "Clinical Operations"],
    image: assetPath("/scraped-assets/10-cox-courtney-do.webp"),
    bio:
      "New Jersey native with undergraduate studies at Gettysburg College, medical training at Lake Erie College of Osteopathic Medicine, and emergency medicine residency at Inspira Medical Center.",
    highlights: [
      "Board certified in Emergency Medicine",
      "Member, American College of Emergency Physicians and American Osteopathic Association",
      "Advanced Provider Recruitment Officer",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Undergraduate degree: Gettysburg College, Biology and Psychology, 2009",
          "Medical degree: Lake Erie College of Osteopathic Medicine, 2014",
          "Residency: Inspira Medical Center, Emergency Medicine, 2018",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified in Emergency Medicine",
          "Member, American College of Emergency Physicians",
          "Member, American Osteopathic Association",
        ],
      },
      {
        title: "Appointments",
        items: ["Advanced Provider Recruitment Officer"],
      },
      {
        title: "CCEP role",
        items: ["Attending physician with CCEP since 2018"],
      },
    ],
  },
  {
    slug: "michael-cudnik",
    name: "Michael Cudnik",
    credentials: "MD, MPH",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Biostatistics", "Epidemiology"],
    image: assetPath("/scraped-assets/11-cudnik-website-photo-ccep-michael-cudnik.webp"),
    bio:
      "Ohio native with medical training at Wright State University Boonshoft School of Medicine and public health training at Oregon Health & Science University.",
    highlights: [
      "Board certified by the American Board of Emergency Medicine",
      "Attending physician since 2013; CCEP partner since 2016",
      "Member, Lee Health Emergency Department Peer Review Committee",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Undergraduate degree: University of Dayton, B.S. Biology, 1998",
          "Medical degree: Wright State University Boonshoft School of Medicine, 2002",
          "Residency: MetroHealth Medical Center / Cleveland Clinic Foundation, Emergency Medicine, 2005",
          "Master's degree: Oregon Health & Science University, MPH Biostatistics and Epidemiology, 2007",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Emergency Medicine",
          "Diplomate, American Board of Emergency Medicine",
        ],
      },
      {
        title: "Appointments",
        items: ["Member, Lee Health Emergency Department Peer Review Committee"],
      },
      {
        title: "Interests",
        items: ["Scuba diving", "Boating", "Fishing", "Hiking"],
      },
      {
        title: "CCEP role",
        items: ["Attending physician since 2013; CCEP partner since 2016"],
      },
    ],
  },
  {
    slug: "timothy-dougherty",
    name: "Timothy J. Dougherty",
    credentials: "M.D., F.A.A.E.M., D.A.C.M.T.",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Medical Toxicology", "Disaster Preparedness"],
    image: assetPath("/scraped-assets/12-dougherty.webp"),
    bio:
      "Pennsylvania native who trained at Jefferson Medical College and the Medical College of Pennsylvania, including fellowship training in Medical Toxicology.",
    highlights: [
      "Board certified in Emergency Medicine and Medical Toxicology",
      "Cape Coral Hospital Medical Staff President, 2008-2009",
      "Medical Director, Lee County Disaster Preparedness since 2007",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Medical degree: Jefferson Medical College, Philadelphia, Pennsylvania, 1993",
          "Residency: Medical College of Pennsylvania, 1996",
          "Fellowship: Medical Toxicology, Medical College of Pennsylvania, 1998",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Emergency Medicine since 1997",
          "Board certified by the American Board of Emergency Medicine in Medical Toxicology since 1999",
          "Fellow of the American Academy of Emergency Medicine since 1995",
        ],
      },
      {
        title: "Appointments",
        items: [
          "Cape Coral Hospital Medical Staff President, 2008-2009",
          "Medical Director, Cape Coral Emergency Department",
          "Medical Director, Lee County Disaster Preparedness since 2007",
        ],
      },
      {
        title: "CCEP role",
        items: ["Partner physician with Cape Coral Emergency Physicians since 1998"],
      },
    ],
  },
  {
    slug: "tyler-ensley",
    name: "Tyler Ensley",
    credentials: "DO, FAAEM",
    role: "Attending Physician",
    specialties: ["Emergency Medicine", "Ultrasound", "Austere Care"],
    image: assetPath("/scraped-assets/13-screen-shot-2021-09-25-at-7-33-46-pm.webp"),
    bio:
      "Washington State native with training at Pacific Lutheran University, Kansas City University of Medicine and Biosciences, and Naval Medical Center San Diego.",
    highlights: [
      "Board certified in Emergency Medicine",
      "Special interests include combat and austere emergency care and ultrasound-guided fluid resuscitation",
      "Language Services Core Team, Lee Health",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Undergraduate degree: Pacific Lutheran University, Biology, 2002",
          "Medical degree: Kansas City University of Medicine and Biosciences, 2007",
          "Residency: Naval Medical Center San Diego, Emergency Medicine, 2016",
        ],
      },
      {
        title: "Board certification & memberships",
        items: ["Board certified in Emergency Medicine", "Member, AAEM / FAAEM"],
      },
      {
        title: "Special interests",
        items: [
          "Emergency medical care in combat and austere environments",
          "Ultrasound to guide fluid resuscitation",
          "Using technology to increase physician efficiency",
        ],
      },
      {
        title: "Appointments",
        items: ["Language Services Core Team, Lee Health"],
      },
      {
        title: "Interests",
        items: ["Learning to fish", "Woodworking", "Boating", "Fixing things", "Being a dad"],
      },
      {
        title: "CCEP role",
        items: ["Attending physician with CCEP since 2019"],
      },
    ],
  },
  {
    slug: "robert-esposito",
    name: "Robert M. Esposito",
    credentials: "D.O.",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Osteopathic Emergency Medicine", "Clinical Care"],
    image: assetPath("/scraped-assets/14-esposito.webp"),
    bio:
      "Florida native who received his medical degree from Nova Southeastern University and completed residency at South Pointe Hospital.",
    highlights: [
      "Board certified by the American Board of Osteopathic Emergency Medicine since 2006",
      "Member, American College of Emergency Medicine",
      "Partner physician with Cape Coral Emergency Physicians since 2008",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Medical degree: Nova Southeastern University, Fort Lauderdale, Florida, 1997",
          "Residency: South Pointe Hospital, 2001",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Osteopathic Emergency Medicine since 2006",
          "Member, American College of Emergency Medicine",
          "Member, American Osteopathic Association",
        ],
      },
      {
        title: "CCEP role",
        items: ["Partner physician with Cape Coral Emergency Physicians since 2008"],
      },
    ],
  },
  {
    slug: "michael-schultz",
    name: "Michael T. Schultz",
    credentials: "MD, FACEP",
    role: "President of CCEP",
    specialties: ["Emergency Medicine", "Quality Review", "Hospital Leadership"],
    image: assetPath("/scraped-assets/15-a15-2-michael-schultz.webp"),
    bio:
      "Florida native with undergraduate training at the University of Florida, medical training at Eastern Virginia Medical School, and residency at Carolinas Medical Center.",
    highlights: [
      "Board certified by the American Board of Emergency Medicine",
      "President of CCEP and Emergency Department Professional Review Committee",
      "Associate Medical Director of Cape Coral Hospital, 2014-2017",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Undergraduate degree: University of Florida, Human Nutrition, 2001",
          "Medical degree: Eastern Virginia Medical School, 2005",
          "Residency: Carolinas Medical Center, North Carolina, 2008",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Emergency Medicine",
          "Member, ACEP",
          "Member, AOA Medical Honor Society",
        ],
      },
      {
        title: "Appointments",
        items: [
          "President of CCEP",
          "Emergency Department Professional Review Committee",
          "Medical Staff Quality Committee",
          "Joint Operating Committee",
          "Associate Medical Director of Cape Coral Hospital, 2014-2017",
        ],
      },
      {
        title: "Interests",
        items: ["Avid golfer", "Hiking", "Fishing"],
      },
      {
        title: "CCEP role",
        items: ["Partner physician with Cape Coral Emergency Physicians since 2008"],
      },
    ],
  },
  {
    slug: "kurt-urban",
    name: "Kurt E. Urban",
    credentials: "D.O.",
    role: "Partner Physician",
    specialties: ["Emergency Medicine", "Osteopathic Medicine", "Clinical Care"],
    image: assetPath("/scraped-assets/16-kurt-urban.webp"),
    bio:
      "Michigan native who received his medical degree from Michigan State University College of Osteopathic Medicine and completed emergency medicine residency in Lansing, Michigan.",
    highlights: [
      "Board certified by the American Board of Emergency Medicine",
      "Member, American College of Emergency Physicians",
      "Partner physician with Cape Coral Emergency Physicians since 2015",
    ],
    details: [
      {
        title: "Education & training",
        items: [
          "Medical degree: Michigan State University College of Osteopathic Medicine, 1998",
          "Residency: Emergency Medicine, Sparrow Hospital and Ingham Regional Medical Center, Lansing, Michigan, 2002",
        ],
      },
      {
        title: "Board certification & memberships",
        items: [
          "Board certified by the American Board of Emergency Medicine",
          "Member, American College of Emergency Physicians",
        ],
      },
      {
        title: "CCEP role",
        items: ["Partner physician with Cape Coral Emergency Physicians since 2015"],
      },
    ],
  },
];

export const prnPhysicians = ["Glenn Fortier, MD", "Pamela Perry, MD", "Bobak Rahmanian, DO", "Tabitha Williams, MD"];

export const advancedProviders = [
  "Marten Karlsson, Physician Assistant, Certified",
  "Ryan Moskowitz, Physician Assistant, Certified",
  "Alexandria Erickson, Physician Assistant, Certified",
  "Rachel Smith, Physician Assistant, Certified",
  "Kayley Oliveri, Physician Assistant, Certified",
  "Anthony Pine, Physician Assistant, Certified",
  "Nisha Gupta, Physician Assistant, Certified",
  "Benjamin Sprosty, APRN",
  "Jennifer Peet, Physician Assistant, Certified",
];

export const prnAdvancedProviders = [
  "Shannon Murphy, Physician Assistant, Certified",
  "Billy Morris, Physician Assistant, Certified",
  "Michael Cohen, Physician Assistant, Certified",
];

export const services: Service[] = [
  {
    title: "Emergency Department Care",
    description:
      "Board-certified emergency physicians caring for Cape Coral Hospital patients from minor injuries and illnesses to life-threatening emergent care.",
    points: ["80,000+ annual ED visits", "Board-certified emergency physicians", "Fast Track support for minor care issues"],
  },
  {
    title: "Fast Track Treatment",
    description:
      "A 15-room Fast Track area provides treatment for minor care needs including lacerations, fractures, and other non-life-threatening injuries.",
    points: ["Physician and advanced provider staffing", "Radiology and laboratory services within the department", "Focused minor-care workflow"],
  },
  {
    title: "Hospital and Team Partnership",
    description:
      "CCEP physicians work with Lee Health administration, nursing, and ancillary staff to support an efficient, cohesive, patient-centered care team.",
    points: ["Independent physician-led group", "Cooperative hospital partnership", "Emergency department quality leadership"],
  },
  {
    title: "Advanced Provider Team",
    description:
      "Physician assistants and advanced registered nurse practitioners work with emergency physicians to expand responsive department coverage.",
    points: ["Highly skilled advanced providers", "Physician case review", "Team-based emergency care"],
  },
];

export const employment: EmploymentRole[] = [
  {
    title: "BC/BE Emergency Physician",
    description:
      "CCEP is seeking a full-time BC/BE emergency physician to join its 80,000-volume emergency department practice in Cape Coral.",
    details: [
      "Equity in shifts",
      "Highly competitive compensation package",
      "Minutes from the Gulf of Mexico with boating, saltwater fishing, golf, and family-friendly community life",
    ],
  },
  {
    title: "Experienced Emergency Medicine NP/PA",
    description:
      "Experienced emergency medicine NP/PA roles are available for full-time and part-time clinicians in a collaborative team environment with physician backup.",
    details: [
      "Competitive hourly pay with evening and night differential",
      "Strong compensation package for full-time roles",
      "Beautiful Florida Gulf Coast community near beaches, fishing, and boating",
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: "Why do I receive multiple bills for an emergency room visit?",
    answer:
      "The hospital bills for facility charges, drugs, equipment, and supplies. The physician group bills separately for professional services provided by the emergency department physician staff.",
  },
  {
    question: "Who do I contact regarding a physician bill?",
    answer:
      "Use the telephone number or website listed on your bill. For Cape Coral Emergency Physicians billing, visit PhysicianBillPay.com or call (239) 319-3618. Additional billing support is available through Ventra Health.",
  },
  {
    question: "Why am I receiving a physician bill if I did not see a physician?",
    answer:
      "You may have been treated by a certified physician assistant or advanced registered nurse practitioner. These licensed clinicians work with the physician group and assist emergency physicians in the department. Each case is reviewed with the physician on duty.",
  },
];

export const stats = [
  { label: "Serving Cape Coral since", value: "1985" },
  { label: "Annual ED patients", value: "80K+" },
  { label: "Fast Track rooms", value: "15" },
];
