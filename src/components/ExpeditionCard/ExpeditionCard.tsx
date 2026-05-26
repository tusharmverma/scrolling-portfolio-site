import type { Expedition } from "../../data/expeditions";

type ExpeditionCardProps = {
  expedition: Expedition;
};

export function ExpeditionCard({ expedition }: ExpeditionCardProps) {
  return (
    <article className="expedition-card">
      <p className="expedition-status">{expedition.status}</p>
      <h3>{expedition.name}</h3>
      <p className="expedition-route">{expedition.route}</p>
      <p>{expedition.description}</p>
      <div className="expedition-stack">
        {expedition.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}
