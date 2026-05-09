import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Layers, Smartphone } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building robust end-to-end applications with modern architectures and clean, scalable codebases.",
      color: "group-hover:text-cyan-400",
      glow: "group-hover:shadow-cyan-500/20"
    },
    {
      icon: Smartphone,
      title: "Frontend UI/UX",
      description: "Crafting highly interactive, responsive, and cinematic user interfaces that feel premium and modern.",
      color: "group-hover:text-purple-500",
      glow: "group-hover:shadow-purple-500/20"
    },
    {
      icon: Layers,
      title: "Backend APIs",
      description: "Designing secured, high-performance RESTful and GraphQL APIs to power complex business logic.",
      color: "group-hover:text-blue-500",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Implementing cutting-edge Gemini AI and LLM capabilities into software for smart automation.",
      color: "group-hover:text-emerald-500",
      glow: "group-hover:shadow-emerald-500/20"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
             Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="opacity-60 dark:opacity-40">Tailored digital solutions for the next generation of the web.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-current opacity-5 blur-[80px] rounded-full transition-all duration-500 ${service.color}`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 transition-colors duration-500 ${service.color}`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="opacity-70 dark:opacity-50 leading-relaxed">{service.description}</p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-50 dark:opacity-30 group-hover:opacity-100 transition-opacity">
                 <span>Learn More</span>
                 <div className="h-px w-8 bg-current" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
