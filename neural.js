/* Neural section — v12 immersive Milky-Way galaxy.

   Refines v11 per user feedback:
   - BIGGER galaxy with many more points (cluster counts ~2x, background
     field ~35,000 points, broader ellipsoidal volume).
   - New 5-color palette (no two blues alike):
       hub 0 light blue, hub 1 green, hub 2 purple, hub 3 dark blue,
       hub 4 orange.
   - REMOVES nebula sprites entirely (they rendered as visible discs).
     Replaces them with ~2% bright accent points per cluster — large,
     near-white star sprites that serve as the cluster "core glow".
   - Central core cluster + inward-biased background distribution so
     the galaxy center is densely filled (not hollow).
   - Camera path replaced by a Catmull-Rom curve through 12 waypoints
     (5 hubs × enter+exit + far_start + final_exit). Camera now flies
     THROUGH the clusters using varied planes, angles and distances —
     no more circular orbit in the same plane.
   - gl_PointSize is clamped so close fly-bys don't blow out the canvas.

   All other v10/v11 behavior intact: cards anchored to hub projection,
   per-point sine drift shader, mountain hero + body bg navy transition. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v12 immersive-galaxy');

  if (document.readyState === 'loading') {
    await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }

  const canvas = document.getElementById('neural-canvas');
  const section = document.getElementById('experience-neural');
  const heading = document.querySelector('.neural-heading');
  if (!canvas || !section) { log('no canvas/section, abort'); return; }

  let THREE;
  try {
    THREE = await import('https://esm.sh/three@0.160.0');
    log('THREE loaded', THREE.REVISION);
  } catch (e) {
    console.error('[neural] failed loading three', e);
    return;
  }

  // ---------- Renderer ----------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000814, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000814, 0.0017);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1200);
  camera.position.set(0, 0, 130);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ------------------------------------------------------------------
  // Color palette — five distinct hues, none duplicated.
  //   hub 0 = LIGHT BLUE   (top)
  //   hub 1 = GREEN        (right)
  //   hub 2 = PURPLE       (bottom-right)
  //   hub 3 = DARK BLUE    (bottom-left)
  //   hub 4 = ORANGE       (left)
  // Plus a CENTRAL CORE cluster anchored at galaxy origin so the
  // middle of the constellation is densely populated, not hollow.
  // ------------------------------------------------------------------
  const HUB_COLORS = {
    lightBlue: 0x7ecbff,
    green:     0x70d8a0,
    purple:    0xa078e8,
    darkBlue:  0x3868c8,
    orange:    0xff8a40,
  };

  const CLUSTERS = [
    // 5 HUBS — close galactic disk (camera waypoints + card anchors)
    { center: new THREE.Vector3(   0,   32, -52), color: HUB_COLORS.lightBlue, count: 10000, spread: 17, isHub: true,
      sigma: new THREE.Vector3(1.40, 0.75, 0.95), rotZ:  0.45 },
    { center: new THREE.Vector3(  60,    8, -66), color: HUB_COLORS.green,     count:  9500, spread: 17, isHub: true,
      sigma: new THREE.Vector3(0.85, 1.45, 0.90), rotZ: -0.30 },
    { center: new THREE.Vector3(  38,  -32, -78), color: HUB_COLORS.purple,    count:  9000, spread: 16, isHub: true,
      sigma: new THREE.Vector3(0.80, 1.25, 1.35), rotZ:  0.60 },
    { center: new THREE.Vector3( -38,  -32, -70), color: HUB_COLORS.darkBlue,  count:  9500, spread: 16, isHub: true,
      sigma: new THREE.Vector3(1.55, 0.90, 0.80), rotZ: -0.55 },
    { center: new THREE.Vector3( -60,    8, -56), color: HUB_COLORS.orange,    count:  9000, spread: 17, isHub: true,
      sigma: new THREE.Vector3(0.90, 1.20, 1.35), rotZ:  0.20 },

    // CENTRAL CORE — fills the void in the middle of the constellation
    { center: new THREE.Vector3(   0,    0, -72), color: 0xb0d4ff,             count:  6500, spread: 24, isHub: false,
      sigma: new THREE.Vector3(1.30, 1.00, 1.15), rotZ:  0.0  },

    // 5 AMBIENT — fill space between hubs with irregular shapes
    { center: new THREE.Vector3(  30,   20, -55), color: 0x90d4ff,             count:  3800, spread: 15, isHub: false,
      sigma: new THREE.Vector3(1.60, 0.70, 0.90), rotZ:  0.35 },
    { center: new THREE.Vector3( -30,   20, -60), color: 0x90e0b8,             count:  3800, spread: 15, isHub: false,
      sigma: new THREE.Vector3(0.70, 1.50, 1.10), rotZ: -0.40 },
    { center: new THREE.Vector3(  18,  -10, -85), color: 0xb098ee,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(1.20, 1.00, 0.80), rotZ:  0.10 },
    { center: new THREE.Vector3( -18,  -18, -80), color: 0x5880d8,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(0.85, 0.90, 1.40), rotZ: -0.25 },
    { center: new THREE.Vector3(   8,   -2, -98), color: 0xf0a070,             count:  3200, spread: 13, isHub: false,
      sigma: new THREE.Vector3(1.70, 0.80, 0.95), rotZ:  0.55 },
  ];
  const HUBS = CLUSTERS.filter(c => c.isHub);
  const GALAXY_CENTER = new THREE.Vector3(0, 0, -72);

  // Palette for the continuous background field — all five hub hues + softer mixes
  const PALETTE = [
    HUB_COLORS.lightBlue, HUB_COLORS.green, HUB_COLORS.purple, HUB_COLORS.darkBlue, HUB_COLORS.orange,
    0x90d4ff, 0xb0e0c0, 0xc0a8ee, 0x6088d0, 0xffaa70, 0xb0d0ff, 0xc0e0ff,
  ];

  // ------------------------------------------------------------------
  // Generate cluster points.
  //   - anisotropic gaussian + Z rotation = irregular non-spherical shapes
  //   - occasional axis filament for stretched tails
  //   - ~2% BRIGHT POINTS (large, near-white) replace the nebula sprites
  //     and act as cluster "core glow". Bright-point chance is biased
  //     toward the cluster center so cores glow naturally.
  // ------------------------------------------------------------------
  const POS = [], COL = [], SIZ = [], PHA = [];

  const gauss = (s) => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  for (const cl of CLUSTERS) {
    const baseColor = new THREE.Color(cl.color);
    const cosR = Math.cos(cl.rotZ), sinR = Math.sin(cl.rotZ);
    for (let i = 0; i < cl.count; i++) {
      // Anisotropic gaussian
      let gx = gauss(cl.spread * cl.sigma.x);
      let gy = gauss(cl.spread * cl.sigma.y);
      let gz = gauss(cl.spread * cl.sigma.z);
      // Occasional filament — stretches some points far along an axis
      if (Math.random() < 0.07) {
        const ax = Math.random();
        if      (ax < 0.34) gx *= 1.4 + Math.random() * 1.6;
        else if (ax < 0.67) gy *= 1.4 + Math.random() * 1.6;
        else                gz *= 1.4 + Math.random() * 1.2;
      }
      // Rotate around Z to break axis-aligned look
      const rx = gx * cosR - gy * sinR;
      const ry = gx * sinR + gy * cosR;
      const p = new THREE.Vector3(cl.center.x + rx, cl.center.y + ry, cl.center.z + gz);
      POS.push(p.x, p.y, p.z);

      // distance from cluster center, normalized
      const distNorm = Math.min(1, p.distanceTo(cl.center) / (cl.spread * 1.5));

      // Bright-point chance: biased toward center (so cores glow)
      const brightChance = (cl.isHub ? 0.025 : 0.015) * (1 - distNorm * 0.6);
      const isBright = Math.random() < brightChance;

      // Color
      const whiteAmount = isBright ? (0.55 + Math.random() * 0.35)
                                   : (Math.random() < 0.06 ? 0.5 : Math.random() * 0.30);
      const c = baseColor.clone().lerp(new THREE.Color(0xffffff), whiteAmount);
      COL.push(c.r, c.g, c.b);

      // Size
      let sizePx;
      if (isBright) {
        // Big bright accent star (replaces the old nebula sprite glow)
        const brightBase = cl.isHub ? 5.5 : 4.0;
        sizePx = brightBase * (0.85 + Math.random() * 0.8);
      } else {
        const baseS = cl.isHub ? 2.4 : 1.6;
        const sizeMul = Math.random() < 0.08 ? 1.7 : (0.4 + Math.random() * 0.7);
        sizePx = baseS * sizeMul * (1 - distNorm * 0.45);
      }
      SIZ.push(sizePx);

      PHA.push(Math.random() * Math.PI * 2);
    }
  }
  log('built', POS.length / 3, 'cluster points across', CLUSTERS.length, 'clusters');

  // ---------- Point sprite (soft round) ----------
  const pointSprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.20, 'rgba(220,240,255,0.85)');
    grd.addColorStop(0.55, 'rgba(100,180,255,0.30)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  // ---------- Custom shader: per-point sine drift + clamped size ----------
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
  pointsGeo.setAttribute('color',    new THREE.Float32BufferAttribute(COL, 3));
  pointsGeo.setAttribute('size',     new THREE.Float32BufferAttribute(SIZ, 1));
  pointsGeo.setAttribute('phase',    new THREE.Float32BufferAttribute(PHA, 1));

  const pointsMat = new THREE.ShaderMaterial({
    uniforms: {
      uSprite: { value: pointSprite },
      uTime:   { value: 0 },
    },
    vertexShader: `
      attribute float size;
      attribute float phase;
      uniform float uTime;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = color;
        vec3 pos = position;
        float wave = sin(uTime * 0.35 + phase);
        pos.x += wave * 0.20;
        pos.y += cos(uTime * 0.40 + phase * 1.6) * 0.18;
        pos.z += sin(uTime * 0.30 + phase * 2.1) * 0.15;

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        // Clamp size so close fly-throughs don't blow out into huge quads
        gl_PointSize = clamp(size * 280.0 / -mv.z, 1.0, 80.0);
        vAlpha = clamp(1.0 - (-mv.z) / 600.0, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uSprite;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec4 tex = texture2D(uSprite, gl_PointCoord);
        gl_FragColor = vec4(vColor, vAlpha) * tex;
        if (gl_FragColor.a < 0.02) discard;
      }
    `,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const galaxyPoints = new THREE.Points(pointsGeo, pointsMat);
  scene.add(galaxyPoints);

  // ------------------------------------------------------------------
  // BACKGROUND FIELD — ~35,000 points across a broad ellipsoid.
  //   r^0.55 radial bias = HIGH density at center (was inverted in v11).
  //   Ellipsoid: 175 wide × 110 tall × 95 deep, centered at galaxy core.
  //   Bright bias toward center too so the heart of the galaxy glows.
  // ------------------------------------------------------------------
  {
    const BG_POS = [], BG_COL = [], BG_SIZ = [], BG_PHA = [];
    const N = 35000;
    for (let i = 0; i < N; i++) {
      // Uniform direction on sphere
      const u = Math.random() * 2 - 1;
      const phi = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      // Radial bias INWARD: r = pow(rand, 0.55) makes density rise toward center
      const r = Math.pow(Math.random(), 0.55);

      const px = r * 175 * s * Math.cos(phi);
      const py = r * 110 * s * Math.sin(phi);
      const pz = GALAXY_CENTER.z + r * 95 * u;
      BG_POS.push(px, py, pz);

      const col = new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      // Brighter near center, dimmer at edges
      const centralBoost = 1 - r * 0.45;
      const dim = (0.35 + Math.random() * 0.45) * centralBoost;
      BG_COL.push(col.r * dim, col.g * dim, col.b * dim);

      // A few brighter specks
      const sz = Math.random() < 0.04 ? 1.2 + Math.random() * 0.8
                                      : 0.32 + Math.random() * 0.55;
      BG_SIZ.push(sz);
      BG_PHA.push(Math.random() * Math.PI * 2);
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute('position', new THREE.Float32BufferAttribute(BG_POS, 3));
    bgGeo.setAttribute('color',    new THREE.Float32BufferAttribute(BG_COL, 3));
    bgGeo.setAttribute('size',     new THREE.Float32BufferAttribute(BG_SIZ, 1));
    bgGeo.setAttribute('phase',    new THREE.Float32BufferAttribute(BG_PHA, 1));
    const bgMat = pointsMat.clone();
    bgMat.uniforms = pointsMat.uniforms; // share uTime + sprite
    scene.add(new THREE.Points(bgGeo, bgMat));
    log('background field placed:', N);
  }

  // ---------- Far stardust backdrop ----------
  {
    const N = 2000;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 360 + Math.random() * 220;
      const u = Math.random() * 2 - 1;
      const p = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      pos[i*3+0] = r * s * Math.cos(p);
      pos[i*3+1] = r * s * Math.sin(p);
      pos[i*3+2] = -Math.abs(r * u);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0xa0c8ee, size: 0.35, sizeAttenuation: true,
      transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ------------------------------------------------------------------
  // CAMERA PATH — Catmull-Rom curve through 12 waypoints.
  // Each hub gets an ENTER and an EXIT waypoint on opposite sides so
  // the segment between them passes THROUGH (or very close to) the
  // cluster core. Transit segments between hubs traverse the galaxy
  // at varied angles, planes and distances — never the same plane twice.
  // ------------------------------------------------------------------
  const WAYPOINTS = [
    new THREE.Vector3(   0,    0,  130),  //  0  far approach start
    new THREE.Vector3(  40,   55,  -10),  //  1  hub 0 enter (front-top-right)
    new THREE.Vector3( -40,   15,  -85),  //  2  hub 0 exit  (back-left, dipping)
    new THREE.Vector3(  90,  -10,  -30),  //  3  hub 1 enter (front-right)
    new THREE.Vector3(  30,   25, -100),  //  4  hub 1 exit  (deep back, left of hub)
    new THREE.Vector3(  60,  -10,  -45),  //  5  hub 2 enter (front-above)
    new THREE.Vector3(  15,  -55, -110),  //  6  hub 2 exit  (deep back, below)
    new THREE.Vector3(  -5,  -65,  -45),  //  7  hub 3 enter (front-below)
    new THREE.Vector3( -70,    0,  -95),  //  8  hub 3 exit  (back-upper-left)
    new THREE.Vector3( -90,  -10,  -25),  //  9  hub 4 enter (front-far-left)
    new THREE.Vector3( -30,   25,  -90),  // 10  hub 4 exit  (back, slightly right)
    new THREE.Vector3(  15,    5,  100),  // 11  final pull-back
  ];
  const positionCurve = new THREE.CatmullRomCurve3(WAYPOINTS, false, 'catmullrom', 0.4);

  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

  // 11 STATIONS = 11 curve segments. Each station maps to exactly one segment.
  const STATIONS = [
    { type: 'approach', range: [0.00, 0.10] },                     // seg 0  (WP0 -> WP1)
    { type: 'visit',    range: [0.10, 0.24], hub: 0 },             // seg 1  (WP1 -> WP2)
    { type: 'transit',  range: [0.24, 0.30], from: 0, to: 1 },     // seg 2  (WP2 -> WP3)
    { type: 'visit',    range: [0.30, 0.44], hub: 1 },             // seg 3  (WP3 -> WP4)
    { type: 'transit',  range: [0.44, 0.50], from: 1, to: 2 },     // seg 4  (WP4 -> WP5)
    { type: 'visit',    range: [0.50, 0.64], hub: 2 },             // seg 5  (WP5 -> WP6)
    { type: 'transit',  range: [0.64, 0.70], from: 2, to: 3 },     // seg 6  (WP6 -> WP7)
    { type: 'visit',    range: [0.70, 0.84], hub: 3 },             // seg 7  (WP7 -> WP8)
    { type: 'transit',  range: [0.84, 0.90], from: 3, to: 4 },     // seg 8  (WP8 -> WP9)
    { type: 'visit',    range: [0.90, 0.97], hub: 4 },             // seg 9  (WP9 -> WP10)
    { type: 'exit',     range: [0.97, 1.00] },                     // seg 10 (WP10 -> WP11)
  ];

  function cameraAt(p) {
    const stIdx = (() => {
      for (let i = 0; i < STATIONS.length; i++) {
        const r = STATIONS[i].range;
        if (p >= r[0] && p < r[1]) return i;
      }
      return STATIONS.length - 1;
    })();
    const st = STATIONS[stIdx];
    const localP = (p - st.range[0]) / (st.range[1] - st.range[0]);
    const eased = smoothStep(localP);

    // Position via Catmull-Rom curve — uniform u across all 11 segments
    const segU = (stIdx + eased) / STATIONS.length;
    const pos = positionCurve.getPoint(Math.max(0, Math.min(1, segU)));

    // LookAt by station type
    let look;
    if (st.type === 'approach') {
      look = GALAXY_CENTER.clone().lerp(HUBS[0].center, eased);
    } else if (st.type === 'visit') {
      look = HUBS[st.hub].center.clone();
    } else if (st.type === 'transit') {
      look = HUBS[st.from].center.clone().lerp(HUBS[st.to].center, eased);
    } else { // exit
      look = HUBS[4].center.clone().lerp(GALAXY_CENTER, eased);
    }

    return { pos, look };
  }

  // ---------- Cards ----------
  const visitByHub = {};
  for (const st of STATIONS) if (st.type === 'visit') visitByHub[st.hub] = st;
  const cards = Array.from(section.querySelectorAll('.neural-card')).map(el => ({
    el,
    hub: parseInt(el.dataset.hub, 10),
    visit: visitByHub[parseInt(el.dataset.hub, 10)],
    side: el.classList.contains('neural-card--left') ? 'left' : 'right',
  }));

  const VEC = new THREE.Vector3();
  function positionCards() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    for (const c of cards) {
      const [a, b] = c.visit.range;
      let vis = 0;
      if (smoothProgress >= a - 0.02 && smoothProgress <= b + 0.02) {
        const fadeIn = Math.min(1, (smoothProgress - a + 0.02) / 0.04);
        const fadeOut = Math.min(1, (b + 0.02 - smoothProgress) / 0.04);
        vis = Math.max(0, Math.min(1, Math.min(fadeIn, fadeOut)));
        vis = vis * vis * (3 - 2 * vis);
      }
      if (vis <= 0.01) {
        c.el.style.opacity = '0';
        c.el.style.pointerEvents = 'none';
        continue;
      }
      VEC.copy(HUBS[c.hub].center).project(camera);
      const sx = (VEC.x + 1) * 0.5 * w;
      const sy = (1 - (VEC.y + 1) * 0.5) * h;
      const cardW = c.el.offsetWidth || 460;
      const cardH = c.el.offsetHeight || 320;
      let left, top;
      if (c.side === 'right') {
        left = Math.max(24, Math.min(w - cardW - 24, sx + 80));
        top  = Math.max(24, Math.min(h - cardH - 24, sy - cardH / 2));
      } else {
        left = Math.max(24, Math.min(w - cardW - 24, sx - cardW - 80));
        top  = Math.max(24, Math.min(h - cardH - 24, sy - cardH / 2));
      }
      c.el.style.left = `${left}px`;
      c.el.style.top  = `${top}px`;
      c.el.style.opacity = vis.toFixed(3);
      c.el.style.transform = `translateY(${(1 - vis) * 20}px)`;
      c.el.style.pointerEvents = vis > 0.6 ? 'auto' : 'none';
    }
  }

  // ---------- Heading fade ----------
  function updateHeading() {
    if (!heading) return;
    let v = 0;
    if (document.body.classList.contains('we-active')) {
      if (smoothProgress < 0.05) v = 1;
      else if (smoothProgress < 0.10) v = 1 - (smoothProgress - 0.05) / 0.05;
    }
    heading.style.opacity = v.toFixed(3);
    const s = 1 + Math.min(0.06, smoothProgress * 0.2);
    heading.style.transform = `translateY(${-(smoothProgress * 30)}px) scale(${s.toFixed(3)})`;
  }

  // ---------- Scroll ----------
  let rawProgress = 0, smoothProgress = 0;
  const updateRaw = () => {
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const passed = -rect.top;
    rawProgress = Math.max(0, Math.min(1, total > 0 ? passed / total : 0));
  };
  updateRaw();
  window.addEventListener('scroll', updateRaw, { passive: true });

  const heroSection = document.querySelector('section.hero, [data-chapter="Hero"]');
  const globalCanvas = document.getElementById('canvas-wrapper');
  const neuralWrap = document.getElementById('neural-canvas-wrap');
  if (neuralWrap) {
    neuralWrap.style.opacity = '1';
    neuralWrap.style.transition = 'none';
  }
  function updateChrome() {
    if (heroSection && globalCanvas) {
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
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const inside = rect.top <= vh * 0.6 && rect.bottom >= 0;
    document.body.classList.toggle('we-active', inside);
  }
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });
  window.addEventListener('resize', updateChrome);

  // ---------- Animate ----------
  resize();
  window.addEventListener('resize', resize);

  let t0 = performance.now();
  function animate(now) {
    pointsMat.uniforms.uTime.value = (now - t0) / 1000;

    smoothProgress += (rawProgress - smoothProgress) * 0.07;

    const { pos, look } = cameraAt(smoothProgress);
    pos.x += Math.sin(now * 0.0004) * 0.3;
    pos.y += Math.cos(now * 0.0003) * 0.2;
    camera.position.copy(pos);
    camera.lookAt(look);

    positionCards();
    updateHeading();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  log('animate started — immersive galaxy ready');
})();
