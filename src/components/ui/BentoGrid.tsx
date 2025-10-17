'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef, MouseEvent } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: '1x1' | '1x2' | '2x1' | '2x2' | '3x1' | '1x3' | 'auto';
  variant?: 'glass' | 'solid' | 'gradient';
  hover?: boolean;
  delay?: number;
  enable3D?: boolean;
  glowEffect?: boolean;
}

const sizeClasses = {
  '1x1': 'col-span-1 row-span-1',
  '1x2': 'col-span-1 md:row-span-2',
  '2x1': 'md:col-span-2 row-span-1',
  '2x2': 'md:col-span-2 md:row-span-2',
  '3x1': 'md:col-span-3 row-span-1',
  '1x3': 'col-span-1 md:row-span-3',
  'auto': '',
};

const variantClasses = {
  glass: 'bg-white/5 backdrop-blur-md border border-white/10',
  solid: 'bg-slate-900/90 border border-white/5',
  gradient: 'bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-pink-500/10 border border-white/10',
};

export function BentoCard({
  children,
  className = '',
  size = 'auto',
  variant = 'glass',
  hover = true,
  delay = 0,
  enable3D = false,
  glowEffect = false,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D transform
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  // Glow effect position
  const glowX = useSpring(0, { stiffness: 300, damping: 30 });
  const glowY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position from -0.5 to 0.5
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    mouseX.set(x);
    mouseY.set(y);

    // Set glow position
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const baseClasses = 'rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300';
  const hoverClasses = hover
    ? 'hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/30'
    : '';

  const cardStyle = enable3D
    ? {
        transformStyle: 'preserve-3d' as const,
        rotateX: rotateX,
        rotateY: rotateY,
        scale: hover ? 1.02 : 1,
      }
    : {};

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: enable3D ? 1 : 1.02 } : {}}
      style={cardStyle}
      onMouseMove={enable3D ? handleMouseMove : undefined}
      onMouseLeave={enable3D ? handleMouseLeave : undefined}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${hoverClasses}
        ${className}
      `}
    >
      {/* Inner glow effect on hover */}
      {glowEffect && (
        <motion.div
          className="absolute rounded-full pointer-events-none blur-3xl opacity-0 hover:opacity-30 transition-opacity duration-300"
          style={{
            width: 200,
            height: 200,
            left: glowX,
            top: glowY,
            x: '-50%',
            y: '-50%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.8), transparent 70%)',
          }}
        />
      )}

      {/* Animated gradient border effect */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.1), transparent)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      )}

      {/* Content with 3D transform */}
      <div
        style={
          enable3D
            ? {
                transform: 'translateZ(50px)',
                transformStyle: 'preserve-3d',
              }
            : {}
        }
      >
        {children}
      </div>
    </motion.div>
  );
}

// Enhanced version with magnetic effect
export function MagneticBentoCard({
  children,
  className = '',
  size = 'auto',
  variant = 'glass',
  delay = 0,
  strength = 0.3,
}: Omit<BentoCardProps, 'hover' | 'enable3D' | 'magneticStrength'> & { strength?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      style={{
        x: xSpring,
        y: ySpring,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/30
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

interface BentoCardHeaderProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  badge?: string;
}

export function BentoCardHeader({ icon, title, description, badge }: BentoCardHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 rounded-xl bg-primary-500/10 text-primary-400"
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-xl md:text-2xl font-bold gradient-text">{title}</h3>
        </div>
        {badge && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
          >
            {badge}
          </motion.span>
        )}
      </div>
      {description && (
        <p className="text-sm text-slate-400 ml-11">{description}</p>
      )}
    </div>
  );
}
