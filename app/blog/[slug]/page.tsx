'use client';

import { useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/common/cta-section';
import blogData from '@/data/blog.json';

interface BlogSinglePageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogSinglePage({ params }: BlogSinglePageProps) {
  const { slug } = use(params);

  // Find the blog post based on the slug
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Four Points`;
    } else {
      document.title = 'Blog Post Not Found - Four Points';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="bg-body text-body font-body antialiased">
        <AnnouncementBar />
        <section className="bg-darkBlue-900">
          <Header variant="other" />
        </section>

        <section className="bg-darkBlue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-white text-4xl md:text-5xl mb-8">Post Not Found</h1>
              <p className="text-white text-opacity-70 text-lg mb-8">The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header variant="other" />
      </section>

      {/* Hero Section */}
      <section className="bg-darkBlue-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white text-opacity-60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-6">
                {post.category}
              </div>
            )}

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-white text-opacity-60 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Excerpt */}
            <p className="text-white text-opacity-80 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-darkBlue-900 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
                width={1200}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-darkBlue-900 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <div className="text-white text-opacity-80 text-lg leading-relaxed space-y-6">
                <p>
                  {post.content?.intro || `Welcome to this comprehensive guide where we dive deep into the topic of ${post.title.toLowerCase()}. In today's fast-paced business environment, understanding these concepts is crucial for success.`}
                </p>

                <p>
                  {post.excerpt} This article will provide you with actionable insights and practical strategies
                  that you can implement immediately in your business operations.
                </p>

                {post.content?.keyTakeaways && (
                  <>
                    <h2 className="text-white text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>
                    <ul className="space-y-3 text-white text-opacity-80">
                      {post.content.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {post.content?.sections?.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-white text-3xl font-bold mt-12 mb-6">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                )) || (
                  <>
                    <h2 className="text-white text-3xl font-bold mt-12 mb-6">Getting Started</h2>
                    <p>
                      The first step in mastering any new business concept is to understand its core principles.
                      Whether you&apos;re dealing with technology implementation, process optimization, or strategic planning,
                      the same fundamental approach applies: assess, plan, execute, and monitor.
                    </p>
                  </>
                )}

                {post.content?.proTip && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-8">
                    <h3 className="text-blue-400 text-xl font-semibold mb-4">💡 Pro Tip</h3>
                    <p className="text-white text-opacity-80 mb-0">
                      {post.content.proTip}
                    </p>
                  </div>
                )}

                <h2 className="text-white text-3xl font-bold mt-12 mb-6">Conclusion</h2>

                <p>
                  {post.content?.conclusion || `Mastering ${post.title.toLowerCase()} requires dedication, proper planning, and consistent execution. By following the strategies outlined in this guide, you'll be well-equipped to achieve your goals and drive meaningful results for your business.`}
                </p>

                <p>
                  Remember that success is a journey, not a destination. Continue learning, adapting, and refining
                  your approach based on new insights and changing market conditions.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-white text-opacity-80 mb-6">
                  Join thousands of businesses who trust Four Points for their digital transformation needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200"
                >
                  Get Started Today
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to All Posts
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h3 className="text-white text-2xl font-bold mb-8">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogData
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300"
                    >
                      <div className="relative">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={192}
                        />
                        {relatedPost.category && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-darkBlue-900 text-sm font-medium rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-white text-xl font-semibold mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-white text-opacity-60 text-sm mb-4 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-white text-opacity-50">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}