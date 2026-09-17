"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaPeopleGroup, FaChalkboardUser, FaCodeBranch } from "react-icons/fa6";
import { journey, type JourneyEntry } from "@/lib/journey";

const categories = {
  education: { label: "Education", icon: FaGraduationCap },
  industry: { label: "Industry experience", icon: FaBriefcase },
  community: { label: "Community", icon: FaPeopleGroup },
  teaching: { label: "Teaching & mentorship", icon: FaChalkboardUser },
  leadership: { label: "Technical leadership", icon: FaCodeBranch },
};

function Milestone({ entry, index }: { entry: JourneyEntry; index: number }) {
  const reducedMotion = useReducedMotion();
  const { label, icon: Icon } = categories[entry.category];
  const featured = entry.category === "leadership";
  const community = entry.category === "community" || entry.category === "teaching";

  return (
    <motion.li
      initial={false}
      whileInView={reducedMotion ? undefined : { y: [12, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative pl-12 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
    >
      <span aria-hidden="true" className="absolute left-0 top-8 z-10 flex size-8 items-center justify-center rounded-full border border-accent/60 bg-background text-accent md:left-1/2 md:-translate-x-1/2">
        <Icon className="size-3.5" />
      </span>
      <article className={`min-w-0 rounded-3xl border p-6 transition-colors duration-300 md:p-8 ${index % 2 ? "md:col-start-2" : "md:col-start-1"} ${featured ? "border-accent/60 bg-accent/10" : community ? "border-accent/25 bg-accent/5" : "border-foreground/15 bg-foreground/[0.02]"} hover:border-accent/60`}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs leading-relaxed">
          <span className="uppercase tracking-[0.14em] text-foreground/65">{label}</span>
          {entry.period && <span className="rounded-full border border-foreground/15 px-3 py-1 font-ibmplexmono">{entry.period}</span>}
        </div>
        <h3 className="text-2xl tracking-tight md:text-3xl">{entry.title}</h3>
        {entry.organization && <p className="mt-3 text-sm font-medium leading-relaxed">{entry.organization}</p>}
        <p className="mt-5 text-sm leading-loose text-foreground/70 md:text-base">{entry.description}</p>
        {featured && <p className="mt-6 border-t border-accent/25 pt-4 text-xs uppercase tracking-[0.14em] text-foreground/65">Learning continues. Building continues.</p>}
      </article>
    </motion.li>
  );
}

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 75%"] });

  return (
    <section id="journey" aria-labelledby="journey-heading" className="mx-auto my-24 max-w-7xl scroll-mt-28 px-5 md:px-12">
      <header className="mx-auto mb-14 max-w-2xl text-center">
        <span className="mb-6 inline-flex rounded-full border border-current px-3 py-1.5 text-sm uppercase">My Journey</span>
        <h2 id="journey-heading" className="text-4xl tracking-tight md:text-6xl">A path still unfolding.</h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/70">Shaped by learning, building, teaching, and the communities I grow with.</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/55">Chapters of growth, with community and mentorship woven throughout.</p>
      </header>
      <div ref={timelineRef} className="relative pb-2">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-4 top-8 w-px bg-foreground/15 md:left-1/2">
          <motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY: reducedMotion ? 1 : scrollYProgress }} />
        </div>
        <ol className="space-y-8">
        {journey.map((entry, index) => <Milestone key={entry.id} entry={entry} index={index} />)}
        </ol>
      </div>
    </section>
  );
}
