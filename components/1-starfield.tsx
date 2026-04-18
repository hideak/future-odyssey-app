"use client";

import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      velocity: number;
      twinkleSpeed: number;
      twinkleDir: number;
    }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      
      const numStars = window.innerWidth < 768 ? 400 : 800;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2,
          alpha: Math.random(),
          velocity: (Math.random() * 0.15) + 0.05,
          twinkleSpeed: (Math.random() * 0.03) + 0.01,
          twinkleDir: Math.random() > 0.5 ? 1 : -1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDir = 1;
        } else if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.velocity;

        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-800/15 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-800/10 blur-[120px] rounded-full animate-pulse delay-700" />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-70 mix-blend-screen"
      />
    </div>
  );
};

export default Starfield;
