'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        animate={{
          opacity: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 180,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        >
          <Sun className="w-5 h-5 text-yellow-400" />
        </motion.div>

        {/* Moon icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -180,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-md"
        animate={{
          backgroundColor: theme === 'light' ? 'rgba(250, 204, 21, 0.3)' : 'rgba(96, 165, 250, 0.3)',
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          backgroundColor: { duration: 0.3 },
          opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </motion.button>
  );
}

// Compact version for mobile
export function CompactThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/5 border border-white/10"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Moon className="w-4 h-4 text-blue-400" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-400" />
      )}
    </motion.button>
  );
}
