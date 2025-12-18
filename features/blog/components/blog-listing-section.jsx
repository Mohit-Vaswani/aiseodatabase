'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/blog.json';

export default function BlogListingSection() {
  const [activeTab, setActiveTab] = useState('Trending');

  const tabs = ['Trending', 'Accounting', 'Entrepreneurship', 'Payments', 'Company'];

  const featuredPost = blogData.find(post => post.featured) || blogData[0] || {
    date: 'March 20, 2024',
    category: 'Business Strategy',
    title: 'Maximizing ROI with Enterprise SaaS Solutions',
    excerpt: 'Discover proven strategies for maximizing return on investment when implementing enterprise SaaS solutions in your organization.',
    image: '/images/blog-placeholder.png'
  };

  const sidebarPosts = blogData
    .filter(post => !post.featured)
    .slice(0, 4);

  const latestArticles = blogData.filter(post => !post.featured);

  return (
    <section className="bg-darkBlue-900 py-24">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="mb-20 relative">
          <div className="absolute bottom-0 left-0 w-full bg-white/10 h-px"></div>
          <div className="overflow-x-auto">
            <div className="flex items-center justify-between gap-12">
              <div className="flex gap-10">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`inline-block pb-4 border-b-2 transition duration-200 ${
                      activeTab === tab
                        ? 'text-blue-400 border-blue-400'
                        : 'text-white text-opacity-50 border-transparent hover:text-opacity-70'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-white text-opacity-50 hover:text-opacity-70 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 4.16669L6.66667 10L12.5 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white text-opacity-50 hover:text-opacity-70 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15.8334L13.3333 10L7.5 4.16669" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Article and Sidebar */}
        <div className="flex flex-wrap -m-8 mb-20">
          <div className="w-full lg:w-8/12 p-8">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                className="w-full h-96 object-cover"
                src={featuredPost.image}
                alt={featuredPost.title}
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-blue-400 text-sm">{featuredPost.date}</span>
                  <span className="text-white text-opacity-50">•</span>
                  <span className="text-white text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="font-heading text-white text-2xl md:text-3xl font-bold mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-white text-opacity-70 mb-6 max-w-lg">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug || '#'}`}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12 p-8">
            <h3 className="font-heading text-white text-xl font-bold mb-6">Latest Articles</h3>
            <div className="space-y-6">
              {sidebarPosts.map((post, index) => (
                <div key={index} className="flex gap-4">
                  <Image
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={64}
                  />
                  <div>
                    <span className="text-blue-400 text-xs">{post.date}</span>
                    <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                      {post.title}
                    </h4>
                    <Link
                      href={`/blog/${post.slug || '#'}`}
                      className="text-blue-400 hover:text-blue-300 text-xs"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Articles Grid */}
        <div>
          <h3 className="font-heading text-white text-2xl font-bold mb-8">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.slice(0, 6).map((post, index) => (
              <article key={index} className="group">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <Image
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 text-sm">{post.date}</span>
                  <span className="text-white text-opacity-50">•</span>
                  <span className="text-white text-opacity-70 text-sm">{post.category}</span>
                </div>
                <h3 className="font-heading text-white text-lg font-semibold mb-3 group-hover:text-blue-400 transition duration-200">
                  <Link href={`/blog/${post.slug || '#'}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-white text-opacity-70 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug || '#'}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}