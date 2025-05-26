"use client";
import { useEffect } from "react";

export default function WaveCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("waveCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let time = 0;
    let animationFrameId;
    let rect;

    const resize = () => {
      rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const drawWave = (baseY, amplitude, frequency, speed, opacity) => {
      ctx.beginPath();
      const isLightMode = document.documentElement.getAttribute("data-theme") === "light";
      ctx.strokeStyle = isLightMode
        ? `rgba(0, 102, 204, ${opacity})`
        : `rgba(56, 182, 255, ${opacity})`;
      ctx.lineWidth = 1;
      for (let x = 0; x < rect.width; x += 1) {
        const y =
          baseY +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 1.5) * (amplitude * 0.5);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!rect) return;
      ctx.clearRect(0, 0, rect.width, rect.height);
      drawWave(rect.height * 0.5, 40, 0.003, 0.7, 0.22);
      drawWave(rect.height * 0.5, 35, 0.004, -0.5, 0.22);
      time += 0.015;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const observer = new MutationObserver(mutations => {
      for (let m of mutations) {
        if (m.attributeName === "data-theme") {
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
          animate();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="waveCanvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.9 }}
    />
  );
}
