import { ArrowUpRight, BookOpen, Lightbulb, Newspaper } from "lucide-react";

const insights = [
  {
    icon: BookOpen,
    category: "FIELD NOTES",
    read: "6 min read",
    title: "A practical guide to building data pipelines you can trust",
    description:
      "Small choices in observability, testing, and ownership add up to resilient data workflows.",
  },
  {
    icon: Lightbulb,
    category: "PERSPECTIVE",
    read: "5 min read",
    title: "Where AI can make a difference in everyday operations",
    description:
      "Start with the real work: a grounded way to find valuable, responsible AI opportunities.",
  },
  {
    icon: Newspaper,
    category: "ENGINEERING",
    read: "4 min read",
    title: "Making the move from scattered reports to shared insight",
    description:
      "A reliable analytics foundation can help teams spend less time reconciling and more time acting.",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#777747]">
              Ideas and perspectives
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#191970] sm:text-4xl">
              Notes from the work.
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#5d5d7d]">
            Useful thinking on data, software, and putting emerging technology to
            work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {insights.map(({ icon: Icon, category, read, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-[#191970]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#191970]/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#191970] text-[#EFBF04]">
                  <Icon size={19} />
                </span>
                <span className="text-xs text-[#777747]">{read}</span>
              </div>
              <p className="mt-6 text-[10px] font-bold tracking-[0.15em] text-[#777747]">
                {category}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-6 text-[#191970]">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#5d5d7d]">
                {description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#191970] hover:text-[#777000]"
              >
                Read the insight
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
