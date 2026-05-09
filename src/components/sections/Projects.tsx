import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Featured <span className="text-gradient">Innovations</span>
            </h2>
          <p className="opacity-60 dark:opacity-40 mt-4 max-w-lg">
               A showcase of high-performance applications built with modern stacks and AI integration.
            </p>
          </motion.div>
          
          <div className="flex gap-4">
             <div className="h-0.5 w-12 bg-cyan-600 dark:bg-cyan-500 self-center" />
             <span className="font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest text-sm">Portfolio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group glass rounded-[2.5rem] overflow-hidden border border-foreground/5 hover:border-cyan-500/50 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] transition-all duration-500"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                
                {/* Tech Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((t, idx) => (
                    <motion.span 
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i * 0.1) + (idx * 0.1) + 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest group-hover:border-cyan-500/50 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-2xl font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                     {project.title}
                   </h3>
                   <Code2 className="opacity-40 dark:opacity-20 group-hover:opacity-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all" size={24} />
                </div>
                
                <p className="opacity-70 dark:opacity-50 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                   <a href={project.github} className="flex-1">
                      <CyberButton variant="outline" className="w-full h-10 px-4 text-xs">
                        <Github size={14} className="mr-2" /> Code
                      </CyberButton>
                   </a>
                   <a href={project.demo} className="flex-1">
                      <CyberButton className="w-full h-10 px-4 text-xs font-bold">
                        Live Demo <ExternalLink size={14} className="ml-2" />
                      </CyberButton>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
           <p className="opacity-40 dark:opacity-20 font-mono text-xs uppercase tracking-[0.4em] mb-4">More projects on GitHub</p>
           <a href="https://github.com" target="_blank" rel="noreferrer">
             <CyberButton variant="outline">View All Repositories</CyberButton>
           </a>
        </motion.div>
      </div>
    </section>
  );
};
