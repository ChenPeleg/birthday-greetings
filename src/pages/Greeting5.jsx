import React from 'react';
import CloudBackground from '../components/CloudBackground';

const Greeting5 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #c9e8f5 0%, #e8f6ff 50%, #f0f9ff 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CloudBackground />

      <div
        className="cloud-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '40px 48px',
          background: 'rgba(255,255,255,0.55)',
          borderRadius: '32px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 40px rgba(100,160,255,0.2)',
          maxWidth: '580px',
          margin: '20px',
          border: '1px solid rgba(255,255,255,0.7)',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>☁️</div>
        <h1
          className="cloud-title"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            color: '#1a6fa8',
            fontFamily: 'Georgia, serif',
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Happy Birthday!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#3a5f7a',
          margin: 0,
          lineHeight: 1.7,
        }}>
          May your birthday be as light and carefree as floating on a cloud — drifting through a sky full of happiness and wonder! ☁️
        </p>
      </div>
    </div>
  );
};

export default Greeting5;
