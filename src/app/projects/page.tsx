import type { Metadata } from "next";
import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import MotionReveal from "@/components/MotionReveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Selected projects", description: "Management systems and websites by Ahmad Hussaini.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-12">
      <Link href="/#projects" className="text-sm text-foreground/65 hover:text-foreground">← Back to portfolio</Link>
      <MotionReveal className="mb-14 mt-12">
        <header className="relative isolate overflow-hidden rounded-3xl border border-foreground/15 p-7 md:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-foreground/60">The project collection</p>
              <h1 className="text-5xl tracking-tight md:text-7xl">Built for real work.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/65">Management systems and websites, with a closer look at the decisions, interfaces, and technologies behind each project.</p>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10 text-center">
              <div className="bg-background px-6 py-5"><dt className="text-xs uppercase tracking-wider text-foreground/50">Projects</dt><dd className="mt-2 text-3xl">{String(projects.length).padStart(2, "0")}</dd></div>
              <div className="bg-background px-6 py-5"><dt className="text-xs uppercase tracking-wider text-foreground/50">Status</dt><dd className="mt-3 text-sm font-medium">Completed</dd></div>
            </dl>
          </div>
        </header>
      </MotionReveal>
      <ProjectCards />
    </main>
  );
}
