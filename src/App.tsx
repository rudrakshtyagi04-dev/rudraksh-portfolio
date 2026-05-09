/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { AIChatbot } from './components/ui/AIChatbot';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        alert("Command Palette coming soon! This is an elite developer's workspace.");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <CustomCursor />
      <Navbar theme={theme} onThemeToggle={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} />
      <AIChatbot />
      
      <div className="relative">
        <Hero theme={theme} />
        <About theme={theme} />
        <Stats />
        <Skills theme={theme} />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </div>
      
      <footer className="py-12 border-t border-foreground/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                RT
              </div>
              <span className="font-display font-medium tracking-tight">RUDRAKSH <span className="text-cyan-400">TYAGI</span></span>
           </div>
           
           <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
             Built with passion & AI <span className="mx-2">/</span> &copy; {new Date().getFullYear()} All rights reserved.
           </p>
           
           <div className="flex gap-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-white/40 hover:text-cyan-400 transition-colors text-xs uppercase tracking-widest font-mono">
                  {s}
                </a>
              ))}
           </div>
        </div>
      </footer>
    </main>
  );
}
