import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import { CyberButton } from '../ui/CyberButton';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
               Let's Build the <span className="text-gradient">Future</span>
            </h2>
            <p className="opacity-70 dark:opacity-50 text-lg mb-12 max-w-md">
               Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "rudrakshtyagi0410@gmail.com", href: "mailto:rudrakshtyagi0410@gmail.com" },
                { icon: MapPin, label: "Location", value: "Delhi, India", href: "#" },
                { icon: Github, label: "GitHub", value: "github.com/rudraksh", href: "#" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rudraksh", href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="opacity-60 dark:opacity-30 text-xs uppercase tracking-[0.2em] mb-1 font-mono">{item.label}</div>
                    <div className="font-medium group-hover:text-cyan-400 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10 relative"
          >
            <div className="absolute top-0 right-0 p-6 text-cyan-500/20">
               <Sparkles size={48} />
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-60 dark:opacity-40 font-mono ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 placeholder:opacity-50 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-60 dark:opacity-40 font-mono ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 placeholder:opacity-50 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60 dark:opacity-40 font-mono ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 placeholder:opacity-50 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-60 dark:opacity-40 font-mono ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 placeholder:opacity-50 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <CyberButton className="w-full py-4 text-lg">
                 Send Message <Send size={20} className="ml-2" />
              </CyberButton>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 translate-x-1/2" />
    </section>
  );
};
