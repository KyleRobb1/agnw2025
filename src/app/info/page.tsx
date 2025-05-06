"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-text">
            <span className="text-glitch-pink">#</span> Festival Info
          </h1>
          <p className="text-xl text-grey-text max-w-2xl mx-auto">
            Everything you need to know about AGNW Festival 2026.
          </p>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text">
            <span className="text-neon-green">#</span> Location
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-video bg-bg-darker relative rounded-sm overflow-hidden">
                {/* This would be replaced with an actual map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-grey-text">Interactive Map of Agnew Park</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light-text">Agnew Park</h3>
              <p className="text-grey-text mb-6">
                Stranraer, Scotland, DG9 7JZ
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-neon-green">By Car</h4>
                  <p className="text-grey-text">
                    Approximately 2 hours from Glasgow. Follow the A77 south to Stranraer. 
                    Parking is available at designated festival car parks (pre-booking recommended).
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2 text-electric-violet">By Train</h4>
                  <p className="text-grey-text">
                    Direct services to Stranraer Station from Glasgow. The festival site is a 15-minute 
                    walk or a short taxi ride from the station.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2 text-glitch-pink">By Bus</h4>
                  <p className="text-grey-text">
                    National Express and Scottish Citylink services to Stranraer. 
                    Festival shuttle buses will operate from the main bus station.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opening Hours Section */}
      <section className="py-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text">
            <span className="text-electric-violet">#</span> Opening Hours
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-neon-green">General Admission</h3>
              <p className="text-4xl font-bold mb-2">12:00 - 00:00</p>
              <p className="text-grey-text">Saturday, 30 May 2026</p>
            </div>
            
            <div className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-electric-violet">VIP Access</h3>
              <p className="text-4xl font-bold mb-2">11:00 - 01:00</p>
              <p className="text-grey-text">Saturday, 30 May 2026</p>
            </div>
            
            <div className="bg-bg-dark p-6 border border-grey-text/20 rounded-sm">
              <h3 className="text-2xl font-bold mb-4 text-glitch-pink">Box Office</h3>
              <p className="text-4xl font-bold mb-2">10:00 - 22:00</p>
              <p className="text-grey-text">Saturday, 30 May 2026</p>
            </div>
          </div>
          
          <div className="mt-8 text-grey-text">
            <p>
              <span className="text-neon-green font-bold">Note:</span> Last entry is at 21:00 for all ticket types. 
              Re-entry is permitted until 20:00 with a valid wristband.
            </p>
          </div>
        </div>
      </section>
      
      {/* Site Rules Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text">
            <span className="text-glitch-pink">#</span> Site Rules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light-text">Allowed Items</h3>
              <ul className="space-y-3 text-grey-text">
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Valid ID (mandatory for entry)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Empty reusable water bottles (no glass)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Small bags (max 20cm x 25cm x 10cm)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Sunscreen (non-aerosol)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Prescription medication (with prescription or doctor's note)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Mobile phones and small cameras (non-professional)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-green mr-2">✓</span>
                  <span>Rain ponchos</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light-text">Prohibited Items</h3>
              <ul className="space-y-3 text-grey-text">
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Weapons or items that could be used as weapons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Illegal substances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Glass containers of any kind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Outside food and beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Professional cameras, video equipment, or drones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Laser pointers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Flammable items or fireworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glitch-pink mr-2">✗</span>
                  <span>Pets (except service animals)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-bg-darker border-l-4 border-neon-green">
            <h3 className="text-xl font-bold mb-2 text-light-text">Safety First</h3>
            <p className="text-grey-text">
              AGNW Festival is committed to creating a safe environment for all attendees. 
              Our security team will conduct bag checks and ID verification at all entrances. 
              Anyone found with prohibited items or engaging in disruptive behavior may be 
              removed from the festival without refund.
            </p>
          </div>
        </div>
      </section>
      
      {/* Accessibility Section */}
      <section className="py-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-text">
            <span className="text-neon-green">#</span> Accessibility
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light-text">Our Commitment</h3>
              <p className="text-grey-text mb-6">
                AGNW Festival is committed to making our event accessible to all. 
                We've implemented various measures to ensure everyone can enjoy the festival experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-electric-violet mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Accessible Viewing Areas</p>
                    <p className="text-grey-text text-sm">Dedicated platforms with clear sightlines to all stages.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-electric-violet mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Accessible Toilets</p>
                    <p className="text-grey-text text-sm">Located throughout the festival grounds.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-electric-violet mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Accessible Parking</p>
                    <p className="text-grey-text text-sm">Reserved spaces close to the main entrance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-electric-violet mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-light-text font-bold">Assistance Dogs</p>
                    <p className="text-grey-text text-sm">Welcome throughout the festival site.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light-text">Access Requirements</h3>
              <p className="text-grey-text mb-6">
                If you have specific access requirements, please contact our accessibility team 
                in advance so we can ensure your needs are met.
              </p>
              
              <div className="bg-bg-dark p-6 border border-electric-violet/30 rounded-sm">
                <h4 className="text-xl font-bold mb-4 text-electric-violet">Contact Our Access Team</h4>
                <p className="text-grey-text mb-6">
                  Email: access@agnwfestival.com<br />
                  Phone: +44 (0)123 456 7890<br />
                  (Available Mon-Fri, 9am-5pm)
                </p>
                <p className="text-grey-text text-sm">
                  Please contact us at least 2 weeks before the event to ensure we can accommodate your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
