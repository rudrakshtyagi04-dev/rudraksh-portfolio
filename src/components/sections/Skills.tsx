import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import { cn } from '../../lib/utils';
import { AbstractShapes } from '../3d/AbstractShapes';

export const Skills = ({ theme }: { theme: 'dark' | 'light' }) => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <AbstractShapes theme={theme} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              My <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="opacity-60 dark:opacity-40 mt-4 max-w-lg">
              A curated selection of technologies I've mastered to build futuristic and scalable digital solutions.
            </p>
          </motion.div>
          
          <div className="flex gap-4">
             <div className="h-0.5 w-12 bg-cyan-600 dark:bg-cyan-500 self-center" />
             <span className="font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest text-sm">Tech Stack</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <div className="absolute top-0 right-0 p-6">
                <span className="text-6xl font-display font-bold opacity-5 select-none">
                  0{idx + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                {cat}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-2xl bg-foreground/5 border border-foreground/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group/skill"
                  >
                    <div className="text-sm font-medium mb-3 group-hover/skill:text-cyan-600 dark:group-hover/skill:text-cyan-400 transition-colors">
                      {skill.name}
                    </div>
                    {/* Progress indicator */}
                    <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.level}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                       />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
