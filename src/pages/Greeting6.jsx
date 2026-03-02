import React from 'react';
import CityBackground from '../components/CityBackground';

const Greeting6 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #050510 0%, #0d0d2b 40%, #1a1040 100%)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CityBackground />

      <div
        className="city-card"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '48px 56px',
          background: 'rgba(10,10,30,0.6)',
          borderRadius: '24px',
          border: '1px solid rgba(255,215,0,0.25)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          maxWidth: '580px',
          margin: '20px',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🌃</div>
        <h1
          className="city-title"
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
          The city lights up just for you tonight! May your birthday shine as brilliantly as a skyline full of a million glowing windows. 🌆
        </p>
      </div>
    </div>
  );
};

export default Greeting6;
