import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import ProjectCards from "@/components/ProjectCards";

export default function Projects() {
  return (
    <section className="mx-auto my-24 max-w-7xl scroll-mt-32 px-5 md:px-12" id="projects">
      <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-foreground/60">Selected work</p>
          <h2 className="text-4xl tracking-tight md:text-6xl">Ideas put into practice.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/65">A collection of completed systems and websites, built around the people who use them.</p>
        </div>
        <Link href="/projects" className="shrink-0 text-sm underline underline-offset-8">All projects  </Link>
      </header>
      <ProjectCards />
      <Link
        href="https://github.com/4hmad4ali"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-14 flex w-full items-center justify-between gap-5 rounded-[2rem] bg-foreground p-6 text-background transition-colors hover:bg-accent hover:text-accent-foreground md:p-8"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background/15 transition-transform duration-300 group-hover:scale-105">
            <FaGithub className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs uppercase tracking-[0.16em] opacity-60">More work</span>
            <span className="mt-1 block text-xl tracking-tight md:text-2xl">Explore more projects on GitHub</span>
          </span>
        </span>
        <FaArrowUpRightFromSquare className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </Link>
    </section>
  );
}
