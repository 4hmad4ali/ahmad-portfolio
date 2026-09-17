"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "Gym Management System",
    description:
      "A streamlined platform for managing members, memberships, payments, and daily gym operations.",
    link: "/projects#gym-management-system",
    isExternal: false,
  },
  {
    title: "School & Kindergarten Management System",
    description:
      "A unified system for organizing student records, enrollment, administration, and school operations.",
    link: "/projects#school-kindergarten-management-system",
    isExternal: false,
  },
  {
    title: "NavaRise Website",
    description:
      "A responsive web experience that presents NavaRise with clear storytelling and a strong digital presence.",
    link: "/projects#navarise-website",
    isExternal: false,
  },
  {
    title: "Farm Management System",
    description: "Manage farm income, expenses, and stock in one place.",
    link: "",
    isExternal: true,
  },
  {
    title: "Taktaz Technologies Website",
    description: "A website for Taktaz Technologies and its GPS solutions.",
    link: "https://taktaztech.com",
    isExternal: true,
  },
  {
    title: "Dental Clinic Management System",
    description: "An MIS for managing patients, appointments, and clinic inventory.",
    link: "",
    isExternal: true,
  },
  {
    title: "Monograph and PID Management System",
    description: "This system was developed as a part of my thesis project for the completion of my bachelor's degree",
    link: "",
    isExternal: true,
  },
  {
    title: "GitHub",
    description: "See my open-source projects on GitHub",
    link: "https://github.com/4hmad4ali",
    isExternal: true,
  },
];

export default function Projects() {
  return (
    <section className="my-20 p-2.5" id="projects">
      <div className="px-2.5 md:px-20">
        <div className="flex items-center justify-center">
          <div className="border border-current mb-5 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
            Some Things I&apos;ve Built
          </div>
        </div>
        <div className="flex flex-col">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.title}
              target={project.isExternal ? "_blank" : "_self"}
              rel={project.isExternal ? "noreferrer" : undefined}
              className="border-b border-foreground/25 hover:border-foreground/80 py-8 transition-all duration-500 group"
              aria-label={`${project.title}${project.isExternal ? " (opens in new tab)" : ""}`}
            >
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-5xl md:text-7xl mb-2.5 relative pl-0 group-hover:pl-5 transition-all duration-500 tracking-wide">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-accent text-accent-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {project.title}
                  </h3>
                  <p className="text-2xl md:text-3xl text-foreground/90">
                    {project.description}
                  </p>
                </div>
                <div>
                  <FaArrowRight
                    aria-hidden="true"
                    className="rounded-full p-2.5 bg-accent text-accent-foreground -rotate-45 text-4xl transition-transform duration-300 group-hover:rotate-0"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
