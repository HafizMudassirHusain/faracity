"use client"

import { motion } from 'framer-motion'

export default function GlassmorphismCard({ 
  children, 
  className = "", 
  hover = true, 
  padding = "p-6",
  background = "bg-white/5",
  border = "border-white/10",
  shadow = "shadow-lg",
  backdrop = "backdrop-blur-sm"
}) {
  return (
    <motion.div
      className={`
        ${background} 
        ${border} 
        ${shadow} 
        ${backdrop} 
        ${padding} 
        rounded-xl 
        transition-all 
        duration-300 
        ease-out
        ${hover ? 'hover:scale-[1.01] hover:bg-white/8 hover:border-white/15 hover:shadow-xl' : ''}
        ${className}
      `}
      whileHover={hover ? { 
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Specialized glassmorphism components for different use cases
export function HeroCard({ children, className = "" }) {
  return (
    <GlassmorphismCard
      className={`${className} border-white/15`}
      padding="p-8 md:p-12"
      shadow="shadow-xl"
      // backdrop="backdrop-blur-sm"
    >
      {children}
    </GlassmorphismCard>
  )
}

export function ServiceCard({ children, className = "" }) {
  return (
    <GlassmorphismCard
      className={`${className} bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/15`}
      padding="p-6"
      shadow="shadow-lg"
      backdrop="backdrop-blur-sm"
    >
      {children}
    </GlassmorphismCard>
  )
}

export function TestimonialCard({ children, className = "" }) {
  return (
    <GlassmorphismCard
      className={`${className} bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/15`}
      padding="p-6"
      shadow="shadow-lg"
      backdrop="backdrop-blur-sm"
    >
      {children}
    </GlassmorphismCard>
  )
}

export function CTAButton({ children, onClick, className = "", variant = "primary" }) {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-blue-600/30",
    secondary: "bg-white/8 hover:bg-white/12 text-white border-white/20",
    outline: "bg-transparent hover:bg-white/5 text-white border-white/30 hover:border-white/40"
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${className}
        px-8 
        py-3 
        rounded-lg 
        border 
        font-semibold 
        transition-all 
        duration-300 
        ease-out
        backdrop-blur-sm
        shadow-lg
        hover:shadow-xl
        hover:scale-105
        active:scale-95
      `}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
