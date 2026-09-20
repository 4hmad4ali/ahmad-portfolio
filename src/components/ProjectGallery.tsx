"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ProjectFrame from "@/components/ProjectFrame";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export default function ProjectGallery({
  images,
  projectTitle,
  projectNumber,
}: {
  images: GalleryImage[];
  projectTitle: string;
  projectNumber: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeImage = images[activeIndex];

  if (!activeImage) return null;

  return (
    <figure aria-label={`${projectTitle} interface gallery`}>
      <ProjectFrame label={`Project ${projectNumber}`} caption="A closer look">
        <div className="overflow-hidden rounded-xl border border-foreground/15 bg-background shadow-xl shadow-black/10">
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3 md:px-6">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff6b5e]" />
              <span className="size-2.5 rounded-full bg-[#f3c34d]" />
              <span className="size-2.5 rounded-full bg-accent" />
            </div>
            <span className="max-w-[60%] truncate font-ibmplexmono text-[11px] text-foreground/55">
              {activeImage.label}
            </span>
            <a
              href={activeImage.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${activeImage.label} screenshot in a new tab`}
              className="rounded-full p-2 text-foreground/55 transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
            >
              <FaArrowUpRightFromSquare
                className="size-3.5"
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeImage.src}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </ProjectFrame>

      {images.length > 1 && (
        <div
          className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4"
          role="group"
          aria-label="Choose a project screenshot"
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={reducedMotion ? undefined : { y: -3 }}
                whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                aria-pressed={isActive}
                aria-label={`Show ${image.label}`}
                className={`group overflow-hidden rounded-2xl border bg-foreground/[0.02] p-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-accent ${isActive ? "border-accent" : "border-foreground/10 hover:border-foreground/30"}`}
              >
                <span className="relative block aspect-video overflow-hidden rounded-xl bg-foreground/5">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 260px"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                </span>
                <span
                  className={`mt-2 block truncate px-1 text-xs ${isActive ? "font-medium text-foreground" : "text-foreground/60"}`}
                >
                  {image.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      )}

      <figcaption
        aria-live="polite"
        className="mt-4 flex items-center justify-between gap-4 text-xs leading-relaxed text-foreground/55"
      >
        <span>{activeImage.alt}</span>
        <span className="shrink-0 font-ibmplexmono">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  );
}
