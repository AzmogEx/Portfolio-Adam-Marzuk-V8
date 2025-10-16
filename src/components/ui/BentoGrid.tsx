'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

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
}: BentoCardProps) {
  const baseClasses = 'rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300';
  const hoverClasses = hover
    ? 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/30'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${hoverClasses}
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
            <div className="p-2 rounded-xl bg-primary-500/10 text-primary-400">
              {icon}
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold gradient-text">{title}</h3>
        </div>
        {badge && (
          <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-sm text-slate-400 ml-11">{description}</p>
      )}
    </div>
  );
}
