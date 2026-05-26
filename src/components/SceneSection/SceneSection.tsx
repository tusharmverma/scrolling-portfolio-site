import type { PropsWithChildren } from "react";
import { SignalText } from "../SignalText/SignalText";

type SceneSectionProps = PropsWithChildren<{
  id: string;
  label: string;
  eyebrow?: string;
  title?: string;
  className?: string;
}>;

export function SceneSection({
  id,
  label,
  eyebrow,
  title,
  className = "",
  children,
}: SceneSectionProps) {
  return (
    <section id={id} className={`scene-section ${className}`}>
      <div className="scene-label">{label}</div>
      <div className="scene-inner">
        {eyebrow ? <SignalText>{eyebrow}</SignalText> : null}
        {title ? <h2>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
