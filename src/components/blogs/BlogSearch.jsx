"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'latest', label: 'Latest' },
  { id: 'popular', label: 'Popular' },
  { id: 'ai', label: 'AI' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'cloud', label: 'Cloud' }
]

export default function BlogSearch({ onSearch, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  
  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-lg py-3 px-4 pl-12 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#212121] text-gray-300 hover:bg-[#252525]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 