"use client"

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

// Particle class for cursor effects
class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.vx = (Math.random() - 0.5) * 2
    this.vy = (Math.random() - 0.5) * 2
    this.life = 1
    this.decay = 0.02
    this.color = color
    this.size = Math.random() * 3 + 1
    this.originalSize = this.size
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life -= this.decay
    this.size = Math.max(0, this.originalSize * this.life) // Ensure size is never negative
    this.vx *= 0.98
    this.vy *= 0.98
  }

  draw(ctx) {
    // Don't draw if size is too small or life is too low
    if (this.size <= 0.1 || this.life <= 0.1) return
    
    ctx.save()
    ctx.globalAlpha = this.life
    ctx.fillStyle = this.color
    ctx.shadowColor = this.color
    ctx.shadowBlur = 10
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  isDead() {
    return this.life <= 0 || this.size <= 0.1
  }
}

// Hexagon grid class with performance optimizations
class HexagonGrid {
  constructor(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.hexagons = []
    this.time = 0
    this.lastDrawTime = 0
    this.drawInterval = 50 // Draw every 50ms for better performance
    this.init()
  }

  init() {
    const size = 40
    const rows = Math.ceil(this.canvas.height / (size * 1.5)) + 2
    const cols = Math.ceil(this.canvas.width / (size * Math.sqrt(3))) + 2

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * size * Math.sqrt(3) + (row % 2) * (size * Math.sqrt(3)) / 2
        const y = row * size * 1.5
        this.hexagons.push({ x, y, size, phase: Math.random() * Math.PI * 2 })
      }
    }
  }

  update(deltaTime) {
    this.time += deltaTime
  }

  shouldDraw() {
    const now = Date.now()
    if (now - this.lastDrawTime > this.drawInterval) {
      this.lastDrawTime = now
      return true
    }
    return false
  }

  draw() {
    if (!this.shouldDraw()) return

    this.hexagons.forEach(hex => {
      const glow = Math.sin(this.time * 0.001 + hex.phase) * 0.3 + 0.7
      const alpha = 0.08 * glow // Reduced alpha for subtlety
      
      this.ctx.save()
      this.ctx.globalAlpha = alpha
      this.ctx.strokeStyle = `rgba(59, 130, 246, ${glow})`
      this.ctx.lineWidth = 1
      this.ctx.shadowColor = `rgba(59, 130, 246, ${glow * 0.3})`
      this.ctx.shadowBlur = 3
      
      this.drawHexagon(hex.x, hex.y, hex.size)
      this.ctx.stroke()
      this.ctx.restore()
    })
  }

  drawHexagon(x, y, size) {
    this.ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3
      const px = x + size * Math.cos(angle)
      const py = y + size * Math.sin(angle)
      if (i === 0) {
        this.ctx.moveTo(px, py)
      } else {
        this.ctx.lineTo(px, py)
      }
    }
    this.ctx.closePath()
  }
}

export default function InteractiveBackground({ children }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const hexGridRef = useRef(null)
  const animationRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const lastParticleTime = useRef(0)
  const particleInterval = 100 // Reduced particle generation for performance

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Initialize canvas and context
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    // Enable high DPI support
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    
    // Initialize mouse position to center of canvas
    mouseRef.current = {
      x: rect.width / 2,
      y: rect.height / 2
    }
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      
      // Update mouse position on resize
      if (mouseRef.current.x > rect.width || mouseRef.current.y > rect.height) {
        mouseRef.current = {
          x: rect.width / 2,
          y: rect.height / 2
        }
      }
      
      if (hexGridRef.current) {
        hexGridRef.current = new HexagonGrid(canvas, ctx)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Initialize hexagon grid
    hexGridRef.current = new HexagonGrid(canvas, ctx)
    
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  // Mouse move handler with throttling
  const handleMouseMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Ensure coordinates are within valid bounds
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        mouseRef.current = { x, y }
      }
    }
  }, [])

  // Touch move handler for mobile
  const handleTouchMove = useCallback((e) => {
    e.preventDefault()
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect && e.touches[0]) {
      const x = e.touches[0].clientX - rect.left
      const y = e.touches[0].clientY - rect.top
      
      // Ensure coordinates are within valid bounds
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        mouseRef.current = { x, y }
      }
    }
  }, [])

  // Animation loop with performance optimizations
  const animate = useCallback((timestamp) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Clear canvas with subtle fade effect
    ctx.fillStyle = 'rgba(18, 18, 18, 0.15)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw hexagon grid
    if (hexGridRef.current) {
      hexGridRef.current.update(16)
      hexGridRef.current.draw()
    }

    // Update and draw particles with throttling
    particlesRef.current = particlesRef.current.filter(particle => !particle.isDead())
    
    // Add new particles at mouse position with throttling
    if (isVisible && !isMobile && timestamp - lastParticleTime.current > particleInterval) {
      // Ensure mouse position is valid
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0 && 
          mouseRef.current.x < canvas.width && mouseRef.current.y < canvas.height) {
        
        const colors = [
          'rgba(59, 130, 246, 0.6)',   // Blue
          'rgba(6, 182, 212, 0.6)',    // Cyan
          'rgba(147, 51, 234, 0.6)',   // Purple
          'rgba(236, 72, 153, 0.6)'    // Pink
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        // Add multiple particles for better effect
        for (let i = 0; i < 2; i++) {
          const particle = new Particle(
            mouseRef.current.x + (Math.random() - 0.5) * 30,
            mouseRef.current.y + (Math.random() - 0.5) * 30,
            color
          )
          
          // Only add particle if it's valid
          if (particle.size > 0 && particle.life > 0) {
            particlesRef.current.push(particle)
          }
        }
        lastParticleTime.current = timestamp
      }
    }

    // Update and draw all particles with error handling
    particlesRef.current.forEach(particle => {
      try {
        particle.update()
        particle.draw(ctx)
      } catch (error) {
        console.warn('Particle error:', error)
        // Remove problematic particle
        const index = particlesRef.current.indexOf(particle)
        if (index > -1) {
          particlesRef.current.splice(index, 1)
        }
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [isVisible, isMobile])

  // Intersection observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Initialize canvas and start animation
  useEffect(() => {
    const cleanup = initCanvas()
    
    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (cleanup) cleanup()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initCanvas, animate, isVisible])

  // Add event listeners
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
    }
  }, [handleMouseMove, handleTouchMove])

  return (
    <div className="relative min-h-screen">
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
          touchAction: 'none' // Prevent touch scrolling on mobile
        }}
      />
      
      {/* Content with glassmorphism overlays */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
