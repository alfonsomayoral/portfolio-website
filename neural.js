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

  // ---------- 5 hubs in symmetric pentagon layout ----------
  // All hubs at radius PENTAGON_R from central z-axis, evenly spaced at 72°,
  // all on the z=0 plane. Network has perfect rotational symmetry as a disk.
  const PENTAGON_R = 30;
  const HUB_COLORS = [0x6cd2ff, 0x7ad8ff, 0x5cc8ff, 0x8ae0ff, 0x6cd2ff];
  const HUBS = [];
  for (let i = 0; i < 5; i++) {
    // Start at top (-Math.PI/2) and go clockwise
    const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
    HUBS.push({
      pos: new THREE.Vector3(Math.cos(angle) * PENTAGON_R, Math.sin(angle) * PENTAGON_R, 0),
      color: HUB_COLORS[i],
      angle, // store for camera personalities
    });
  }

  // ---------- Ambient clusters distributed symmetrically inside the disk ----------
  // Placed at varying radii inside the pentagon, with small z variance, so the
  // overall shape stays a circular disk when viewed face-on.
  const AMBIENT = [];
  const NUM_AMBIENT = 22;
  for (let i = 0; i < NUM_AMBIENT; i++) {
    // distribute angles roughly evenly with jitter so it doesn't look rigid
    const angle = (i / NUM_AMBIENT) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    // bias radius toward outer ring (sqrt for uniform area distribution)
    const r = 6 + Math.sqrt(Math.random()) * (PENTAGON_R - 6 + 18);
    const z = (Math.random() - 0.5) * 14;
    AMBIENT.push({
      pos: new THREE.Vector3(Math.cos(angle) * r, Math.sin(angle) * r, z),
      color: 0x3da8ff,
    });
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

  // Keep references to each cluster's local points so we can build
  // long-range cross-cluster connections in a second pass.
  const CLUSTER_PTS = [];

  // PHASE 2 — collect bright nodes that should get a vertex-ring decoration
  const VERTEX_NODES = []; // { pos, scale, color }

  for (const cl of CLUSTERS) {
    // Tighter, denser clusters: smaller spread radius + more points
    const N = cl.isHub ? 1800 : 500;
    const spread = cl.isHub ? 6 : 4;
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
      const baseS = cl.isHub ? 3.0 : 1.8;
      const s = THREE.MathUtils.lerp(baseS, 0.3, distNorm * distNorm);
      SIZ.push(s);

      // Vertex ring: ~15% of brightest nodes get a small ring around them
      // — vertex-of-line look like the user requested
      if (s > baseS * 0.55 && Math.random() < 0.15) {
        VERTEX_NODES.push({ pos: p.clone(), scale: 0.7 + s * 0.45, color: cl.color });
      }
    }

    // Denser plexus inside cluster (maxConn 8->14 hubs, 5->9 ambient)
    const threshold = cl.isHub ? 3.6 : 2.7;
    const maxConn = cl.isHub ? 14 : 9;
    for (let i = 0; i < localPts.length; i++) {
      let cnt = 0;
      for (let j = i + 1; j < localPts.length && cnt < maxConn; j++) {
        const d = localPts[i].distanceTo(localPts[j]);
        if (d < threshold) {
          LINE_POS.push(localPts[i].x, localPts[i].y, localPts[i].z,
                        localPts[j].x, localPts[j].y, localPts[j].z);
          const k = 1 - d / threshold;
          const lc = color.clone().multiplyScalar(0.4 + k * 0.75);
          LINE_COL.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          cnt++;
        }
      }
    }

    CLUSTER_PTS.push({ pts: localPts, color, isHub: cl.isHub });
  }

  // Cross-cluster long-range connections: each cluster picks ~25 random
  // points (50 for hubs) and connects them to a random point in another
  // cluster within a reasonable distance. This is what produces the long
  // arcing lines between distant parts of the network in the references.
  for (let ci = 0; ci < CLUSTER_PTS.length; ci++) {
    const a = CLUSTER_PTS[ci];
    const samples = a.isHub ? 50 : 25;
    for (let s = 0; s < samples; s++) {
      const p1 = a.pts[Math.floor(Math.random() * a.pts.length)];
      // pick a random different cluster
      let cj = ci;
      while (cj === ci) cj = Math.floor(Math.random() * CLUSTER_PTS.length);
      const b = CLUSTER_PTS[cj];
      const p2 = b.pts[Math.floor(Math.random() * b.pts.length)];
      const d = p1.distanceTo(p2);
      // skip excessively long ones — they look bad cutting across whole scene
      if (d > 220) continue;
      LINE_POS.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      // Dim cyan so they read as background filaments, not foreground edges
      const cc = new THREE.Color(0x4dc0ff).multiplyScalar(0.35);
      LINE_COL.push(cc.r, cc.g, cc.b, cc.r, cc.g, cc.b);
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
  // Small, subtle cross flare confined to the middle 40% — user found
  // the previous full-canvas cross too dominant. Only adds a tiny hint
  // of lens-flare structure rather than a giant cross overlay.
  {
    const g = starBuilt.canvas.getContext('2d');
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(220,240,255,0.35)';
    g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(128, 76);  g.lineTo(128, 180); g.stroke();
    g.beginPath(); g.moveTo(76, 128); g.lineTo(180, 128); g.stroke();
    starBuilt.tex.needsUpdate = true;
  }
  const starSprite = starBuilt.tex;

  // Vertex ring sprite — small hollow circle for the per-node ring overlay
  const vertexRingSprite = (() => {
    const size = 64;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    g.strokeStyle = 'rgba(200,235,255,0.85)';
    g.lineWidth = 1.5;
    g.beginPath();
    g.arc(size / 2, size / 2, size * 0.32, 0, Math.PI * 2);
    g.stroke();
    // soft outer halo
    g.strokeStyle = 'rgba(120,200,255,0.25)';
    g.lineWidth = 3;
    g.beginPath();
    g.arc(size / 2, size / 2, size * 0.34, 0, Math.PI * 2);
    g.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

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

  // ---------- Per-node vertex rings (~15% of brightest nodes) ----------
  // Small hollow ring sprite at each VERTEX_NODE position so line joints
  // read as explicit circular nodes — what the user requested.
  for (const v of VERTEX_NODES) {
    const m = new THREE.SpriteMaterial({
      map: vertexRingSprite, color: v.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      opacity: 0.55 + Math.random() * 0.30,
    });
    const s = new THREE.Sprite(m);
    s.position.copy(v.pos);
    s.scale.setScalar(v.scale);
    scene.add(s);
  }

  // ---------- Boundary rings: 3 concentric circles framing the disk ----------
  // The whole network now lives inside this visible boundary, giving the
  // "circle containing the neural net" feel the user wants.
  [PENTAGON_R * 1.7, PENTAGON_R * 2.1, PENTAGON_R * 2.5].forEach((rad, idx) => {
    const eg = new THREE.EdgesGeometry(new THREE.RingGeometry(rad - 0.15, rad + 0.15, 192));
    const ring = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({
      color: 0x4dc0ff, transparent: true,
      opacity: [0.28, 0.18, 0.10][idx],
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    ring.rotation.x = Math.PI / 2 * 0; // lie flat in XY (z=0)
    ring.position.z = 0;
    scene.add(ring);
  });

  // ---------- Scattered small rings inside the disk (decorative) ----------
  for (let i = 0; i < 26; i++) {
    const r = 0.9 + Math.random() * 2.2;
    const eg = new THREE.EdgesGeometry(new THREE.RingGeometry(r, r + 0.04, 36));
    const ring = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({
      color: 0x4dc0ff, transparent: true, opacity: 0.20 + Math.random() * 0.20,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    // Place inside the pentagon disk (radius up to PENTAGON_R * 1.6)
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.sqrt(Math.random()) * PENTAGON_R * 1.6;
    ring.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist, (Math.random() - 0.5) * 12);
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
    // Distribute bokeh around the pentagon disk + slightly in front (z+)
    const aBokeh = Math.random() * Math.PI * 2;
    const dBokeh = Math.sqrt(Math.random()) * PENTAGON_R * 1.5;
    s.position.set(
      Math.cos(aBokeh) * dBokeh + (Math.random() - 0.5) * 6,
      Math.sin(aBokeh) * dBokeh + (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 14 + 6,
    );
    s.scale.setScalar(4 + Math.random() * 9);
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
  // Closer FAR_START so the network is visible almost immediately when the
  // user enters the neural section (was z:170 which made the approach phase
  // feel empty for too long of the scroll).
  // Closer FAR_START so the transition into the network starts much
  // nearer (was z:75) — user wanted the user to enter the network
  // close from the very first moment of the section.
  const FAR_START = new THREE.Vector3(0, 4, 38);

  // Per-hub camera personalities for pentagon layout. Each hub's camera
  // position is built from:
  //   outward = unit vector pointing from origin to hub (in XY plane)
  //   tangent = perpendicular to outward in XY plane (for orbital sweep)
  //   up      = z axis (for elevation)
  //
  // Then: pos = hub.pos + outward*outwardR + tangent*tangentOff + up*elev
  //
  // Each hub gets DIFFERENT values for distance from hub, elevation arc,
  // tangential sweep direction, and z-axis offset — so the 5 visits feel
  // visually distinct (some close, some pulled-back, some viewed from
  // above, some from below, some swooping).
  const HUB_PERSONALITIES = [
    // Hub 0 (top) — close eye-level approach, slight orbit clockwise
    { outR: [14, 16], elev: [+2, +4],  tangent: [-12, +14], zOff: [+2, +4]  },
    // Hub 1 (right-top) — pull back to admire, slow drift
    { outR: [12, 22], elev: [+5, +3],  tangent: [+8,  -10], zOff: [+1, +5]  },
    // Hub 2 (right-bottom) — drop from above to below
    { outR: [18, 20], elev: [+8, -3],  tangent: [-10, +12], zOff: [+3, +1]  },
    // Hub 3 (left-bottom) — swoop under, emerge upward
    { outR: [20, 16], elev: [-7, +5],  tangent: [+14, -8],  zOff: [+4, +6]  },
    // Hub 4 (left-top) — spiral dive close
    { outR: [22, 13], elev: [-1, +2],  tangent: [-14, +14], zOff: [+5, +1]  },
  ];

  function orbitAroundHub(hubIdx, localP /*, side ignored — pentagon-relative */) {
    const hub = HUBS[hubIdx];
    const p = HUB_PERSONALITIES[hubIdx];
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI); // easeInOutSine

    const outR    = THREE.MathUtils.lerp(p.outR[0],    p.outR[1],    t);
    const elev    = THREE.MathUtils.lerp(p.elev[0],    p.elev[1],    t);
    const tangent = THREE.MathUtils.lerp(p.tangent[0], p.tangent[1], t);
    const zOff    = THREE.MathUtils.lerp(p.zOff[0],    p.zOff[1],    t);

    // outward unit vector (origin → hub) in XY plane
    const outX = Math.cos(hub.angle), outY = Math.sin(hub.angle);
    // tangent unit vector (perpendicular to outward, CCW)
    const tanX = -Math.sin(hub.angle), tanY = Math.cos(hub.angle);

    // Subtle secondary oscillation so motion doesn't feel mechanical
    const wobble = Math.sin(localP * Math.PI * 2.1) * 0.8;
    const elevWob = Math.cos(localP * Math.PI * 1.6) * 0.5;

    return {
      pos: new THREE.Vector3(
        hub.pos.x + outX * (outR + wobble) + tanX * tangent,
        hub.pos.y + outY * (outR + wobble) + tanY * tangent,
        hub.pos.z + elev + elevWob + zOff
      ),
      look: hub.pos.clone(),
    };
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
      // Title visible only at the very beginning, fades out quickly so it
      // doesn't linger over the network as user gets closer
      if (smoothProgress < 0.05) v = 1;
      else if (smoothProgress < 0.10) v = 1 - (smoothProgress - 0.05) / 0.05;
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
      // Once we start fading the canvas, paint the body navy via inline
      // style so the bundle's automatic data-theme='light' swap (which the
      // Oil chapter triggers) can't flash a white background through the
      // transparent areas of the canvas. Inline style wins over the
      // theme stylesheet without forcing !important on a global selector
      // (a !important rule on html,body was breaking the Hero scene init).
      if (t > 0.05) document.body.style.backgroundColor = '#000814';
      else document.body.style.backgroundColor = '';
    }
    // Activate the neural overlay as soon as the section's top reaches
    // 60% of the viewport (was: only when section already filled half the
    // viewport, which felt like the network appeared too late).
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
    // Slower scroll follow — more cinematic, less abrupt camera response
    smoothProgress += (rawProgress - smoothProgress) * 0.07;

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
