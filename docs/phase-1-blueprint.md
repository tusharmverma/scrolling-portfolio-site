# Phase 1 Blueprint

## Goal

Build the first polished version of the portfolio experience: a short cinematic one-page prototype that proves the direction.

Phase 1 is not the full portfolio. It is the foundation.

## Phase 1 Name

Basecamp Prototype

## Scope

The prototype should include:

- A boot/loading sequence.
- A full-screen hero scene.
- A signal field section.
- A terrain/skills preview.
- An expeditions/projects preview.
- A storm protocol preview.
- A contact/next coordinates ending.
- Smooth scroll behavior.
- Basic responsive layout.

## Recommended Stack

Use:

- Vite
- React
- TypeScript
- CSS modules or plain CSS files
- GSAP
- Lenis
- Three.js
- React Three Fiber
- Drei

Three.js is now part of Phase 1 as a single lazy-loaded background scene. Keep it procedural and restrained until the story and scroll choreography are stronger.

## Why This Stack

Vite keeps the project lightweight and fast. React gives us a component model for scenes, labels, route markers, and future project sections. TypeScript keeps the codebase cleaner as the site grows. GSAP ScrollTrigger is the right tool for scroll-linked animation. Lenis gives the smooth, cinematic scroll feel. Three.js and React Three Fiber provide the living field layer behind the content.

Next.js is still a good option later if the portfolio grows into many case-study pages, but for the first version this should be a highly crafted single-page experience.

## Initial App Structure

When the app is scaffolded, use this shape:

```text
src/
  App.tsx
  main.tsx
  data/
    sections.ts
  components/
    BootSequence/
    FieldScene/
    RouteProgress/
    SignalText/
    SceneSection/
  styles/
    tokens.css
    global.css
  assets/
public/
```

Keep this flatter if the first implementation is small. Do not create folders before they have real files.

## Phase 1 User Journey

### 1. Boot

The page starts dark.

Lines appear:

```text
INITIALIZING ROUTE
Mapping services...
Checking signal...
Warming terminal...
Syncing coordinates...
Entering the field...
```

The progress moves quickly, then transitions into the hero.

Interaction:

- Auto-play on first load.
- Keep it short, likely 2-4 seconds.
- Add a skip path later if needed.

### 2. Basecamp Hero

The visitor sees the main identity.

```text
Tushar
Software Engineer / Site Reliability Engineer
Building reliable systems from shifting terrain.
```

Visual:

- Dark atmospheric background.
- Subtle topographic lines or mountain silhouette.
- Small coordinate/status labels.
- Scroll cue.

### 3. Signal Field

Introduce the SRE way of seeing:

```text
Before I move, I read the signals.
Logs, metrics, traces, symptoms, pressure.
```

This section makes observability part of the story instead of hiding it in a skills list.

### 4. Descent

Make the transition explicit:

```text
The map stops being flat.
The terminal layer falls away.
```

The point of this section is motion, not content. The camera should feel like it is moving from a technical field into a physical landscape.

### 5. Living Terrain

Introduce the eventual project world without adding heavy portfolio cards yet:

```text
A system becomes a place.
```

Use only a few compact markers:

```text
ridgelines / infrastructure
stars / observability
weather / reliability
```

Later, real projects can return here as locations in the terrain.

### 6. Next Coordinates

End with contact and future action:

```text
Next coordinates
GitHub / LinkedIn / Email / Resume
```

Keep this simple and usable.

## Component Responsibilities

### BootSequence

Owns the opening animation state and completion event.

Props:

- `lines`
- `duration`
- `onComplete`

### RouteProgress

Shows scroll progress and section markers.

Props:

- `sections`
- `activeSection`

### SceneSection

Reusable section wrapper.

Props:

- `id`
- `label`
- `title`
- `children`

### SignalText

Small monospace UI text.

Props:

- `children`
- `variant`

### TerrainMap

Displays the skill zones.

Phase 1:

- Static visual map with simple animated markers.

Later:

- Interactive map.

### ExpeditionCard

Displays project previews.

Phase 1:

- Placeholder project routes.

Later:

- Links to full case studies.

## Animation Plan

Use GSAP for:

- Boot sequence text reveal.
- Hero entrance.
- Scroll-triggered section reveals.
- Route/progress line movement.
- Terrain marker activation.

Use CSS for:

- Hover states.
- Small pulses.
- Background gradients.
- Typography and layout transitions.

Use Lenis for:

- Smooth scroll.
- Consistent scroll feel.

## Visual Asset Plan

Phase 1 should avoid depending on expensive custom 3D or large videos.

Use:

- CSS gradients with restraint.
- SVG topographic lines.
- Small canvas or CSS particle layer only if needed.
- Carefully designed text and layout.

Later:

- Custom generated hero image.
- Three.js terrain or particle field.
- Project-specific visuals.

## Performance Rules

- Keep first load light.
- Avoid autoplay video in phase 1.
- Respect reduced motion.
- Use semantic HTML.
- Keep text readable without animation.
- Make mobile layout a first-class version, not an afterthought.

## First Implementation Tasks

1. Scaffold Vite + React + TypeScript.
2. Install GSAP, `@gsap/react`, and `lenis`.
3. Add global styles and design tokens.
4. Build the static page sections.
5. Add BootSequence.
6. Add smooth scrolling.
7. Add section reveal animations.
8. Add RouteProgress.
9. Test desktop and mobile.
10. Commit and deploy when stable.

## Definition of Done

Phase 1 is done when:

- The site runs locally.
- The boot sequence works.
- The first scroll journey is complete.
- The design feels clearly tied to the concept.
- The app is responsive.
- Reduced-motion users still get a clean experience.
- The repo has useful setup instructions.
