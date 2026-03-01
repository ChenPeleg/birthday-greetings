import React from 'react';
import PlaneBackground from '../components/PlaneBackground';

const Greeting4 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #56ccf2 0%, #2f80ed 50%, #b2e0f7 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <PlaneBackground />

      {/* Greeting card */}
      <div
        className="plane-card"
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
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>✈️</div>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#1565c0',
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
          Your birthday wishes are flying high! May this year take you to amazing new destinations full of joy and adventure. ✈️
        </p>
      </div>
    </div>
  );
};

export default Greeting4;
