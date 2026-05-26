# Agent Instructions

This repo is a design-first portfolio project. Before making meaningful product or UI changes, read:

- `docs/reference-site-analysis.md`
- `docs/experience-architecture.md`
- `docs/phase-1-blueprint.md`
- `.codex/project-memory.md`

## Product Direction

Build a cinematic scrolling portfolio for a travelling software engineer and site reliability engineer.

The concept is:

```text
Sci-fi nature expedition for a travelling SRE.
```

The journey is:

```text
Boot -> Basecamp -> Signal Field -> Terrain Systems -> Expeditions -> Storm Protocol -> Next Coordinates
```

Keep the experience atmospheric, technical, calm, and alive. The site should feel like a field system waking up in the wilderness.

## Technical Direction

Phase 1 stack:

- Vite
- React
- TypeScript
- GSAP / ScrollTrigger
- Lenis

Do not add Three.js or React Three Fiber until the design truly needs real 3D. Start with strong layout, CSS/SVG atmosphere, scroll pacing, and a serious boot sequence.

## Design Rules

- Borrow principles from Borealis, not its identity.
- Keep copy short and confident.
- Make motion explain the world, not decorate everything.
- Nature visuals must connect to systems: terrain, signals, routes, weather, recovery.
- Avoid generic dark tech dashboards.
- Avoid heavy assets before the first experience is working.
- Respect reduced motion and mobile layout.

## Build Priorities

1. Make the boot and first screen feel memorable.
2. Make the scroll journey clear.
3. Keep components simple and extendable.
4. Verify visually before polishing deeper.
5. Add real project content only after the world feels right.
