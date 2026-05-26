# 3D Visual Direction

## Goal

The 3D layer should make the portfolio feel like moving from a technical field interface into a sci-fi nature system.

It should not feel like a random 3D object placed beside text. The 3D should be the world:

- Terrain.
- Signals.
- Weather.
- Routes.
- Field notes.
- System pressure.

## Experience Target

The visitor should feel like they are scrolling through a living field system:

```text
Boot interface -> signal scan -> terrain resolves -> routes appear -> storm pressure -> next coordinates
```

The 3D layer should support that feeling by making the background and section visuals respond to scroll.

## Recommended 3D Stack

When the project is ready for real 3D, use:

- `three`
- `@react-three/fiber`
- `@react-three/drei`

Reason:

- Three.js is the core browser 3D/WebGL library.
- React Three Fiber lets us build Three.js scenes declaratively as React components.
- Drei provides useful helpers so we do not have to rebuild common scene primitives from scratch.

This fits the current stack:

- Vite
- React
- TypeScript
- GSAP ScrollTrigger
- Lenis

## Why Not Add 3D Too Early

The page must first work as a strong cinematic scroll experience.

Adding 3D too early can create:

- Slow first load.
- Harder mobile performance.
- Unclear visual direction.
- 3D that feels decorative instead of meaningful.

The right approach is to introduce one focused 3D scene, not a whole 3D website at once.

## First 3D Concept

### Field Terrain

A low-poly or shader-based terrain plane that slowly resolves as the visitor scrolls.

Visual behavior:

- Starts as a dark radar/signal field.
- Terrain contour rises subtly during Basecamp.
- Signal points appear during Signal Field.
- Route line draws across the surface during Terrain Systems.
- Pressure/weather distortion appears during Storm Protocol.

This scene can live behind the page as a full-bleed canvas, not inside a card.

## 3D Scene Responsibilities

### FieldScene

The main full-page 3D canvas.

Responsible for:

- Camera.
- Lighting.
- Terrain plane.
- Signal particles.
- Route line.
- Storm/weather distortion.

### TerrainSurface

The main nature/system form.

Possible implementation:

- Generated plane geometry.
- Subtle displacement.
- Wireframe/topographic material.
- Shader material later if needed.

### SignalParticles

Stars/logs/metrics/traces as points in space.

Behavior:

- Slow drift.
- Section-based activation.
- More visible in Signal Field.

### RouteLine

The visual route through the system.

Behavior:

- Draws with scroll.
- Connects Basecamp, Signal, Terrain, Expeditions, Storm, Contact.

### StormLayer

Reliability pressure visual.

Behavior:

- Appears in Storm Protocol.
- Can use noise, particles, color shift, or subtle distortion.
- Must not become chaotic or unreadable.

## Scroll Integration

Use GSAP ScrollTrigger to drive high-level scene states:

- Basecamp: camera settles.
- Signal Field: particles activate.
- Terrain Systems: terrain and route become clear.
- Expeditions: route markers expand.
- Storm Protocol: pressure/weather effect rises.
- Next Coordinates: scene calms.

Use React state or refs to pass scroll state into the 3D scene.

Avoid over-binding every small 3D property directly to React state. For animation-heavy values, use refs and frame updates.

## Performance Rules

- One full-page canvas.
- Keep geometry light at first.
- Prefer procedural geometry before heavy `.glb` models.
- Lazy-load 3D after the boot/hero is stable.
- Respect `prefers-reduced-motion`.
- Provide a non-3D fallback atmosphere.
- Test mobile early.

## Visual Rules

3D should feel:

- Quiet.
- Expansive.
- Technical.
- Natural.
- Slightly mysterious.

3D should not feel:

- Like a game menu.
- Like a generic space background.
- Like a crypto dashboard.
- Like a random spinning object.

## Phased 3D Plan

### Phase 1.5: 3D Readiness

- Keep current CSS/SVG atmosphere.
- Define a `visual/` or `scene/` component boundary.
- Ensure route/scroll state is clean.
- Do not add 3D dependencies yet unless implementation begins.

### Phase 2: First Canvas

- Add `three`, `@react-three/fiber`, and `@react-three/drei`.
- Create one full-bleed `FieldScene`.
- Render a simple procedural terrain and particles.
- Connect camera/scene state to scroll section.

### Phase 3: Scroll-Controlled World

- Terrain resolves through scroll.
- Signal particles activate in Signal Field.
- Route line draws through Terrain/Expeditions.
- Storm layer appears in Storm Protocol.

### Phase 4: Polish

- Optimize mobile.
- Add reduced-motion fallback.
- Tune lighting/materials.
- Consider generated or Blender-made assets only if they serve the story.

## Current Decision

Do not start with a heavy 3D model.

Start with a procedural sci-fi terrain/signal field. This is more flexible, more personal, and more aligned with the portfolio story.
