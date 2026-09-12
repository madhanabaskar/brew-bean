import React from 'react';
import { motion } from 'framer-motion';
import { Home, Coffee } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full text-center"
      >
        <span className="text-8xl md:text-9xl font-serif text-coffee/20 font-bold block mb-4">404</span>
        <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6">This page isn't on the menu.</h1>
        <p className="text-lg text-espresso/70 mb-10 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" className="flex items-center gap-2" asChild>
            <span>
              <Home size={18} />
              Go Home
            </span>
          </Button>
          <Button to="/menu" variant="outline" className="flex items-center gap-2" asChild>
            <span>
              <Coffee size={18} />
              Explore Menu
            </span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
