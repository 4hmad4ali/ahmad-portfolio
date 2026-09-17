import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaCheck } from "react-icons/fa6";
import { projects } from "@/lib/projects";
import TechnologyStack from "@/components/TechnologyStack";
import MotionReveal from "@/components/MotionReveal";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { title: project.title, description: project.summary, url: `/projects/${project.id}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const galleryImages = project.screenshots ?? (project.screenshot ? [{
    src: project.screenshot,
    alt: project.screenshotAlt ?? `${project.title} interface`,
    label: "Project interface",
  }] : []);

  return (
    <main className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-24 pt-32 md:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-16 -z-10 size-96 rounded-full bg-accent/10 blur-3xl" />
      <Link href="/#projects" className="inline-flex items-center gap-3 text-sm text-foreground/65 hover:text-foreground">
        <FaArrowLeft aria-hidden="true" /> Back to projects
      </Link>
      <MotionReveal className="mb-12 mt-14">
        <header className="border-b border-foreground/15 pb-12">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-foreground">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" /> Completed
            </span>
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <span>{project.number} of {String(projects.length).padStart(2, "0")}</span>
          </div>
          <h1 className="max-w-5xl text-4xl tracking-tight sm:text-5xl lg:text-7xl">{project.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl">{project.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform motion-safe:hover:-translate-y-0.5">
                Visit live website <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            )}
            <span className="rounded-full border border-foreground/15 px-5 py-3 text-sm text-foreground/65">
              {project.technologies.length > 0 ? `${project.technologies.length} technologies` : "Case study"}
            </span>
          </div>
        </header>
      </MotionReveal>
      {galleryImages.length > 0 && (
        <MotionReveal delay={0.06}>
          <div className="mb-16">
            <ProjectGallery images={galleryImages} projectTitle={project.title} />
          </div>
        </MotionReveal>
      )}
      <MotionReveal delay={0.1}>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <section aria-labelledby="overview">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">01 / The project</p>
              <h2 id="overview" className="text-3xl tracking-tight">Purpose & approach</h2>
              <p className="mt-6 text-base leading-loose text-foreground/75">{project.description}</p>
            </section>
            <section className="mt-14" aria-labelledby="capabilities">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">02 / Capabilities</p>
              <h2 id="capabilities" className="text-2xl tracking-tight">What it brings together</h2>
              <ul className="mt-6 divide-y divide-foreground/10 border-y border-foreground/10">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-4 py-5 text-sm leading-relaxed">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><FaCheck aria-hidden="true" className="size-3" /></span>{highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {project.technologies.length > 0 && (
            <aside className="self-start rounded-3xl border border-foreground/15 bg-foreground/[0.02] p-7 lg:sticky lg:top-28 md:p-9" aria-labelledby="technology-stack">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">03 / Built with</p>
              <h2 id="technology-stack" className="mb-3 text-2xl tracking-tight">The technology stack</h2>
              <p className="mb-7 text-sm leading-relaxed text-foreground/60">The tools and frameworks behind this project.</p>
              <TechnologyStack technologies={project.technologies} />
            </aside>
          )}
        </div>
      </MotionReveal>
      <MotionReveal delay={0.12}>
        <nav aria-label="More projects" className="mt-20 grid overflow-hidden rounded-3xl border border-foreground/15 sm:grid-cols-2">
          <Link href={`/projects/${previousProject.id}`} className="group border-b border-foreground/15 p-6 transition-colors hover:bg-foreground/[0.03] sm:border-b-0 sm:border-r md:p-8">
            <span className="text-xs uppercase tracking-[0.16em] text-foreground/50">Previous project</span>
            <span className="mt-4 flex items-center gap-3 text-lg tracking-tight"><FaArrowLeft className="transition-transform group-hover:-translate-x-1" aria-hidden="true" /> {previousProject.title}</span>
          </Link>
          <Link href={`/projects/${nextProject.id}`} className="group p-6 text-right transition-colors hover:bg-foreground/[0.03] md:p-8">
            <span className="text-xs uppercase tracking-[0.16em] text-foreground/50">Next project</span>
            <span className="mt-4 flex items-center justify-end gap-3 text-lg tracking-tight">{nextProject.title} <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>
        </nav>
      </MotionReveal>
      <MotionReveal delay={0.12}>
        <footer className="mt-16 flex flex-col justify-between gap-6 rounded-3xl bg-foreground p-7 text-background sm:flex-row sm:items-center md:p-10">
          <div><p className="text-xs uppercase tracking-[0.16em] text-background/60">Start a conversation</p><p className="mt-3 text-2xl tracking-tight md:text-3xl">Have a project in mind?</p></div>
          <Link href="/#contact" className="rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground transition-transform motion-safe:hover:-translate-y-0.5">Let’s talk ↗</Link>
        </footer>
      </MotionReveal>
    </main>
  );
}
