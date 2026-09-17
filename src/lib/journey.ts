                       export type JourneyCategory = "education" | "industry" | "community" | "teaching" | "leadership";

export interface JourneyEntry {
  id: string;
  category: JourneyCategory;
  title: string;
  organization: string;
  period: string;
  description: string;
}

// Add your dates in "period" and your school/university names in "organization".
// Empty fields are intentionally hidden on the website.
export const journey: JourneyEntry[] = [
  {
    id: "school",
    category: "education",
    title: "Where curiosity began",
    organization: "Hamayoun Shaheeed High school",
    period: "2009-2020",
    description: "My school years sparked an interest in technology, learning, and problem solving—an early curiosity about how things work and how to build them.",
  },
  {
    id: "university",
    category: "education",
    title: "Learning to build together",
    organization: "Kabul Polytehcnic University",
    period: "2021-2025",
    description: "University gave me space to deepen my technical knowledge, explore software development, and grow through teamwork and community activities.",
  },
  {
    id: "vira",
    category: "industry",
    title: "A first step into industry",
    organization: "Vira Nawawaran ICT",
    period: "",
    description: "My first internship connected learning with practice: exposure to professional workflows, ICT environments, teamwork, and real-world problem solving.",
  },
  {
    id: "etisalat",
    category: "industry",
    title: "A wider perspective",
    organization: "Etisalat Afghanistan",
    period: "",
    description: "My next industry experience introduced me to a larger telecommunications and technology environment, broadening my professional perspective.",
  },
  {
    id: "awcc",
    category: "industry",
    title: "Continuing to grow",
    organization: "Afghan Wireless Communication Company (AWCC)",
    period: "2026-Up to date",
    description: "A further stage of professional and technical development within Afghanistan’s telecommunications sector, building on my earlier industry exposure.",
  },
  {
    id: "community",
    category: "community",
    title: "Growing through community",
    organization: "Akhtar-e-Taban Scientific and Cultural Organization",
    period: "",
    description: "Alongside university and my professional journey, I have been an active member, contributing through science, education, cultural activities, collaboration, and knowledge sharing.",
  },
  {
    id: "teaching",
    category: "teaching",
    title: "Opening doors through teaching",
    organization: "Teaching web development to girls",
    period: "",
    description: "Sharing web development knowledge is part of my commitment to accessible technology education, mentorship, and helping future developers take their first steps.",
  },
  {
    id: "navarise",
    category: "leadership",
    title: "CTO — Navarise",
    organization: "Co-building Navarise",
    period: "",
    description: "From learning and industry experience to technical leadership: as CTO since Navarise’s establishment, I help shape products, guide architectural decisions, and lead development.",
  },
];
