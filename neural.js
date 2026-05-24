/* Neural network plexus flythrough — v4.
   Goals vs v3:
   - Camera no longer slides at constant speed. Journey is split into
     STATIONS: an initial far view, then per-hub VISITS where the camera
     orbits the hub for a while (so the matching card has room to be
     read), with fast TRANSITS between hubs and a final EXIT.
   - Much denser network (1200 pts per hub, 6 ambient clusters per gap).
   - Dual-layer point rendering: sharp bright cores + huge soft halos
     stacked to fake bloom — gets close to the photographic quality of
     the reference images without postprocessing.
   - Title only visible while the user is actually inside the neural
     section AND scroll progress is in the first 18%. */
(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v4');

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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000814, 0.0075);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 800);
  camera.position.set(0, 6, 160);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ---------- 5 hub waypoints, spread along Z ----------
  const HUBS = [
    { pos: new THREE.Vector3(  0,   0,    0), color: 0x6cd2ff },
    { pos: new THREE.Vector3( 38,  -4,  -80), color: 0x7ad8ff },
    { pos: new THREE.Vector3(-34,   8, -170), color: 0x5cc8ff },
    { pos: new THREE.Vector3( 30,  12, -260), color: 0x8ae0ff },
    { pos: new THREE.Vector3(-28,  -2, -350), color: 0x6cd2ff },
  ];

  // ---------- Ambient clusters between hubs (off-axis, leaving the line clean) ----------
  const AMBIENT = [];
  for (let i = 0; i < HUBS.length - 1; i++) {
    const a = HUBS[i].pos, b = HUBS[i + 1].pos;
    for (let k = 0; k < 6; k++) {
      const t = (k + 1) / 7;
      const mid = a.clone().lerp(b, t);
      const offDir = new THREE.Vector3(
        (Math.random() < 0.5 ? -1 : 1) * (32 + Math.random() * 22),
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 24
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

  const gauss = (s) => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  for (const cl of CLUSTERS) {
    const N = cl.isHub ? 1200 : 400;
    const spread = cl.isHub ? 10 : 6.5;
    const localPts = [];
    const color = new THREE.Color(cl.color);

    for (let i = 0; i < N; i++) {
      const p = new THREE.Vector3(
        cl.pos.x + gauss(spread),
        cl.pos.y + gauss(spread * 0.55),
        cl.pos.z + gauss(spread)
      );
      localPts.push(p);
      POS.push(p.x, p.y, p.z);
      const c = color.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.45);
      COL.push(c.r, c.g, c.b);
      const distNorm = Math.min(1, p.distanceTo(cl.pos) / spread);
      // Wider range of sizes for visual richness (some big bright stars, lots of dust)
      const baseS = cl.isHub ? 3.0 : 1.8;
      SIZ.push(THREE.MathUtils.lerp(baseS, 0.3, distNorm * distNorm));
    }

    // Dense plexus inside cluster
    const threshold = cl.isHub ? 3.2 : 2.4;
    const maxConn = cl.isHub ? 8 : 5;
    for (let i = 0; i < localPts.length; i++) {
      let cnt = 0;
      for (let j = i + 1; j < localPts.length && cnt < maxConn; j++) {
        const d = localPts[i].distanceTo(localPts[j]);
        if (d < threshold) {
          LINE_POS.push(localPts[i].x, localPts[i].y, localPts[i].z,
                        localPts[j].x, localPts[j].y, localPts[j].z);
          const k = 1 - d / threshold;
          const lc = color.clone().multiplyScalar(0.35 + k * 0.7);
          LINE_COL.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          cnt++;
        }
      }
    }
  }

  log('built', POS.length / 3, 'points,', LINE_POS.length / 6, 'lines');

  // ---------- Sprites ----------
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

  // Sharp bright core
  const coreSprite = mkSprite(64, [
    [0.00, 'rgba(255,255,255,1.0)'],
    [0.10, 'rgba(230,245,255,0.95)'],
    [0.30, 'rgba(140,210,255,0.50)'],
    [0.65, 'rgba(60,150,240,0.10)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]).tex;

  // Wide soft halo (used at lower alpha, larger size, additive) — fakes bloom
  const haloSprite = mkSprite(128, [
    [0.00, 'rgba(180,230,255,0.55)'],
    [0.25, 'rgba(120,200,255,0.30)'],
    [0.60, 'rgba(60,150,240,0.08)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]).tex;

  // Star sprite for hub centers
  const starBuilt = mkSprite(256, [
    [0.00, 'rgba(255,255,255,1.0)'],
    [0.07, 'rgba(230,245,255,0.95)'],
    [0.22, 'rgba(140,210,255,0.55)'],
    [0.50, 'rgba(60,150,240,0.15)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]);
  // Add cross flare on top
  {
    const g = starBuilt.canvas.getContext('2d');
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(230,245,255,0.65)';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(128, 0); g.lineTo(128, 256); g.stroke();
    g.beginPath(); g.moveTo(0, 128); g.lineTo(256, 128); g.stroke();
    starBuilt.tex.needsUpdate = true;
  }
  const starSprite = starBuilt.tex;

  // ---------- Build TWO point layers sharing the same geometry: sharp cores + wide halos ----------
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
  pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
  pointsGeo.setAttribute('size', new THREE.Float32BufferAttribute(SIZ, 1));

  const coreShader = {
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * 230.0 / -mv.z;
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
  };

  const corePoints = new THREE.Points(pointsGeo, new THREE.ShaderMaterial({
    uniforms: { uSprite: { value: coreSprite } },
    vertexShader: coreShader.vertexShader,
    fragmentShader: coreShader.fragmentShader,
    vertexColors: true, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  scene.add(corePoints);

  // Halo layer (same vertices, much bigger gl_PointSize multiplier, soft sprite)
  const haloPoints = new THREE.Points(pointsGeo, new THREE.ShaderMaterial({
    uniforms: { uSprite: { value: haloSprite } },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * 750.0 / -mv.z;
      }
    `,
    fragmentShader: `
      uniform sampler2D uSprite;
      varying vec3 vColor;
      void main() {
        vec4 tex = texture2D(uSprite, gl_PointCoord);
        gl_FragColor = vec4(vColor, 1.0) * tex * 0.35;
        if (gl_FragColor.a < 0.01) discard;
      }
    `,
    vertexColors: true, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  scene.add(haloPoints);

  // ---------- Plexus lines ----------
  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(LINE_POS, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(LINE_COL, 3));
  scene.add(new THREE.LineSegments(linesGeo, new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, depthWrite: false,
  })));

  // ---------- Long curved inter-hub bezier links ----------
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
      vertexColors: true, transparent: true, opacity: 0.42,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Hub stars + radial bursts ----------
  const hubStars = HUBS.map(hub => {
    const m = new THREE.SpriteMaterial({
      map: starSprite, color: hub.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const s = new THREE.Sprite(m);
    s.position.copy(hub.pos);
    s.scale.setScalar(24);
    scene.add(s);
    return s;
  });

  for (const hub of HUBS) {
    const v = [], c = [];
    const cc = new THREE.Color(hub.color).lerp(new THREE.Color(0xffffff), 0.6);
    const rays = 22;
    for (let r = 0; r < rays; r++) {
      const ang = (r / rays) * Math.PI * 2;
      const len = 10 + Math.random() * 8;
      const dx = Math.cos(ang) * len;
      const dy = Math.sin(ang) * len * 0.65;
      const dz = (Math.random() - 0.5) * 6;
      v.push(hub.pos.x, hub.pos.y, hub.pos.z, hub.pos.x + dx, hub.pos.y + dy, hub.pos.z + dz);
      c.push(cc.r, cc.g, cc.b, 0.04, 0.16, 0.4);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Scattered rings ----------
  for (let i = 0; i < 22; i++) {
    const r = 1.0 + Math.random() * 2.5;
    const eg = new THREE.EdgesGeometry(new THREE.RingGeometry(r, r + 0.04, 40));
    const ring = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({
      color: 0x4dc0ff, transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    const t = Math.random();
    const i0 = Math.min(HUBS.length - 2, Math.floor(t * (HUBS.length - 1)));
    const p0 = HUBS[i0].pos, p1 = HUBS[i0 + 1].pos;
    ring.position.copy(p0.clone().lerp(p1, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 70, (Math.random() - 0.5) * 28, (Math.random() - 0.5) * 34
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
  for (let i = 0; i < 28; i++) {
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
      (Math.random() - 0.5) * 45, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30 + 10,
    )));
    s.scale.setScalar(4 + Math.random() * 10);
    s.userData = { basePos: s.position.clone(), dx: (Math.random()-0.5)*0.6, dy: (Math.random()-0.5)*0.4, ph: Math.random()*Math.PI*2 };
    scene.add(s); bokeh.push(s);
  }

  // ---------- Far stardust ----------
  {
    const N = 2500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3+0] = (Math.random() - 0.5) * 600;
      pos[i*3+1] = (Math.random() - 0.5) * 180;
      pos[i*3+2] = -Math.random() * 450;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0x7ad8ff, size: 0.45, sizeAttenuation: true,
      transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- CAMERA STATIONS ----------
  // Each station owns a range of scrollProgress and a function (localP) → {pos, look}.
  // visit station orbits a hub; transit station lerps; approach/exit are linear.
  const FAR_START = new THREE.Vector3(0, 8, 170);

  function orbitAroundHub(hubIdx, localP, side) {
    // side: +1 right, -1 left (controls orbit direction; alternated per hub)
    const hub = HUBS[hubIdx];
    // Use easeInOutSine for nice slow start/end
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI);
    // angle sweeps from -0.6 rad to +0.7 rad
    const angle = side * (-0.6 + t * 1.3);
    // radius varies: closer mid-visit
    const radius = 22 - Math.sin(localP * Math.PI) * 7;
    // elevation oscillates a bit
    const elev = (hubIdx % 2 === 0 ? 4 : -3) + Math.sin(localP * Math.PI * 1.7) * 2.5;
    const pos = new THREE.Vector3(
      hub.pos.x + Math.sin(angle) * radius,
      hub.pos.y + elev,
      hub.pos.z + Math.cos(angle) * radius * 0.6 + 8
    );
    return { pos, look: hub.pos.clone() };
  }

  const STATIONS = [
    // type, range[start,end], data
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
      // Far → close to hub-0 starting orbit position
      const startPos = FAR_START.clone();
      const o = orbitAroundHub(0, 0, +1);
      const endPos = o.pos.clone();
      return {
        pos: startPos.lerp(endPos, smoothStep(localP)),
        look: HUBS[0].pos.clone(),
      };
    }
    if (st.type === 'visit') {
      return orbitAroundHub(st.hub, localP, st.side);
    }
    if (st.type === 'transit') {
      const a = orbitAroundHub(st.from, 1, STATIONS.find(s => s.type === 'visit' && s.hub === st.from).side);
      const b = orbitAroundHub(st.to,   0, STATIONS.find(s => s.type === 'visit' && s.hub === st.to).side);
      const t = smoothStep(localP);
      return {
        pos: a.pos.clone().lerp(b.pos, t),
        look: HUBS[st.from].pos.clone().lerp(HUBS[st.to].pos, t),
      };
    }
    // exit
    const a = orbitAroundHub(4, 1, +1);
    const end = HUBS[4].pos.clone().add(new THREE.Vector3(0, 0, -60));
    return {
      pos: a.pos.clone().lerp(end, smoothStep(localP)),
      look: HUBS[4].pos.clone().add(new THREE.Vector3(0, 0, -20)),
    };
  }

  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

  // ---------- Cards: visible during their hub's visit station ----------
  const visitByHub = {};
  for (const st of STATIONS) if (st.type === 'visit') visitByHub[st.hub] = st;

  const cards = Array.from(section.querySelectorAll('.neural-card')).map(el => {
    const hub = parseInt(el.dataset.hub, 10);
    const visit = visitByHub[hub];
    return {
      el, hub, visit,
      side: el.classList.contains('neural-card--left') ? 'left' : 'right',
    };
  });

  const VEC = new THREE.Vector3();
  function positionCards() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    for (const c of cards) {
      const [a, b] = c.visit.range;
      let vis = 0;
      if (smoothProgress >= a - 0.02 && smoothProgress <= b + 0.02) {
        // fade in over first 0.03, fade out over last 0.03
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
      // Project hub to screen
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

  // ---------- Title fade: only during approach + early into hub-0 visit ----------
  function updateHeading() {
    if (!heading) return;
    let v = 0;
    // Only visible if section is currently in view (we-active) AND progress is in first 18%
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

  // Scroll-driven fade of the global WebGL canvas (which renders the hero
  // mountain). Mountain is fully visible at scrollY 0, starts fading at
  // 25% of hero height, fully gone at 60% of hero height. Beyond that the
  // Trading bundle will try to render Oil/Metals scenes but with opacity 0
  // they are completely invisible. Also force the body theme back to dark
  // so the bundle's automatic data-theme="light" switch can't whiten the bg.
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
    }
    const rect = section.getBoundingClientRect();
    const inside = rect.top <= 1 && rect.bottom >= window.innerHeight * 0.5;
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
    // tiny float
    pos.x += Math.sin(now * 0.0005) * 0.4;
    pos.y += Math.cos(now * 0.0004) * 0.3;
    camera.position.copy(pos);
    camera.lookAt(look);

    // Pulsing hub stars
    for (let i = 0; i < hubStars.length; i++) {
      const k = 23 + Math.sin(now * 0.001 + i * 0.7) * 2.2;
      hubStars[i].scale.setScalar(k);
    }

    // Bokeh drift
    for (const s of bokeh) {
      const u = s.userData;
      s.position.x = u.basePos.x + Math.sin(now * 0.0003 + u.ph) * 4 * u.dx;
      s.position.y = u.basePos.y + Math.cos(now * 0.00025 + u.ph) * 3 * u.dy;
    }

    corePoints.rotation.y = haloPoints.rotation.y = Math.sin(now * 0.00004) * 0.012;

    positionCards();
    updateHeading();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  log('animate started');
})();
