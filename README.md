# Field Notes

A cinematic portfolio concept for a travelling software engineer and site reliability engineer.

This project starts as a design-first exploration before becoming a full portfolio site. The goal is not to build a generic resume page. The goal is to create a world: nature, travel, infrastructure, systems, reliability, and code woven into one scrolling experience.

GitHub repo: `scrolling-portfolio-site`

## Project Status

The repo is currently in the planning and design phase.

No frontend framework has been scaffolded yet. The next step is to decide the technical stack after the first scroll experience is clear.

## Docs

- [Initial Design Brief](./docs/initial-design-brief.md)
- [Technical Direction](./docs/technical-direction.md)

## Working Concept

**Field Notes From a Systems Traveller**

The visitor enters a living landscape where natural systems behave like software systems:

- Mountains are infrastructure.
- Rivers are data flows.
- Weather is load, failure, and incident pressure.
- Stars are logs, metrics, traces, and signals.
- Trails are deployment paths.
- Basecamp is the personal intro.
- Expeditions are projects and case studies.

The portfolio should feel calm, technical, cinematic, and alive.

## Opening Direction

The first screen can borrow the feeling of a boot sequence, but make it personal to this world:

```text
INITIALIZING ROUTE
Mapping services...
Checking signal...
Warming terminal...
Syncing coordinates...
Entering the field...
```

Then the site opens into an atmospheric nature/system scene with the identity:

```text
Tushar
Software Engineer / Site Reliability Engineer

Building reliable systems from shifting terrain.
```

## Core Sections

### Basecamp

The introduction. A short, confident identity statement rather than a long biography.

Possible tone:

```text
Traveller. Software Engineer. Site Reliability Engineer.
I build systems that stay steady when the terrain changes.
```

### The Terrain

Skills represented as a living map:

- Backend as bedrock.
- Infrastructure as mountain routes.
- Observability as stars and signals.
- Reliability as weather patterns.
- Automation as rivers and flows.

### Expeditions

Projects as places on a map. Each project becomes a journey with a problem, route, obstacles, solution, and outcome.

### Incidents & Recovery

A section specific to SRE thinking: debugging, monitoring, scaling, postmortems, resilience, and calm under pressure.

Possible line:

```text
Every system has weather.
I build for the storm.
```

### Toolkit

Tools shown like expedition gear: Linux, Docker, Kubernetes, cloud, CI/CD, monitoring, databases, Python, JavaScript, Go, and whatever belongs to the real portfolio.

### Next Coordinates

Contact, social links, GitHub, resume, and the next step.

## Build Phases

### Phase 1: Basecamp Prototype

Create the first cinematic homepage:

- Boot/loading sequence.
- Full-screen opening scene.
- Name and role.
- Smooth scroll into 2-3 sections.
- Early visual language for nature plus systems.

### Phase 2: Terrain System

Design the skill map and make it interactive.

- Skills as terrain features.
- Scroll-triggered reveals.
- Lightweight motion and micro-interactions.

### Phase 3: Project Expeditions

Add the first real project case studies.

- Each project gets a route.
- Show problem, decisions, implementation, and outcome.
- Include screenshots, architecture notes, code links, and impact.

### Phase 4: SRE Storytelling

Add reliability-focused storytelling.

- Incident timeline.
- Observability visuals.
- Recovery and postmortem thinking.
- Scaling and operational decisions.

### Phase 5: Polish and Deploy

Make it production-ready.

- Mobile layout.
- Performance pass.
- Accessibility pass.
- SEO and metadata.
- Deployment.

## Possible Tech Direction

This can start simple and grow:

- Next.js or Vite for the app.
- GSAP ScrollTrigger for scroll-controlled animation.
- Lenis for smooth scrolling.
- Three.js only if we truly need 3D.
- Framer Motion for interface-level motion if the app is React-based.

The first build should stay focused. One beautiful page is better than five unfinished experiments.

## Alternate Names

- Field Notes
- Basecamp
- Systems Traveller
- Signals From the Field
- Built for the Storm
- Coordinates
- The Reliability Atlas

## Current North Star

Build a portfolio that feels like entering a quiet, intelligent landscape where travel, code, and reliability belong to the same story.
