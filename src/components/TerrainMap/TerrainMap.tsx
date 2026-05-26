import type { SkillZone } from "../../data/skills";

type TerrainMapProps = {
  skills: SkillZone[];
};

export function TerrainMap({ skills }: TerrainMapProps) {
  return (
    <div className="terrain-map">
      <div className="terrain-lines" aria-hidden="true" />
      {skills.map((skill, index) => (
        <article
          className="terrain-zone"
          key={skill.name}
          style={{ "--zone-index": index } as React.CSSProperties}
        >
          <span className="terrain-dot" aria-hidden="true" />
          <p className="terrain-signal">{skill.signal}</p>
          <h3>{skill.name}</h3>
          <p className="terrain-type">{skill.terrain}</p>
          <p>{skill.description}</p>
        </article>
      ))}
    </div>
  );
}
