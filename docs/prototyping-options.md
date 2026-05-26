# Prototyping Options

This project is unusual enough that a normal static mockup will not explain the full idea. The best workflow is to prototype at two levels:

1. Visual direction and page composition.
2. Motion and scroll behavior.

## Recommendation

Use **Figma** for the visual/storyboard mockup and small coded prototypes for scroll behavior.

Optional: use **Spline** only if we want to test a 3D terrain, route marker, or atmospheric object before committing to Three.js.

## Why Not Only Figma

Figma is excellent for composition, typography, spacing, color, and explaining the page journey. It is not enough for this project because the feeling depends heavily on scroll, timing, atmosphere, and motion.

Use Figma for:

- Moodboard.
- Visual direction.
- Hero layout.
- Section composition.
- Color and type exploration.
- Mobile/desktop frames.

Do not expect Figma to fully prove:

- Cinematic scroll timing.
- GSAP-style pinned sections.
- Smooth scroll physics.
- WebGL/canvas atmosphere.

## Tool Options

### Figma

Best for:

- Visual design.
- Wireframes.
- High-fidelity page frames.
- Basic interactive flows.
- Sharing and comments.

Use it for the main design direction.

### Penpot

Best for:

- Free/open-source design workflow.
- UI layouts and prototypes.
- Avoiding platform lock-in.

Good fallback if we want an open-source alternative to Figma.

### Spline

Best for:

- Quick 3D experiments in the browser.
- Terrain objects.
- Signal markers.
- Floating route/map elements.
- Embeddable 3D prototypes.

Use only if the concept needs a real 3D element. Do not make 3D the default.

### Framer

Best for:

- Visual website prototypes.
- Scroll animation exploration.
- Sharing a hosted prototype quickly.

Useful if we want to test the feel of a scrolling site without writing production code immediately.

Tradeoff:

- The final codebase may still be custom React/Vite, so Framer can become a throwaway prototype.

### Webflow

Best for:

- Visual website building.
- Interactions and scroll effects.
- More production-like no-code pages.

Less ideal for this project because we already want a custom codebase and GSAP-level control.

### Rive

Best for:

- Small vector animations.
- Interactive icons.
- System indicators.
- Route marker animations.

Use later if the site needs a polished animated mark or UI micro-animation.

### CodePen / StackBlitz

Best for:

- Small motion experiments.
- Testing one GSAP ScrollTrigger idea.
- Sharing a single interaction.

Use for quick experiments, not the main project.

## Suggested Workflow

### Step 1: Moodboard

Collect references:

- Borealis for system atmosphere.
- Feadship for cinematic restraint.
- Remote Rituals for handmade personality.
- Nature/topographic/expedition references.
- Technical interface references.

### Step 2: Figma Storyboard

Create frames for:

- Boot screen.
- Hero/basecamp.
- Terrain preview.
- Expedition preview.
- Contact ending.

Design both desktop and mobile early.

### Step 3: Motion Notes

Annotate each frame:

- What enters?
- What pins?
- What moves with scroll?
- What stays fixed?
- What should feel alive?

### Step 4: Code Motion Prototype

Build the first Vite/React prototype:

- Boot sequence.
- Smooth scroll.
- Route progress.
- Section reveals.

### Step 5: Optional 3D Test

Only if needed, make a Spline or Three.js experiment for:

- Terrain.
- Particles/stars.
- Route markers.
- Atmospheric object.

## Current Decision

Do not spend weeks making a perfect no-code mockup.

Create a lightweight Figma storyboard, then move into code quickly enough to test the real scroll feeling.
