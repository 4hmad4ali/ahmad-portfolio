"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import "swiper/css";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Delivers high-quality System work and handles complex problems with focus and reliability.",
    author: "Abdul Aziz Hussaini",
    role: "CEO And founder of Hussaini's Brothers Farm",
    company: "Hussaini's Brothers Farm",
  },
  {
    quote:
      "Strong programming foundation, learns fast, and handles new challenges effectively.",
    author: "Faiz Mohmmad faqiry",
    role: "Professor at kabul Polytechnic University",
    company: "Kabul Polytechnic Universoity",
  },
  {
    quote:
      "Focused, driven, and communicates clearly. Shows the mindset of a strong web developer",
    author: "Raize Sahak",
    role: "CEO and Founder of Taktaz techoliges",
    company: "TazTaz Technologies",
  },
  {
    quote:
      "Keeps projects on track, meets deadlines, and maintains high quality standards and create the systems that are easy to maintain and scale.",
    author: "Dr. Mohmmad Tawoos",
    role: "CEO and Founder of Salehy Dental Clinic",
    company: "Salehy Dental Clinic",
  },
  {
    quote:
      "Understands complex problems quickly, writes clean code, and works well with others.",
    author: "Hussain Aqa Lashkari",
    role: "Software Engineer",
    company: "",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayDelay = 5000;
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType): void => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index: number): void => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section className="my-20 p-2.5" id="testimonials">
      <div className="px-2.5 md:px-20">
        <div className="flex items-center justify-center mb-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-foreground/35 hover:text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            What People Say
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            loop
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.author}-${index}`}>
                <div className="py-8 md:py-10">
                  <blockquote className="text-3xl md:text-5xl leading-normal text-foreground/90 mb-5">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-col">
                    <span className="text-lg text-foreground">
                      {testimonial.author}
                    </span>
                    <span className="text-base text-foreground/90">
                      {testimonial.role}
                      {testimonial.company && ` — ${testimonial.company}`}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress dots */}
          <div className="flex gap-2 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "bg-accent scale-110"
                    : "bg-foreground/25 hover:bg-foreground/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* LinkedIn link */}
          <div className="flex justify-center mt-8">
            <Link
              href="https://www.linkedin.com/in/ahmad-hussaini-995042336/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-foreground/90 hover:text-foreground transition-colors duration-300 group"
              aria-label="View more testimonials on LinkedIn (opens in new tab)"
            >
              <FaLinkedin className="text-xl transition-transform duration-300 group-hover:scale-110" />
              <span className="text-lg">View more on LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
