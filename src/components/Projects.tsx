import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";

export default function Projects() {
  return (
    <section className="mx-auto my-24 max-w-7xl px-5 md:px-12" id="projects">
      <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-foreground/60">Selected work</p>
          <h2 className="text-4xl tracking-tight md:text-6xl">Ideas put into practice.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/65">A collection of completed systems and websites, built around the people who use them.</p>
        </div>
        <Link href="/projects" className="shrink-0 text-sm underline underline-offset-8">All projects ↗</Link>
      </header>
      <ProjectCards />
      <Link href="https://github.com/4hmad4ali" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm underline underline-offset-4">More work on GitHub ↗</Link>
    </section>
  );
}
