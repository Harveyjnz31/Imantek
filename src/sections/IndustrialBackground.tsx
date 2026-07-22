import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PulseNode {
  mesh: THREE.Mesh;
  baseScale: number;
  phase: number;
}

export default function IndustrialBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x071019);

    const camera = new THREE.PerspectiveCamera(
      52,
      container.clientWidth / container.clientHeight,
      0.1,
      500
    );
    camera.position.set(0, 5, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x8fb8d0, 0.55);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.3);
    keyLight.position.set(-10, 14, 18);
    scene.add(keyLight);

    const blueLight = new THREE.PointLight(0x009fe3, 7, 80);
    blueLight.position.set(16, 8, 18);
    scene.add(blueLight);

    const grid = new THREE.GridHelper(70, 42, 0x009fe3, 0x1f3948);
    grid.position.y = -8;
    grid.rotation.x = Math.PI * 0.02;
    (grid.material as THREE.Material).opacity = 0.28;
    (grid.material as THREE.Material).transparent = true;
    scene.add(grid);

    const panelGroup = new THREE.Group();
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c1b26,
      metalness: 0.45,
      roughness: 0.55,
      transparent: true,
      opacity: 0.72,
    });
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0x4b7286,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i < 9; i++) {
      const w = 5 + Math.random() * 6;
      const h = 2.2 + Math.random() * 3.2;
      const geometry = new THREE.BoxGeometry(w, h, 0.18);
      const panel = new THREE.Mesh(geometry, panelMaterial);
      panel.position.set(-26 + i * 6.6, -1 + Math.sin(i) * 2.8, -9 - Math.random() * 9);
      panel.rotation.y = -0.22 + Math.random() * 0.42;
      panel.rotation.x = -0.08 + Math.random() * 0.16;
      panelGroup.add(panel);

      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
      edges.position.copy(panel.position);
      edges.rotation.copy(panel.rotation);
      panelGroup.add(edges);
    }
    scene.add(panelGroup);

    const circuitGroup = new THREE.Group();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x009fe3,
      transparent: true,
      opacity: 0.34,
    });
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x36c8ff,
      transparent: true,
      opacity: 0.86,
    });
    const nodes: PulseNode[] = [];

    for (let lane = 0; lane < 8; lane++) {
      const y = -4 + lane * 1.35;
      const z = -2 - lane * 1.4;
      const points: THREE.Vector3[] = [];
      for (let step = 0; step < 8; step++) {
        const x = -26 + step * 7.5;
        points.push(new THREE.Vector3(x, y + Math.sin(step + lane) * 0.5, z));
        if (step % 2 === 1) {
          points.push(new THREE.Vector3(x + 2.5, y + 1.1, z - 0.35));
        }
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      circuitGroup.add(new THREE.Line(geometry, lineMaterial));

      points.filter((_, index) => index % 3 === 0).forEach((point, index) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), nodeMaterial);
        node.position.copy(point);
        circuitGroup.add(node);
        nodes.push({ mesh: node, baseScale: 1 + index * 0.04, phase: Math.random() * Math.PI * 2 });
      });
    }
    circuitGroup.rotation.x = -0.12;
    scene.add(circuitGroup);

    const scanMaterial = new THREE.MeshBasicMaterial({
      color: 0x009fe3,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const scanPlane = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 48), scanMaterial);
    scanPlane.position.set(-20, 0, 2);
    scanPlane.rotation.z = 0.35;
    scene.add(scanPlane);

    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouse.x += (targetMouse.x - mouse.x) * 0.045;
      mouse.y += (targetMouse.y - mouse.y) * 0.045;

      camera.position.x = mouse.x * 2.2;
      camera.position.y = 5 - mouse.y * 1.1;
      camera.lookAt(mouse.x * 1.4, -1, 0);

      panelGroup.rotation.y = Math.sin(elapsed * 0.22) * 0.035;
      circuitGroup.position.x = Math.sin(elapsed * 0.18) * 0.8;
      scanPlane.position.x = -28 + ((elapsed * 6) % 58);
      blueLight.position.x = 10 + Math.sin(elapsed * 0.5) * 8;

      nodes.forEach((node) => {
        const pulse = node.baseScale + Math.sin(elapsed * 2.4 + node.phase) * 0.45;
        node.mesh.scale.setScalar(Math.max(0.7, pulse));
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
        }
      });
      panelMaterial.dispose();
      edgeMaterial.dispose();
      lineMaterial.dispose();
      nodeMaterial.dispose();
      scanMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
}
