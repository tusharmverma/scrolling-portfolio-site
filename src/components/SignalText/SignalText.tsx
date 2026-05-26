import type { PropsWithChildren } from "react";

export function SignalText({ children }: PropsWithChildren) {
  return <p className="signal-text">{children}</p>;
}
