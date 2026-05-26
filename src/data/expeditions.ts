export type Expedition = {
  name: string;
  status: string;
  route: string;
  description: string;
  stack: string[];
};

export const expeditions: Expedition[] = [
  {
    name: "Reliability System",
    status: "Planned case study",
    route: "Detect -> Diagnose -> Recover",
    description:
      "A future story about observability, incidents, and keeping a system steady under load.",
    stack: ["SRE", "Monitoring", "Postmortems"],
  },
  {
    name: "Automation Tool",
    status: "Planned case study",
    route: "Manual -> Repeatable -> Trusted",
    description:
      "A route for removing repetitive work and making deployment or operations feel calmer.",
    stack: ["Scripts", "CI/CD", "Developer Experience"],
  },
  {
    name: "Full-stack Product",
    status: "Planned case study",
    route: "Idea -> Interface -> System",
    description:
      "A product build that connects frontend craft, backend structure, and deployment discipline.",
    stack: ["React", "APIs", "Cloud"],
  },
];
