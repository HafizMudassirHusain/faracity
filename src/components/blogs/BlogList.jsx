"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blogs'

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
}

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 4

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setPosts(blogPosts)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-pulse flex flex-col space-y-8 w-full">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg w-full">
              <div className="h-6 bg-[#252525] rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-[#252525] rounded w-1/2 mb-6"></div>
              <div className="h-24 bg-[#252525] rounded mb-4"></div>
              <div className="h-4 bg-[#252525] rounded w-full mb-2"></div>
              <div className="h-4 bg-[#252525] rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
        {currentPosts.map((post, index) => (
          <motion.article
            key={post.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.01]"
          >
            <Link href={`/blogs/${post.slug}`} className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-60 md:h-auto">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 absolute inset-0 z-0"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {/* Placeholder for image - in production replace with real images */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-blue-900/30 text-blue-400 text-xs font-medium px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#252525] overflow-hidden flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">{post.author}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#212121] text-gray-400 hover:bg-[#252525]'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 