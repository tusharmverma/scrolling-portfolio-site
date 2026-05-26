# Experience Architecture

## North Star

The site should feel like a cinematic systems expedition.

The visitor is not reading a resume. They are entering a landscape where travel, nature, software, and reliability become one visual language.

The experience should be:

- Atmospheric, but not vague.
- Technical, but not cold.
- Personal, but not overly autobiographical.
- Impressive, but still fast and usable.

## Reference Feeling

Borealis is useful as a mood reference because it feels like a live system booting up. It uses restraint, dark atmosphere, technical language, and motion to make the visitor feel like they are entering an engineered environment.

For this portfolio, the equivalent feeling should be:

```text
You are entering the field.
The route is loading.
The signals are coming online.
The systems are alive.
```

The site should not copy Borealis. The site should borrow the principle: a strong world with system-like pacing.

## Creative Frame

### Working Title

Field Notes

### Public Repo Name

scrolling-portfolio-site

### Experience Concept

Field Notes From a Systems Traveller

### Positioning

Tushar is presented as a travelling software engineer and site reliability engineer who builds reliable systems from changing terrain.

## Visual World

The visual language should combine:

- Topographic maps.
- Mountain ridgelines.
- Star fields and signal points.
- Terminal/system boot language.
- Weather and atmosphere.
- Route markers and coordinates.
- Minimal technical UI overlays.

The nature layer gives emotion. The system layer gives precision.

## Design System Direction

### Palette

Avoid a generic dark blue tech palette. Use a wider natural-system palette:

- Deep night: near-black background.
- Glacier white: primary text.
- Signal green: technical status and active markers.
- Aurora cyan: highlights and links.
- Ember amber: warnings, incidents, warmth.
- Stone gray: secondary UI and map lines.

This keeps the site technical without becoming one-note.

### Typography

Use contrast between:

- A clean, precise sans-serif for interface and body text.
- A technical mono font for coordinates, boot text, metrics, and labels.

Avoid too many font families. The first build should use two at most.

### Layout

The layout should feel spacious and cinematic:

- Full-screen sections where the scroll has meaning.
- Pinned scenes for moments that need time.
- Small technical overlays instead of large dashboard cards.
- Section labels that feel like route markers.

## Journey Structure

The earlier simple journey was:

```text
Boot -> Basecamp -> Terrain -> Expeditions -> Contact
```

The stronger direction is:

```text
Boot -> Basecamp -> Signal Field -> Terrain Systems -> Expeditions -> Storm Protocol -> Next Coordinates
```

This gives the portfolio a more specific identity:

- **Boot**: the field system comes online.
- **Basecamp**: identity and positioning.
- **Signal Field**: observability, curiosity, and how Tushar reads systems.
- **Terrain Systems**: skills mapped to natural/software terrain.
- **Expeditions**: projects as routes and case studies.
- **Storm Protocol**: reliability, incidents, pressure, recovery.
- **Next Coordinates**: contact and links.

## Core Components

These are the conceptual components the site will eventually need.

### BootSequence

The first interaction. A short system/route initialization sequence.

Purpose:

- Set the world.
- Create anticipation.
- Establish the technical/travel tone.

Phase 1 version:

- Text lines appear in sequence.
- Progress indicator moves from 0 to 100.
- Ends by revealing the opening scene.

### AtmosphereCanvas

The ambient visual layer behind the site.

Purpose:

- Give the page life.
- Carry stars, particles, terrain lines, subtle weather, or glow.

Phase 1 version:

- CSS and SVG/canvas-lite visual layer.
- No heavy 3D yet.

Later version:

- Three.js scene if we need interactive terrain, depth, or richer atmospheric motion.

### HeroScene

The first full viewport after the boot.

Content:

```text
Tushar
Software Engineer / Site Reliability Engineer
Building reliable systems from shifting terrain.
```

Purpose:

- Make the identity immediately clear.
- Give the visitor a strong first impression.

### RouteProgress

A small scroll progress/navigation indicator.

Purpose:

- Make scrolling feel like moving along a route.
- Help the site feel engineered and intentional.

Phase 1 version:

- Fixed vertical or corner progress indicator.
- Section markers: Basecamp, Terrain, Expeditions, Contact.

### SceneSection

A reusable wrapper for major scroll scenes.

Purpose:

- Keep sections consistent.
- Support future pinned animation and transition logic.

Each scene can define:

- Eyebrow/coordinate label.
- Main statement.
- Supporting copy.
- Visual motif.
- Scroll behavior.

### SignalText

Small technical labels, coordinates, status lines, and metrics.

Examples:

```text
LATENCY: LOW
SIGNAL: ONLINE
ROUTE: BASECAMP
STATUS: RESILIENT
```

Purpose:

- Make the interface feel like a live system.
- Add technical texture without overwhelming the main story.

### TerrainMap

The skill system.

Purpose:

- Present skills as a landscape rather than a plain grid.

Possible mapping:

- Backend: bedrock.
- Infrastructure: ridgelines.
- Observability: stars/signals.
- Reliability: weather.
- Automation: rivers.

Phase 1 version:

- Static preview with a few animated markers.

Later version:

- Interactive map where markers reveal skills and examples.

### ExpeditionCard

Project preview component.

Purpose:

- Show projects as destinations or journeys.

Content:

- Project name.
- Role.
- Problem.
- Route/approach.
- Stack.
- Link placeholder.

Phase 1 version:

- Placeholder cards or one sample expedition structure.

### IncidentTimeline

SRE-focused storytelling section.

Purpose:

- Show reliability thinking: detection, diagnosis, mitigation, recovery, learning.

This is a later-phase differentiator, not required in phase 1.

### ToolkitRail

Tools as field gear.

Purpose:

- Show technologies without making a boring logo wall.

Phase 1 version:

- Simple text/tool list with signal-style labels.

## Motion Language

Motion should feel like a system responding to scroll:

- Text fades and shifts with subtle precision.
- Lines draw in like mapped routes.
- Markers pulse when active.
- Background atmosphere moves slowly.
- Pinned sections should be used sparingly.

Avoid:

- Random floating animations.
- Overuse of parallax.
- Every element moving at once.
- Huge effects that make the site feel less reliable.

## Content Hierarchy

The first 30 seconds should communicate:

1. Who Tushar is.
2. What kind of engineer he is.
3. What makes the portfolio world different.
4. Where projects will live.
5. How to contact or continue.

## Phase 1 Sections

Phase 1 should include:

1. Boot sequence.
2. Hero/basecamp.
3. Terrain preview.
4. Expedition preview.
5. Next coordinates/contact.

Phase 1 should not include:

- Full project case studies.
- Complex 3D terrain.
- Blog system.
- Resume parser.
- CMS.
- Heavy dashboard UI.

## Success Criteria

Phase 1 succeeds if:

- The first screen feels memorable.
- The site clearly says who Tushar is.
- The visual world feels original.
- Scrolling feels intentional.
- The codebase remains simple enough to extend.
- Performance is good on desktop and mobile.
