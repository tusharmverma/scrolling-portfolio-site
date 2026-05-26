# Codex Project Memory

## What This Project Is

This is not a standard portfolio template. It is a cinematic scrolling portfolio for Tushar, a travelling software engineer and site reliability engineer.

The experience should feel like entering a sci-fi nature field system: technical, atmospheric, grounded in travel, and shaped by reliability engineering.

## Core Concept

```text
Field Notes From a Systems Traveller
```

Shorter working frame:

```text
Sci-fi nature expedition for a travelling SRE.
```

## Reference Blend

Use these references as principles:

- **Borealis**: engineered boot/system atmosphere, custom Vite/React SPA, serious loader, possible 3D/WebGL later.
- **Feadship**: cinematic editorial pacing, restraint, large confident statements.
- **Remote Rituals**: personal authored world, designed details, subject matter turned into visual language.

Do not clone any reference site.

## Journey

The current journey is:

```text
Boot -> Basecamp -> Signal Field -> Terrain Systems -> Expeditions -> Storm Protocol -> Next Coordinates
```

Meaning:

- **Boot**: field system comes online.
- **Basecamp**: identity and positioning.
- **Signal Field**: observability, logs, metrics, traces, pressure, diagnosis.
- **Terrain Systems**: skills mapped to natural/software terrain.
- **Expeditions**: projects as routes and case studies.
- **Storm Protocol**: reliability, incidents, recovery, resilience.
- **Next Coordinates**: contact and links.

## Visual Language

Use:

- Dark field atmosphere.
- Topographic lines.
- Mountain/ridgeline silhouettes.
- Stars as observability signals.
- Weather as incident/load pressure.
- Routes as project paths.
- Coordinates and small technical labels.

Avoid:

- Generic neon dashboard UI.
- Random nature wallpaper.
- Too much cyan-only tech styling.
- Heavy 3D before the first coded experience works.

## Stack Decision

Phase 1 uses:

- Vite
- React
- TypeScript
- GSAP / ScrollTrigger
- Lenis

Three.js or React Three Fiber can be added later only if we need real 3D terrain, particles, or atmospheric depth.

## Phase 1 Target

Phase 1 should prove the feeling, not finish the full portfolio.

It should include:

- Boot sequence.
- Hero/basecamp.
- Signal field.
- Terrain systems preview.
- Expedition preview.
- Storm protocol preview.
- Next coordinates/contact.

## Current Implementation Notes

The initial scaffold exists under `src/`.

Important files:

- `src/App.tsx`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/components/BootSequence/`
- `src/components/RouteProgress/`
- `src/components/TerrainMap/`
- `src/components/ExpeditionCard/`
- `src/data/`

The app has been visually verified in early desktop/mobile passes. The current direction is a CSS/SVG/GSAP foundation before adding real 3D.

## 3D Direction

The 3D layer should eventually feel like a sci-fi nature field system, not a decorative object.

When ready, use:

- `three`
- `@react-three/fiber`
- `@react-three/drei`

First 3D target:

- One full-bleed procedural `FieldScene`.
- Terrain surface.
- Signal particles.
- Route line.
- Storm/weather pressure layer.

Do not start with a heavy `.glb` model. Start procedural so the world can be tuned to the story and kept performant.

## Next Build Step

Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

Then visually verify:

- Desktop first viewport.
- Mobile first viewport.
- Boot sequence.
- Scroll journey.
- Text fit.
- Reduced motion behavior.

After visual verification, improve the design language before adding more features.
