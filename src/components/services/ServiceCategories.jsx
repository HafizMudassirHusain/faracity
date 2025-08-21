"use client"

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

// Service categories with icons
const categories = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights from your data, and create intelligent applications.",
    features: [
      "Custom AI Solution Development",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L13 10h3.8L18 12l-1.2 2H3.2L2 12l1.2-2H7l.25-.07C5.4 9.58 4 7.95 4 6a4 4 0 0 1 4-4Z"></path>
        <path d="M10 9v5a2 2 0 1 0 4 0V9"></path>
        <path d="M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"></path>
        <path d="M6 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"></path>
      </svg>
    )
  },
  {
    id: "blockchain",
    name: "Blockchain Solutions",
    description: "Build secure, transparent, and decentralized applications with our blockchain development expertise.",
    features: [
      "Smart Contract Development",
      "Decentralized Applications (dApps)",
      "Token Development",
      "Blockchain Integration",
      "NFT Marketplaces"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
        <path d="M16 21V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v14"></path>
        <path d="M6 11h4"></path>
        <path d="M14 11h4"></path>
        <path d="M8 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        <path d="M16 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
      </svg>
    )
  },
  {
    id: "cloud",
    name: "Cloud Services",
    description: "Leverage scalable, reliable cloud architecture to optimize operations, reduce costs, and accelerate innovation.",
    features: [
      "Cloud Migration",
      "Cloud-Native Development",
      "DevOps Implementation",
      "Serverless Architecture",
      "Multi-Cloud Management"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    )
  },
  {
    id: "software",
    name: "Custom Software",
    description: "Tailor-made software solutions designed specifically for your business needs and challenges.",
    features: [
      "Enterprise Applications",
      "Web Application Development",
      "Mobile Apps (iOS & Android)",
      "Desktop Software",
      "API Development & Integration"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
        <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.24-3.07A4 4 0 1 1 17 6c-.7.01-1.4.21-2 .57"></path>
        <path d="m12 19-5-3 1.67-3.09"></path>
      </svg>
    )
  },
  {
    id: "iot",
    name: "IoT Solutions",
    description: "Connect and control your devices, gather data, and create smart environments with Internet of Things technology.",
    features: [
      "IoT Device Development",
      "IoT Platform Development",
      "Smart Home/Office Systems",
      "Industrial IoT Solutions",
      "IoT Data Analytics"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12" y2="20"></line>
      </svg>
    )
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Protect your business from threats with comprehensive security solutions, audits, and best practices implementation.",
    features: [
      "Security Assessments",
      "Penetration Testing",
      "Security Monitoring",
      "Compliance Implementation",
      "Security Training"
    ],
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m14.5 9-5 5"></path>
        <path d="m9.5 9 5 5"></path>
      </svg>
    )
  }
];

// Card animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function ServiceCategories() {
  const ref = useRef(null);

  // Register GSAP ScrollTrigger - only for desktop enhancement
  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      try {
        // Instead of animating on scroll, just make sure content is visible
        gsap.set('.service-card', {
          opacity: 1,
          y: 0
        });
      } catch (error) {
        console.error("GSAP animation error:", error);
      }

      return () => {
        // Cleanup any ScrollTrigger instances
        if (ScrollTrigger.getAll().length) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    }
  }, []);

  return (
    <section className="py-20 bg-[#151515]" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-100"
          >
            Our Service Categories
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our comprehensive range of services tailored to meet your technology needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariant}
              className="service-card bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-lg bg-blue-900/20 flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">{index + 1}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-100">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>

                <div className="space-y-2 mb-6">
                  {category.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/services/${category.id}`}>
                  <button className="w-full py-3 bg-[#212121] hover:bg-[#2a2a2a] text-blue-400 font-medium rounded-lg transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 