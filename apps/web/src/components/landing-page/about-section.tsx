
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  GitBranch,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const principles = [
  "Purpose-driven engineering",
  "Scalable by design",
  "Continuous innovation",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

        {/* LEFT — Editorial visual collage */}
        <div className="relative mx-auto w-full max-w-[570px]">

          <div className="relative h-[440px] sm:h-[540px]">

            {/* Main image — left */}
            <div className="absolute left-0 top-[13%] h-[55%] w-[43%] overflow-hidden rounded-2xl bg-[#191970] shadow-[0_18px_45px_rgba(25,25,112,0.12)]">
              <Image
                src="/images/data-engineering.png"
                alt="Data engineering infrastructure"
                fill
                sizes="(max-width: 640px) 45vw, 250px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#191970]/10" />
            </div>

            {/* Bottom image — right */}
            <div className="absolute bottom-[4%] right-[8%] h-[57%] w-[44%] overflow-hidden rounded-2xl bg-[#191970]/5 shadow-[0_18px_45px_rgba(25,25,112,0.10)]">
              <Image
                src="/images/ai-engineering.jpeg"
                alt="Artificial intelligence and software engineering"
                fill
                sizes="(max-width: 640px) 45vw, 250px"
                className="object-cover"
              />
            </div>

            {/* Top statistic / philosophy card */}
            <div className="absolute right-[8%] top-0 z-10 w-[43%] rounded-xl border border-[#191970]/[0.06] bg-white p-4 shadow-[0_12px_35px_rgba(25,25,112,0.06)] sm:p-5">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-[#EFBF04]/10 text-[#191970]">
                  <GitBranch size={18} />
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-[#EFBF04]"
                />
              </div>

              <p className="mt-4 text-lg font-extrabold tracking-tight text-[#191970] sm:text-xl">
                Built with purpose.
              </p>

              <p className="mt-1 text-[11px] leading-relaxed text-[#191970]/55 sm:text-xs">
                Engineering solutions for real-world challenges.
              </p>

              {/* Mini workflow */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1.5 flex-1 rounded-full bg-[#191970]" />
                <span className="h-1.5 flex-1 rounded-full bg-[#EFBF04]" />
                <span className="h-1.5 flex-1 rounded-full bg-[#191970]/15" />
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="absolute bottom-[3%] left-[5%] z-10 rounded-xl border border-[#191970]/[0.06] bg-white px-4 py-3 shadow-[0_12px_35px_rgba(25,25,112,0.06)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#191970]/45">
                Our focus
              </p>

              <div className="mt-2 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-lg bg-[#EFBF04]/15">
                  <Database
                    size={17}
                    className="text-[#191970]"
                  />
                </span>

                <div>
                  <p className="text-xs font-bold text-[#191970]">
                    Data. AI. Software.
                  </p>
                  <p className="text-[11px] text-[#191970]/50">
                    Engineering what matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div
              aria-hidden="true"
              className="absolute -left-10 bottom-[8%] -z-10 size-44 rounded-full bg-[#EFBF04]/[0.07] blur-3xl"
            />
          </div>
        </div>

        {/* RIGHT — About content */}
        <div className="max-w-xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#EFBF04]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B760D]">
              A Little About Us
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#191970] sm:text-5xl">
            Engineering Ideas
            <br />
            Into{" "}
            <span className="text-[#EFBF04]">
              Impact.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-7 text-base leading-8 text-[#41416E] sm:text-lg">
            At Batch-Harbor, we believe technology should
            solve meaningful problems, not create new ones.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#5D5D7D] sm:text-base">
            We focus on transforming complex data and
            ambitious ideas into reliable engineering
            solutions. From modern data pipelines to
            intelligent applications, our approach combines
            technical depth, practical thinking, and
            continuous innovation.
          </p>

          {/* Principles */}
          <div className="mt-7 space-y-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#C69B00]"
                />

                <span className="text-sm font-medium text-[#191970]">
                  {principle}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#solutions"
            className="group mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-[#EFBF04] px-7 py-3.5 text-sm font-bold text-[#191970] shadow-[0_10px_25px_rgba(239,191,4,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2B500]"
          >
            Explore More

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
