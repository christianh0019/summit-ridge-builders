import { Hammer, Home, PenTool, Ruler } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Summit Ridge Builders",
  tagline: "Elevating Mountain Living Since 1995",
  foundingYear: 1995,
  phone: "(970) 555-0147",
  email: "hello@summitridgebuilders.com",
  address: "123 Alpine View Dr, Estes Park, CO 80517",
  license: "Colorado General Contractor License #GC-45821",
  socials: {
    facebook: "https://facebook.com/summitridgebuilders",
    instagram: "https://instagram.com/summitridgebuilders",
    linkedin: "https://linkedin.com/company/summitridgebuilders",
  },
  webhooks: {
    application: "https://hooks.leadconnectorhq.com/webhook/summitridge/application",
    leadMagnet: "https://hooks.leadconnectorhq.com/webhook/summitridge/lead-magnet",
  }
};

export const SERVICES = [
  {
    title: "Custom Home Construction",
    slug: "custom-homes",
    description: "Fully custom mountain homes built from the ground up.",
    icon: Home,
  },
  {
    title: "Luxury Remodels",
    slug: "luxury-remodels",
    description: "High-end renovations for kitchens, baths, and whole homes.",
    icon: Hammer,
  },
  {
    title: "Design-Build Services",
    slug: "design-build",
    description: "Integrated design + construction under one contract.",
    icon: PenTool,
  },
  {
    title: "Additions & Expansions",
    slug: "additions",
    description: "Seamless home additions that match existing architecture.",
    icon: Ruler,
  },
];

export const LOCATIONS = [
  "Estes Park, CO",
  "Loveland, CO",
  "Boulder, CO",
  "Fort Collins, CO",
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Session",
    description: "We meet to understand your vision, land, budget, and timeline.",
  },
  {
    number: "02",
    title: "Concept & Feasibility",
    description: "Preliminary designs are created alongside a high-level budget analysis.",
  },
  {
    number: "03",
    title: "Design & Selections",
    description: "Final plans, material selections, and engineering are completed.",
  },
  {
    number: "04",
    title: "Permitting & Construction",
    description: "We handle permits and manage the full construction process with weekly updates.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Detailed walkthrough, warranty handoff, and post-build support.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "The Prairie Horizon",
    location: "Loveland, CO",
    features: ["Vaulted Cedar Ceilings", "Floor-to-Ceiling Windows", "Radiant Heated Floors"],
    image: "https://picsum.photos/id/15/800/600",
    description: "A modern prairie-style home designed to capture expansive mountain views while maintaining warmth and comfort year-round. Built for a retired couple seeking low maintenance and luxury."
  },
  {
    id: 2,
    name: "The Modern Farmhouse",
    location: "Boulder, CO",
    features: ["Open-Concept Kitchen", "Smart Home Automation", "Energy-Efficient Envelope"],
    image: "https://picsum.photos/id/28/800/600",
    description: "A contemporary take on classic farmhouse design, blending clean lines with natural materials for a growing family focused on sustainability and functionality."
  },
  {
    id: 3,
    name: "Alpine Retreat",
    location: "Estes Park, CO",
    features: ["Timber Frame Accents", "Outdoor Living Deck", "Stone Fireplace"],
    image: "https://picsum.photos/id/29/800/600",
    description: "A luxury mountain retreat designed as a second home, emphasizing indoor-outdoor living and dramatic alpine aesthetics."
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is the cost per square foot for a custom home in 2025?",
    answer: "Custom home costs vary significantly based on finishes and site conditions, typically ranging from $450 to $700+ per sq ft in Northern Colorado. We recommend starting with our Discovery Session for a personalized estimate rather than relying on generic averages."
  },
  {
    question: "Do I need to own land before contacting you?",
    answer: "Ideally, yes. However, we offer land feasibility consulting to help you evaluate potential lots before purchase to ensure they are suitable for your build requirements."
  },
  {
    question: "How long does the custom home building process take?",
    answer: "From design to key handover, a typical custom project takes 12-18 months. The design and permitting phase usually requires 4-6 months, while construction takes 8-12 months depending on complexity and weather."
  }
];

export const ABOUT_PAGE = {
  founderName: "John Reynolds",
  founderBio: "Started as a framing carpenter in 1995 and built Summit Ridge on craftsmanship, transparency, and long-term client relationships.",
  coreValues: ["Craftsmanship", "Transparency", "Reliability", "Long-Term Value"],
};

export const CAREERS_PAGE = {
  hiringEmail: "careers@summitridgebuilders.com",
  culturePitch: "Tight-knit team, no weekend work, paid training, clear growth paths.",
  openRoles: ["Site Superintendent", "Project Manager"],
};

export const PARTNERSHIPS_PAGE = {
  realtorIncentive: "3% Commission on Base Contract Value",
  tradePromise: "Net-15 Payment Terms, Clear Scopes, Long-Term Work",
};

export const REFERRAL_PROGRAM = {
  incentiveType: "Cash",
  incentiveValue: "$1,500 Referral Bonus",
  trigger: "Paid when referred project breaks ground",
};
