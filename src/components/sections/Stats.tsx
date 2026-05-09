import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { STATS } from '../../constants';

const Counter = ({ value, suffix }: { value: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Parse numeric value if contains 'k'
  const numericValue = value.includes('k') ? parseFloat(value.replace('k', '')) * 1000 : parseFloat(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const displayValue = value.includes('k') ? (count / 1000).toFixed(1) + 'k' : count;

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-display font-black">
      {displayValue}{suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-24 border-y border-foreground/5 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 inline-block">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] font-semibold group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
