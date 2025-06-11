import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function LiquidGlassCard({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  onClick
}: LiquidGlassCardProps) {
  const baseStyles = `
    relative overflow-hidden rounded-2xl border border-white/20
    backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
    shadow-xl shadow-black/10 transition-all duration-500 ease-out
    before:absolute before:inset-0 before:rounded-2xl 
    before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent
    before:opacity-0 before:transition-opacity before:duration-300
    after:absolute after:inset-0 after:rounded-2xl
    after:bg-gradient-to-tr after:from-transparent after:via-white/5 after:to-white/10
  `;

  const sizeStyles = {
    sm: 'p-4 min-h-[120px]',
    md: 'p-6 min-h-[160px]',
    lg: 'p-8 min-h-[200px]'
  };

  const variantStyles = {
    default: 'hover:shadow-2xl hover:shadow-black/20 hover:scale-[1.02] hover:before:opacity-100',
    hover: `
      hover:shadow-2xl hover:shadow-black/30 hover:scale-105 hover:before:opacity-100
      hover:bg-gradient-to-br hover:from-white/15 hover:to-white/8
      hover:border-white/30 active:scale-100
    `,
    glow: `
      hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02] hover:before:opacity-100
      hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-cyan-400/10 hover:to-purple-400/5
      after:bg-gradient-to-tr after:from-cyan-400/5 after:via-white/5 after:to-purple-400/5
    `
  };

  const cursorStyle = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${cursorStyle}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Animated liquid effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/15 to-transparent rounded-full blur-lg animate-pulse delay-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-shine" />
      </div>
    </motion.div>
  );
}
