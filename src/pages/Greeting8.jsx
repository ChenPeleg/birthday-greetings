import React from 'react';
import OceanCanvas from '../components/OceanCanvas';

const Greeting8 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <OceanCanvas />

      <div
        className="ocean-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '48px 56px',
          background: 'rgba(0,30,80,0.55)',
          borderRadius: '24px',
          border: '1px solid rgba(100,220,255,0.2)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          maxWidth: '580px',
          margin: '20px',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🐠</div>
        <h1
          className="ocean-title"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            color: '#00dfff',
            fontFamily: 'Georgia, serif',
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Happy Birthday!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#b2eeff',
          margin: 0,
          lineHeight: 1.7,
        }}>
          Dive deep into joy — the ocean of happiness is vast and it is all yours today! May your birthday be as vibrant as a coral reef. 🌊
        </p>
      </div>
    </div>
  );
};

export default Greeting8;
