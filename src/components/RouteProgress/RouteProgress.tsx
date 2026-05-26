type RouteProgressProps = {
  sections: Array<{
    id: string;
    label: string;
  }>;
};

export function RouteProgress({ sections }: RouteProgressProps) {
  return (
    <nav className="route-progress" aria-label="Section navigation">
      <span className="route-progress-line" aria-hidden="true" />
      {sections.map((section, index) => (
        <a key={section.id} href={`#${section.id}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
