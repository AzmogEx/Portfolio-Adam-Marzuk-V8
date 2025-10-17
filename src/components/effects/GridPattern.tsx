'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GridPatternProps {
  spacing?: number;
  dotSize?: number;
  color?: string;
  className?: string;
  mouseInteraction?: boolean;
  pulseAnimation?: boolean;
}

export function GridPattern({
  spacing = 40,
  dotSize = 2,
  color = '#60a5fa',
  className = '',
  mouseInteraction = true,
  pulseAnimation = true
}: GridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDots = () => {
      if (!containerRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      const newDots = [];
      let id = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newDots.push({
            x: col * spacing,
            y: row * spacing,
            id: id++
          });
        }
      }

      setDots(newDots);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    updateDots();
    window.addEventListener('resize', updateDots);

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', updateDots);
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [spacing, mouseInteraction]);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {dots.map((dot) => {
        const distance = mouseInteraction
          ? Math.sqrt(Math.pow(mousePos.x - dot.x, 2) + Math.pow(mousePos.y - dot.y, 2))
          : Infinity;
        const isNear = distance < 150;
        const opacity = isNear ? Math.max(0.2, 1 - distance / 150) : 0.1;
        const scale = isNear ? 1 + (1 - distance / 150) * 2 : 1;

        return (
          <motion.div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: dot.x,
              top: dot.y,
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
            }}
            animate={{
              opacity: pulseAnimation ? [opacity, opacity * 0.5, opacity] : opacity,
              scale: scale,
            }}
            transition={{
              opacity: {
                duration: 3,
                repeat: pulseAnimation ? Infinity : 0,
                ease: 'easeInOut',
                delay: (dot.id % 10) * 0.1,
              },
              scale: {
                duration: 0.3,
              },
            }}
          />
        );
      })}
    </div>
  );
}

// Simpler SVG version
export function GridPatternSVG({
  spacing = 40,
  color = 'rgba(96, 165, 250, 0.1)',
  className = ''
}: {
  spacing?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}
