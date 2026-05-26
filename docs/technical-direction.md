# Technical Direction

This document records the phase 1 stack decision.

## Decision

Use **Vite + React + TypeScript** for phase 1.

Add:

- GSAP for animation timelines.
- `@gsap/react` for React integration.
- GSAP ScrollTrigger for scroll-linked animation.
- Lenis for smooth scrolling.
- Three.js later only if the visual concept truly needs 3D.

## Why This Decision

Phase 1 is a crafted one-page scroll experience. It needs speed, direct control, and animation flexibility more than routing or server features.

Vite gives a light development setup. React gives us clean component boundaries for scenes and reusable visual elements. TypeScript gives the project structure as it grows. GSAP ScrollTrigger is a proven choice for the kind of cinematic scroll behavior this portfolio needs. Lenis helps give the scroll a smoother, more deliberate feel.

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

The stack decision for phase 1 is **Vite + React + TypeScript**.

Next.js can be reconsidered later if the portfolio grows into multiple project case-study pages, a blog, or more SEO-heavy content.

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
