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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">Blog</h1>
          <p className="text-xl text-blue-100">Latest insights and tips about solar energy</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-yellow-300 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-blue-100">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-blue-800/50 rounded-2xl border-2 border-yellow-400/40 p-12">
              <p className="text-blue-100 text-xl font-medium">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <div key={post.id} className={`group bg-blue-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-${i * 100}`}>
                  <div className="relative h-56 overflow-hidden bg-blue-700">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-900 shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition tracking-tight leading-snug">
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
