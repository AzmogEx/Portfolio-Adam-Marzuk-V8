'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedBorderProps {
  children: ReactNode;
  variant?: 'rainbow' | 'blue-purple' | 'neon' | 'gold';
  speed?: number;
  width?: number;
  className?: string;
  rounded?: string;
}

export function AnimatedBorder({
  children,
  variant = 'blue-purple',
  speed = 3,
  width = 2,
  className = '',
  rounded = 'rounded-2xl'
}: AnimatedBorderProps) {
  const gradients = {
    rainbow: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
    'blue-purple': 'from-blue-500 via-purple-500 to-pink-500',
    neon: 'from-cyan-400 via-blue-500 to-purple-600',
    gold: 'from-yellow-400 via-orange-500 to-red-500'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Animated rotating gradient border */}
      <motion.div
        className={`absolute inset-0 ${rounded} opacity-75`}
        style={{
          padding: `${width}px`,
          background: `conic-gradient(from 0deg, transparent, transparent)`,
        }}
        animate={{
          background: [
            `conic-gradient(from 0deg, var(--tw-gradient-stops))`,
            `conic-gradient(from 360deg, var(--tw-gradient-stops))`
          ]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className={`w-full h-full bg-gradient-to-r ${gradients[variant]} ${rounded}`}></div>
      </motion.div>

      {/* Pulsing glow effect */}
      <motion.div
        className={`absolute inset-0 ${rounded} blur-xl opacity-50`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: speed * 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={`w-full h-full bg-gradient-to-r ${gradients[variant]}`}></div>
      </motion.div>

      {/* Content */}
      <div className={`relative bg-slate-900 ${rounded}`} style={{ margin: `${width}px` }}>
        {children}
      </div>
    </div>
  );
}

// Simpler version with just rotating border
export function GradientBorder({
  children,
  className = '',
  borderWidth = 2,
  rounded = 'rounded-2xl'
}: {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  rounded?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${rounded} animate-spin-slow`}
           style={{ padding: `${borderWidth}px` }}>
      </div>
      <div className={`relative bg-slate-900/90 backdrop-blur-xl ${rounded} h-full`}
           style={{ margin: `${borderWidth}px` }}>
        {children}
      </div>
    </div>
  );
}
