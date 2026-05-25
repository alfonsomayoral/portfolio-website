/* Neural network — v9 icosahedron clean geometric design.

   Complete redesign per user feedback: previous pentagon/clusters
   versions were too noisy, lacked clear symmetry and had a visible
   horizontal cut at the section boundary.

   New approach:
   - ONE single geometric figure: a regular icosahedron (12 vertices,
     30 edges, 20 faces). All connections are real geometric edges of
     the polyhedron. No random plexus, no scatter, no chaos.
   - Subtle dust particles along each edge so they read as "lit" lines.
   - 5 of the 12 vertices act as hub waypoints for the camera tour.
   - Camera always frames the icosahedron centered: starts far back
     showing the full shape, then visits each hub vertex with slight
     orbit variation, then exits behind.
   - Canvas-wrap is always opacity 1 (no fade gate) so the network is
     visible the instant the section enters viewport — no abrupt
     "thing appears" cut.

   Mountain hero canvas fade and inline body bg navy are unchanged. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v9 icosahedron');

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
  renderer.setClearColor(0x000814, 0); // bg shows through

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000814, 0.012);

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 600);
  camera.position.set(0, 0, 80);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ------------------------------------------------------------------
  // Icosahedron geometry: 12 vertices, 30 edges. Computed manually so
  // we have full control over hub picks + edge dust placement.
  // ------------------------------------------------------------------
  const ICO_R = 26;                                  // outer radius
  const t = (1 + Math.sqrt(5)) / 2;                  // golden ratio
  const NF = ICO_R / Math.sqrt(1 + t * t);           // normalization
  const ICO_VERTS = [
    new THREE.Vector3(-1,  t,  0).multiplyScalar(NF),  // 0
    new THREE.Vector3( 1,  t,  0).multiplyScalar(NF),  // 1
    new THREE.Vector3(-1, -t,  0).multiplyScalar(NF),  // 2
    new THREE.Vector3( 1, -t,  0).multiplyScalar(NF),  // 3
    new THREE.Vector3( 0, -1,  t).multiplyScalar(NF),  // 4
    new THREE.Vector3( 0,  1,  t).multiplyScalar(NF),  // 5
    new THREE.Vector3( 0, -1, -t).multiplyScalar(NF),  // 6
    new THREE.Vector3( 0,  1, -t).multiplyScalar(NF),  // 7
    new THREE.Vector3( t,  0, -1).multiplyScalar(NF),  // 8
    new THREE.Vector3( t,  0,  1).multiplyScalar(NF),  // 9
    new THREE.Vector3(-t,  0, -1).multiplyScalar(NF),  // 10
    new THREE.Vector3(-t,  0,  1).multiplyScalar(NF),  // 11
  ];

  // Edges: 30 total. Two vertices form an edge iff distance equals the
  // standard icosahedron edge length (2 in unscaled units, 2*NF here).
  const EDGE_LEN = 2 * NF;
  const ICO_EDGES = [];
  for (let i = 0; i < ICO_VERTS.length; i++) {
    for (let j = i + 1; j < ICO_VERTS.length; j++) {
      const d = ICO_VERTS[i].distanceTo(ICO_VERTS[j]);
      if (Math.abs(d - EDGE_LEN) < 0.1) ICO_EDGES.push([i, j]);
    }
  }
  log('icosahedron:', ICO_VERTS.length, 'vertices,', ICO_EDGES.length, 'edges');

  // ---------- Render the 30 edges as bright cyan lines ----------
  {
    const verts = [], cols = [];
    const edgeColor = new THREE.Color(0x6cd2ff);
    for (const [i, j] of ICO_EDGES) {
      const a = ICO_VERTS[i], b = ICO_VERTS[j];
      verts.push(a.x, a.y, a.z, b.x, b.y, b.z);
      cols.push(edgeColor.r, edgeColor.g, edgeColor.b, edgeColor.r, edgeColor.g, edgeColor.b);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Edge dust: small particles along each edge ----------
  // Gives the edges a "lit / energetic" look while keeping the shape clean.
  const dustSprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.25, 'rgba(180,225,255,0.85)');
    grd.addColorStop(0.55, 'rgba(80,170,255,0.30)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  {
    const POS = [], COL = [], SIZ = [];
    const dustPerEdge = 22;
    const dustColor = new THREE.Color(0x9ad8ff);
    for (const [i, j] of ICO_EDGES) {
      const a = ICO_VERTS[i], b = ICO_VERTS[j];
      for (let k = 0; k < dustPerEdge; k++) {
        const t = (k + 0.5) / dustPerEdge;
        // tiny perpendicular jitter so they don't lie EXACTLY on the line
        const jitter = 0.15;
        POS.push(
          a.x + (b.x - a.x) * t + (Math.random() - 0.5) * jitter,
          a.y + (b.y - a.y) * t + (Math.random() - 0.5) * jitter,
          a.z + (b.z - a.z) * t + (Math.random() - 0.5) * jitter
        );
        COL.push(dustColor.r, dustColor.g, dustColor.b);
        SIZ.push(0.4 + Math.random() * 0.5);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
    g.setAttribute('size', new THREE.Float32BufferAttribute(SIZ, 1));
    scene.add(new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: { uSprite: { value: dustSprite } },
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
    })));
  }

  // ---------- Hub waypoints: 5 of the 12 vertices, chosen symmetrically ----------
  // Picked so the 5 hubs are well-spread around the icosahedron
  const HUB_VERTEX_INDICES = [5, 1, 9, 3, 10];
  const HUB_COLORS = [0x6cd2ff, 0x7ad8ff, 0x5cc8ff, 0x8ae0ff, 0x6cd2ff];
  const HUBS = HUB_VERTEX_INDICES.map((idx, i) => ({
    pos: ICO_VERTS[idx].clone(),
    color: HUB_COLORS[i],
    outward: ICO_VERTS[idx].clone().normalize(),
  }));

  // ---------- Hub star sprite (no big cross flare) ----------
  const starSprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.08, 'rgba(240,250,255,0.95)');
    grd.addColorStop(0.25, 'rgba(160,220,255,0.55)');
    grd.addColorStop(0.55, 'rgba(60,150,240,0.12)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
    // very subtle small cross flare (middle 30% only, dim)
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(220,240,255,0.28)';
    g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(128, 90); g.lineTo(128, 166); g.stroke();
    g.beginPath(); g.moveTo(90, 128); g.lineTo(166, 128); g.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  const hubStars = HUBS.map(hub => {
    const m = new THREE.SpriteMaterial({
      map: starSprite, color: hub.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const s = new THREE.Sprite(m);
    s.position.copy(hub.pos);
    s.scale.setScalar(7);
    scene.add(s);
    return s;
  });

  // ---------- Render the 12 vertices as small bright nodes ----------
  // Distinguishes vertex points from edge dust visually
  {
    const POS = [], COL = [], SIZ = [];
    const vCol = new THREE.Color(0xb0e0ff);
    for (let i = 0; i < ICO_VERTS.length; i++) {
      const v = ICO_VERTS[i];
      POS.push(v.x, v.y, v.z);
      COL.push(vCol.r, vCol.g, vCol.b);
      SIZ.push(HUB_VERTEX_INDICES.includes(i) ? 4 : 2.2);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
    g.setAttribute('size', new THREE.Float32BufferAttribute(SIZ, 1));
    scene.add(new THREE.Points(g, new THREE.ShaderMaterial({
      uniforms: { uSprite: { value: dustSprite } },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = size * 320.0 / -mv.z;
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
    })));
  }

  // ---------- Far stardust for depth ----------
  {
    const N = 800;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      // distribute in a large sphere around the icosahedron
      const r = 100 + Math.random() * 300;
      const u = Math.random() * 2 - 1, p = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      pos[i*3+0] = r * s * Math.cos(p);
      pos[i*3+1] = r * s * Math.sin(p);
      pos[i*3+2] = r * u;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0x6cb8ee, size: 0.4, sizeAttenuation: true,
      transparent: true, opacity: 0.5,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ------------------------------------------------------------------
  // Camera: approach + 5 hub visits + transits + exit
  // All positions computed relative to the icosahedron, always looking
  // at the icosahedron center (origin).
  // ------------------------------------------------------------------
  const FAR_START = new THREE.Vector3(0, 0, 80); // far back, full ico visible

  // Per-hub camera presets — different distance, elevation, tangent
  // offset so each visit feels distinct.
  const HUB_PRESETS = [
    { outR: [22, 14], tanU: [-6,  +7], tanV: [+2, -3] },  // hub 0 — dive in
    { outR: [16, 18], tanU: [+8,  -8], tanV: [-3, +3] },  // hub 1 — orbit horizontal
    { outR: [20, 16], tanU: [-7,  +9], tanV: [+4, +6] },  // hub 2 — orbit + lift
    { outR: [18, 20], tanU: [+6,  -7], tanV: [-5, +2] },  // hub 3 — pull back
    { outR: [24, 14], tanU: [-9,  +8], tanV: [+1, -4] },  // hub 4 — spiral in
  ];

  function hubCameraAt(hubIdx, localP) {
    const hub = HUBS[hubIdx];
    const preset = HUB_PRESETS[hubIdx];
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI); // easeInOutSine

    const outR = THREE.MathUtils.lerp(preset.outR[0], preset.outR[1], t);
    const tanU = THREE.MathUtils.lerp(preset.tanU[0], preset.tanU[1], t);
    const tanV = THREE.MathUtils.lerp(preset.tanV[0], preset.tanV[1], t);

    // Build orthonormal basis: outward = away from origin, tangent U = perp in horizontal-ish, tangent V = perp in vertical-ish
    const outward = hub.outward.clone();
    // arbitrary up reference to derive tangents; if outward is too close to up, use side
    const ref = Math.abs(outward.y) > 0.95
      ? new THREE.Vector3(1, 0, 0)
      : new THREE.Vector3(0, 1, 0);
    const tangentU = new THREE.Vector3().crossVectors(outward, ref).normalize();
    const tangentV = new THREE.Vector3().crossVectors(outward, tangentU).normalize();

    // Subtle wobble for life
    const wobble = Math.sin(localP * Math.PI * 2.1) * 0.5;

    const pos = hub.pos.clone()
      .add(outward.multiplyScalar(outR + wobble))
      .add(tangentU.multiplyScalar(tanU))
      .add(tangentV.multiplyScalar(tanV));

    return { pos, look: new THREE.Vector3(0, 0, 0) }; // always look at origin = ico center
  }

  function smoothStep(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }

  // Station ranges over scrollProgress
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
        look: new THREE.Vector3(0, 0, 0),
      };
    }
    if (st.type === 'visit') return hubCameraAt(st.hub, localP);
    if (st.type === 'transit') {
      const a = hubCameraAt(st.from, 1);
      const b = hubCameraAt(st.to, 0);
      const t = smoothStep(localP);
      return {
        pos: a.pos.clone().lerp(b.pos, t),
        look: new THREE.Vector3(0, 0, 0),
      };
    }
    // exit — pull back from hub 4
    const a = hubCameraAt(4, 1);
    const end = new THREE.Vector3(0, 0, -90);
    return {
      pos: a.pos.clone().lerp(end, smoothStep(localP)),
      look: new THREE.Vector3(0, 0, 0),
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
      VEC.copy(HUBS[c.hub].pos).project(camera);
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

  // Hero canvas + body bg + we-active
  const heroSection = document.querySelector('section.hero, [data-chapter="Hero"]');
  const globalCanvas = document.getElementById('canvas-wrapper');
  // Force the neural canvas-wrap to always be visible (no fade gate).
  // The canvas itself is transparent + alpha so when it has nothing to
  // show, the navy bg behind shows through cleanly — no visible cut.
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

  function animate(now) {
    // Slow cinematic scroll follow
    smoothProgress += (rawProgress - smoothProgress) * 0.07;

    const { pos, look } = cameraAt(smoothProgress);
    // Subtle floating motion
    pos.x += Math.sin(now * 0.0004) * 0.3;
    pos.y += Math.cos(now * 0.0003) * 0.2;
    camera.position.copy(pos);
    camera.lookAt(look);

    // Pulsing hub stars
    for (let i = 0; i < hubStars.length; i++) {
      const k = 7 + Math.sin(now * 0.001 + i * 0.7) * 0.7;
      hubStars[i].scale.setScalar(k);
    }

    positionCards();
    updateHeading();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  log('animate started — icosahedron scene ready');
})();
