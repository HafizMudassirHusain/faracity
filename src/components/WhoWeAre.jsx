"use client"

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { FaLightbulb, FaStar, FaHandshake, FaShieldAlt } from 'react-icons/fa'

export default function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Who We Are
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-blue-500 mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-gray-300">
            We are a team of passionate technologists committed to delivering innovative solutions 
            that drive business growth. With expertise across various tech domains, we transform 
            challenges into opportunities.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-[#2a2a2a] flex justify-center items-center p-8"
          >
            <div className="relative h-56 w-56 md:h-64 md:w-64">
              <Image 
                src="/globe.svg" 
                alt="Tech Team Working" 
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl border border-[#2a2a2a] shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              To provide cutting-edge technology solutions that empower businesses to reach their full potential 
              in the digital landscape. We combine technical expertise with strategic thinking to deliver results 
              that matter.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className=" backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <FaLightbulb className="text-blue-500 text-lg" />
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Constantly pushing boundaries with new ideas and approaches</p>
              </div>
              <div className=" backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <FaStar className="text-blue-500 text-lg" />
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Excellence</h4>
                <p className="text-gray-400 text-sm">Committed to delivering the highest quality in everything we do</p>
              </div>
              <div className=" backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <FaHandshake className="text-blue-500 text-lg" />
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">Working together to achieve remarkable outcomes</p>
              </div>
              <div className=" backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <FaShieldAlt className="text-blue-500 text-lg" />
                </div>
                <h4 className="font-bold text-gray-200 mb-2">Integrity</h4>
                <p className="text-gray-400 text-sm">Honest, transparent relationships with our clients and partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 