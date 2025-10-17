'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl z-50 group"
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
}

// Minimal version
export function MinimalBackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const progress = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = latest / height;
      progress.set(scrollPercentage);
      setIsVisible(latest > 300);
    });

    return () => unsubscribe();
  }, [scrollY, progress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-12 h-12 absolute transform -rotate-90">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="3"
          fill="none"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          stroke="#60a5fa"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength: progress,
            strokeDasharray: '0 1',
          }}
        />
      </svg>
      <ArrowUp className="w-5 h-5 text-white relative z-10" />
    </motion.button>
  );
}
