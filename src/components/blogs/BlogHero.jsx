"use client"

import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="bg-[#121212] pt-16 md:pt-20 pb-16 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 pt-10 md:pt-12"
          >
            TechWave <span className="text-blue-400">Blog</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-1 w-24 bg-blue-500 mx-auto mb-8"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Insights, trends, and expert opinions on the latest in technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {['AI', 'Blockchain', 'Cloud', 'DevOps', 'Web3', 'Cybersecurity'].map((tag) => (
              <span 
                key={tag} 
                className="inline-block bg-[#1a1a1a] border border-[#2a2a2a] text-gray-300 px-4 py-1 rounded-full text-sm font-medium hover:bg-[#252525] cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
    </section>
  );
} 