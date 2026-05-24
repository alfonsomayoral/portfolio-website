/* Neural network plexus flythrough — Alfonso Mayoral portfolio.
   Mirrors the dense electric-blue plexus look from the references:
   tight clusters of bright points, intra-cluster plexus lines,
   long curved inter-hub connections, bright radial-burst hub stars,
   scattered ring constellations, deep blue fog for depth.
   Camera flies through 5 hub waypoints driven by scroll progress. */
(async function () {
  const $log = (...a) => console.log('[neural]', ...a);
  $log('boot');

  // Wait until DOM ready
  if (document.readyState === 'loading') {
    await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  }

  const canvas = document.getElementById('neural-canvas');
  const section = document.getElementById('experience-neural');
  if (!canvas || !section) { $log('no canvas/section, abort'); return; }

  // Load Three from esm.sh (auto-resolves bare imports)
  let THREE;
  try {
    THREE = await import('https://esm.sh/three@0.160.0');
    $log('THREE loaded', THREE.REVISION);
  } catch (e) {
    console.error('[neural] failed loading three', e);
    return;
  }

  // ------------------------------------------------------------------
  // Renderer / scene / camera
  // ------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); // transparent so the CSS bg behind shows
  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000814, 0.012); // deep navy fog → depth

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 600);
  camera.position.set(0, 8, 80);

  // ------------------------------------------------------------------
  // Hub waypoints — 5 main hubs the camera will fly through.
  // Spread on a long Z axis so the flythrough has real distance.
  // ------------------------------------------------------------------
  const HUBS = [
    { pos: new THREE.Vector3(  0,   0,    0), color: 0x4dc0ff, label: 'hub-01' },
    { pos: new THREE.Vector3( 28,  -6,  -65), color: 0x5cc8ff, label: 'hub-02' },
    { pos: new THREE.Vector3(-32,   8, -130), color: 0x3da8ff, label: 'hub-03' },
    { pos: new THREE.Vector3( 18,  10, -200), color: 0x6cd2ff, label: 'hub-04' },
    { pos: new THREE.Vector3(-22,  -4, -270), color: 0x4dc0ff, label: 'hub-05' },
  ];

  // ------------------------------------------------------------------
  // Per-cluster point cloud + intra-cluster plexus lines.
  // Each cluster: ~280 points gaussian-distributed around hub center,
  // plus a few hundred lines between points within a radius threshold.
  // ------------------------------------------------------------------
  const ALL_POINTS_POS = [];
  const ALL_POINTS_COLOR = [];
  const ALL_POINTS_SIZE = [];

  const PLEXUS_VERTS = [];
  const PLEXUS_COLOR = [];

  // Extra ambient clusters between main hubs for richness
  const AMBIENT_CLUSTERS = [];
  for (let i = 0; i < HUBS.length - 1; i++) {
    const a = HUBS[i].pos, b = HUBS[i + 1].pos;
    // 2 ambient clusters between each pair, offset laterally
    for (let k = 0; k < 2; k++) {
      const t = (k + 1) / 3;
      const center = a.clone().lerp(b, t).add(new THREE.Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 22
      ));
      AMBIENT_CLUSTERS.push({ pos: center, color: 0x2d88d8 });
    }
  }

  const ALL_CLUSTERS = [
    ...HUBS.map(h => ({ pos: h.pos, color: h.color, isHub: true })),
    ...AMBIENT_CLUSTERS.map(a => ({ pos: a.pos, color: a.color, isHub: false })),
  ];

  // Gaussian-ish random
  const gauss = (sigma) => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  for (const cluster of ALL_CLUSTERS) {
    const center = cluster.pos;
    const isHub = cluster.isHub;
    const N = isHub ? 380 : 180;
    const spread = isHub ? 9 : 6;
    const localPts = [];
    const color = new THREE.Color(cluster.color);

    for (let i = 0; i < N; i++) {
      const p = new THREE.Vector3(
        center.x + gauss(spread),
        center.y + gauss(spread * 0.55),
        center.z + gauss(spread)
      );
      localPts.push(p);
      ALL_POINTS_POS.push(p.x, p.y, p.z);
      // slight color variation
      const c = color.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.25);
      ALL_POINTS_COLOR.push(c.r, c.g, c.b);
      // size: smaller far-from-center, larger near center
      const distNorm = p.distanceTo(center) / spread;
      ALL_POINTS_SIZE.push(THREE.MathUtils.lerp(1.6, 0.55, Math.min(distNorm, 1)));
    }

    // Plexus: connect each point to its nearest few neighbors within threshold
    const threshold = isHub ? 3.4 : 2.6;
    const maxConn = isHub ? 4 : 3;
    for (let i = 0; i < localPts.length; i++) {
      let connected = 0;
      for (let j = i + 1; j < localPts.length && connected < maxConn; j++) {
        const d = localPts[i].distanceTo(localPts[j]);
        if (d < threshold) {
          PLEXUS_VERTS.push(localPts[i].x, localPts[i].y, localPts[i].z,
                            localPts[j].x, localPts[j].y, localPts[j].z);
          // line color: fade by distance
          const intensity = 1 - d / threshold;
          const lc = color.clone().multiplyScalar(0.45 + intensity * 0.55);
          PLEXUS_COLOR.push(lc.r, lc.g, lc.b, lc.r, lc.g, lc.b);
          connected++;
        }
      }
    }
  }

  // Points cloud
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(ALL_POINTS_POS, 3));
  pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(ALL_POINTS_COLOR, 3));
  pointsGeo.setAttribute('size', new THREE.Float32BufferAttribute(ALL_POINTS_SIZE, 1));

  // Round soft sprite for points
  const sprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.25, 'rgba(180,225,255,0.8)');
    grd.addColorStop(0.60, 'rgba(80,160,255,0.25)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0.0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  const pointsMat = new THREE.PointsMaterial({
    size: 1.4,
    map: sprite,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    sizeAttenuation: true,
  });
  const pointsObj = new THREE.Points(pointsGeo, pointsMat);
  scene.add(pointsObj);

  // Plexus lines
  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(PLEXUS_VERTS, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(PLEXUS_COLOR, 3));
  const linesMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const linesObj = new THREE.LineSegments(linesGeo, linesMat);
  scene.add(linesObj);

  // ------------------------------------------------------------------
  // Long curved inter-hub connections (bezier quadratic per pair)
  // ------------------------------------------------------------------
  const HUB_LINK_VERTS = [];
  const HUB_LINK_COLOR = [];
  for (let i = 0; i < HUBS.length; i++) {
    for (let j = i + 1; j < HUBS.length; j++) {
      // Only connect every adjacent + one cross-link for richness
      if (j - i > 2) continue;
      const a = HUBS[i].pos, b = HUBS[j].pos;
      const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 + 6,
        (Math.random() - 0.5) * 30
      ));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      const segs = 64;
      const pts = curve.getPoints(segs);
      const cc = new THREE.Color(0x5cc8ff);
      for (let k = 0; k < pts.length - 1; k++) {
        HUB_LINK_VERTS.push(pts[k].x, pts[k].y, pts[k].z,
                            pts[k + 1].x, pts[k + 1].y, pts[k + 1].z);
        HUB_LINK_COLOR.push(cc.r, cc.g, cc.b, cc.r, cc.g, cc.b);
      }
    }
  }
  const hubLinksGeo = new THREE.BufferGeometry();
  hubLinksGeo.setAttribute('position', new THREE.Float32BufferAttribute(HUB_LINK_VERTS, 3));
  hubLinksGeo.setAttribute('color', new THREE.Float32BufferAttribute(HUB_LINK_COLOR, 3));
  const hubLinksMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  scene.add(new THREE.LineSegments(hubLinksGeo, hubLinksMat));

  // ------------------------------------------------------------------
  // Hub stars — bright sprite + radial ray bursts at each hub
  // ------------------------------------------------------------------
  const starSprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    // soft blue halo
    const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grd.addColorStop(0.00, 'rgba(255,255,255,1.0)');
    grd.addColorStop(0.10, 'rgba(220,240,255,0.95)');
    grd.addColorStop(0.30, 'rgba(120,200,255,0.55)');
    grd.addColorStop(0.60, 'rgba(50,140,240,0.18)');
    grd.addColorStop(1.00, 'rgba(0,0,0,0.0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 256, 256);
    // cross flares
    g.globalCompositeOperation = 'lighter';
    g.strokeStyle = 'rgba(200,230,255,0.55)';
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(128, 8); g.lineTo(128, 248); g.stroke();
    g.beginPath(); g.moveTo(8, 128); g.lineTo(248, 128); g.stroke();
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  })();

  const hubStars = [];
  for (const hub of HUBS) {
    const mat = new THREE.SpriteMaterial({
      map: starSprite,
      color: hub.color,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const s = new THREE.Sprite(mat);
    s.position.copy(hub.pos);
    s.scale.setScalar(14);
    scene.add(s);
    hubStars.push(s);

    // Radial bursts: 14 thin lines outward
    const burstVerts = [];
    const burstColors = [];
    const cc = new THREE.Color(hub.color).lerp(new THREE.Color(0xffffff), 0.5);
    const rays = 14;
    for (let r = 0; r < rays; r++) {
      const ang = (r / rays) * Math.PI * 2;
      const len = 8 + Math.random() * 6;
      const dx = Math.cos(ang) * len;
      const dy = Math.sin(ang) * len * 0.6;
      const dz = (Math.random() - 0.5) * 4;
      burstVerts.push(hub.pos.x, hub.pos.y, hub.pos.z,
                      hub.pos.x + dx, hub.pos.y + dy, hub.pos.z + dz);
      burstColors.push(cc.r, cc.g, cc.b, 0.05, 0.2, 0.4);
    }
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.Float32BufferAttribute(burstVerts, 3));
    bg.setAttribute('color', new THREE.Float32BufferAttribute(burstColors, 3));
    scene.add(new THREE.LineSegments(bg, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })));
  }

  // ------------------------------------------------------------------
  // Scattered geometric rings (like the references' floating circles)
  // ------------------------------------------------------------------
  const ringMat = new THREE.LineBasicMaterial({
    color: 0x3da8ff, transparent: true, opacity: 0.35,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  for (let i = 0; i < 14; i++) {
    const g = new THREE.RingGeometry(1.2 + Math.random() * 1.8, 1.25 + Math.random() * 1.8, 32);
    // ringGeometry produces filled triangles; convert to edges
    const edges = new THREE.EdgesGeometry(g);
    const ring = new THREE.LineSegments(edges, ringMat);
    // random place near hub line
    const t = Math.random();
    const a = HUBS[Math.floor(t * (HUBS.length - 1))].pos;
    const b = HUBS[Math.floor(t * (HUBS.length - 1)) + 1]?.pos || HUBS[HUBS.length - 1].pos;
    const center = a.clone().lerp(b, Math.random()).add(new THREE.Vector3(
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 30
    ));
    ring.position.copy(center);
    ring.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(ring);
  }

  // ------------------------------------------------------------------
  // Far background star dust for added depth (very small points)
  // ------------------------------------------------------------------
  {
    const N = 1200;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 400;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = -Math.random() * 320;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({
      color: 0x6cd2ff, size: 0.35, sizeAttenuation: true,
      transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    scene.add(new THREE.Points(g, m));
  }

  // ------------------------------------------------------------------
  // Camera path: smooth Catmull–Rom through hub waypoints
  // Camera looks slightly ahead along the path.
  // ------------------------------------------------------------------
  // Extend the path with an entry point in front of HUB[0] and an exit past HUB[-1]
  const pathPoints = [
    HUBS[0].pos.clone().add(new THREE.Vector3(-4, 4, 30)),
    HUBS[0].pos.clone().add(new THREE.Vector3( 2, 1,  6)),
    HUBS[1].pos.clone().add(new THREE.Vector3(-3, 3,  8)),
    HUBS[2].pos.clone().add(new THREE.Vector3( 4, -2, 10)),
    HUBS[3].pos.clone().add(new THREE.Vector3(-5, 2,  9)),
    HUBS[4].pos.clone().add(new THREE.Vector3( 3, -1, 12)),
    HUBS[4].pos.clone().add(new THREE.Vector3( 0,  0, -25)),
  ];
  const camPath = new THREE.CatmullRomCurve3(pathPoints, false, 'catmullrom', 0.4);

  // Lookahead targets — points slightly further along the path
  const lookPath = new THREE.CatmullRomCurve3(
    pathPoints.map((p, i) => p.clone().add(new THREE.Vector3(0, 0, -10))),
    false, 'catmullrom', 0.4
  );

  // ------------------------------------------------------------------
  // Scroll progress → camera position
  // ------------------------------------------------------------------
  let scrollProgress = 0;
  const updateScrollProgress = () => {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress 0 when section top hits top of viewport, 1 when section bottom hits bottom
    const total = rect.height - vh;
    const passed = -rect.top;
    const p = total > 0 ? passed / total : 0;
    scrollProgress = Math.max(0, Math.min(1, p));
  };
  updateScrollProgress();
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // Activate body class when in view so the canvas fades in
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) document.body.classList.add('we-active');
      else document.body.classList.remove('we-active');
    }
  }, { threshold: 0.01 });
  io.observe(section);

  // Card waypoints — show/hide cards based on scrollProgress
  const cards = Array.from(section.querySelectorAll('.neural-card'));
  const cardWindow = 0.10; // half-width of visibility window
  const updateCards = () => {
    for (const c of cards) {
      const target = parseFloat(c.dataset.progress);
      const dist = Math.abs(scrollProgress - target);
      const vis = Math.max(0, 1 - dist / cardWindow);
      c.style.opacity = vis.toFixed(3);
      c.style.transform = `translateY(${(1 - vis) * 30}px)`;
      c.style.pointerEvents = vis > 0.5 ? 'auto' : 'none';
    }
  };

  // ------------------------------------------------------------------
  // Animate
  // ------------------------------------------------------------------
  resize();
  window.addEventListener('resize', resize);

  let t0 = performance.now();
  const tmpPos = new THREE.Vector3();
  const tmpLook = new THREE.Vector3();
  function animate(now) {
    const dt = (now - t0) / 1000; t0 = now;

    // Camera follows scrollProgress along path
    const pSmooth = scrollProgress;
    camPath.getPointAt(pSmooth, tmpPos);
    // look-at slightly ahead
    const lookT = Math.min(1, pSmooth + 0.04);
    camPath.getPointAt(lookT, tmpLook);
    // add tiny floating motion for life
    tmpPos.x += Math.sin(now * 0.0005) * 0.4;
    tmpPos.y += Math.cos(now * 0.0004) * 0.3;
    camera.position.lerp(tmpPos, 0.12);
    camera.lookAt(tmpLook);

    // Subtle pulse on hub stars
    for (let i = 0; i < hubStars.length; i++) {
      const s = hubStars[i];
      const k = 13 + Math.sin(now * 0.001 + i) * 1.2;
      s.scale.setScalar(k);
    }

    // Slow rotation of point cloud for subtle life
    pointsObj.rotation.y = Math.sin(now * 0.00005) * 0.02;
    linesObj.rotation.y = pointsObj.rotation.y;

    updateCards();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  $log('animate loop started, hubs=', HUBS.length, 'points=', ALL_POINTS_POS.length / 3, 'lines=', PLEXUS_VERTS.length / 6);
})();
