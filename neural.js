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
  log('boot v13 wider-galaxy park-transit');

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
  camera.position.set(0, 0, 140);

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
  // Hub colors — boosted saturation so green/purple/darkBlue read clearly
  // through additive blending (white tends to overwhelm pale hues).
  const HUB_COLORS = {
    lightBlue: 0x7ecbff,
    green:     0x40e088,
    purple:    0x9050f0,
    darkBlue:  0x2a55d0,
    orange:    0xff7820,
  };

  const CLUSTERS = [
    // 5 HUBS — wider galactic disk (X +-75, Y +-42) so galaxy fills screen
    { center: new THREE.Vector3(   0,   42, -45), color: HUB_COLORS.lightBlue, count: 10500, spread: 18, isHub: true,
      sigma: new THREE.Vector3(1.40, 0.75, 0.95), rotZ:  0.45 },
    { center: new THREE.Vector3(  75,   10, -65), color: HUB_COLORS.green,     count: 10000, spread: 18, isHub: true,
      sigma: new THREE.Vector3(0.85, 1.45, 0.90), rotZ: -0.30 },
    { center: new THREE.Vector3(  48,  -42, -80), color: HUB_COLORS.purple,    count:  9500, spread: 17, isHub: true,
      sigma: new THREE.Vector3(0.80, 1.25, 1.35), rotZ:  0.60 },
    { center: new THREE.Vector3( -48,  -42, -70), color: HUB_COLORS.darkBlue,  count:  9500, spread: 17, isHub: true,
      sigma: new THREE.Vector3(1.55, 0.90, 0.80), rotZ: -0.55 },
    { center: new THREE.Vector3( -75,   10, -55), color: HUB_COLORS.orange,    count:  9500, spread: 18, isHub: true,
      sigma: new THREE.Vector3(0.90, 1.20, 1.35), rotZ:  0.20 },

    // CENTRAL CORE — larger and denser, anchors the middle of constellation
    { center: new THREE.Vector3(   0,    0, -72), color: 0xc8cce0,             count: 10000, spread: 32, isHub: false,
      sigma: new THREE.Vector3(1.30, 1.00, 1.15), rotZ:  0.0  },

    // 5 PRIMARY AMBIENT — fill space between hubs
    { center: new THREE.Vector3(  38,   25, -52), color: 0x90d4ff,             count:  4500, spread: 16, isHub: false,
      sigma: new THREE.Vector3(1.60, 0.70, 0.90), rotZ:  0.35 },
    { center: new THREE.Vector3( -38,   25, -58), color: 0x90e0b8,             count:  4500, spread: 16, isHub: false,
      sigma: new THREE.Vector3(0.70, 1.50, 1.10), rotZ: -0.40 },
    { center: new THREE.Vector3(  22,  -10, -82), color: 0xb098ee,             count:  4000, spread: 15, isHub: false,
      sigma: new THREE.Vector3(1.20, 1.00, 0.80), rotZ:  0.10 },
    { center: new THREE.Vector3( -22,  -18, -78), color: 0x5880d8,             count:  4000, spread: 15, isHub: false,
      sigma: new THREE.Vector3(0.85, 0.90, 1.40), rotZ: -0.25 },
    { center: new THREE.Vector3(  10,   -2, -98), color: 0xf0a070,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(1.70, 0.80, 0.95), rotZ:  0.55 },

    // 3 ADDITIONAL FILLER CLUSTERS — boost density in inter-hub bridges
    { center: new THREE.Vector3(  55,   28, -60), color: 0x88d8c8,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(1.30, 0.95, 1.10), rotZ:  0.25 },   // bridge hub0<->hub1
    { center: new THREE.Vector3( -55,   28, -60), color: 0xd0a888,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(0.95, 1.30, 1.10), rotZ: -0.20 },   // bridge hub0<->hub4
    { center: new THREE.Vector3(   0,  -48, -78), color: 0x7068d0,             count:  3500, spread: 14, isHub: false,
      sigma: new THREE.Vector3(1.50, 0.80, 1.00), rotZ:  0.40 },   // bridge hub2<->hub3
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

      // Color — keep hue strong: bright accents only slightly whiter than base,
      // regular dust mostly base color with occasional brighter speck.
      const whiteAmount = isBright ? (0.20 + Math.random() * 0.30)
                                   : (Math.random() < 0.05 ? 0.35 : Math.random() * 0.18);
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
    // Neutral white→transparent gradient so vColor controls hue without
    // the sprite tinting everything pale blue (was the v12 issue with
    // green/purple/darkBlue hubs washing toward blue).
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.30, 'rgba(255,255,255,0.70)');
    grd.addColorStop(0.65, 'rgba(255,255,255,0.20)');
    grd.addColorStop(1.00, 'rgba(255,255,255,0.0)');
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
        // Stronger per-point drift so the constellation feels alive even
        // when the camera is parked. Each axis uses a different speed
        // and the per-vertex phase keeps motion uncorrelated → no
        // visible "wave" patterns, just organic shimmer.
        float wave = sin(uTime * 0.95 + phase);
        pos.x += wave * 0.60;
        pos.y += cos(uTime * 1.10 + phase * 1.6) * 0.55;
        pos.z += sin(uTime * 0.80 + phase * 2.1) * 0.45;

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
  // BACKGROUND FIELD — ~45,000 points across a wide ellipsoid that
  // covers the full screen width when seen from the approach camera.
  //   r^0.50 radial bias = even higher density at center.
  //   Ellipsoid: 220 wide × 140 tall × 110 deep.
  // ------------------------------------------------------------------
  {
    const BG_POS = [], BG_COL = [], BG_SIZ = [], BG_PHA = [];
    const N = 45000;
    for (let i = 0; i < N; i++) {
      // Uniform direction on sphere
      const u = Math.random() * 2 - 1;
      const phi = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      // Radial bias INWARD: r = pow(rand, 0.50) makes density rise toward center
      const r = Math.pow(Math.random(), 0.50);

      const px = r * 220 * s * Math.cos(phi);
      const py = r * 140 * s * Math.sin(phi);
      const pz = GALAXY_CENTER.z + r * 110 * u;
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
  // CAMERA PATH — Catmull-Rom curve through 17 waypoints.
  // Park-and-transit structure:
  //   - Each hub has a visit-start + visit-end pair CLOSE together
  //     (camera barely drifts during card display).
  //   - Each transit has a MIDPOINT waypoint pulled toward galaxy center
  //     so the camera dives through the dense middle on its way to the
  //     next hub. Movement is concentrated in the transit phases.
  // Total: 17 WP -> 16 segments. 11 STATIONS -> 16 segs (visits=1seg,
  // transits=2segs, exit=2segs).
  // ------------------------------------------------------------------
  const WAYPOINTS = [
    new THREE.Vector3(   0,    0,  140),  //  0  far approach start

    new THREE.Vector3(  22,   65,    8),  //  1  hub 0 visit-start (parked outside hub 0)
    new THREE.Vector3(   8,   60,    0),  //  2  hub 0 visit-end (small drift)

    new THREE.Vector3(  38,   28,  -45),  //  3  transit 0->1 midpoint (dive toward center)

    new THREE.Vector3(  98,   22,  -30),  //  4  hub 1 visit-start
    new THREE.Vector3(  92,   14,  -22),  //  5  hub 1 visit-end

    new THREE.Vector3(  62,  -18,  -58),  //  6  transit 1->2 midpoint

    new THREE.Vector3(  72,  -58,  -45),  //  7  hub 2 visit-start
    new THREE.Vector3(  64,  -52,  -38),  //  8  hub 2 visit-end

    new THREE.Vector3(   0,  -52,  -92),  //  9  transit 2->3 midpoint (deep dive below center)

    new THREE.Vector3( -72,  -58,  -45),  // 10  hub 3 visit-start
    new THREE.Vector3( -64,  -52,  -38),  // 11  hub 3 visit-end

    new THREE.Vector3( -48,   -2,  -55),  // 12  transit 3->4 midpoint

    new THREE.Vector3( -98,   22,  -30),  // 13  hub 4 visit-start
    new THREE.Vector3( -92,   14,  -22),  // 14  hub 4 visit-end

    new THREE.Vector3( -38,   12,   25),  // 15  exit midpoint (pull back rising)
    new THREE.Vector3(  10,    0,  130),  // 16  final far position
  ];
  // Catmull-Rom with tension 0.5 (default) for smooth C1 transitions across segments
  const positionCurve = new THREE.CatmullRomCurve3(WAYPOINTS, false, 'catmullrom', 0.5);

  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

  // 11 STATIONS mapping into 16 curve segments.
  //   visits = 1 segment each (small drift = barely any motion)
  //   transits = 2 segments each (long traverse through galaxy center)
  //   approach = 1 segment, exit = 2 segments
  // Scroll allocation favors equal time per station, but transits cover
  // much more curve distance -> camera moves fast during transits, slow
  // during visits = "rest at hubs, fly between them" feel.
  const STATIONS = [
    { type: 'approach', range: [0.00, 0.06], startU:  0/16, endU:  1/16 },
    { type: 'visit',    range: [0.06, 0.16], hub: 0, startU:  1/16, endU:  2/16 },
    { type: 'transit',  range: [0.16, 0.26], from: 0, to: 1, startU:  2/16, endU:  4/16 },
    { type: 'visit',    range: [0.26, 0.36], hub: 1, startU:  4/16, endU:  5/16 },
    { type: 'transit',  range: [0.36, 0.46], from: 1, to: 2, startU:  5/16, endU:  7/16 },
    { type: 'visit',    range: [0.46, 0.56], hub: 2, startU:  7/16, endU:  8/16 },
    { type: 'transit',  range: [0.56, 0.66], from: 2, to: 3, startU:  8/16, endU: 10/16 },
    { type: 'visit',    range: [0.66, 0.76], hub: 3, startU: 10/16, endU: 11/16 },
    { type: 'transit',  range: [0.76, 0.86], from: 3, to: 4, startU: 11/16, endU: 13/16 },
    { type: 'visit',    range: [0.86, 0.96], hub: 4, startU: 13/16, endU: 14/16 },
    { type: 'exit',     range: [0.96, 1.00], startU: 14/16, endU: 16/16 },
  ];

  // Quintic smoothstep — flatter derivative at endpoints than cubic,
  // gives more "easing into rest" feel at station boundaries.
  function smoothStep5(x) {
    x = Math.max(0, Math.min(1, x));
    return x * x * x * (x * (x * 6 - 15) + 10);
  }

  function cameraAt(p) {
    let stIdx = STATIONS.length - 1;
    for (let i = 0; i < STATIONS.length; i++) {
      const r = STATIONS[i].range;
      if (p >= r[0] && p < r[1]) { stIdx = i; break; }
    }
    const st = STATIONS[stIdx];
    const localP = (p - st.range[0]) / (st.range[1] - st.range[0]);
    // Use quintic for visits (super smooth park) and cubic for transits (responsive)
    const eased = st.type === 'visit' ? smoothStep5(localP) : smoothStep(localP);

    // Position via Catmull-Rom curve
    const segU = st.startU + (st.endU - st.startU) * eased;
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
  // Note: do NOT force neuralWrap opacity here. The new fixed-position
  // canvas relies on the body.we-active CSS rule to cross-fade in
  // exactly when the mountain finishes fading out.
  function updateChrome() {
    let mountainT = 0, galaxyT = 0;
    const heroH = heroSection ? heroSection.offsetHeight : 0;
    if (heroSection && globalCanvas) {
      const heroRect = heroSection.getBoundingClientRect();
      const scrolled = Math.max(0, -heroRect.top);
      // Mountain fades QUICKLY in a tight window so it's fully gone before
      // the bundle's chapter-2 scene can start bleeding through.
      const mFadeStart = heroH * 0.30;
      const mFadeEnd   = heroH * 0.42;
      mountainT = Math.max(0, Math.min(1, (scrolled - mFadeStart) / (mFadeEnd - mFadeStart)));
      // Galaxy fades in over a LONGER, overlapping window so the cross-fade
      // feels smooth even though the mountain disappears faster.
      const gFadeStart = heroH * 0.30;
      const gFadeEnd   = heroH * 0.55;
      galaxyT = Math.max(0, Math.min(1, (scrolled - gFadeStart) / (gFadeEnd - gFadeStart)));
      globalCanvas.style.opacity = (1 - mountainT).toFixed(3);
      globalCanvas.style.pointerEvents = mountainT > 0.5 ? 'none' : '';
      if (mountainT > 0.05) document.body.style.backgroundColor = '#000814';
      else document.body.style.backgroundColor = '';
    }
    // Fade galaxy canvas out as the viewport bottom passes the neural
    // section bottom — otherwise the position:fixed canvas covers the
    // footer at the bottom of the page. Fade window: 0 → 50% viewport
    // height of overhang.
    let exitFade = 0;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    const overhang = (window.scrollY + window.innerHeight) - sectionBottom;
    if (overhang > 0) {
      exitFade = Math.min(1, overhang / (window.innerHeight * 0.5));
    }
    const finalGalaxyOpacity = galaxyT * (1 - exitFade);
    if (neuralWrap) {
      neuralWrap.style.opacity = finalGalaxyOpacity.toFixed(3);
      // Also pull pointer-events when fully faded so footer links work
      neuralWrap.style.pointerEvents = finalGalaxyOpacity < 0.05 ? 'none' : 'none';
    }
    // we-active reveals heading + cards once the galaxy is largely visible.
    const rect = section.getBoundingClientRect();
    const inside = galaxyT >= 0.5 && rect.bottom >= 0;
    document.body.classList.toggle('we-active', inside);
    // past-hero kills the bundle canvas (display:none) the MOMENT the
    // mountain is fully faded, so the bundle's chapter-2 perspective
    // grid can never bleed through during the rest of the page.
    document.body.classList.toggle('past-hero', mountainT >= 1);
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
    // Subtle per-frame wobble (reduced amplitude so visits feel still)
    pos.x += Math.sin(now * 0.0004) * 0.15;
    pos.y += Math.cos(now * 0.0003) * 0.10;
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
