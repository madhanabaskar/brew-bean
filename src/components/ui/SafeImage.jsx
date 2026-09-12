import React, { useState } from 'react';
import { Coffee } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function SafeImage({ src, alt, className, ...props }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

  return (
    <div className={cn("relative overflow-hidden bg-sand/30", className)}>
      <AnimatePresence>
        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-sand/50 animate-pulse"
          />
        )}
      </AnimatePresence>

      {status === 'error' ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-espresso/40 bg-sand/20">
          <Coffee size={32} className="mb-2" />
          <span className="text-xs uppercase tracking-widest font-medium">Image Unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-150",
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          )}
          {...props}
        />
      )}
    </div>
  );
}
