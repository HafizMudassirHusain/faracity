"use client"

import { useState } from 'react';
import BlogList from '@/components/blogs/BlogList';
import BlogSearch from '@/components/blogs/BlogSearch';
import BlogCategories from '@/components/blogs/BlogCategories';

export default function CategoryContent({ categoryId }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <BlogSearch 
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
          />
          <BlogList 
            searchQuery={searchQuery}
            filter={activeFilter}
            categoryId={categoryId}
          />
        </div>
        <aside className="lg:w-1/4">
          <BlogCategories />
        </aside>
      </div>
    </div>
  );
} 