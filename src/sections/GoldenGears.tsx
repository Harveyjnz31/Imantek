import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { brand } from '../lib/brand-colors';

interface GearData {
  mesh: THREE.Mesh;
  speed: number;
  axis: THREE.Vector3;
  noiseOffset: number;
}

export default function GoldenGears() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const noise3D = createNoise3D();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(brand.charcoalDeep);
    scene.fog = new THREE.FogExp2(brand.charcoalDeep, 0.018);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0x404040, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(brand.copper, 1.6);
    dirLight2.position.set(-10, -5, 5);
    scene.add(dirLight2);

    const tealLight = new THREE.DirectionalLight(brand.teal, 0.9);
    tealLight.position.set(0, 12, -8);
    scene.add(tealLight);

    const pointLight = new THREE.PointLight(brand.copper, 3, 50);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    const gearMaterial = new THREE.MeshStandardMaterial({
      color: brand.copper,
      metalness: 0.88,
      roughness: 0.32,
      emissive: brand.copperDark,
      emissiveIntensity: 0.08,
    });

    const darkerMaterial = new THREE.MeshStandardMaterial({
      color: brand.copperDark,
      metalness: 0.92,
      roughness: 0.28,
      emissive: brand.charcoal,
      emissiveIntensity: 0.05,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: brand.teal,
      metalness: 0.75,
      roughness: 0.4,
      emissive: brand.teal,
      emissiveIntensity: 0.12,
    });

    function createGearGeometry(radius: number, teeth: number): THREE.ExtrudeGeometry {
      const shape = new THREE.Shape();
      const outerRadius = radius;
      const innerRadius = radius * 0.85;
      const holeRadius = radius * 0.3;
      const toothDepth = radius * 0.12;

      for (let i = 0; i <= teeth * 2; i++) {
        const angle = (i / (teeth * 2)) * Math.PI * 2;
        const r = i % 2 === 0 ? outerRadius + toothDepth : innerRadius;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }

      const hole = new THREE.Path();
      hole.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
      shape.holes.push(hole);

      return new THREE.ExtrudeGeometry(shape, {
        depth: radius * 0.25,
        bevelEnabled: true,
        bevelThickness: radius * 0.05,
        bevelSize: radius * 0.05,
        bevelSegments: 2,
      });
    }

    const gears: GearData[] = [];
    const gearCount = 650;

    for (let i = 0; i < gearCount; i++) {
      const radius = 0.4 + Math.random() * 1.8;
      const teeth = Math.floor(8 + Math.random() * 16);
      const geometry = createGearGeometry(radius, teeth);
      const roll = Math.random();
      const mat = roll > 0.82 ? accentMaterial : roll > 0.55 ? darkerMaterial : gearMaterial;
      const mesh = new THREE.Mesh(geometry, mat);

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const dist = 5 + Math.random() * 35;

      mesh.position.x = dist * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = dist * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = dist * Math.cos(phi) * 0.6;

      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;

      scene.add(mesh);
      gears.push({
        mesh,
        speed: 0.1 + Math.random() * 0.8,
        axis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        noiseOffset: Math.random() * 1000,
      });
    }

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let scrollSpeed = 0.15;
    const handleScroll = () => {
      scrollSpeed = 0.15 + (window.scrollY / window.innerHeight) * 0.5;
    };
    window.addEventListener('scroll', handleScroll);

    const clock = new THREE.Clock();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      camera.position.x = mouse.x * 3;
      camera.position.y = -mouse.y * 2;
      camera.lookAt(0, 0, 0);

      pointLight.intensity = 2.6 + Math.sin(elapsed * 0.8) * 0.6;

      gears.forEach((gear) => {
        const noiseX = noise3D(gear.noiseOffset, elapsed * 0.1, 0) * 0.02;
        const noiseY = noise3D(gear.noiseOffset + 100, elapsed * 0.1, 0) * 0.02;

        gear.mesh.rotateOnAxis(gear.axis, (gear.speed * scrollSpeed + noiseX) * 0.01);
        gear.mesh.rotation.x += noiseY * 0.005;
        gear.mesh.rotation.y += noiseX * 0.005;
      });

      scene.rotation.y = elapsed * 0.018;
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
