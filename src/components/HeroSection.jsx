"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HeroCard, CTAButton } from './GlassmorphismCard'

export default function HeroSection() {
  const textRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      textRef.current.querySelectorAll('h1, p, div'),
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power3.out" 
      }
    )
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={textRef}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-100">
                Next-Gen <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Solutions</span> for Your Business
              </h1>
              <p className="mb-8 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                Transforming ideas into powerful digital experiences with cutting-edge technologies, AI, and innovative solutions
              </p>
              
              {/* Enhanced Glassy Buttons */}
              <div className="flex flex-wrap gap-6 justify-center">
                <CTAButton variant="primary" className="text-lg px-8 py-4" onClick={() => router.push('/contact')}>
                  Get In Touch
                </CTAButton>
                <CTAButton variant="outline" className="text-lg px-8 py-4" onClick={() => router.push('/services')}>
                  Explore Services
                </CTAButton>
              </div>
            </div>

            {/* Floating Tech Indicators */}
            <motion.div 
              className="flex justify-center items-center gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Cloud-Native</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Scalable</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
