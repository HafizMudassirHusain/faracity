"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ServiceCard } from './GlassmorphismCard'
// Import specific icons from react-icons
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiMongodb, SiGraphql, SiNextdotjs, SiPostgresql, SiTypescript, SiDjango, SiKubernetes, SiRedis, SiElasticsearch } from 'react-icons/si'

const techStack = [
  { name: 'React', icon: <FaReact size={48} className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs size={48} className="text-blue-500" /> },
  { name: 'Python', icon: <FaPython size={48} className="text-blue-500" /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={48} className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb size={48} className="text-blue-500" /> },
  { name: 'AWS', icon: <FaAws size={48} className="text-blue-500" /> },
  { name: 'Docker', icon: <FaDocker size={48} className="text-blue-500" /> },
  { name: 'GraphQL', icon: <SiGraphql size={48} className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={48} className="text-blue-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={48} className="text-blue-500" /> },
  { name: 'TypeScript', icon: <SiTypescript size={48} className="text-blue-500" /> },
  { name: 'Django', icon: <SiDjango size={48} className="text-blue-500" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={48} className="text-blue-500" /> },
  { name: 'Redis', icon: <SiRedis size={48} className="text-blue-500" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch size={48} className="text-blue-500" /> },
]

export default function TechStack() {
  const marqueeRef1 = useRef(null)
  const marqueeRef2 = useRef(null)
  
  useEffect(() => {
    const marquee1 = marqueeRef1.current
    const marquee2 = marqueeRef2.current
    
    // Clone items for seamless infinite loop
    const items1 = [...marquee1.children]
    const items2 = [...marquee2.children]
    
    items1.forEach(item => marquee1.appendChild(item.cloneNode(true)))
    items2.forEach(item => marquee2.appendChild(item.cloneNode(true)))
    
    // Animate first row left-to-right (faster)
    gsap.to(marquee1.children, {
      x: "-50%",
      duration: 25,
      ease: "linear",
      repeat: -1,
    })
    
    // Animate second row right-to-left (faster)
    gsap.fromTo(
      marquee2.children,
      { x: "-50%" },
      { x: "0%", duration: 25, ease: "linear", repeat: -1 }
    )
    
    return () => {
      gsap.killTweensOf(marquee1.children)
      gsap.killTweensOf(marquee2.children)
    }
  }, [])
  
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Tech Stack</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver powerful solutions
          </p>
        </motion.div>
      </div>
      
      <div className="relative w-full">
        {/* First row marquee */}
        <div className="py-8">
          <div className="flex whitespace-nowrap" ref={marqueeRef1}>
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex items-center justify-center mx-8 min-w-[180px]">
                <ServiceCard className="w-full text-center">
                  <div className="mb-2 mx-auto flex justify-center bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-sm rounded-full w-16 h-16 items-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {tech.icon}
                  </div>
                  <div className="font-medium text-gray-300">{tech.name}</div>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row marquee (opposite direction) */}
        <div className="py-8">
          <div className="flex whitespace-nowrap" ref={marqueeRef2}>
            {techStack.slice().reverse().map((tech, idx) => (
              <div key={idx} className="flex items-center justify-center mx-8 min-w-[180px]">
                <ServiceCard className="w-full text-center">
                  <div className="mb-2 mx-auto flex justify-center bg-gradient-to-br from-cyan-500/15 to-blue-500/15 backdrop-blur-sm rounded-full w-16 h-16 items-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {tech.icon}
                  </div>
                  <div className="font-medium text-gray-300">{tech.name}</div>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
