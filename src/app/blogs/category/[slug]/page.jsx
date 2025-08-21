import Link from 'next/link';
import { categories } from '@/data/blogs';
import { notFound } from 'next/navigation';
import CategoryContent from '@/components/blogs/CategoryContent';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categories.find(cat => cat.id === slug);
  
  if (!category) {
    return {
      title: 'Category Not Found | TechWave Blog',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category.name} | TechWave Blog`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  
  // Find category
  const category = categories.find(cat => cat.id === slug);
  if (!category) return notFound();

  return (
    <>
      <div className="bg-[#121212] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Navigation and Category Section */}
            <div className="flex  flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <Link 
                href="/blogs"
                className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors order-2 sm:order-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Articles
              </Link>
              
              <span className="inline-block bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-lg font-medium order-1 sm:order-2">
                {category.name}
              </span>
            </div>
            
            {/* Main Content Section */}
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {category.name}
              </h1>
              
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
              
              <p className="text-xl text-gray-300">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <CategoryContent categoryId={slug} />
    </>
  );
} 