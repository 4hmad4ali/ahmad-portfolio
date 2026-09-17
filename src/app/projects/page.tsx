import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    id: "gym-management-system",
    number: "01",
    title: "Gym Management System",
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
  },
  {
    id: "school-kindergarten-management-system",
    number: "02",
    title: "School & Kindergarten Management System",
    summary: "A unified platform for the administration needs of schools and kindergartens.",
    description:
      "This system is designed to organize student records, enrollment, and administrative workflows in one place. It supports a clearer overview of school operations for teams working across both school and kindergarten programs.",
    highlights: ["Student and enrollment records", "Centralized administrative workflows", "Support for school and kindergarten operations"],
    technologies: ["Python", "Django 4.2", "MySQL", "Django Templates", "Tailwind CSS", "JavaScript", "Gunicorn", "WhiteNoise"],
    screenshot: "/images/School_project/داشبورد-کودکستان-گامAdmin panel.png",
    screenshotAlt: "School and Kindergarten Management System dashboard",
  },
  {
    id: "navarise-website",
    number: "03",
    title: "NavaRise Website",
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
  },
  {
    id: "farm-management-system",
    number: "04",
    title: "Farm Management System",
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
    summary: "A management information system for coordinating essential dental clinic workflows.",
    description:
      "The Dental Clinic Management System brings patients, appointments, and inventory into one system. It gives clinic staff a more organized way to manage operations and keep core records available when they are needed.",
    highlights: ["Patient record management", "Appointment coordination", "Inventory oversight"],
    technologies: ["Laravel 12", "Laravel Blade", "Tailwind CSS", "MySQL"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-5 pb-24 pt-32 md:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-3 text-sm uppercase tracking-wide text-foreground/70 transition-colors hover:text-foreground"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to portfolio
        </Link>

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-foreground/60">Selected work</p>
          <h1 className="text-5xl font-medium tracking-tight md:text-7xl">Completed projects</h1>
          <p className="mt-6 text-xl leading-relaxed text-foreground/75 md:text-2xl">
            A selection of digital products and web experiences built to make everyday work simpler.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              id={project.id}
              key={project.id}
              className="scroll-mt-28 rounded-3xl border border-foreground/15 p-7 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm text-foreground/55">{project.number}</span>
                <FaArrowRight aria-hidden="true" className="text-xl text-foreground/55" />
              </div>
              <h2 className="mt-10 text-3xl font-medium md:text-5xl">{project.title}</h2>
              <p className="mt-4 max-w-3xl text-xl leading-relaxed text-foreground/80">{project.summary}</p>
              <p className="mt-7 max-w-3xl leading-relaxed text-foreground/70">{project.description}</p>
              {project.screenshot && (
                <figure className="mt-8 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5">
                  <Image
                    src={project.screenshot}
                    alt={project.screenshotAlt ?? `${project.title} screenshot`}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 960px"
                  />
                </figure>
              )}
              <ul className="mt-8 flex flex-wrap gap-3" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/75">
                    {highlight}
                  </li>
                ))}
              </ul>
              {project.technologies.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm uppercase tracking-[0.16em] text-foreground/55">Technologies</h3>
                  <ul className="mt-3 flex flex-wrap gap-3" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology} className="rounded-full bg-foreground px-4 py-2 text-sm text-background">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground/25 px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                >
                  Visit website <FaArrowRight aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
