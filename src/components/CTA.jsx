"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HeroCard, CTAButton } from './GlassmorphismCard'

export default function CTA() {
  const router = useRouter()
  return (
    <section className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-10 text-gray-300">
                Let's discuss how our technology solutions can help you reach your goals.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <CTAButton variant="primary" className="text-lg px-8 py-4" onClick={() => router.push('/contact')}>
                  Get In Touch
                </CTAButton>
                
                <CTAButton variant="outline" className="text-lg px-8 py-4" onClick={() => router.push('/services')}>
                  Explore Services
                </CTAButton>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/8 to-purple-500/8 backdrop-blur-sm border border-blue-500/20 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-4xl font-bold text-blue-400">250+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/8 to-blue-500/8 backdrop-blur-sm border border-cyan-500/20 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-4xl font-bold text-cyan-400">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/8 to-pink-500/8 backdrop-blur-sm border border-purple-500/20 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-4xl font-bold text-purple-400">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 