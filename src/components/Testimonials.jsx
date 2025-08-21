"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

// Enhanced testimonials with ratings
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, Acme Corp",
    quote: "TechWave's AI Chatbot Platform slashed our support costs by 60% while boosting CSAT scores over 95%. Truly game-changing!",
    rating: 5,
    initials: "JS",
    accent: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "CTO, FinTech Inc",
    quote: "The NFSTAY tokenization engine opened up new liquidity channels for our real-estate portfolio. Their team is top-notch!",
    rating: 5,
    initials: "ED",
    accent: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Engineering, DeFiCo",
    quote: "Integrating the Crypto Index Pool was seamless—and our users love the transparent reward dashboards. Outstanding work!",
    rating: 5,
    initials: "MC",
    accent: "from-cyan-500 to-blue-500"
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Product Lead, CryptoDeals",
    quote: "Crypto On Discount's front-end is intuitive and lightning-fast. User engagement and referral sign-ups jumped 3× overnight!",
    rating: 5,
    initials: "AP",
    accent: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    name: "David Wilson",
    role: "VP Technology, BlockchainCorp",
    quote: "The smart contract audit services saved us from potential vulnerabilities. Professional, thorough, and reliable.",
    rating: 5,
    initials: "DW",
    accent: "from-orange-500 to-red-500"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Director of Innovation, TechStart",
    quote: "Their AI-powered analytics platform transformed our decision-making process. ROI exceeded expectations by 200%.",
    rating: 5,
    initials: "SJ",
    accent: "from-indigo-500 to-purple-500"
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const marqueeRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // Clone testimonials for seamless infinite loop
    const items = [...marquee.children]
    items.forEach(item => marquee.appendChild(item.cloneNode(true)))

    // Auto-scroll animation
    const scrollAnimation = () => {
      if (!isHovered) {
        marquee.scrollLeft += 1
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0
        }
      }
    }

    const interval = setInterval(scrollAnimation, 30)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real feedback from real users—see why they trust us.
          </p>
        </motion.div>

        {/* Interactive Marquee Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee */}
          <div 
            ref={marqueeRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: isHovered ? 'auto' : 'smooth' }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 ease-out relative overflow-hidden group/card"
              >
                {/* Glowing Border Animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-400/30 group-hover/card:text-blue-400 transition-colors duration-300">
                  <FaQuoteLeft size={20} />
                </div>

                {/* Avatar with Glowing Effect */}
                <div className="flex items-center mb-4">
                  <div className={`relative h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.accent} flex items-center justify-center shadow-lg group-hover/card:shadow-2xl transition-all duration-300`}>
                    <span className="text-white font-bold text-sm">
                      {testimonial.initials}
                    </span>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="ml-4">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-center leading-relaxed mb-4 group-hover/card:text-gray-200 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isHovered ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
            <span className="text-gray-400">
              {isHovered ? 'Paused' : 'Auto-scrolling'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
