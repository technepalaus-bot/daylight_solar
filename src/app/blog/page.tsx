'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">Latest insights and tips about solar energy</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100 p-12">
              <p className="text-gray-600 text-xl font-medium">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <div key={post.id} className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-${i * 100}`}>
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition tracking-tight leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm">{post.excerpt}</p>
                    <div className="flex justify-between items-center pt-6 border-t border-gray-100 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"></div>
                        <span>By {post.author}</span>
                      </div>
                      <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-lg mb-8">Get your free consultation today</p>
          <Link href="/consultant" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition">
            Get Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
