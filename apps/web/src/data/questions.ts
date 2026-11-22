export type EngineeringFocus = "data" | "ai" | "product" | "reliability";

export type EngineeringAnswer = {
  label: string;
  insight: string;
  focus: EngineeringFocus;
  isCorrect: boolean;
};

export type EngineeringQuestion = {
  id: string;
  category: string;
  prompt: string;
  answers: EngineeringAnswer[];
  principle: string;
};

export const engineeringQuestions: EngineeringQuestion[] = [
  {
    id: "data-foundations",
    category: "DATA ENGINEERING",
    prompt: "Your organization has data scattered across five disconnected systems. What's the smartest first step?",
    answers: [
      { label: "Replace every system with a new platform", focus: "data", isCorrect: false, insight: "Start by mapping how data is created, moved, and used. This reveals duplication, missing ownership, and integration gaps before committing to expensive infrastructure changes." },
      { label: "Understand the data flows and integration gaps", focus: "data", isCorrect: true, insight: "Start by mapping how data is created, moved, and used. This reveals duplication, missing ownership, and integration gaps before committing to expensive infrastructure changes." },
      { label: "Introduce AI immediately to analyze everything", focus: "ai", isCorrect: false, insight: "AI can surface patterns, but disconnected and inconsistent inputs can make its outputs hard to trust. First establish what the data means and where it comes from." },
    ],
    principle: "Reliable data work begins with lineage and ownership. Once teams know where information comes from and where it needs to go, they can choose the lightest integration that solves the actual gap.",
  },
  {
    id: "automation-or-ai",
    category: "AI & AUTOMATION",
    prompt: "A team spends hours each week moving information between tools. How would you decide what to automate?",
    answers: [
      { label: "Automate the repeatable steps with clear rules", focus: "reliability", isCorrect: false, insight: "Map the process and its failure cases first. Understanding exceptions and ownership keeps automation from making a confusing process run faster." },
      { label: "Use AI where inputs are messy or need interpretation", focus: "ai", isCorrect: false, insight: "Map the process and its failure cases first. Understanding exceptions and ownership keeps automation from making a confusing process run faster." },
      { label: "Map the process and failure cases before choosing", focus: "product", isCorrect: true, insight: "Map the process and its failure cases first. Understanding exceptions and ownership keeps automation from making a confusing process run faster." },
    ],
    principle: "Choose technology based on the shape of the task. Rules work well for stable steps; AI can help with ambiguity when people can review important decisions.",
  },
  {
    id: "software-adoption",
    category: "PRODUCT ENGINEERING",
    prompt: "A new internal tool is powerful, but staff keep returning to spreadsheets. What should the team investigate first?",
    answers: [
      { label: "Where the tool interrupts the real workflow", focus: "product", isCorrect: true, insight: "Watch the work as it happens. Small handoff or usability gaps can outweigh a long feature list." },
      { label: "Whether the tool needs more features", focus: "product", isCorrect: false, insight: "Watch the work as it happens. Small handoff or usability gaps can outweigh a long feature list. Add features only when they address a verified need." },
      { label: "Whether the tool connects to the systems people use", focus: "data", isCorrect: false, insight: "Watch the work as it happens. Integration gaps may matter, but first observe where people leave the tool or repeat work." },
    ],
    principle: "Useful software fits the work around it. Observe people, identify friction, and improve the smallest part of the workflow that will make the tool easier to adopt.",
  },
  {
    id: "system-growth",
    category: "CLOUD & ARCHITECTURE",
    prompt: "A product is growing quickly and its infrastructure costs are rising. What's the most useful next move?",
    answers: [
      { label: "Measure usage and find the expensive paths", focus: "reliability", isCorrect: true, insight: "Measure usage and establish a baseline. This separates healthy growth from waste and points to the change with the greatest impact." },
      { label: "Move everything to a different cloud provider", focus: "data", isCorrect: false, insight: "A migration adds risk. First find out which workloads, data flows, or service choices are driving cost." },
      { label: "Scale up the infrastructure to protect performance", focus: "reliability", isCorrect: false, insight: "More capacity can buy time, but first measure load patterns and locate the bottleneck so you do not pay for resources that miss the problem." },
    ],
    principle: "Good architecture evolves from evidence. Understand workload patterns, reliability needs, and cost drivers before making a large structural change.",
  },
  {
    id: "launch-readiness",
    category: "RELIABLE SYSTEMS",
    prompt: "A new service is ready to launch. What gives the team the most confidence for the first month?",
    answers: [
      { label: "Clear ownership, monitoring, and a rollback plan", focus: "reliability", isCorrect: true, insight: "Teams can respond quickly when they know who owns the service, what healthy looks like, and how to recover safely." },
      { label: "A feature roadmap for the next release", focus: "product", isCorrect: false, insight: "A roadmap supports momentum, but launch confidence comes from operational readiness: clear owners, useful monitoring, and a safe recovery plan." },
      { label: "A model that flags unusual behavior automatically", focus: "ai", isCorrect: false, insight: "Anomaly detection may help, but useful alerts depend on good signals, thresholds, and a person who can act on them. Define ownership and recovery first." },
    ],
    principle: "Launch starts the operational learning loop. Observability, ownership, documentation, and feedback help a team make the system better with confidence.",
  },
];

export const focusRecommendations: Record<EngineeringFocus, { title: string; description: string; href: string; linkLabel: string }> = {
  data: { title: "Data infrastructure & integration", description: "Your choices point toward understanding information flows and building dependable connections between systems.", href: "/#solutions", linkLabel: "Explore data solutions" },
  ai: { title: "Practical AI & automation", description: "You are drawn to applying intelligence where it can improve ambiguous or repetitive work, with thoughtful guardrails.", href: "/#solutions", linkLabel: "Explore AI solutions" },
  product: { title: "Human-centered product engineering", description: "Your strongest focus is helping software fit the people, processes, and decisions it needs to support.", href: "/#solutions", linkLabel: "Explore software solutions" },
  reliability: { title: "Reliable systems & operations", description: "Your answers emphasize measurable performance, clear ownership, and systems teams can operate with confidence.", href: "/#contact", linkLabel: "Talk about your project" },
};
