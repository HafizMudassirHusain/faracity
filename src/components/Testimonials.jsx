"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

// Enhanced testimonials
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO, Acme Corp",
    quote: "TechWave's AI Chatbot Platform slashed our support costs by 60% while boosting CSAT scores over 95%. Truly game-changing!",
    rating: 5,
    company: "Acme Corp"
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "CTO, FinTech Inc",
    quote: "The NFSTAY tokenization engine opened up new liquidity channels for our real-estate portfolio. Their team is top-notch!",
    rating: 5,
    company: "FinTech Inc"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Engineering, DeFiCo",
    quote: "Integrating the Crypto Index Pool was seamless—and our users love the transparent reward dashboards. Outstanding work!",
    rating: 5,
    company: "DeFiCo"
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Product Lead, CryptoDeals",
    quote: "Crypto On Discount's front-end is intuitive and lightning-fast. User engagement and referral sign-ups jumped 3× overnight!",
    rating: 5,
    company: "CryptoDeals"
  },
  {
    id: 5,
    name: "David Wilson",
    role: "VP Technology, BlockchainCorp",
    quote: "The smart contract audit services saved us from potential vulnerabilities. Professional, thorough, and reliable.",
    rating: 5,
    company: "BlockchainCorp"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    role: "Director of Innovation, TechStart",
    quote: "Their AI-powered analytics platform transformed our decision-making process. ROI exceeded expectations by 200%.",
    rating: 5,
    company: "TechStart"
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const scrollContainerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Fixed auto-scroll functionality - works on all devices
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current
    let scrollPosition = 0
    const scrollSpeed = isMobile ? 0.8 : 1.2 // Slower on mobile for better UX

    const autoScroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(autoScroll, 20) // 50fps for smoother movement
    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-visible">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Client Success</span>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            What Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Real feedback from real users see why they trust us to deliver exceptional results
          </p>
        </motion.div>

        {/* Auto-scrolling container - Responsive */}
        <div className="relative">
          {/* Enhanced gradient fade edges - Responsive */}
          {!isMobile && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
            </>
          )}
          
          {/* Scrollable testimonials with duplicated content for seamless loop */}
          <div 
            ref={scrollContainerRef}
            className={`flex gap-4 sm:gap-6 lg:gap-8 overflow-x-hidden scrollbar-hide py-4`}
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none' /* Internet Explorer 10+ */
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((t, idx) => (
              <motion.div
                key={`first-${t.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] p-2`}
              >
                {/* Beautiful Testimonial Card - Responsive */}
                <div className="relative group">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-700/20 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-600/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote Icon - Responsive */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300">
                      <FaQuoteLeft size={isMobile ? 20 : 24} className="sm:text-xl lg:text-2xl" />
                    </div>

                    {/* Company Badge - Responsive */}
                    <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
                      {t.company}
                    </div>

                    {/* Quote Text - Responsive */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6 lg:mb-8 italic font-light">"{t.quote}"</p>

                    {/* Rating - Responsive */}
                    <div className="flex items-center gap-1 mb-4 sm:mb-6 lg:mb-8">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 fill-current" size={isMobile ? 14 : 16} />
                      ))}
                      <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-3 font-medium">({t.rating}.0)</span>
                    </div>

                    {/* Author Info - Responsive */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                      {/* Enhanced Avatar - Responsive */}
                      <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 p-1">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                            <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                              {t.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base sm:text-lg lg:text-xl mb-0.5 sm:mb-1">{t.name}</h4>
                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements - Responsive */}
                  <div className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 lg:-top-3 lg:-right-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5 lg:-bottom-3 lg:-left-3 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              </motion.div>
            ))}

            {/* Duplicated testimonials for seamless loop */}
            {testimonials.map((t, idx) => (
              <motion.div
                key={`second-${t.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (idx + testimonials.length) * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] p-2`}
              >
                {/* Beautiful Testimonial Card - Responsive */}
                <div className="relative group">
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-700/20 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-slate-600/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Quote Icon - Responsive */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300">
                      <FaQuoteLeft size={isMobile ? 20 : 24} className="sm:text-xl lg:text-2xl" />
                    </div>

                    {/* Company Badge - Responsive */}
                    <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
                      {t.company}
                    </div>

                    {/* Quote Text - Responsive */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6 lg:mb-8 italic font-light">"{t.quote}"</p>

                    {/* Rating - Responsive */}
                    <div className="flex items-center gap-1 mb-4 sm:mb-6 lg:mb-8">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 fill-current" size={isMobile ? 14 : 16} />
                      ))}
                      <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-3 font-medium">({t.rating}.0)</span>
                    </div>

                    {/* Author Info - Responsive */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                      {/* Enhanced Avatar - Responsive */}
                      <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 p-1">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                            <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                              {t.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base sm:text-lg lg:text-xl mb-0.5 sm:mb-1">{t.name}</h4>
                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements - Responsive */}
                  <div className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 lg:-top-3 lg:-right-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5 lg:-bottom-3 lg:-left-3 w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beautiful scroll indicator - Responsive */}
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 sm:mt-14 lg:mt-16"
          >
            <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">Auto-scrolling testimonials</span>
              <div className="w-16 sm:w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
