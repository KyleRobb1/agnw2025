"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Sustainability() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-text">
            <span className="text-neon-green">#</span> Sustainability
          </h1>
          <p className="text-xl text-grey-text max-w-2xl mx-auto">
            Our commitment to creating an environmentally responsible festival experience.
          </p>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-text">
                Our <span className="text-neon-green">Vision</span>
              </h2>
              <p className="text-grey-text mb-6">
                AGNW Festival is committed to pushing the boundaries of sustainability in the festival industry. 
                We believe that cutting-edge music and environmental responsibility can go hand in hand.
              </p>
              <p className="text-grey-text">
                Our goal is to create an immersive festival experience that minimizes environmental impact 
                while maximizing positive social influence. We're implementing innovative solutions and 
                technologies to make AGNW one of the most sustainable festivals in Europe.
              </p>
            </div>
            
            <div className="bg-bg-darker p-8 rounded-sm border-l-4 border-neon-green">
              <h3 className="text-2xl font-bold mb-4 text-light-text">2026 Goals</h3>
              <ul className="space-y-4 text-grey-text">
                <li className="flex items-start">
                  <span className="text-neon-green mr-3">01</span>
                  <span>Reduce carbon footprint by 50% compared to industry standard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3">02</span>
                  <span>Zero single-use plastics across the entire festival</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3">03</span>
                  <span>100% renewable energy sources for all power needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-3">04</span>
                  <span>Divert 90% of waste from landfill through recycling and composting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Initiatives Section */}
      <section className="py-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-light-text text-center">
            Key <span className="text-electric-violet">Initiatives</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Initiative 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-neon-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Renewable Energy</h3>
              <p className="text-grey-text">
                Powering the festival with 100% renewable energy through a combination of solar panels, 
                wind turbines, and biodiesel generators. Our main stage is entirely solar-powered.
              </p>
            </motion.div>
            
            {/* Initiative 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-electric-violet mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Zero Waste</h3>
              <p className="text-grey-text">
                Implementing a comprehensive waste management system with clearly marked recycling 
                and composting stations throughout the festival grounds. All vendors use compostable 
                packaging and utensils.
              </p>
            </motion.div>
            
            {/* Initiative 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-glitch-pink mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Digital-Only Tickets</h3>
              <p className="text-grey-text">
                Eliminating paper waste with 100% digital ticketing and event information. 
                Our festival app provides all necessary details, maps, and schedules without 
                the need for printed materials.
              </p>
            </motion.div>
            
            {/* Initiative 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-neon-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Reusable Cup Scheme</h3>
              <p className="text-grey-text">
                Implementing a deposit system for reusable cups across all bars and drink vendors. 
                This eliminates thousands of single-use plastic cups and reduces waste significantly.
              </p>
            </motion.div>
            
            {/* Initiative 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-electric-violet mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Green Transportation</h3>
              <p className="text-grey-text">
                Offering free shuttle services from major transport hubs and discounted tickets 
                for attendees who use public transportation. We also provide secure bike parking 
                and electric vehicle charging stations.
              </p>
            </motion.div>
            
            {/* Initiative 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm"
            >
              <div className="text-glitch-pink mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-light-text">Local Sourcing</h3>
              <p className="text-grey-text">
                Working with local food vendors, suppliers, and businesses to reduce transportation 
                emissions and support the local economy. At least 80% of our food vendors source 
                ingredients from within 50 miles of the festival site.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Carbon Offsetting Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-text">
                Carbon <span className="text-glitch-pink">Offsetting</span>
              </h2>
              <p className="text-grey-text mb-6">
                While we're working hard to minimize our carbon footprint, we recognize that some 
                emissions are unavoidable. That's why we've partnered with verified carbon offset 
                projects to ensure AGNW Festival is carbon neutral.
              </p>
              <p className="text-grey-text mb-6">
                For every ticket sold, we contribute to:
              </p>
              <ul className="space-y-3 text-grey-text mb-8">
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-3">•</span>
                  <span>Reforestation projects in the Scottish Highlands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-3">•</span>
                  <span>Renewable energy development in developing countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-3">•</span>
                  <span>Ocean plastic cleanup initiatives</span>
                </li>
              </ul>
              <Link href="/carbon-report" className="btn-secondary inline-flex items-center">
                <span>View Our Carbon Report</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-bg-darker rounded-sm overflow-hidden">
              {/* This would be a real chart in production */}
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-grey-text">Carbon Offset Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="py-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light-text">
            Get <span className="text-neon-green">Involved</span>
          </h2>
          <p className="text-grey-text mb-12 max-w-3xl mx-auto">
            Sustainability is a collective effort. Here's how you can help make AGNW Festival 
            even more environmentally friendly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-bg-dark border border-grey-text/20 rounded-sm">
              <div className="text-neon-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-text">Carbon Offset Your Travel</h3>
              <p className="text-grey-text">
                Add a carbon offset contribution during ticket purchase to neutralize your 
                travel emissions to and from the festival.
              </p>
            </div>
            
            <div className="p-6 bg-bg-dark border border-grey-text/20 rounded-sm">
              <div className="text-electric-violet mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-text">Volunteer</h3>
              <p className="text-grey-text">
                Join our Green Team volunteers who help manage recycling stations and 
                educate attendees about our sustainability initiatives.
              </p>
            </div>
            
            <div className="p-6 bg-bg-dark border border-grey-text/20 rounded-sm">
              <div className="text-glitch-pink mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-text">Spread The Word</h3>
              <p className="text-grey-text">
                Share our sustainability efforts on social media and encourage others 
                to adopt eco-friendly practices at festivals and beyond.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link href="/contact" className="btn-primary">
              Contact Our Sustainability Team
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
