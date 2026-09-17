import Link from "next/link";
import { FaArrowRight, FaLaravel, FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import Image from "next/image";
import Highlighter from "@/components/Highlighter";

export default function About() {
  return (
    <section className="my-20 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="border border-foreground mb-10 uppercase text-sm transition duration-300 inline-flex rounded-3xl py-1.5 px-2.5">
            about me
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
          <div className="relative w-full max-w-md md:max-w-sm lg:max-w-md aspect-4/5">
            <div
              className="
                relative w-full h-full
                mask-[url('/mask.svg')]
                mask-no-repeat
                mask-contain
                mask-center
              "
            >
              <Image
                src="/4.jpg"
                alt="Ahmad Hussaini Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-10 md:gap-20">
            <p className="text-3xl md:text-4xl leading-relaxed text-foreground/90">
              I&#39;m a software engineer with{" "}
              <Highlighter
                className="font-bold text-foreground whitespace-nowrap"
                size="md"
              >
                1+ years of experience
              </Highlighter>{" "}
              building and scaling web applications. I mainly work with{" "}
              <Link href="#skills">
                <Highlighter className="font-bold text-foreground" size="md">
                  <FaLaravel className="inline-block mr-0.5" />
                  Laravel
                </Highlighter>
              </Link>
              ,{" "}
              <Link href="#skills">
                <Highlighter className="font-bold text-foreground" size="md">
                  <AiOutlineOpenAI className="inline-block mr-0.5" />
                  Generative AI
                </Highlighter>
              </Link>{" "}
              and{" "}
              <Link href="#skills">
                <Highlighter
                  className="font-bold text-foreground whitespace-nowrap"
                  size="md"
                >
                  <FaReact className="inline-block mr-0.5" />
                  Frontend Development
                </Highlighter>
              </Link>{" "}
              to deliver high-quality web applications.
            </p>
            <Link
              href="#contact"
              className="group bg-accent rounded-4xl px-4.5 py-2.5 flex items-center gap-2.5 text-xl mt-2.5 w-fit text-foreground hover:text-foreground/80 hover:bg-accent/80 transition-colors duration-300"
            >
              Get in Touch
              <div className="border border-foreground rounded-full p-2.5 group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <FaArrowRight aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
