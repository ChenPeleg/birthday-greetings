import React from 'react';
import SunriseBackground from '../components/SunriseBackground';

const Greeting3 = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      <SunriseBackground />

      {/* Greeting text */}
      <div
        className="greeting"
        style={{
          position: 'absolute',
          top: '8%',
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          zIndex: 10,
          opacity: 0,
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🌅</div>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#fff',
          fontFamily: 'Georgia, serif',
          margin: '0 0 16px',
          lineHeight: 1.2,
          textShadow: '2px 2px 12px rgba(0,0,0,0.5)',
        }}>
          Happy Birthday!
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#fff',
          margin: 0,
          lineHeight: 1.7,
          textShadow: '1px 1px 6px rgba(0,0,0,0.5)',
        }}>
          A new day rises, just for you — may it shine as brilliantly as you do! ☀️
        </p>
      </div>
    </div>
  );
};

export default Greeting3;
