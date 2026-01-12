'use client';

import { useEffect, useRef } from 'react';

export default function SolarPanel3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const animate = () => {
      rotation += 0.005;

      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Apply perspective rotation
      const scale = 200;
      const x = Math.sin(rotation) * scale;
      const z = Math.cos(rotation) * scale;
      const opacity = (z + scale) / (2 * scale);

      // Draw solar panel
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#0066ff';
      ctx.shadowColor = 'rgba(0, 102, 255, 0.5)';
      ctx.shadowBlur = 20;

      // Front face
      ctx.fillRect(-80, -120, 160, 240);

      // Grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(-80, -120 + (i * 60));
        ctx.lineTo(80, -120 + (i * 60));
        ctx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-80 + (i * 80), -120);
        ctx.lineTo(-80 + (i * 80), 120);
        ctx.stroke();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Set canvas size
    canvas.width = 400;
    canvas.height = 400;

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
