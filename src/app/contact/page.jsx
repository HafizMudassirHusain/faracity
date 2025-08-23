"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '',subject :'', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
  }

  return (
    <section className="py-20 bg-[#151515] text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you — whether you're curious about features, pricing, or anything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] space-y-5 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
             <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-[#222] border border-[#333] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info + Map */}
          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-400 text-xl" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>info@fahracity.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>123 Tech Street, Karachi, Pakistan</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-xl"><FaFacebookF /></a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-xl"><FaLinkedinIn /></a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-xl"><FaTwitter /></a>
            </div>

            {/* Map Embed */}
            <div className="overflow-hidden rounded-lg border border-[#2a2a2a] shadow-md mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.445055248237!2d67.02900521500256!3d24.860734684054742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fcbfe891e3b%3A0x58a739dc3f6483c0!2sKarachi%20Pakistan!5e0!3m2!1sen!2s!4v1672929185567"
                width="100%"
                height="250"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
