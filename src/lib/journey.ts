                       export type JourneyCategory = "education" | "industry" | "community" | "teaching" | "leadership";

export interface JourneyEntry {
  id: string;
  category: JourneyCategory;
  title: string;
  organization: string;
  period: string;
  description: string;
  role?: string;
  mission?: string;
  website?: string;
  focus?: string[];
}

export const journey: JourneyEntry[] = [
  {
    id: "school",
    category: "education",
    title: "Where curiosity began",
    organization: "Hamayoun Shaheed High school",
    period: "2009-2020",
    description: "My school years sparked an interest in technology, learning, and problem solving—an early curiosity about how things work and how to build them.",
  },
  {
    id: "university",
    category: "education",
    title: "Learning to build together",
    organization: "Kabul Polytechnic University",
    period: "2021-2025",
    website: "https://kpu.edu.af/",
    description: "University gave me space to deepen my technical knowledge, explore software development, and grow through teamwork and community activities.",
  },
  {
    id: "ViraNawawaran ICT",
    category: "industry",
    title: "A first step into industry",
    organization: "Vira Nawawaran ICT",
    period: "04/2024-07/2024",
    description: "My first internship connected learning with practice: exposure to professional workflows, ICT environments, teamwork, and real-world problem solving.",
  },
  {
    id: "etisalat",
    category: "industry",
    title: "A wider perspective",
    organization: "Etisalat Afghanistan",
    period: "07/2024-08/2025",
    description: "My next industry experience introduced me to a larger telecommunications and technology environment, broadening my professional perspective.",
  },
  {
    id: "awcc",
    category: "industry",
    title: "Continuing to grow",
    organization: "Afghan Wireless Communication Company (AWCC)",
    period: "06/21/2026-Up to date",
    description: "A further stage of professional and technical development within Afghanistan’s telecommunications sector, building on my earlier industry exposure.",
  },
  {
    id: "community",
    category: "community",
    title: "Culture, science & opportunity",
    organization: "Akhtar-e-Taban Scientific and Cultural Organization",
    period: "2024-up to date",
    role: "Active member",
    description: "As an active member, I take part in a community that values knowledge sharing, cultural participation, and the growth of young Afghans.",
    mission: "Akhtar-e-Taban provides cultural, scientific, and capacity-building programs for Afghan girls and boys.",
    website: "https://www.facebook.com/100091518325210",
    focus: ["Cultural participation", "Scientific learning", "Capacity building"],
  },
  {
    id: "generation-of-thinkers",
    category: "community",
    title: "Connected by a belief in learning",
    organization: "Generation of Thinkers",
    period: "02/2025-up to date",
    role: "Member",
    description: "My membership connects me with a community committed to education and opportunity. It reflects my belief that access to knowledge and technology can help young people shape their futures.",
    mission: "Generation of Thinkers is a youth-led organization advancing education, digital access, and professional skills for youth and women, with roots in Afghanistan.",
    website: "https://www.gotglobal.org/",
    focus: ["Education access", "Digital inclusion", "Youth opportunity"],
  },
  {
    id: "teaching",
    category: "teaching",
    title: "Opening doors through teaching",
    organization: "Teaching web development to girls",
    role: "Web development educator",
    period: "",
    description: "Sharing web development knowledge is part of my commitment to accessible technology education, mentorship, and helping future developers take their first steps.",
  },
  {
    id: "navarise",
    category: "leadership",
    title: "Technology in service of learning",
    organization: "NavaRise Organization",
    role: "CTO",
    period: "07/12/2025-Up to date",
    description: "As CTO, I guide NavaRise’s technical direction, lead development, and make architectural decisions that support its educational mission. My work brings software development and community purpose together.",
    mission: "NavaRise offers free, accessible education and practical skills programs for Afghan youth, spanning language learning, digital skills, and leadership.",
    website: "https://navarise.vercel.app/",
    focus: ["Technical leadership", "Accessible learning", "Digital skills"],
  },
];
