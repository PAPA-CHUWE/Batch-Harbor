import { ShieldCheck, Workflow, Zap } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Built for reliability",
    text: "Thoughtful systems you can depend on",
  },
  {
    icon: Workflow,
    title: "Designed for your team",
    text: "Practical tools that fit your workflow",
  },
  {
    icon: Zap,
    title: "Ready for what’s next",
    text: "Flexible foundations that scale",
  },
];

export function TrustIndicators() {
  return (
    <section
      aria-label="Our commitments"
      className="border-b border-[#191970]/10 bg-white"
    >
      <div className="mx-auto grid max-w-7xl divide-y divide-[#191970]/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-center gap-4 px-5 py-6 first:pl-0 last:pr-0"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#191970]">
              <Icon size={21} />
            </span>
            <div>
              <p className="font-bold text-[#191970]">{title}</p>
              <p className="mt-1 text-sm text-[#5d5d7d]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
