
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Database,
  Workflow,
  BarChart3,
  Code2,
  Lightbulb,
  Target,
  Zap,
  Headset,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data",
    subtitle: "Engineering",
    position:
      "lg:left-[22%] lg:top-[2%] lg:-rotate-[9deg]",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine",
    subtitle: "Learning",
    position:
      "lg:left-[62%] lg:top-[13%] lg:-rotate-[7deg]",
  },
  {
    icon: Cloud,
    title: "Cloud",
    subtitle: "Engineering",
    position:
      "lg:left-[35%] lg:top-[33%] lg:rotate-[8deg]",
  },
  {
    icon: Workflow,
    title: "Intelligent",
    subtitle: "Automation",
    position:
      "lg:left-[69%] lg:top-[43%] lg:rotate-[8deg]",
  },
  {
    icon: BarChart3,
    title: "Data",
    subtitle: "Analytics",
    position:
      "lg:left-[24%] lg:top-[65%] lg:rotate-[10deg]",
  },
  {
    icon: Code2,
    title: "Software",
    subtitle: "Development",
    position:
      "lg:left-[61%] lg:top-[73%] lg:rotate-[10deg]",
  },
] as const;

const strengths = [
  {
    icon: Lightbulb,
    title: "Creative",
    subtitle: "Solutions",
  },
  {
    icon: Target,
    title: "Quality",
    subtitle: "Engineering",
  },
  {
    icon: Zap,
    title: "Efficient",
    subtitle: "Delivery",
  },
  {
    icon: Headset,
    title: "Collaborative",
    subtitle: "Approach",
  },
] as const;

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden bg-white px-5 py-20 text-[#191970] sm:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#9B7B00]">
              WHAT WE DO
            </p>

            <h2 className="relative tracking-[-0.075em]">
              <span className="block text-5xl font-normal leading-none sm:text-6xl">
                Our
              </span>

              <span className="relative inline-block text-[clamp(4.5rem,11vw,10rem)] font-extrabold leading-[0.97]">
                Solu
                <span className="text-[#EFBF04]">
                  tions
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 500 36"
                  fill="none"
                  className="absolute -bottom-5 left-[8%] w-[75%] text-[#EFBF04]"
                >
                  <path
                    d="M8 27C120 5 330 0 492 16"
                    stroke="currentColor"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Reference-style supporting copy */}
          <div className="max-w-sm border-l-2 border-[#191970] pl-6 lg:mt-16">
            <p className="text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              Turning complex ideas
              <br />
              into{" "}
              <span className="font-extrabold text-[#D4A600]">
                intelligent
              </span>
              <br />
              engineering solutions.
            </p>
          </div>
        </div>

        {/* 3D SERVICE COMPOSITION */}
        <div className="relative mx-auto mt-20 max-w-[1120px] sm:mt-24 lg:mt-12">

          {/* Decorative atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-[35%] top-[20%] size-[360px] rounded-full bg-[#EFBF04]/[0.055] blur-[90px]" />
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:block lg:h-[650px]">

            {services.map(
              ({ icon: Icon, title, subtitle, position }) => (
                <Link
                  key={`${title}-${subtitle}`}
                  href="#contact"
                  aria-label={`Discuss ${title} ${subtitle}`}
                  className={`
                    group relative z-10
                    flex min-h-[116px] items-center
                    gap-4 rounded-[22px]
                    border border-[#191970]/[0.07]
                    bg-white px-5 py-5

                    shadow-[
                      0_5px_0_#EFBF04,
                      0_11px_0_#D6A900,
                      0_21px_30px_rgba(25,25,112,0.12)
                    ]

                    transition-[transform,box-shadow]
                    duration-300 ease-out
                    hover:z-30
                    hover:-translate-y-2
                    hover:shadow-[0_9px_0_#EFBF04,0_16px_0_#D6A900,0_26px_40px_rgba(25,25,112,0.17)]

                    lg:absolute lg:w-[335px]
                    lg:hover:rotate-0
                    ${position}
                  `}
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#191970] text-[#EFBF04] shadow-[0_5px_12px_rgba(25,25,112,0.15)]">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold leading-tight tracking-[-0.035em]">
                      {title}
                      <br />
                      {subtitle}
                    </h3>
                  </div>
                </Link>
              )
            )}

            {/* PHOTOREALISTIC REACHING HAND
                Placed above tiles visually.
                Non-interactive, so cards stay clickable.
            */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[11%]
                top-[17%]
                z-20
                hidden
                h-[490px]
                w-[480px]
                lg:block
                xl:-left-[17%]
                xl:h-[580px]
                xl:w-[570px]
              "
            >
              <Image
                src="/images/reaching-hand.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 570px, 480px"
                className="
                  object-contain
                  object-left
                  drop-shadow-[0_16px_15px_rgba(25,25,112,0.10)]
                "
              />
            </div>

          </div>

          {/* Mobile/tablet hand intentionally hidden
              to preserve readability and card access. */}
        </div>

        {/* WHY BATCH-HARBOR */}
        <div className="relative mt-12 lg:mt-8">

          <div className="flex items-center justify-center gap-6">
            <span className="h-px w-16 bg-[#191970]/35 sm:w-28" />

            <h3 className="text-center text-lg font-medium tracking-[0.13em] sm:text-xl">
              Why Batch-Harbor?
            </h3>

            <span className="h-px w-16 bg-[#191970]/35 sm:w-28" />
          </div>

          {/* Four reference-style strengths */}
          <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-y-9 md:grid-cols-4 md:gap-y-0">
            {strengths.map(
              ({ icon: Icon, title, subtitle }, index) => (
                <div
                  key={title}
                  className={`
                    relative flex flex-col items-center
                    justify-center px-4 text-center
                    ${
                      index > 0
                        ? "md:border-l md:border-[#191970]/15"
                        : ""
                    }
                  `}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.7}
                    className="text-[#D4A600]"
                    aria-hidden="true"
                  />

                  <p className="mt-3 text-sm font-bold leading-tight">
                    {title}
                    <br />
                    {subtitle}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center justify-center gap-4 rounded-[28px] border border-[#EFBF04] bg-white px-5 py-4 sm:flex-row sm:rounded-full sm:gap-8">

          <Link
            href="#contact"
            className="group flex items-center gap-3 text-sm font-bold transition-colors hover:text-[#B58E00]"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#EFBF04] text-[#191970]">
              <Mail size={18} />
            </span>

            Let's discuss your project
          </Link>

          <span className="hidden h-8 w-px bg-[#191970]/20 sm:block" />

          <Link
            href="#contact"
            className="group flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#B58E00]"
          >
            Explore collaboration
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
