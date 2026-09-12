import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', request: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a time.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSubmitError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Simulate API call failure randomly or just succeed based on a mock logic
    // We'll simulate success most times, but for demonstration, let's just make it succeed.
    setTimeout(() => {
      // simulate 10% chance of failure for error state demo
      if (Math.random() < 0.1) {
        setSubmitError(true);
      } else {
        setIsSubmitted(true);
      }
    }, 800);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <SectionHeading title="Reserve a Table" subtitle="We're expecting you" />

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-sand/30 p-12 text-center border border-coffee/20"
            >
              <h3 className="text-3xl font-serif text-espresso mb-4">Reservation Request Received</h3>
              <p className="text-lg text-espresso/70 mb-8">
                "We'll see you soon at Brew & Bean. A confirmation email has been sent to {formData.email}."
              </p>
              <Button onClick={() => { setIsSubmitted(false); setFormData({name: '', email: '', phone: '', date: '', time: '', guests: '2', request: ''}); }} variant="outline">
                Make Another Reservation
              </Button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit} 
              className="space-y-6 md:space-y-8 bg-white p-6 md:p-12 shadow-sm border border-espresso/5"
              noValidate
            >
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>We couldn't complete your request. Please try again.</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 relative">
                  <label htmlFor="name" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="John Doe" />
                  {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="email" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="john@example.com" />
                  {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email}</span>}
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="phone" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="+91 98765 43210" />
                  {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.phone}</span>}
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="guests" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Number of Guests</label>
                  <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-coffee transition-colors text-espresso">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="date" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${errors.date ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} />
                  {errors.date && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.date}</span>}
                </div>
                <div className="space-y-2 relative">
                  <label htmlFor="time" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Time</label>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors ${errors.time ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} />
                  {errors.time && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.time}</span>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="request" className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Special Request (Optional)</label>
                <textarea id="request" name="request" value={formData.request} onChange={handleChange} rows="3" className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-coffee transition-colors resize-none" placeholder="Any special requirements?"></textarea>
              </div>

              <Button type="submit" className="w-full" size="lg">
                {submitError ? 'Try Again' : 'Reserve My Table'}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
