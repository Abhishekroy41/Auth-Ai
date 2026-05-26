import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// Depending on the Vanta version, this import path works best for Vite:
import NET from 'vanta/src/vanta.net';

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return; // Disable on mobile for performance
    }

    if (!vantaEffect && vantaRef.current) {
      try {
        setVantaEffect(NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x00B4FF, /* Electric blue for network */
          backgroundColor: 0x050810, /* Very dark background */
          points: 15.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: true
        }));
      } catch (e) {
        console.error("Vanta effect failed to load", e);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      className="fixed top-0 left-0 w-full h-full z-0 opacity-25 pointer-events-none mix-blend-screen"
    />
  );
}
