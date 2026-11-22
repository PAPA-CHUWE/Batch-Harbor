export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
};

// These are illustrative concepts until verified client work can be featured.
export const projects: Project[] = [
  {
    id: "data-intelligence-platform",
    number: "01",
    category: "DATA ENGINEERING",
    title: "Data Intelligence Platform",
    description: "Unified data pipelines and analytics in one platform.",
    image: "/images/projects/data-platform.jpg",
    overview:
      "An illustrative platform concept for collecting, transforming, and analyzing information from multiple sources.",
    challenge:
      "Business information can be distributed across disconnected systems, making consistent reporting difficult.",
    solution:
      "A unified data architecture concept with automated ingestion, transformation, and analytics capabilities.",
    technologies: ["Python", "PostgreSQL", "Apache Airflow", "Next.js"],
  },
  {
    id: "intelligent-automation",
    number: "02",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Intelligent Automation",
    description: "AI-powered workflows that simplify complex operations.",
    image: "/images/projects/ai-automation.jpg",
    overview:
      "An illustrative workflow concept combining automation and language models.",
    challenge:
      "Manual, repetitive processes can consume valuable operational time.",
    solution:
      "Automated workflows supported by AI-assisted classification, extraction, and decision support.",
    technologies: ["Python", "LLMs", "FastAPI", "Next.js"],
  },
  {
    id: "cloud-infrastructure",
    number: "03",
    category: "CLOUD ENGINEERING",
    title: "Cloud Infrastructure",
    description: "Scalable foundations for modern applications.",
    image: "/images/projects/cloud.jpg",
    overview:
      "An illustrative cloud infrastructure concept for application deployment and operational reliability.",
    challenge:
      "Applications need repeatable deployment processes and infrastructure that can evolve.",
    solution:
      "A concept combining containerized services, deployment automation, and infrastructure monitoring.",
    technologies: ["Docker", "AWS", "Terraform", "CI/CD"],
  },
  {
    id: "software-platform",
    number: "04",
    category: "SOFTWARE ENGINEERING",
    title: "Software Platform",
    description: "Modern applications built around real user needs.",
    image: "/images/projects/software.jpg",
    overview:
      "An illustrative web platform concept focused on maintainability, usability, and performance.",
    challenge:
      "Organizations need integrated tools that simplify everyday processes.",
    solution:
      "A modular application concept with reusable interfaces and secure APIs.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "analytics-reporting",
    number: "05",
    category: "DATA ANALYTICS",
    title: "Analytics & Reporting",
    description:
      "Turning complex information into clear business intelligence.",
    image: "/images/projects/analytics.jpg",
    overview:
      "An illustrative analytics interface concept for presenting operational metrics and trends.",
    challenge:
      "Raw data is difficult to interpret without consistent metrics and accessible reporting.",
    solution:
      "A concept built around interactive dashboards, reusable metrics, and visual reporting components.",
    technologies: ["Python", "SQL", "Next.js", "Recharts"],
  },
  {
    id: "analytics-reportingg",
    number: "06",
    category: "DATA ANALYTICS",
    title: "Analytics & Reporting",
    description:
      "Turning complex information into clear business intelligence.",
    image: "/images/projects/analytics.jpg",
    overview:
      "An illustrative analytics interface concept for presenting operational metrics and trends.",
    challenge:
      "Raw data is difficult to interpret without consistent metrics and accessible reporting.",
    solution:
      "A concept built around interactive dashboards, reusable metrics, and visual reporting components.",
    technologies: ["Python", "SQL", "Next.js", "Recharts"],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
