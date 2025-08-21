"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/globe.svg", // Placeholder image
    bio: "Sarah has over 15 years of experience in tech leadership, previously leading innovation at Google and Microsoft. She founded TechWave with a vision to democratize advanced technology.",
    skills: ["Strategic Leadership", "AI Innovation", "Product Vision"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    image: "/globe.svg", // Placeholder image
    bio: "Michael brings 12 years of experience in software architecture and engineering leadership. He specializes in cloud infrastructure and distributed systems at scale.",
    skills: ["Cloud Architecture", "System Design", "Team Leadership"]
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Lead Developer",
    image: "/globe.svg", // Placeholder image
    bio: "Aisha is a full-stack development expert with a passion for creating elegant solutions to complex problems. She leads our development team with expertise in multiple frameworks.",
    skills: ["Full-Stack Development", "React/Node", "Technical Mentoring"]
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Head of Design",
    image: "/globe.svg", // Placeholder image
    bio: "David combines artistic talent with deep UX knowledge to create beautiful, functional interfaces. His work has been recognized with multiple design awards.",
    skills: ["UI/UX Design", "Design Systems", "User Research"]
  },
  {
    id: 5,
    name: "Emily Taylor",
    role: "AI Research Lead",
    image: "/globe.svg", // Placeholder image
    bio: "Emily holds a PhD in Computer Science with a focus on machine learning. She leads our AI initiatives and keeps us at the cutting edge of technology.",
    skills: ["Machine Learning", "Natural Language Processing", "Research"]
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Client Success Manager",
    image: "/globe.svg", // Placeholder image
    bio: "James ensures our clients achieve their business goals through our technology solutions. He combines technical knowledge with exceptional people skills.",
    skills: ["Client Management", "Solution Consulting", "Business Strategy"]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Team</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind TechWave's innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] shadow-lg cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="p-4 flex items-center justify-center bg-[#222222]">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                  <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e]">
                    {/* Placeholder for profile image */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-100">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button 
                  className="mt-4 text-blue-400 text-sm font-medium hover:text-blue-300"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for team member details */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            >
              <motion.div 
                className="bg-[#1a1a1a] rounded-xl p-6 max-w-2xl w-full border border-[#2a2a2a] shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 mr-4">
                      <div className="w-full h-full flex items-center justify-center bg-[#1e1e1e]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">{selectedMember.name}</h3>
                      <p className="text-blue-400 font-medium">{selectedMember.role}</p>
                    </div>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-300"
                    onClick={() => setSelectedMember(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">About</h4>
                  <p className="text-gray-300">{selectedMember.bio}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 