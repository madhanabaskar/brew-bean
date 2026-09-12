import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SafeImage } from '../components/ui/SafeImage';
import { menuData, menuCategories } from '../data/menu';
import { cn } from '../lib/utils';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeading title="Our Menu" subtitle="Thoughtfully Crafted" />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category 
                  ? "bg-espresso text-background" 
                  : "bg-transparent text-espresso/60 hover:text-espresso border border-espresso/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-10 lg:gap-y-12">
          <AnimatePresence>
            {filteredMenu.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="flex gap-4 sm:gap-6 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden">
                  <SafeImage 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-baseline mb-1 sm:mb-2 border-b border-espresso/10 pb-1 sm:pb-2">
                    <h3 className="text-lg md:text-xl font-serif font-medium">{item.name}</h3>
                    <span className="text-coffee font-medium whitespace-nowrap ml-4">₹{item.price}</span>
                  </div>
                  <p className="text-espresso/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
