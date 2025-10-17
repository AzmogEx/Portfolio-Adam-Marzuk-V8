'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export function EasterEggs() {
  const [showSecret, setShowSecret] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    // Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    // Console messages
    console.log('%c🚀 Bienvenue dans mon portfolio !', 'font-size: 20px; font-weight: bold; color: #60a5fa;');
    console.log('%cVous cherchez quelque chose ? 👀', 'font-size: 14px; color: #a855f7;');
    console.log('%c💡 Astuce: Essayez le Konami Code !', 'font-size: 12px; color: #ec4899;');
    console.log('%c⌨️  Ou appuyez sur M pour le mode Matrix', 'font-size: 12px; color: #10b981;');

    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami code detection
      if (e.key.toLowerCase() === konamiCode[konamiProgress].toLowerCase()) {
        const nextProgress = konamiProgress + 1;
        setKonamiProgress(nextProgress);

        if (nextProgress === konamiCode.length) {
          triggerKonamiEffect();
          setKonamiProgress(0);
        }
      } else {
        setKonamiProgress(0);
      }

      // Matrix mode toggle
      if (e.key.toLowerCase() === 'm' && e.ctrlKey) {
        setMatrixMode(!matrixMode);
      }

      // Secret confetti (Shift + C)
      if (e.key.toLowerCase() === 'c' && e.shiftKey) {
        triggerConfetti();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiProgress, matrixMode]);

  const triggerKonamiEffect = () => {
    setShowSecret(true);

    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#60a5fa', '#a855f7', '#ec4899'],
      });

      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#60a5fa', '#a855f7', '#ec4899'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Hide message after 5 seconds
    setTimeout(() => setShowSecret(false), 5000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#60a5fa', '#a855f7', '#ec4899', '#10b981', '#f59e0b'],
    });
  };

  return (
    <>
      {/* Konami Code Success Message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
          >
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl text-white text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">Code Konami Activé!</h2>
              <p className="text-lg opacity-90">Vous avez découvert le secret! 🚀</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Mode Effect */}
      {matrixMode && <MatrixRain />}
    </>
  );
}

// Matrix Rain Effect Component
function MatrixRain() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9998';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}

// Console Art
export function ConsoleArt() {
  useEffect(() => {
    const art = `
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║     🚀 PORTFOLIO DE DÉVELOPPEUR 🚀   ║
    ║                                       ║
    ║   Développé avec ❤️ par Adam Marzuk  ║
    ║                                       ║
    ║   Technologies: Next.js + React +     ║
    ║   TypeScript + Tailwind CSS +         ║
    ║   Framer Motion + Prisma              ║
    ║                                       ║
    ║   💼 Recrute un développeur ?         ║
    ║   📧 contact@adam-marzuk.fr           ║
    ║   🔗 GitHub: @AzmogEx                 ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `;

    console.log('%c' + art, 'color: #60a5fa; font-family: monospace;');
  }, []);

  return null;
}
