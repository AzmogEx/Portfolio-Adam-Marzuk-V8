import { Variants } from 'framer-motion';

// Fade In Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

// Scale Animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring' },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', bounce: 0.5 },
  },
};

// Slide Animations
export const slideInLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'spring' },
  },
};

export const slideInRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'spring' },
  },
};

// Rotate Animations
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, type: 'spring' },
  },
};

// Stagger Children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Flip Animations
export const flip: Variants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

// Bounce Animation
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

// Typing Effect
export const typingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const typingLetter: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Pulse Animation
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Glow Effect
export const glow = {
  boxShadow: [
    '0 0 20px rgba(96, 165, 250, 0.5)',
    '0 0 40px rgba(96, 165, 250, 0.8)',
    '0 0 20px rgba(96, 165, 250, 0.5)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Float Animation
export const float = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Shake Animation
export const shake = {
  x: [0, -10, 10, -10, 10, 0],
  transition: {
    duration: 0.5,
  },
};

// Page Transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

// Card Hover Effects
export const cardHover = {
  scale: 1.05,
  y: -5,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  transition: {
    duration: 0.3,
    type: 'spring',
    stiffness: 300,
  },
};

// Button Tap
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

// Expand Animation
export const expand: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

// Loading Spinner
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Reveal from Bottom
export const revealFromBottom: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      damping: 25,
    },
  },
};

// 3D Rotation
export const rotate3D: Variants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'spring' },
  },
};

// Morph Animation
export const morph = {
  borderRadius: ['20%', '50%', '20%'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
