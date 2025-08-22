// Button action utilities
export const initializeButtonActions = () => {
  // Wait for DOM to be ready
  if (typeof window === 'undefined') return

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

  // Run immediately and after a delay to catch dynamically loaded content
  addButtonActions()
  setTimeout(addButtonActions, 1000)
  setTimeout(addButtonActions, 2000)

  // Also run when new content is added to the page
  const observer = new MutationObserver(() => {
    setTimeout(addButtonActions, 100)
  })
  
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  })

  return () => observer.disconnect()
}

// Smooth scroll utility
export const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Email contact utility
export const openEmailContact = (email = 'contact@techwave.com') => {
  window.open(`mailto:${email}`, '_blank')
}
