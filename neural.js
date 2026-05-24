/* Neural network flipbook — v5.
   Replaces the Three.js procedural plexus with a scroll-driven image
   flipbook built from 14 hand-picked AI-generated frames of a holographic
   blue neural network. Each frame is a moment of a continuous camera
   fly-through. Scroll progress maps to (frameIndex, crossfade) so the
   transition between adjacent frames is smooth. CSS scale + translate per
   frame adds a forward-warp feel; an idle requestAnimationFrame loop
   keeps the visible frame breathing even when the user isn't scrolling.

   Mountain logic on the hero is preserved untouched. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v5 flipbook');

  if (document.readyState === 'loading') {
    await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }

  const section = document.getElementById('experience-neural');
  const wrap = document.getElementById('neural-canvas-wrap');
  const heading = document.querySelector('.neural-heading');
  if (!section || !wrap) { log('no section/wrap, abort'); return; }

  // ------------------------------------------------------------------
  // Frame list. Mixed .webp and .png. Loaded alphabetically — the gap
  // in numbering (no neural-07) doesn't matter, sequence is what matters.
  // ------------------------------------------------------------------
  const FRAMES = [
    '/assets/neural-frames/neural-00.webp',
    '/assets/neural-frames/neural-01.webp',
    '/assets/neural-frames/neural-02.webp',
    '/assets/neural-frames/neural-03.webp',
    '/assets/neural-frames/neural-04.webp',
    '/assets/neural-frames/neural-05.png',
    '/assets/neural-frames/neural-06.webp',
    '/assets/neural-frames/neural-08.png',
    '/assets/neural-frames/neural-09.webp',
    '/assets/neural-frames/neural-10.png',
    '/assets/neural-frames/neural-11.webp',
    '/assets/neural-frames/neural-12.png',
    '/assets/neural-frames/neural-13.webp',
    '/assets/neural-frames/neural-14.webp',
  ];
  const N = FRAMES.length;

  // ------------------------------------------------------------------
  // Build the DOM: clear old canvas (Three.js no longer used) and stack
  // N <img> elements absolutely positioned, all initially opacity 0.
  // ------------------------------------------------------------------
  wrap.innerHTML = '';
  const frameEls = [];
  for (let i = 0; i < N; i++) {
    const img = document.createElement('img');
    img.className = 'neural-frame';
    img.src = FRAMES[i];
    img.loading = i < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.alt = '';
    img.draggable = false;
    img.style.opacity = '0';
    img.style.zIndex = String(i);
    wrap.appendChild(img);
    frameEls.push(img);
  }
  log('built', N, 'frame elements');

  // Preload all so transitions don't pop in the first time you reach a frame
  const preloadPromises = FRAMES.map(src => new Promise(res => {
    const i = new Image();
    i.onload = i.onerror = () => res();
    i.src = src;
  }));
  Promise.all(preloadPromises).then(() => log('all', N, 'frames preloaded'));

  // ------------------------------------------------------------------
  // Scroll → visible frame index + crossfade with adjacent
  // ------------------------------------------------------------------
  let rawProgress = 0, smoothProgress = 0;
  const updateRaw = () => {
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const passed = -rect.top;
    rawProgress = Math.max(0, Math.min(1, total > 0 ? passed / total : 0));
  };
  updateRaw();
  window.addEventListener('scroll', updateRaw, { passive: true });

  // ------------------------------------------------------------------
  // Mountain hero canvas fade (preserved untouched from prior version):
  // fade #canvas-wrapper to 0 as user scrolls through the hero, and
  // paint body navy inline once fade starts so the Trading bundle's
  // theme-light swap doesn't flash white.
  // ------------------------------------------------------------------
  const heroSection = document.querySelector('section.hero, [data-chapter="Hero"]');
  const globalCanvas = document.getElementById('canvas-wrapper');
  function updateHeroFade() {
    if (!heroSection || !globalCanvas) return;
    const heroRect = heroSection.getBoundingClientRect();
    const scrolled = Math.max(0, -heroRect.top);
    const fadeStart = heroRect.height * 0.25;
    const fadeEnd = heroRect.height * 0.55;
    const t = Math.max(0, Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart)));
    globalCanvas.style.opacity = (1 - t).toFixed(3);
    globalCanvas.style.pointerEvents = t > 0.5 ? 'none' : '';
    if (t > 0.05) document.body.style.backgroundColor = '#000814';
    else document.body.style.backgroundColor = '';
  }

  // ------------------------------------------------------------------
  // we-active class — activates the neural-canvas-wrap overlay
  // (CSS rule: body.we-active #neural-canvas-wrap { opacity: 1 })
  // ------------------------------------------------------------------
  function updateActiveClass() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const inside = rect.top <= vh * 0.6 && rect.bottom >= 0;
    document.body.classList.toggle('we-active', inside);
  }

  // ------------------------------------------------------------------
  // Cards: 5 cards distributed across the 14-frame fly-through. Each
  // card is positioned via CSS at fixed left/right + vertical center,
  // appearing during a window of scrollProgress around its data-progress.
  // ------------------------------------------------------------------
  const cards = Array.from(section.querySelectorAll('.neural-card')).map(el => ({
    el,
    progress: parseFloat(el.dataset.progress),
    side: el.classList.contains('neural-card--left') ? 'left' : 'right',
  }));

  function updateCards() {
    const W = 0.085; // half-width of visibility window
    for (const c of cards) {
      const dist = Math.abs(smoothProgress - c.progress);
      let vis = Math.max(0, 1 - dist / W);
      vis = vis * vis * (3 - 2 * vis); // smoothstep
      c.el.style.opacity = vis.toFixed(3);
      c.el.style.pointerEvents = vis > 0.5 ? 'auto' : 'none';
      c.el.style.transform = `translateY(${(1 - vis) * 24}px)`;
    }
  }

  // ------------------------------------------------------------------
  // Heading visible only during first 18% of the section progress
  // ------------------------------------------------------------------
  function updateHeading() {
    if (!heading) return;
    let v = 0;
    if (document.body.classList.contains('we-active')) {
      if (smoothProgress < 0.14) v = 1;
      else if (smoothProgress < 0.20) v = 1 - (smoothProgress - 0.14) / 0.06;
    }
    heading.style.opacity = v.toFixed(3);
    const s = 1 + Math.min(0.06, smoothProgress * 0.2);
    heading.style.transform = `translateY(${-(smoothProgress * 30)}px) scale(${s.toFixed(3)})`;
  }

  // ------------------------------------------------------------------
  // Main render loop: lerp smoothProgress toward rawProgress for
  // velocity feel, then compute frame indices + per-frame transforms.
  // ------------------------------------------------------------------
  function renderLoop(now) {
    // Smooth scroll — gives weight/inertia to the transition
    smoothProgress += (rawProgress - smoothProgress) * 0.18;

    // Map progress 0..1 → continuous frame position 0..N-1
    const frameF = smoothProgress * (N - 1);
    const baseIdx = Math.floor(frameF);
    const fade = frameF - baseIdx; // 0..1 progress within this frame

    // Idle motion: subtle sine-wave breathe for the visible frame(s)
    const breatheX = Math.sin(now * 0.0006) * 0.4;     // ±0.4%
    const breatheY = Math.cos(now * 0.0005) * 0.3;     // ±0.3%
    const breatheS = 1 + Math.sin(now * 0.0009) * 0.005; // ±0.5% scale

    // Per-frame: set opacity + transform. Only touch the 2-3 frames
    // near baseIdx to keep paint cost low.
    for (let i = 0; i < N; i++) {
      const el = frameEls[i];
      if (i < baseIdx - 1 || i > baseIdx + 2) {
        if (el.style.opacity !== '0') el.style.opacity = '0';
        continue;
      }

      let op = 0;
      let scaleFwd = 1; // forward-warp scale: starts ~1.0, grows as we transition out

      if (i === baseIdx) {
        op = 1 - fade;
        // Current frame scales 1.00 → 1.08 over its fade window
        scaleFwd = 1.0 + fade * 0.08;
      } else if (i === baseIdx + 1) {
        op = fade;
        // Next frame starts smaller (~0.94) and grows to 1.00 as it appears
        scaleFwd = 0.94 + fade * 0.06;
      }

      const finalScale = scaleFwd * breatheS;
      el.style.opacity = op.toFixed(3);
      el.style.transform = `translate(${breatheX}%, ${breatheY}%) scale(${finalScale.toFixed(4)})`;
    }

    updateHeroFade();
    updateActiveClass();
    updateCards();
    updateHeading();

    requestAnimationFrame(renderLoop);
  }
  requestAnimationFrame(renderLoop);

  window.addEventListener('resize', () => { updateRaw(); updateHeroFade(); updateActiveClass(); });

  log('animate loop started, frames=', N);
})();
