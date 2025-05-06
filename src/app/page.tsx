"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [flickerText, setFlickerText] = useState(false);

  // Simulate flickering text effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlickerText(prev => !prev);
    }, 2000);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-bg-darker opacity-80">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder for video - would be replaced with actual video */}
            <div className="w-full h-full bg-bg-darker">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-2 w-full h-full opacity-20">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`bg-neon-green animate-pulse-slow`}
                      style={{ animationDelay: `${i * 0.02}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-light-text tracking-tighter mb-2">
              <span className="glitch-effect" data-text="AGNW">AGNW</span>
            </h1>
            <p className="text-xl md:text-2xl text-electric-violet font-bold uppercase tracking-widest">
              <span className={flickerText ? "opacity-50" : "opacity-100"}>Shift the Frequency</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <div className="text-3xl md:text-5xl font-bold text-light-text mb-1 tracking-tight">
              <span className="text-neon-green">30</span>
              <span className="text-grey-text mx-1">.</span>
              <span className="text-neon-green">05</span>
              <span className="text-grey-text mx-1">.</span>
              <span className="text-neon-green">26</span>
            </div>
            <p className="text-grey-text text-lg">Agnew Park, Stranraer, Scotland</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/tickets" className="btn-primary">
              Buy Tickets
            </Link>
            <Link href="/lineup" className="btn-secondary">
              See Line-Up
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-light-text"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-light-text">
            <span className="text-neon-green">#</span> Featured Artists
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Artist Card 1 */}
            <div className="artist-card group">
              <div className="aspect-square bg-bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-2xl font-bold text-neon-green mb-1">Techno Artist 1</h3>
                  <p className="text-grey-text">Berlin, DE</p>
                </div>
              </div>
            </div>
            
            {/* Artist Card 2 */}
            <div className="artist-card group">
              <div className="aspect-square bg-bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-2xl font-bold text-electric-violet mb-1">Techno Artist 2</h3>
                  <p className="text-grey-text">London, UK</p>
                </div>
              </div>
            </div>
            
            {/* Artist Card 3 */}
            <div className="artist-card group">
              <div className="aspect-square bg-bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-2xl font-bold text-glitch-pink mb-1">Techno Artist 3</h3>
                  <p className="text-grey-text">Amsterdam, NL</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/lineup" className="btn-secondary">
              View Full Line-Up
            </Link>
          </div>
        </div>
      </section>

      {/* Ticket Info Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-light-text">
            <span className="text-electric-violet">#</span> Tickets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Early Bird */}
            <div className="ticket-card">
              <h3 className="text-2xl font-bold mb-2 text-neon-green">Early Bird</h3>
              <p className="text-4xl font-bold mb-4">£59</p>
              <ul className="text-grey-text mb-6 space-y-2">
                <li>• General Admission</li>
                <li>• Limited Availability</li>
                <li>• Festival Access: 12pm-12am</li>
              </ul>
              <Link href="/tickets" className="btn-primary w-full block text-center">
                Buy Now
              </Link>
            </div>
            
            {/* General */}
            <div className="ticket-card">
              <h3 className="text-2xl font-bold mb-2 text-electric-violet">General</h3>
              <p className="text-4xl font-bold mb-4">£79</p>
              <ul className="text-grey-text mb-6 space-y-2">
                <li>• General Admission</li>
                <li>• Festival Access: 12pm-12am</li>
                <li>• Free Festival Poster</li>
              </ul>
              <Link href="/tickets" className="btn-secondary w-full block text-center">
                Buy Now
              </Link>
            </div>
            
            {/* VIP */}
            <div className="ticket-card">
              <h3 className="text-2xl font-bold mb-2 text-glitch-pink">VIP</h3>
              <p className="text-4xl font-bold mb-4">£129</p>
              <ul className="text-grey-text mb-6 space-y-2">
                <li>• VIP Area Access</li>
                <li>• Fast Track Entry</li>
                <li>• Exclusive Bar Access</li>
                <li>• Festival Access: 11am-1am</li>
              </ul>
              <Link href="/tickets" className="btn-secondary w-full block text-center border-glitch-pink hover:bg-glitch-pink/20">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-light-text">
            <span className="text-glitch-pink">#</span> Location
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="aspect-video bg-bg-dark relative">
                {/* This would be replaced with an actual map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-grey-text">Map of Agnew Park, Stranraer</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-light-text">Agnew Park</h3>
              <p className="text-grey-text mb-6">Stranraer, Scotland, DG9 7JZ</p>
              
              <h4 className="text-xl font-bold mb-2 text-neon-green">Getting Here</h4>
              <ul className="text-grey-text mb-6 space-y-2">
                <li>• By Car: 2 hours from Glasgow</li>
                <li>• By Train: Direct to Stranraer Station</li>
                <li>• By Bus: National services to Stranraer</li>
              </ul>
              
              <Link href="/info" className="btn-secondary inline-block">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
