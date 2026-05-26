# Technical Direction

This document is intentionally lightweight for now. The repo should not commit to an app structure until the first experience is designed clearly enough.

## Current Recommendation

Start with a modern frontend stack that can support a cinematic scroll experience without making the first phase too heavy.

Likely direction:

- React-based app.
- Vite or Next.js.
- GSAP ScrollTrigger for scroll-linked animation.
- Lenis for smooth scrolling.
- Three.js only if the visual concept truly needs 3D.

## Stack Options

### Option A: Vite + React

Best if the first version is a highly custom single-page portfolio.

Pros:

- Lightweight.
- Fast local development.
- Simple deploy.
- Good for a one-page scroll experience.

Tradeoff:

- Less built-in routing and metadata structure than Next.js.

### Option B: Next.js

Best if the site will grow into multiple project pages, case studies, SEO-focused content, and a more complete portfolio.

Pros:

- Strong routing.
- Better metadata and SEO structure.
- Good path if projects become individual pages.

Tradeoff:

- Slightly more framework structure up front.

### Option C: Framer

Best if the priority is visual iteration and low-code motion design.

Pros:

- Faster design iteration.
- Great for visual layouts and scroll effects.

Tradeoff:

- Less engineering control.
- Harder to make deeply custom technical interactions.

## Current Lean

Use **Vite + React** for phase 1 unless the project quickly demands case-study routing or server features.

Reason:

Phase 1 is about a polished, cinematic one-page prototype. Vite keeps the first build focused and avoids framework weight while we explore the interaction language.

## Libraries To Consider Later

- `gsap` for animation timelines.
- `@gsap/react` if using React integration.
- `lenis` for smooth scrolling.
- `three` if 3D terrain, particles, or atmospheric scenes become necessary.
- `lucide-react` for interface icons if needed.

## Folders To Add Later

Once the stack is chosen, likely structure:

```text
src/
  components/
  data/
  styles/
  assets/
  sections/
public/
```

Do not add these until the app is actually scaffolded.
