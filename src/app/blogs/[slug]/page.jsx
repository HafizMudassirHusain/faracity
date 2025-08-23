import Link from 'next/link';
import BlogCategories from '@/components/blogs/BlogCategories';
import { getPostBySlug, categories } from '@/data/blogs';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Fahracity',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
          title: `${post.title} | Fahracity Blog`,
      description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  
  // Get the blog post from centralized data
  const post = getPostBySlug(slug);
  
  if (!post) {
    return notFound();
  }

  // Get category name for display
  const category = categories.find(cat => cat.id === post.category);

  return (
    <>
      <div className="bg-[#121212] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-blue-900/30 text-blue-400 text-xs font-medium px-2.5 py-1 rounded">
                {category?.name || post.category}
              </span>
              <span className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#252525] overflow-hidden flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-200 font-medium">{post.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 absolute inset-0 z-0 h-72 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-600 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 md:p-10">
                <article className="prose prose-lg max-w-none prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <div className="mt-10 pt-6 border-t border-[#2a2a2a]">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blogs/tag/${tag}`}
                        className="inline-block bg-[#212121] hover:bg-blue-900/20 border border-[#2a2a2a] text-gray-300 hover:text-blue-400 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">Share this article</h3>
              <div className="flex gap-4">
                <button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
                <button className="bg-[#212121] hover:bg-[#2a2a2a] text-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3 lg:sticky lg:top-24 self-start">
            <BlogCategories />
          </aside>
        </div>
      </div>
    </>
  );
} 