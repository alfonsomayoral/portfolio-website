/* Neural section — v10 galaxy embedding clusters.

   Complete redesign per user feedback. Out: icosahedron with lines.
   In: a vast field of POINTS organized in distinct embedding-style
   clusters, like a 2D-projection atlas of a high-dim embedding (think
   the Nomic/Atlas tool) translated to 3D space.

   - 10 clusters, gaussian-distributed, ~22,000 points total.
   - 5 of them act as hub waypoints for the camera tour + card anchors.
   - ZERO lines — only points. Each point has size + color + phase.
   - Subtle per-point sine motion via custom vertex shader (time uniform
     + per-point random phase) so the field is constantly breathing.
   - Camera starts at z=+180 with the whole galaxy visible, then
     scroll-drives the camera through the 5 hub clusters in sequence.
   - Each cluster has its own color tint (mostly cyan/blue family, two
     accent clusters in soft purple and warm peach for variety).
   - Far stardust backdrop adds depth.

   Mountain hero canvas fade and inline body bg navy are unchanged. */

(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot v10 galaxy');

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
  scene.fog = new THREE.FogExp2(0x000814, 0.0035);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 800);
  camera.position.set(0, 0, 180);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ------------------------------------------------------------------
  // Cluster definitions. 5 hubs (indices 0..4) + 5 ambient clusters.
  // Positions are spread through a ~200x100x300 volume.
  // Colors use a cyan/blue family with two accent clusters (soft purple,
  // warm peach) so the field has variation like a real embedding atlas.
  // ------------------------------------------------------------------
  const CLUSTERS = [
    // 5 HUBS — these are camera waypoints
    { center: new THREE.Vector3(   0,    0,    0), color: 0x6cd2ff, count: 3800, spread: 16, isHub: true },
    { center: new THREE.Vector3(  60,   20,  -50), color: 0xa0e0ff, count: 3200, spread: 14, isHub: true },
    { center: new THREE.Vector3( -65,  -25,  -90), color: 0xb090e0, count: 2600, spread: 14, isHub: true }, // soft purple accent
    { center: new THREE.Vector3(  50,  -35, -150), color: 0x8ac0ff, count: 3000, spread: 15, isHub: true },
    { center: new THREE.Vector3( -55,   30, -210), color: 0xffb070, count: 2400, spread: 12, isHub: true }, // warm peach accent
    // 5 AMBIENT — fill the space between hubs, smaller, no camera visit
    { center: new THREE.Vector3(  35,  -15,  -25), color: 0x90c8ff, count: 1100, spread: 10, isHub: false },
    { center: new THREE.Vector3( -30,   15,  -65), color: 0x7ab8ee, count: 1300, spread: 11, isHub: false },
    { center: new THREE.Vector3(  10,   45, -120), color: 0xaccfff, count: 1000, spread: 9,  isHub: false },
    { center: new THREE.Vector3( -45,  -10, -170), color: 0x80b8ff, count: 1200, spread: 10, isHub: false },
    { center: new THREE.Vector3(  20,    5, -250), color: 0x9cc8ff, count: 900,  spread: 9,  isHub: false },
  ];
  const HUBS = CLUSTERS.filter(c => c.isHub);

  // ------------------------------------------------------------------
  // Generate all points into a single buffer geometry.
  // Each point: position(3) + color(3) + size(1) + phase(1).
  // Gaussian distribution around cluster center for organic blob shapes.
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
    for (let i = 0; i < cl.count; i++) {
      const p = new THREE.Vector3(
        cl.center.x + gauss(cl.spread),
        cl.center.y + gauss(cl.spread * 0.7),
        cl.center.z + gauss(cl.spread)
      );
      POS.push(p.x, p.y, p.z);

      // Color: mostly cluster color, occasional hot-white core
      const whiteAmount = Math.random() < 0.06 ? 0.7 : Math.random() * 0.35;
      const c = baseColor.clone().lerp(new THREE.Color(0xffffff), whiteAmount);
      COL.push(c.r, c.g, c.b);

      // Size: most small dust, a few big bright stars
      // distance from cluster center → smaller outside
      const distNorm = Math.min(1, p.distanceTo(cl.center) / cl.spread);
      const baseS = cl.isHub ? 2.4 : 1.6;
      // mostly small, occasional bigger
      const sizeMul = Math.random() < 0.08 ? 1.8 : (0.4 + Math.random() * 0.7);
      SIZ.push(baseS * sizeMul * (1 - distNorm * 0.6));

      // Phase: per-point random offset for motion
      PHA.push(Math.random() * Math.PI * 2);
    }
  }
  log('built', POS.length / 3, 'points across', CLUSTERS.length, 'clusters');

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
        // Subtle per-point sine drift — very small, just enough to feel alive
        float wave = sin(uTime * 0.35 + phase);
        pos.x += wave * 0.20;
        pos.y += cos(uTime * 0.40 + phase * 1.6) * 0.18;
        pos.z += sin(uTime * 0.30 + phase * 2.1) * 0.15;

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * 280.0 / -mv.z;
        // Soft attenuation for very distant points so they don't twinkle harshly
        vAlpha = clamp(1.0 - (-mv.z) / 500.0, 0.0, 1.0);
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

  // ---------- Far stardust backdrop ----------
  {
    const N = 1500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      // Distribute on a far sphere shell so distant stars surround everything
      const r = 320 + Math.random() * 200;
      const u = Math.random() * 2 - 1;
      const p = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      pos[i*3+0] = r * s * Math.cos(p);
      pos[i*3+1] = r * s * Math.sin(p);
      pos[i*3+2] = -Math.abs(r * u); // bias to be behind / further along -z
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
  // Camera path: approach + 5 hub visits + transits + exit
  // ------------------------------------------------------------------
  const FAR_START = new THREE.Vector3(0, 0, 180);

  // Per-hub presets: how the camera orbits each hub cluster
  // outR  = distance from hub along outward direction (toward camera)
  // tanU  = perpendicular drift in U axis
  // tanV  = perpendicular drift in V axis
  // elev  = pure z offset
  const HUB_PRESETS = [
    { outR: [30, 22], tanU: [-8,  +9], tanV: [+3, -3], elev: [+2, +4] },  // hub 0 — close approach
    { outR: [26, 20], tanU: [+7,  -8], tanV: [-4, +4], elev: [-1, +2] },  // hub 1 — horizontal orbit
    { outR: [28, 24], tanU: [-6,  +8], tanV: [+5, +7], elev: [+3, +1] },  // hub 2 — orbit + lift
    { outR: [24, 28], tanU: [+8,  -6], tanV: [-6, +2] , elev: [-2, +3] }, // hub 3 — pull back
    { outR: [32, 22], tanU: [-9,  +7], tanV: [+2, -5], elev: [+1, +2] },  // hub 4 — dive in
  ];

  function hubCameraAt(hubIdx, localP) {
    const hub = HUBS[hubIdx];
    const preset = HUB_PRESETS[hubIdx];
    const t = 0.5 - 0.5 * Math.cos(localP * Math.PI); // easeInOutSine

    const outR = THREE.MathUtils.lerp(preset.outR[0], preset.outR[1], t);
    const tanU = THREE.MathUtils.lerp(preset.tanU[0], preset.tanU[1], t);
    const tanV = THREE.MathUtils.lerp(preset.tanV[0], preset.tanV[1], t);
    const elev = THREE.MathUtils.lerp(preset.elev[0], preset.elev[1], t);

    // "Outward" is the direction from cluster center toward where the camera
    // approached from (broadly +z relative to hub). Use a tilted outward
    // vector for variety per hub.
    const baseOutward = new THREE.Vector3(0, 0, 1);
    const outward = baseOutward.clone();
    // Add slight per-hub bias to outward so cameras vary their approach angle
    const biases = [
      new THREE.Vector3( 0.0, 0.0, 0),
      new THREE.Vector3( 0.3, 0.1, 0),
      new THREE.Vector3(-0.3, 0.0, 0),
      new THREE.Vector3( 0.2,-0.2, 0),
      new THREE.Vector3(-0.2, 0.2, 0),
    ];
    outward.add(biases[hubIdx]).normalize();

    // tangentU = perpendicular in x
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
        look: HUBS[0].center.clone().multiplyScalar(smoothStep(localP)), // gradually shift look from origin to hub 0
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
    // exit — pull back past hub 4
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

  // Hero canvas + body bg + we-active
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
    // Update time uniform for per-point motion shader (in seconds)
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
  log('animate started — galaxy scene ready');
})();
