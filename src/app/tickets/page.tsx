"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Ticket types - in a real app, this would come from a CMS or API
const ticketTypes = [
  {
    id: 1,
    name: 'Early Bird',
    price: '£59',
    description: 'Limited availability early access tickets.',
    features: [
      'General Admission',
      'Limited Availability',
      'Festival Access: 12pm-12am',
    ],
    color: 'neon-green',
    available: true,
  },
  {
    id: 2,
    name: 'General',
    price: '£79',
    description: 'Standard festival tickets with all basic amenities.',
    features: [
      'General Admission',
      'Festival Access: 12pm-12am',
      'Free Festival Poster',
    ],
    color: 'electric-violet',
    available: true,
  },
  {
    id: 3,
    name: 'VIP',
    price: '£129',
    description: 'Enhanced experience with exclusive access and perks.',
    features: [
      'VIP Area Access',
      'Fast Track Entry',
      'Exclusive Bar Access',
      'Festival Access: 11am-1am',
    ],
    color: 'glitch-pink',
    available: true,
  },
];

// FAQ items
const faqItems = [
  {
    question: 'What is the age restriction?',
    answer: 'AGNW Festival is an 18+ event. Valid ID will be required for entry.',
  },
  {
    question: 'What are the festival hours?',
    answer: 'The festival runs from 12pm to 12am on Saturday, May 30, 2026. VIP ticket holders get extended hours from 11am to 1am.',
  },
  {
    question: 'Is there parking available?',
    answer: 'Limited parking is available near the venue. We strongly encourage using public transportation or our festival shuttle services.',
  },
  {
    question: 'What\'s the refund policy?',
    answer: 'Tickets are non-refundable but can be transferred to another person up to 14 days before the event.',
  },
  {
    question: 'Can I bring my own food and drinks?',
    answer: 'Outside food and drinks are not permitted. There will be a variety of food vendors and bars available throughout the festival grounds.',
  },
  {
    question: 'What items are prohibited?',
    answer: 'Prohibited items include weapons, illegal substances, glass containers, professional cameras/recording equipment, and drones.',
  },
];

export default function Tickets() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-text">
            <span className="text-electric-violet">#</span> Tickets
          </h1>
          <p className="text-xl text-grey-text max-w-2xl mx-auto">
            Secure your spot at the most anticipated underground techno event of 2026.
          </p>
        </div>
      </section>
      
      {/* Tickets Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ticketTypes.map((ticket) => (
              <motion.div 
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: ticket.id * 0.1 }}
                className="ticket-card relative overflow-hidden"
              >
                {ticket.name === 'Early Bird' && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-neon-green text-dark-text text-xs font-bold py-1 px-3 transform rotate-0 origin-top-right">
                      LIMITED
                    </div>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 text-${ticket.color}`}>{ticket.name}</h3>
                <p className="text-4xl font-bold mb-2">{ticket.price}</p>
                <p className="text-grey-text mb-6 text-sm">{ticket.description}</p>
                
                <ul className="text-grey-text mb-8 space-y-2">
                  {ticket.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a 
                    href="#skiddle-widget" 
                    className={`btn-${ticket.name === 'Early Bird' ? 'primary' : 'secondary'} w-full block text-center ${ticket.name === 'VIP' ? 'border-glitch-pink hover:bg-glitch-pink/20' : ''}`}
                  >
                    Buy Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Skiddle Widget */}
          <div id="skiddle-widget" className="mt-16 p-6 bg-bg-darker rounded-sm border border-grey-text/20">
            <h3 className="text-2xl font-bold mb-6 text-light-text text-center">Purchase <span className="text-neon-green">Tickets</span></h3>
            <div className="relative overflow-hidden pb-4 h-[600px]">
              <iframe 
                src="https://www.skiddle.com/e/36815194/" 
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Skiddle Ticket Widget"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="text-grey-text text-sm text-center mt-4">
              Tickets are provided securely through our official partner, Skiddle.
            </p>
          </div>
        </div>
      </section>
      
      {/* Ticket Info Section */}
      <section className="py-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-light-text text-center">
            Important <span className="text-neon-green">Information</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-light-text">Ticket Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-neon-green mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Digital Tickets Only</p>
                    <p className="text-grey-text text-sm">All tickets are delivered electronically to reduce waste.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-neon-green mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Ticket Transfer</p>
                    <p className="text-grey-text text-sm">Tickets can be transferred to another person up to 14 days before the event.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-neon-green mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">ID Required</p>
                    <p className="text-grey-text text-sm">Valid photo ID matching the ticket name is required for entry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-neon-green mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Payment Options</p>
                    <p className="text-grey-text text-sm">We accept all major credit cards and digital payment methods.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-light-text">Group Bookings</h3>
              <p className="text-grey-text mb-6">
                Coming with friends? Groups of 10+ can access special rates and perks.
              </p>
              <div className="bg-bg-dark border border-electric-violet/30 p-6 rounded-sm">
                <h4 className="text-xl font-bold mb-4 text-electric-violet">Group Benefits</h4>
                <ul className="text-grey-text space-y-2 mb-6">
                  <li>• 10% discount on General and VIP tickets</li>
                  <li>• Dedicated group entry lane</li>
                  <li>• Reserved area (VIP groups only)</li>
                  <li>• Group coordinator contact</li>
                </ul>
                <a href="#" className="btn-secondary w-full block text-center">
                  Contact for Group Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-light-text text-center">
            Frequently Asked <span className="text-glitch-pink">Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="mb-4 border-b border-grey-text/10 pb-4"
              >
                <button 
                  className="flex justify-between items-center w-full text-left py-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-xl font-bold text-light-text">{item.question}</span>
                  <span className="text-neon-green">
                    {activeAccordion === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="py-3 text-grey-text"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-grey-text mb-6">
              Still have questions? Contact our support team.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
