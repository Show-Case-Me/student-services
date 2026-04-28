"use client";

import React, { useEffect, useState } from "react";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates and better performance
      window.requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] rounded-full mix-blend-screen opacity-40 transition-opacity duration-500"
      style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        left: 0,
        top: 0,
        transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
        willChange: 'transform',
      }}
    />
  );
}
