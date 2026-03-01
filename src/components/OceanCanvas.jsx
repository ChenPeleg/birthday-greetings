import React, { useEffect, useRef } from 'react';

const FISH_COLORS = [
  '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff',
  '#ff9f43', '#fd79a8', '#a29bfe', '#00d2ff',
];

function createFish(i, W, H) {
  const dir = i % 2 === 0 ? 1 : -1;
  return {
    x: dir === 1 ? -60 : W + 60,
    y: H * 0.35 + (i * 71) % (H * 0.55),
    dir,
    speed: 0.7 + (i % 5) * 0.25,
    color: FISH_COLORS[i % FISH_COLORS.length],
    size: 18 + (i % 4) * 8,
    wave: i * 1.1,
    amplitude: 18 + (i % 3) * 12,
  };
}

function createBubble(i, W, H) {
  return {
    x: (i * 137) % W,
    y: H + 20,
    r: 3 + (i % 5) * 3,
    speed: 0.5 + (i % 4) * 0.3,
    alpha: 0.3 + (i % 3) * 0.15,
  };
}

const OceanCanvas = () => {
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

    const fishList = Array.from({ length: 10 }, (_, i) => createFish(i, canvas.width, canvas.height));
    const bubbles  = Array.from({ length: 20 }, (_, i) => createBubble(i, canvas.width, canvas.height));

    let frame = 0;
    let animId;

    const drawFish = (f) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      if (f.dir === -1) ctx.scale(-1, 1);

      const s = f.size;
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, s, s * 0.55, 0, 0, Math.PI * 2);
      ctx.fillStyle = f.color;
      ctx.fill();

      // Tail
      ctx.beginPath();
      ctx.moveTo(-s, 0);
      ctx.lineTo(-s - s * 0.8, -s * 0.5);
      ctx.lineTo(-s - s * 0.8,  s * 0.5);
      ctx.closePath();
      ctx.fillStyle = f.color;
      ctx.fill();

      // Eye
      ctx.beginPath();
      ctx.arc(s * 0.5, -s * 0.15, s * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(s * 0.52, -s * 0.15, s * 0.08, 0, Math.PI * 2);
      ctx.fillStyle = '#222';
      ctx.fill();

      // Highlight
      ctx.beginPath();
      ctx.ellipse(-s * 0.1, -s * 0.2, s * 0.25, s * 0.12, -0.4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      frame++;
      const W = canvas.width;
      const H = canvas.height;

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, '#0077b6');
      grad.addColorStop(0.5, '#0096c7');
      grad.addColorStop(1, '#023e8a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Caustic light rays
      for (let i = 0; i < 6; i++) {
        const rx = W * (0.1 + i * 0.16);
        const rg = ctx.createLinearGradient(rx, 0, rx + 40, H * 0.6);
        rg.addColorStop(0, 'rgba(100,200,255,0.12)');
        rg.addColorStop(1, 'rgba(100,200,255,0)');
        ctx.beginPath();
        ctx.moveTo(rx, 0);
        ctx.lineTo(rx + 40, H * 0.6);
        ctx.lineTo(rx - 10, H * 0.6);
        ctx.closePath();
        ctx.fillStyle = rg;
        ctx.fill();
      }

      // Bubbles
      bubbles.forEach(b => {
        b.y -= b.speed;
        b.x += Math.sin(frame * 0.02 + b.y * 0.02) * 0.5;
        if (b.y < -b.r * 2) {
          b.y = H + b.r;
          b.x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(150,220,255,${b.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Fish
      fishList.forEach(f => {
        f.x += f.dir * f.speed;
        f.y += Math.sin(frame * 0.025 + f.wave) * 0.4;

        // Reset when off-screen
        if (f.dir === 1 && f.x > W + 80) {
          f.x = -60;
          f.y = H * 0.35 + Math.random() * (H * 0.5);
        }
        if (f.dir === -1 && f.x < -80) {
          f.x = W + 60;
          f.y = H * 0.35 + Math.random() * (H * 0.5);
        }

        drawFish(f);
      });

      // Seabed
      const bedGrad = ctx.createLinearGradient(0, H - 60, 0, H);
      bedGrad.addColorStop(0, '#d4a35a');
      bedGrad.addColorStop(1, '#c49040');
      ctx.fillStyle = bedGrad;
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 40) {
        const bump = Math.sin((x + frame * 0.3) * 0.05) * 10;
        ctx.lineTo(x, H - 50 + bump);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes oceanCardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes waveTitle {
          0%, 100% { text-shadow: 0 0 20px rgba(0,220,255,0.4); }
          50%       { text-shadow: 0 0 40px rgba(0,220,255,0.8), 0 0 80px rgba(0,150,255,0.3); }
        }
        .ocean-card {
          animation: oceanCardIn 1s ease-out both;
        }
        .ocean-title {
          animation: waveTitle 3s ease-in-out infinite;
        }
      `}</style>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </>
  );
};

export default OceanCanvas;
