import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
  children: React.ReactNode;
}

export const CyberButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  glow = true,
  ...props 
}: CyberButtonProps) => {
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400",
    secondary: "bg-purple-600 text-white hover:bg-purple-500",
    outline: "border border-foreground/10 text-foreground hover:bg-foreground/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-lg font-display font-semibold transition-all duration-300 relative group overflow-hidden",
        variants[variant],
        glow && variant === 'primary' && "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Animated Shine Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
      />
      
      {/* Corner Borders */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-foreground/30" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-foreground/30" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-foreground/30" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-foreground/30" />
    </motion.button>
  );
};
