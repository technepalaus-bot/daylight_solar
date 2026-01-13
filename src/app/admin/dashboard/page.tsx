'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Trash2, BarChart3, X, Save } from 'lucide-react';

type TabType = 'dashboard' | 'blog' | 'testimonials' | 'contacts' | 'consultations';

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

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  message: string;
  date: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(false);

  // Form states
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [blogRes, testimonialsRes, contactsRes, consultationsRes] = await Promise.all([
        fetch('/api/blog'),
        fetch('/api/testimonials'),
        fetch('/api/contact'),
        fetch('/api/consultant'),
      ]);

      if (blogRes.ok) setBlogPosts((await blogRes.json()).posts);
      if (testimonialsRes.ok) setTestimonials((await testimonialsRes.json()).testimonials);
      if (contactsRes.ok) setContacts(await contactsRes.json());
      if (consultationsRes.ok) setConsultations(await consultationsRes.json());
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
    setLoading(false);
  };

  // Blog CRUD Operations
  const handleSaveBlog = async (post: BlogPost) => {
    try {
      const method = post.id && blogPosts.some(p => p.id === post.id) ? 'PUT' : 'POST';
      await fetch('/api/blog', {
        method,
        body: JSON.stringify(post),
      });
      setEditingBlog(null);
      setShowBlogForm(false);
      await fetchAllData();
    } catch (error) {
      console.error('Failed to save blog:', error);
    }
  };

  const deleteBlog = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await fetch('/api/blog', {
          method: 'DELETE',
          body: JSON.stringify({ id }),
        });
        await fetchAllData();
      } catch (error) {
        console.error('Failed to delete:', error);
      }
    }
  };

  // Testimonial CRUD Operations
  const handleSaveTestimonial = async (testimonial: Testimonial) => {
    try {
      const method = testimonial.id && testimonials.some(t => t.id === testimonial.id) ? 'PUT' : 'POST';
      await fetch('/api/testimonials', {
        method,
        body: JSON.stringify(testimonial),
      });
      setEditingTestimonial(null);
      setShowTestimonialForm(false);
      await fetchAllData();
    } catch (error) {
      console.error('Failed to save testimonial:', error);
    }
  };

  const deleteTestimonial = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await fetch('/api/testimonials', {
          method: 'DELETE',
          body: JSON.stringify({ id }),
        });
        await fetchAllData();
      } catch (error) {
        console.error('Failed to delete:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-300 overflow-x-auto">
            {(['dashboard', 'blog', 'testimonials', 'contacts', 'consultations'] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold transition whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                <BarChart3 className="w-8 h-8 mb-2" />
                <p className="text-sm opacity-90">Blog Posts</p>
                <p className="text-3xl font-bold">{blogPosts.length}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-white">
                <BarChart3 className="w-8 h-8 mb-2" />
                <p className="text-sm opacity-90">Testimonials</p>
                <p className="text-3xl font-bold">{testimonials.length}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg text-white">
                <BarChart3 className="w-8 h-8 mb-2" />
                <p className="text-sm opacity-90">Contacts</p>
                <p className="text-3xl font-bold">{contacts.length}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white">
                <BarChart3 className="w-8 h-8 mb-2" />
                <p className="text-sm opacity-90">Consultations</p>
                <p className="text-3xl font-bold">{consultations.length}</p>
              </div>
            </div>
          )}

          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Blog Posts</h2>
                <button
                  onClick={() => {
                    setEditingBlog(null);
                    setShowBlogForm(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-5 h-5" /> New Post
                </button>
              </div>

              {/* Blog Form */}
              {showBlogForm && (
                <div className="mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">
                      {editingBlog ? 'Edit Post' : 'New Blog Post'}
                    </h3>
                    <button
                      onClick={() => {
                        setShowBlogForm(false);
                        setEditingBlog(null);
                      }}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <BlogForm
                    post={editingBlog}
                    onSave={handleSaveBlog}
                    onCancel={() => {
                      setShowBlogForm(false);
                      setEditingBlog(null);
                    }}
                  />
                </div>
              )}

              {/* Blog List */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">Title</th>
                      <th className="text-left py-3 px-4">Author</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">{post.title}</td>
                        <td className="py-3 px-4">{post.author}</td>
                        <td className="py-3 px-4">{post.date}</td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => {
                              setEditingBlog(post);
                              setShowBlogForm(true);
                            }}
                            className="text-blue-600 hover:text-blue-800 mr-2"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteBlog(post.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Testimonials</h2>
                <button
                  onClick={() => {
                    setEditingTestimonial(null);
                    setShowTestimonialForm(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Plus className="w-5 h-5" /> New Testimonial
                </button>
              </div>

              {/* Testimonial Form */}
              {showTestimonialForm && (
                <div className="mb-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">
                      {editingTestimonial ? 'Edit Testimonial' : 'New Testimonial'}
                    </h3>
                    <button
                      onClick={() => {
                        setShowTestimonialForm(false);
                        setEditingTestimonial(null);
                      }}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <TestimonialForm
                    testimonial={editingTestimonial}
                    onSave={handleSaveTestimonial}
                    onCancel={() => {
                      setShowTestimonialForm(false);
                      setEditingTestimonial(null);
                    }}
                  />
                </div>
              )}

              {/* Testimonials List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border border-gray-200 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingTestimonial(testimonial);
                            setShowTestimonialForm(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteTestimonial(testimonial.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{testimonial.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{testimonial.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Submissions</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">{contact.name}</td>
                        <td className="py-3 px-4">{contact.email}</td>
                        <td className="py-3 px-4">{contact.phone}</td>
                        <td className="py-3 px-4">{new Date(contact.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Consultations Tab */}
          {activeTab === 'consultations' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Consultation Requests</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Address</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((consultation) => (
                      <tr key={consultation.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">{consultation.name}</td>
                        <td className="py-3 px-4">{consultation.email}</td>
                        <td className="py-3 px-4">{consultation.address}</td>
                        <td className="py-3 px-4">{new Date(consultation.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Blog Form Component
function BlogForm({
  post,
  onSave,
  onCancel,
}: {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<BlogPost>(
    post || {
      id: 0,
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      category: '',
    }
  );

  const [imagePreview, setImagePreview] = useState<string>(post?.image || '');
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('folder', 'blog');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || 'Failed to upload image');
        return;
      }

      const data = await response.json();
      setFormData(prev => ({ ...prev, image: data.path }));
      setImagePreview(data.path);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Image Upload Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Blog Image</label>
        <div className="flex gap-3 items-start">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
          />
          {uploading && <span className="text-sm text-gray-600 pt-2">Uploading...</span>}
        </div>
        {imagePreview && (
          <div className="relative w-32 h-32 mt-3">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg border border-gray-300"
            />
          </div>
        )}
      </div>

      <textarea
        name="excerpt"
        placeholder="Excerpt"
        value={formData.excerpt}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        rows={2}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        rows={4}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Save className="w-4 h-4" /> Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

// Testimonial Form Component
function TestimonialForm({
  testimonial,
  onSave,
  onCancel,
}: {
  testimonial: Testimonial | null;
  onSave: (testimonial: Testimonial) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Testimonial>(
    testimonial || {
      id: 0,
      name: '',
      location: '',
      avatar: '',
      rating: 5,
      message: '',
      date: new Date().toISOString().split('T')[0],
    }
  );

  const [imagePreview, setImagePreview] = useState<string>(testimonial?.avatar || '');
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);
      formDataUpload.append('folder', 'testimonials');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || 'Failed to upload image');
        return;
      }

      const data = await response.json();
      setFormData(prev => ({ ...prev, avatar: data.path }));
      setImagePreview(data.path);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave(formData);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>

      {/* Avatar Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Avatar Image</label>
        <div className="flex gap-3 items-start">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 disabled:bg-gray-100"
          />
          {uploading && <span className="text-sm text-gray-600 pt-2">Uploading...</span>}
        </div>
        {imagePreview && (
          <div className="relative w-20 h-20 mt-3">
            <img
              src={imagePreview}
              alt="Avatar Preview"
              className="w-full h-full object-cover rounded-full border border-gray-300"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        />
      </div>
      <textarea
        name="message"
        placeholder="Testimonial Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
        rows={4}
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Save className="w-4 h-4" /> Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
