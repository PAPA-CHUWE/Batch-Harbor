import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/landing-page/navbar";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore illustrative concepts across data engineering, AI, automation, and software engineering by Batch-Harbor.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B7B00]">
            Our Portfolio
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#191970] sm:text-6xl">
            Selected Work.
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-[#5D5D7D]">
            Explore illustrative concepts across data, artificial intelligence,
            and software engineering.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#777747]">
            Concept projects · illustrative examples
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                aria-label={`View ${project.title}`}
                className="group overflow-hidden rounded-2xl border border-[#191970]/10 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#191970]/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#191970]">
                  <Image
                    src={project.image}
                    alt={`${project.title} concept artwork`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs font-bold text-[#9B7B00]">
                      {project.category}
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-[#191970]">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#5D5D7D]">
                      {project.description}
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFFADE] text-[#191970] transition group-hover:bg-[#EFBF04]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
