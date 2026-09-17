import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "@/lib/projects";
import TechnologyStack from "@/components/TechnologyStack";

export default function ProjectCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article id={project.id} key={project.id} className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-foreground/15 bg-foreground/[0.02]">
          <Link href={`/projects/${project.id}`} className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <div className="relative aspect-video overflow-hidden border-b border-foreground/10 bg-accent/10">
              {project.screenshot ? (
                <Image src={project.screenshot} alt={project.screenshotAlt ?? project.title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-contain p-4 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
              ) : (
                <div className="flex h-full flex-col justify-between p-6 md:p-8">
                  <span className="font-ibmplexmono text-xs uppercase tracking-widest text-foreground/60">Selected work / {project.number}</span>
                  <p className="max-w-sm text-2xl tracking-tight md:text-4xl">{project.title}</p>
                  <span className="text-xs uppercase tracking-widest text-foreground/60">Project overview ↗</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl tracking-tight">{project.title}</h3>
                <FaArrowRight className="mt-1 shrink-0 -rotate-45 text-accent transition-transform group-hover:rotate-0" aria-hidden="true" />
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/65">{project.summary}</p>
              <div className="mt-auto"><TechnologyStack technologies={project.technologies} compact /></div>
              <span className="mt-6 text-sm font-medium">Explore project ↗</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
