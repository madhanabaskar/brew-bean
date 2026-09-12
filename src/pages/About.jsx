import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SafeImage } from '../components/ui/SafeImage';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeading title="Our Story" subtitle="Humble Beginnings" />
        
        <div className="mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-video md:aspect-[21/9] overflow-hidden mb-8 md:mb-12"
          >
            <SafeImage 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2000&auto=format&fit=crop" 
              alt="Brew & Bean Origin" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="max-w-3xl mx-auto text-lg text-espresso/80 space-y-6 leading-relaxed text-center">
            <p>
              Brew & Bean started as a small neighborhood coffee house with a simple mission: to serve exceptional coffee in a space that feels like home.
            </p>
            <p>
              We believe that good coffee is about more than just the beans. It's about the care in the roasting, the precision in the brewing, and the environment in which it's enjoyed. Our space was designed to encourage conversation, creativity, and moments of pause in a busy world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 text-espresso">Our Philosophy</h3>
            <p className="text-espresso/70 mb-4 leading-relaxed">
              We source our beans directly from sustainable farms, ensuring fair practices and the highest quality. Every batch is roasted to highlight its unique flavor profile.
            </p>
            <p className="text-espresso/70 leading-relaxed">
              Our food is made fresh daily using locally sourced ingredients, perfectly complementing our beverage menu.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 aspect-square overflow-hidden"
          >
            <SafeImage 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" 
              alt="Coffee Philosophy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="text-center">
          <SectionHeading title="The Team" subtitle="Faces behind the bar" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "Elena Rossi", role: "Head Roaster", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
              { name: "David Chen", role: "Lead Barista", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
              { name: "Sarah Jenkins", role: "Pastry Chef", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop" }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-square overflow-hidden rounded-full mb-4 w-40 md:w-48 mx-auto">
                  <SafeImage src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif text-espresso">{member.name}</h4>
                <p className="text-coffee font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
