/* Neural network plexus flythrough — v3.
   Story:
     0.00 - 0.18  far view, see the whole network, main title visible.
     0.18 - 0.30  approach, title fades, dive into first hub area.
     0.28 - 0.92  fly through 5 hubs; at each hub-peak progress the
                  matching card emerges anchored to the hub's screen
                  projection.
     0.92 - 1.00  exit through the back of the last hub.

   Visual model is procedural but tuned to match the reference images:
   tight gaussian clusters of bright additive points, intra-cluster
   plexus lines connecting nearest neighbors, long curved bezier
   inter-hub links, big sprite hub stars with cross-flares, scattered
   ring constellations, foreground bokeh orbs for depth, far stardust. */
(async function () {
  const log = (...a) => console.log('[neural]', ...a);
  log('boot');

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
  scene.fog = new THREE.FogExp2(0x000814, 0.0085);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 800);
  camera.position.set(0, 4, 140);

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // ---------- 5 hub waypoints, well-separated for the flythrough ----------
  const HUBS = [
    { pos: new THREE.Vector3(  0,   0,    0), color: 0x5cc8ff },
    { pos: new THREE.Vector3( 34,  -4,  -70), color: 0x6cd2ff },
    { pos: new THREE.Vector3(-30,   6, -150), color: 0x4dc0ff },
    { pos: new THREE.Vector3( 26,  10, -230), color: 0x7ad8ff },
    { pos: new THREE.Vector3(-24,  -2, -310), color: 0x5cc8ff },
  ];

  // ---------- Ambient clusters between hubs, ONLY in side regions ----------
  // We leave a clean corridor on the direct line between consecutive hubs
  // so cards have empty visual space when camera is near a hub.
  const AMBIENT = [];
  for (let i = 0; i < HUBS.length - 1; i++) {
    const a = HUBS[i].pos, b = HUBS[i + 1].pos;
    for (let k = 0; k < 3; k++) {
      const t = (k + 1) / 4;
      const mid = a.clone().lerp(b, t);
      // Push the ambient cluster sideways/up-down so it's not on the camera path
      const offDir = new THREE.Vector3(
        (Math.random() < 0.5 ? -1 : 1) * (28 + Math.random() * 18),
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 20
      );
      AMBIENT.push({ pos: mid.add(offDir), color: 0x3da8ff });
    }
  }

  const CLUSTERS = [
    ...HUBS.map(h => ({ pos: h.pos, color: h.color, isHub: true })),
    ...AMBIENT.map(a => ({ pos: a.pos, color: a.color, isHub: false })),
  ];

  // ---------- Buffers for points & plexus lines ----------
  const POS = [], COL = [], SIZ = [];
  const LINE_POS = [], LINE_COL = [];

  const gauss = (s) => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  for (const cl of CLUSTERS) {
    const N = cl.isHub ? 520 : 220;
    const spread = cl.isHub ? 9 : 6;
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
      // mostly cluster color, a few bright whites
      const c = color.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.35);
      COL.push(c.r, c.g, c.b);
      const distNorm = Math.min(1, p.distanceTo(cl.pos) / spread);
      // Sizes: a few quite big bright stars, many tiny
      const baseS = cl.isHub ? 2.4 : 1.6;
      SIZ.push(THREE.MathUtils.lerp(baseS, 0.35, distNorm));
    }

    // Plexus inside cluster — connect to nearest few neighbors within radius
    const threshold = cl.isHub ? 3.6 : 2.7;
    const maxConn = cl.isHub ? 5 : 3;
    for (let i = 0; i < localPts.length; i++) {
      let cnt = 0;
      for (let j = i + 1; j < localPts.length && cnt < maxConn; j++) {
        const d = localPts[i].distanceTo(localPts[j]);
        if (d < threshold) {
          LINE_POS.push(localPts[i].x, localPts[i].y, localPts[i].z,
                        localPts[j].x, localPts[j].y, localPts[j].z);
          const k = 1 - d / threshold;
          const lc = color.clone().multiplyScalar(0.35 + k * 0.55);
          LINE_COL.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          cnt++;
        }
      }
    }
  }

  // ---------- Point sprite (soft blue radial) ----------
  const mkSprite = (size, stops) => {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    for (const [pos, col] of stops) grd.addColorStop(pos, col);
    g.fillStyle = grd; g.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  };

  const pointSprite = mkSprite(64, [
    [0.00, 'rgba(255,255,255,1)'],
    [0.20, 'rgba(200,230,255,0.85)'],
    [0.50, 'rgba(90,180,255,0.30)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]);

  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(POS, 3));
  pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(COL, 3));
  pointsGeo.setAttribute('size', new THREE.Float32BufferAttribute(SIZ, 1));

  // Custom shader so per-vertex size attribute works
  const pointsMat = new THREE.ShaderMaterial({
    uniforms: {
      uSprite: { value: pointSprite },
      uPxRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * 220.0 / -mv.z;
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
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const pointsObj = new THREE.Points(pointsGeo, pointsMat);
  scene.add(pointsObj);

  // ---------- Plexus lines ----------
  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(LINE_POS, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(LINE_COL, 3));
  const linesMat = new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, opacity: 0.55,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  scene.add(new THREE.LineSegments(linesGeo, linesMat));

  // ---------- Long curved inter-hub bezier links ----------
  {
    const verts = [], cols = [];
    for (let i = 0; i < HUBS.length; i++) {
      for (let j = i + 1; j < HUBS.length; j++) {
        if (j - i > 2) continue;
        const a = HUBS[i].pos, b = HUBS[j].pos;
        const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(
          (Math.random() - 0.5) * 36,
          (Math.random() - 0.5) * 24 + 6,
          (Math.random() - 0.5) * 36
        ));
        const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
        const pts = curve.getPoints(80);
        const cc = new THREE.Color(0x6cd2ff);
        for (let k = 0; k < pts.length - 1; k++) {
          verts.push(pts[k].x, pts[k].y, pts[k].z,
                     pts[k+1].x, pts[k+1].y, pts[k+1].z);
          cols.push(cc.r, cc.g, cc.b, cc.r, cc.g, cc.b);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.35,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Hub stars (big halos + cross flare) ----------
  const starTex = mkSprite(256, [
    [0.00, 'rgba(255,255,255,1)'],
    [0.08, 'rgba(230,245,255,0.95)'],
    [0.25, 'rgba(120,200,255,0.55)'],
    [0.55, 'rgba(50,140,240,0.15)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]);
  // Add cross flares onto the star texture
  {
    const c = starTex.image;
    const g = c.getContext('2d');
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(220,240,255,0.5)';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(128, 0); g.lineTo(128, 256); g.stroke();
    g.beginPath(); g.moveTo(0, 128); g.lineTo(256, 128); g.stroke();
    starTex.needsUpdate = true;
  }

  const hubStars = HUBS.map(hub => {
    const mat = new THREE.SpriteMaterial({
      map: starTex, color: hub.color,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const s = new THREE.Sprite(mat);
    s.position.copy(hub.pos);
    s.scale.setScalar(20);
    scene.add(s);
    return s;
  });

  // Radial ray bursts at each hub
  for (const hub of HUBS) {
    const v = [], c = [];
    const cc = new THREE.Color(hub.color).lerp(new THREE.Color(0xffffff), 0.55);
    const rays = 18;
    for (let r = 0; r < rays; r++) {
      const ang = (r / rays) * Math.PI * 2;
      const len = 9 + Math.random() * 7;
      const dx = Math.cos(ang) * len;
      const dy = Math.sin(ang) * len * 0.65;
      const dz = (Math.random() - 0.5) * 5;
      v.push(hub.pos.x, hub.pos.y, hub.pos.z,
             hub.pos.x + dx, hub.pos.y + dy, hub.pos.z + dz);
      c.push(cc.r, cc.g, cc.b, 0.05, 0.18, 0.4);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(c, 3));
    scene.add(new THREE.LineSegments(g, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.7,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Scattered geometric rings ----------
  for (let i = 0; i < 18; i++) {
    const r = 1 + Math.random() * 2;
    const eg = new THREE.EdgesGeometry(new THREE.RingGeometry(r, r + 0.05, 36));
    const ring = new THREE.LineSegments(eg, new THREE.LineBasicMaterial({
      color: 0x4dc0ff, transparent: true, opacity: 0.3,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    const t = Math.random();
    const i0 = Math.min(HUBS.length - 2, Math.floor(t * (HUBS.length - 1)));
    const p0 = HUBS[i0].pos, p1 = HUBS[i0 + 1].pos;
    const center = p0.clone().lerp(p1, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 30
    ));
    ring.position.copy(center);
    ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(ring);
  }

  // ---------- Foreground bokeh orbs (slow drifting big sprites) ----------
  const bokehTex = mkSprite(128, [
    [0.00, 'rgba(200,230,255,0.4)'],
    [0.45, 'rgba(120,200,255,0.18)'],
    [1.00, 'rgba(0,0,0,0)'],
  ]);
  const bokehOrbs = [];
  for (let i = 0; i < 22; i++) {
    const m = new THREE.SpriteMaterial({
      map: bokehTex, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false,
      opacity: 0.55 + Math.random() * 0.35,
      color: 0x9ad8ff,
    });
    const s = new THREE.Sprite(m);
    const t = Math.random();
    const i0 = Math.min(HUBS.length - 2, Math.floor(t * (HUBS.length - 1)));
    const p0 = HUBS[i0].pos, p1 = HUBS[i0 + 1].pos;
    s.position.copy(p0.clone().lerp(p1, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 30 + 8, // pull forward
    )));
    s.scale.setScalar(4 + Math.random() * 8);
    s.userData = {
      basePos: s.position.clone(),
      driftX: (Math.random() - 0.5) * 0.6,
      driftY: (Math.random() - 0.5) * 0.4,
      phase: Math.random() * Math.PI * 2,
    };
    scene.add(s);
    bokehOrbs.push(s);
  }

  // ---------- Far background stardust ----------
  {
    const N = 1800;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3+0] = (Math.random() - 0.5) * 500;
      pos[i*3+1] = (Math.random() - 0.5) * 160;
      pos[i*3+2] = -Math.random() * 380;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({
      color: 0x7ad8ff, size: 0.35, sizeAttenuation: true,
      transparent: true, opacity: 0.45,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ---------- Camera path: 8 waypoints (far → near → through hubs → exit) ----------
  // Far start so user first sees the network from a distance with title visible.
  const pathPoints = [
    new THREE.Vector3(0, 6, 160),                                 // 0 far
    HUBS[0].pos.clone().add(new THREE.Vector3(0, 4, 60)),         // 1 mid approach
    HUBS[0].pos.clone().add(new THREE.Vector3(2, 1, 18)),         // 2 hub-0
    HUBS[1].pos.clone().add(new THREE.Vector3(-4, 3, 16)),        // 3 hub-1
    HUBS[2].pos.clone().add(new THREE.Vector3(5, -2, 17)),        // 4 hub-2
    HUBS[3].pos.clone().add(new THREE.Vector3(-6, 2, 15)),        // 5 hub-3
    HUBS[4].pos.clone().add(new THREE.Vector3(4, -1, 17)),        // 6 hub-4
    HUBS[4].pos.clone().add(new THREE.Vector3(0, 0, -40)),        // 7 exit
  ];
  const camPath = new THREE.CatmullRomCurve3(pathPoints, false, 'catmullrom', 0.35);

  // ---------- Scroll → progress (with smoothing) ----------
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

  // Activate body class for fade-in
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) document.body.classList.add('we-active');
      else document.body.classList.remove('we-active');
    }
  }, { threshold: 0.01 });
  io.observe(section);

  // ---------- Cards: anchor to projected hub screen position ----------
  const cards = Array.from(section.querySelectorAll('.neural-card')).map(el => ({
    el,
    hub: parseInt(el.dataset.hub, 10),
    progress: parseFloat(el.dataset.progress),
    side: el.classList.contains('neural-card--left') ? 'left' : 'right',
  }));

  const VEC = new THREE.Vector3();
  function positionCards() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const visWindow = 0.09; // half-width of visibility window
    for (const c of cards) {
      const dist = Math.abs(smoothProgress - c.progress);
      let vis = Math.max(0, 1 - dist / visWindow);
      // Smoother easing
      vis = vis * vis * (3 - 2 * vis);
      if (vis <= 0.01) {
        c.el.style.opacity = '0';
        c.el.style.pointerEvents = 'none';
        continue;
      }
      // Project hub center to screen
      VEC.copy(HUBS[c.hub].pos).project(camera);
      // If hub is behind camera, hide
      if (VEC.z > 1) {
        c.el.style.opacity = '0';
        c.el.style.pointerEvents = 'none';
        continue;
      }
      const sx = (VEC.x + 1) * 0.5 * w;
      const sy = (1 - (VEC.y + 1) * 0.5) * h;
      const cardW = c.el.offsetWidth || 460;
      const cardH = c.el.offsetHeight || 300;
      // Offset card to side of hub
      let left, top;
      if (c.side === 'right') {
        left = Math.min(w - cardW - 24, sx + 80);
        top = Math.min(h - cardH - 24, Math.max(24, sy - cardH / 2));
      } else {
        left = Math.max(24, sx - cardW - 80);
        top = Math.min(h - cardH - 24, Math.max(24, sy - cardH / 2));
      }
      c.el.style.left = `${left}px`;
      c.el.style.top = `${top}px`;
      c.el.style.opacity = vis.toFixed(3);
      c.el.style.transform = `translateY(${(1 - vis) * 20}px)`;
      c.el.style.pointerEvents = vis > 0.6 ? 'auto' : 'none';
    }
  }

  // ---------- Title fade based on progress ----------
  function updateHeading() {
    if (!heading) return;
    // visible 0.00 → 0.16, fade out 0.16 → 0.22
    let v = 1;
    if (smoothProgress > 0.16) {
      v = Math.max(0, 1 - (smoothProgress - 0.16) / 0.06);
    }
    heading.style.opacity = v.toFixed(3);
    // slight scale up while approaching
    const s = 1 + Math.min(0.1, smoothProgress * 0.3);
    heading.style.transform = `translateY(${-(smoothProgress * 40)}px) scale(${s.toFixed(3)})`;
  }

  // ---------- Animate ----------
  resize();
  window.addEventListener('resize', resize);

  const tmpPos = new THREE.Vector3();
  const tmpLook = new THREE.Vector3();
  function animate(now) {
    // Smooth scroll progress for snappy but not stuttery feel
    smoothProgress += (rawProgress - smoothProgress) * 0.15;

    camPath.getPointAt(smoothProgress, tmpPos);
    const lookT = Math.min(1, smoothProgress + 0.04);
    camPath.getPointAt(lookT, tmpLook);
    // subtle floating motion
    tmpPos.x += Math.sin(now * 0.0005) * 0.5;
    tmpPos.y += Math.cos(now * 0.0004) * 0.4;
    camera.position.copy(tmpPos);
    camera.lookAt(tmpLook);

    // Pulsing hub stars
    for (let i = 0; i < hubStars.length; i++) {
      const k = 19 + Math.sin(now * 0.001 + i * 0.7) * 1.8;
      hubStars[i].scale.setScalar(k);
    }

    // Drift bokeh orbs
    for (const s of bokehOrbs) {
      const u = s.userData;
      s.position.x = u.basePos.x + Math.sin(now * 0.0003 + u.phase) * 4 * u.driftX;
      s.position.y = u.basePos.y + Math.cos(now * 0.00025 + u.phase) * 3 * u.driftY;
    }

    // Very slow scene drift for life
    pointsObj.rotation.y = Math.sin(now * 0.00004) * 0.015;

    positionCards();
    updateHeading();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  log('animate started — hubs', HUBS.length, 'pts', POS.length / 3, 'lines', LINE_POS.length / 6);
})();
