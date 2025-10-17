'use client';

import { useScroll, useTransform, MotionValue, useMotionValue } from 'framer-motion';
import { RefObject } from 'react';

export interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  targetRef?: RefObject<HTMLElement>;
}

export function useParallax({
  speed = 0.5,
  direction = 'up',
  targetRef,
}: ParallaxOptions = {}) {
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const multiplier = speed * 100;

  const transform = useTransform(
    scrollY,
    [0, 1000],
    direction === 'down' || direction === 'right' ? [0, multiplier] : [0, -multiplier]
  );

  return transform;
}

// Advanced parallax with custom ranges
export function useAdvancedParallax(
  inputRange: number[],
  outputRange: number[]
): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, inputRange, outputRange);
}

// Parallax for mouse movement
export function useMouseParallax(strength: number = 20) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      const xPos = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const yPos = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      x.set(xPos * strength);
      y.set(yPos * strength);
    });
  }

  return { x, y };
}
