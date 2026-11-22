import { ArrowRight, CircleHelp, Code2, Rocket, SearchCheck } from "lucide-react";

const steps = [
  {
    icon: CircleHelp,
    step: "01",
    title: "Understand",
    text: "We start by listening, mapping the challenge, and agreeing on what success should look like.",
  },
  {
    icon: SearchCheck,
    step: "02",
    title: "Shape the solution",
    text: "Together, we choose a clear, achievable path with the right architecture and milestones.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build with care",
    text: "We deliver in focused increments, sharing progress early and making quality part of the work.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch and learn",
    text: "We help your team adopt the solution and keep improving it as your needs evolve.",
  },
];

export function EngineeringApproach() {
  return (
    <section className="bg-[#191970] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EFBF04]">
            How we work
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A steady path from challenge to change.
          </h2>
          <p className="mt-5 leading-7 text-white/65">
            Clear communication, sound engineering, and a shared focus on outcomes
            at every stage.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, text }, index) => (
            <article
              key={step}
              className="relative rounded-2xl border border-white/15 bg-white/[0.04] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#EFBF04] text-[#191970]">
                  <Icon size={21} />
                </span>
                <span className="text-sm font-bold tracking-widest text-white/35">
                  {step}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-10 z-10 hidden rounded-full bg-[#191970] p-1 text-[#EFBF04] lg:block"
                  size={25}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
