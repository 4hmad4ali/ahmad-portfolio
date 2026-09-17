"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";
import TechnologyStack from "@/components/TechnologyStack";

export default function ProjectCards() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          id={project.id}
          key={project.id}
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          whileHover={reducedMotion ? undefined : { y: -7, transition: { duration: 0.2, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
          className={`group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-foreground/15 bg-foreground/[0.02] shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-foreground/5 ${index === 0 ? "md:col-span-2" : ""}`}
        >
          <Link href={`/projects/${project.id}`} className={`flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${index === 0 ? "md:grid md:grid-cols-[1.25fr_1fr]" : ""}`}>
            <div className={`relative aspect-video overflow-hidden bg-accent/10 ${index === 0 ? "border-b border-foreground/10 md:h-full md:min-h-[420px] md:border-b-0 md:border-r" : "border-b border-foreground/10"}`}>
              {project.screenshot ? (
                <Image src={project.screenshot} alt={project.screenshotAlt ?? project.title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-contain p-4 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]" />
              ) : (
                <div className="flex h-full flex-col justify-between bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-6 md:p-8">
                  <span className="font-ibmplexmono text-xs uppercase tracking-widest text-foreground/60">Selected work / {project.number}</span>
                  <p className="max-w-sm text-2xl tracking-tight md:text-4xl">{project.title}</p>
                  <span className="text-xs uppercase tracking-widest text-foreground/60">Project overview ↗</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between gap-4 font-ibmplexmono text-[11px] uppercase tracking-[0.14em] text-foreground/55">
                <span>{project.category}</span>
                <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
              </div>
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className={`${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"} tracking-tight`}>{project.title}</h3>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" aria-hidden="true" />
                </span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/65">{project.summary}</p>
              {project.technologies.length > 0 && <div className="mt-auto"><TechnologyStack technologies={project.technologies} compact /></div>}
              <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-5 text-xs text-foreground/60">
                <span className="font-medium text-foreground">View case study</span>
                <span>{project.technologies.length > 0 ? `${project.technologies.length} technologies` : "Completed project"}</span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
