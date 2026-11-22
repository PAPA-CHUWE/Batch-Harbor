import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/landing-page/navbar";
import { getProjectById, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#191970]">
        <section className="px-5 pb-10 pt-36 sm:px-8 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#191970]/65 transition hover:text-[#191970]"
            >
              <ArrowLeft size={17} />
              Back to projects
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B00]">
                {project.category}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5D5D7D]">
                {project.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#777747]">
                Illustrative concept project
              </p>
            </div>

            <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl bg-[#191970] sm:aspect-[16/8]">
              <Image
                src={project.image}
                alt={`${project.title} concept artwork`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <aside>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B7B00]">
                Project Details
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                The Overview.
              </h2>

              <div className="mt-8">
                <p className="text-sm font-bold">Technologies</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#191970]/10 bg-[#191970]/[0.035] px-4 py-2 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold">About the Project</h3>
                <p className="mt-4 leading-8 text-[#5D5D7D]">
                  {project.overview}
                </p>
              </div>

              <div className="border-t border-[#191970]/10 pt-10">
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <p className="mt-4 leading-8 text-[#5D5D7D]">
                  {project.challenge}
                </p>
              </div>

              <div className="border-t border-[#191970]/10 pt-10">
                <h3 className="text-2xl font-bold">Our Approach</h3>
                <p className="mt-4 leading-8 text-[#5D5D7D]">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#191970] px-5 py-20 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EFBF04]">
                Let&apos;s Collaborate
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Have something similar in mind?
              </h2>
            </div>
            <Link
              href="/#contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#EFBF04] px-7 py-4 text-sm font-bold text-[#191970] transition hover:bg-white"
            >
              Let&apos;s Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
