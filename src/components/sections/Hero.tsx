import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Github, Linkedin, Mail, Send } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';
import { HeroBackground } from '../3d/HeroBackground';

export const Hero = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <HeroBackground theme={theme} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-[0.2em] mb-6">
            Available for New Projects
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter mb-4">
            <span>RUDRAKSH</span>
            <span className="block text-gradient">TYAGI</span>
          </h1>

          <div className="max-w-xl mx-auto h-8 text-xl md:text-2xl opacity-70 dark:opacity-60 font-medium mb-12">
            <Typewriter
              words={[
                'Full Stack Developer',
                'AI Enthusiast',
                'Software Engineer',
                'Freelancer since 2025'
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="#projects">
              <CyberButton>
                Explore Projects
              </CyberButton>
            </a>
            <a href="#contact">
              <CyberButton variant="outline">
                Hire Me <Send size={18} className="ml-2" />
              </CyberButton>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:tyagirudraksh65@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, color: "var(--color-accent)" }}
                className="opacity-60 dark:opacity-40 hover:opacity-100 transition-all"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 dark:opacity-20"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};
