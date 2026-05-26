import { useEffect, useState } from "react";
import "./BootSequence.css";

type BootSequenceProps = {
  lines: string[];
  onComplete: () => void;
};

export function BootSequence({ lines, onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState(1);
  const progress = Math.min(100, Math.round((visibleLines / lines.length) * 100));

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const completeTimer = window.setTimeout(onComplete, 700);
      return () => window.clearTimeout(completeTimer);
    }

    const timer = window.setTimeout(() => {
      setVisibleLines((current) => current + 1);
    }, 360);

    return () => window.clearTimeout(timer);
  }, [lines.length, onComplete, visibleLines]);

  return (
    <div className="boot-sequence" role="status" aria-live="polite">
      <div className="boot-panel">
        <div className="boot-header">
          <span>FIELD NOTES</span>
          <span>{progress}%</span>
        </div>
        <div className="boot-lines">
          {lines.slice(0, visibleLines).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="boot-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
