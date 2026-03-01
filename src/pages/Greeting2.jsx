import React from 'react';
import ConfettiCanvas from '../components/ConfettiCanvas';

const Greeting2 = () => {
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
      <ConfettiCanvas />

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
