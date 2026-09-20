"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";
import TechnologyStack from "@/components/TechnologyStack";
import CornerSVG from "@/components/CornerSVG";

const panelStyles = [
  "bg-[#dcb688]/80",
  "bg-accent/25",
  "bg-[#b9c8e5]",
  "bg-[#dcb688]/55",
];

export default function ProjectCards() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-2.5 md:grid-cols-2">
      {projects.map((project, index) => {
        const isFeatured = index === 0;
        const panelStyle = panelStyles[index % panelStyles.length];
        const imageShape = index % 2 === 0
          ? "rounded-tl-4xl rounded-tr-4xl rounded-br-4xl"
          : "rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl";
        const panelShape = index % 2 === 0
          ? "rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl"
          : "rounded-tl-4xl rounded-tr-4xl rounded-br-4xl";

        return (
          <motion.article
            id={project.id}
            key={project.id}
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            whileHover={reducedMotion ? undefined : { y: -7, transition: { duration: 0.2, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
            className={`group scroll-mt-28 ${isFeatured ? "md:col-span-2" : ""}`}
          >
            <Link
              href={`/projects/${project.id}`}
              className={`block h-full min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${isFeatured ? "lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(22rem,1fr)] lg:gap-2.5" : "space-y-2.5"}`}
            >
              <div className={`relative min-w-0 overflow-hidden border border-foreground/15 bg-accent/10 ${imageShape} ${isFeatured ? "aspect-video lg:min-h-[31rem] lg:aspect-auto" : "aspect-video"}`}>
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={project.screenshotAlt ?? project.title}
                    fill
                    sizes={isFeatured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-contain p-4 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between bg-gradient-to-br from-accent/30 via-accent/5 to-transparent p-6 md:p-8">
                    <span className="font-ibmplexmono text-xs uppercase tracking-widest text-foreground/60">Selected work / {project.number}</span>
                    <p className="max-w-sm text-2xl tracking-tight md:text-4xl">{project.title}</p>
                    <span className="text-xs uppercase tracking-widest text-foreground/60">Project overview ↗</span>
                  </div>
                )}
              </div>

              <div className={`relative flex min-w-0 flex-1 flex-col overflow-hidden border border-foreground/15 p-6 pb-24 md:p-8 md:pb-24 ${panelShape} ${panelStyle} ${isFeatured ? "mt-2.5 lg:mt-0" : ""}`}>
                <div className="mb-8 flex items-center justify-between gap-4 font-ibmplexmono text-[11px] uppercase tracking-[0.14em] opacity-65">
                  <span>{project.category}</span>
                  <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
                </div>
                <h3 className={`min-w-0 break-words tracking-tight ${isFeatured ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{project.title}</h3>
                <p className="mb-6 mt-4 text-sm leading-relaxed opacity-75">{project.summary}</p>
                {project.technologies.length > 0 && <div className="mt-auto"><TechnologyStack technologies={project.technologies} compact /></div>}
                <div className="mt-6 flex items-center justify-between border-t border-current/15 pt-5 text-xs opacity-75">
                  <span className="font-medium">View case study</span>
                  <span className="pr-12">{project.technologies.length > 0 ? `${project.technologies.length} technologies` : "Completed project"}</span>
                </div>

                <span className="absolute bottom-0 right-0 flex size-[4.75rem] items-center justify-center rounded-tl-4xl bg-background" aria-hidden="true">
                  <CornerSVG className="absolute -top-5 right-0 size-5 rotate-180 scale-105" />
                  <span className="flex size-12 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:scale-105">
                    <FaArrowRight className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </span>
                  <CornerSVG className="absolute -bottom-0 -left-5 size-5 rotate-180" />
                </span>
              </div>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
