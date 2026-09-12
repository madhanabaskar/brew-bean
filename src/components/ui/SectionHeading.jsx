import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center', 
  className,
  light = false
}) {
  return (
    <div className={cn(
      "flex flex-col mb-12",
      align === 'center' && "items-center text-center",
      align === 'left' && "items-start text-left",
      align === 'right' && "items-end text-right",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-sm font-medium tracking-widest uppercase mb-3",
            light ? "text-background/80" : "text-coffee"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl font-serif",
          light ? "text-background" : "text-espresso"
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
