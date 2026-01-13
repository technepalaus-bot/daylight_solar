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
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20 px-4 pt-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">Latest insights and tips about solar energy</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-blue-600 mb-2">{post.category}</p>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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
