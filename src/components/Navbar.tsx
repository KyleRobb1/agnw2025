// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const authLinks = session ? [
    { href: '/profile', label: 'Profile' },
    { onClick: handleSignOut, label: 'Sign Out' }
  ] : [
    { href: '/auth/signin', label: 'Sign In' },
    { href: '/auth/signup', label: 'Sign Up' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScroll ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-black">
              AGNW 2025
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/lineup" className="text-gray-800 hover:text-gray-600 transition-colors">
                Lineup
              </Link>
              <Link href="/info" className="text-gray-800 hover:text-gray-600 transition-colors">
                Info
              </Link>
              <Link href="/tickets" className="text-gray-800 hover:text-gray-600 transition-colors">
                Tickets
              </Link>
              <Link href="/sustainability" className="text-gray-800 hover:text-gray-600 transition-colors">
                Sustainability
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {authLinks.map((link, index) => (
                link.onClick ? (
                  <button
                    key={index}
                    onClick={link.onClick}
                    className="px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            <button
              className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 w-full bg-white shadow-lg z-40"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/lineup" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Lineup
                </Link>
                <Link href="/info" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Info
                </Link>
                <Link href="/tickets" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Tickets
                </Link>
                <Link href="/sustainability" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Sustainability
                </Link>
                <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                {authLinks.map((link, index) => (
                  link.onClick ? (
                    <button
                      key={index}
                      onClick={() => {
                        link.onClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={index}
                      href={link.href}
                      className="px-4 py-2 text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
