'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FreeConsultant() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/consultant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            date: '',
            time: '',
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg mb-6 leading-tight">
            Free Solar <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Get a personalized solar assessment from our experts. No obligation, completely free.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-800 to-blue-900 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-2xl mx-auto relative z-10 animate-fade-in-up animation-delay-200">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in-up">
              ✓ Thank you! Your consultation request has been received. Our team will contact you shortly!
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-blue-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 space-y-6 border-2 border-yellow-400/40">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-yellow-400/30 rounded-lg bg-blue-700/50 text-white placeholder-blue-200 focus:outline-none focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="0712345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Home Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Your address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* CTA Button */}
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Schedule Free Consultation
            </button>

            <p className="text-sm text-gray-600 text-center">
              We'll contact you to confirm your appointment
            </p>
          </form>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Site Assessment',
                desc: 'Expert evaluation of your roof and energy needs'
              },
              {
                title: 'Savings Estimate',
                desc: 'Personalized calculation of your potential savings'
              },
              {
                title: 'Zero Pressure',
                desc: 'No obligation - just helpful information'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Have Questions?</h2>
          <div className="space-y-4">
            <p className="text-xl text-gray-600">
              <span className="font-semibold">Phone:</span> 0734226150
            </p>
            <p className="text-xl text-gray-600">
              <span className="font-semibold">Email:</span> hello@daylightsolar.com.au
            </p>
          </div>
        </div>
      </section>
    </>
  );
 
}
