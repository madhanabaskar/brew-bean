import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSubmitError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setTimeout(() => {
      if (Math.random() < 0.1) {
        setSubmitError(true);
      } else {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
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
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeading title="Get in Touch" subtitle="We'd love to hear from you" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Contact Info */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 md:mb-12">
              <div className="flex flex-col items-start p-6 bg-white border border-espresso/5">
                <MapPin className="text-coffee mb-4" size={28} />
                <h4 className="font-serif text-lg mb-2">Location</h4>
                <p className="text-espresso/70 text-sm leading-relaxed">
                  123 Brew Avenue,<br />
                  Coffee District, CD 45678
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white border border-espresso/5">
                <Clock className="text-coffee mb-4" size={28} />
                <h4 className="font-serif text-lg mb-2">Hours</h4>
                <p className="text-espresso/70 text-sm leading-relaxed">
                  Mon – Fri: 8:00 AM – 9:00 PM<br />
                  Sat – Sun: 9:00 AM – 10:00 PM
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white border border-espresso/5">
                <Phone className="text-coffee mb-4" size={28} />
                <h4 className="font-serif text-lg mb-2">Phone</h4>
                <p className="text-espresso/70 text-sm leading-relaxed">
                  +91 98765 43210<br />
                  +91 98765 43211
                </p>
              </div>
              <div className="flex flex-col items-start p-6 bg-white border border-espresso/5">
                <Mail className="text-coffee mb-4" size={28} />
                <h4 className="font-serif text-lg mb-2">Email</h4>
                <p className="text-espresso/70 text-sm leading-relaxed">
                  hello@brewandbean.com<br />
                  events@brewandbean.com
                </p>
              </div>
            </div>

            {/* Fake Map visual */}
            <div className="w-full h-64 bg-sand/50 relative overflow-hidden flex items-center justify-center group cursor-pointer border border-espresso/10">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <MapPin size={40} className="text-espresso mb-2 group-hover:-translate-y-2 transition-transform duration-300" />
                <span className="font-serif text-lg">View on Map</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-12 shadow-sm border border-espresso/5 h-fit">
            <h3 className="text-2xl font-serif mb-6 md:mb-8 text-espresso">Send a Message</h3>
            
            {submitError && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-3">
                <AlertCircle size={20} />
                <span>We couldn't complete your request. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8" noValidate>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="Your name" />
                {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.name}</span>}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="Your email" />
                {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.email}</span>}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors ${errors.subject ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="How can we help?" />
                {errors.subject && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.subject}</span>}
              </div>
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-espresso/80 uppercase tracking-wide">Message</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-espresso/20 focus:border-coffee'}`} placeholder="Your message here..."></textarea>
                {errors.message && <span className="absolute -bottom-5 left-0 text-xs text-red-500">{errors.message}</span>}
              </div>
              <Button type="submit" className="w-full">
                {isSent ? 'Message Sent!' : (submitError ? 'Try Again' : 'Send Message')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
