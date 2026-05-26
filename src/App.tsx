import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { BootSequence } from "./components/BootSequence/BootSequence";
import { RouteProgress } from "./components/RouteProgress/RouteProgress";
import { SignalText } from "./components/SignalText/SignalText";
import { SceneSection } from "./components/SceneSection/SceneSection";
import { TerrainMap } from "./components/TerrainMap/TerrainMap";
import { ExpeditionCard } from "./components/ExpeditionCard/ExpeditionCard";
import { sections } from "./data/sections";
import { skills } from "./data/skills";
import { expeditions } from "./data/expeditions";

const bootLines = [
  "FIELD SYSTEM / INIT",
  "Mapping route...",
  "Checking signal...",
  "Reading terrain...",
  "Syncing field notes...",
  "Entering basecamp...",
];

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const sectionMarkers = useMemo(
    () => sections.map(({ id, label }) => ({ id, label })),
    [],
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setBootComplete(true);
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".scene-section:not(.hero-section) .scene-inner",
        { autoAlpha: 0, y: 64 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".scene-section:not(.hero-section)",
            start: "top 72%",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".scene-section").forEach((section) => {
        gsap.fromTo(
          section.querySelector(".scene-label"),
          { autoAlpha: 0.25 },
          {
            autoAlpha: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      {!bootComplete && (
        <BootSequence lines={bootLines} onComplete={() => setBootComplete(true)} />
      )}

      <RouteProgress sections={sectionMarkers} />

      <div className="atmosphere-layer" aria-hidden="true">
        <span className="star-field" />
        <span className="ridge-line ridge-line-back" />
        <span className="ridge-line ridge-line-front" />
        <span className="route-trace" />
      </div>

      <main className="site-shell" aria-label="Field Notes portfolio">
        <SceneSection
          id="basecamp"
          label="Route 01 / Basecamp"
          eyebrow="SIGNAL: ONLINE"
          className="hero-section"
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <SignalText>FIELD NOTES / TRAVELLER-SRE</SignalText>
              <h1>Tushar</h1>
              <p className="hero-role">
                Traveller / Software Engineer / Site Reliability Engineer
              </p>
              <p className="hero-statement">
                Building reliable systems from shifting terrain.
              </p>
            </div>

            <div className="system-orbit" aria-hidden="true">
              <span className="orbit-ring orbit-ring-large" />
              <span className="orbit-ring orbit-ring-small" />
              <span className="orbit-core" />
              <span className="orbit-route" />
              <span className="orbit-label orbit-label-north">N 43.65</span>
              <span className="orbit-label orbit-label-east">W 79.38</span>
            </div>
          </div>
        </SceneSection>

        <SceneSection
          id="signal"
          label="Route 02 / Signal Field"
          eyebrow="OBSERVABILITY: ACTIVE"
          title="Before I move, I read the signals."
        >
          <p className="section-lede">
            Logs, metrics, traces, symptoms, pressure. The first job is to
            understand what the landscape is trying to say.
          </p>
          <div className="signal-grid">
            <article>
              <span>01</span>
              <h3>Detect</h3>
              <p>Find the signal inside noise before the system drifts.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Diagnose</h3>
              <p>Trace the route from symptom to cause with calm precision.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Recover</h3>
              <p>Restore the path, then leave the system easier to read.</p>
            </article>
          </div>
        </SceneSection>

        <SceneSection
          id="terrain"
          label="Route 03 / Terrain Systems"
          eyebrow="MAP: SYSTEM TOPOLOGY"
          title="Every system has terrain."
        >
          <p className="section-lede">
            I map the moving parts before I build: services, failure modes,
            signals, flows, and the routes teams use to recover.
          </p>
          <TerrainMap skills={skills} />
        </SceneSection>

        <SceneSection
          id="expeditions"
          label="Route 04 / Expeditions"
          eyebrow="FIELD LOG: PROJECTS"
          title="Projects become expeditions."
        >
          <p className="section-lede">
            Each route will record the problem, constraints, decisions, and
            outcome. For now, these are the first destinations in the map.
          </p>
          <div className="expedition-grid">
            {expeditions.map((expedition) => (
              <ExpeditionCard key={expedition.name} expedition={expedition} />
            ))}
          </div>
        </SceneSection>

        <SceneSection
          id="storm"
          label="Route 05 / Storm Protocol"
          eyebrow="RELIABILITY: PRESSURE TEST"
          title="Every system has weather."
          className="storm-section"
        >
          <p className="section-lede">
            I build for the storm: visible failure modes, repeatable recovery,
            calmer deploys, and systems that tell the truth when pressure rises.
          </p>
          <div className="storm-protocol">
            <span>Observe</span>
            <span>Stabilize</span>
            <span>Learn</span>
          </div>
        </SceneSection>

        <SceneSection
          id="contact"
          label="Route 06 / Next Coordinates"
          eyebrow="STATUS: READY"
          title="Next coordinates."
          className="contact-section"
        >
          <p className="section-lede">
            The first route is open. The next phase turns these markers into
            finished case studies, live project links, and a sharper visual world.
          </p>
          <div className="contact-links" aria-label="Contact links">
            <a href="https://github.com/tusharmverma">GitHub</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="mailto:hello@example.com">Email</a>
            <a href="/resume.pdf">Resume</a>
          </div>
        </SceneSection>
      </main>
    </>
  );
}

export default App;
