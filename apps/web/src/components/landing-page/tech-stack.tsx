const stacks = [
  {
    category: "Data platforms",
    tools: ["PostgreSQL", "BigQuery", "Snowflake", "Databricks"],
  },
  {
    category: "Pipelines & orchestration",
    tools: ["Apache Airflow", "dbt", "Dagster", "Kafka"],
  },
  {
    category: "Cloud & infrastructure",
    tools: ["AWS", "Azure", "Docker", "Terraform"],
  },
  {
    category: "AI & application",
    tools: ["Python", "TypeScript", "FastAPI", "LangChain"],
  },
];

export function TechStack() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#777747]">
            The right tools for the job
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#191970]">
            Technology with a purpose.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-[#5d5d7d]">
            We choose proven tools to fit your context, your team, and the system
            you need to build. No one-size-fits-all stack.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {stacks.map(({ category, tools }) => (
            <div
              key={category}
              className="rounded-xl border border-[#191970]/10 bg-white p-5"
            >
              <h3 className="text-sm font-bold text-[#191970]">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-[#191970]/10 bg-white px-2.5 py-1.5 text-xs font-medium text-[#555577]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
