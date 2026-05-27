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

## Why Add 3D Now

The page now has enough structure to support one focused 3D layer.

The goal is still not to make a heavy 3D website. The goal is to add one living field system behind the scroll journey so the portfolio starts to feel like a technical expedition through nature.

3D can create problems if it is added without restraint:

- Slow first load.
- Harder mobile performance.
- Unclear visual direction.
- 3D that feels decorative instead of meaningful.

The right approach is one full-page background scene that is lazy-loaded and tuned behind the content.

## First 3D Concept

### Field Terrain

A low-poly or shader-based terrain plane that slowly resolves as the visitor scrolls.

Visual behavior:

- Starts as a dark radar/signal field.
- Terrain contour rises subtly during Basecamp.
- Signal points appear during Signal Field.
- Descent zooms the camera through the technical field.
- Route lines and terrain become more physical during Living Terrain.
- Organic/nature traces appear only after the interface starts turning into a place.

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
- Scan rings.
- Nature/route growth.

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
- Connects Basecamp, Signal, Descent, Living Terrain, and Next Coordinates.

### NatureGrowth

The organic layer that starts to make the technical field feel like nature.

Behavior:

- Appears during Descent and Living Terrain.
- Uses route/vine lines and soft particles.
- Should feel like software signals becoming ridgelines, rivers, stars, and weather.

## Scroll Integration

Use GSAP ScrollTrigger to drive high-level scene states:

- Basecamp: camera settles.
- Signal Field: particles activate.
- Descent: camera moves inward and the grid starts feeling physical.
- Living Terrain: terrain and nature traces become clear.
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
- Keep the main text layer crisp. 3D should sit behind the story, not compete with it.

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

### Phase 1.5: First Field Scene

- Add `three`, `@react-three/fiber`, and `@react-three/drei`.
- Create one lazy-loaded full-bleed `FieldScene`.
- Render procedural terrain, signal particles, a route line, and a storm halo.
- Keep the scene transparent and atmospheric so the interface remains readable.

### Phase 2: Scroll-Controlled World

- Terrain resolves through scroll.
- Signal particles activate in Signal Field.
- Camera zooms during Descent.
- Nature/route growth appears in Living Terrain.

### Phase 3: Polish

- Optimize mobile.
- Add reduced-motion fallback.
- Tune lighting/materials.
- Consider generated or Blender-made assets only if they serve the story.

## Current Decision

Use a procedural sci-fi terrain/signal field instead of a heavy 3D model. This is more flexible, more personal, and more aligned with the portfolio story.

Implemented first: lazy-loaded `FieldScene` with transparent canvas, terrain wireframe, signal particles, route trace, and storm halo.

## Current Flight Direction

The scene should now evolve toward a single camera journey:

```text
tech portal -> signal universe -> atmosphere -> mountain terrain -> peak marker
```

Implemented as the first pass:

- `PortalTunnel`: ring corridor for the feeling of entering the system.
- `AtmosphereWorld`: wire/glow sphere suggesting Earth or an atmosphere layer.
- `MountainHorizon`: procedural wire peaks as the first mountain/terrain arrival.
- `RouteBeacons`: in-world labels for Basecamp, Signal, Descent, and Peak.
- `CameraRig`: scroll-progress camera path instead of section-only camera shifts.

Next visual improvements should focus on making the portal zoom and mountain arrival more physical before adding more portfolio content.
