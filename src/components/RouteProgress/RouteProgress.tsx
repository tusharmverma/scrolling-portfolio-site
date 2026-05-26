type RouteProgressProps = {
  sections: Array<{
    id: string;
    label: string;
  }>;
  activeSection: string;
  progress: number;
};

export function RouteProgress({
  sections,
  activeSection,
  progress,
}: RouteProgressProps) {
  return (
    <nav className="route-progress" aria-label="Section navigation">
      <span className="route-progress-line" aria-hidden="true" />
      <span
        className="route-progress-fill"
        style={{ transform: `scaleY(${progress})` }}
        aria-hidden="true"
      />
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSection === section.id ? "is-active" : undefined}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          {section.label}
        </a>
      ))}
    </nav>
  );
}
