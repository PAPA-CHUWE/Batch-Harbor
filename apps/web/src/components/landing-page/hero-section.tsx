
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Sparkles,
  Layers3,
  CircleDot,
} from "lucide-react";

const capabilities = [
  "Data Engineering",
  "Artificial Intelligence",
  "Cloud & Automation",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-white text-[#191970]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#EFBF04]/[0.07] blur-[110px]" />

        <div className="absolute -right-48 top-1/3 h-[550px] w-[550px] rounded-full bg-[#191970]/[0.045] blur-[120px]" />

        <div className="absolute left-1/2 top-[45%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#EFBF04]/[0.035] blur-[130px]" />
      </div>

      {/* Decorative floating cards - desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden xl:block"
      >
        {/* Left card */}
        <div className="absolute left-[5%] top-[37%] w-[215px] -rotate-6 rounded-2xl border border-[#191970]/[0.08] bg-white/90 p-4 shadow-[0_20px_60px_rgba(25,25,112,0.07)] backdrop-blur-lg">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EFBF04]/15">
              <Database size={20} className="text-[#191970]" />
            </span>

            <div>
              <p className="text-sm font-bold">
                Data Engineering
              </p>
              <p className="mt-1 text-xs leading-5 text-[#191970]/55">
                Reliable pipelines.
                <br />
                Scalable systems.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-[#191970]/10 pt-3 text-[11px] font-medium text-[#191970]/60">
            <CircleDot size={12} className="text-[#EFBF04]" />
            Built for reliability
          </div>
        </div>

        {/* Right card */}
        <div className="absolute right-[5%] top-[34%] w-55 rotate-6 rounded-2xl border border-[#191970]/[0.08] bg-white/90 p-4 shadow-[0_20px_60px_rgba(25,25,112,0.07)] backdrop-blur-lg">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#191970]/[0.07]">
              <Sparkles size={20} className="text-[#EFBF04]" />
            </span>

            <div>
              <p className="text-sm font-bold">
                AI & Intelligence
              </p>
              <p className="mt-1 text-xs leading-5 text-[#191970]/55">
                Smarter workflows.
                <br />
                Better decisions.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-[#191970]/10 pt-3 text-[11px] font-medium text-[#191970]/60">
            <CircleDot size={12} className="text-[#EFBF04]" />
            Intelligence by design
          </div>
        </div>

        {/* Lower left card */}
        <div className="absolute bottom-[22%] left-[11%] -rotate-3 rounded-2xl border border-[#191970]/[0.08] bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(25,25,112,0.06)]">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#EFBF04]/15">
              <GitBranch size={18} />
            </span>
            <div>
              <p className="text-xs font-bold">Connected Systems</p>
              <p className="text-[11px] text-[#191970]/50">
                From source to insight
              </p>
            </div>
          </div>
        </div>

        {/* Lower right card */}
        <div className="absolute bottom-[23%] right-[10%] rotate-3 rounded-2xl border border-[#191970]/8 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(25,25,112,0.06)]">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#191970]/[0.07]">
              <Layers3 size={18} />
            </span>
            <div>
              <p className="text-xs font-bold">Modern Platforms</p>
              <p className="text-[11px] text-[#191970]/50">
                Engineered to scale
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pb-20 pt-36 text-center sm:px-8 sm:pt-40 lg:pb-24">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#EFBF04]/25 bg-[#EFBF04]/[0.07] px-4 py-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#191970] sm:text-xs">
            Engineering What's Next
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-250 text-[clamp(2.8rem,6.5vw,6.5rem)] font-semibold leading-[1.07] tracking-[-0.065em] text-[#191970]">
          Engineering Data.
          <br />
          <span className="relative inline-block">
            Powering{" "}
            <span className="text-[#EFBF04]">
              Intelligence.
            </span>

            {/* Subtle underline */}
            <svg
              aria-hidden="true"
              className="absolute -bottom-3 right-0 w-[62%] text-[#EFBF04]/60"
              viewBox="0 0 400 18"
              fill="none"
            >
              <path
                d="M4 12C100 2 240 2 396 10"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Supporting copy */}
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-[#191970]/60 sm:text-lg sm:leading-8 lg:text-xl">
          We transform complex data into reliable platforms,
          intelligent applications, and scalable digital
          solutions that move businesses forward.
        </p>

        {/* Actions */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="#solutions"
            className="
              group inline-flex min-h-13 w-full items-center justify-center gap-3
              rounded-full bg-[#EFBF04] px-8 py-3.5 text-sm font-bold text-[#191970]
              shadow-[0_8px_25px_rgba(239,191,4,0.18)] transition-all duration-300
              hover:-translate-y-0.5 hover:bg-[#e2b400]
              hover:shadow-[0_12px_30px_rgba(239,191,4,0.25)] sm:w-auto
            "
          >
            Explore Our Solutions
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href="#projects"
            className="
              group inline-flex min-h-13 w-full items-center justify-center gap-3
              rounded-full border border-[#191970]/15 bg-white px-8 py-3.5
              text-sm font-semibold text-[#191970] transition-all duration-300
              hover:-translate-y-0.5 hover:border-[#191970]/40
              hover:bg-[#191970]/[0.025] sm:w-auto
            "
          >
            View Our Work
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Capabilities strip */}
        <div className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:mt-14">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="inline-flex items-center gap-2 text-xs font-medium text-[#191970]/60 sm:text-sm"
            >
              <span className="flex size-5 items-center justify-center rounded-full border border-[#EFBF04]/40 bg-[#EFBF04]/10">
                <Check
                  size={11}
                  strokeWidth={2.5}
                  className="text-[#191970]"
                />
              </span>
              {capability}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <Link
          href="#about"
          aria-label="Scroll to learn more about Batch-Harbor"
          className="group mt-16 flex flex-col items-center gap-3 sm:mt-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#191970]/40">
            Scroll to Explore
          </span>

          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-[#191970]/15 p-1.5">
            <ArrowDown
              size={13}
              className="motion-safe:animate-bounce text-[#EFBF04]"
            />
          </div>
        </Link>
      </div>

      {/* Bottom boundary */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#191970]/10 to-transparent" />
    </section>
  );
}
