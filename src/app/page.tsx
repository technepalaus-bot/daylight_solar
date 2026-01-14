'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap, Leaf, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const SolarSystemAnimation = dynamic(() => import('@/components/SolarSystemAnimation'), { ssr: false });
const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Davis",
      location: "Sydney, NSW",
      initials: "JD",
      rating: 5,
      text: "The team at Daylight Solar was incredibly professional. My installation was completed in one day and I've already saved over $2000 in electricity bills in the first 6 months!",
      colors: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-200 hover:border-yellow-500",
      bgHover: "from-yellow-50 to-orange-50",
      textHover: "group-hover:text-yellow-600",
      lineColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      location: "Melbourne, VIC",
      initials: "SM",
      rating: 5,
      text: "I was skeptical at first, but the free consultation and detailed ROI analysis convinced me. Now my energy bills are minimal and I'm generating clean energy!",
      colors: "from-blue-400 to-cyan-500",
      borderColor: "border-blue-200 hover:border-blue-500",
      bgHover: "from-blue-50 to-cyan-50",
      textHover: "group-hover:text-blue-600",
      lineColor: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      name: "Michael Lee",
      location: "Brisbane, QLD",
      initials: "ML",
      rating: 5,
      text: "Best investment I've made for my home! The quality is outstanding and customer support is exceptional. Highly recommend Daylight Solar to everyone.",
      colors: "from-green-400 to-emerald-500",
      borderColor: "border-green-200 hover:border-green-500",
      bgHover: "from-green-50 to-emerald-50",
      textHover: "group-hover:text-green-600",
      lineColor: "from-green-400 to-emerald-500"
    }
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white min-h-screen flex items-center mt-20">
        {/* Yellow/Orange overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                Power Your <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-100 leading-relaxed">
                Harness the sun's energy with cutting-edge solar solutions. Save money, reduce emissions, and gain energy independence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">Save up to 80% on electricity bills</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">25+ year system warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">Government subsidies available</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/consultant" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
                Get Free Consultation
              </Link>
              <Link href="/solar" className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                Explore Products
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SolarPanelRotating3D />
          </div>
        </div>
      </section>

      {/* 3D Solar System Animation Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/12 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Our Solar Solution
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            Harness the power of the sun with our advanced solar technology
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <SolarSystemAnimation />
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-yellow-400/12 -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Why Choose <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Solar?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of Australians who are saving money and helping the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-blue-800/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-yellow-400/40 hover:border-yellow-300 animate-fade-in-up animation-delay-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl shadow-xl group-hover:scale-125 group-hover:rotate-12 transition duration-300">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-300 transition">Save 50-80%</h3>
              <p className="text-blue-100 text-lg leading-relaxed group-hover:text-white transition">On your electricity bills, starting immediately and growing with time.</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"></div>
            </div>

            <div className="group relative p-8 bg-blue-800/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-yellow-400/40 hover:border-yellow-300 animate-fade-in-up animation-delay-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-4xl shadow-xl group-hover:scale-125 group-hover:rotate-12 transition duration-300">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-300 transition">Help the Planet</h3>
              <p className="text-blue-100 text-lg leading-relaxed group-hover:text-white transition">Reduce your carbon footprint with clean, renewable energy every day.</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"></div>
            </div>

            <div className="group relative p-8 bg-blue-800/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-yellow-400/40 hover:border-yellow-300 animate-fade-in-up animation-delay-2000 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-4xl shadow-xl group-hover:scale-125 group-hover:rotate-12 transition duration-300">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition">Increase Home Value</h3>
              <p className="text-blue-100 text-lg leading-relaxed group-hover:text-white transition">Solar systems add 4-5% to your property value instantly.</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/12 via-transparent to-orange-400/15 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white drop-shadow-lg">What Makes Us <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Different</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="group relative flex gap-6 items-start p-8 rounded-2xl bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl group-hover:scale-110 transition duration-300 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition">Premium Quality</h3>
                <p className="text-blue-100 text-lg group-hover:text-white transition">Industry-leading solar panels with 25+ year warranties from top manufacturers globally.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative flex gap-6 items-start p-8 rounded-2xl bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl group-hover:scale-110 transition duration-300 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">Fast ROI</h3>
                <p className="text-blue-100 text-lg group-hover:text-white transition">Most customers see return on investment within 5-7 years with continued savings beyond.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative flex gap-6 items-start p-8 rounded-2xl bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl group-hover:scale-110 transition duration-300 shadow-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition">Expert Installation</h3>
                <p className="text-blue-100 text-lg group-hover:text-white transition">SAA-accredited installers ensure perfect setup and maximum system performance.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative flex gap-6 items-start p-8 rounded-2xl bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition duration-300 -z-10"></div>
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl group-hover:scale-110 transition duration-300 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition">Government Support</h3>
                <p className="text-blue-100 text-lg group-hover:text-white transition">Access federal subsidies and flexible financing with zero interest options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Modern Cards */}
      <section className="py-24 px-4 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-transparent to-yellow-400/12 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Our <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Customized solar systems for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/residential" className="group relative overflow-hidden rounded-3xl border-2 border-gray-300 hover:border-blue-500 transition duration-300 transform hover:-translate-y-3 hover:shadow-2xl animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <div className="relative z-10 bg-gradient-to-br from-white to-blue-50 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 p-8 md:p-12 min-h-72 flex flex-col justify-between transition duration-300">
                <div>
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-12 transition duration-300 shadow-lg">☀️</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-white transition duration-300">
                    Residential Solar
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 text-lg transition duration-300">
                    Custom solar systems designed for your home's unique energy needs and budget.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 group-hover:text-white group-hover:gap-3 transition duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            <Link href="/commercial" className="group relative overflow-hidden rounded-3xl border-2 border-gray-300 hover:border-orange-500 transition duration-300 transform hover:-translate-y-3 hover:shadow-2xl animate-fade-in-up animation-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
              <div className="relative z-10 bg-gradient-to-br from-white to-orange-50 group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-red-500 p-8 md:p-12 min-h-72 flex flex-col justify-between transition duration-300">
                <div>
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-12 transition duration-300 shadow-lg">⚡</div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-white transition duration-300">
                    Commercial Solar
                  </h3>
                  <p className="text-gray-600 group-hover:text-orange-100 text-lg transition duration-300">
                    Scale your business with ROI-focused solar solutions and massive energy savings.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold text-orange-600 group-hover:text-white group-hover:gap-3 transition duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/15 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">5000+</p>
              <p className="text-lg text-blue-100">Happy Customers</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">15MWh</p>
              <p className="text-lg text-blue-100">Power Installed</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">12+</p>
              <p className="text-lg text-blue-100">Years Experience</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">80%</p>
              <p className="text-lg text-blue-100">Avg Bill Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/12 via-transparent to-orange-400/15 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              What Our Customers <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of happy customers saving money and protecting the planet
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-3xl mx-auto">
            {/* Display current testimonial with larger format */}
            <div key={testimonials[currentTestimonial].id} className="group bg-white p-10 rounded-3xl shadow-xl border-2 transition-all duration-500 relative overflow-hidden mb-8">
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].bgHover} opacity-0 group-hover:opacity-100 transition duration-300 -z-10`}></div>
              
              {/* Customer Image Placeholder */}
              <div className="flex gap-6 mb-6 items-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${testimonials[currentTestimonial].colors} rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition duration-300 shadow-lg flex-shrink-0`}>
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <h3 className={`font-bold text-2xl text-gray-900 ${testimonials[currentTestimonial].textHover} transition`}>
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-lg">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Bottom Line */}
              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${testimonials[currentTestimonial].lineColor} transition-all duration-300`}></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Show all testimonials option */}
            {/* Removed: Grid display of all testimonials as slider already shows them */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-tl from-blue-900 via-blue-800 to-blue-700">
        {/* Yellow/Orange overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-yellow-400/15 -z-10"></div>
        
        {/* Animated background elements - logo colors */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 -z-10 animate-pulse animation-delay-2000"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-2 border-yellow-400/40 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10 rounded-3xl"></div>
            
            <div className="text-center space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                  Ready to <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Go Solar?</span>
                </h2>
                <div className="flex justify-center gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"></div>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full shadow-lg"></div>
                  <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"></div>
                </div>
                <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  Get your <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">free, personalized</span> solar assessment today.
                </p>
                <p className="text-lg text-blue-100 drop-shadow-md max-w-2xl mx-auto font-semibold">
                  <span className="text-yellow-300">✓ No obligation</span> • <span className="text-yellow-300">✓ No hidden fees</span> • <span className="text-yellow-300">✓ Expert guidance</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 pt-6">
                <Link href="/consultant" className="group relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-110 transition duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full -z-10"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Get Free Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                  </span>
                </Link>
                <Link href="/contact" className="group px-12 py-4 border-2 border-yellow-400 text-white font-bold text-lg rounded-full hover:bg-yellow-400 hover:text-blue-900 transition duration-300 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105">
                  Contact Us
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-yellow-400/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">5000+</div>
                  <p className="text-blue-100 text-sm">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">12+</div>
                  <p className="text-blue-100 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">15MWh</div>
                  <p className="text-blue-100 text-sm">Power Installed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
