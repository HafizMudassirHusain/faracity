"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getBlogsByTag, tags } from '@/data/blogs'

export default function TagContent({ tag }) {
  const tagData = tags.find(t => t.slug === tag)

  if (!tagData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-100 mb-4">Tag Not Found</h1>
        <p className="text-gray-400">The requested tag could not be found.</p>
      </div>
    )
  }

  const blogs = getBlogsByTag(tag)

  return (
    <div className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Tag: <span className="text-blue-400">{tagData.name}</span>
          </h1>
          <p className="text-xl text-gray-300">
            {blogs.length} article{blogs.length !== 1 ? 's' : ''} found
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-blue-400 font-medium">
                    {blog.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-400">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              No articles found
            </h2>
            <p className="text-gray-400 mb-8">
              No articles were found with the tag "{tagData.name}".
            </p>
            <Link
              href="/blogs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Articles
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
