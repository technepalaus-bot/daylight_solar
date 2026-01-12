'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bill: '',
    existingSolar: 'No',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        bill: '',
        existingSolar: 'No',
        date: '',
        time: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with our solar experts for a free consultation</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600 text-lg">0734226150</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200 text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600 text-lg">hello@daylightsolar.com.au</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Office</h3>
              <p className="text-gray-600 text-lg">1/30 Chancellor Village Blvd, Sippy Downs, 4556, QLD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Get Your Free Solar Consultation
          </h2>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✓ Thank you! Your consultation request has been submitted. Our team will contact you shortly!
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Home Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Average Power Bill (Quarterly) *</label>
                <input
                  type="text"
                  name="bill"
                  value={formData.bill}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., $400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Do you have existing solar? *</label>
                <select
                  name="existingSolar"
                  value={formData.existingSolar}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Time *</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us anything else about your solar needs..."
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl transition text-lg"
            >
              Request Free Consultation
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              We respect your privacy. Your information is secure and will only be used to contact you about your solar consultation.
            </p>
          </form>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-blue-600">1️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Free Assessment</h3>
              <p className="text-gray-600">Our experts visit your home to evaluate your solar potential</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-blue-600">2️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Custom Quote</h3>
              <p className="text-gray-600">We provide a tailored system design and pricing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-blue-600">3️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Financing Options</h3>
              <p className="text-gray-600">Zero interest and government subsidy assistance</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-blue-600">4️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Installation</h3>
              <p className="text-gray-600">Professional installation by SAA accredited teams</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
