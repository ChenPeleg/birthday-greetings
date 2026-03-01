import React, { useEffect, useRef } from 'react';

const COLORS = [
  '#ff4757', '#ffd93d', '#6bcb77', '#4d96ff',
  '#ff6bcd', '#ff9f43', '#a29bfe', '#00d2ff',
  '#fd79a8', '#55efc4', '#fdcb6e', '#e17055',
];

function createShell(canvas) {
  const angle = (Math.random() * 60 + 60) * (Math.PI / 180);
  return {
    x: Math.random() * canvas.width,
    y: canvas.height,
    vx: Math.cos(angle) * (Math.random() * 3 - 1.5),
    vy: -(Math.random() * 8 + 7),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    exploded: false,
    particles: [],
    trail: [],
  };
}

function explode(shell) {
  const count = 60 + Math.floor(Math.random() * 40);
  shell.exploded = true;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const speed = Math.random() * 4 + 1;
    shell.particles.push({
      x: shell.x,
      y: shell.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: shell.color,
      r: Math.random() * 2.5 + 1,
    });
  }
}

const Greeting7 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let shells = [];
    let frame = 0;
    let animId;

    const draw = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      // Launch a new shell every ~45 frames
      if (frame % 45 === 0 || shells.length === 0) {
        shells.push(createShell(canvas));
      }

      ctx.fillStyle = 'rgba(5,5,20,0.25)';
      ctx.fillRect(0, 0, W, H);

      shells = shells.filter(s => {
        if (!s.exploded) {
          // Update shell position
          s.trail.push({ x: s.x, y: s.y });
          if (s.trail.length > 8) s.trail.shift();

          s.vy += 0.18; // gravity
          s.x += s.vx;
          s.y += s.vy;

          // Draw trail
          s.trail.forEach((pt, i) => {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = (i / s.trail.length) * 0.5;
            ctx.fill();
          });
          ctx.globalAlpha = 1;

          // Explode when going up slows
          if (s.vy >= -1) explode(s);
          return true;
        }

        // Update particles
        s.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.08;
          p.vx *= 0.97;
          p.alpha -= 0.018;

          if (p.alpha > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
          }
        });
        ctx.globalAlpha = 1;

        s.particles = s.particles.filter(p => p.alpha > 0);
        return s.particles.length > 0;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: '#05050f',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes fireworksCardIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes colorCycle {
          0%   { color: #ff4757; }
          17%  { color: #ffd93d; }
          33%  { color: #6bcb77; }
          50%  { color: #4d96ff; }
          67%  { color: #ff6bcd; }
          83%  { color: #a29bfe; }
          100% { color: #ff4757; }
        }
        .fireworks-card {
          animation: fireworksCardIn 1s ease-out both;
        }
        .fireworks-title {
          animation: colorCycle 4s linear infinite;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      <div
        className="fireworks-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '48px 56px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          maxWidth: '580px',
          margin: '20px',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎆</div>
        <h1
          className="fireworks-title"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontFamily: 'Georgia, serif',
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Happy Birthday!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#ddeeff',
          margin: 0,
          lineHeight: 1.7,
        }}>
          The sky is celebrating just for you! May your birthday burst with colour, excitement, and all the dazzling moments you deserve. 🎇
        </p>
      </div>
    </div>
  );
};

export default Greeting7;
