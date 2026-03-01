import React from 'react';

const BALLOONS = [
  { id: 0,  color: '#ff6b6b', x: 5,  duration: 5.0, delay: -1.0 },
  { id: 1,  color: '#ffd93d', x: 13, duration: 6.5, delay: -4.0 },
  { id: 2,  color: '#6bcb77', x: 22, duration: 5.5, delay: -2.5 },
  { id: 3,  color: '#4d96ff', x: 31, duration: 7.0, delay: -6.0 },
  { id: 4,  color: '#ff6bcd', x: 40, duration: 4.8, delay: -0.5 },
  { id: 5,  color: '#ff9f43', x: 50, duration: 6.0, delay: -3.5 },
  { id: 6,  color: '#a29bfe', x: 59, duration: 5.2, delay: -7.0 },
  { id: 7,  color: '#00d2ff', x: 68, duration: 6.8, delay: -1.8 },
  { id: 8,  color: '#fd79a8', x: 77, duration: 5.7, delay: -5.0 },
  { id: 9,  color: '#55efc4', x: 86, duration: 4.5, delay: -2.0 },
  { id: 10, color: '#fdcb6e', x: 93, duration: 6.2, delay: -4.5 },
];

const Greeting1 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #87ceeb 0%, #c8e6ff 60%, #e8f4ff 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes balloonFloat {
          0%   { transform: translateY(110vh) rotate(-4deg); }
          25%  { transform: translateY(75vh)  rotate(4deg);  }
          50%  { transform: translateY(40vh)  rotate(-3deg); }
          75%  { transform: translateY(10vh)  rotate(3deg);  }
          100% { transform: translateY(-20vh) rotate(-4deg); }
        }
        @keyframes birthdayPulse {
          0%, 100% { transform: scale(1);    text-shadow: 0 0 20px rgba(255,71,87,0.4); }
          50%       { transform: scale(1.04); text-shadow: 0 0 40px rgba(255,71,87,0.7); }
        }
        .balloon-item {
          position: absolute;
          bottom: 0;
          animation: balloonFloat var(--dur) ease-in-out var(--del) infinite;
          will-change: transform;
        }
        .birthday-card {
          animation: birthdayPulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {BALLOONS.map(b => (
        <div
          key={b.id}
          className="balloon-item"
          style={{ left: `${b.x}%`, '--dur': `${b.duration}s`, '--del': `${b.delay}s` }}
        >
          <svg width="56" height="88" viewBox="0 0 56 88" fill="none">
            <ellipse cx="28" cy="30" rx="26" ry="28" fill={b.color} />
            <ellipse cx="20" cy="18" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
            <path d="M28 58 Q26 67 30 75 Q27 80 28 88" stroke="#666" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      ))}

      <div
        className="birthday-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '40px 48px',
          background: 'rgba(255,255,255,0.45)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          maxWidth: '580px',
          margin: '20px',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎈</div>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#ff4757',
          fontFamily: 'Georgia, serif',
          margin: '0 0 16px',
          lineHeight: 1.2,
        }}>
          Happy Birthday!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#444',
          margin: 0,
          lineHeight: 1.7,
        }}>
          Wishing you a day as bright and colourful as these balloons. May every moment lift your spirits sky-high! 🎈
        </p>
      </div>
    </div>
  );
};

export default Greeting1;
