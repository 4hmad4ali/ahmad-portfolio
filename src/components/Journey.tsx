"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaPeopleGroup, FaChalkboardUser, FaCodeBranch, FaAtom, FaMasksTheater, FaBookOpen, FaHandsHoldingCircle } from "react-icons/fa6";
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
      <article className={`min-w-0 rounded-3xl border p-6 transition-colors duration-300 md:p-8 ${index % 2 ? "md:col-start-2" : "md:col-start-1"} ${featured ? "border-accent/60 bg-accent/10" : "border-foreground/15 bg-foreground/[0.02]"} hover:border-accent/60`}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs leading-relaxed">
          <span className="uppercase tracking-[0.14em] text-foreground/65">{entry.role ?? label}</span>
          {entry.period && <span className="rounded-full border border-foreground/15 px-3 py-1 font-ibmplexmono">{entry.period}</span>}
        </div>
        <h3 className="text-2xl tracking-tight md:text-3xl">{entry.title}</h3>
        {entry.organization && <p className="mt-3 text-sm font-medium leading-relaxed">{entry.organization}</p>}
        <p className="mt-5 text-sm leading-loose text-foreground/70 md:text-base">{entry.description}</p>
        {entry.mission && <p className="mt-5 border-l-2 border-accent/50 pl-4 text-sm leading-loose text-foreground/65">{entry.mission}</p>}
        {entry.website && <a href={entry.website} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-sm text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore {entry.organization} <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
        {featured && <p className="mt-6 border-t border-accent/25 pt-4 text-xs uppercase tracking-[0.14em] text-foreground/65">Learning continues. Building continues.</p>}
      </article>
    </motion.li>
  );
}

const communityEntries = journey.filter((entry) => entry.category === "community" || entry.category === "teaching");
const communityThemes = [
  { label: "Science", icon: FaAtom },
  { label: "Culture", icon: FaMasksTheater },
  { label: "Collaboration", icon: FaPeopleGroup },
  { label: "Education", icon: FaBookOpen },
];

function CommunityChapter() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={false}
      whileInView={reducedMotion ? undefined : { y: [12, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative py-6 pl-12 md:pl-0 md:pt-16"
    >
      <span aria-hidden="true" className="absolute left-0 top-14 z-10 flex size-8 items-center justify-center rounded-full border border-[#dcb688] bg-background text-[#94602d] dark:text-[#dcb688] md:left-1/2 md:top-2 md:-translate-x-1/2">
        <FaHandsHoldingCircle className="size-4" />
      </span>
      <section aria-labelledby="community-chapter-heading" className="relative isolate overflow-hidden rounded-3xl border border-[#dcb688]/50 bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#dcb688]/20 via-[#dcb688]/5 to-transparent" />
        <header className="p-6 pb-0 md:p-10 md:pb-0">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#825225] dark:text-[#dcb688]">Community, culture & mentorship</p>
          <h3 id="community-chapter-heading" className="text-3xl tracking-tight md:text-5xl">Beyond the code.</h3>
          <p className="mt-5 max-w-2xl text-sm leading-loose text-foreground/70 md:text-base">Alongside my professional journey, community work and teaching give me another way to contribute: sharing knowledge, celebrating culture, and helping others begin.</p>
          <ul aria-label="Community interests" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-b border-[#dcb688]/30 pb-7">
            {communityThemes.map(({ label, icon: Icon }) => (
              <li key={label} className="inline-flex items-center gap-2 text-xs leading-relaxed text-foreground/75">
                <Icon aria-hidden="true" className="size-4 text-[#94602d] dark:text-[#dcb688]" />{label}
              </li>
            ))}
          </ul>
        </header>
        <ul className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-10 md:pt-7">
          {communityEntries.map((entry) => {
            const { label, icon: Icon } = categories[entry.category];
            return (
              <li key={entry.id} className={`min-w-0 ${entry.category === "teaching" ? "md:col-span-2" : ""}`}>
                <article className={`flex h-full flex-col rounded-2xl border border-[#dcb688]/25 p-5 transition-colors duration-300 hover:border-[#dcb688]/70 md:p-7 ${entry.category === "teaching" ? "bg-[#dcb688]/10" : "bg-background/80"}`}>
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-xl bg-[#dcb688]/20 text-[#94602d] dark:text-[#dcb688]"><Icon className="size-5" /></span>
                    {entry.period && <span className="text-xs leading-relaxed text-foreground/65">{entry.period}</span>}
                  </div>
                  <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#825225] dark:text-[#dcb688]">{entry.role ?? label}</p>
                  <h4 className="text-xl tracking-tight md:text-2xl">{entry.organization || entry.title}</h4>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/75">{entry.title}</p>
                  <p className="mt-5 text-sm leading-loose text-foreground/70">{entry.description}</p>
                  {entry.mission && (
                    <div className="mt-5 border-t border-[#dcb688]/25 pt-5">
                      <p className="text-xs uppercase tracking-[0.12em] text-foreground/55">The organization’s mission</p>
                      <p className="mt-2 text-sm leading-loose text-foreground/65">{entry.mission}</p>
                    </div>
                  )}
                  {entry.focus && <ul aria-label="Areas of focus" className="mt-5 flex flex-wrap gap-2">{entry.focus.map((focus) => <li key={focus} className="rounded-full border border-[#dcb688]/30 px-3 py-1.5 text-xs leading-relaxed text-foreground/70">{focus}</li>)}</ul>}
                  {entry.website && <div className="mt-auto pt-6"><a href={entry.website} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-sm text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Explore the organization <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>}
                </article>
              </li>
            );
          })}
        </ul>
      </section>
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
        {journey.map((entry, index) => {
          if (entry.category === "community" || entry.category === "teaching") {
            return entry.id === communityEntries[0]?.id ? <CommunityChapter key="community-chapter" /> : null;
          }
          return <Milestone key={entry.id} entry={entry} index={index} />;
        })}
        </ol>
      </div>
    </section>
  );
}
