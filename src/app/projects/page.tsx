import type { Metadata } from "next";
import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";

export const metadata: Metadata = { title: "Selected projects", description: "Management systems and websites by Ahmad Hussaini.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-12">
      <Link href="/#projects" className="text-sm text-foreground/65 hover:text-foreground">← Back to portfolio</Link>
      <header className="mb-14 mt-12 max-w-3xl">
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-foreground/60">The project collection</p>
        <h1 className="text-5xl tracking-tight md:text-7xl">Built for real work.</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/65">Management systems and websites, with a closer look at the interfaces and technologies behind each project.</p>
      </header>
      <ProjectCards />
    </main>
  );
}
