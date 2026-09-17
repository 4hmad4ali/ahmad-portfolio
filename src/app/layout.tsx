import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Ahmad Hussaini",
    default:
      "Ahmad Hussaini - Software Engineer | Laravel, Python, AI Engineering, TypeScript",
  },
  description:
    "Software engineer building scalable backend systems, RESTful APIs, and modern web applications with Python, TypeScript, React, and AI/LLM Engineering.",
  keywords: [
    "Ahmad Hussaini",
    "software engineer",
    "full stack developer",
    "Python developer",
    "TypeScript developer",
    "React developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "API development",
    "backend engineer",
    "AI engineer",
    "AI engineering",
    "AI integration",
    "LLM integration",
    "web development",
    "freelance developer",
  ],
  authors: [{ name: "Ahmad Hussaini" }],
  creator: "Ahmad Hussaini",
  publisher: "Ahmad Hussaini",
  category: "website",
  metadataBase: new URL("https://ahmadhussaini.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmad Hussaini - Software Engineer | Python, AI, TypeScript",
    description:
      "Software engineer building scalable backend systems, RESTful APIs, and modern web applications with Python, TypeScript, React, and AI/LLM Engineering.",
    url: "https://ahmadhussaini.dev",
    siteName: "Ahmad Hussaini - Software Engineer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Hussaini - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hussaini - Software Engineer",
    description:
      "Building scalable backend systems, RESTful APIs, and modern web apps with Python, TypeScript, React, and AI/LLM Engineering.",
    creator: "@ahmadhussainidev",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8F6FF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Hussaini",
    url: "https://ahmadhussaini.dev",
    image: "https://ahmadhussaini.dev/ahmadhussaini.png",
    jobTitle: "Software Engineer",
    description:
      "Software engineer building scalable backend systems, RESTful APIs, and modern web applications with Python, TypeScript, React, and AI/LLM Engineering.",
    sameAs: [
      "https://github.com/4hmad4ali",
      "https://linkedin.com/in/ahmad-hussaini-995042336/",
      "https://ahmadhussaini.dev.medium.com",
      "https://youtube.com/@ahmadhussainidev",
      "https://x.com/ahmadhussainidev",
      "https://codingwithahmad.com",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-stacksansnotch antialiased max-w-7xl px-2.5 pb-2.5 mx-auto bg-background text-foreground min-h-screen ease-in-out transition-colors duration-300`}
      >
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg"
        >
          Skip to main content
        </Link>
        <NextTopLoader
          height={5}
          color="#d9db4d"
          shadow="0 0 20px #d9db4d"
          showSpinner={false}
          easing={"ease-out"}
        />
        <ThemeProvider enableSystem={false}>
          <div className="w-full h-2.5 bg-background top-0 fixed z-50"></div>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
