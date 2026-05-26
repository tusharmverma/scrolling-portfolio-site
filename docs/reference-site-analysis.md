# Reference Site Analysis

## Goal

Understand what the reference sites are doing so this portfolio can borrow the right principles without becoming a copy.

## Borealis

URL: https://borealishpc.com/

### What It Feels Like

Borealis feels like entering a technical system. It does not start like a normal marketing page. It starts with a loader, progress meter, technical status text, and a sense that something engineered is coming online.

The feeling is:

- System boot.
- High-performance infrastructure.
- Dark, precise, technical.
- Cinematic but controlled.
- Expensive because it is restrained.

### Public Implementation Clues

The deployed HTML reveals several useful clues:

- It describes itself as a `Vite SPA root`.
- It preloads React/module chunks.
- It self-hosts fonts.
- It preloads large `.glb` files.
- It has an inline loader that appears before React mounts.
- Loader progress is connected to events such as React mount, font decode, stage mount, GLB parsing, and assembly readiness.
- It treats the loader as a serious part of the experience, not a spinner.

### Lessons For This Portfolio

For our site, the equivalent is not cooling hardware. It is the traveller/SRE world coming online.

Borrow:

- Inline boot loader before the app.
- Technical progress language.
- Self-hosted or carefully chosen fonts later.
- Scene-based architecture.
- Optional 3D only if it earns its cost.
- Loader as mood-setting, not decoration.

Avoid:

- Copying its exact black/cyan identity.
- Starting with huge 3D assets before we know the world.
- Making a loader that feels fake or slow.

## Feadship

URL: https://feadship.nl/

### What It Feels Like

Feadship feels editorial, luxurious, spacious, and poetic. It uses restraint and pacing more than technical spectacle.

The feeling is:

- Large statements.
- Premium whitespace.
- Slow confidence.
- Full-screen visual storytelling.
- Clear thematic sections.

### Public Implementation Clues

The deployed HTML suggests:

- Next.js.
- Many `_next/static` chunks.
- Custom fonts.
- Rich media hosted through a CDN.
- Internationalized paths and strong content structure.
- Scroll/video-on-scroll data appears in page payloads.

### Lessons For This Portfolio

Borrow:

- Strong section statements.
- Fewer words.
- Visual pacing.
- Editorial confidence.
- A clear journey instead of a noisy dashboard.

Avoid:

- Overbuilding navigation or content systems in phase 1.
- Making the site too corporate or luxury-brand generic.

## Remote Rituals

URL: https://remote-rituals.framer.website/

### What It Feels Like

Remote Rituals feels handmade, playful, designed, and personal. It turns daily remote work into a visual world.

The feeling is:

- Studio diary.
- Handmade lettering and layout.
- Many illustrated details.
- Dense but charming.
- Personal and specific.

### Public Implementation Clues

The deployed HTML confirms:

- It is made in Framer.
- It uses Framer runtime/module bundles.
- It has Framer appear animations.
- It uses responsive breakpoint variants.
- It relies heavily on designed assets and layout craft.

### Lessons For This Portfolio

Borrow:

- Personal specificity.
- Designed details.
- A world made from the subject matter.
- The courage to make the portfolio feel authored.

Avoid:

- Too much clutter.
- Too many decorative details before the main world is strong.
- Depending on Framer if final control matters.

## Combined Direction

Our portfolio should combine:

- Borealis: engineered boot/system atmosphere.
- Feadship: cinematic editorial pacing.
- Remote Rituals: personal world-building.

The resulting direction:

```text
Sci-fi nature expedition for a travelling SRE.
```

The site should feel like a field system waking up in the wilderness:

- Coordinates appear.
- Signals come online.
- Terrain resolves.
- Routes become projects.
- Weather becomes reliability pressure.
- Stars become observability.
- Expeditions become case studies.

## Design Translation

### Opening

The site starts with a dark field boot:

```text
FIELD SYSTEM / INIT
Mapping route...
Checking signal...
Reading terrain...
Syncing field notes...
Entering basecamp...
```

This should feel closer to Borealis than to a normal page loader.

### Hero

The hero is a quiet sci-fi landscape:

- Dark natural scene.
- Topographic or mountain-line atmosphere.
- Small terminal labels.
- Your name as the main signal.
- One strong positioning sentence.

### Main Journey

The journey should be:

1. **Basecamp**: who you are.
2. **Signal Field**: what you observe and understand.
3. **Terrain Systems**: how your skills map to real engineering terrain.
4. **Expeditions**: project routes/case studies.
5. **Storm Protocol**: SRE reliability thinking.
6. **Next Coordinates**: contact.

This is stronger than the earlier generic route:

```text
Boot -> Basecamp -> Terrain -> Expeditions -> Contact
```

The improved version:

```text
Boot -> Basecamp -> Signal Field -> Terrain Systems -> Expeditions -> Storm Protocol -> Next Coordinates
```

## Tech Implication

The stack should support:

- Custom pre-app loader.
- React scene components.
- Scroll-linked motion.
- Canvas or WebGL later.
- Strong performance control.
- Easy future project pages.

Recommended phase 1 stack remains:

- Vite.
- React.
- TypeScript.
- GSAP ScrollTrigger.
- Lenis.
- CSS modules or scoped CSS.

Add later only if needed:

- Three.js / React Three Fiber for real 3D terrain or particle fields.
- Self-hosted fonts.
- Asset preloading strategy.

## Phase 1 Design Target

Phase 1 should not try to be the whole final website.

It should prove:

- The boot feels real.
- The hero feels like sci-fi nature, not generic tech.
- Scroll has cinematic pacing.
- The system/travel metaphor is clear.
- The page is extendable.

The first build should be a high-quality foundation, not a full case-study archive.
