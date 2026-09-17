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
  },
  {
    id: "school-kindergarten-management-system",
    number: "02",
    title: "School & Kindergarten Management System",
    summary: "A unified platform for the administration needs of schools and kindergartens.",
    description:
      "This system is designed to organize student records, enrollment, and administrative workflows in one place. It supports a clearer overview of school operations for teams working across both school and kindergarten programs.",
    highlights: ["Student and enrollment records", "Centralized administrative workflows", "Support for school and kindergarten operations"],
  },
  {
    id: "navarise-website",
    number: "03",
    title: "NavaRise Website",
    summary: "A responsive website crafted to give NavaRise a clear and confident digital presence.",
    description:
      "The NavaRise Website focuses on communicating the brand clearly through a modern, responsive interface. It gives visitors an easy way to understand the organization, explore its offerings, and connect with the team.",
    highlights: ["Responsive, modern user experience", "Clear brand and service communication", "Designed for easy visitor navigation"],
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
              <ul className="mt-8 flex flex-wrap gap-3" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/75">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
