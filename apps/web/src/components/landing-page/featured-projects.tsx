"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

const layouts = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
] as const;

export function FeaturedProjects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const activeId = hovered ?? focused ?? expanded;

  return (
    <section id="projects" className="border-[#191970]/10 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#191970]/50">
              Selected Work
            </p>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#191970] md:text-5xl">
              Ideas brought to <span className="italic text-[#D4A600]">life.</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#5D5D7D]">
            Explore how data engineering, artificial intelligence, and modern software turn meaningful challenges into practical solutions.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-3 overflow-visible sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,180px)]">          {projects.map((project, index) => {
            const isExpanded = activeId === project.id;
            const isSquare = index === 2 || index === 3;
            const isBottomRow = index === 4 || index === 5;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                data-expanded={isExpanded}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setHovered(project.id);
                }}
                onPointerLeave={() => setHovered(null)}
                className={`group relative min-h-72 scroll-mt-24 lg:min-h-0 ${isExpanded ? "z-20" : "z-0"} ${layouts[index] ?? ""}`}
              >
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title}`}
                  aria-describedby={`project-${project.id}-description`}
                  onFocus={(event) => {
                    if (event.currentTarget.matches(":focus-visible")) setFocused(project.id);
                  }}
                  onBlur={() => setFocused(null)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setExpanded(null);
                      setHovered(null);
                      setFocused(null);
                    }
                  }}
                  className={`absolute isolate block h-full w-full overflow-hidden rounded-2xl border border-[#191970]/10 bg-[#191970] text-left text-white transition-[width,height,box-shadow] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFBF04] motion-reduce:transition-none ${index === 3 ? "right-0" : "left-0"} ${isBottomRow ? "bottom-0" : "top-0"} ${isExpanded ? "shadow-2xl lg:h-[372px]" : ""} ${isExpanded && isSquare ? "lg:w-[calc(200%+12px)]" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 570px, (min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-data-[expanded=true]:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#090B24]/95 via-[#191970]/20 to-transparent" />
                  <span aria-hidden="true" className="absolute inset-0 bg-[#191970]/40 opacity-0 transition-opacity duration-300 group-data-[expanded=true]:opacity-100 motion-reduce:transition-none" />
                  <span className="absolute right-5 top-5 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[#EFBF04] group-hover:text-[#191970]">
                    <ArrowUpRight size={19} aria-hidden="true" />
                  </span>
                  <span className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#EFBF04]">
                      {project.category}
                    </span>
                    <span className="block text-lg font-semibold leading-tight tracking-tight sm:text-xl">
                      {project.title}
                    </span>
                    <span className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 group-data-[expanded=true]:grid-rows-[1fr] group-data-[expanded=true]:opacity-100 motion-reduce:transition-none">
                      <span className="overflow-hidden">
                        <span id={`project-${project.id}-description`} className="block max-w-md pt-2 text-sm leading-relaxed text-white/90">
                          {project.description}
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-[#191970]/15 px-7 py-3.5 text-sm font-bold text-[#191970] transition-all duration-300 hover:border-[#EFBF04] hover:bg-[#EFBF04]/10"
          >
            Explore All Projects
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
