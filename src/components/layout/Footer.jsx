import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-espresso text-background pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold mb-4 inline-block text-coffee">
              Brew & Bean
            </Link>
            <p className="text-background/70 font-serif italic text-lg mb-6">
              "Good Coffee. Good Moments."
            </p>
            <div className="flex space-x-4 text-sm font-medium">
              <a href="#" className="text-background/70 hover:text-coffee transition-colors">Instagram</a>
              <a href="#" className="text-background/70 hover:text-coffee transition-colors">Facebook</a>
              <a href="#" className="text-background/70 hover:text-coffee transition-colors">X</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-background/90">Quick Links</h4>
            <ul className="space-y-4 text-background/70">
              <li><Link to="/menu" className="hover:text-coffee transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-coffee transition-colors">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-coffee transition-colors">Gallery</Link></li>
              <li><Link to="/reservation" className="hover:text-coffee transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-background/90">Opening Hours</h4>
            <ul className="space-y-4 text-background/70">
              <li>Mon – Fri: <br />8:00 AM – 9:00 PM</li>
              <li>Sat – Sun: <br />9:00 AM – 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-background/90">Contact</h4>
            <ul className="space-y-4 text-background/70">
              <li><a href="mailto:hello@brewandbean.com" className="hover:text-coffee transition-colors">hello@brewandbean.com</a></li>
              <li><a href="tel:+919876543210" className="hover:text-coffee transition-colors">+91 98765 43210</a></li>
              <li className="mt-4">
                123 Brew Avenue,<br />
                Coffee District, CD 45678
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Brew & Bean. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Concept Project</p>
        </div>
      </div>
    </footer>
  );
}
