export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  screenshot?: string;
  screenshotAlt?: string;
  screenshots?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  website?: string;
}

export const projects: Project[] = [
  {
    id: "gym-management-system",
    number: "01",
    title: "Gym Management System",
    category: "Desktop application",
    summary: "A practical operations hub built to make gym administration simpler and more organized.",
    description:
      "The Gym Management System brings member information, membership plans, payments, and everyday operational tasks into one focused workspace. It is designed to help gym staff spend less time managing records and more time supporting members.",
    highlights: ["Member and membership management", "Payment and plan tracking", "Clear day-to-day operational workflows"],
    technologies: [
      "Python",
      "PyWebView",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQLite",
      "PyQt6",
      "PyQt6-WebEngine",
      "Pillow",
      "QRCode",
      "PyZbar",
      "Jalali Date Picker",
      "PyInstaller",
      "Windows Installer",
    ],
    screenshot: "/images/gym_managment/Screenshot 2026-09-17 dashboard.png",
    screenshotAlt: "Gym Management System dashboard",
    screenshots: [
      {
        src: "/images/gym_managment/Screenshot 2026-09-17 dashboard.png",
        alt: "Gym Management System dashboard overview",
        label: "Dashboard",
      },
      {
        src: "/images/gym_managment/equipments and inventories.png",
        alt: "Gym equipment and inventory management screen",
        label: "Equipment & inventory",
      },
      {
        src: "/images/gym_managment/team managment .png",
        alt: "Gym team management screen",
        label: "Team management",
      },
      {
        src: "/images/gym_managment/setttigs.png",
        alt: "Gym Management System settings screen",
        label: "Settings",
      },
    ],
  },
  {
    id: "school-kindergarten-management-system",
    number: "02",
    title: "School & Kindergarten Management System",
    category: "Web platform",
    summary: "A unified platform for the administration needs of schools and kindergartens.",
    description:
      "This system is designed to organize student records, enrollment, and administrative workflows in one place. It supports a clearer overview of school operations for teams working across both school and kindergarten programs.",
    highlights: ["Student and enrollment records", "Centralized administrative workflows", "Support for school and kindergarten operations"],
    technologies: ["Python", "Django 4.2", "MySQL", "Django Templates", "Tailwind CSS", "JavaScript", "Gunicorn", "WhiteNoise"],
    screenshot: "/images/School_project/داشبورد-کودکستان-گامAdmin panel.png",
    screenshotAlt: "School and Kindergarten Management System dashboard",
    screenshots: [
      {
        src: "/images/School_project/داشبورد-کودکستان-گامAdmin panel.png",
        alt: "School and Kindergarten Management System administration dashboard",
        label: "Admin dashboard",
      },
      {
        src: "/images/School_project/معلومات-شاگردان-GAAM-08-13-2026_10_11_AM teacher.png",
        alt: "Student information management screen",
        label: "Student records",
      },
      {
        src: "/images/School_project/جدول-وقت-GAAM-08-13-2026_10_17_AM.png",
        alt: "School timetable management screen",
        label: "Timetable",
      },
      {
        src: "/images/School_project/پلانهای-درسی-GAAM-08-13-2026_10_14_AM.png",
        alt: "School lesson planning screen",
        label: "Lesson plans",
      },
    ],
  },
  {
    id: "navarise-website",
    number: "03",
    title: "NavaRise Website",
    category: "Non-profit website",
    summary: "A responsive website crafted to give NavaRise a clear and confident digital presence.",
    description:
      "The NavaRise Website focuses on communicating the brand clearly through a modern, responsive interface. It gives visitors an easy way to understand the organization, explore its offerings, and connect with the team.",
    highlights: ["Responsive, modern user experience", "Clear brand and service communication", "Designed for easy visitor navigation"],
    technologies: [
      "Next.js 15",
      "React 19",
      "React DOM",
      "JavaScript / JSX",
      "Tailwind CSS 3",
      "Custom CSS",
      "Framer Motion",
      "Lucide React",
      "Font Awesome",
      "PostCSS",
      "Autoprefixer",
      "ESLint",
      "Next.js Image Optimization",
      "Next.js SEO & Metadata",
      "PNPM / npm",
    ],
    website: "https://navarise.vercel.app/",
  },
  {
    id: "farm-management-system",
    number: "04",
    title: "Farm Management System",
    category: "Management platform",
    summary: "An operations platform for organizing farm finances, inventory, and everyday records.",
    description:
      "The Farm Management System helps keep income, expenses, and stock records organized in one place. It gives farm teams a practical overview of the information they need to manage daily operations with confidence.",
    highlights: ["Income and expense tracking", "Stock management", "Centralized farm records"],
    technologies: ["Python", "Next.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "taktaz-technologies-website",
    number: "05",
    title: "Taktaz Technologies Website",
    category: "Corporate website",
    summary: "A public website for Taktaz Technologies and its GPS solutions.",
    description:
      "The Taktaz Technologies Website presents the company and its GPS-focused services through a clear, accessible web experience. It helps visitors explore the business, understand its solutions, and get in touch.",
    highlights: ["Company and service presentation", "GPS solutions overview", "Accessible contact path"],
    technologies: [
      "React 19",
      "Vite",
      "React Router DOM",
      "React Helmet Async",
      "Tailwind CSS",
      "Custom CSS",
      "React Icons",
      "Recharts",
      "JavaScript / JSX",
      "HTML5",
      "PostCSS",
      "Autoprefixer",
      "JSON-LD / Schema.org",
      "Web App Manifest",
    ],
    website: "https://taktaztech.com",
  },
  {
    id: "dental-clinic-management-system",
    number: "06",
    title: "Dental Clinic Management System",
    category: "Web application",
    summary: "A management information system for coordinating essential dental clinic workflows.",
    description:
      "The Dental Clinic Management System brings patients, appointments, and inventory into one system. It gives clinic staff a more organized way to manage operations and keep core records available when they are needed.",
    highlights: ["Patient record management", "Appointment coordination", "Inventory oversight"],
    technologies: ["Laravel 12", "Laravel Blade", "Tailwind CSS", "MySQL"],
  },
  {
    id: "monograph-pid-management-system",
    number: "07",
    title: "Monograph and PID Management System",
    category: "Academic system",
    summary: "A management system developed as my bachelor's thesis project.",
    description: "This system was developed as part of my thesis for the completion of my bachelor's degree, focusing on monograph and PID management.",
    highlights: ["Monograph and PID management", "Bachelor's thesis project"],
    technologies: [],
  },
];
