import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLaravel, FaPython } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";
import CornerSVG from "@/components/CornerSVG";
import styles from "./About.module.css";

const technologyGroups = [
  {
    label: "Backend",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    label: "Frontend",
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    label: "AI",
    technologies: [{ name: "Generative AI", icon: AiOutlineOpenAI }],
  },
];

export default function About() {
  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-heading"
    >
      <header className={styles.header}>
        <span className={styles.eyebrow}>
          <span aria-hidden="true" /> About me
        </span>
        <span className={styles.headerNote}>
          The person behind the projects
        </span>
      </header>

      <div className={styles.layout}>
        <figure className={styles.portrait}>
          <div className={styles.photo}>
            <Image
              src="/4.jpg"
              alt="Ahmad Hussaini"
              fill
              sizes="(max-width: 767px) 320px, (max-width: 1279px) 40vw, 420px"
              className={styles.image}
            />
            <div className={styles.experience}>
              <CornerSVG className={styles.cornerTop} />
              <span className={styles.experienceNumber}>1.5</span>
              <span className={styles.experienceLabel}>
                years of
                <br />
                experience
              </span>
              <CornerSVG className={styles.cornerLeft} />
            </div>
          </div>
          <figcaption className={styles.caption}>
            <span className={styles.name}>Ahmad Hussaini</span>
            <span className={styles.role}>Software engineer</span>
          </figcaption>
        </figure>

        <div className={styles.content}>
          <h2 id="about-heading" className={styles.title}>
            A practical mind.
            <br />
            <span>A builder at heart.</span>
          </h2>
          <p className={styles.introduction}>
            I’m Ahmad, a software engineer with{" "}
            <strong>1.5 years of experience</strong> turning real-world needs
            into reliable web applications and digital systems.
          </p>
          <p className={styles.description}>
            My work connects the logic behind an application with the experience
            people have using it—from organized data and dependable APIs to
            clear, responsive interfaces.
          </p>

          <div className={styles.stack}>
            <h3 className={styles.stackHeading}>The tools behind my work</h3>
            <dl className={styles.groups}>
              {technologyGroups.map(({ label, technologies }) => (
                <div className={styles.group} key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <ul aria-label={`${label} technologies`}>
                      {technologies.map(({ name, icon: Icon }) => (
                        <li key={name}>
                          <Icon aria-hidden="true" />
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.actions}>
            <Link href="#contact" className={styles.contact}>
              Let’s talk
              <span aria-hidden="true">
                <FaArrowRight />
              </span>
            </Link>
            <Link href="#journey" className={styles.journey}>
              Follow my journey <span aria-hidden="true"> </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
