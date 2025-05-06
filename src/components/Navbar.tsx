"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-darker/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-light-text">
            <span className="text-neon-green">AGNW</span>
            <span className="text-xs ml-1 text-electric-violet">FESTIVAL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/tickets" className="btn-primary ml-4">
              Buy Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light-text focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 w-full bg-bg-darker/95 backdrop-blur-md z-40 md:hidden"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tickets"
              className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
            </Link>
            <Link 
              href="/info" 
              className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Info
            </Link>
            <Link 
              href="/sustainability" 
              className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link 
              href="/contact" 
              className="text-light-text hover:text-neon-green py-2 border-b border-grey-text/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/tickets" 
              className="btn-primary text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy Tickets
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
