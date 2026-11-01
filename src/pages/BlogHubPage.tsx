import React, { useState } from "react";
import { Link } from "../context/RouterContext";
import { BLOG_POSTS, BlogPost } from "../data/blogPosts";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Search, BookOpen, Clock, User, ArrowRight } from "lucide-react";

export function BlogHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Maintenance", "Equipment Guide", "Commercial", "Energy Savings", "Air Quality"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory !== "All" && post.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.targetKeywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumbs items={[{ label: "Blog & Resource Guides" }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
          HVAC Knowledge Base &amp; Homeowner Guides
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 font-display">
          HVAC Technical Insights, Sizing &amp; Maintenance Guides
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Written by our certified NATE mechanics and mechanical engineers to help you cut energy bills, extend equipment lifespans, and understand modern heat pump technologies.
        </p>

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. heat pump, SEER2, sizing)..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono-num text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sky-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-800 block">{post.author.name}</span>
                  <span className="text-[10px] text-slate-400">{post.publishDate}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
