<div align="center">

# Portfolio — Alfonso Mayoral

### A personal site that doubles as an engineering portfolio — built around a custom Three.js scroll experience on the /work page.

[![Live](https://img.shields.io/badge/Live-alfonsomayoral.vercel.app-2D628C?style=for-the-badge&logo=vercel&logoColor=white)](https://alfonsomayoral.vercel.app)
[![Status](https://img.shields.io/badge/status-In%20Production-success?style=for-the-badge)](https://alfonsomayoral.vercel.app)

[![Astro](https://img.shields.io/badge/Astro-5.2-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)
[![WebGL](https://img.shields.io/badge/Rendering-WebGL_shaders-990000?style=flat-square)](#)
[![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

> **In one paragraph.** This is the source for [`alfonsomayoral.vercel.app`](https://alfonsomayoral.vercel.app) — my personal portfolio. The visual shell started from a polished Astro + Three.js template, and on top of it I rebuilt the entire **Work Experience** section as a custom WebGL "neural galaxy" that flies a camera through five clusters as you scroll, surfacing each role as a liquid-glass card pinned to its node. The rest of the site is wired to a clean URL architecture, branded identity, and a measurable performance pass. The repo exists so a recruiter or engineer can see *what I extended, why, and how* without having to dig.

---

## About this repository

The base shell is a commercial Astro + Three.js template (Hero scene, navigation, view transitions). What I added — and what this README documents — is everything that turns a template into *my* site:

- **`/neural.js`** — a 730-line custom Three.js scene driving the entire `/work` page (galaxy + camera + cards + scroll binding). 100% my code.
- **URL architecture** — Vercel rewrites + an in-place patch of the compiled bundle's hardcoded routing constants so the public URLs are `/work`, `/education`, `/projects` instead of the template's `/trading`, `/capital`, `/maritime`.
- **Performance pass** — eliminated 1.5 s of forced-reflow per six seconds of scroll by switching card positioning to GPU compositor layers and batching DOM reads/writes. CLS dropped from 0.10 to 0.05.
- **Liquid-glass cards** — iOS-style backdrop blur with per-hub colour tints (the card on each cluster picks up the cluster's hue).
- **Branded identity** — favicon, OG image, and Twitter card all generated from my signature.

Everything in this README is taken from the live site as of June 2026.

---

## Table of contents

- [Live demo](#live-demo)
- [The /work neural galaxy](#the-work-neural-galaxy)
  - [Why it exists](#why-it-exists)
  - [How it works](#how-it-works)
  - [The scroll-driven camera](#the-scroll-driven-camera)
  - [Per-hub personality](#per-hub-personality)
  - [Liquid-glass cards](#liquid-glass-cards)
- [Performance pass](#performance-pass)
- [URL architecture](#url-architecture)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Get in touch](#get-in-touch)

---

## Live demo

**[alfonsomayoral.vercel.app](https://alfonsomayoral.vercel.app)** — open on desktop for the full WebGL experience.

| Page | What you'll see |
|---|---|
| [`/`](https://alfonsomayoral.vercel.app/) | About — bio, tech stack tiles, profile photo |
| [`/work`](https://alfonsomayoral.vercel.app/work/) | **Neural galaxy** — five role nodes (Suntory, Spotter AI, AISC, freelance, internships) |
| [`/education`](https://alfonsomayoral.vercel.app/education/) | Education — green-mountain scene |
| [`/projects`](https://alfonsomayoral.vercel.app/projects/) | Projects — maritime scene |
| [`/contact`](https://alfonsomayoral.vercel.app/contact/) | Contact — animated mountain background |

---

## The /work neural galaxy

This is the piece of the site I built from scratch. Everything below lives in [`neural.js`](./neural.js) — a single self-contained IIFE that boots after `DOMContentLoaded`, loads Three.js from an ESM CDN, and takes over rendering for the entire Work section.

### Why it exists

The template ships with a "trading" 3D scene that's beautiful but completely unrelated to a CV. I wanted the `/work` page to *be* the work experience — five jobs, five visual anchors, one continuous flight through them. A scroll-bound WebGL galaxy felt right: each role becomes a star cluster you fly into, your card appears as the camera lands, and the next cluster waits in the background.

### How it works

A spiral galaxy of ~50,000 points is rendered with a custom point shader (per-point sine drift, distance-clamped point size, additive blending). Inside it sit **five hubs**, each a tighter cluster of ~10,000 saturated points in a distinct hue:

| Hub | Colour | Role |
|---|---|---|
| 0 | Light blue `#7ECBFF` | Junior AI Engineer · Suntory Global Spirits |
| 1 | Green `#40E088` | Founder · Spotter AI |
| 2 | Purple `#9050F0` | Co-founder · AISC Madrid |
| 3 | Dark blue `#2A55D0` | (next role) |
| 4 | Orange `#FF7820` | (next role) |

### The scroll-driven camera

The camera follows a **Catmull-Rom curve** through 12 waypoints — 2 per hub (visit-start + visit-end) plus a far approach and a final exit. The full scroll of the section is divided into 11 *stations*, mapped 1:1 to the 11 curve segments:

```
approach   ──┐                                                             ┌── exit
             │ visit 0 │ transit │ visit 1 │ transit │ visit 2 │ ... ... │
   0%       4%        17%       24%       37%       44%       57%       97%      100%
```

Visit windows are 13 % of scroll; transits are 7 %. The camera lingers at each cluster (it's where the card is showing) and moves crisply between them. Easing is **quintic `smoothStep5`** during visits (very soft start/end, the cluster feels *parked*) and standard cubic `smoothStep` during transits.

`lookAt` is split: during a visit the camera rotates **25 %** toward the next hub (the "peek-ahead"), and the transit completes the remaining 75 %. This spreads angle change across both phases — there's never a forced rotation snap.

Scroll progress is damped with exponential smoothing (`smoothProgress += (rawProgress − smoothProgress) × 0.04`) — a ~25-frame lag that turns scroll-wheel chunkiness into cinematic motion.

### Per-hub personality

The wobble that makes the camera "breathe" while parked at a cluster is **not the same at every node** — each hub has its own frequency/amplitude profile that gives it a distinct feel:

```js
const HUB_WOBBLE = [
  { fx: 0.00035, ax: 0.18, fy: 0.00050, ay: 0.12, fz: 0.00028, az: 0.08 }, // 0 lightBlue: floating wide
  { fx: 0.00060, ax: 0.10, fy: 0.00040, ay: 0.20, fz: 0.00035, az: 0.06 }, // 1 green: breathing up/down
  { fx: 0.00045, ax: 0.14, fy: 0.00045, ay: 0.14, fz: 0.00060, az: 0.18 }, // 2 purple: orbital, depth
  { fx: 0.00080, ax: 0.08, fy: 0.00030, ay: 0.16, fz: 0.00050, az: 0.10 }, // 3 darkBlue: mechanical pulse
  { fx: 0.00025, ax: 0.22, fy: 0.00035, ay: 0.18, fz: 0.00030, az: 0.12 }, // 4 orange: very wide calm
];
```

During transits the wobble interpolates between the *from* and *to* hub character with the same eased `t` used for position, so the personality changes continuously across station boundaries — no snap.

### Liquid-glass cards

Each role card is `position: fixed`, anchored to the projected 2D position of its hub but **pulled 35 % toward the screen centre** so cards live in a comfortable reading band instead of pegged to the cluster.

The visual style is iOS 26 "liquid glass":

```css
background: rgba(8, 18, 38, 0.28);
backdrop-filter: blur(30px) saturate(180%) brightness(1.05);
border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow:
  0 24px 60px rgba(0, 0, 0, 0.45),
  inset 0 1px 0 rgba(255, 255, 255, 0.28),
  inset 0 -1px 0 rgba(0, 0, 0, 0.18);
```

Each card carries a `data-hub` attribute that maps to a per-hub CSS rule overriding background, border and outer glow with the cluster's colour — so the card on the green hub picks up a green halo, the orange hub an orange halo, etc.

---

## Performance pass

After the visual work I ran a Chrome DevTools performance trace and rewrote the hot paths. The trace surfaced 1.5 s of forced reflow per six seconds of scroll, almost all of it from card positioning. Specific fixes:

| Problem | Fix | Wall-clock |
|---|---|---|
| `positionCards` read `offsetWidth/Height` of each card every frame | Cache `w`/`h` on boot + `resize`; skip the read | **−1.3 s reflow / 6 s scroll** |
| `positionCards` wrote `left`/`top` per frame (invalidates layout) | Switch to `transform: translate3d(...)` (composite-only, GPU layer) | (rolled into above) |
| `updateChrome` read `getBoundingClientRect` *after* writing styles — classic read-after-write thrash | Reorder: batch every read up front, then calcs, then writes | **−47 ms reflow / 6 s scroll** |
| `updateRaw` and `updateChrome` both ran on `scroll` — two `BCR` calls per event | Fold `updateRaw` into `updateChrome`, reuse `sectionRect` | **−127 ms reflow / 6 s scroll** |
| Card transitions interpolated between rAF transform writes | Drop `transform` from the CSS `transition` list — JS sets it every frame already | smoother visual tracking |
| Cards' layout/style/paint could leak to the rest of the doc | `contain: layout style paint` on `.neural-card` | scoped repaint |

End result on a 4× CPU-throttled scroll over 60 frames:

- Wall-clock: **5.88 s → 4.79 s** (−19 %)
- Cumulative Layout Shift: **0.10 → 0.05** (good-tier)
- Reflow in my own code: **~0 ms** (remaining reflow is in the bundled GSAP ScrollTrigger, unreachable without recompiling the template)

All five commits live under `git log --grep=^perf` if you want to read the diffs.

---

## URL architecture

The template's pages were on disk at `/trading/`, `/capital/`, `/maritime/`. I wanted the public URLs to be semantic — `/work`, `/education`, `/projects`. Three layers of `vercel.json` handle this, plus one careful patch to the compiled bundle.

**1. Path rewrites** — clean URLs serve the underlying HTML transparently:

```json
{ "source": "/work",  "destination": "/trading/" },
{ "source": "/work/", "destination": "/trading/" }
```

**2. Path redirects** — old links keep working:

```json
{ "source": "/trading",       "destination": "/work",       "permanent": true },
{ "source": "/trading/:path*","destination": "/work/:path*","permanent": true }
```

**3. Host canonicalisation** — every auto-generated Vercel preview URL (`portfolio-website-*.vercel.app`) 308-redirects to the canonical:

```json
{
  "source": "/:path*",
  "has": [{ "type": "host", "value": "portfolio-website-.*\\.vercel\\.app" }],
  "destination": "https://alfonsomayoral.vercel.app/:path*",
  "permanent": true
}
```

**4. Bundle patch** — and here's where it got interesting. The compiled WebGL bundle (`_astro/GlobalApp.vK8XqYB9.js`, 911 KB minified) has the routing keys for its scene-to-URL map hardcoded as constants. I patched the three constants in place so the bundle's `window.location.pathname` lookup matches the new public URLs:

```js
// before
const bT="/trading", wT="/capital", DT="/maritime";
// after
const bT="/work",    wT="/education", DT="/projects";
```

Without that patch the cards would never appear — the scene router couldn't resolve `/work` to a `pageKey`. Documented in commit `bbc3360`.

---

## Tech stack

| Layer | Stack |
|---|---|
| **Framework** | Astro 5.2 (view transitions, ClientRouter) |
| **3D / WebGL** | Three.js r160 loaded from `esm.sh` (custom point shader, Catmull-Rom curves, additive blending) |
| **Animation** | GSAP ScrollTrigger (template scenes) + native `requestAnimationFrame` + scroll smoothing (neural scene) |
| **Styling** | CSS-in-HTML with `backdrop-filter`, `contain`, GPU-promoted transforms |
| **Hosting** | Vercel (static), edge-cached |
| **Routing** | `vercel.json` rewrites + redirects + host canonicalisation |
| **Identity** | Custom favicon pipeline (Pillow): signature mask → white-on-teal composite → 32/180/512 PNG + OG image |

---

## Project structure

```
portfolio-website/
├── index.html                  About page
├── trading/index.html          /work page (rewrite target)
├── capital/index.html          /education page (rewrite target)
├── maritime/index.html         /projects page (rewrite target)
├── contact/index.html
├── neural.js                   ← Custom WebGL galaxy (this is the code worth reading)
├── _astro/                     Astro-built JS/CSS bundles
├── _next/                      Template bundle chunks
├── assets/
│   ├── images/                 firma_mask, profile photo, mountain hero
│   ├── textures/               point sprites, lightmaps, normal maps
│   ├── models/                 .glb scenes
│   ├── fonts/                  Josefin Sans + Century Gothic, woff2
│   └── sounds/
├── favicon-{32,180,512}.png    Branded favicon set
└── vercel.json                 Routing + cache headers
```

The site is pre-compiled — `git clone` ships exactly what gets served. No build step.

---

## Local development

```bash
git clone https://github.com/alfonsomayoral/portfolio-website
cd portfolio-website
npx serve .   # or any static server
# → http://localhost:3000
```

For Vercel-equivalent routing (the rewrites/redirects in `vercel.json`):

```bash
npx vercel dev
```

Edits to `neural.js` are live with a refresh — it's hand-written, not bundled.

---

## Get in touch

- **Email** — [alfonsomayoral29@gmail.com](mailto:alfonsomayoral29@gmail.com)
- **LinkedIn** — [linkedin.com/in/alfonsomayoral](https://www.linkedin.com/in/alfonsomayoral/)
- **GitHub** — [github.com/alfonsomayoral](https://github.com/alfonsomayoral)
- **Site** — [alfonsomayoral.vercel.app](https://alfonsomayoral.vercel.app)

If anything in here resonates with what you're hiring for, or if you just want to talk shop about WebGL, scroll-bound animation, or making sub-1 s LCP feel cinematic, I'd love to hear from you.
