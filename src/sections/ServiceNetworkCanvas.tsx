import { useEffect, useRef } from 'react';

interface NetworkNode {
  x: number;
  y: number;
  radius: number;
  phase: number;
  importance: number;
}

interface NetworkLink {
  from: number;
  to: number;
  phase: number;
}

interface SignalPulse {
  linkIndex: number;
  progress: number;
  speed: number;
  color: string;
}

const signalColors = ['#c4713b', '#f0a15f', '#65c7d0', '#ffffff'];

export default function ServiceNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const sceneRef = useRef<{
    nodes: NetworkNode[];
    links: NetworkLink[];
    pulses: SignalPulse[];
  }>({ nodes: [], links: [], pulses: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasElement = canvas;
    const context = ctx;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    function buildScene() {
      const nodes: NetworkNode[] = [];
      const links: NetworkLink[] = [];
      const columns = Math.max(6, Math.floor(width / 180));
      const rows = Math.max(4, Math.floor(height / 155));
      const marginX = width * 0.08;
      const marginY = height * 0.14;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const index = row * columns + col;
          const laneOffset = Math.sin(index * 1.7) * 18;
          const columnOffset = Math.cos(index * 1.1) * 22;
          nodes.push({
            x: marginX + (col / Math.max(columns - 1, 1)) * (width - marginX * 2) + columnOffset,
            y: marginY + (row / Math.max(rows - 1, 1)) * (height - marginY * 2) + laneOffset,
            radius: index % 7 === 0 ? 3.4 : 2.1,
            phase: index * 0.37,
            importance: index % 7 === 0 ? 1 : 0.45,
          });
        }
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const current = row * columns + col;
          if (col < columns - 1) links.push({ from: current, to: current + 1, phase: current * 0.21 });
          if (row < rows - 1 && (row + col) % 2 === 0) {
            links.push({ from: current, to: current + columns, phase: current * 0.19 });
          }
          if (row < rows - 1 && col < columns - 1 && (row + col) % 3 === 0) {
            links.push({ from: current, to: current + columns + 1, phase: current * 0.13 });
          }
        }
      }

      const pulses = Array.from({ length: Math.min(28, Math.max(14, links.length / 3)) }, (_, index) => ({
        linkIndex: index % links.length,
        progress: (index * 0.173) % 1,
        speed: 0.0022 + (index % 5) * 0.00055,
        color: signalColors[index % signalColors.length],
      }));

      sceneRef.current = { nodes, links, pulses };
    }

    function resize() {
      const parent = canvasElement.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      canvasElement.width = width * dpr;
      canvasElement.height = height * dpr;
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildScene();
    }

    function drawBackground(time: number) {
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#151515');
      gradient.addColorStop(0.52, '#1a1a1a');
      gradient.addColorStop(1, '#111111');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.16;
      context.strokeStyle = '#c4713b';
      context.lineWidth = 1;
      const gridSize = 56;
      const offset = (time * 0.018) % gridSize;
      for (let x = -gridSize + offset; x < width + gridSize; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = -gridSize + offset; y < height + gridSize; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }
      context.restore();

      const glow = context.createRadialGradient(width * 0.52, height * 0.45, 0, width * 0.52, height * 0.45, width * 0.55);
      glow.addColorStop(0, 'rgba(196,113,59,0.24)');
      glow.addColorStop(0.45, 'rgba(101,199,208,0.08)');
      glow.addColorStop(1, 'rgba(26,26,26,0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    }

    function drawWave(time: number) {
      context.save();
      context.globalAlpha = 0.36;
      context.strokeStyle = '#65c7d0';
      context.lineWidth = 1.4;
      context.beginPath();
      const baseY = height * 0.74;
      for (let x = 0; x <= width; x += 8) {
        const wave = Math.sin(x * 0.018 + time * 0.0026) * 14 + Math.sin(x * 0.041 - time * 0.0017) * 5;
        if (x === 0) context.moveTo(x, baseY + wave);
        else context.lineTo(x, baseY + wave);
      }
      context.stroke();
      context.restore();
    }

    function drawNetwork(time: number) {
      const { nodes, links, pulses } = sceneRef.current;
      const parallaxX = mouseX * 16;
      const parallaxY = mouseY * 10;

      context.save();
      context.translate(parallaxX, parallaxY);

      for (const link of links) {
        const from = nodes[link.from];
        const to = nodes[link.to];
        const pulseAlpha = 0.22 + Math.sin(time * 0.0014 + link.phase) * 0.08;

        context.strokeStyle = `rgba(212,208,202,${pulseAlpha})`;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
      }

      for (const pulse of pulses) {
        const link = links[pulse.linkIndex];
        const from = nodes[link.from];
        const to = nodes[link.to];
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.linkIndex = (pulse.linkIndex + 7) % links.length;
        }

        const bendProgress = pulse.progress < 0.5 ? pulse.progress * 2 : (pulse.progress - 0.5) * 2;
        const x = pulse.progress < 0.5 ? from.x + (to.x - from.x) * bendProgress : to.x;
        const y = pulse.progress < 0.5 ? from.y : from.y + (to.y - from.y) * bendProgress;

        const pulseGradient = context.createRadialGradient(x, y, 0, x, y, 18);
        pulseGradient.addColorStop(0, pulse.color);
        pulseGradient.addColorStop(1, 'rgba(196,113,59,0)');
        context.fillStyle = pulseGradient;
        context.beginPath();
        context.arc(x, y, 18, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = pulse.color;
        context.beginPath();
        context.arc(x, y, 2.2, 0, Math.PI * 2);
        context.fill();
      }

      for (const node of nodes) {
        const glow = 0.42 + Math.sin(time * 0.002 + node.phase) * 0.24;
        context.fillStyle = `rgba(196,113,59,${0.34 + node.importance * glow})`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius + node.importance * 4, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = node.importance > 0.8 ? '#f0a15f' : '#d4d0ca';
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    }

    function animate(time: number) {
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      drawBackground(time);
      drawNetwork(time);
      drawWave(time);
      frameRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(event: MouseEvent) {
      targetMouseX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
      targetMouseY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
    }

    resize();
    frameRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
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
