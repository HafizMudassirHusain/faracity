"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { categories, tags, blogPosts } from '@/data/blogs'

// Get recent posts
const recentPosts = blogPosts
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  .slice(0, 3)

export default function BlogCategories() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Categories */}
      <div className="mb-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center">
              <Link 
                href={`/blogs/category/${category.id}`}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-sm text-gray-500 bg-[#212121] rounded-full px-2 py-1">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="mb-10 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-6">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug} className="border-b border-[#2a2a2a] pb-4 last:border-0 last:pb-0">
              <Link 
                href={`/blogs/${post.slug}`}
                className="block hover:bg-[#222] p-2 -mx-2 rounded transition-colors"
              >
                <h4 className="text-gray-200 font-medium hover:text-blue-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Cloud */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-6">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/blogs/tag/${tag.id}`}
              className="inline-block bg-[#212121] hover:bg-blue-900/20 border border-[#2a2a2a] text-gray-300 hover:text-blue-400 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {tag.name} ({tag.count})
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 