import Link from 'next/link';
import { tags } from '@/data/blogs';
import { notFound } from 'next/navigation';
import TagContent from '@/components/blogs/TagContent';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tag = tags.find(t => t.id === slug);
  
  if (!tag) {
    return {
      title: 'Tag Not Found | TechWave Blog',
      description: 'The requested tag could not be found.',
    };
  }

  return {
    title: `${tag.name} Articles | TechWave Blog`,
    description: `Explore ${tag.count} articles tagged with ${tag.name} - latest insights and trends.`,
  };
}

export default async function TagPage({ params }) {
  const { slug } = await params;
  
  // Find tag
  const tag = tags.find(t => t.id === slug);
  if (!tag) return notFound();

  return (
    <>
      <div className="bg-[#121212] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl flex flex-col items-center justify-around mx-auto text-center">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Articles
            </Link>
            
            <span className="inline-block bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-1 rounded-full text-lg font-medium mb-6">
              #{tag.name}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Articles Tagged with <span className="text-blue-400">#{tag.name}</span>
            </h1>
            
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300">
              Explore {tag.count} articles related to this topic
            </p>
          </div>
        </div>
      </div>
      
      <TagContent tag={slug} />
    </>
  );
} 