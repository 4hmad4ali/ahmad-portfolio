import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaCheck } from "react-icons/fa6";
import { projects } from "@/lib/projects";
import TechnologyStack from "@/components/TechnologyStack";

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
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-12">
      <Link href="/#projects" className="inline-flex items-center gap-3 text-sm text-foreground/65 hover:text-foreground">
        <FaArrowLeft aria-hidden="true" /> Back to projects
      </Link>
      <header className="mb-12 mt-14 border-b border-foreground/15 pb-12">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground/60">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" /> Completed project / {project.number}
        </div>
        <h1 className="max-w-4xl text-4xl tracking-tight sm:text-5xl lg:text-7xl">{project.title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/65 md:text-xl">{project.summary}</p>
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground">
            Visit live website <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        )}
      </header>
      {project.screenshot && (
        <figure className="mb-16">
          <a href={project.screenshot} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${project.title} screenshot in a new tab`} className="block rounded-3xl border border-foreground/15 bg-foreground/5 p-3 md:p-6">
            <div className="relative aspect-video">
              <Image src={project.screenshot} alt={project.screenshotAlt ?? project.title} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-contain" />
            </div>
          </a>
          <figcaption className="mt-4 flex justify-between gap-4 text-xs leading-relaxed text-foreground/60">
            <span>{project.screenshotAlt}</span><span>Open image for full detail ↗</span>
          </figcaption>
        </figure>
      )}
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <section aria-labelledby="overview">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">01 / The project</p>
            <h2 id="overview" className="text-3xl tracking-tight">Purpose & approach</h2>
            <p className="mt-6 text-base leading-loose text-foreground/75">{project.description}</p>
          </section>
          <section className="mt-12" aria-labelledby="capabilities">
            <h2 id="capabilities" className="text-2xl tracking-tight">What it brings together</h2>
            <ul className="mt-6 divide-y divide-foreground/10">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-4 py-5 text-sm leading-relaxed">
                  <FaCheck aria-hidden="true" className="shrink-0 text-accent" />{highlight}
                </li>
              ))}
            </ul>
          </section>
        </div>
        {project.technologies.length > 0 && (
          <aside className="self-start rounded-3xl border border-foreground/15 bg-foreground/[0.02] p-7 md:p-9" aria-labelledby="technology-stack">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/50">02 / Built with</p>
            <h2 id="technology-stack" className="mb-3 text-2xl tracking-tight">The technology stack</h2>
            <p className="mb-7 text-sm leading-relaxed text-foreground/60">The tools and frameworks behind this project.</p>
            <TechnologyStack technologies={project.technologies} />
          </aside>
        )}
      </div>
      <footer className="mt-20 flex flex-col justify-between gap-6 border-t border-foreground/15 pt-10 sm:flex-row sm:items-center">
        <p className="text-2xl tracking-tight">Have a project in mind?</p>
        <Link href="/#contact" className="rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-accent-foreground">Let’s talk ↗</Link>
      </footer>
    </main>
  );
}
