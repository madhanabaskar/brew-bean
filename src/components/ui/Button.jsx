import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  asChild = false, 
  to,
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso disabled:opacity-50 disabled:pointer-events-none rounded-none";
  
  const variants = {
    primary: "bg-espresso text-background hover:bg-espresso/90",
    secondary: "bg-coffee text-espresso hover:bg-coffee/90",
    outline: "border-2 border-espresso text-espresso hover:bg-espresso hover:text-background",
    ghost: "hover:bg-black/5 text-espresso",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-14 px-10 text-lg",
    icon: "h-10 w-10",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
