"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Artist data - in a real app, this would come from a CMS or API
const artists = [
  {
    id: 1,
    name: 'Techno Headliner',
    origin: 'Berlin, DE',
    type: 'headliner',
    day: 'saturday',
    time: '22:00 - 00:00',
    stage: 'Main Stage',
    color: 'neon-green',
  },
  {
    id: 2,
    name: 'Underground Producer',
    origin: 'London, UK',
    type: 'headliner',
    day: 'saturday',
    time: '20:00 - 22:00',
    stage: 'Main Stage',
    color: 'electric-violet',
  },
  {
    id: 3,
    name: 'Techno Collective',
    origin: 'Amsterdam, NL',
    type: 'headliner',
    day: 'saturday',
    time: '18:00 - 20:00',
    stage: 'Main Stage',
    color: 'glitch-pink',
  },
  {
    id: 4,
    name: 'Bass DJ',
    origin: 'Manchester, UK',
    type: 'support',
    day: 'saturday',
    time: '16:00 - 18:00',
    stage: 'Main Stage',
    color: 'neon-green',
  },
  {
    id: 5,
    name: 'Ambient Producer',
    origin: 'Glasgow, UK',
    type: 'support',
    day: 'saturday',
    time: '14:00 - 16:00',
    stage: 'Main Stage',
    color: 'electric-violet',
  },
  {
    id: 6,
    name: 'Local Talent',
    origin: 'Stranraer, UK',
    type: 'support',
    day: 'saturday',
    time: '12:00 - 14:00',
    stage: 'Main Stage',
    color: 'glitch-pink',
  },
  {
    id: 7,
    name: 'Techno Duo',
    origin: 'Paris, FR',
    type: 'support',
    day: 'saturday',
    time: '22:00 - 00:00',
    stage: 'Second Stage',
    color: 'neon-green',
  },
  {
    id: 8,
    name: 'Experimental Artist',
    origin: 'Barcelona, ES',
    type: 'support',
    day: 'saturday',
    time: '20:00 - 22:00',
    stage: 'Second Stage',
    color: 'electric-violet',
  },
  {
    id: 9,
    name: 'Breakbeat Specialist',
    origin: 'Bristol, UK',
    type: 'support',
    day: 'saturday',
    time: '18:00 - 20:00',
    stage: 'Second Stage',
    color: 'glitch-pink',
  },
];

export default function LineUp() {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const filteredArtists = filter === 'all' 
    ? artists 
    : artists.filter(artist => artist.type === filter);

  const openArtistModal = (artist: any) => {
    setSelectedArtist(artist);
  };

  const closeArtistModal = () => {
    setSelectedArtist(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-bg-darker">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-light-text">
            <span className="text-neon-green">#</span> Line-Up
          </h1>
          <p className="text-xl text-grey-text max-w-2xl mx-auto">
            Experience the best in techno, electronic, and underground music at AGNW Festival 2026.
          </p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 px-4 md:px-8 bg-bg-dark border-b border-grey-text/10">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4">
            <button 
              className={`px-6 py-2 rounded-sm font-bold transition-all ${filter === 'all' ? 'bg-neon-green text-dark-text' : 'bg-transparent text-light-text border border-grey-text/30'}`}
              onClick={() => setFilter('all')}
            >
              All Artists
            </button>
            <button 
              className={`px-6 py-2 rounded-sm font-bold transition-all ${filter === 'headliner' ? 'bg-electric-violet text-light-text' : 'bg-transparent text-light-text border border-grey-text/30'}`}
              onClick={() => setFilter('headliner')}
            >
              Headliners
            </button>
            <button 
              className={`px-6 py-2 rounded-sm font-bold transition-all ${filter === 'support' ? 'bg-glitch-pink text-light-text' : 'bg-transparent text-light-text border border-grey-text/30'}`}
              onClick={() => setFilter('support')}
            >
              Support
            </button>
          </div>
        </div>
      </section>
      
      {/* Artists Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <motion.div 
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="artist-card cursor-pointer"
                onClick={() => openArtistModal(artist)}
              >
                <div className="aspect-square bg-bg-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className={`text-2xl font-bold text-${artist.color} mb-1`}>{artist.name}</h3>
                        <p className="text-grey-text">{artist.origin}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-light-text font-bold">{artist.time}</p>
                        <p className="text-xs text-grey-text">{artist.stage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-bg-darker/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-bg-dark border border-grey-text/20 p-6 max-w-2xl w-full rounded-sm relative"
          >
            <button 
              onClick={closeArtistModal}
              className="absolute top-4 right-4 text-grey-text hover:text-light-text"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className={`text-3xl font-bold text-${selectedArtist.color} mb-2`}>{selectedArtist.name}</h2>
            <p className="text-grey-text mb-6">{selectedArtist.origin}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-light-text">Performance Details</h3>
                <p className="text-grey-text mb-1">
                  <span className="text-neon-green">Time:</span> {selectedArtist.time}
                </p>
                <p className="text-grey-text mb-1">
                  <span className="text-neon-green">Stage:</span> {selectedArtist.stage}
                </p>
                <p className="text-grey-text">
                  <span className="text-neon-green">Day:</span> {selectedArtist.day.charAt(0).toUpperCase() + selectedArtist.day.slice(1)}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-light-text">About</h3>
                <p className="text-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button 
                onClick={closeArtistModal}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
