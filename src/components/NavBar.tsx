"use client";

import Logo from "@/components/Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
 /*  { href: "/apps", label: "Apps" }, */
] as const;

function getSectionHash(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex) : "";
}

function isNavItemActive(href: string, pathname: string, activeHash: string) {
  const sectionHash = getSectionHash(href);

  if (sectionHash) {
    if (pathname === "/") return activeHash === sectionHash;

    // Project detail and collection pages belong to the Projects navigation item.
    return sectionHash === "#projects" && pathname.startsWith("/projects");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const SOCIAL_LINKS = [
  // {
  //   href: "https://www.youtube.com/@mahdijafaridev",
  //   icon: FaYoutube,
  //   label: "YouTube",
  // },
  {
    href: "https://www.linkedin.com/in/ahmad-hussaini-995042336/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/4hmad4ali",
    icon: FaGithub,
    label: "GitHub",
  },
] as const;

function SocialLinks({ isMobile = false }: { isMobile?: boolean }) {
  const borderColor = isMobile ? "border-accent" : "border-foreground";

  return (
    <ul
      className={`flex text-2xl gap-2.5 px-2.5 py-1.5 rounded-full border-2 ${borderColor}`}
    >
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            aria-label={label}
            rel="noreferrer"
            className="hover:text-foreground/70 active:text-foreground transition-colors duration-300"
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNav({
  isOpen,
  onToggle,
  onClose,
  activeHash,
  currentPath,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activeHash: string;
  currentPath: string;
}) {
  return (
    <>
      <div className="flex md:hidden items-center justify-between w-full bg-background px-2.5 pt-1.5">
        <Logo />
        <div className={`flex items-center justify-center relative gap-2.5`}>
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="capitalize rounded-full border-2 p-2.5 font-medium hover:opacity-80 transition-opacity"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          {isOpen && (
            <svg
              className="w-6 h-6 inline-block fill-accent absolute rotate-180 bottom-0 left-13.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
            </svg>
          )}
          <div
            className={`flex items-center justify-center rounded-tl-[20px] rounded-tr-[20px] p-2.5 ${isOpen ? "bg-accent" : ""}`}
          >
            <SocialLinks isMobile={isOpen} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation menu"
          className="relative h-[90dvh] bg-accent mx-2.5 rounded-tl-4xl rounded-bl-4xl rounded-br-4xl text-4xl p-2.5"
        >
          <nav className="flex flex-col items-start my-2.5">
            <ul className="w-full flex flex-col items-start gap-5 px-2.5">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = isNavItemActive(href, currentPath, activeHash);

                return (
                  <li
                    key={href}
                    className="border-b border-foreground/50 py-2.5 w-full"
                  >
                    <Link
                      href={href}
                      className={`flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-200 ${
                        isActive
                          ? "bg-background text-foreground font-semibold shadow-sm"
                          : "hover:bg-background/20 hover:text-foreground/70"
                      }`}
                      aria-current={isActive ? (href.includes("#") ? "location" : "page") : undefined}
                      onClick={onClose}
                    >
                      {label}
                      <span
                        aria-hidden="true"
                        className={`size-2 rounded-full bg-foreground transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

function DesktopNav({
  activeHash,
  currentPath,
}: {
  activeHash: string;
  currentPath: string;
}) {
  return (
    <div className="hidden md:flex items-center w-full max-w-7xl pt-0 pb-0">
      <div className="relative bg-background h-16 md:h-20 my-auto flex items-center rounded-br-none md:rounded-br-4xl">
        <Logo />
        <svg
          className="top-full left-auto w-10 h-auto fill-background absolute hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
        </svg>
      </div>

      <div className="w-full relative">
        <svg
          className="top-0 left-auto w-10 h-auto absolute fill-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
        </svg>
        <nav className="px-2.5 h-16 md:h-20 flex items-center transition-[background-color_padding_translate_border-radius_height] duration-300">
          <ul className="flex items-center gap-3 lg:gap-8 py-5 px-3 lg:px-6 rounded-4xl bg-white/70 shadow-xs backdrop-blur-sm ml-1 dark:text-foreground/80">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = isNavItemActive(href, currentPath, activeHash);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative rounded-full px-3 py-2 transition-all duration-200 ${
                      isActive
                        ? "bg-accent font-semibold text-accent-foreground shadow-sm"
                        : "hover:bg-foreground/5 hover:text-foreground/70 active:text-foreground"
                    }`}
                    aria-current={isActive ? (href.includes("#") ? "location" : "page") : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }, index) => (
              <li
                key={href}
                className={`text-2xl ${index === 0 ? "ml-5" : "ml-[-8px]"}`}
              >
                <Link
                  href={href}
                  target="_blank"
                  aria-label={label}
                  rel="noreferrer"
                  className="hover:text-foreground/70 active:text-foreground transition-colors duration-200"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sections = NAV_ITEMS.map((item) => getSectionHash(item.href))
      .filter(Boolean)
      .map((hash) => ({ hash, element: document.querySelector<HTMLElement>(hash) }))
      .filter((section): section is { hash: string; element: HTMLElement } => Boolean(section.element));

    let frameId = 0;

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const viewportMarker = Math.min(220, window.innerHeight * 0.3);
        const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        let current = isAtPageEnd && sections.some(({ hash }) => hash === "#contact") ? "#contact" : "";

        if (!current) {
          for (const { hash, element } of sections) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= viewportMarker && rect.bottom > viewportMarker) {
              current = hash;
              break;
            }
          }
        }

        setActiveHash((previous) => (previous === current ? previous : current));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstLink = document.querySelector("#mobile-menu a");
      (firstLink as HTMLElement)?.focus();
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      role="banner"
      className="w-full fixed top-0 left-0 md:left-auto z-50 h-16 mt-0 md:mt-2.5"
    >
      <MobileNav
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onClose={() => setIsMobileMenuOpen(false)}
        activeHash={activeHash}
        currentPath={pathname}
      />
      <DesktopNav activeHash={activeHash} currentPath={pathname} />
    </header>
  );
}
