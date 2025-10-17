'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MeshGradientProps {
  colors?: string[];
  speed?: number;
  blur?: string;
  className?: string;
}

export function MeshGradient({
  colors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#f59e0b'],
  speed = 15,
  blur = 'blur-[100px]',
  className = ''
}: MeshGradientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Blob 1 - Top Left */}
      <motion.div
        className={`absolute w-[500px] h-[500px] rounded-full ${blur} opacity-30`}
        style={{ background: colors[0] }}
        animate={{
          x: ['-10%', '5%', '-10%'],
          y: ['-10%', '0%', '-10%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 - Top Right */}
      <motion.div
        className={`absolute right-0 top-0 w-[600px] h-[600px] rounded-full ${blur} opacity-25`}
        style={{ background: colors[1] }}
        animate={{
          x: ['10%', '0%', '10%'],
          y: ['-5%', '5%', '-5%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: speed * 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Blob 3 - Bottom Left */}
      <motion.div
        className={`absolute left-0 bottom-0 w-[550px] h-[550px] rounded-full ${blur} opacity-20`}
        style={{ background: colors[2] }}
        animate={{
          x: ['-5%', '0%', '-5%'],
          y: ['5%', '-5%', '5%'],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: speed * 0.9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Blob 4 - Bottom Right */}
      <motion.div
        className={`absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full ${blur} opacity-25`}
        style={{ background: colors[3] }}
        animate={{
          x: ['0%', '-10%', '0%'],
          y: ['0%', '10%', '0%'],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: speed * 1.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Center Blob - More subtle */}
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full ${blur} opacity-15`}
        style={{ background: `linear-gradient(45deg, ${colors[0]}, ${colors[2]})` }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: speed * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

// Alternative: Gradient mesh with sharper edges
export function SharpMeshGradient({
  className = ''
}: {
  className?: string;
}) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
    </div>
  );
}
