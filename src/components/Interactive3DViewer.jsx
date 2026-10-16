import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Eye, RotateCcw, Box, Compass, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function Interactive3DViewer({ activeProjectId }) {
  const mountRef = useRef(null);
  const [wireframe, setWireframe] = useState(true);
  const [shape, setShape] = useState('knot'); // 'knot' | 'icosa' | 'dodeca'
  const [fps, setFps] = useState(60);
  const controlsRef = useRef(null);
  const sceneElementsRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 35;
    controls.minDistance = 8;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f3ff, 2.5, 50);
    lightCyan.position.set(10, 10, 10);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0x818cf8, 2, 50);
    lightViolet.position.set(-10, -10, -10);
    scene.add(lightViolet);

    // Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core Geometries
    const geometries = {
      knot: new THREE.TorusKnotGeometry(3.5, 0.9, 120, 24, 2, 3),
      icosa: new THREE.IcosahedronGeometry(4.5, 2),
      dodeca: new THREE.DodecahedronGeometry(4.5, 1)
    };

    const material = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.15,
      wireframe: true
    });

    const coreMesh = new THREE.Mesh(geometries.knot, material);
    mainGroup.add(coreMesh);

    // 2. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(6.5, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(8.2, 0.04, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.35 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 3. Orbiting Data Satellites
    const satellites = [];
    const satCount = 6;
    for (let i = 0; i < satCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.4, 0);
      const satMat = new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      mainGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        angle: (i / satCount) * Math.PI * 2,
        radius: 7.2 + (i % 2) * 1.5,
        speed: 0.015 * (i % 2 === 0 ? 1 : -1)
      });
    }

    // Save refs for dynamic state updates
    sceneElementsRef.current = {
      coreMesh,
      geometries,
      material,
      ring1,
      ring2,
      satellites,
      lightCyan
    };

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation & FPS Monitor
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // FPS calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      controls.update();

      // Orbital rotation
      ring1.rotation.z += 0.005;
      ring2.rotation.x += 0.004;

      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
        sat.mesh.position.y = Math.sin(sat.angle * 2) * 1.5;
        sat.mesh.rotation.x += 0.03;
        sat.mesh.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      Object.values(geometries).forEach((g) => g.dispose());
      material.dispose();
    };
  }, []);

  // Update Shape
  useEffect(() => {
    if (sceneElementsRef.current) {
      const { coreMesh, geometries } = sceneElementsRef.current;
      if (geometries[shape]) {
        coreMesh.geometry = geometries[shape];
      }
    }
  }, [shape]);

  // Update Wireframe
  useEffect(() => {
    if (sceneElementsRef.current) {
      sceneElementsRef.current.material.wireframe = wireframe;
    }
  }, [wireframe]);

  const resetCamera = () => {
    playClickSound();
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const toggleShape = () => {
    playClickSound();
    setShape((prev) => (prev === 'knot' ? 'icosa' : prev === 'icosa' ? 'dodeca' : 'knot'));
  };

  const toggleWireframe = () => {
    playClickSound();
    setWireframe((prev) => !prev);
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] rounded-3xl bg-[#050508]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl group">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD Telemetry Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-3 font-mono text-[11px] text-zinc-400 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-none">
        <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          WebGL 3D Core
        </span>
        <span className="text-zinc-600">|</span>
        <span>{fps} FPS</span>
        <span className="text-zinc-600">|</span>
        <span className="text-emerald-400 uppercase">{shape}</span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/10">
          <button
            onClick={toggleShape}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Switch 3D Geometry"
          >
            <Box className="w-3.5 h-3.5 text-sky-400" />
            <span className="capitalize">{shape}</span>
          </button>

          <button
            onClick={toggleWireframe}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              wireframe ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-zinc-300 hover:text-white hover:bg-white/10'
            }`}
            title="Toggle Wireframe Shader"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Wireframe</span>
          </button>

          <button
            onClick={resetCamera}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Reset 3D Camera View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Orbit Hint */}
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-zinc-500 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
          <Compass className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Click & Drag to Rotate in 3D</span>
        </div>
      </div>
    </div>
  );
}
