import React from 'react';
import FireworksCanvas from '../components/FireworksCanvas';

const Greeting7 = () => {
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
      <FireworksCanvas />

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
