import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Code2, Globe } from 'lucide-react';
import { AbstractShapes } from '../3d/AbstractShapes';

export const About = ({ theme }: { theme: 'dark' | 'light' }) => {
  const cards = [
    {
      icon: Terminal,
      title: "The Journey",
      text: "Started full-stack freelancing in 2025, building modern digital infrastructures for clients worldwide.",
      color: "border-cyan-500/20"
    },
    {
      icon: Sparkles,
      title: "AI Focused",
      text: "Deeply passionate about integrating Large Language Models and AI automation into production software.",
      color: "border-purple-500/20"
    },
    {
      icon: Code2,
      title: "Engineering",
      text: "Experience at FirstVidya building robust, production-grade applications with modern architectures.",
      color: "border-blue-500/20"
    },
    {
      icon: Globe,
      title: "Impact",
      text: "Committed to building software that solves real-world problems and creates unforgettable user experiences.",
      color: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <AbstractShapes theme={theme} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              A Blend of <span className="text-cyan-600 dark:text-cyan-400">Creativity</span> & <span className="text-purple-600 dark:text-purple-500">Engineering</span>
            </h2>
            <div className="space-y-6 opacity-80 dark:opacity-60 text-lg leading-relaxed">
              <p>
                I am <span className="font-medium">Rudraksh Tyagi</span>, a passionate Full Stack Developer and AI Enthusiast based in <span className="font-medium">Delhi, India</span>. My journey in software development is driven by a constant curiosity to explore the intersection of cutting-edge technology and human-centric design.
              </p>
              <p>
                Since <span className="font-medium">2025</span>, I've been working independently as a freelancer, helping startups and businesses translate their complex ideas into scalable reality. My recent internship at <span className="font-medium">FirstVidya</span> further sharpened my skills in building enterprise-grade applications and collaborating in high-performance teams.
              </p>
              <p>
                I don't just write code; I craft digital experiences that are visually stunning, technically sound, and future-proof.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 border-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Terminal size={24} />
                </div>
                <div>
                   <div className="font-bold">15+</div>
                   <div className="text-xs opacity-60 dark:opacity-40 uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className={`glass p-8 rounded-3xl border-2 ${card.color} group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <card.icon className="text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="opacity-70 dark:opacity-50 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
