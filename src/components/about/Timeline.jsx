"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "TechWave was established with a small team of 5 passionate technologists in a modest office space."
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Secured our first enterprise client, developing a custom AI solution that increased their operational efficiency by 35%."
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25 employees and moved to a larger office space to accommodate our expanding team and services."
  },
  {
    year: "2019",
    title: "Innovation Award",
    description: "Received the Regional Tech Innovation Award for our groundbreaking work in AI-powered analytics solutions."
  },
  {
    year: "2020",
    title: "Remote Transformation",
    description: "Successfully transitioned to a hybrid work model while maintaining productivity and launching two new service lines."
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Opened our first international office and expanded our client base to Europe and Asia."
  },
  {
    year: "2023",
    title: "Today",
    description: "Now a team of 100+ tech experts, serving clients worldwide with cutting-edge technology solutions."
  }
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Clear any existing refs
      timelineItemsRef.current = [];
      
      // Create timeline animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });
      
      // Animate the timeline line
      timeline.to(".timeline-line", {
        height: "100%",
        duration: 1,
        ease: "none"
      });
      
      // Animate each timeline item
      timelineItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse"
          }
        });
      });
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        // Clean up ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);
  
  const addToRefs = (el) => {
    if (el && !timelineItemsRef.current.includes(el)) {
      timelineItemsRef.current.push(el);
    }
  };

  return (
    <section className="py-20 bg-[#121212]" ref={timelineRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Journey</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to industry leadership
          </p>
        </div>
        
        <div className="relative flex flex-col items-center">
          {/* Timeline center line */}
          <div className="absolute h-full w-px bg-[#2a2a2a] left-1/2 transform -translate-x-1/2">
            <div className="timeline-line absolute top-0 left-0 w-full bg-blue-500" style={{ height: '0%' }}></div>
          </div>
          
          {/* Timeline items */}
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className={`relative flex w-full items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 z-10 border-4 border-[#121212]"></div>
              
              {/* Content box */}
              <div 
                className={`w-full md:w-5/12 bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] shadow-lg ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900/30 rounded-full text-blue-400 font-bold px-4 py-1 text-sm mr-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{milestone.title}</h3>
                </div>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 