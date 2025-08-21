"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ServiceCTA() {
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for the decorative elements
      gsap.to('.blob-1', {
        y: -20,
        x: 15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      
      gsap.to('.blob-2', {
        y: 20,
        x: -10,
        rotation: -3,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3
      });
      
      gsap.to('.blob-3', {
        y: -15,
        x: -15,
        rotation: 7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    }, ctaRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#121212] to-[#0a0a0a] overflow-hidden relative" ref={ctaRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute blob-1 top-0 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute blob-2 bottom-0 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute blob-3 top-1/2 left-1/3 w-36 h-36 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="bg-[#1a1a1a]/70 backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-2xl border border-blue-900/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
              <div className="md:w-3/5">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                >
                  Ready to Transform Your <span className="text-blue-400">Digital Presence</span>?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-300 mb-8"
                >
                  Our team of experts is ready to help you harness the power of technology to achieve your business goals. Let's start a conversation about how we can help you succeed.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/services#consultation" className="inline-flex items-center justify-center px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-900/20 font-semibold rounded-md transition-colors duration-300">
                      Free Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-2/5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-lg p-6 bg-[#151515] border border-[#2a2a2a]"
                >
                  <h3 className="text-xl font-semibold mb-5 text-white">Fast Response</h3>
                  <div className="mb-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 8 4 4 4-4"></path>
                          <path d="M7 6v6"></path>
                          <path d="M17 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"></path>
                          <path d="M21 10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email Us</p>
                        <p className="text-gray-200">info@techwave.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Call Us</p>
                        <p className="text-gray-200">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-[#2a2a2a]">
                    <p className="text-blue-400 font-medium">Response within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 