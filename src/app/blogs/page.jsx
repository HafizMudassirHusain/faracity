import BlogHero from "@/components/blogs/BlogHero";
import BlogList from "@/components/blogs/BlogList";
import BlogSearch from "@/components/blogs/BlogSearch";
import BlogCategories from "@/components/blogs/BlogCategories";

export const metadata = {
  title: "Fahracity | Blog",
  description: "Explore our latest articles on technology trends, insights, and innovations."
};

export default function Blogs() {
  return (
    <>
      <BlogHero />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <BlogSearch />
            <BlogList />
          </div>
          <aside className="lg:w-1/4">
            <BlogCategories />
          </aside>
        </div>
      </div>
    </>
  );
} 