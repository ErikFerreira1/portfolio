import React, { useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 200;
    const speed = 0.08;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          dx: (Math.random() - 0.5) * speed,
          dy: (Math.random() - 0.5) * speed,
        });
      }
    };

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';

      stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        // Reposiciona a estrela se ela sair da tela
        if (star.x < 0 || star.x > canvas.width) {
          star.dx = -star.dx;
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.dy = -star.dy;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    setCanvasSize();
    initStars();
    animateStars();

    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" />;
};

export default Background;