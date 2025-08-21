"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Projects data
const projects = [
  {
    id: 1,
    title: 'AI Chatbot Platform',
    categories: ['AI', 'Chatbot', 'Crypto'],
    description:
      'Decentralized autonomous organization (DAO) & digital wallet for token purchases, lending, staking, cross-border payments and efficient fiat↔crypto conversions.',
    images: ['/assets/aichatbot.png', '/assets/aichatbot2.png'],
    link: 'https://degenforest.com/',
  },
  {
    id: 2,
    title: 'NFSTAY',
    categories: ['NFT', 'DeFi', 'Staking'],
    description:
      'Real-world asset (RWA) tokenization for real estate, enabling fractional ownership and seamless rental-yield distribution.',
    images: ['/assets/nfstay1.png', '/assets/nfstay2.png'],
    link: 'https://nfstay.com',
  },
  {
    id: 3,
    title: 'Crypto Index Pool',
    categories: ['DeFi', 'Staking'],
    description:
      'Staking dashboard for CIP tokens, with real-time reward tracking, portfolio management and performance analytics.',
    images: ['/assets/crypto.png', '/assets/crypto2.png'],
    link: 'https://cip-staking-new.vercel.app/',
  },
  {
    id: 4,
    title: 'Crypto On Discount',
    categories: ['Crypto', 'Deals'],
    description:
      'Discounted crypto purchases platform with investment tracking, referral rewards, ROI monitoring and bonus incentives.',
    images: ['/assets/cryptoon.png', '/assets/cryptoon.png'],
    link: 'https://cryptoondiscount.com',
  },
  {
    id: 5,
    title: 'Smashnft',
    categories: ['NFT', 'Marketplace'],
    description:
      'Ethereum-based NFT marketplace for exploring, buying, selling and managing digital collectibles, with full metadata & provenance.',
    images: ['/assets/smashnft.png', '/assets/smashnft.png'],
    link: 'https://nft.smashpay.io/ethereum',
  },
]

// Enhanced category colors with glowing effects
const categoryColors = {
  AI: 'border border-blue-500 text-blue-400 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.3)]',
  Chatbot: 'border border-indigo-500 text-indigo-400 bg-indigo-500/10 shadow-[0_0_10px_rgba(99,102,241,0.3)]',
  NFT: 'border border-pink-500 text-pink-400 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.3)]',
  DeFi: 'border border-green-500 text-green-400 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.3)]',
  Staking: 'border border-yellow-500 text-yellow-400 bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.3)]',
  Crypto: 'border border-purple-500 text-purple-400 bg-purple-500/10 shadow-[0_0_10px_rgba(147,51,234,0.3)]',
  Deals: 'border border-red-500 text-red-400 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.3)]',
  Marketplace: 'border border-teal-500 text-teal-400 bg-teal-500/10 shadow-[0_0_10px_rgba(20,184,166,0.3)]',
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Projects</h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-blue-500"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our featured case studies presented in a clean, focused layout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl border border-gray-700/40 shadow-2xl transition-all duration-300 ease-in-out hover:border-gray-600/60"
            >
              {/* external link button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </Link>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Colorful Glowing Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[category]} transition-all duration-300 hover:scale-105`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
