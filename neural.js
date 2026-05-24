/* Neural network plexus flythrough — v6.
   Visual upgrade pass to match the 14 AI reference images in
   assets/neural-frames/. Three additive phases stacked on top of the v4
   stations + camera path + cards architecture:

   PHASE 1 — Density + brightness brute force
     hub points 1200 → 3000, ambient 400 → 1200, 10 ambient clusters per
     hub gap (was 6), maxConn 16 inside hubs (was 8), bigger hub-star
     sprites at scale 38 (was 24), 32 radial rays per hub (was 22) with
     gauss-distributed lengths.

   PHASE 2 — Per-node rings + 60 ring constellations
     A signature element of the reference images: many bright nodes have
     a thin circle/halo ring around them. Implemented as an extra Sprite
     layer placed at ~10% of bright nodes. Plus dispersed ring
     constellations bumped 22 → 60.

   PHASE 3 — Real UnrealBloomPass postprocessing
     Replaces the fake bloom (stacked sprite layers) with real GPU bloom
     via EffectComposer + RenderPass + UnrealBloomPass loaded from
     esm.sh. Threshold 0.7 so only the brightest cores contribute. The
     "spill of light onto neighbouring dark pixels" is what makes the
     refs look photographic.

   The full station-based camera path, card anchoring to hub screen
   projection, idle float and heading fade are unchanged from v4. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v6');

  if (document.readyState === 'loading') {
    await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }

  const canvas = document.getElementById('neural-canvas');
  const section = document.getElementById('experience-neural');
  const heading = document.querySelector('.neural-heading');
  if (!canvas || !section) { log('no canvas/section, abort'); return; }

  let THREE, EffectComposer, RenderPass, UnrealBloomPass;
  try {
    THREE = await import('https://esm.sh/three@0.160.0');
    log('THREE loaded', THREE.REVISION);
    const pp1 = await import('https://esm.sh/three@0.160.0/examples/jsm/postprocessing/EffectComposer.js');
    const pp2 = await import('https://esm.sh/three@0.160.0/examples/jsm/postprocessing/RenderPass.js');
    const pp3 = await import('https://esm.sh/three@0.160.0/examples/jsm/postprocessing/UnrealBloomPass.js');
    EffectComposer = pp1.EffectComposer;
    RenderPass = pp2.RenderPass;
    UnrealBloomPass = pp3.UnrealBloomPass;
    log('postprocessing loaded');
  } catch (e) {
    console.error('[neural] failed loading three or postprocessing', e);
    return;
  }

  // ---------- Renderer ----------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000814, 0.0075);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 800);
  camera.position.set(0, 6, 75);

  // PHASE 3 — Composer with bloom
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.85,   // strength
    0.4,    // radius
    0.7     // threshold (only pixels brighter than this contribute)
  );
  composer.addPass(bloom);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ---------- 5 hub waypoints ----------
  const HUBS = [
    { pos: new THREE.Vector3(  0,   0,    0), color: 0x6cd2ff },
    { pos: new THREE.Vector3( 38,  -4,  -80), color: 0x7ad8ff },
    { pos: new THREE.Vector3(-34,   8, -170), color: 0x5cc8ff },
    { pos: new THREE.Vector3( 30,  12, -260), color: 0x8ae0ff },
    { pos: new THREE.Vector3(-28,  -2, -350), color: 0x6cd2ff },
  ];

  // ---------- Ambient clusters between hubs — PHASE 1: 10 per gap ----------
  const AMBIENT = [];
  for (let i = 0; i < HUBS.length - 1; i++) {
    const a = HUBS[i].pos, b = HUBS[i + 1].pos;
    for (let k = 0; k < 10; k++) {
      const t = (k + 1) / 11;
      const mid = a.clone().lerp(b, t);
      const offDir = new THREE.Vector3(
        (Math.random() < 0.5 ? -1 : 1) * (30 + Math.random() * 25),
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 26
      );
      AMBIENT.push({ pos: mid.add(offDir), color: 0x3da8ff });
    }
  }

  const CLUSTERS = [
    ...HUBS.map(h => ({ pos: h.pos, color: h.color, isHub: true })),
    ...AMBIENT.map(a => ({ pos: a.pos, color: a.color, isHub: false })),
  ];

  // ---------- Buffers ----------
  const POS = [], COL = [], SIZ = [];
  const LINE_POS = [], LINE_COL = [];
  // PHASE 2 — collect bright nodes for the ring overlay
  const RING_NODES = []; // { pos: Vector3, scale: number, color: number }

  const gauss = (s) => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  for (const cl of CLUSTERS) {
    // PHASE 1 — density boost
    const N = cl.isHub ? 3000 : 1200;
    const spread = cl.isHub ? 11 : 7;
    const localPts = [];
    const localSizes = [];
    const color = new THREE.Color(cl.color);

    for (let i = 0; i < N; i++) {
      const p = new THREE.Vector3(
        cl.pos.x + gauss(spread),
        cl.pos.y + gauss(spread * 0.55),
        cl.pos.z + gauss(spread)
      );
      localPts.push(p);
      POS.push(p.x, p.y, p.z);
      const c = color.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.55);
      COL.push(c.r, c.g, c.b);
      const distNorm = Math.min(1, p.distanceTo(cl.pos) / spread);
      const baseS = cl.isHub ? 3.4 : 2.0;
      const s = THREE.MathUtils.lerp(baseS, 0.3, distNorm * distNorm);
      SIZ.push(s);
      localSizes.push(s);

      // PHASE 2 — ~10% of the brightest nodes get a ring overlay
      if (s > baseS * 0.55 && Math.random() < 0.10) {
        RING_NODES.push({ pos: p.clone(), scale: 0.9 + s * 0.6, color: cl.color });
      }
    }

    // PHASE 1 — denser plexus
    const threshold = cl.isHub ? 3.0 : 2.4;
    const maxConn = cl.isHub ? 16 : 10;
    for (let i = 0; i < localPts.length; i++) {
      let cnt = 0;
      for (let j = i + 1; j < localPts.length && cnt < maxConn; j++) {
        const d = localPts[i].distanceTo(localPts[j]);
        if (d < threshold) {
          LINE_POS.push(localPts[i].x, localPts[i].y, localPts[i].z,
                        localPts[j].x, localPts[j].y, localPts[j].z);
          const k = 1 - d / threshold;
          const lc = color.clone().multiplyScalar(0.40 + k * 0.75);
          LINE_COL.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          cnt++;
        }
      }
    }
  }

  log('built', POS.length / 3, 'points,', LINE_POS.length / 6, 'lines,', RING_NODES.length, 'rings');

  // ---------- Sprite makers ----------
  const mkSprite = (size, stops) => {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    for (const [pos, col] of stops) grd.addColorStop(pos, col);
    g.fillStyle = grd; g.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return { tex, canvas: c };
  };

  // Sharp bright core for individual points
  const coreSprite = mkSprite(64, [
    [0.00, 'rgba(255,255,255,1.0)'],
    [0.10, 'rgba(230,245,255,0.95)'],
    [0.30, 'rgba(140,210,255,0.55)'],
    [0.65, 'rgba(60,150,240,0.12)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]).tex;

  // PHASE 1 — bigger, brighter hub-star sprite (384px canvas vs 256)
  const starBuilt = mkSprite(384, [
    [0.00, 'rgba(255,255,255,1.0)'],
    [0.05, 'rgba(245,250,255,0.98)'],
    [0.18, 'rgba(170,220,255,0.65)'],
    [0.42, 'rgba(80,170,250,0.22)'],
    [0.75, 'rgba(40,110,210,0.05)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]);
  {
    const g = starBuilt.canvas.getContext('2d');
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(235,248,255,0.7)';
    g.lineWidth = 3;
    g.beginPath(); g.moveTo(192, 0); g.lineTo(192, 384); g.stroke();
    g.beginPath(); g.moveTo(0, 192); g.lineTo(384, 192); g.stroke();
    starBuilt.tex.needsUpdate = true;
  }
  const starSprite = starBuilt.tex;

  // PHASE 2 — Ring sprite: hollow circle with soft inner+outer glow
  const ringSprite = (() => {
    const size = 128;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const cx = size / 2, cy = size / 2;
    const innerR = size * 0.34;
    const outerR = size * 0.46;
    const ringR = (innerR + outerR) / 2;
    // Outer soft glow
    const outerGrd = g.createRadialGradient(cx, cy, ringR * 0.7, cx, cy, ringR * 1.5);
    outerGrd.addColorStop(0.00, 'rgba(180,225,255,0.0)');
    outerGrd.addColorStop(0.50, 'rgba(120,200,255,0.35)');
    outerGrd.addColorStop(1.00, 'rgba(0,0,0,0)');
    g.fillStyle = outerGrd; g.fillRect(0, 0, size, size);
    // Solid ring stroke
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(200,235,255,0.7)';
    g.lineWidth = (outerR - innerR) * 0.55;
    g.beginPath(); g.arc(cx, cy, ringR, 0, Math.PI * 2); g.stroke();
    // Inner soft fill
    g.strokeStyle = 'rgba(140,210,255,0.25)';
    g.lineWidth = (outerR - innerR) * 1.2;
    g.beginPath(); g.arc(cx, cy, ringR, 0, Math.PI * 2); g.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  // ---------- Points layer (sharp cores) ----------
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
  pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
  pointsGeo.setAttribute('size', new THREE.Float32BufferAttribute(SIZ, 1));

  const corePoints = new THREE.Points(pointsGeo, new THREE.ShaderMaterial({
    uniforms: { uSprite: { value: coreSprite } },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * 250.0 / -mv.z;
      }
    `,
    fragmentShader: `
      uniform sampler2D uSprite;
      varying vec3 vColor;
      void main() {
        vec4 tex = texture2D(uSprite, gl_PointCoord);
        gl_FragColor = vec4(vColor, 1.0) * tex;
        if (gl_FragColor.a < 0.02) discard;
      }
    `,
    vertexColors: true, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  scene.add(corePoints);

  // ---------- Plexus lines ----------
  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(LINE_POS, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(LINE_COL, 3));
  scene.add(new THREE.LineSegments(linesGeo, new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.62,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })));

  // ---------- Inter-hub bezier curves ----------
  {
    const verts = [], cols = [];
    for (let i = 0; i < HUBS.length; i++) {
      for (let j = i + 1; j < HUBS.length; j++) {
        if (j - i > 2) continue;
        const a = HUBS[i].pos, b = HUBS[j].pos;
        const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(
          (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 26 + 8, (Math.random() - 0.5) * 40
        ));
        const pts = new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(96);
        const cc = new THREE.Color(0x7ad8ff);
        for (let k = 0; k < pts.length - 1; k++) {
          verts.push(pts[k].x, pts[k].y, pts[k].z, pts[k+1].x, pts[k+1].y, pts[k+1].z);
          cols.push(cc.r, cc.g, cc.b, cc.r, cc.g, cc.b);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.48,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Hub stars (PHASE 1 — bigger) ----------
  const hubStars = HUBS.map(hub => {
    const m = new THREE.SpriteMaterial({
      map: starSprite, color: hub.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const s = new THREE.Sprite(m);
    s.position.copy(hub.pos);
    s.scale.setScalar(38);
    scene.add(s);
    return s;
  });

  // PHASE 1 — radial bursts: 32 rays per hub with gauss-varied lengths
  for (const hub of HUBS) {
    const v = [], c = [];
    const cc = new THREE.Color(hub.color).lerp(new THREE.Color(0xffffff), 0.65);
    const rays = 32;
    for (let r = 0; r < rays; r++) {
      const ang = (r / rays) * Math.PI * 2 + (Math.random() - 0.5) * 0.08;
      const len = 9 + Math.abs(gauss(5)) + Math.random() * 4;
      const dx = Math.cos(ang) * len;
      const dy = Math.sin(ang) * len * 0.7;
      const dz = (Math.random() - 0.5) * 7;
      v.push(hub.pos.x, hub.pos.y, hub.pos.z, hub.pos.x + dx, hub.pos.y + dy, hub.pos.z + dz);
      c.push(cc.r, cc.g, cc.b, 0.03, 0.14, 0.42);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.78,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- PHASE 2 — Per-node rings overlay ----------
  // Each bright node gets a small ring sprite. Renders the "signature" look
  // of the reference images where dense nodes are surrounded by little
  // circles of their own.
  for (const r of RING_NODES) {
    const m = new THREE.SpriteMaterial({
      map: ringSprite, color: r.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      opacity: 0.55 + Math.random() * 0.35,
    });
    const s = new THREE.Sprite(m);
    s.position.copy(r.pos);
    s.scale.setScalar(r.scale);
    scene.add(s);
  }

  // ---------- PHASE 2 — Scattered ring constellations (60, was 22) ----------
  for (let i = 0; i < 60; i++) {
    const r = 0.8 + Math.random() * 2.5;
    const eg = new THREE.EdgesGeometry(new THREE.RingGeometry(r, r + 0.04, 36));
    const ring = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({
      color: 0x4dc0ff, transparent: true,
      opacity: 0.18 + Math.random() * 0.30,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    const t = Math.random();
    const i0 = Math.min(HUBS.length - 2, Math.floor(t * (HUBS.length - 1)));
    const p0 = HUBS[i0].pos, p1 = HUBS[i0 + 1].pos;
    ring.position.copy(p0.clone().lerp(p1, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 85, (Math.random() - 0.5) * 32, (Math.random() - 0.5) * 40
    )));
    ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(ring);
  }

  // ---------- Foreground bokeh ----------
  const bokehTex = mkSprite(128, [
    [0.00, 'rgba(200,230,255,0.45)'],
    [0.40, 'rgba(120,200,255,0.18)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]).tex;
  const bokeh = [];
  for (let i = 0; i < 32; i++) {
    const m = new THREE.SpriteMaterial({
      map: bokehTex, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false,
      opacity: 0.55 + Math.random() * 0.35, color: 0x9ad8ff,
    });
    const s = new THREE.Sprite(m);
    const t = Math.random();
    const i0 = Math.min(HUBS.length - 2, Math.floor(t * (HUBS.length - 1)));
    const p0 = HUBS[i0].pos, p1 = HUBS[i0 + 1].pos;
    s.position.copy(p0.clone().lerp(p1, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 32 + 12,
    )));
    s.scale.setScalar(5 + Math.random() * 11);
    s.userData = { basePos: s.position.clone(), dx: (Math.random()-0.5)*0.6, dy: (Math.random()-0.5)*0.4, ph: Math.random()*Math.PI*2 };
    scene.add(s); bokeh.push(s);
  }

  // ---------- Far stardust ----------
  {
    const N = 3000;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3+0] = (Math.random() - 0.5) * 650;
      pos[i*3+1] = (Math.random() - 0.5) * 200;
      pos[i*3+2] = -Math.random() * 500;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0x7ad8ff, size: 0.4, sizeAttenuation: true,
      transparent: true, opacity: 0.55,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- CAMERA STATIONS (unchanged from v4) ----------
  const FAR_START = new THREE.Vector3(0, 6, 75);

  function orbitAroundHub(hubIdx, localP, side) {
    const hub = HUBS[hubIdx];
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI);
    const angle = side * (-0.6 + t * 1.3);
    const radius = 22 - Math.sin(localP * Math.PI) * 7;
    const elev = (hubIdx % 2 === 0 ? 4 : -3) + Math.sin(localP * Math.PI * 1.7) * 2.5;
    const pos = new THREE.Vector3(
      hub.pos.x + Math.sin(angle) * radius,
      hub.pos.y + elev,
      hub.pos.z + Math.cos(angle) * radius * 0.6 + 8
    );
    return { pos, look: hub.pos.clone() };
  }

  const STATIONS = [
    { type: 'approach', range: [0.00, 0.08] },
    { type: 'visit',    range: [0.08, 0.22], hub: 0, side: +1 },
    { type: 'transit',  range: [0.22, 0.28], from: 0, to: 1 },
    { type: 'visit',    range: [0.28, 0.42], hub: 1, side: -1 },
    { type: 'transit',  range: [0.42, 0.48], from: 1, to: 2 },
    { type: 'visit',    range: [0.48, 0.62], hub: 2, side: +1 },
    { type: 'transit',  range: [0.62, 0.68], from: 2, to: 3 },
    { type: 'visit',    range: [0.68, 0.82], hub: 3, side: -1 },
    { type: 'transit',  range: [0.82, 0.88], from: 3, to: 4 },
    { type: 'visit',    range: [0.88, 0.97], hub: 4, side: +1 },
    { type: 'exit',     range: [0.97, 1.00] },
  ];

  function cameraAt(p) {
    const st = STATIONS.find(s => p >= s.range[0] && p < s.range[1]) || STATIONS[STATIONS.length - 1];
    const localP = (p - st.range[0]) / (st.range[1] - st.range[0]);
    if (st.type === 'approach') {
      const startPos = FAR_START.clone();
      const o = orbitAroundHub(0, 0, +1);
      const endPos = o.pos.clone();
      return { pos: startPos.lerp(endPos, smoothStep(localP)), look: HUBS[0].pos.clone() };
    }
    if (st.type === 'visit') return orbitAroundHub(st.hub, localP, st.side);
    if (st.type === 'transit') {
      const a = orbitAroundHub(st.from, 1, STATIONS.find(s => s.type === 'visit' && s.hub === st.from).side);
      const b = orbitAroundHub(st.to,   0, STATIONS.find(s => s.type === 'visit' && s.hub === st.to).side);
      const t = smoothStep(localP);
      return { pos: a.pos.clone().lerp(b.pos, t), look: HUBS[st.from].pos.clone().lerp(HUBS[st.to].pos, t) };
    }
    const a = orbitAroundHub(4, 1, +1);
    const end = HUBS[4].pos.clone().add(new THREE.Vector3(0, 0, -60));
    return { pos: a.pos.clone().lerp(end, smoothStep(localP)), look: HUBS[4].pos.clone().add(new THREE.Vector3(0, 0, -20)) };
  }
  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

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
      VEC.copy(HUBS[c.hub].pos).project(camera);
      const sx = (VEC.x + 1) * 0.5 * w;
      const sy = (1 - (VEC.y + 1) * 0.5) * h;
      const cardW = c.el.offsetWidth || 460;
      const cardH = c.el.offsetHeight || 320;
      let left, top;
      if (c.side === 'right') {
        left = Math.max(24, Math.min(w - cardW - 24, sx + 100));
        top  = Math.max(24, Math.min(h - cardH - 24, sy - cardH / 2));
      } else {
        left = Math.max(24, Math.min(w - cardW - 24, sx - cardW - 100));
        top  = Math.max(24, Math.min(h - cardH - 24, sy - cardH / 2));
      }
      c.el.style.left = `${left}px`;
      c.el.style.top  = `${top}px`;
      c.el.style.opacity = vis.toFixed(3);
      c.el.style.transform = `translateY(${(1 - vis) * 20}px)`;
      c.el.style.pointerEvents = vis > 0.6 ? 'auto' : 'none';
    }
  }

  function updateHeading() {
    if (!heading) return;
    let v = 0;
    if (document.body.classList.contains('we-active')) {
      if (smoothProgress < 0.16) v = 1;
      else if (smoothProgress < 0.22) v = 1 - (smoothProgress - 0.16) / 0.06;
    }
    heading.style.opacity = v.toFixed(3);
    const s = 1 + Math.min(0.08, smoothProgress * 0.25);
    heading.style.transform = `translateY(${-(smoothProgress * 36)}px) scale(${s.toFixed(3)})`;
  }

  // ---------- Scroll → progress ----------
  let rawProgress = 0, smoothProgress = 0;
  const updateRaw = () => {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height - vh;
    const passed = -rect.top;
    rawProgress = Math.max(0, Math.min(1, total > 0 ? passed / total : 0));
  };
  updateRaw();
  window.addEventListener('scroll', updateRaw, { passive: true });

  // Hero canvas fade + body bg + we-active
  const heroSection = document.querySelector('section.hero, [data-chapter="Hero"]');
  const globalCanvas = document.getElementById('canvas-wrapper');
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

  function animate(now) {
    smoothProgress += (rawProgress - smoothProgress) * 0.14;

    const { pos, look } = cameraAt(smoothProgress);
    pos.x += Math.sin(now * 0.0005) * 0.4;
    pos.y += Math.cos(now * 0.0004) * 0.3;
    camera.position.copy(pos);
    camera.lookAt(look);

    for (let i = 0; i < hubStars.length; i++) {
      const k = 36 + Math.sin(now * 0.001 + i * 0.7) * 3.0;
      hubStars[i].scale.setScalar(k);
    }
    for (const s of bokeh) {
      const u = s.userData;
      s.position.x = u.basePos.x + Math.sin(now * 0.0003 + u.ph) * 4 * u.dx;
      s.position.y = u.basePos.y + Math.cos(now * 0.00025 + u.ph) * 3 * u.dy;
    }

    corePoints.rotation.y = Math.sin(now * 0.00004) * 0.012;

    positionCards();
    updateHeading();

    composer.render();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  log('animate started, scene ready');
})();
