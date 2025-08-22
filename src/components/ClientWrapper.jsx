"use client"

import { useState, useEffect } from 'react'
import SplashScreen from './SplashScreen'

export default function ClientWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Add button action handlers to the page
    const addButtonActions = () => {
      // Add IDs to sections for smooth scrolling
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const heading = section.querySelector('h2, h1')
        if (heading) {
          const text = heading.textContent.toLowerCase()
          if (text.includes('featured') && text.includes('service')) {
            section.id = 'featured-services'
          } else if (text.includes('transform') || text.includes('ready')) {
            section.id = 'cta-section'
          }
        }
      })

      // Get all buttons and add click handlers
      const buttons = document.querySelectorAll('button')
      buttons.forEach(button => {
        const buttonText = button.textContent.trim().toLowerCase()
        
        if (buttonText.includes('get in touch') || buttonText.includes('contact')) {
          button.style.cursor = 'pointer'
          // Remove existing listeners to avoid duplicates
          button.onclick = null
          button.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            // First try to scroll to CTA section
            const ctaSection = document.querySelector('#cta-section')
            if (ctaSection) {
              ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
            } else {
              // Fallback to email
              window.open('mailto:contact@techwave.com', '_blank')
            }
          }
        }
        
        if (buttonText.includes('explore') && buttonText.includes('service')) {
          button.style.cursor = 'pointer'
          // Remove existing listeners to avoid duplicates
          button.onclick = null
          button.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            // Scroll to Featured Services section
            const servicesSection = document.querySelector('#featured-services')
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }
        }
      })
    }

    // Add button actions after components are loaded
    const timer1 = setTimeout(addButtonActions, 1000)
    const timer2 = setTimeout(addButtonActions, 3000) // After splash screen
    const timer3 = setTimeout(addButtonActions, 5000) // For lazy loaded content
    
    // Also add on page changes
    const observer = new MutationObserver(() => {
      setTimeout(addButtonActions, 100)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      observer.disconnect()
    }
  }, [isClient])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (!isClient) {
    return <div className="min-h-screen bg-[#121212]"></div>
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return children
}
