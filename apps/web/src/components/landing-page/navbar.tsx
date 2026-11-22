
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Solutions", "#solutions"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionOffset = 140;
      let currentSection: string | null = null;

      if (pathname === "/") {
        for (const [, href] of links) {
          const section = document.querySelector<HTMLElement>(href);
          if (section && section.getBoundingClientRect().top <= sectionOffset) {
            currentSection = href;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = links[links.length - 1][1];
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <header
      className={`
        pointer-events-none fixed inset-x-0 z-50
        flex justify-center px-4
        transition-[top] duration-500 ease-in-out
        ${isScrolled ? "top-4" : "top-0"}
      `}
    >
      <nav
        aria-label="Main navigation"
        className={`
          pointer-events-auto
          flex w-full max-w-4xl items-center
          justify-between gap-4
          border border-white/10
          bg-foreground px-4 py-3
          text-background
          shadow-[0_12px_40px_rgba(0,0,0,0.18)]
          transition-[border-radius,box-shadow]
          duration-500 ease-in-out
          sm:gap-6 sm:px-4
          lg:gap-8
          ${
            isScrolled
              ? "rounded-[22px] shadow-2xl"
              : "rounded-b-[22px]"
          }
        `}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Batch-Harbor home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logos/white-batch-harbor-cropped.png"
            alt="Batch-Harbor — Engineering Data. Powering Intelligence."
            width={320}
            height={100}
            priority
            className="h-14 w-45 object-contain sm:w-[220px] lg:w-[250px]"
          />
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={pathname === "/" ? href : `/${href}`}
              aria-current={
                pathname === "/" && activeSection === href
                  ? "location"
                  : undefined
              }
              onClick={() => setActiveSection(href)}
              className={`
                relative whitespace-nowrap py-1
                text-[13px] transition-colors duration-200
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-[#EFBF04]
                ${
                  pathname === "/" && activeSection === href
                    ? "font-semibold text-[#EFBF04] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#EFBF04]"
                    : "font-medium text-white/60 hover:text-white"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={contactHref}
          className="
            inline-flex shrink-0 items-center
            justify-center gap-2
            whitespace-nowrap
            rounded-xl bg-white
            px-4 py-2.5
            text-[13px] font-bold
            text-[#191970]
            transition-all duration-200
            hover:bg-[#EFBF04]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#EFBF04]
          "
        >
          Let's talk
          <ArrowUpRight size={15} strokeWidth={2} />
        </Link>
      </nav>
    </header>
  );
}
