"use client"

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { FaRobot, FaLink, FaCloud, FaMobile } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'AI Solutions',
    icon: <FaRobot size={32} className="text-blue-500" />,
    description: 'Custom AI solutions to automate processes and gain insights from your data.',
    link: '/services/ai',
  },
  {
    id: 2,
    title: 'Blockchain Development',
    icon: <FaLink size={32} className="text-blue-500" />,
    description: 'Secure, transparent blockchain applications for modern business needs.',
    link: '/services/blockchain',
  },
  {
    id: 3,
    title: 'Cloud Architecture',
    icon: <FaCloud size={32} className="text-blue-500" />,
    description: 'Scalable cloud solutions that grow with your business needs.',
    link: '/services/cloud',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    icon: <FaMobile size={32} className="text-blue-500" />,
    description: 'Cross-platform mobile applications with seamless user experiences.',
    link: '/services/software',
  },
]

export default function FeaturedServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Featured Services</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our specialized tech services designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
              className=" backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 ease-in-out"
            >
              <div className="p-8">
                <div className="text-4xl mb-4 bg-blue-500/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
                >
                  Learn more
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
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-xl font-medium text-white 
                        backdrop-blur-md border border-white/20 
                       shadow-lg shadow-blue-500/20 
                       transition-all duration-300 ease-in-out hover:w-1/5 hover:h-15 hover:border-white/30 
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            View All Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 