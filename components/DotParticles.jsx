'use client'
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DotParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // --- Dark mode reactive color ---
    let isDark = document.documentElement.classList.contains("dark");
    const getColor = () => (isDark ? 0x00ffee : 0xa855f7);

    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
      const c = getColor();
      dotMat.color.setHex(c);
      lineMat.color.setHex(c);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // --- Background dot particles (BufferGeometry for perf) ---
    const COUNT = 80;
    const positions = new Float32Array(COUNT * 3);
    const velocities = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 0.006,
      y: (Math.random() - 0.5) * 0.006,
    }));

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const dotMat = new THREE.PointsMaterial({
      color: getColor(),
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    // --- Neural network connection lines ---
    const MAX_SEGS = Math.floor((COUNT * (COUNT - 1)) / 2);
    const linePositions = new Float32Array(MAX_SEGS * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setDrawRange(0, 0);

    const lineMat = new THREE.LineBasicMaterial({
      color: getColor(),
      transparent: true,
      opacity: 0.13,
    });
    const lineSegs = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegs);

    // --- Orbiting tech icon sprites ---
    const ICON_PATHS = [
      "/images/react.png",
      "/images/nextjs.png",
      "/images/nodejs.png",
      "/images/mongodb.png",
      "/images/tailwind.png",
      "/images/js.png",
      "/images/strapi.png"
    ];
    const sprites = [];
    const loader = new THREE.TextureLoader();

    ICON_PATHS.forEach((path, i) => {
      loader.load(
        path,
        (tex) => {
          const mat = new THREE.SpriteMaterial({
            map: tex,
            transparent: true,
            opacity: 0.55,
          });
          const sprite = new THREE.Sprite(mat);
          sprite.userData = {
            orbitRadius: 2.2 + (i % 3) * 0.6,
            orbitAngle: (i / ICON_PATHS.length) * Math.PI * 2,
            orbitSpeed: 0.08 + (i % 3) * 0.04,
            vertAmplitude: 0.8 + (i % 2) * 0.5,
            vertFreq: 0.4 + i * 0.08,
            phase: Math.random() * Math.PI * 2,
          };
          sprites.push(sprite);
          scene.add(sprite);
        },
        undefined,
        () => { }
      );
    });

    // --- Mouse parallax state ---
    const mouse = { x: 0, y: 0 };
    const rot = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("mousemove", onMouseMove);

    // --- Animation loop ---
    const THRESHOLD = 1.7;
    let rafId;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      const pos = dotGeo.attributes.position.array;

      // Drift particles + wrap bounds
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        if (pos[i * 3] > 4.2) pos[i * 3] = -4.2;
        if (pos[i * 3] < -4.2) pos[i * 3] = 4.2;
        if (pos[i * 3 + 1] > 2.8) pos[i * 3 + 1] = -2.8;
        if (pos[i * 3 + 1] < -2.8) pos[i * 3 + 1] = 2.8;
      }
      dotGeo.attributes.position.needsUpdate = true;

      // Build neural network lines
      const lp = lineGeo.attributes.position.array;
      let li = 0;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          // Cheap early-exit before expensive sqrt
          if (Math.abs(dx) > THRESHOLD || Math.abs(dy) > THRESHOLD) continue;
          if (Math.sqrt(dx * dx + dy * dy) < THRESHOLD) {
            lp[li++] = pos[i * 3]; lp[li++] = pos[i * 3 + 1]; lp[li++] = pos[i * 3 + 2];
            lp[li++] = pos[j * 3]; lp[li++] = pos[j * 3 + 1]; lp[li++] = pos[j * 3 + 2];
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, li / 3);

      // Orbit tech icons in smooth elliptical paths
      sprites.forEach((sprite) => {
        const d = sprite.userData;
        d.orbitAngle += d.orbitSpeed * 0.008;
        sprite.position.x = Math.cos(d.orbitAngle) * d.orbitRadius;
        sprite.position.y = Math.sin(d.orbitAngle * d.vertFreq + d.phase) * d.vertAmplitude;
        sprite.position.z = Math.sin(d.orbitAngle * 0.5) * 0.8;
        // Subtle breathing pulse
        const s = 0.36 + Math.sin(t * 1.4 + d.phase) * 0.05;
        sprite.scale.set(s, s, s);
      });

      // Smooth mouse parallax
      rot.x += (mouse.y * 0.18 - rot.x) * 0.05;
      rot.y += (mouse.x * 0.18 - rot.y) * 0.05;
      scene.rotation.x = rot.x;
      scene.rotation.y = rot.y + t * 0.035;

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      themeObserver.disconnect();
      mount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      dotGeo.dispose();
      dotMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      sprites.forEach((s) => {
        s.material.map?.dispose();
        s.material.dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};

export default DotParticles;
