import React, { useEffect, useRef } from 'react';

const COLORS = [
  '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff',
  '#ff6bcd', '#ff9f43', '#a29bfe', '#00d2ff',
  '#fd79a8', '#55efc4', '#fdcb6e', '#e17055',
];

const Greeting2 = () => {
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

    const pieces = Array.from({ length: 180 }, (_, i) => ({
      x: (i / 180) * canvas.width + (i % 3) * 50,
      y: -(Math.random() * canvas.height),
      w: 8 + (i % 7),
      h: 5 + (i % 5),
      color: COLORS[i % COLORS.length],
      vx: ((i % 5) - 2) * 0.6,
      vy: 1.5 + (i % 4) * 0.5,
      angle: (i * 37) % 360,
      spin: ((i % 9) - 4) * 0.8,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        if (p.y > canvas.height + p.h) {
          p.y = -p.h * 2;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -p.w) p.x = canvas.width + p.w;
        if (p.x > canvas.width + p.w) p.x = -p.w;

        ctx.save();
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.85;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
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
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes confettiFadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)   scale(1);   }
        }
        @keyframes shimmer {
          0%, 100% { text-shadow: 0 0 20px rgba(255,215,0,0.4), 0 0 40px rgba(255,215,0,0.2); }
          50%       { text-shadow: 0 0 40px rgba(255,215,0,0.8), 0 0 80px rgba(255,215,0,0.4); }
        }
        .confetti-card {
          animation: confettiFadeIn 0.8s ease-out both;
        }
        .confetti-title {
          animation: shimmer 2.5s ease-in-out infinite;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      <div
        className="confetti-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '48px 56px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          maxWidth: '580px',
          margin: '20px',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎉</div>
        <h1
          className="confetti-title"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            color: '#ffd700',
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
          May your special day be showered with confetti, laughter, and all the things that make you smile! 🎊
        </p>
      </div>
    </div>
  );
};

export default Greeting2;
