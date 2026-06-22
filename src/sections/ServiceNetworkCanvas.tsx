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

interface ServicePanel {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone: string;
  phase: number;
}

const signalColors = ['#c4713b', '#f0a15f', '#69c9d2', '#e7e2d8'];
const panelLabels = ['ENERGIA', 'HVAC', 'IoT', 'MANTO'];

export default function ServiceNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const sceneRef = useRef<{
    nodes: NetworkNode[];
    links: NetworkLink[];
    pulses: SignalPulse[];
    panels: ServicePanel[];
  }>({ nodes: [], links: [], pulses: [], panels: [] });

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
      const panels: ServicePanel[] = [];
      const isMobile = width < 640;
      const columns = isMobile ? 4 : Math.max(7, Math.floor(width / 170));
      const rows = isMobile ? 5 : Math.max(5, Math.floor(height / 145));
      const marginX = width * (isMobile ? 0.06 : 0.08);
      const marginY = height * (isMobile ? 0.12 : 0.14);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const index = row * columns + col;
          const laneOffset = Math.sin(index * 1.7) * (isMobile ? 10 : 18);
          const columnOffset = Math.cos(index * 1.1) * (isMobile ? 12 : 22);
          nodes.push({
            x: marginX + (col / Math.max(columns - 1, 1)) * (width - marginX * 2) + columnOffset,
            y: marginY + (row / Math.max(rows - 1, 1)) * (height - marginY * 2) + laneOffset,
            radius: index % 7 === 0 ? 3.2 : 1.9,
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

      const panelWidth = Math.min(isMobile ? 112 : 156, width * 0.26);
      const panelHeight = isMobile ? 54 : 70;
      const panelPositions = [
        [0.16, 0.24],
        [0.73, 0.28],
        [0.2, 0.68],
        [0.68, 0.72],
      ];

      panelPositions.forEach(([x, y], index) => {
        panels.push({
          x: width * x - panelWidth / 2,
          y: height * y - panelHeight / 2,
          w: panelWidth,
          h: panelHeight,
          label: panelLabels[index],
          tone: signalColors[index],
          phase: index * 0.8,
        });
      });

      const pulses = Array.from({ length: Math.min(isMobile ? 14 : 30, Math.max(12, links.length / 3)) }, (_, index) => ({
        linkIndex: index % links.length,
        progress: (index * 0.173) % 1,
        speed: (isMobile ? 0.0016 : 0.0022) + (index % 5) * 0.00048,
        color: signalColors[index % signalColors.length],
      }));

      sceneRef.current = { nodes, links, pulses, panels };
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
      gradient.addColorStop(0, '#101414');
      gradient.addColorStop(0.5, '#1a1a1a');
      gradient.addColorStop(1, '#101010');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = width < 640 ? 0.1 : 0.14;
      context.strokeStyle = '#6f7470';
      context.lineWidth = 1;
      const gridSize = 56;
      const offset = (time * 0.012) % gridSize;
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

      context.save();
      context.globalAlpha = width < 640 ? 0.1 : 0.16;
      context.strokeStyle = '#c4713b';
      context.setLineDash([12, 10]);
      context.lineWidth = 1;
      for (let y = height * 0.2; y < height; y += 118) {
        context.beginPath();
        context.moveTo(0, y + Math.sin(time * 0.001 + y) * 4);
        context.bezierCurveTo(width * 0.32, y - 28, width * 0.68, y + 34, width, y - 10);
        context.stroke();
      }
      context.restore();

      const glow = context.createRadialGradient(width * 0.52, height * 0.45, 0, width * 0.52, height * 0.45, width * 0.55);
      glow.addColorStop(0, 'rgba(196,113,59,0.2)');
      glow.addColorStop(0.45, 'rgba(105,201,210,0.1)');
      glow.addColorStop(1, 'rgba(26,26,26,0)');
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    }

    function drawDiagnosticTrace(time: number) {
      context.save();
      context.globalAlpha = width < 640 ? 0.28 : 0.42;
      context.strokeStyle = '#69c9d2';
      context.lineWidth = 1.4;
      context.beginPath();
      const baseY = height * 0.74;
      for (let x = 0; x <= width; x += 8) {
        const pulse = Math.sin(x * 0.018 + time * 0.0026) * 12 + Math.sin(x * 0.041 - time * 0.0017) * 5;
        const spike = Math.abs(((x + time * 0.035) % 180) - 90) < 10 ? -22 : 0;
        const wave = pulse + spike;
        if (x === 0) context.moveTo(x, baseY + wave);
        else context.lineTo(x, baseY + wave);
      }
      context.stroke();
      context.restore();
    }

    function drawPanels(time: number) {
      const { panels } = sceneRef.current;

      panels.forEach((panel, index) => {
        const activity = 0.5 + Math.sin(time * 0.002 + panel.phase) * 0.5;
        context.save();
        context.translate(panel.x, panel.y);

        context.fillStyle = 'rgba(20, 24, 23, 0.72)';
        context.strokeStyle = `rgba(212, 208, 202, ${0.34 + activity * 0.18})`;
        context.lineWidth = 1;
        context.fillRect(0, 0, panel.w, panel.h);
        context.strokeRect(0.5, 0.5, panel.w - 1, panel.h - 1);

        context.fillStyle = panel.tone;
        context.globalAlpha = 0.22 + activity * 0.22;
        context.fillRect(0, 0, 4, panel.h);
        context.globalAlpha = 1;

        context.fillStyle = '#e7e2d8';
        context.font = `${width < 640 ? 10 : 12}px "IBM Plex Mono", monospace`;
        context.fillText(panel.label, 14, 21);

        if (index === 0) {
          context.strokeStyle = panel.tone;
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(panel.w - 34, 14);
          context.lineTo(panel.w - 48, 35);
          context.lineTo(panel.w - 31, 35);
          context.lineTo(panel.w - 45, 58);
          context.stroke();
        } else if (index === 1) {
          context.strokeStyle = panel.tone;
          context.lineWidth = 1.4;
          for (let i = 0; i < 3; i++) {
            context.beginPath();
            context.arc(panel.w - 38, 35, 9 + i * 7, 0.25, Math.PI * 1.35);
            context.stroke();
          }
        } else if (index === 2) {
          context.strokeStyle = panel.tone;
          context.lineWidth = 1.2;
          for (let i = 0; i < 4; i++) {
            const x = panel.w - 54 + i * 11;
            context.beginPath();
            context.moveTo(x, 48);
            context.lineTo(x, 26 + Math.sin(time * 0.003 + i) * 8);
            context.stroke();
          }
        } else {
          context.strokeStyle = panel.tone;
          context.lineWidth = 1.8;
          context.beginPath();
          context.arc(panel.w - 40, 35, 14, 0, Math.PI * 2);
          context.stroke();
          for (let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 * i) / 8 + time * 0.0008;
            context.beginPath();
            context.moveTo(panel.w - 40 + Math.cos(angle) * 17, 35 + Math.sin(angle) * 17);
            context.lineTo(panel.w - 40 + Math.cos(angle) * 22, 35 + Math.sin(angle) * 22);
            context.stroke();
          }
        }

        context.restore();
      });
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
        if (!link) continue;
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
      drawPanels(time);
      drawDiagnosticTrace(time);
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
