import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ delay = 400 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show loading screen after a delay to prevent flashing on fast loads
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <div className="w-16 h-16 border-4 border-espresso border-t-coffee rounded-full animate-spin"></div>
          </motion.div>
          <h2 className="text-3xl font-serif text-espresso mb-2 tracking-wide font-bold">
            BREW & BEAN
          </h2>
          <p className="text-coffee uppercase tracking-widest text-sm font-medium">
            Brewing your experience...
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
