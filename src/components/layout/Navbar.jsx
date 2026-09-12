import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navClass = cn(
    "fixed top-0 w-full z-50 transition-all duration-300",
    isScrolled 
      ? "bg-background/90 backdrop-blur-md py-4" 
      : cn("py-6", isHome ? "bg-transparent text-white" : "bg-background text-espresso")
  );

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          Brew & Bean
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <ul className="flex space-x-6 lg:space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                  <Link 
                  to={link.path} 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-coffee outline-none border-none",
                    (isScrolled || !isHome) ? "text-espresso/80" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button to="/reservation" variant={(!isScrolled && isHome) ? 'outline' : 'primary'} className={(!isScrolled && isHome) ? 'border-white text-white hover:bg-white hover:text-espresso' : ''}>
            Reserve a Table
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-espresso/10 p-4 shadow-lg md:hidden flex flex-col space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            {links.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-lg font-medium text-espresso py-2 border-b border-espresso/5"
              >
                {link.name}
              </Link>
            ))}
            <Button to="/reservation" className="w-full mt-4">
              Reserve a Table
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
