import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Briefcase, Calendar, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
             Career <span className="text-gradient">Timeline</span>
          </h2>
          <p className="opacity-40">From internships to high-impact freelance projects.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex items-center justify-between flex-col sm:flex-row ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)] border-4 border-background" />

                <div className={`w-full sm:w-[45%] ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} ml-8 sm:ml-0`}>
                  <div className="glass p-8 rounded-3xl group hover:border-cyan-500/50 transition-all duration-500">
                    <div className={cn(
                      "flex items-center gap-3 mb-2 text-cyan-400 font-mono text-sm uppercase tracking-widest",
                      i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    )}>
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className={cn(
                      "opacity-60 font-medium mb-6 flex items-center gap-2",
                      i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    )}>
                      {exp.isFreelance ? <Globe size={16} /> : <Briefcase size={16} />}
                      {exp.company}
                    </div>
                    
                    <ul className="space-y-3 opacity-50 text-sm list-none">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className={cn(
                          "flex items-start gap-2",
                          i % 2 === 0 ? "sm:justify-end sm:text-right" : "sm:justify-start sm:text-left text-left"
                        )}>
                          {i % 2 !== 0 && <span className="text-cyan-500 mt-1.5">•</span>}
                          <span>{item}</span>
                          {i % 2 === 0 && <span className="text-cyan-500 mt-1.5 hidden sm:inline">•</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px] translate-x-1/2" />
    </section>
  );
};
