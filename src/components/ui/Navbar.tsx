import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface NavbarProps {
  theme?: 'dark' | 'light';
  onThemeToggle?: () => void;
}

export const Navbar = ({ theme, onThemeToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20">
            RT
          </div>
          <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">
            RUDRAKSH <span className="text-cyan-400">TYAGI</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className={cn(
          "hidden md:flex items-center gap-1 px-2 py-1 rounded-full",
          scrolled ? "glass-dark border-white/10 dark:border-white/10" : ""
        )}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium opacity-70 hover:opacity-100 hover:text-cyan-400 transition-all relative group"
            >
              {link.name}
              <motion.span 
                className="absolute bottom-1 left-4 right-4 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onThemeToggle}
            className="p-2 rounded-full bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
          </motion.button>

          <div className="hidden sm:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Linkedin size={20} />
            </a>
          </div>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden glass-dark overflow-hidden mt-4 rounded-2xl mx-6"
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-2 pt-4 border-t border-foreground/10">
             <a href="#" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all">
               <Github size={20} /> GitHub
             </a>
             <a href="#" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-all">
               <Linkedin size={20} /> LinkedIn
             </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};
