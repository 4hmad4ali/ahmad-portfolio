"use client";

import Logo from "@/components/Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";

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

function SocialLinks() {
  return (
    <ul className={styles.socials}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            aria-label={label}
            rel="noreferrer"
            className={styles.socialLink}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <span aria-hidden="true" className={styles.externalArrow}>
                
            </span>
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        buttonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) onClose();
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={wrapperRef}
      className={styles.mobileNav}
      data-open={isOpen}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          onClose();
      }}
    >
      <div className={styles.bar}>
        <Link
          href="/"
          aria-label="Ahmad Hussaini — home"
          className={styles.brand}
          onClick={onClose}
        >
          Ahmad<span>.</span>
          <svg
            className={styles.brandCornerRight}
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path d="M100 0H0v100C0 44.77 44.77 0 100 0Z" />
          </svg>
          <svg
            className={styles.brandCornerBottom}
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path d="M100 0H0v100C0 44.77 44.77 0 100 0Z" />
          </svg>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={styles.toggle}
        >
          {isOpen ? "Close" : "Menu"}
          <span
            className={styles.menuIcon}
            data-open={isOpen}
            aria-hidden="true"
          >
            <span />
            <span />
          </span>
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className={styles.panel}>
          <p className={styles.eyebrow}>Explore the portfolio</p>
          <nav aria-label="Mobile navigation">
            <ul className={styles.links}>
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = isNavItemActive(href, currentPath, activeHash);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={styles.navLink}
                      aria-current={
                        isActive
                          ? href.includes("#")
                            ? "location"
                            : "page"
                          : undefined
                      }
                      onClick={onClose}
                    >
                      {label}
                      <span aria-hidden="true" className={styles.linkArrow}>
                        {isActive ? "•" : "  "}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.footer}>
            <svg
              className={styles.footerCornerTop}
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path d="M100 0H0v100C0 44.77 44.77 0 100 0Z" />
            </svg>
            <svg
              className={styles.footerCornerLeft}
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path d="M100 0H0v100C0 44.77 44.77 0 100 0Z" />
            </svg>
            <SocialLinks />
          </div>
        </div>
      )}
    </div>
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
                    aria-current={
                      isActive
                        ? href.includes("#")
                          ? "location"
                          : "page"
                        : undefined
                    }
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
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sections = NAV_ITEMS.map((item) => getSectionHash(item.href))
      .filter(Boolean)
      .map((hash) => ({
        hash,
        element: document.querySelector<HTMLElement>(hash),
      }))
      .filter((section): section is { hash: string; element: HTMLElement } =>
        Boolean(section.element),
      );

    let frameId = 0;

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const viewportMarker = Math.min(220, window.innerHeight * 0.3);
        const isAtPageEnd =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;
        let current =
          isAtPageEnd && sections.some(({ hash }) => hash === "#contact")
            ? "#contact"
            : "";

        if (!current) {
          for (const { hash, element } of sections) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= viewportMarker && rect.bottom > viewportMarker) {
              current = hash;
              break;
            }
          }
        }

        setActiveHash((previous) =>
          previous === current ? previous : current,
        );
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

  return (
    <header
      role="banner"
      className="w-full fixed top-0 left-0 md:left-auto z-50 h-16 mt-0 md:mt-2.5"
    >
      <MobileNav
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onClose={closeMobileMenu}
        activeHash={activeHash}
        currentPath={pathname}
      />
      <DesktopNav activeHash={activeHash} currentPath={pathname} />
    </header>
  );
}
