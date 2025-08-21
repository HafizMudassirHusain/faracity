"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "We begin by understanding your business, goals, and challenges to identify how technology can help you achieve your objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    )
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description: "We create a detailed roadmap including technology choices, architecture design, timeline, and resource allocation to achieve your goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 8 4-4 4 4"></path>
        <path d="M7 4v16"></path>
        <path d="M17 8V4h4"></path>
        <path d="M21 4v4"></path>
        <path d="M21 12H7"></path>
        <path d="M7 20h14"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Design & Development",
    description: "Our expert team designs and develops your solution, keeping you involved throughout with regular updates and feedback sessions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2.5a1 1 0 0 1 .95.7l.03.1 1.79 5.8a8 8 0 0 1-.57 6l-.15.29a8 8 0 0 1-13.5.94A8 8 0 0 1 4 9.5a8 8 0 0 1 1.5-4.7l.2-.3a1 1 0 0 1 1.6 1.2l-.1.14-.12.17A6 6 0 0 0 6 9.5a6 6 0 0 0 .35 2.05l.1.26.1.23A6 6 0 0 0 12 15a5.97 5.97 0 0 0 5.45-3.47l.1-.25.05-.14A6 6 0 0 0 18 9.5a6 6 0 0 0-.2-1.52l-.05-.17-.05-.15-1.58-5.13A1 1 0 0 1 17 2.5Z"></path>
        <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        <path d="M11.67 2.5H16"></path>
        <path d="M12.5 22v-2"></path>
        <path d="M10 22H15"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Rigorous testing ensures your solution is robust, secure, and performs optimally under all scenarios before deployment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
        <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
        <path d="M16 2v4"></path>
        <path d="M3 10h7"></path>
        <path d="M21 10h-5.5"></path>
        <path d="M2 2l20 20"></path>
        <path d="M8 21v-4"></path>
      </svg>
    )
  },
  {
    id: 5,
    title: "Deployment",
    description: "We carefully launch your solution with minimal disruption to your operations, ensuring a smooth transition for all users.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
      </svg>
    )
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "Our relationship continues after launch with ongoing support, maintenance, and upgrades to keep your solution performing optimally.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.9 14.95a8 8 0 1 0-9.9 5.05"></path>
        <path d="M12 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path>
        <path d="M12 14h4"></path>
        <path d="M21 15v-2"></path>
        <path d="M19 17h4"></path>
        <path d="M19 21h2"></path>
        <path d="M22 19v4"></path>
        <path d="M15 19h2"></path>
      </svg>
    )
  }
];

// Process step animation variants
const processVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ServiceProcess() {
  const processRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      try {
        // Simple animation to ensure the line grows as user scrolls
        gsap.to(lineRef.current, {
          height: '100%',
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
          }
        });
        
        // Make sure all steps are visible
        gsap.set('.process-step', { 
          opacity: 1,
          x: 0
        });
        
      } catch (error) {
        console.error("GSAP animation error:", error);
        // Fallback - ensure content is visible if animation fails
        if (lineRef.current) {
          lineRef.current.style.height = '100%';
        }
        document.querySelectorAll('.process-step').forEach(step => {
          step.style.opacity = 1;
          step.style.transform = 'translateX(0)';
        });
      }
      
      return () => {
        // Clean up ScrollTrigger instances
        if (ScrollTrigger.getAll().length) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    }
  }, []);

  return (
    <section className="py-20 bg-[#121212]" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-100"
          >
            Our Development Process
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
            Our systematic approach ensures high-quality deliverables that meet your business goals
          </motion.p>
        </div>
        
        <div className="relative" ref={processRef}>
          {/* Timeline center line */}
          <div className="absolute h-full w-1 bg-[#2a2a2a] left-1/2 transform -translate-x-1/2 rounded-full">
            <div 
              ref={lineRef} 
              className="absolute top-0 left-0 w-full bg-blue-500 rounded-full" 
              style={{ height: '0%' }}
            ></div>
          </div>
          
          {/* Process steps */}
          <div className="relative z-10">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={processVariant}
                className={`process-step relative flex mb-20 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#1a1a1a] border-4 border-blue-500 z-20 flex items-center justify-center">
                  <span className="font-bold text-sm text-blue-400">{step.id}</span>
                </div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-20" : "md:pl-20"}`}>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] shadow-lg">
                    <div className={`flex items-center mb-4 ${index % 2 === 0 ? "justify-end" : ""}`}>
                      <div className={`${index % 2 === 0 ? "order-2 ml-4" : "mr-4"} text-blue-400`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 