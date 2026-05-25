/* Neural section — v11 unified Milky-Way galaxy.

   Refines v10 per user feedback:
   - ONE continuous galaxy. Adds an 18,000-point background field that
     fills the entire volume so there's never a "gap" between hubs.
   - 5 hubs brought closer together (X ±60, Y ±32) so they read as one
     constellation, not 5 isolated balls.
   - Cluster shapes are anisotropic + Z-rotated so none are perfect
     spheres — each hub has its own stretched/tilted blob shape.
   - Nebula aura is now ~7 small offset puffs per hub + inter-hub bridge
     puffs, all with random rotations and varied opacities, so the auras
     fuse together with no visible circular boundary.
   - All other v10 behavior intact: camera tour through 5 hubs, cards
     anchored to hub screen projection, per-point sine drift shader,
     mountain hero + body bg navy transition. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v11 unified-galaxy');

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
  scene.fog = new THREE.FogExp2(0x000814, 0.0020);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
  camera.position.set(0, 0, 160);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ------------------------------------------------------------------
  // Cluster definitions — 5 HUBS + 5 AMBIENT, all with anisotropic
  // sigma + Z rotation so shapes are irregular (no perfect spheres).
  // Hub centers brought close together (X ±60, Y ±32, Z -50..-78) so
  // the 5 nuclei read as ONE constellation, not 5 separate balls.
  // ------------------------------------------------------------------
  const CLUSTERS = [
    // 5 HUBS — close galactic disk, camera waypoints
    { center: new THREE.Vector3(   0,   32, -52), color: 0x6cd2ff, count: 5500, spread: 16, isHub: true,
      sigma: new THREE.Vector3(1.35, 0.75, 0.95), rotZ:  0.45 },                       // top — cyan, wide
    { center: new THREE.Vector3(  60,    8, -66), color: 0xa0e0ff, count: 5200, spread: 16, isHub: true,
      sigma: new THREE.Vector3(0.85, 1.40, 0.90), rotZ: -0.30 },                       // right — pale, vertical
    { center: new THREE.Vector3(  38,  -32, -78), color: 0xb090e0, count: 4800, spread: 15, isHub: true,
      sigma: new THREE.Vector3(0.80, 1.20, 1.30), rotZ:  0.60 },                       // bottom-right — purple, tilted
    { center: new THREE.Vector3( -38,  -32, -70), color: 0x8ac0ff, count: 5000, spread: 15, isHub: true,
      sigma: new THREE.Vector3(1.50, 0.90, 0.80), rotZ: -0.55 },                       // bottom-left — long streak
    { center: new THREE.Vector3( -60,    8, -56), color: 0xffb070, count: 4800, spread: 16, isHub: true,
      sigma: new THREE.Vector3(0.90, 1.20, 1.30), rotZ:  0.20 },                       // left — peach, soft
    // 5 AMBIENT — fill space between hubs with irregular shapes
    { center: new THREE.Vector3(  30,   20, -55), color: 0x90c8ff, count: 2200, spread: 14, isHub: false,
      sigma: new THREE.Vector3(1.60, 0.70, 0.90), rotZ:  0.35 },
    { center: new THREE.Vector3( -30,   20, -60), color: 0x7ab8ee, count: 2200, spread: 14, isHub: false,
      sigma: new THREE.Vector3(0.70, 1.50, 1.10), rotZ: -0.40 },
    { center: new THREE.Vector3(  10,  -12, -88), color: 0xaccfff, count: 2000, spread: 13, isHub: false,
      sigma: new THREE.Vector3(1.20, 1.00, 0.80), rotZ:  0.10 },
    { center: new THREE.Vector3( -12,  -18, -82), color: 0x80b8ff, count: 2000, spread: 13, isHub: false,
      sigma: new THREE.Vector3(0.85, 0.90, 1.40), rotZ: -0.25 },
    { center: new THREE.Vector3(   0,    0, -98), color: 0x9cc8ff, count: 1800, spread: 12, isHub: false,
      sigma: new THREE.Vector3(1.70, 0.80, 0.95), rotZ:  0.55 },
  ];
  const HUBS = CLUSTERS.filter(c => c.isHub);

  // Color palette for the continuous background field
  const PALETTE = [0x6cd2ff, 0xa0e0ff, 0xb090e0, 0x8ac0ff, 0xffb070, 0x9cc8ff, 0x80b8ff, 0xc0e8ff];

  // ------------------------------------------------------------------
  // Generate cluster points with anisotropic gaussian + Z rotation.
  // Adds occasional "filament" stretching for non-uniform tails.
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

      const whiteAmount = Math.random() < 0.06 ? 0.7 : Math.random() * 0.35;
      const c = baseColor.clone().lerp(new THREE.Color(0xffffff), whiteAmount);
      COL.push(c.r, c.g, c.b);

      // Soft falloff so cluster edges fade smoothly into background field
      const distNorm = Math.min(1, p.distanceTo(cl.center) / (cl.spread * 1.4));
      const baseS = cl.isHub ? 2.4 : 1.6;
      const sizeMul = Math.random() < 0.08 ? 1.8 : (0.4 + Math.random() * 0.7);
      SIZ.push(baseS * sizeMul * (1 - distNorm * 0.5));

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

  // ---------- Custom shader: per-point sine drift + size attenuation ----------
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
        gl_PointSize = size * 280.0 / -mv.z;
        vAlpha = clamp(1.0 - (-mv.z) / 520.0, 0.0, 1.0);
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
  // BACKGROUND FIELD — 18,000 points spread across entire volume.
  // This is the key change for "infinity of points everywhere" so the
  // 5 hubs no longer read as isolated balls. Low brightness, small size,
  // light density bias toward galactic center via power law.
  // ------------------------------------------------------------------
  {
    const BG_POS = [], BG_COL = [], BG_SIZ = [], BG_PHA = [];
    const N = 18000;
    for (let i = 0; i < N; i++) {
      // Ellipsoidal galaxy volume centered at z=-75, broad XY
      // Slight power bias so density rises toward center (more visually galaxy-like).
      const cx = (Math.random() * 2 - 1);
      const cy = (Math.random() * 2 - 1);
      const cz = (Math.random() * 2 - 1);
      const r2 = cx*cx + cy*cy + cz*cz;
      // bias points slightly inward (keep but skew)
      const bias = 1 - 0.18 * Math.max(0, 1 - r2);
      const px = cx * 130 * bias;
      const py = cy *  80 * bias;
      const pz = -75 + cz * 75 * bias;
      BG_POS.push(px, py, pz);
      const col = new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      // dim background field — between 0.35 and 0.7 brightness
      const dim = 0.35 + Math.random() * 0.35;
      BG_COL.push(col.r * dim, col.g * dim, col.b * dim);
      // Mostly tiny; occasional brighter speck
      const sz = Math.random() < 0.04 ? 1.1 + Math.random() * 0.6 : 0.35 + Math.random() * 0.55;
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

  // ------------------------------------------------------------------
  // NEBULA — irregular puffs per hub + inter-hub bridge puffs.
  // No more 2 big circular halos: instead 7 small randomly-offset puffs
  // per hub at varied scales + rotations, plus 4 puffs along each
  // hub-to-hub axis. Result: blended diffuse aura with no clear edge.
  // ------------------------------------------------------------------
  const nebulaSprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0.00, 'rgba(255,255,255,0.55)');
    grd.addColorStop(0.20, 'rgba(220,240,255,0.38)');
    grd.addColorStop(0.45, 'rgba(140,200,255,0.16)');
    grd.addColorStop(0.75, 'rgba(60,140,220,0.04)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  // Per-hub puffs
  for (const cl of CLUSTERS) {
    if (!cl.isHub) continue;
    const PUFFS = 7;
    for (let i = 0; i < PUFFS; i++) {
      const offset = new THREE.Vector3(
        gauss(cl.spread * 0.95),
        gauss(cl.spread * 0.85),
        gauss(cl.spread * 0.45)
      );
      const scaleMul = 1.7 + Math.random() * 2.8; // 1.7x..4.5x spread
      const opacity = 0.05 + Math.random() * 0.14;
      const m = new THREE.SpriteMaterial({
        map: nebulaSprite, color: cl.color,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
        opacity: opacity,
        rotation: Math.random() * Math.PI * 2,
      });
      const s = new THREE.Sprite(m);
      s.position.copy(cl.center).add(offset);
      s.scale.setScalar(cl.spread * scaleMul);
      scene.add(s);
    }
  }

  // Inter-hub bridge puffs — make adjacent auras merge
  const HUB_PAIRS = [[0,1],[1,2],[2,3],[3,4],[4,0],[0,2],[1,3],[2,4],[0,3]];
  for (const [a, b] of HUB_PAIRS) {
    const ha = HUBS[a], hb = HUBS[b];
    const BRIDGES = 4;
    for (let i = 0; i < BRIDGES; i++) {
      const t = 0.20 + Math.random() * 0.60;
      const mid = ha.center.clone().lerp(hb.center, t);
      mid.x += gauss(7); mid.y += gauss(7); mid.z += gauss(5);
      const c1 = new THREE.Color(ha.color), c2 = new THREE.Color(hb.color);
      const blended = c1.clone().lerp(c2, 0.4 + Math.random() * 0.2).getHex();
      const m = new THREE.SpriteMaterial({
        map: nebulaSprite, color: blended,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
        opacity: 0.03 + Math.random() * 0.06,
        rotation: Math.random() * Math.PI * 2,
      });
      const s = new THREE.Sprite(m);
      s.position.copy(mid);
      s.scale.setScalar(28 + Math.random() * 42);
      scene.add(s);
    }
  }

  // ---------- Far stardust backdrop ----------
  {
    const N = 1500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 320 + Math.random() * 200;
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
      color: 0x8cb8ee, size: 0.35, sizeAttenuation: true,
      transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ------------------------------------------------------------------
  // Camera path — approach + 5 hub visits + transits + exit.
  // Hubs are closer now so we tighten outR slightly.
  // ------------------------------------------------------------------
  const FAR_START = new THREE.Vector3(0, 0, 145);

  const HUB_PRESETS = [
    { outR: [26, 20], tanU: [-7,  +8], tanV: [+3, -3], elev: [+2, +4] },
    { outR: [24, 18], tanU: [+6,  -7], tanV: [-4, +4], elev: [-1, +2] },
    { outR: [25, 21], tanU: [-5,  +7], tanV: [+5, +6], elev: [+3, +1] },
    { outR: [22, 25], tanU: [+7,  -6], tanV: [-6, +2], elev: [-2, +3] },
    { outR: [28, 20], tanU: [-8,  +6], tanV: [+2, -5], elev: [+1, +2] },
  ];

  function hubCameraAt(hubIdx, localP) {
    const hub = HUBS[hubIdx];
    const preset = HUB_PRESETS[hubIdx];
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI);

    const outR = THREE.MathUtils.lerp(preset.outR[0], preset.outR[1], t);
    const tanU = THREE.MathUtils.lerp(preset.tanU[0], preset.tanU[1], t);
    const tanV = THREE.MathUtils.lerp(preset.tanV[0], preset.tanV[1], t);
    const elev = THREE.MathUtils.lerp(preset.elev[0], preset.elev[1], t);

    const outward = new THREE.Vector3(0, 0, 1);
    const biases = [
      new THREE.Vector3( 0.0, 0.0, 0),
      new THREE.Vector3( 0.3, 0.1, 0),
      new THREE.Vector3(-0.3, 0.0, 0),
      new THREE.Vector3( 0.2,-0.2, 0),
      new THREE.Vector3(-0.2, 0.2, 0),
    ];
    outward.add(biases[hubIdx]).normalize();

    const tangentU = new THREE.Vector3(1, 0, 0);
    const tangentV = new THREE.Vector3(0, 1, 0);

    const wobble = Math.sin(localP * Math.PI * 2.1) * 0.6;

    const pos = hub.center.clone()
      .add(outward.multiplyScalar(outR + wobble))
      .add(tangentU.multiplyScalar(tanU))
      .add(tangentV.multiplyScalar(tanV));
    pos.z += elev;

    return { pos, look: hub.center.clone() };
  }

  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

  const STATIONS = [
    { type: 'approach', range: [0.00, 0.10] },
    { type: 'visit',    range: [0.10, 0.24], hub: 0 },
    { type: 'transit',  range: [0.24, 0.30], from: 0, to: 1 },
    { type: 'visit',    range: [0.30, 0.44], hub: 1 },
    { type: 'transit',  range: [0.44, 0.50], from: 1, to: 2 },
    { type: 'visit',    range: [0.50, 0.64], hub: 2 },
    { type: 'transit',  range: [0.64, 0.70], from: 2, to: 3 },
    { type: 'visit',    range: [0.70, 0.84], hub: 3 },
    { type: 'transit',  range: [0.84, 0.90], from: 3, to: 4 },
    { type: 'visit',    range: [0.90, 0.97], hub: 4 },
    { type: 'exit',     range: [0.97, 1.00] },
  ];

  function cameraAt(p) {
    const st = STATIONS.find(s => p >= s.range[0] && p < s.range[1]) || STATIONS[STATIONS.length - 1];
    const localP = (p - st.range[0]) / (st.range[1] - st.range[0]);
    if (st.type === 'approach') {
      const target = hubCameraAt(0, 0);
      return {
        pos: FAR_START.clone().lerp(target.pos, smoothStep(localP)),
        look: HUBS[0].center.clone().multiplyScalar(smoothStep(localP)),
      };
    }
    if (st.type === 'visit') return hubCameraAt(st.hub, localP);
    if (st.type === 'transit') {
      const a = hubCameraAt(st.from, 1);
      const b = hubCameraAt(st.to, 0);
      const t = smoothStep(localP);
      return {
        pos: a.pos.clone().lerp(b.pos, t),
        look: HUBS[st.from].center.clone().lerp(HUBS[st.to].center, t),
      };
    }
    const a = hubCameraAt(4, 1);
    const end = HUBS[4].center.clone().add(new THREE.Vector3(0, 0, -80));
    return {
      pos: a.pos.clone().lerp(end, smoothStep(localP)),
      look: HUBS[4].center.clone(),
    };
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
  log('animate started — unified galaxy ready');
})();
