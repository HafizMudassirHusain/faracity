"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full px-4 py-3 md:px-6 md:py-4 z-50 transition-all duration-300 ${
        scrolled
          ? ' backdrop-blur-sm shadow-lg'
          : ' border-b border-[#2a2a2a]'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-xl font-bold text-blue-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">Fahracity</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <motion.li 
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link 
                href={link.href} 
                className={`relative px-1 py-2 transition-colors hover:text-blue-300 ${
                  pathname === link.href ? 'text-blue-400' : ''
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? 'w-6' : 'w-6'}`}
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-4 bg-blue-400 transition-opacity duration-300"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? 'w-6' : 'w-5'}`}
              ></motion.span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden  border-t border-[#2a2a2a] mt-3"
          >
            <div className="container mx-auto py-4 px-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        pathname === link.href
                          ? 'bg-blue-900/20 text-blue-400'
                          : 'text-gray-300 hover:bg-[#222222]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
