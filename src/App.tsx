import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { BootSequence } from "./components/BootSequence/BootSequence";
import { RouteProgress } from "./components/RouteProgress/RouteProgress";
import { SignalText } from "./components/SignalText/SignalText";
import { SceneSection } from "./components/SceneSection/SceneSection";
import { sections } from "./data/sections";

const bootLines = [
  "FIELD SYSTEM / INIT",
  "Mapping route...",
  "Checking signal...",
  "Reading terrain...",
  "Syncing field notes...",
  "Entering basecamp...",
];

gsap.registerPlugin(ScrollTrigger);

const FieldScene = lazy(() =>
  import("./components/FieldScene/FieldScene").then((module) => ({
    default: module.FieldScene,
  })),
);

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);
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

    lenis.on("scroll", ScrollTrigger.update);

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
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!bootComplete) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy > *, .system-orbit",
        { y: 30 },
        {
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.08,
        },
      );

      gsap.to(".route-trace", {
        yPercent: 16,
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".site-shell",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.utils
        .toArray<HTMLElement>(".scene-section:not(.hero-section)")
        .forEach((section) => {
          const inner = section.querySelector(".scene-inner");
          const stagedChildren = section.querySelectorAll(
            ".signal-grid article, .field-note, .nature-marker, .contact-links a",
          );

          gsap.fromTo(
            inner,
            { y: 64 },
            {
              y: 0,
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
              },
            },
          );

          if (stagedChildren.length > 0) {
            gsap.fromTo(
              stagedChildren,
              { y: 28 },
              {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top 56%",
                },
              },
            );
          }
        });

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
  }, [bootComplete]);

  return (
    <>
      {!bootComplete && (
        <BootSequence lines={bootLines} onComplete={() => setBootComplete(true)} />
      )}

      <RouteProgress
        sections={sectionMarkers}
        activeSection={activeSection}
        progress={scrollProgress}
      />

      <Suspense fallback={null}>
        <FieldScene activeSection={activeSection} progress={scrollProgress} />
      </Suspense>

      <div className="atmosphere-layer" aria-hidden="true">
        <span className="star-field" />
        <span className="topography-field" />
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
            Logs, traces, symptoms, pressure. The interface starts as a grid,
            then the signal begins to behave like weather.
          </p>
          <div className="signal-grid">
            <article>
              <span>01</span>
              <h3>Detect</h3>
              <p>Find the motion inside the noise.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Trace</h3>
              <p>Follow the route until the system reveals its shape.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Descend</h3>
              <p>Move from telemetry into terrain.</p>
            </article>
          </div>
        </SceneSection>

        <SceneSection
          id="descent"
          label="Route 03 / Descent"
          eyebrow="FIELD: TRANSLATING"
          title="The map stops being flat."
        >
          <div className="field-note-stack">
            <p className="field-note">
              The terminal layer falls away. Signals stretch into ridgelines,
              routes become rivers, and reliability starts to feel physical.
            </p>
            <p className="field-note">
              This is the world of the portfolio: software practice translated
              into a living landscape.
            </p>
          </div>
        </SceneSection>

        <SceneSection
          id="terrain"
          label="Route 04 / Living Terrain"
          eyebrow="NATURE: RESOLVING"
          title="A system becomes a place."
        >
          <p className="section-lede">
            Later, this section can hold projects. For now it is here to prove
            the cinematic transition: tech grid, signal field, then nature.
          </p>
          <div className="nature-marker-grid">
            <span className="nature-marker">ridgelines / infrastructure</span>
            <span className="nature-marker">stars / observability</span>
            <span className="nature-marker">weather / reliability</span>
          </div>
        </SceneSection>

        <SceneSection
          id="contact"
          label="Route 05 / Next Coordinates"
          eyebrow="STATUS: READY"
          title="Next coordinates."
          className="contact-section"
        >
          <p className="section-lede">
            Once the motion language is strong, we can bring the real portfolio
            content back in carefully instead of filling the world too early.
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
