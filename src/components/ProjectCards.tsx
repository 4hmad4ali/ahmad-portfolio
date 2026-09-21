"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";
import { projectTheme } from "@/lib/project-theme";
import TechnologyStack from "@/components/TechnologyStack";
import CornerSVG from "@/components/CornerSVG";
import styles from "./ProjectCards.module.css";

export default function ProjectCards() {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.collection}>
      {projects.map((project, index) => (
        <motion.article
          id={project.id}
          key={project.id}
          className={styles.project}
          style={projectTheme(index)}
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [16, 0] }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Link href={`/projects/${project.id}`} className={styles.link}>
            <div className={styles.visual}>
              <span className={styles.index}>
                <span className="font-ibmplexmono">{project.number}</span>
                <CornerSVG className={styles.indexRight} />
                <CornerSVG className={styles.indexBottom} />
              </span>
              {project.screenshot ? (
                <div className={styles.screen}>
                  <Image
                    src={project.screenshot}
                    alt={project.screenshotAlt ?? project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 60vw, 700px"
                    className={styles.screenshot}
                  />
                </div>
              ) : (
                <div className={styles.overview}>
                  <span className={styles.bigNumber} aria-hidden="true">{project.number}</span>
                  <ul className={styles.highlights} aria-label="Project highlights">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight}><span aria-hidden="true" />{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <span className={styles.category}>
                {project.category}
                <CornerSVG className={styles.categoryTop} />
                <CornerSVG className={styles.categoryLeft} />
              </span>
            </div>
            <div className={styles.details}>
              <div className={styles.heading}>
                <h3>{project.title}</h3>
                <span className={styles.arrow} aria-hidden="true"><FaArrowRight /></span>
              </div>
              <p className={styles.summary}>{project.summary}</p>
              {project.technologies.length > 0 && <TechnologyStack technologies={project.technologies} compact />}
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
