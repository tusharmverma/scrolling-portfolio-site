export type SkillZone = {
  name: string;
  terrain: string;
  signal: string;
  description: string;
};

export const skills: SkillZone[] = [
  {
    name: "Backend",
    terrain: "Bedrock",
    signal: "APIS / SERVICES",
    description: "Designing reliable service foundations and clean data paths.",
  },
  {
    name: "Infrastructure",
    terrain: "Ridgelines",
    signal: "CLOUD / LINUX",
    description: "Provisioning the routes systems need to scale and recover.",
  },
  {
    name: "Observability",
    terrain: "Stars",
    signal: "LOGS / METRICS / TRACES",
    description: "Turning noisy systems into readable signals.",
  },
  {
    name: "Reliability",
    terrain: "Weather",
    signal: "SLO / INCIDENTS",
    description: "Building for pressure, failure, and the path back to steady.",
  },
  {
    name: "Automation",
    terrain: "Rivers",
    signal: "CI / CD / SCRIPTS",
    description: "Creating repeatable flows that reduce operational drag.",
  },
];
