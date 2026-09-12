import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SafeImage } from '../components/ui/SafeImage';
import { menuData } from '../data/menu';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function Home() {
  const featuredCoffee = menuData.slice(0, 3);
  const signatureMenu = menuData.filter(item => [1, 2, 7, 9, 10, 11].includes(item.id));

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 uppercase tracking-[0.2em] text-sm mb-6 font-medium"
          >
            Freshly brewed every morning
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-lg"
          >
            Good Coffee.<br />Good Moments.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light"
          >
            "Slow down, sip something special, and enjoy the little moments that make your day."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button to="/menu" variant="primary" size="lg">Explore Menu</Button>
            <Button to="/reservation" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-espresso">
              Reserve a Table
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Coffee Section */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="container mx-auto">
          <SectionHeading 
            title="Made With Passion" 
            subtitle="Our Favorites" 
          />
          <p className="text-center max-w-2xl mx-auto text-espresso/70 mb-16 text-lg">
            "Carefully selected beans, thoughtful preparation, and a little patience in every cup."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCoffee.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="group cursor-pointer text-center"
              >
                <div className="overflow-hidden mb-6 w-56 h-56 mx-auto rounded-full shadow-lg">
                  <SafeImage 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{item.name}</h3>
                <span className="text-coffee font-medium block mb-3">₹{item.price}</span>
                <p className="text-espresso/70 text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-sand/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-square md:aspect-[4/3] overflow-hidden"
              >
                <SafeImage 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cafe Interior" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 md:pr-10">
              <SectionHeading title="More Than Just Coffee" align="left" />
              <p className="text-lg text-espresso/80 leading-relaxed mb-8">
                "Brew & Bean is a place to pause, connect, and enjoy thoughtfully crafted coffee in a warm and welcoming space."
              </p>
              <Button to="/about" variant="secondary">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <SectionHeading title="Signature Menu" subtitle="Taste the difference" align="left" className="mb-0" />
            <Link to="/menu" className="hidden md:inline-flex items-center text-coffee font-medium hover:text-espresso transition-colors">
              View Full Menu <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {signatureMenu.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full">
                  <SafeImage src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1 border-b border-espresso/10 pb-1">
                    <h4 className="font-serif text-lg font-medium">{item.name}</h4>
                    <span className="font-medium text-coffee">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-espresso/60 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button to="/menu" variant="outline">View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-espresso text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6"
            >
              <h3 className="text-2xl font-serif mb-4 text-coffee">Freshly Roasted</h3>
              <p className="text-background/70 leading-relaxed">Small-batch coffee made with carefully selected beans.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="px-6 md:border-l md:border-r border-background/10"
            >
              <h3 className="text-2xl font-serif mb-4 text-coffee">Made Fresh</h3>
              <p className="text-background/70 leading-relaxed">Thoughtfully prepared food and desserts.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="px-6"
            >
              <h3 className="text-2xl font-serif mb-4 text-coffee">Good Atmosphere</h3>
              <p className="text-background/70 leading-relaxed">A comfortable space to work, meet, or simply relax.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Follow Our Journey" subtitle="@brewandbean" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600",
              "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600",
              "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600",
              "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <SafeImage src={src} alt="Gallery item" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          
          <Button to="/gallery" variant="secondary">Explore Gallery</Button>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 md:py-32 relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-espresso/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <SectionHeading title="Your Table Is Waiting." light className="mb-6" />
          <p className="text-xl text-background/90 font-light mb-10 max-w-lg mx-auto">
            "Join us for coffee, conversations, and good moments."
          </p>
          <Button to="/reservation" size="lg" className="bg-coffee text-espresso hover:bg-white">
            Reserve a Table
          </Button>
        </div>
      </section>
    </motion.div>
  );
}
